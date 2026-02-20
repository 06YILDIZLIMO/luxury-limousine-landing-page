import { Header } from "@/components/header"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Contact Us - Get in Touch | 06YILDIZ LIMO",
  description: "Contact 06YILDIZ LIMO for luxury limousine services in Peterborough, Ontario. Call us at +1 (709) 300-9006 or email 06yildizlimousine@gmail.com. Available 24/7 for your transportation needs.",
  keywords: "contact limo service, Peterborough limousine, book limo, luxury transportation contact, 06YILDIZ LIMO contact",
  alternates: {
    canonical: "https://06yildizlimo.com/contact",
  },
  openGraph: {
    title: "Contact Us - Get in Touch | 06YILDIZ LIMO",
    description: "Contact us for luxury limousine services. Available 24/7 for your transportation needs in Peterborough and across Ontario.",
    type: "website",
    url: "https://06yildizlimo.com/contact",
  },
}

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main role="main" className="pt-20">
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
