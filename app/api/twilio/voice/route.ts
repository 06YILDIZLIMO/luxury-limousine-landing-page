
import VoiceResponse from 'twilio/lib/twiml/VoiceResponse';
import { NextRequest, NextResponse } from 'next/server';

const ELEVENLABS_AGENT_ID = process.env.ELEVENLABS_AGENT_ID || 'agent_0001kh8zyfnkf55a1q355vb3khzq';
const ELEVENLABS_API_KEY = process.env.ELEVENLABS_API_KEY;

function missingKeyTwiml(): string {
  const voiceResponse = new VoiceResponse();
  voiceResponse.say(
    {
      voice: 'alice',
      language: 'en-US',
    },
    'Our voice assistant is temporarily unavailable. Please call +1 709 300 9006 for assistance.'
  );
  voiceResponse.hangup();
  return voiceResponse.toString();
}

export async function POST(request: NextRequest) {
  const formData = await request.formData();
  const speechResult = formData.get('SpeechResult') as string;
  
  const voiceResponse = new VoiceResponse();

  // If ElevenLabs is not configured, return a simple voice response
  if (!ELEVENLABS_API_KEY) {
    return new NextResponse(missingKeyTwiml(), {
      headers: { 'Content-Type': 'text/xml' },
      status: 200,
    });
  }
  
  // Use ElevenLabs ConvAI for intelligent responses
  // The conversation will be handled by ElevenLabs API
  if (speechResult && speechResult.trim()) {
    // Forward to ElevenLabs ConvAI API
    
    try {
      const response = await fetch(
        `https://api.elevenlabs.io/v1/convai/conversational_ai/twilio/${ELEVENLABS_AGENT_ID}`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Authorization': `Bearer ${ELEVENLABS_API_KEY}`,
          },
          body: new URLSearchParams({
            'CallSid': String(formData.get('CallSid') || ''),
            'From': String(formData.get('From') || ''),
            'To': String(formData.get('To') || ''),
            'SpeechResult': speechResult,
          }),
        }
      );
      
      if (response.ok) {
        const twiml = await response.text();
        return new NextResponse(twiml, {
          headers: { 'Content-Type': 'text/xml' },
        });
      }
    } catch (error) {
      console.error('ElevenLabs API error:', error);
    }
  }
  
  // Initial call setup - connect to ElevenLabs
  const connect = voiceResponse.connect({
    action: `/api/twilio/voice?agent_id=${ELEVENLABS_AGENT_ID}`,
    method: 'POST',
  });
  
  connect.conversation({
    url: `https://api.elevenlabs.io/v1/convai/conversational_ai/twilio/${ELEVENLABS_AGENT_ID}`,
  });
  
  const twiml = voiceResponse.toString();
  
  return new NextResponse(twiml, {
    headers: { 'Content-Type': 'text/xml' },
  });
}

export async function GET() {
  const voiceResponse = new VoiceResponse();

  if (!ELEVENLABS_API_KEY) {
    return new NextResponse(missingKeyTwiml(), {
      headers: { 'Content-Type': 'text/xml' },
      status: 200,
    });
  }
  
  // Connect to ElevenLabs for the initial call
  const connect = voiceResponse.connect({
    action: `/api/twilio/voice?agent_id=${ELEVENLABS_AGENT_ID}`,
    method: 'POST',
  });
  
  connect.conversation({
    url: `https://api.elevenlabs.io/v1/convai/conversational_ai/twilio/${ELEVENLABS_AGENT_ID}`,
  });
  
  const twiml = voiceResponse.toString();
  
  return new NextResponse(twiml, {
    headers: { 'Content-Type': 'text/xml' },
  });
}
