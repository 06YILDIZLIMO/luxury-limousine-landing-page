"use client"

import React, { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Calendar, Clock, MapPin, Users, Send, CheckCircle, CreditCard, DollarSign } from "lucide-react"
import { StripeCheckoutForm } from "@/components/stripe-checkout"
import { FacebookEvents, generateEventId } from "@/lib/facebook-pixel"

// Service pricing
const SERVICE_PRICES = {
  'airport': { name: 'Airport Transfer', deposit: 100 },
  'hourly': { name: 'Hourly Rental', deposit: 150 },
  'wedding': { name: 'Wedding Package', deposit: 300 },
  'city-tour': { name: 'City Tour', deposit: 100 },
  'point-to-point': { name: 'Point-to-Point', deposit: 75 },
}

export function Booking() {
  const [step, setStep] = useState<'form' | 'payment' | 'success'>('form')
  const [isLoading, setIsLoading] = useState(false)
  const [clientSecret, setClientSecret] = useState('')
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    pickupLocation: "",
    dropoffLocation: "",
    date: "",
    time: "",
    passengers: "",
    serviceType: "",
    vehicleType: "",
    specialRequests: "",
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    try {
      const service = SERVICE_PRICES[formData.serviceType as keyof typeof SERVICE_PRICES]
      const amount = service?.deposit || 100

      // Generate event ID for deduplication
      const eventId = generateEventId()

      // Track InitiateCheckout event
      FacebookEvents.InitiateCheckout({
        content_ids: [formData.serviceType],
        content_name: service?.name || 'Limo Service',
        content_category: 'Transportation',
        value: amount,
        currency: 'CAD',
        num_items: 1,
      })

      const response = await fetch('/api/checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          service: formData.serviceType,
          amount,
          customerName: formData.name,
          customerEmail: formData.email,
          customerPhone: formData.phone,
          pickupLocation: formData.pickupLocation,
          dropoffLocation: formData.dropoffLocation,
          date: formData.date,
          time: formData.time,
          vehicleType: formData.vehicleType,
          eventId, // Pass event ID for server-side tracking
        }),
      })

      const data = await response.json()
      
      if (data.clientSecret) {
        setClientSecret(data.clientSecret)
        setStep('payment')
      }
    } catch (error) {
      console.error('Error:', error)
      alert('An error occurred. Please try again.')
    } finally {
      setIsLoading(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))

    // Track service selection as AddToCart event
    if (name === 'serviceType' && value) {
      const service = SERVICE_PRICES[value as keyof typeof SERVICE_PRICES]
      if (service) {
        FacebookEvents.AddToCart({
          content_ids: [value],
          content_name: service.name,
          content_type: 'product',
          value: service.deposit,
          currency: 'CAD',
        })
      }
    }
  }

  const selectedService = SERVICE_PRICES[formData.serviceType as keyof typeof SERVICE_PRICES]

  return (
    <section id="booking" className="py-24 bg-background relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gold rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gold rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block px-4 py-1 rounded-full border border-gold/30 bg-gold/10 mb-4">
            <span className="text-sm text-gold font-medium">{'Reserve Now'}</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-serif font-bold mb-6 text-balance">
            {'Book Your '}
            <span className="text-gold">{'Luxury Ride'}</span>
          </h2>
          <p className="text-lg text-foreground/70 leading-relaxed">
            {step === 'payment' 
              ? 'Complete your deposit payment to confirm your reservation.'
              : 'Complete the form below to reserve your limousine. Our team will contact you shortly to confirm your booking and discuss any special requirements.'}
          </p>
        </div>

        {/* Form or Payment */}
        <div className="max-w-4xl mx-auto">
          {step === 'form' && (
            <Card className="bg-card border-gold/30 shadow-2xl shadow-gold/5">
              <CardContent className="p-8 md:p-12">
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Service Type */}
                  <div className="space-y-2">
                    <Label htmlFor="serviceType" className="text-foreground/90 flex items-center gap-2">
                      <DollarSign className="w-4 h-4 text-gold" />
                      {'Service Type *'}
                    </Label>
                    <select
                      id="serviceType"
                      name="serviceType"
                      value={formData.serviceType}
                      onChange={handleChange as any}
                      required
                      className="w-full px-3 py-2 bg-background border border-border rounded-md focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold text-foreground"
                    >
                      <option value="">{'Select a service'}</option>
                      <option value="airport">{'Airport Transfer ($100 deposit)'}</option>
                      <option value="hourly">{'Hourly Rental ($150 deposit)'}</option>
                      <option value="wedding">{'Wedding Package ($300 deposit)'}</option>
                      <option value="city-tour">{'City Tour ($100 deposit)'}</option>
                      <option value="point-to-point">{'Point-to-Point ($75 deposit)'}</option>
                    </select>
                    {selectedService && (
                      <p className="text-sm text-gold/70">
                        Required deposit: ${selectedService.deposit} CAD
                      </p>
                    )}
                  </div>

                  {/* Personal Information */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-foreground/90">{'Full Name *'}</Label>
                      <Input 
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="John Smith"
                        className="bg-background border-border focus:border-gold"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-foreground/90">{'Email Address *'}</Label>
                      <Input 
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="john@example.com"
                        className="bg-background border-border focus:border-gold"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone" className="text-foreground/90">{'Phone Number *'}</Label>
                    <Input 
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      placeholder="+1 (705) 123-4567"
                      className="bg-background border-border focus:border-gold"
                    />
                  </div>

                  {/* Location Details */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="pickupLocation" className="text-foreground/90 flex items-center gap-2">
                        <MapPin className="w-4 h-4 text-gold" />
                        {'Pickup Location *'}
                      </Label>
                      <Input 
                        id="pickupLocation"
                        name="pickupLocation"
                        value={formData.pickupLocation}
                        onChange={handleChange}
                        required
                        placeholder="Address or Airport"
                        className="bg-background border-border focus:border-gold"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="dropoffLocation" className="text-foreground/90 flex items-center gap-2">
                        <MapPin className="w-4 h-4 text-gold" />
                        {'Drop-off Location *'}
                      </Label>
                      <Input 
                        id="dropoffLocation"
                        name="dropoffLocation"
                        value={formData.dropoffLocation}
                        onChange={handleChange}
                        required
                        placeholder="Destination Address"
                        className="bg-background border-border focus:border-gold"
                      />
                    </div>
                  </div>

                  {/* Date & Time */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="date" className="text-foreground/90 flex items-center gap-2">
                        <Calendar className="w-4 h-4 text-gold" />
                        {'Date *'}
                      </Label>
                      <Input 
                        id="date"
                        name="date"
                        type="date"
                        value={formData.date}
                        onChange={handleChange}
                        required
                        className="bg-background border-border focus:border-gold"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="time" className="text-foreground/90 flex items-center gap-2">
                        <Clock className="w-4 h-4 text-gold" />
                        {'Time *'}
                      </Label>
                      <Input 
                        id="time"
                        name="time"
                        type="time"
                        value={formData.time}
                        onChange={handleChange}
                        required
                        className="bg-background border-border focus:border-gold"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="passengers" className="text-foreground/90 flex items-center gap-2">
                        <Users className="w-4 h-4 text-gold" />
                        {'Passengers *'}
                      </Label>
                      <Input 
                        id="passengers"
                        name="passengers"
                        type="number"
                        min="1"
                        max="14"
                        value={formData.passengers}
                        onChange={handleChange}
                        required
                        placeholder="1-14"
                        className="bg-background border-border focus:border-gold"
                      />
                    </div>
                  </div>

                  {/* Vehicle Selection */}
                  <div className="space-y-2">
                    <Label htmlFor="vehicleType" className="text-foreground/90 flex items-center gap-2">
                      <CreditCard className="w-4 h-4 text-gold" />
                      {'Vehicle Type *'}
                    </Label>
                    <select
                      id="vehicleType"
                      name="vehicleType"
                      value={formData.vehicleType}
                      onChange={handleChange as any}
                      required
                      className="w-full px-3 py-2 bg-background border border-border rounded-md focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold text-foreground"
                    >
                      <option value="">{'Select a vehicle'}</option>
                      <option value="Cadillac Escalade ESV">{'Cadillac Escalade ESV (Up to 7 passengers)'}</option>
                      <option value="GMC Yukon Denali">{'GMC Yukon Denali (Up to 7 passengers)'}</option>
                      <option value="Lincoln Navigator L">{'Lincoln Navigator L (Up to 7 passengers)'}</option>
                      <option value="Chevrolet Suburban Premier">{'Chevrolet Suburban Premier (Up to 7 passengers)'}</option>
                      <option value="Volvo XC90 Excellence">{'Volvo XC90 Excellence (Up to 6 passengers)'}</option>
                      <option value="BMW 750Li">{'BMW 750Li (Up to 4 passengers)'}</option>
                      <option value="Mercedes-Benz S-Class">{'Mercedes-Benz S-Class (Up to 4 passengers)'}</option>
                      <option value="Rolls-Royce Phantom">{'Rolls-Royce Phantom (Up to 4 passengers)'}</option>
                      <option value="Luxury Party Bus">{'Luxury Party Bus (Up to 20 passengers)'}</option>
                    </select>
                  </div>

                  {/* Special Requests */}
                  <div className="space-y-2">
                    <Label htmlFor="specialRequests" className="text-foreground/90">{'Special Requests'}</Label>
                    <Textarea 
                      id="specialRequests"
                      name="specialRequests"
                      value={formData.specialRequests}
                      onChange={handleChange}
                      placeholder="Any special requirements or requests..."
                      rows={4}
                      className="bg-background border-border focus:border-gold resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <Button 
                    type="submit"
                    size="lg"
                    disabled={isLoading}
                    className="w-full bg-gold hover:bg-gold/90 text-background font-semibold text-lg py-6 group"
                  >
                    {isLoading ? (
                      <>
                        <div className="w-5 h-5 border-2 border-background border-t-transparent rounded-full animate-spin mr-2" />
                        Processing...
                      </>
                    ) : (
                      <>
                        {'Continue to Payment'}
                        <Send className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                      </>
                    )}
                  </Button>

                  <p className="text-sm text-foreground/60 text-center">
                    {'By submitting this form, you agree to be contacted by 06YILDIZ LIMO regarding your reservation.'}
                  </p>
                </form>
              </CardContent>
            </Card>
          )}

          {step === 'payment' && clientSecret && (
            <div className="space-y-6">
              <StripeCheckoutForm 
                clientSecret={clientSecret}
                onSuccess={() => setStep('success')}
              />
              <Button 
                variant="outline"
                onClick={() => setStep('form')}
                className="w-full border-gold/30 text-foreground/70 hover:text-gold hover:border-gold"
              >
                ← Back to Form
              </Button>
            </div>
          )}

          {step === 'success' && (
            <Card className="bg-card border-gold/30">
              <CardContent className="p-12 text-center">
                <div className="w-24 h-24 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle className="w-12 h-12 text-gold" />
                </div>
                <h3 className="text-3xl font-serif font-bold mb-4">{'Thank You!'}</h3>
                <p className="text-foreground/70 mb-6 text-lg">
                  {'Your reservation request has been received and payment confirmed. Our team will contact you shortly to confirm all details.'}
                </p>
                <Button 
                  onClick={() => {
                    setStep('form')
                    setFormData({
                      name: "", email: "", phone: "", pickupLocation: "",
                      dropoffLocation: "", date: "", time: "", passengers: "",
                      serviceType: "", vehicleType: "", specialRequests: "",
                    })
                  }}
                  className="bg-gold hover:bg-gold/90 text-background"
                >
                  {'Make Another Reservation'}
                </Button>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </section>
  )
}
