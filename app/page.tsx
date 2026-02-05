import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Fleet } from "@/components/fleet"
import { Services } from "@/components/services"
import { Booking } from "@/components/booking"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"

export default function Page() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <Fleet />
        <Services />
        <Booking />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
