"use client"

import { useState, useEffect } from 'react'
import type { Stripe } from '@stripe/stripe-js'
import { Elements, EmbeddedCheckoutProvider, EmbeddedCheckout } from '@stripe/react-stripe-js'
import { Lock, CreditCard } from 'lucide-react'

// Lazy singleton — Stripe JS is NOT loaded at module level.
// It is only fetched when this component first mounts (i.e. when the user
// reaches the payment step), saving ~228 KiB on initial page load.
let stripePromise: Promise<Stripe | null> | null = null

function getStripePromise() {
  if (!stripePromise) {
    const stripeKey = process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
    if (stripeKey) {
      stripePromise = import('@stripe/stripe-js').then(({ loadStripe }) =>
        loadStripe(stripeKey)
      )
    }
  }
  return stripePromise
}

interface CheckoutFormProps {
  clientSecret: string
  onSuccess?: () => void
  onCancel?: () => void
}

export function StripeCheckoutForm({ clientSecret, onSuccess, onCancel }: CheckoutFormProps) {
  const [loading, setLoading] = useState(false)
  // Initialise Stripe lazily — only when this component mounts
  const [stripe, setStripe] = useState<Promise<Stripe | null> | null>(null)

  useEffect(() => {
    setStripe(getStripePromise())
  }, [])

  const options = {
    clientSecret,
    appearance: {
      theme: 'night' as const,
      variables: {
        colorPrimary: '#d4af37',
        colorBackground: '#1a1a1a',
        colorText: '#f5f5f5',
        colorDanger: '#ef4444',
        fontFamily: 'Inter, system-ui, sans-serif',
        borderRadius: '8px',
      },
    },
  }

  return (
    <div className="bg-card border border-gold/30 rounded-xl p-6">
      <div className="flex items-center gap-2 mb-6">
        <Lock className="w-5 h-5 text-gold" />
        <span className="text-foreground/70">Secure Payment</span>
        <div className="flex items-center gap-1 ml-auto">
          <CreditCard className="w-5 h-5 text-foreground/50" />
          <span className="text-xs text-foreground/50">Visa</span>
          <span className="text-xs text-foreground/50">Mastercard</span>
          <span className="text-xs text-foreground/50">Amex</span>
        </div>
      </div>

      <Elements stripe={stripe} options={options}>
        <EmbeddedCheckoutProvider stripe={stripe} options={options}>
          <EmbeddedCheckout />
        </EmbeddedCheckoutProvider>
      </Elements>
    </div>
  )
}

export function PaymentButton({ 
  amount, 
  onClick, 
  disabled 
}: { 
  amount: number 
  onClick: () => void
  disabled?: boolean
}) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className="w-full bg-gold hover:bg-gold/90 text-background font-semibold text-lg py-4 px-6 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
      aria-label={`Pay ${amount.toFixed(2)} CAD deposit securely`}
    >
      <Lock className="w-5 h-5" />
      Pay ${amount.toFixed(2)} CAD Deposit
    </button>
  )
}
