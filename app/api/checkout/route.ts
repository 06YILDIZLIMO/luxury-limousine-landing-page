import { NextResponse } from 'next/server'
import Stripe from 'stripe'
import twilio from 'twilio'
import { ConversionEvents, sendConversionEvent, getClientIp, getUserAgent } from '@/lib/facebook-conversions-api'

let stripeClient: Stripe | null = null

const getStripeClient = () => {
  const apiKey = process.env.STRIPE_SECRET_KEY
  if (!apiKey) {
    throw new Error('STRIPE_SECRET_KEY not configured')
  }
  if (!stripeClient) {
    stripeClient = new Stripe(apiKey, {
      apiVersion: '2024-06-20',
    })
  }
  return stripeClient
}

// Lazy initialization of Twilio client to avoid build-time errors
const getTwilioClient = () => {
  const accountSid = process.env.TWILIO_ACCOUNT_SID;
  const authToken = process.env.TWILIO_AUTH_TOKEN;
  if (!accountSid || !authToken) {
    throw new Error('Twilio credentials not configured');
  }
  return twilio(accountSid, authToken);
}

export async function POST(request: Request) {
  try {
    const stripe = getStripeClient()

    const body = await request.json()
    const { service, amount, customerName, customerEmail, customerPhone, pickupLocation, dropoffLocation, date, time, vehicleType, eventId } = body

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

    // Send Facebook Conversions API event - InitiateCheckout
    try {
      const clientIp = getClientIp(request)
      const userAgent = getUserAgent(request)
      
      const conversionEvent = ConversionEvents.InitiateCheckout(
        {
          email: customerEmail,
          phone: customerPhone,
          firstName: customerName.split(' ')[0],
          lastName: customerName.split(' ').slice(1).join(' '),
          clientIpAddress: clientIp,
          clientUserAgent: userAgent,
        },
        {
          content_ids: [service],
          content_name: serviceName,
          content_category: 'Transportation',
          value: amount,
          currency: 'cad',
          num_items: 1,
        },
        `${process.env.NEXT_PUBLIC_APP_URL || 'https://www.06yildizlimo.com'}/booking`,
        eventId
      )
      
      await sendConversionEvent(conversionEvent)
      console.log('Facebook Conversions API - InitiateCheckout event sent')
    } catch (fbError) {
      console.error('Error sending Facebook conversion event:', fbError)
      // Don't fail the checkout if Facebook tracking fails
    }

    // Send WhatsApp notification
    try {
      const client = getTwilioClient();
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

    return NextResponse.json({ 
      clientSecret: session.client_secret,
      sessionId: session.id 
    })
  } catch (error) {
    console.error('Error creating checkout session:', error)

    if (error instanceof Error && error.message === 'STRIPE_SECRET_KEY not configured') {
      return NextResponse.json(
        { error: 'Payment is not configured (missing STRIPE_SECRET_KEY).' },
        { status: 503 }
      )
    }

    if (error instanceof Error && error.message === 'Twilio credentials not configured') {
      // Checkout can still work without WhatsApp, but if it throws here,
      // treat it as a temporary service issue.
      return NextResponse.json(
        { error: 'Messaging is not configured (missing Twilio credentials).' },
        { status: 503 }
      )
    }

    return NextResponse.json(
      { error: 'Error creating checkout session' },
      { status: 500 }
    )
  }
}
