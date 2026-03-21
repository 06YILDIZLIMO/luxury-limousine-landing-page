import Image from "next/image"
import Link from "next/link"

export default function PointToPointPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-black via-zinc-950 to-black text-white">
      <section className="container mx-auto px-4 py-20 md:py-28">
        <div className="max-w-5xl mx-auto">
          <div className="inline-flex items-center rounded-full border border-yellow-500/30 bg-yellow-500/10 px-4 py-1 mb-6">
            <span className="text-yellow-400 text-sm tracking-wide uppercase">Premium Service</span>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
            Point-to-<span className="text-yellow-400">Point</span>
          </h1>

          <p className="text-zinc-300 text-lg leading-relaxed mb-10 max-w-4xl">
            Direct transportation to any destination across Ontario with premium comfort and style. Whether it&apos;s a
            dinner reservation, concert, or personal appointment, arrive in elegance. 24/7 availability for your
            convenience.
          </p>

          <div className="relative overflow-hidden rounded-xl shadow-2xl shadow-yellow-500/10 border border-yellow-500/20 mb-10">
            <Image
              src="/Suburban.webp"
              alt="Black limousine arriving at a luxury restaurant and concert venue at night"
              width={1600}
              height={900}
              className="w-full h-auto object-cover"
            />
          </div>

          <Link
            href="/booking"
            className="inline-flex items-center justify-center rounded-xl bg-yellow-400 px-8 py-4 text-black font-semibold text-lg hover:bg-yellow-300 transition-colors shadow-2xl shadow-yellow-500/30"
          >
            Book Your Ride Now
          </Link>
        </div>
      </section>
    </main>
  )
}
