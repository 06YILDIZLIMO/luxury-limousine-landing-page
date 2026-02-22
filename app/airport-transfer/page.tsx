import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Phone, CheckCircle, Clock, Shield, Star, MapPin, Plane } from "lucide-react"
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Airport Transfer Peterborough | Toronto Pearson YYZ | 06YILDIZ LIMO",
  description: "Reliable luxury airport transfers from Peterborough to Toronto Pearson (YYZ), Billy Bishop (YTZ) & all Ontario airports. Professional chauffeur, flight tracking, 24/7. Call (709) 300-9006.",
  keywords: "airport transfer peterborough, peterborough to toronto airport, YYZ limo, pearson airport limo peterborough, airport limo ontario",
  alternates: {
    canonical: "https://06yildizlimo.com/airport-transfer",
  },
  openGraph: {
    title: "Airport Transfer Peterborough to Toronto | 06YILDIZ LIMO",
    description: "Luxury airport transfers from Peterborough to Toronto Pearson (YYZ). Professional chauffeur, flight tracking, 24/7 availability.",
    type: "website",
    url: "https://06yildizlimo.com/airport-transfer",
  },
}

const airports = [
  { name: "Toronto Pearson International (YYZ)", distance: "~140 km", time: "~1.5 hrs", price: "From $149" },
  { name: "Billy Bishop Toronto City (YTZ)", distance: "~145 km", time: "~1.5 hrs", price: "From $159" },
  { name: "Hamilton Airport (YHM)", distance: "~200 km", time: "~2 hrs", price: "From $189" },
  { name: "Ottawa Airport (YOW)", distance: "~280 km", time: "~3 hrs", price: "From $249" },
]

const features = [
  { icon: Plane, title: "Flight Tracking", desc: "We monitor your flight in real-time. Delayed? We adjust automatically." },
  { icon: Clock, title: "24/7 Available", desc: "Early morning, late night — we're always ready for your transfer." },
  { icon: Shield, title: "Meet & Greet", desc: "Your chauffeur meets you at arrivals with a name sign." },
  { icon: CheckCircle, title: "Fixed Pricing", desc: "No surge pricing. The price you see is the price you pay." },
  { icon: Star, title: "5-Star Rated", desc: "Consistently rated 5 stars by our clients on Google." },
  { icon: MapPin, title: "Door to Door", desc: "Picked up from your home, dropped at the terminal. Simple." },
]

export default function AirportTransferPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main role="main" className="pt-20">

        {/* Hero */}
        <section className="relative py-20 bg-gradient-to-br from-black via-zinc-900 to-black text-white text-center px-4">
          <div className="container mx-auto max-w-4xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#BF953F]/20 border border-[#BF953F]/40 text-[#BF953F] mb-6">
              <Plane className="w-4 h-4" />
              <span className="text-sm font-semibold tracking-wider uppercase">Airport Transfer Specialists</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-serif font-black mb-6">
              Peterborough to <span className="text-[#BF953F]">Toronto Airport</span> — Stress Free
            </h1>
            <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
              Professional luxury airport transfers from Peterborough to Toronto Pearson (YYZ), Billy Bishop, and all Ontario airports. Flight tracking included. Fixed prices. 24/7.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:+17093009006">
                <Button size="lg" className="bg-[#BF953F] hover:bg-[#B38728] text-black font-bold text-lg px-8 py-6 rounded-full">
                  <Phone className="mr-2 w-5 h-5" />
                  Call: (709) 300-9006
                </Button>
              </a>
              <a href="https://wa.me/17093009006?text=Hi%2C%20I%20need%20an%20airport%20transfer%20from%20Peterborough." target="_blank" rel="noopener noreferrer">
                <Button size="lg" variant="outline" className="border-[#25D366] text-[#25D366] hover:bg-[#25D366]/10 font-bold text-lg px-8 py-6 rounded-full">
                  WhatsApp Quote
                </Button>
              </a>
            </div>
          </div>
        </section>

        {/* Airport Routes */}
        <section className="py-16 px-4 bg-zinc-950">
          <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl font-serif font-bold text-white text-center mb-4">Airport Routes from Peterborough</h2>
            <p className="text-gray-400 text-center mb-12">Fixed prices, no surprises</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {airports.map((airport) => (
                <div key={airport.name} className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 hover:border-[#BF953F]/50 transition-colors">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-white font-bold text-lg mb-1">{airport.name}</h3>
                      <p className="text-gray-400 text-sm">{airport.distance} · {airport.time}</p>
                    </div>
                    <span className="text-[#BF953F] font-bold text-xl">{airport.price}</span>
                  </div>
                  <a href="tel:+17093009006">
                    <Button className="w-full bg-[#BF953F]/10 hover:bg-[#BF953F] text-[#BF953F] hover:text-black border border-[#BF953F]/30 rounded-xl transition-all">
                      Book This Route
                    </Button>
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="py-16 px-4 bg-black">
          <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl font-serif font-bold text-white text-center mb-12">Why Choose 06YILDIZ LIMO?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((f) => (
                <div key={f.title} className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#BF953F]/20 flex items-center justify-center flex-shrink-0">
                    <f.icon className="w-6 h-6 text-[#BF953F]" />
                  </div>
                  <div>
                    <h3 className="text-white font-bold mb-1">{f.title}</h3>
                    <p className="text-gray-400 text-sm">{f.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 px-4 bg-[#BF953F] text-black text-center">
          <div className="container mx-auto max-w-2xl">
            <h2 className="text-3xl font-serif font-bold mb-4">Ready to Book Your Airport Transfer?</h2>
            <p className="text-black/80 mb-8 text-lg">Call or WhatsApp us now. Free quote in 30 minutes.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:+17093009006">
                <Button size="lg" className="bg-black hover:bg-zinc-900 text-white font-bold text-lg px-8 py-6 rounded-full">
                  <Phone className="mr-2 w-5 h-5" />
                  (709) 300-9006
                </Button>
              </a>
              <Link href="/booking">
                <Button size="lg" variant="outline" className="border-black text-black hover:bg-black/10 font-bold text-lg px-8 py-6 rounded-full">
                  Book Online
                </Button>
              </Link>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  )
}
