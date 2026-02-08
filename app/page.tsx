import Image from "next/image"; // <--- İŞTE BU SATIR EKSİKTİ, O YÜZDEN HATA VERDİ.
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      
      {/* --- NAVBAR (MENÜ & LOGO) --- */}
      <nav className="fixed top-0 w-full z-50 bg-black/90 border-b border-white/10 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            
            {/* LOGO KISMI - Artık devasa olmayacak */}
            <div className="flex-shrink-0">
              <Link href="/">
                {/* Logo dosyanın adı "logo.png" olmalı (public klasöründe) */}
                <Image 
                  src="/logo.png" 
                  alt="06YILDIZ LIMO" 
                  width={180} 
                  height={60} 
                  className="h-12 w-auto object-contain"
                  priority
                />
              </Link>
            </div>

            {/* SAĞ TARAFAKİ LİNKLER */}
            <div className="hidden md:flex items-center space-x-8">
              <Link href="#" className="text-sm font-medium text-gray-300 hover:text-yellow-500 transition">HOME</Link>
              <Link href="#" className="text-sm font-medium text-gray-300 hover:text-yellow-500 transition">FLEET</Link>
              <Link href="#" className="text-sm font-medium text-gray-300 hover:text-yellow-500 transition">SERVICES</Link>
              <button className="bg-yellow-600 text-black px-5 py-2 rounded font-bold hover:bg-yellow-500 transition">
                BOOK NOW
              </button>
            </div>

          </div>
        </div>
      </nav>

      {/* --- HERO (GİRİŞ) BÖLÜMÜ --- */}
      <section className="relative h-screen flex items-center justify-center pt-20">
        <div className="text-center space-y-6 px-4">
            <h1 className="text-4xl md:text-6xl font-serif text-yellow-500 tracking-wider">
                06YILDIZ LIMO
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 font-light">
                Where Luxury Meets the Journey
            </p>
        </div>
      </section>

      {/* --- FLEET (FİLO) BÖLÜMÜ - DÜZELTİLMİŞ HALİ --- */}
      <section className="py-24 bg-zinc-950">
        <div className="max-w-6xl mx-auto px-4">
          
          <h2 className="text-3xl md:text-4xl font-serif text-center text-yellow-500 mb-16">
            Our Premium Fleet
          </h2>

          {/* ARAÇ KARTI */}
          <div className="bg-zinc-900 rounded-2xl overflow-hidden border border-zinc-800 hover:border-yellow-600/50 transition-all duration-300 shadow-2xl">
            <div className="flex flex-col md:flex-row">
              
              {/* SOL TARAFA RESİM (%40 Genişlik) */}
              <div className="relative w-full md:w-5/12 h-64 md:h-auto">
                {/* Araç resmin "cadillac.jpg" adıyla public klasöründe olmalı */}
                <Image 
                  src="/cadillac.jpg" 
                  alt="Cadillac Escalade" 
                  fill
                  className="object-cover"
                />
              </div>

              {/* SAĞ TARAFA YAZI (%60 Genişlik) */}
              <div className="w-full md:w-7/12 p-8 flex flex-col justify-center">
                <div className="flex justify-between items-start mb-4">
                    <div>
                        <h3 className="text-2xl font-bold text-white">Cadillac Escalade ESV</h3>
                        <span className="text-yellow-500 text-xs font-bold tracking-widest">PRESIDENTIAL CLASS</span>
                    </div>
                    <span className="bg-white/10 text-white text-xs px-2 py-1 rounded">2025 Model</span>
                </div>
                
                <p className="text-gray-400 mb-6 text-sm">
                  The ultimate symbol of power and luxury. Featuring massage seats, AKG sound system, and generous legroom for VIP transfers.
                </p>

                {/* ÖZELLİKLER */}
                <div className="grid grid-cols-2 gap-4 text-sm text-gray-300 mb-8">
                    <div className="flex items-center gap-2"><span>👤</span> 6 Passengers</div>
                    <div className="flex items-center gap-2"><span>🧳</span> 5 Luggage</div>
                    <div className="flex items-center gap-2"><span>❄️</span> Heated Seats</div>
                    <div className="flex items-center gap-2"><span>Wifi</span> Free Internet</div>
                </div>

                <button className="bg-yellow-600 hover:bg-yellow-500 text-black font-bold py-3 rounded w-full md:w-auto px-8 transition">
                  Reserve This Car
                </button>
              </div>

            </div>
          </div>

        </div>
      </section>

    </main>
  );
}
