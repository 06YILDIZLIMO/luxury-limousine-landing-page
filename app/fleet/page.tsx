import { Header } from "@/components/header"
import { Fleet } from "@/components/fleet"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Crown, Phone, ChevronDown } from "lucide-react"
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Luxury Fleet - Rolls-Royce, Mercedes, Escalade | 06YILDIZ LIMO Peterborough",
  description: "Browse our premium luxury fleet: Rolls-Royce Phantom, Mercedes-Benz S-Class, BMW 750Li, Cadillac Escalade ESV, Lincoln Navigator, GMC Yukon XL, Volvo XC90 & Party Bus. Professional chauffeur service in Peterborough & Ontario.",
  keywords: "luxury fleet Peterborough, Rolls-Royce limo Ontario, Mercedes limo Peterborough, Cadillac Escalade limo, Lincoln Navigator limo, party bus Peterborough, luxury vehicles Ontario",
  alternates: {
    canonical: "https://06yildizlimo.com/fleet",
  },
  openGraph: {
    title: "Luxury Fleet - Rolls-Royce, Mercedes, Escalade | 06YILDIZ LIMO",
    description: "Browse our premium luxury fleet in Peterborough, Ontario. Rolls-Royce, Mercedes, BMW, Escalade and more.",
    type: "website",
    url: "https://06yildizlimo.com/fleet",
  },
}

const fleetFaqs = [
  {
    q: "What luxury vehicles are available in your fleet?",
    a: "Our fleet includes the Rolls-Royce Phantom, Mercedes-Benz S-Class, BMW 750Li, Cadillac Escalade ESV, Lincoln Navigator L, GMC Yukon XL, Volvo XC90, Suburban, and a luxury party bus. All vehicles are meticulously maintained and driven by professional chauffeurs."
  },
  {
    q: "How many passengers can your vehicles accommodate?",
    a: "Our sedans (Rolls-Royce, Mercedes, BMW) accommodate up to 4 passengers. Our SUVs (Escalade, Navigator, Yukon, Suburban, Volvo) accommodate up to 7 passengers. Our party bus accommodates up to 20 passengers."
  },
  {
    q: "Are your vehicles available for airport transfers?",
    a: "Yes! All vehicles in our fleet are available for airport transfers from Peterborough to Toronto Pearson (YYZ), Billy Bishop (YTZ), Hamilton (YHM), and Ottawa (YOW) airports. We include flight tracking and meet-and-greet service."
  },
  {
    q: "Can I request a specific vehicle for my booking?",
    a: "Absolutely. When booking, simply specify your preferred vehicle. We recommend calling us at (709) 300-9006 to confirm availability for your date and time."
  },
  {
    q: "Are the vehicles equipped with WiFi and entertainment?",
    a: "Yes. Most vehicles include WiFi connectivity, premium audio systems (Burmester, Bowers & Wilkins, AKG), ambient lighting, and climate control. The Rolls-Royce Phantom features a Starlight Headliner and champagne cooler."
  },
]

export default function FleetPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main role="main">

        {/* Unique Hero Section */}
        <section className="relative pt-32 pb-20 bg-gradient-to-br from-black via-zinc-900 to-black text-white text-center px-4">
          <div className="container mx-auto max-w-4xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#BF953F]/20 border border-[#BF953F]/40 text-[#BF953F] mb-6">
              <Crown className="w-4 h-4" />
              <span className="text-sm font-semibold tracking-wider uppercase">Prestige Collection</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-serif font-black mb-6 leading-tight">
              Our <span className="text-[#BF953F]">Luxury Fleet</span> in Peterborough
            </h1>
            <p className="text-xl text-gray-300 mb-4 max-w-2xl mx-auto">
              From the iconic Rolls-Royce Phantom to the commanding Cadillac Escalade ESV — every vehicle in our fleet is a statement of elegance, comfort, and prestige.
            </p>
            <p className="text-gray-400 mb-10 max-w-xl mx-auto">
              Serving Peterborough, Toronto, Niagara Falls, Muskoka, and all of Ontario. Available 24/7 for airport transfers, weddings, corporate events, and special occasions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:+17093009006">
                <Button size="lg" className="bg-[#BF953F] hover:bg-[#B38728] text-black font-bold text-lg px-8 py-4 rounded-full">
                  <Phone className="mr-2 w-5 h-5" />
                  Call: (709) 300-9006
                </Button>
              </a>
              <Link href="/booking">
                <Button size="lg" variant="outline" className="border-[#BF953F] text-[#BF953F] hover:bg-[#BF953F]/10 font-bold text-lg px-8 py-4 rounded-full">
                  Book a Vehicle
                </Button>
              </Link>
            </div>
            <div className="mt-10 flex items-center justify-center gap-2 text-gray-500 text-sm">
              <ChevronDown className="w-4 h-4 animate-bounce" />
              <span>Scroll to explore our fleet</span>
            </div>
          </div>
        </section>

        {/* Fleet Component */}
        <Fleet />

        {/* Fleet FAQ Section */}
        <section className="py-20 px-4 bg-zinc-950">
          <div className="container mx-auto max-w-3xl">
            <h2 className="text-3xl font-serif font-bold text-white text-center mb-4">
              Fleet <span className="text-[#BF953F]">FAQ</span>
            </h2>
            <p className="text-gray-400 text-center mb-12">Common questions about our luxury vehicles</p>
            <div className="space-y-6">
              {fleetFaqs.map((faq, i) => (
                <div key={i} className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 hover:border-[#BF953F]/30 transition-colors">
                  <h3 className="text-white font-bold mb-3 text-lg">{faq.q}</h3>
                  <p className="text-gray-400 leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
            <div className="text-center mt-12">
              <p className="text-gray-400 mb-6">Ready to book your luxury vehicle?</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="tel:+17093009006">
                  <Button className="bg-[#BF953F] hover:bg-[#B38728] text-black font-bold px-8 py-4 rounded-full">
                    <Phone className="mr-2 w-4 h-4" />
                    Call Now
                  </Button>
                </a>
                <Link href="/booking">
                  <Button variant="outline" className="border-[#BF953F] text-[#BF953F] hover:bg-[#BF953F]/10 px-8 py-4 rounded-full">
                    Book Online
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  )
}
