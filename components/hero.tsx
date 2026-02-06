"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Shield, Clock, Star } from "lucide-react"

export function Hero() {
  const scrollToBooking = () => {
    const element = document.getElementById("booking")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=1920&h=1080&fit=crop&q=80" 
          alt="Luxury black limousine on illuminated city street at night"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background/70 to-background" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10 pt-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gold/30 bg-gold/10 backdrop-blur-sm mb-8">
            <Star className="w-4 h-4 text-gold fill-gold" />
            <span className="text-sm text-gold font-medium">{'Premium Luxury Transportation'}</span>
          </div>

          {/* Headline */}
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-serif font-black mb-8 leading-none">
            Arrive in{' '}
            <span className="luxury-gradient">Elegance</span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-foreground/90 mb-12 max-w-2xl mx-auto leading-relaxed font-light">
            Experience unparalleled luxury with{' '}
            <span className="text-gold font-semibold">06YILDIZ LIMO</span>
            . Professional chauffeur services for corporate events, special occasions, and exclusive travel across Ontario.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <Button 
              size="lg"
              onClick={scrollToBooking}
              className="bg-gold hover:bg-gold/90 text-background font-semibold text-lg px-8 py-6 group"
            >
              {'Reserve Your Ride'}
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              size="lg"
              variant="outline"
              onClick={() => {
                const element = document.getElementById("fleet")
                if (element) element.scrollIntoView({ behavior: "smooth" })
              }}
              className="border-gold text-gold hover:bg-gold/10 text-lg px-8 py-6"
            >
              {'View Our Fleet'}
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div className="flex flex-col items-center gap-3 p-6 rounded-lg bg-card/30 backdrop-blur-sm border border-border/50">
              <Shield className="w-8 h-8 text-gold" />
              <h3 className="font-semibold text-lg">{'Licensed & Insured'}</h3>
              <p className="text-sm text-foreground/70 text-balance">{'Fully certified and insured for your peace of mind'}</p>
            </div>
            <div className="flex flex-col items-center gap-3 p-6 rounded-lg bg-card/30 backdrop-blur-sm border border-border/50">
              <Clock className="w-8 h-8 text-gold" />
              <h3 className="font-semibold text-lg">{'24/7 Availability'}</h3>
              <p className="text-sm text-foreground/70 text-balance">{'Round-the-clock service for all your transportation needs'}</p>
            </div>
            <div className="flex flex-col items-center gap-3 p-6 rounded-lg bg-card/30 backdrop-blur-sm border border-border/50">
              <Star className="w-8 h-8 text-gold" />
              <h3 className="font-semibold text-lg">{'Premium Experience'}</h3>
              <p className="text-sm text-foreground/70 text-balance">{'Exceptional service with attention to every detail'}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <div className="w-6 h-10 border-2 border-gold/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-gold rounded-full" />
        </div>
      </div>
    </section>
  )
}
