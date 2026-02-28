                                                import { Header } from "@/components/header"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react"
import type { Metadata } from "next"                 

export const metadata: Metadata = {
  title: "Contact 06YILDIZ LIMO Peterborough | Call (709) 300-9006 | 24/7 Limo Service",
  description: "Contact 06YILDIZ LIMO in Peterborough, Ontario. Call +1 (709) 300-9006, WhatsApp, or email 06yildizlimousine@gmail.com. Available 24/7 for airport transfers, weddings, and corporate events across Ontario.",
  keywords: "contact 06YILDIZ LIMO, Peterborough limo phone number, book limousine Peterborough, limo service contact Ontario, 24/7 limo Peterborough",
  alternates: {
    canonical: "https://06yildizlimo.com/contact",
  },
  openGraph: {
    title: "Contact 06YILDIZ LIMO Peterborough | Call (709) 300-9006",
    description: "Contact us 24/7 for luxury limousine services in Peterborough and Ontario. Call, WhatsApp, or email us for a free quote.",
    type: "website",
    url: "https://06yildizlimo.com/contact",
  },
}

const contactInfo = [
  {
    icon: Phone,
    title: "Phone / Call",
    value: "+1 (709) 300-9006",
    href: "tel:+17093009006",
    desc: "Call us anytime — we answer 24/7",
  },
  {
    icon: MessageCircle,
    title: "WhatsApp",
    value: "WhatsApp Us",
    href: "https://wa.me/17093009006?text=Hi%2C%20I%27d%20like%20to%20book%20a%20limousine.",
    desc: "Quick quotes via WhatsApp",
  },
  {
    icon: Mail,
    title: "Email",
    value: "06yildizlimousine@gmail.com",
    href: "mailto:06yildizlimousine@gmail.com",
    desc: "We respond within 2 hours",
  },
  {
    icon: MapPin,
    title: "Location",
    value: "Peterborough, Ontario",
    href: "https://maps.google.com/?q=2270+Lynhaven+Road+Peterborough+ON",
    desc: "2270 Lynhaven Road, K9K 1V7",
  },
  {
    icon: Clock,
    title: "Hours",
    value: "24 / 7 / 365",
    href: null,
    desc: "Always available for your needs",
  },
]

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main role="main">

        {/* Unique Hero Section */}
        <section className="relative pt-32 pb-20 bg-gradient-to-br from-black via-zinc-900 to-black text-white text-center px-4">
          <div className="container mx-auto max-w-4xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#BF953F]/20 border border-[#BF953F]/40 text-[#BF953F] mb-6">
              <Phone className="w-4 h-4" />
              <span className="text-sm font-semibold tracking-wider uppercase">Available 24/7</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-serif font-black mb-6 leading-tight">
              Contact <span className="text-[#BF953F]">06YILDIZ LIMO</span>
            </h1>
            <p className="text-xl text-gray-300 mb-4 max-w-2xl mx-auto">
              Ready to book your luxury ride? Get a free quote in 30 minutes. Call, WhatsApp, or email us — we're available around the clock.
            </p>
            <p className="text-gray-400 mb-10 max-w-xl mx-auto">
              Serving Peterborough, Toronto, Niagara Falls, Muskoka, and all of Ontario. Professional chauffeurs. Fixed pricing. No surprises.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:+17093009006">
                <Button size="lg" className="bg-[#BF953F] hover:bg-[#B38728] text-black font-bold text-lg px-8 py-4 rounded-full">
                  <Phone className="mr-2 w-5 h-5" />
                  Call: (709) 300-9006
                </Button>
              </a>
              <a href="https://wa.me/17093009006?text=Hi%2C%20I%27d%20like%20to%20book%20a%20limousine." target="_blank" rel="noopener noreferrer">
                <Button size="lg" variant="outline" className="border-[#25D366] text-[#25D366] hover:bg-[#25D366]/10 font-bold text-lg px-8 py-4 rounded-full">
                  <MessageCircle className="mr-2 w-5 h-5" />
                  WhatsApp
                </Button>
              </a>
            </div>
          </div>
        </section>

        {/* Quick Contact Info Cards */}
        <section className="py-16 px-4 bg-zinc-950">
          <div className="container mx-auto max-w-5xl">
            <h2 className="text-2xl font-serif font-bold text-white text-center mb-10">
              Get in Touch — <span className="text-[#BF953F]">Multiple Ways to Reach Us</span>
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {contactInfo.map((item) => (
                <div key={item.title} className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 hover:border-[#BF953F]/40 transition-colors">
                  <div className="w-12 h-12 rounded-full bg-[#BF953F]/20 flex items-center justify-center mb-4">
                    <item.icon className="w-6 h-6 text-[#BF953F]" />
                  </div>
                  <h3 className="text-white font-bold mb-1">{item.title}</h3>
                  {item.href ? (
                    <a href={item.href} target={item.href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer" className="text-[#BF953F] font-semibold hover:underline block mb-2">
                      {item.value}
                    </a>
                  ) : (
                    <p className="text-[#BF953F] font-semibold mb-2">{item.value}</p>
                  )}
                  <p className="text-gray-400 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Form Component */}
        <Contact />

      </main>
      <Footer />
    </div>
  )
}
