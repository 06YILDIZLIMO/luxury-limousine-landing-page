#!/usr/bin/env node
/**
 * Test Twilio Voice API - Run locally to verify API is working
 * Usage: node test-twilio-api.js
 */

const http = require('http');

async function testAPI() {
  console.log('🧪 Testing Twilio Voice API...\n');

  // Test the health endpoint
  const healthUrl = 'https://06yildizlimo.com/api/twilio/voice';
  
  console.log(`1. Testing: ${healthUrl}`);
  
  try {
    const response = await fetch(healthUrl, { method: 'GET' });
    const data = await response.json();
    console.log('✅ Health check response:', JSON.stringify(data, null, 2));
  } catch (error) {
    console.log('❌ Health check failed:', error.message);
  }

  console.log('\n2. Testing POST endpoint with mock Twilio data...');
  
  // Simulate Twilio webhook
  const mockFormData = new URLSearchParams();
  mockFormData.append('From', '+1234567890');
  mockFormData.append('To', '+16282000623');
  mockFormData.append('CallSid', 'CAtest123');
  
  try {
    const response = await fetch('https://06yildizlimo.com/api/twilio/voice', {
      method: 'POST',
      body: mockFormData,
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    });
    
    const contentType = response.headers.get('Content-Type');
    console.log('📄 Response Content-Type:', contentType);
    
    const text = await response.text();
    console.log('📄 TwiML Response:');
    console.log(text);
    
    if (text.includes('<Response>') && text.includes('<Say>')) {
      console.log('\n✅ TwiML response is valid!');
    } else {
      console.log('\n❌ TwiML response is invalid!');
    }
  } catch (error) {
    console.log('❌ POST test failed:', error.message);
    console.log('\n💡 Make sure your site is deployed and accessible at:');
    console.log('   https://06yildizlimo.com');
  }
}

testAPI();

