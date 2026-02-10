import VoiceResponse from 'twilio/lib/twiml/VoiceResponse';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  const formData = await request.formData();
  const digits = formData.get('Digits') as string;
  
  const voiceResponse = new VoiceResponse();
  
  switch (digits) {
    case '1':
      voiceResponse.say({
        voice: 'alice',
      }, 'Thank you for choosing reservations. Please visit our website at www.06yildizlimo.com to book your ride online. An agent will call you back shortly. Goodbye.');
      break;
      
    case '2':
      voiceResponse.say({
        voice: 'alice',
      }, 'Thank you for calling customer service. Our office is open 24 hours. Please leave a message after the tone or visit our website. Goodbye.');
      break;
      
    case '3':
      voiceResponse.say({
        voice: 'alice',
      }, 'Oh Six Yildiz Limo offers premium transportation services including airport transfers, city tours, corporate travel, and special events. We have a fleet of luxury vehicles including Rolls Royce, Mercedes S-Class, Cadillac Escalade, and Mercedes Sprinter vans. Visit our website to see our full range of services. Goodbye.');
      break;
      
    default:
      voiceResponse.say({
        voice: 'alice',
      }, 'Invalid selection. Goodbye.');
  }
  
  const twiml = voiceResponse.toString();
  
  return new NextResponse(twiml, {
    headers: {
      'Content-Type': 'text/xml',
    },
  });
}
