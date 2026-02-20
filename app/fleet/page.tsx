import { Header } from "@/components/header"
import { Fleet } from "@/components/fleet"
import { Footer } from "@/components/footer"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Our Fleet - Premium Luxury Vehicles | 06YILDIZ LIMO",
  description: "Explore our collection of premium luxury vehicles including Rolls-Royce Phantom, Mercedes-Benz S-Class, BMW 750Li, Cadillac Escalade, and more. Professional chauffeur service in Peterborough, Ontario.",
  keywords: "luxury fleet, premium vehicles, Rolls-Royce, Mercedes-Benz, BMW, Cadillac Escalade, Lincoln Navigator, limousine fleet, Peterborough limo",
  alternates: {
    canonical: "https://06yildizlimo.com/fleet",
  },
  openGraph: {
    title: "Our Fleet - Premium Luxury Vehicles | 06YILDIZ LIMO",
    description: "Explore our collection of premium luxury vehicles for your special occasions and business travel needs.",
    type: "website",
    url: "https://06yildizlimo.com/fleet",
  },
}

export default function FleetPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main role="main" className="pt-20">
        <Fleet />
      </main>
      <Footer />
    </div>
  )
}
