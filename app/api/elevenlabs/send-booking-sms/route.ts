import { NextRequest, NextResponse } from 'next/server';
import twilio from 'twilio';

// Twilio configuration
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const twilioPhoneNumber = process.env.TWILIO_PHONE_NUMBER;
const ownerPhoneNumber = process.env.OWNER_PHONE_NUMBER || '+17093009006'; // Your phone number

export async function POST(request: NextRequest) {
  try {
    // Parse the booking details from ElevenLabs
    const body = await request.json();
    
    const {
      customer_name,
      pickup_date,
      pickup_location,
      dropoff_location,
      service_type,
      vehicle_preference,
      passenger_count,
      phone_number,
      special_requests
    } = body;

    // Validate required fields
    if (!customer_name || !pickup_date || !pickup_location || !phone_number) {
      return NextResponse.json(
        { 
          success: false, 
          error: 'Missing required booking information' 
        },
        { status: 400 }
      );
    }

    // Check Twilio credentials
    if (!accountSid || !authToken || !twilioPhoneNumber) {
      console.error('Missing Twilio credentials');
      return NextResponse.json(
        { 
          success: false, 
          error: 'SMS service not configured' 
        },
        { status: 500 }
      );
    }

    // Initialize Twilio client
    const client = twilio(accountSid, authToken);

    // Format the SMS message
    const message = `
🚗 NEW BOOKING - 06YILDIZ LIMO

👤 Customer: ${customer_name}
📞 Phone: ${phone_number}

📅 Pickup Date: ${pickup_date}
📍 Pickup: ${pickup_location}
${dropoff_location ? `🎯 Dropoff: ${dropoff_location}` : ''}

${service_type ? `🎫 Service: ${service_type}` : ''}
${vehicle_preference ? `🚙 Vehicle: ${vehicle_preference}` : ''}
${passenger_count ? `👥 Passengers: ${passenger_count}` : ''}

${special_requests ? `📝 Notes: ${special_requests}` : ''}

---
Respond ASAP to confirm booking!
    `.trim();

    // Send SMS via Twilio
    const smsResponse = await client.messages.create({
      body: message,
      from: twilioPhoneNumber,
      to: ownerPhoneNumber
    });

    console.log('SMS sent successfully:', smsResponse.sid);

    // Return success response to ElevenLabs
    return NextResponse.json({
      success: true,
      message: 'Booking details sent successfully',
      sms_sid: smsResponse.sid,
      response_to_user: `Thank you ${customer_name}! I've sent your booking details to our team. You'll receive a confirmation call or text at ${phone_number} within the next few minutes. Is there anything else I can help you with?`
    });

  } catch (error: any) {
    console.error('Error sending booking SMS:', error);
    
    return NextResponse.json(
      {
        success: false,
        error: error.message || 'Failed to send booking notification',
        response_to_user: `I apologize, but I'm having trouble sending your booking details right now. Please call us directly at +1 (709) 300-9006 to complete your reservation. Can I help you with anything else?`
      },
      { status: 500 }
    );
  }
}

// Handle GET requests (for testing)
export async function GET() {
  return NextResponse.json({
    service: 'ElevenLabs Booking SMS Tool',
    status: 'active',
    endpoint: '/api/elevenlabs/send-booking-sms',
    method: 'POST',
    description: 'Sends booking details via SMS to business owner'
  });
}
