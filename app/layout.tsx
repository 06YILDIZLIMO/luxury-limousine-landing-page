import React from "react"
import type { Metadata } from 'next'
import { Playfair_Display, Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const playfair = Playfair_Display({ 
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
})

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

export const metadata: Metadata = {
  title: '06YILDIZ LIMO - Luxury Limousine Services in Ontario, Canada',
  description: 'Premium chauffeur-driven limousine services for corporate events, special occasions, and airport transfers in Peterborough and across Ontario.',
  keywords: 'limousine service, luxury transportation, chauffeur service, Peterborough, Ontario, Canada, corporate events, wedding limo, airport transfer',
  verification: {
    google: "fJL3__QsjMej_U0sJZ-CPuIDfJgYNyDcKmVlVAb9Rtk",
  },
  icons: {
    icon: '/yildizlimo.png',
    apple: '/yildizlimo.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${playfair.variable} ${inter.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
