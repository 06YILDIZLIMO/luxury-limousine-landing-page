import VoiceResponse from 'twilio/lib/twiml/VoiceResponse';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  const voiceResponse = new VoiceResponse();
  
  // Welcome message - "zero six" yerine "oh six" daha iyi çalışır
  voiceResponse.say({
    voice: 'alice',
  }, 'Welcome to Oh Six Yildiz Limo. Your premium transportation service. How may we assist you today?');
  
  // Gather user input
  const gather = voiceResponse.gather({
    numDigits: 1,
    action: '/api/twilio/voice/menu',
    method: 'POST',
  });
  
  gather.say({
    voice: 'alice',
  }, 'Press 1 for reservations. Press 2 for customer service. Press 3 for our services.');
  
  // Fallback if no input
  voiceResponse.say({
    voice: 'alice',
  }, 'We did not receive any input. Goodbye.');
  
  const twiml = voiceResponse.toString();
  
  return new NextResponse(twiml, {
    headers: {
      'Content-Type': 'text/xml',
    },
  });
}
