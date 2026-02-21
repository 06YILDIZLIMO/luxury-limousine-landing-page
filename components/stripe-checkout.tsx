"use client"

import { useState } from 'react'
import { loadStripe } from '@stripe/stripe-js'
import { Elements, EmbeddedCheckoutProvider, EmbeddedCheckout } from '@stripe/react-stripe-js'
import { Lock, CreditCard } from 'lucide-react'

// Initialize Stripe with publishable key - only load if key exists
const stripeKey = process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
const stripePromise = stripeKey ? loadStripe(stripeKey) : null

interface CheckoutFormProps {
  clientSecret: string
  onSuccess?: () => void
  onCancel?: () => void
}

export function StripeCheckoutForm({ clientSecret, onSuccess, onCancel }: CheckoutFormProps) {
  void onSuccess
  void onCancel

  if (!stripePromise) {
    return (
      <div className="bg-card border border-gold/30 rounded-xl p-6">
        <p className="text-foreground/80">
          Payments are currently unavailable.
        </p>
      </div>
    )
  }

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

      <Elements stripe={stripePromise} options={options}>
        <EmbeddedCheckoutProvider stripe={stripePromise} options={options}>
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
