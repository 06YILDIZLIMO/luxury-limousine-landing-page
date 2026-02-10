import { NextRequest, NextResponse } from 'next/server';
import twilio from 'twilio';
import { getOrCreateSession, addMessage, getConversationHistory } from '@/lib/conversation';
import { getAIResponse } from '@/lib/openai';

const VoiceResponse = twilio.twiml.VoiceResponse;

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    const callSid = formData.get('CallSid') as string;
    const fromNumber = formData.get('From') as string;
    const speechResult = formData.get('SpeechResult') as string;
    const Digits = formData.get('Digits') as string;

    console.log(`Voice webhook received - CallSid: ${callSid}, From: ${fromNumber}`);

    // Get or create conversation session
    const session = getOrCreateSession(callSid, fromNumber);

    // Get conversation history
    const history = getConversationHistory(callSid);

    // Initialize response
    const twiml = new VoiceResponse();
    
    // Start gathering input with longer timeout for better speech recognition
    const gather = twiml.gather({
      input: 'speech dtmf',
      timeout: 5,
      speechTimeout: 'auto',
      action: '/api/twilio/voice',
      method: 'POST',
      enhanced: true,
    });

    // Get AI response
    let aiResponse: string;

    if (history.length === 0) {
      // First interaction - greeting
      aiResponse = `Welcome to Yildiz Limousine, your premium luxury transportation service! I'm your AI assistant, here to help you with reservations, pricing, and any questions. You can say booking for reservations, prices for pricing information, fleet for our luxury vehicles, availability for current availability, or agent to speak with a live representative. How may I assist you today?`;
    } else if (speechResult) {
      // User spoke something
      addMessage(callSid, 'user', speechResult);
      const updatedHistory = getConversationHistory(callSid);
      aiResponse = await getAIResponse(updatedHistory);
      addMessage(callSid, 'assistant', aiResponse);
    } else if (Digits) {
      // User pressed digits
      const digitResponse = `You pressed ${Digits}`;
      addMessage(callSid, 'user', digitResponse);
      const updatedHistory = getConversationHistory(callSid);
      aiResponse = await getAIResponse(updatedHistory);
      addMessage(callSid, 'assistant', aiResponse);
    } else {
      // No input, ask again with helpful suggestions
      aiResponse = `I'm sorry, I didn't catch that. Please say booking for reservations, prices for pricing information, fleet for our luxury vehicles, availability, or agent to speak with a live representative.`;
    }

    // Set voice properties
    gather.say({
      voice: 'Polly.Joanna-Neural',
    }, aiResponse);

    // If no speech input, redirect back for more input
    twiml.redirect({
      method: 'POST',
    }, '/api/twilio/voice');

    return new NextResponse(twiml.toString(), {
      headers: {
        'Content-Type': 'text/xml',
      },
    });

  } catch (error) {
    console.error('Voice API Error:', error);
    
    const twiml = new VoiceResponse();
    twiml.say({
      voice: 'Polly.Joanna-Neural',
    }, "I'm sorry, we're experiencing technical difficulties. Please try again later or leave a message.");
    
    return new NextResponse(twiml.toString(), {
      headers: {
        'Content-Type': 'text/xml',
      },
    });
  }
}

