import crypto from 'crypto'

// Facebook Conversions API Configuration
const FACEBOOK_API_VERSION = 'v21.0'
const FACEBOOK_PIXEL_ID = process.env.NEXT_PUBLIC_FACEBOOK_PIXEL_ID
const CONVERSIONS_API_TOKEN = process.env.FACEBOOK_CONVERSIONS_API_TOKEN
const TEST_EVENT_CODE = process.env.FACEBOOK_CONVERSIONS_API_TEST_CODE

interface UserData {
  email?: string
  phone?: string
  firstName?: string
  lastName?: string
  city?: string
  state?: string
  zip?: string
  country?: string
  externalId?: string
  clientIpAddress?: string
  clientUserAgent?: string
  fbc?: string // Facebook click ID
  fbp?: string // Facebook browser ID
}

interface CustomData {
  value?: number
  currency?: string
  content_name?: string
  content_category?: string
  content_ids?: string[]
  content_type?: string
  num_items?: number
  transaction_id?: string
  [key: string]: any
}

interface ConversionEvent {
  event_name: string
  event_time: number
  event_id?: string
  event_source_url: string
  action_source: 'website' | 'email' | 'app' | 'phone_call' | 'chat' | 'physical_store' | 'system_generated' | 'other'
  user_data: UserData
  custom_data?: CustomData
  opt_out?: boolean
}

// Hash user data for privacy (SHA-256)
function hashData(data: string | undefined): string | undefined {
  if (!data) return undefined
  return crypto
    .createHash('sha256')
    .update(data.toLowerCase().trim())
    .digest('hex')
}

// Normalize phone number (remove non-digits, keep country code)
function normalizePhone(phone: string | undefined): string | undefined {
  if (!phone) return undefined
  // Remove all non-digit characters
  const digits = phone.replace(/\D/g, '')
  // If starts with 1 (North America), keep it; otherwise assume it's already formatted
  return digits.startsWith('1') ? digits : `1${digits}`
}

// Prepare user data with hashing
export function prepareUserData(userData: Partial<UserData>): UserData {
  const normalized: UserData = {}

  if (userData.email) {
    normalized.email = hashData(userData.email)
  }

  if (userData.phone) {
    const normalizedPhone = normalizePhone(userData.phone)
    normalized.phone = hashData(normalizedPhone)
  }

  if (userData.firstName) {
    normalized.firstName = hashData(userData.firstName)
  }

  if (userData.lastName) {
    normalized.lastName = hashData(userData.lastName)
  }

  if (userData.city) {
    normalized.city = hashData(userData.city)
  }

  if (userData.state) {
    normalized.state = hashData(userData.state)
  }

  if (userData.zip) {
    normalized.zip = hashData(userData.zip)
  }

  if (userData.country) {
    normalized.country = hashData(userData.country)
  }

  // Non-hashed fields
  if (userData.externalId) {
    normalized.externalId = userData.externalId
  }

  if (userData.clientIpAddress) {
    normalized.clientIpAddress = userData.clientIpAddress
  }

  if (userData.clientUserAgent) {
    normalized.clientUserAgent = userData.clientUserAgent
  }

  if (userData.fbc) {
    normalized.fbc = userData.fbc
  }

  if (userData.fbp) {
    normalized.fbp = userData.fbp
  }

  return normalized
}

// Send event to Facebook Conversions API
export async function sendConversionEvent(event: ConversionEvent): Promise<{
  success: boolean
  eventId?: string
  error?: string
  eventsReceived?: number
  messagesReceived?: number
  fbtrace_id?: string
}> {
  if (!FACEBOOK_PIXEL_ID || !CONVERSIONS_API_TOKEN) {
    console.error('Facebook Conversions API credentials not configured')
    return {
      success: false,
      error: 'Facebook Conversions API credentials not configured'
    }
  }

  try {
    const url = `https://graph.facebook.com/${FACEBOOK_API_VERSION}/${FACEBOOK_PIXEL_ID}/events`
    
    const payload = {
      data: [event],
      test_event_code: TEST_EVENT_CODE, // Optional: for testing in Events Manager
      access_token: CONVERSIONS_API_TOKEN,
    }

    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    })

    const result = await response.json()

    if (!response.ok) {
      console.error('Facebook Conversions API Error:', result)
      return {
        success: false,
        error: result.error?.message || 'Unknown error',
      }
    }

    return {
      success: true,
      eventId: event.event_id,
      eventsReceived: result.events_received,
      messagesReceived: result.messages_received,
      fbtrace_id: result.fbtrace_id,
    }
  } catch (error) {
    console.error('Error sending conversion event:', error)
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error',
    }
  }
}

// Helper function to create a conversion event
export function createConversionEvent(
  eventName: string,
  userData: Partial<UserData>,
  customData?: CustomData,
  eventSourceUrl?: string,
  eventId?: string
): ConversionEvent {
  return {
    event_name: eventName,
    event_time: Math.floor(Date.now() / 1000),
    event_id: eventId || `${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
    event_source_url: eventSourceUrl || 'https://www.06yildizlimo.com',
    action_source: 'website',
    user_data: prepareUserData(userData),
    custom_data: customData,
  }
}

// Standard event helpers
export const ConversionEvents = {
  // Track page view
  PageView: (userData: Partial<UserData>, eventSourceUrl: string, eventId?: string) => {
    return createConversionEvent('PageView', userData, undefined, eventSourceUrl, eventId)
  },

  // Track content view (fleet, services)
  ViewContent: (
    userData: Partial<UserData>,
    customData: CustomData,
    eventSourceUrl: string,
    eventId?: string
  ) => {
    return createConversionEvent('ViewContent', userData, customData, eventSourceUrl, eventId)
  },

  // Track checkout initiation
  InitiateCheckout: (
    userData: Partial<UserData>,
    customData: CustomData,
    eventSourceUrl: string,
    eventId?: string
  ) => {
    return createConversionEvent('InitiateCheckout', userData, customData, eventSourceUrl, eventId)
  },

  // Track purchase
  Purchase: (
    userData: Partial<UserData>,
    customData: CustomData & { value: number; currency: string },
    eventSourceUrl: string,
    eventId?: string
  ) => {
    return createConversionEvent('Purchase', userData, customData, eventSourceUrl, eventId)
  },

  // Track lead
  Lead: (
    userData: Partial<UserData>,
    customData: CustomData,
    eventSourceUrl: string,
    eventId?: string
  ) => {
    return createConversionEvent('Lead', userData, customData, eventSourceUrl, eventId)
  },

  // Track contact
  Contact: (
    userData: Partial<UserData>,
    customData: CustomData,
    eventSourceUrl: string,
    eventId?: string
  ) => {
    return createConversionEvent('Contact', userData, customData, eventSourceUrl, eventId)
  },
}

// Get client IP from request headers
export function getClientIp(request: Request): string | undefined {
  const forwarded = request.headers.get('x-forwarded-for')
  const realIp = request.headers.get('x-real-ip')
  
  if (forwarded) {
    return forwarded.split(',')[0].trim()
  }
  
  return realIp || undefined
}

// Get user agent from request headers
export function getUserAgent(request: Request): string | undefined {
  return request.headers.get('user-agent') || undefined
}
