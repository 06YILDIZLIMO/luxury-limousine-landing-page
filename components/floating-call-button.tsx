"use client"

import { Phone } from "lucide-react"

export function FloatingCallButton() {
  return (
    <>
      {/* Mobil: Ekranın altında sabit "Ara" butonu */}
      <a
        href="tel:+17093009006"
        className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 flex items-center gap-3 bg-[#BF953F] hover:bg-[#B38728] text-black font-bold text-base px-6 py-4 rounded-full shadow-2xl shadow-[#BF953F]/40 transition-all hover:scale-105 active:scale-95 lg:hidden"
        aria-label="Call 06YILDIZ LIMO"
      >
        <Phone className="w-5 h-5 animate-pulse" />
        <span>Call Now: (709) 300-9006</span>
      </a>

      {/* Desktop: Sağ alt köşede sabit "Ara" butonu */}
      <a
        href="tel:+17093009006"
        className="fixed bottom-24 right-6 z-50 hidden lg:flex items-center gap-2 bg-[#BF953F] hover:bg-[#B38728] text-black font-bold text-sm px-5 py-3 rounded-full shadow-2xl shadow-[#BF953F]/40 transition-all hover:scale-105 active:scale-95"
        aria-label="Call 06YILDIZ LIMO"
      >
        <Phone className="w-4 h-4" />
        <span>(709) 300-9006</span>
      </a>
    </>
  )
}
