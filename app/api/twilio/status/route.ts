import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData()
    const callStatus = formData.get('CallStatus')
    const callSid = formData.get('CallSid')
    const duration = formData.get('CallDuration')

    console.log(`Twilio Call Status: ${callStatus}, SID: ${callSid}, Duration: ${duration}s`)

    // Return empty TwiML to avoid Twilio errors
    return new NextResponse('<?xml version="1.0" encoding="UTF-8"?><Response></Response>', {
      headers: {
        'Content-Type': 'text/xml',
      },
    })
  } catch (error) {
    console.error('Status API error:', error)
    
    return new NextResponse('<?xml version="1.0" encoding="UTF-8"?><Response></Response>', {
      headers: {
        'Content-Type': 'text/xml',
      },
    })
  }
}

export async function GET() {
  return NextResponse.json({
    status: 'ok',
    message: 'Twilio Status API is running'
  })
}

