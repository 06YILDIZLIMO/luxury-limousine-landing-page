

import { useEffect, useState } from 'react'
import { useSearchParams } from 'next/navigation'
import { CheckCircle, Calendar, MapPin, Clock, Car, Phone, Mail } from 'lucide-react'
import Link from 'next/link'

export default function BookingSuccess() {
  const searchParams = useSearchParams()
  const [sessionStatus, setSessionStatus] = useState<{
    status: string
    customerEmail: string
    customerName: string
    amountTotal: number
    metadata?: any
  } | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const sessionId = searchParams.get('session_id')
    if (sessionId) {
      fetch(`/api/session-status?session_id=${sessionId}`)
        .then(res => res.json())
        .then(data => {
          setSessionStatus(data)
          setLoading(false)
        })
        .catch(() => setLoading(false))
    } else {
      setLoading(false)
    }
  }, [searchParams])

  if (loading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-gold border-t-transparent rounded-full animate-spin mx-auto mb-4" />
          <p className="text-foreground/70">Loading...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center">
          {/* Success Icon */}
          <div className="w-24 h-24 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-8">
            <CheckCircle className="w-12 h-12 text-gold" />
          </div>

          <h1 className="text-4xl font-serif font-bold mb-4">
            Booking <span className="text-gold">Confirmed!</span>
          </h1>
          
          <p className="text-foreground/70 mb-8">
            Thank you for your reservation. A confirmation email has been sent to{' '}
            <span className="text-gold font-semibold">{sessionStatus?.customerEmail || 'your email'}</span>
          </p>

          {/* Booking Details */}
          {sessionStatus?.metadata && (
            <div className="bg-card border border-gold/20 rounded-xl p-6 mb-8 text-left">
              <h3 className="text-xl font-serif font-bold mb-4">Booking Details</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-start gap-3">
                  <Calendar className="w-5 h-5 text-gold mt-0.5" />
                  <div>
                    <p className="text-sm text-foreground/60">Date</p>
                    <p className="font-medium">{sessionStatus.metadata.date || 'N/A'}</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-gold mt-0.5" />
                  <div>
                    <p className="text-sm text-foreground/60">Time</p>
                    <p className="font-medium">{sessionStatus.metadata.time || 'N/A'}</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-gold mt-0.5" />
                  <div>
                    <p className="text-sm text-foreground/60">Pickup</p>
                    <p className="font-medium">{sessionStatus.metadata.pickupLocation || 'N/A'}</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-gold mt-0.5" />
                  <div>
                    <p className="text-sm text-foreground/60">Destination</p>
                    <p className="font-medium">{sessionStatus.metadata.dropoffLocation || 'N/A'}</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <Car className="w-5 h-5 text-gold mt-0.5" />
                  <div>
                    <p className="text-sm text-foreground/60">Vehicle</p>
                    <p className="font-medium">{sessionStatus.metadata.vehicleType || 'N/A'}</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <span className="text-gold font-bold text-xl">$</span>
                  <div>
                    <p className="text-sm text-foreground/60">Deposit Paid</p>
                    <p className="font-medium text-gold">${sessionStatus.amountTotal?.toFixed(2) || '0.00'} CAD</p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Contact Info */}
          <div className="bg-secondary/50 rounded-xl p-6 mb-8">
            <h3 className="text-lg font-serif font-bold mb-4">Need Help?</h3>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="tel:+17093009006" 
                className="flex items-center justify-center gap-2 text-foreground/80 hover:text-gold transition-colors"
              >
                <Phone className="w-5 h-5" />
                +1 (709) 300-9006
              </a>
              <a 
                href="mailto:info@06yildizlimo.com" 
                className="flex items-center justify-center gap-2 text-foreground/80 hover:text-gold transition-colors"
              >
                <Mail className="w-5 h-5" />
                info@06yildizlimo.com
              </a>
            </div>
          </div>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/#booking"
              className="px-8 py-3 bg-gold text-background font-semibold rounded-lg hover:bg-gold/90 transition-colors"
            >
              Make Another Booking
            </Link>
            <Link 
              href="/#fleet"
              className="px-8 py-3 border border-gold text-gold font-semibold rounded-lg hover:bg-gold/10 transition-colors"
            >
              View Our Fleet
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
