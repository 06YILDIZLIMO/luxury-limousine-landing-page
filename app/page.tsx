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
<section className="py-24 bg-black">
  <div className="max-w-6xl mx-auto px-4">
    
    <h2 className="text-4xl font-serif text-yellow-500 text-center mb-16">Our Premium Fleet</h2>

    {/* ARAÇ KARTI BAŞLANGICI */}
    <div className="group bg-gray-900 rounded-2xl overflow-hidden border border-gray-800 hover:border-yellow-600/50 transition-all duration-300">
      
      <div className="flex flex-col md:flex-row">
        
        {/* RESİM KISMI (SOL TARAF) */}
        {/* 'md:w-2/5' diyerek ekranın %40'ını veriyoruz. */}
        <div className="relative w-full md:w-2/5 h-64 md:h-auto">
           <Image 
             src="/cadillac.jpg"   // Araç resminin adı
             alt="Cadillac Escalade"
             fill
             className="object-cover" // Resmi kutuya sığdırır, taşmasını engeller
           />
        </div>

        {/* YAZI KISMI (SAĞ TARAF) */}
        <div className="p-8 w-full md:w-3/5 flex flex-col justify-center">
          <div className="flex justify-between items-start mb-4">
            <div>
              <h3 className="text-2xl font-bold text-white mb-1">Cadillac Escalade ESV</h3>
              <p className="text-yellow-500 text-sm font-semibold tracking-wider">PRESIDENTIAL CLASS</p>
            </div>
            <span className="bg-white/10 text-white px-3 py-1 rounded text-xs">2025 Model</span>
          </div>

          <p className="text-gray-400 mb-6 text-sm leading-relaxed">
            Experience unmatched luxury with our flagship SUV. Features massage seats, 
            AKG Studio sound system, and privacy partition. Perfect for VIP transfers.
          </p>

          {/* Özellik İkonları */}
          <div className="grid grid-cols-2 gap-y-2 gap-x-4 mb-8 text-sm text-gray-300">
            <div className="flex items-center">👤 <span className="ml-2">6 Passengers</span></div>
            <div className="flex items-center">🧳 <span className="ml-2">5 Luggage</span></div>
            <div className="flex items-center">❄️ <span className="ml-2">Heated Seats</span></div>
            <div className="flex items-center">📡 <span className="ml-2">Free Wi-Fi</span></div>
          </div>

          <button className="w-full bg-yellow-600 hover:bg-yellow-500 text-black font-bold py-3 px-6 rounded-lg transition-colors">
            Reserve This Vehicle
          </button>
        </div>

      </div>
    </div>
    {/* ARAÇ KARTI BİTİŞİ */}

  </div>
</section>
