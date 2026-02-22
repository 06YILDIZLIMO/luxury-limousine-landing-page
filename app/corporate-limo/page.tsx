import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Phone, Briefcase, Star, CheckCircle, Clock, Shield, Wifi } from "lucide-react"
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Corporate Limo Service Peterborough | Executive Transportation | 06YILDIZ LIMO",
  description: "Premium corporate limousine and executive transportation in Peterborough & Ontario. Business travel, client pickups, corporate events. Professional, discreet, on-time. Call (709) 300-9006.",
  keywords: "corporate limo peterborough, executive transportation ontario, business limo service, corporate car service peterborough, executive chauffeur ontario",
  alternates: {
    canonical: "https://06yildizlimo.com/corporate-limo",
  },
  openGraph: {
    title: "Corporate Limo Service Peterborough | 06YILDIZ LIMO",
    description: "Premium executive transportation for business professionals in Peterborough & Ontario. On-time, professional, discreet.",
    type: "website",
    url: "https://06yildizlimo.com/corporate-limo",
  },
}

const services = [
  { title: "Airport Transfers", desc: "Reliable pickups and drop-offs to Toronto Pearson, Billy Bishop, and all Ontario airports." },
  { title: "Client Entertainment", desc: "Impress your clients with a luxury vehicle and professional chauffeur." },
  { title: "Corporate Events", desc: "Conference transportation, team outings, and corporate retreats." },
  { title: "Road Shows", desc: "Multi-stop business travel across Ontario with a dedicated driver." },
  { title: "Executive Daily Travel", desc: "Regular commute service for executives who value their time." },
  { title: "VIP Guest Transport", desc: "First-class service for visiting executives and VIP guests." },
]

const features = [
  { icon: Clock, title: "Always On Time", desc: "We track traffic and plan ahead. Your schedule is our priority." },
  { icon: Shield, title: "Discreet & Professional", desc: "Confidentiality guaranteed. Our chauffeurs are trained professionals." },
  { icon: Wifi, title: "In-Car Wi-Fi", desc: "Stay productive during your journey with complimentary Wi-Fi." },
  { icon: Briefcase, title: "Corporate Accounts", desc: "Monthly invoicing available for regular corporate clients." },
  { icon: Star, title: "5-Star Rated", desc: "Trusted by Peterborough's business community." },
  { icon: CheckCircle, title: "Fixed Pricing", desc: "Transparent corporate rates. No hidden fees, ever." },
]

export default function CorporateLimoPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main role="main" className="pt-20">

        {/* Hero */}
        <section className="relative py-20 bg-gradient-to-br from-black via-zinc-900 to-black text-white text-center px-4">
          <div className="container mx-auto max-w-4xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#BF953F]/20 border border-[#BF953F]/40 text-[#BF953F] mb-6">
              <Briefcase className="w-4 h-4" />
              <span className="text-sm font-semibold tracking-wider uppercase">Corporate Transportation</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-serif font-black mb-6">
              Executive Limo Service <span className="text-[#BF953F]">Peterborough</span>
            </h1>
            <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
              Premium corporate transportation for business professionals across Ontario. Punctual, professional, and discreet. Corporate accounts available.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:+17093009006">
                <Button size="lg" className="bg-[#BF953F] hover:bg-[#B38728] text-black font-bold text-lg px-8 py-6 rounded-full">
                  <Phone className="mr-2 w-5 h-5" />
                  Call: (709) 300-9006
                </Button>
              </a>
              <a href="https://wa.me/17093009006?text=Hi%2C%20I%27m%20interested%20in%20corporate%20limo%20service." target="_blank" rel="noopener noreferrer">
                <Button size="lg" variant="outline" className="border-[#25D366] text-[#25D366] hover:bg-[#25D366]/10 font-bold text-lg px-8 py-6 rounded-full">
                  WhatsApp Us
                </Button>
              </a>
            </div>
          </div>
        </section>

        {/* Services */}
        <section className="py-16 px-4 bg-zinc-950">
          <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl font-serif font-bold text-white text-center mb-4">Corporate Services</h2>
            <p className="text-gray-400 text-center mb-12">Tailored transportation solutions for your business needs</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((s) => (
                <div key={s.title} className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 hover:border-[#BF953F]/50 transition-colors">
                  <h3 className="text-white font-bold text-lg mb-2">{s.title}</h3>
                  <p className="text-gray-400 text-sm">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="py-16 px-4 bg-black">
          <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl font-serif font-bold text-white text-center mb-12">The 06YILDIZ Difference</h2>
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

        {/* Corporate Account CTA */}
        <section className="py-16 px-4 bg-zinc-900 border-y border-zinc-800">
          <div className="container mx-auto max-w-4xl">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              <div>
                <h2 className="text-2xl font-serif font-bold text-white mb-2">Open a Corporate Account</h2>
                <p className="text-gray-400">Monthly invoicing, priority booking, and dedicated account manager for regular business clients.</p>
              </div>
              <a href="mailto:06yildizlimousine@gmail.com?subject=Corporate Account Inquiry" className="flex-shrink-0">
                <Button size="lg" className="bg-[#BF953F] hover:bg-[#B38728] text-black font-bold px-8 py-6 rounded-full">
                  Enquire Now
                </Button>
              </a>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 px-4 bg-[#BF953F] text-black text-center">
          <div className="container mx-auto max-w-2xl">
            <h2 className="text-3xl font-serif font-bold mb-4">Ready to Elevate Your Business Travel?</h2>
            <p className="text-black/80 mb-8 text-lg">Call us now for a corporate rate quote. Available 24/7.</p>
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
