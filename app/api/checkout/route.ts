import { NextResponse } from 'next/server'
import Stripe from 'stripe'
import twilio from 'twilio'

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || '', {
  apiVersion: '2024-06-20',
})

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = twilio(accountSid, authToken);

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { service, amount, customerName, customerEmail, customerPhone, pickupLocation, dropoffLocation, date, time, vehicleType } = body

    // Create line items based on service type
    const serviceNames: Record<string, string> = {
      'airport': 'Airport Transfer - Peterborough to Toronto',
      'hourly': 'Luxury Limo Hourly Rental',
      'wedding': 'Wedding Day Luxury Transport',
      'city-tour': 'City Tour',
      'point-to-point': 'Point-to-Point Transfer',
    }

    const serviceName = serviceNames[service] || 'Limo Reservation'

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [
        {
          price_data: {
            currency: 'cad',
            product_data: {
              name: serviceName,
              description: `${pickupLocation} → ${dropoffLocation}\nDate: ${date} at ${time}\nVehicle: ${vehicleType}\nCustomer: ${customerName}`,
            },
            unit_amount: Math.round(amount * 100), // Convert to cents
          },
          quantity: 1,
        },
      ],
      mode: 'payment',
      ui_mode: 'embedded',
      return_url: `${process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000'}/booking/success?session_id={CHECKOUT_SESSION_ID}`,
      metadata: {
        customerName,
        customerEmail,
        customerPhone,
        pickupLocation,
        dropoffLocation,
        date,
        time,
        vehicleType,
        serviceType: service,
      },
    })

    // Send WhatsApp notification
    try {
      await client.messages.create({
        from: 'whatsapp:+14155238886',
        contentSid: 'HXb5b62575e6e4ff6129ad7c8efe1f983e',
        contentVariables: JSON.stringify({
          "1": date, // Müşterinin seçtiği tarih
          "2": time  // Müşterinin seçtiği saat
        }),
        to: 'whatsapp:+16475351905'
      });
      console.log('WhatsApp notification sent successfully');
    } catch (twilioError) {
      console.error('Error sending WhatsApp notification:', twilioError);
      // Don't fail the checkout if WhatsApp fails
    }

    return NextResponse.json({ clientSecret: session.client_secret })
  } catch (error) {
    console.error('Error creating checkout session:', error)
    return NextResponse.json(
      { error: 'Error creating checkout session' },
      { status: 500 }
    )
  }
}
