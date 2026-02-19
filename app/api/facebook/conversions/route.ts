import { NextResponse } from 'next/server'
import { sendConversionEvent, getClientIp, getUserAgent } from '@/lib/facebook-conversions-api'

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { event, userData, customData, eventSourceUrl, eventId } = body

    // Get client information from request headers
    const clientIpAddress = getClientIp(request)
    const clientUserAgent = getUserAgent(request)

    // Prepare the conversion event
    const conversionEvent = {
      event_name: event,
      event_time: Math.floor(Date.now() / 1000),
      event_id: eventId,
      event_source_url: eventSourceUrl || 'https://www.06yildizlimo.com',
      action_source: 'website' as const,
      user_data: {
        ...userData,
        client_ip_address: clientIpAddress,
        client_user_agent: clientUserAgent,
      },
      custom_data: customData,
    }

    // Send event to Facebook Conversions API
    const result = await sendConversionEvent(conversionEvent)

    if (result.success) {
      return NextResponse.json({
        success: true,
        eventId: result.eventId,
        eventsReceived: result.eventsReceived,
        messagesReceived: result.messagesReceived,
        fbtrace_id: result.fbtrace_id,
      })
    } else {
      return NextResponse.json(
        { success: false, error: result.error },
        { status: 400 }
      )
    }
  } catch (error) {
    console.error('Error in Facebook Conversions API route:', error)
    return NextResponse.json(
      { success: false, error: 'Internal server error' },
      { status: 500 }
    )
  }
}
