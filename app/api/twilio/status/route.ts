import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    const callSid = String(formData.get('CallSid') || '');
    const callStatus = String(formData.get('CallStatus') || '');
    const callDuration = String(formData.get('CallDuration') || '');
    const timestamp = new Date().toISOString();

    console.log(`[${timestamp}] Call Status Update:`);
    console.log(`  CallSid: ${callSid}`);
    console.log(`  Status: ${callStatus}`);
    console.log(`  Duration: ${callDuration}s`);

    // Log call status for analytics
    // You can extend this to save to database

    return new NextResponse('OK', { status: 200 });

  } catch (error) {
    console.error('Status Webhook Error:', error);
    return new NextResponse('Error', { status: 500 });
  }
}

