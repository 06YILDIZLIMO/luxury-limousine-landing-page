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
    const { name, email, phone, service, message } = body

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Name, email, and message are required' },
        { status: 400 }
      )
    }

    // Send SMS notification to owner
    try {
      const client = getTwilioClient()
      const ownerPhone = process.env.OWNER_PHONE_NUMBER || '+17053911905'
      const fromPhone = process.env.TWILIO_PHONE_NUMBER || ''

      const smsMessage = `🚗 NEW CONTACT REQUEST - 06YILDIZ LIMO

👤 Name: ${name}
📧 Email: ${email}
📱 Phone: ${phone || 'Not provided'}
🎯 Service: ${service || 'General Inquiry'}

💬 Message:
${message}

Reply to: ${email}
Call: ${phone || 'N/A'}`

      await client.messages.create({
        body: smsMessage,
        from: fromPhone,
        to: ownerPhone,
      })

      console.log('Contact SMS sent to owner successfully')
    } catch (smsError) {
      console.error('Error sending SMS:', smsError)
      // Don't fail if SMS fails - still return success
    }

    // Also try WhatsApp notification
    try {
      const client = getTwilioClient()
      await client.messages.create({
        from: 'whatsapp:+14155238886',
        body: `🚗 *NEW CONTACT - 06YILDIZ LIMO*\n\n👤 *${name}*\n📧 ${email}\n📱 ${phone || 'N/A'}\n🎯 ${service || 'General Inquiry'}\n\n💬 ${message}`,
        to: 'whatsapp:+16475351905',
      })
      console.log('WhatsApp notification sent successfully')
    } catch (waError) {
      console.error('WhatsApp error:', waError)
    }

    return NextResponse.json({
      success: true,
      message: 'Your message has been sent successfully. We will contact you shortly!',
    })
  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json(
      { error: 'Failed to send message. Please try again or call us directly.' },
      { status: 500 }
    )
  }
}
