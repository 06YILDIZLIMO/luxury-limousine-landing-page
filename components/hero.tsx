import Link from "next/link"
import { ArrowRight, Star, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Arka Plan - Lüks Gradient */}
      <div className="absolute inset-0 z-0 bg-gradient-to-br from-black via-zinc-900 to-black">
        <div className="absolute inset-0 opacity-20" style={{
          backgroundImage: 'radial-gradient(ellipse at 20% 50%, #BF953F22 0%, transparent 60%), radial-gradient(ellipse at 80% 20%, #BF953F11 0%, transparent 50%)'
        }} />
      </div>

      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#BF953F]/20 border border-[#BF953F]/40 text-[#BF953F] mb-8 backdrop-blur-md">
          <Star className="w-4 h-4 fill-current" />
          <span className="text-sm font-semibold tracking-wider uppercase">Peterborough & Ontario's Finest</span>
        </div>

        {/* LOGO - priority + sizes for fast LCP on mobile */}
        <div className="flex justify-center mb-6">
          <Image
            src="/yildizlimo.webp"
            alt="06YILDIZ LIMO - Luxury Limousine Service Peterborough"
            width={384}
            height={148}
            className="h-16 md:h-24 w-auto"
            priority
            fetchPriority="high"
            sizes="(max-width: 768px) 200px, 384px"
          />
        </div>

        <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-black text-white mb-6 tracking-tight leading-tight">
          06YILDIZ <span className="luxury-gradient">LIMO</span>
        </h1>

        <p className="text-xl md:text-2xl text-gray-200 mb-10 max-w-3xl mx-auto font-light leading-relaxed">
          Experience world-class luxury transportation. Whether it's a corporate event, wedding, or airport transfer, we define elegance in motion.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
          {/* CALL NOW - En önemli CTA */}
          <a href="tel:+17093009006" className="w-full sm:w-auto">
            <Button size="lg" className="w-full sm:w-auto bg-[#BF953F] hover:bg-[#B38728] text-black font-bold text-lg px-8 py-6 rounded-full transition-transform hover:scale-105 shadow-lg shadow-[#BF953F]/30">
              <Phone className="mr-2 w-5 h-5" />
              Call Now: (709) 300-9006
            </Button>
          </a>
          {/* Book Online */}
          <Link href="/booking" className="w-full sm:w-auto">
            <Button size="lg" variant="outline" className="w-full sm:w-auto border-[#BF953F] text-[#BF953F] hover:bg-[#BF953F]/10 font-bold text-lg px-8 py-6 rounded-full transition-transform hover:scale-105">
              Book Online
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </Link>
        </div>

        {/* Phone number text - extra visibility */}
        <p className="text-[#BF953F] text-sm font-semibold tracking-wider mb-16">
          📞 Available 24/7 · Free Quote in 30 Minutes
        </p>
      </div>
    </section>
  )
}
