import { Header } from "@/components/header"
import { Services } from "@/components/services"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Sparkles, Phone, ChevronDown } from "lucide-react"
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Limousine Services Peterborough - Airport, Wedding, Corporate | 06YILDIZ LIMO",
  description: "Premium limousine services in Peterborough & Ontario: airport transfers to Toronto Pearson (YYZ), wedding limo packages, corporate chauffeur, city tours, and special occasions. Available 24/7. Call (709) 300-9006.",
  keywords: "limousine services Peterborough, airport transfer Ontario, wedding limo Peterborough, corporate chauffeur Ontario, city tours limo, special occasion limo, 24/7 limo service",
  alternates: {
    canonical: "https://06yildizlimo.com/service",
  },
  openGraph: {
    title: "Limousine Services Peterborough - Airport, Wedding, Corporate | 06YILDIZ LIMO",
    description: "Premium limousine services in Peterborough & Ontario. Airport transfers, weddings, corporate events, and special occasions. Available 24/7.",
    type: "website",
    url: "https://06yildizlimo.com/service",
  },
}

const serviceFaqs = [
  {
    q: "What areas do you serve for limousine service?",
    a: "We serve Peterborough, Toronto, Niagara Falls, Muskoka, Kawarthas, and all of Ontario. Our most popular route is Peterborough to Toronto Pearson International Airport (YYZ), approximately 140 km."
  },
  {
    q: "How much does a limousine service cost in Peterborough?",
    a: "Pricing depends on the service type and vehicle. Airport transfers from Peterborough to Toronto Pearson start from $149 CAD. Wedding packages and corporate rates are available upon request. We offer a free quote within 30 minutes — call (709) 300-9006."
  },
  {
    q: "Do you offer wedding limousine packages?",
    a: "Yes! Our wedding packages include custom vehicle decorations, red-carpet service, a professionally dressed chauffeur, and flexible scheduling. We serve weddings across Peterborough, Kawarthas, and Ontario."
  },
  {
    q: "Can I book a limousine for a corporate event or business meeting?",
    a: "Absolutely. We provide discreet, punctual corporate chauffeur services for business meetings, conferences, client pickups, and executive travel. All chauffeurs are background-checked and professionally trained."
  },
  {
    q: "Is your limousine service available 24/7?",
    a: "Yes, we operate 24 hours a day, 7 days a week, 365 days a year. Early morning airport runs, late-night event pickups — we're always available. Call or WhatsApp us at (709) 300-9006."
  },
  {
    q: "How far in advance should I book?",
    a: "We recommend booking at least 48 hours in advance for regular transfers. For weddings and large events, 2–4 weeks in advance is ideal. Last-minute bookings are accommodated based on availability."
  },
]

export default function ServicePage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main role="main">

        {/* Unique Hero Section */}
        <section className="relative pt-32 pb-20 bg-gradient-to-br from-black via-zinc-900 to-black text-white text-center px-4">
          <div className="container mx-auto max-w-4xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#BF953F]/20 border border-[#BF953F]/40 text-[#BF953F] mb-6">
              <Sparkles className="w-4 h-4" />
              <span className="text-sm font-semibold tracking-wider uppercase">Premium Chauffeur Services</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-serif font-black mb-6 leading-tight">
              Luxury Limousine <span className="text-[#BF953F]">Services</span> in Peterborough
            </h1>
            <p className="text-xl text-gray-300 mb-4 max-w-2xl mx-auto">
              From airport transfers to weddings, corporate events to city tours — we deliver an unmatched luxury experience across Peterborough and all of Ontario.
            </p>
            <p className="text-gray-400 mb-10 max-w-xl mx-auto">
              Professional chauffeurs. Immaculate vehicles. Fixed pricing. Available 24/7 — because your schedule doesn't stop.
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
                  Book a Service
                </Button>
              </Link>
            </div>
            <div className="mt-10 flex items-center justify-center gap-2 text-gray-500 text-sm">
              <ChevronDown className="w-4 h-4 animate-bounce" />
              <span>Scroll to explore our services</span>
            </div>
          </div>
        </section>

        {/* Services Component */}
        <Services />

        {/* Service FAQ Section */}
        <section className="py-20 px-4 bg-zinc-950">
          <div className="container mx-auto max-w-3xl">
            <h2 className="text-3xl font-serif font-bold text-white text-center mb-4">
              Services <span className="text-[#BF953F]">FAQ</span>
            </h2>
            <p className="text-gray-400 text-center mb-12">Everything you need to know about our limousine services</p>
            <div className="space-y-6">
              {serviceFaqs.map((faq, i) => (
                <div key={i} className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 hover:border-[#BF953F]/30 transition-colors">
                  <h3 className="text-white font-bold mb-3 text-lg">{faq.q}</h3>
                  <p className="text-gray-400 leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
            <div className="text-center mt-12">
              <p className="text-gray-400 mb-6">Ready to experience luxury transportation?</p>
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
