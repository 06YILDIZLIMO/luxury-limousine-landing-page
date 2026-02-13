import { NextRequest, NextResponse } from 'next/server'

// ElevenLabs API configuration
const ELEVENLABS_API_KEY = process.env.ELEVENLABS_API_KEY
const ELEVENLABS_AGENT_ID = process.env.ELEVENLABS_AGENT_ID || 'agent_0001kh8zyfnkf55a1q355vb3khzq'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { agent_id } = body

    if (!ELEVENLABS_API_KEY) {
      return NextResponse.json(
        { error: 'ELEVENLABS_API_KEY not configured' },
        { status: 500 }
      )
    }

    const targetAgentId = agent_id || ELEVENLABS_AGENT_ID

    const response = await fetch(
      `https://api.elevenlabs.io/v1/convai/conversational_ai/signed-url`,
      {
        method: 'GET',
        headers: {
          'xi-api-key': ELEVENLABS_API_KEY,
          'agent_id': targetAgentId,
        },
      }
    )

    if (!response.ok) {
      const error = await response.text()
      console.error('ElevenLabs API error:', error)
      return NextResponse.json(
        { error: 'Failed to get signed URL' },
        { status: response.status }
      )
    }

    const data = await response.json()
    
    return NextResponse.json({
      signed_url: data.signed_url,
      agent_id: targetAgentId,
    })
  } catch (error) {
    console.error('Error getting signed URL:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

export async function OPTIONS() {
  return new NextResponse(null, {
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    },
  })
}
