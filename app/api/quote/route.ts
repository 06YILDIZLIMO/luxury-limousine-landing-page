import { NextResponse } from 'next/server'
import twilio from 'twilio'

const getTwilioClient = () => {
  const accountSid = process.env.TWILIO_ACCOUNT_SID
  const authToken = process.env.TWILIO_AUTH_TOKEN
  if (!accountSid || !authToken) {
    throw new Error('Twilio credentials not configured')
  }
  return twilio(accountSid, authToken)
}

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const {
      name,
      email,
      phone,
      serviceType,
      vehicleType,
      pickupLocation,
      dropoffLocation,
      date,
      time,
      passengers,
      specialRequests,
    } = body

    if (!name || !phone || !serviceType) {
      return NextResponse.json(
        { error: 'Name, phone, and service type are required' },
        { status: 400 }
      )
    }

    const serviceNames: Record<string, string> = {
      'airport': 'Airport Transfer',
      'hourly': 'Hourly Rental',
      'wedding': 'Wedding Package',
      'city-tour': 'City Tour',
      'point-to-point': 'Point-to-Point',
      'corporate': 'Corporate Event',
      'special': 'Special Occasion',
    }

    const serviceName = serviceNames[serviceType] || serviceType

    // Send SMS to owner
    try {
      const client = getTwilioClient()
      const ownerPhone = process.env.OWNER_PHONE_NUMBER || '+17053911905'
      const fromPhone = process.env.TWILIO_PHONE_NUMBER || ''

      const smsMessage = `🚗 NEW QUOTE REQUEST - 06YILDIZ LIMO

👤 Name: ${name}
📱 Phone: ${phone}
📧 Email: ${email || 'Not provided'}

🎯 Service: ${serviceName}
🚙 Vehicle: ${vehicleType || 'Not specified'}
👥 Passengers: ${passengers || 'Not specified'}

📍 Pickup: ${pickupLocation || 'Not specified'}
📍 Drop-off: ${dropoffLocation || 'Not specified'}
📅 Date: ${date || 'Not specified'}
⏰ Time: ${time || 'Not specified'}

💬 Notes: ${specialRequests || 'None'}

⚡ CALL BACK: ${phone}`

      await client.messages.create({
        body: smsMessage,
        from: fromPhone,
        to: ownerPhone,
      })

      console.log('Quote SMS sent to owner successfully')
    } catch (smsError) {
      console.error('Error sending SMS:', smsError)
    }

    // Also try WhatsApp
    try {
      const client = getTwilioClient()
      await client.messages.create({
        from: 'whatsapp:+14155238886',
        body: `🚗 *NEW QUOTE REQUEST*\n\n👤 *${name}*\n📱 ${phone}\n📧 ${email || 'N/A'}\n\n🎯 *${serviceName}*\n🚙 ${vehicleType || 'N/A'}\n📅 ${date || 'N/A'} at ${time || 'N/A'}\n📍 ${pickupLocation || 'N/A'} → ${dropoffLocation || 'N/A'}\n👥 ${passengers || 'N/A'} passengers\n\n💬 ${specialRequests || 'No special requests'}`,
        to: 'whatsapp:+16475351905',
      })
    } catch (waError) {
      console.error('WhatsApp error:', waError)
    }

    return NextResponse.json({
      success: true,
      message: 'Your quote request has been sent! We will call you back within 30 minutes.',
    })
  } catch (error) {
    console.error('Quote request error:', error)
    return NextResponse.json(
      { error: 'Failed to send request. Please call us at +1 (709) 300-9006' },
      { status: 500 }
    )
  }
}
