import { NextResponse } from 'next/server'

type ReservationPayload = {
  name: string
  email: string
  phone?: string
  pickupLocation: string
  dropoffLocation: string
  date: string
  time?: string
  passengers?: string
  serviceType?: string
  vehicleType?: string
  specialRequests?: string
}

const HUBSPOT_BASE_URL = 'https://api.hubapi.com'

async function hubspotFetch(path: string, init: RequestInit = {}) {
  const token = process.env.HUBSPOT_ACCESS_TOKEN
  if (!token) {
    throw new Error('HUBSPOT_ACCESS_TOKEN is not configured')
  }

  const response = await fetch(`${HUBSPOT_BASE_URL}${path}`, {
    ...init,
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
      ...(init.headers || {}),
    },
    cache: 'no-store',
  })

  const text = await response.text()
  const data = text ? JSON.parse(text) : null

  if (!response.ok) {
    const message = data?.message || `HubSpot request failed: ${response.status}`
    throw new Error(message)
  }

  return data
}

async function upsertContact(payload: ReservationPayload) {
  const [firstName, ...rest] = payload.name.trim().split(' ')
  const lastName = rest.join(' ')

  const contactBody = {
    properties: {
      email: payload.email,
      firstname: firstName || payload.name,
      lastname: lastName || '',
      phone: payload.phone || '',
      lifecyclestage: 'lead',
    },
  }

  const data = await hubspotFetch('/crm/v3/objects/contacts', {
    method: 'POST',
    body: JSON.stringify(contactBody),
  })

  return data.id as string
}

async function createDeal(payload: ReservationPayload) {
  const dealName = `Reservation - ${payload.name} - ${payload.date}`
  const description = [
    'Vercel üzerinden gelen yeni rezervasyon',
    `Pickup: ${payload.pickupLocation}`,
    `Drop-off: ${payload.dropoffLocation}`,
    `Date: ${payload.date}`,
    `Time: ${payload.time || 'Not provided'}`,
    `Phone: ${payload.phone || 'Not provided'}`,
    `Passengers: ${payload.passengers || 'Not provided'}`,
    `Service Type: ${payload.serviceType || 'Not provided'}`,
    `Vehicle Type: ${payload.vehicleType || 'Not provided'}`,
    `Special Requests: ${payload.specialRequests || 'None'}`,
  ].join('\n')

  const dealBody = {
    properties: {
      dealname: dealName,
      description,
      pipeline: 'default',
      dealstage: 'appointmentscheduled',
    },
  }

  const data = await hubspotFetch('/crm/v3/objects/deals', {
    method: 'POST',
    body: JSON.stringify(dealBody),
  })

  return data.id as string
}


export async function POST(request: Request) {
  try {
    const body = (await request.json()) as ReservationPayload

    const requiredFields: Array<keyof ReservationPayload> = [
      'name',
      'email',
      'pickupLocation',
      'dropoffLocation',
      'date',
    ]

    for (const field of requiredFields) {
      if (!body[field] || String(body[field]).trim() === '') {
        return NextResponse.json(
          { success: false, error: `Missing required field: ${field}` },
          { status: 400 }
        )
      }
    }

    const contactId = await upsertContact(body)
    const dealId = await createDeal(body)

    return NextResponse.json({
      success: true,
      message: 'Reservation synced to HubSpot (contact and deal created separately)',
      data: { contactId, dealId, associated: false },
    })
  } catch (error) {
    console.error('HubSpot reservation sync error:', error)
    return NextResponse.json(
      {
        success: false,
        error: error instanceof Error ? error.message : 'Unknown error',
      },
      { status: 500 }
    )
  }
}
