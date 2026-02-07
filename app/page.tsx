import { Hero } from "@/components/hero"
import { Fleet } from "@/components/fleet"

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Hero />
      <Fleet />
    </main>
  )
}
