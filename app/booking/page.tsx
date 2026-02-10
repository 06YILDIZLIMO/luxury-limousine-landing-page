import React from "react"
import type { Metadata } from 'next'
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Booking } from "@/components/booking"

export const metadata: Metadata = {
  title: 'Book Online | 06YILDIZ LIMO',
  description: 'Secure your luxury airport transfer instantly. Book your ride with 06YILDIZ LIMO.',
}

export default function BookingPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <div className="pt-32 pb-16">
          <div className="text-center max-w-4xl mx-auto mb-12">
            <h1 className="text-5xl md:text-7xl font-serif font-black mb-6 leading-tight">
              Reserve Your <span className="luxury-gradient">Luxury Ride</span>
            </h1>
            <p className="text-xl text-foreground/70 leading-relaxed">
              Book your premium transportation service with confidence. Our professional chauffeurs and luxury fleet are ready to serve you.
            </p>
          </div>
        </div>
        <Booking />
      </main>
      <Footer />
    </div>
  )
}
