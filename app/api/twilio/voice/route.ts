import { NextRequest, NextResponse } from 'next/server'

const TWILIO_ACCOUNT_SID = process.env.TWILIO_ACCOUNT_SID
const TWILIO_AUTH_TOKEN = process.env.TWILIO_AUTH_TOKEN
const TWILIO_PHONE_NUMBER = process.env.TWILIO_PHONE_NUMBER
const AI_PHONE_NUMBER = process.env.AI_PHONE_NUMBER

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData()
    const from = formData.get('From') as string
    const to = formData.get('To') as string

    // Basic TwiML response for incoming call
    const twiml = `<?xml version="1.0" encoding="UTF-8"?>
<Response>
  <Say voice="alice">
    Welcome to Yildiz Limo. Your premium limousine service. 
    Connecting you to our AI assistant for reservations and inquiries.
  </Say>
  <Dial>
    <Number url="/api/twilio/ai-voice">
      ${AI_PHONE_NUMBER || '+16475351905'}
    </Number>
  </Dial>
</Response>`

    return new NextResponse(twiml, {
      headers: {
        'Content-Type': 'text/xml',
      },
    })
  } catch (error) {
    console.error('Voice API error:', error)
    
    const errorTwiml = `<?xml version="1.0" encoding="UTF-8"?>
<Response>
  <Say voice="alice">
    We're sorry, but we're unable to connect your call at this time. 
    Please try again later or visit our website at 06yildizlimo.com
  </Say>
</Response>`

    return new NextResponse(errorTwiml, {
      headers: {
        'Content-Type': 'text/xml',
      },
    })
  }
}

export async function GET() {
  // Health check endpoint
  return NextResponse.json({
    status: 'ok',
    message: 'Twilio Voice API is running',
    config: {
      hasAccountSid: !!TWILIO_ACCOUNT_SID,
      hasAuthToken: !!TWILIO_AUTH_TOKEN,
      hasPhoneNumber: !!TWILIO_PHONE_NUMBER,
      aiPhoneNumber: AI_PHONE_NUMBER,
    }
  })
}

