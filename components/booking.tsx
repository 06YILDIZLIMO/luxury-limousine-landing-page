"use client"

import React from "react"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Calendar, Clock, MapPin, Users, Send, CheckCircle } from "lucide-react"

export function Booking() {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    pickupLocation: "",
    dropoffLocation: "",
    date: "",
    time: "",
    passengers: "",
    vehicleType: "",
    specialRequests: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitted(true)
    setTimeout(() => setIsSubmitted(false), 5000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

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
            {'Complete the form below to reserve your limousine. Our team will contact you shortly to confirm your booking and discuss any special requirements.'}
          </p>
        </div>

        {/* Booking Form */}
        <div className="max-w-4xl mx-auto">
          <Card className="bg-card border-gold/30 shadow-2xl shadow-gold/5">
            <CardContent className="p-8 md:p-12">
              {!isSubmitted ? (
                <form onSubmit={handleSubmit} className="space-y-6">
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
                    <Label htmlFor="vehicleType" className="text-foreground/90">{'Vehicle Type *'}</Label>
                    <select
                      id="vehicleType"
                      name="vehicleType"
                      value={formData.vehicleType}
                      onChange={handleChange as any}
                      required
                      className="w-full px-3 py-2 bg-background border border-border rounded-md focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold text-foreground"
                    >
                      <option value="">{'Select a vehicle'}</option>
                      <option value="suburban-2025">{'Chevrolet Suburban 2025 Premier (Up to 6 passengers)'}</option>
                      <option value="volvo-xc90">{'Volvo XC90 Excellence (Up to 6 passengers)'}</option>
                      <option value="escalade-esv">{'Cadillac Escalade ESV (Up to 7 passengers)'}</option>
                      <option value="navigator-l">{'Lincoln Navigator L (Up to 7 passengers)'}</option>
                      <option value="mercedes-s-class">{'Mercedes-Benz S-Class (Up to 4 passengers)'}</option>
                      <option value="bmw-7-series">{'BMW 7 Series (Up to 4 passengers)'}</option>
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
                    className="w-full bg-gold hover:bg-gold/90 text-background font-semibold text-lg py-6 group"
                  >
                    {'Submit Reservation Request'}
                    <Send className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Button>

                  <p className="text-sm text-foreground/60 text-center">
                    {'By submitting this form, you agree to be contacted by 06YILDIZ LIMO regarding your reservation.'}
                  </p>
                </form>
              ) : (
                <div className="text-center py-12">
                  <div className="w-20 h-20 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle className="w-10 h-10 text-gold" />
                  </div>
                  <h3 className="text-2xl font-serif font-bold mb-4">{'Thank You!'}</h3>
                  <p className="text-foreground/70 mb-6">
                    {'Your reservation request has been received. Our team will contact you shortly to confirm your booking.'}
                  </p>
                  <Button 
                    onClick={() => setIsSubmitted(false)}
                    variant="outline"
                    className="border-gold text-gold hover:bg-gold/10"
                  >
                    {'Make Another Reservation'}
                  </Button>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
