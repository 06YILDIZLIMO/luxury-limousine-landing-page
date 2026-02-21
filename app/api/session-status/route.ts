import { NextResponse } from 'next/server'
import Stripe from 'stripe'

let stripeClient: Stripe | null = null

const getStripeClient = () => {
  const apiKey = process.env.STRIPE_SECRET_KEY
  if (!apiKey) {
    throw new Error('STRIPE_SECRET_KEY not configured')
  }
  if (!stripeClient) {
    stripeClient = new Stripe(apiKey, {
      apiVersion: '2024-06-20',
    })
  }
  return stripeClient
}

export async function GET(request: Request) {
  try {
    const stripe = getStripeClient()

    const { searchParams } = new URL(request.url)
    const sessionId = searchParams.get('session_id')

    if (!sessionId) {
      return NextResponse.json(
        { error: 'Session ID is required' },
        { status: 400 }
      )
    }

    const session = await stripe.checkout.sessions.retrieve(sessionId)

    return NextResponse.json({
      status: session.status,
      customerEmail: session.customer_details?.email || '',
      customerName: session.customer_details?.name || '',
      amountTotal: session.amount_total ? session.amount_total / 100 : 0,
      metadata: session.metadata,
    })
  } catch (error) {
    console.error('Error retrieving checkout session:', error)

    if (error instanceof Error && error.message === 'STRIPE_SECRET_KEY not configured') {
      return NextResponse.json(
        { error: 'Payment is not configured (missing STRIPE_SECRET_KEY).' },
        { status: 503 }
      )
    }

    return NextResponse.json(
      { error: 'Error retrieving checkout session' },
      { status: 500 }
    )
  }
}
