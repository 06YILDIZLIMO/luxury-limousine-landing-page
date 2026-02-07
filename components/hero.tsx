import Link from "next/link"
import { ArrowRight, Star, Shield, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* ARKA PLAN RESMİ BURADA TANIMLANIYOR */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url("/rolls.png")', /* SENİN YÜKLEDİĞİN RESİM */
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        {/* Karartma Katmanı (Yazılar okunsun diye) */}
        <div className="absolute inset-0 bg-black/70" />
      </div>

      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#BF953F]/20 border border-[#BF953F]/40 text-[#BF953F] mb-8 backdrop-blur-md">
          <Star className="w-4 h-4 fill-current" />
          <span className="text-sm font-semibold tracking-wider uppercase">Peterborough & Ontario's Finest</span>
        </div>

        <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-black text-white mb-6 tracking-tight leading-tight">
          06YILDIZ <span className="luxury-gradient">LIMO</span>
        </h1>

        <p className="text-xl md:text-2xl text-gray-200 mb-10 max-w-3xl mx-auto font-light leading-relaxed">
          Experience world-class luxury transportation.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
          <Button size="lg" className="bg-[#BF953F] hover:bg-[#B38728] text-black font-bold text-lg px-8 py-6 rounded-full transition-transform hover:scale-105">
            Book Now
          </Button>
        </div>
      </div>
    </section>
  )
}
