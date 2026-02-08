import { NextResponse } from 'next/server'
import Stripe from 'stripe'

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || '', {
  apiVersion: '2024-06-20',
})

export async function GET(request: Request) {
  try {
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
    return NextResponse.json(
      { error: 'Error retrieving checkout session' },
      { status: 500 }
    )
  }
}
