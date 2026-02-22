import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Phone, Heart, Star, CheckCircle, Camera, Clock, Sparkles } from "lucide-react"
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Wedding Limousine Peterborough | Luxury Bridal Car | 06YILDIZ LIMO",
  description: "Make your wedding day unforgettable with 06YILDIZ LIMO. Luxury wedding limousines in Peterborough & Ontario. Decorated vehicles, professional chauffeur, red carpet service. Call (709) 300-9006.",
  keywords: "wedding limo peterborough, wedding limousine ontario, bridal car peterborough, wedding car hire peterborough, luxury wedding transportation",
  alternates: {
    canonical: "https://06yildizlimo.com/wedding-limo",
  },
  openGraph: {
    title: "Wedding Limousine Peterborough | 06YILDIZ LIMO",
    description: "Luxury wedding limousines in Peterborough & Ontario. Make your special day perfect with our professional chauffeur service.",
    type: "website",
    url: "https://06yildizlimo.com/wedding-limo",
  },
}

const packages = [
  {
    name: "Classic Wedding",
    price: "From $299",
    duration: "3 hours",
    features: ["Luxury sedan or SUV", "Decorated vehicle", "Professional chauffeur", "Red carpet service", "Complimentary water"],
  },
  {
    name: "Premium Wedding",
    price: "From $499",
    duration: "6 hours",
    features: ["Luxury SUV or stretch", "Full decoration", "Professional chauffeur", "Red carpet & champagne", "Photo stops included", "Bridal party transport"],
    popular: true,
  },
  {
    name: "Full Day Wedding",
    price: "From $799",
    duration: "10 hours",
    features: ["Any vehicle in fleet", "Premium decoration", "Dedicated chauffeur", "Red carpet & champagne", "Multiple photo stops", "Bridal + guest transport", "Rehearsal dinner included"],
  },
]

const features = [
  { icon: Heart, title: "Decorated Vehicles", desc: "Ribbons, flowers, and custom decorations for your special day." },
  { icon: Star, title: "5-Star Service", desc: "Consistently rated 5 stars by our wedding clients on Google." },
  { icon: Camera, title: "Photo Stops", desc: "We know the best scenic spots in Peterborough for your photos." },
  { icon: CheckCircle, title: "Punctual & Reliable", desc: "We arrive early. Your wedding day runs on our schedule." },
  { icon: Clock, title: "Flexible Hours", desc: "Book by the hour or the full day. We work around your timeline." },
  { icon: Sparkles, title: "Red Carpet Service", desc: "Literally. We roll out the red carpet for the bride and groom." },
]

export default function WeddingLimoPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main role="main" className="pt-20">

        {/* Hero */}
        <section className="relative py-20 bg-gradient-to-br from-black via-zinc-900 to-black text-white text-center px-4">
          <div className="container mx-auto max-w-4xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#BF953F]/20 border border-[#BF953F]/40 text-[#BF953F] mb-6">
              <Heart className="w-4 h-4 fill-current" />
              <span className="text-sm font-semibold tracking-wider uppercase">Wedding Specialists</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-serif font-black mb-6">
              Your Perfect <span className="text-[#BF953F]">Wedding Day</span> Starts Here
            </h1>
            <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
              Luxury wedding limousines in Peterborough & Ontario. Decorated vehicles, red carpet service, and a professional chauffeur who makes your day unforgettable.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:+17093009006">
                <Button size="lg" className="bg-[#BF953F] hover:bg-[#B38728] text-black font-bold text-lg px-8 py-6 rounded-full">
                  <Phone className="mr-2 w-5 h-5" />
                  Call: (709) 300-9006
                </Button>
              </a>
              <a href="https://wa.me/17093009006?text=Hi%2C%20I%27d%20like%20to%20book%20a%20wedding%20limousine." target="_blank" rel="noopener noreferrer">
                <Button size="lg" variant="outline" className="border-[#25D366] text-[#25D366] hover:bg-[#25D366]/10 font-bold text-lg px-8 py-6 rounded-full">
                  WhatsApp Us
                </Button>
              </a>
            </div>
          </div>
        </section>

        {/* Packages */}
        <section className="py-16 px-4 bg-zinc-950">
          <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl font-serif font-bold text-white text-center mb-4">Wedding Packages</h2>
            <p className="text-gray-400 text-center mb-12">All packages include a professional chauffeur and decorated vehicle</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {packages.map((pkg) => (
                <div key={pkg.name} className={`relative rounded-2xl p-6 border transition-all ${pkg.popular ? 'bg-[#BF953F]/10 border-[#BF953F]' : 'bg-zinc-900 border-zinc-800'}`}>
                  {pkg.popular && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#BF953F] text-black text-xs font-bold px-4 py-1 rounded-full">
                      MOST POPULAR
                    </div>
                  )}
                  <h3 className="text-white font-bold text-xl mb-1">{pkg.name}</h3>
                  <p className="text-gray-400 text-sm mb-3">{pkg.duration}</p>
                  <p className="text-[#BF953F] font-bold text-2xl mb-6">{pkg.price}</p>
                  <ul className="space-y-2 mb-6">
                    {pkg.features.map((f) => (
                      <li key={f} className="flex items-center gap-2 text-gray-300 text-sm">
                        <CheckCircle className="w-4 h-4 text-[#BF953F] flex-shrink-0" />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <a href="tel:+17093009006">
                    <Button className={`w-full rounded-xl font-bold ${pkg.popular ? 'bg-[#BF953F] hover:bg-[#B38728] text-black' : 'bg-zinc-800 hover:bg-[#BF953F] text-white hover:text-black border border-zinc-700'}`}>
                      Book This Package
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
            <h2 className="text-3xl font-serif font-bold text-white text-center mb-12">What Makes Us Special</h2>
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
            <Heart className="w-12 h-12 mx-auto mb-4 fill-current" />
            <h2 className="text-3xl font-serif font-bold mb-4">Book Your Wedding Limo Today</h2>
            <p className="text-black/80 mb-8 text-lg">Dates fill up fast. Call or WhatsApp us to check availability.</p>
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
