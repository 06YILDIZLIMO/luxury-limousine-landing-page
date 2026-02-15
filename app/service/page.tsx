import { Header } from "@/components/header"
import { Services } from "@/components/services"
import { Footer } from "@/components/footer"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Our Services - Luxury Limousine Services | 06YILDIZ LIMO",
  description: "Professional limousine services including airport transfers, corporate events, weddings, special occasions, city tours, and point-to-point transportation in Peterborough and across Ontario.",
  keywords: "limousine services, airport transfer, corporate events, wedding limo, special occasions, city tours, Peterborough limo service, Ontario transportation",
  alternates: {
    canonical: "https://www.06yildizlimo.com/service",
  },
  openGraph: {
    title: "Our Services - Luxury Limousine Services | 06YILDIZ LIMO",
    description: "From corporate travel to life's most memorable moments, we provide exceptional limousine services tailored to your needs.",
    type: "website",
    url: "https://www.06yildizlimo.com/service",
  },
}

export default function ServicePage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main role="main" className="pt-20">
        <Services />
      </main>
      <Footer />
    </div>
  )
}
