import React from "react"
import type { Metadata } from 'next'
import { Playfair_Display, Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { FacebookPixel } from '@/components/FacebookPixel'
import { FloatingCallButton } from '@/components/floating-call-button'
import Script from 'next/script'
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

// ElevenLabs ConvAI Widget - Custom Element Type Declaration
declare global {
  namespace JSX {
    interface IntrinsicElements {
      'elevenlabs-convai': React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement>,
        HTMLElement
      > & {
        'agent-id'?: string
        'background-color'?: string
        'chat-icon-url'?: string
        'chip-color'?: string
        'font-size'?: string
        'header-text-color'?: string
        'input-color'?: string
        'input-placeholder-color'?: string
        'launcher-icon-url'?: string
        'launcher-svg'?: string
        'marker-color'?: string
        metadata?: string
        'open-chat-on-load'?: 'true' | 'false'
        position?: 'left' | 'right'
        'predefined-messages'?: string
        'primary-color'?: string
        'prompt-suggestions'?: string
        'reaction-timeout-ms'?: number
        'response-timeout-ms'?: number
        'short-cut-enabled'?: 'true' | 'false'
        'text-color'?: string
        'transparent-background'?: 'true' | 'false'
        'transfer-to-support'?: string
        voice?: string
        'voice-id'?: string
        'signed-url'?: string
      }
    }
  }
}

// SEO Metadata - Optimized for Peterborough & Toronto searches
export const metadata: Metadata = {
  title: '06YILDIZ LIMO | Luxury Limousine Service Peterborough & Toronto | Airport Transfers',
  description: 'Experience premium transportation with 06YILDIZ LIMO. Specialized in luxury airport transfers, wedding packages, and party bus rentals in Peterborough, Toronto, and the Kawarthas. Book your professional chauffeur today.',
  keywords: [
    'Limo service Peterborough',
    'Toronto airport limousine',
    'Party Bus rental Peterborough',
    'Wedding limo Toronto',
    '06YILDIZ LIMO',
    'Luxury transportation Ontario',
    'Airport transfers',
    'Luxury limousine',
    'Chauffeur service',
    'Peterborough Ontario',
    'Toronto to Peterborough',
    'Pearson Airport',
    'Niagara limousine'
  ].join(', '),
  authors: [{ name: '06YILDIZ LIMO' }],
  creator: '06YILDIZ LIMO',
  publisher: '06YILDIZ LIMO',
  metadataBase: new URL('https://06yildizlimo.com'),

  openGraph: {
    type: 'website',
    locale: 'en_CA',
    url: 'https://06yildizlimo.com',
    siteName: '06YILDIZ LIMO - Luxury Limousine Service',
    title: '06YILDIZ LIMO | Premium Limousine Service in Peterborough & Toronto',
    description: 'Experience world-class luxury transportation. Premium chauffeur-driven limousine services for corporate events, weddings, airport transfers, and special occasions in Peterborough and across Ontario.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: '06YILDIZ LIMO - Luxury Limousine Service in Peterborough & Toronto',
        type: 'image/png',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@06yildizlimo',
    creator: '@06yildizlimo',
    title: '06YILDIZ LIMO | Premium Limousine Service',
    description: 'Experience world-class luxury transportation. Premium airport transfers, wedding packages, and corporate events in Peterborough & Toronto.',
    images: ['/og-image.png'],
  },
  robots: { index: true, follow: true },
  verification: { google: "fJL3__QsjMej_U0sJZ-CPuIDfJgYNyDcKmVlVAb9Rtk" },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/yildizlimo.webp', sizes: '512x512', type: 'image/webp' },
    ],
    apple: [
      { url: '/yildizlimo.webp', sizes: '180x180', type: 'image/webp' },
    ],
    shortcut: '/favicon.ico',
  },
}

// ElevenLabs ConvAI Widget Configuration
const ELEVENLABS_SCRIPT_URL = "https://unpkg.com/@elevenlabs/convai-widget-embed"
const ELEVENLABS_AGENT_ID = "agent_0001kh8zyfnkf55a1q355vb3khzq"
const FB_PIXEL_ID = "1523730565356174"

// JSON-LD: Local Business Schema (Google My Business signals)
const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LimousineService",
  "@id": "https://06yildizlimo.com/#business",
  "name": "06YILDIZ LIMO",
  "alternateName": "06 Yildiz Limousine",
  "description": "Premium luxury limousine service in Peterborough, Ontario. Airport transfers, corporate events, weddings, and special occasions across Ontario.",
  "url": "https://06yildizlimo.com",
  "telephone": "+17093009006",
  "email": "06yildizlimousine@gmail.com",
  "priceRange": "$$",
  "currenciesAccepted": "CAD",
  "paymentAccepted": "Cash, Credit Card, Debit Card",
  "logo": "https://06yildizlimo.com/yildizlimo.webp",
  "image": "https://06yildizlimo.com/og-image.png",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "2270 Lynhaven Road",
    "addressLocality": "Peterborough",
    "addressRegion": "ON",
    "postalCode": "K9K 1V7",
    "addressCountry": "CA"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 44.3091,
    "longitude": -78.3197
  },
  "areaServed": [
    { "@type": "City", "name": "Peterborough" },
    { "@type": "City", "name": "Toronto" },
    { "@type": "City", "name": "Niagara Falls" },
    { "@type": "City", "name": "Muskoka" },
    { "@type": "State", "name": "Ontario" }
  ],
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],
      "opens": "00:00",
      "closes": "23:59"
    }
  ],
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Luxury Limousine Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Airport Transfer Peterborough to Toronto",
          "description": "Reliable airport transportation from Peterborough to Toronto Pearson Airport (YYZ) with flight tracking and meet-and-greet service."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Wedding Limousine Peterborough",
          "description": "Elegant wedding limousine packages with custom decorations and red-carpet service in Peterborough and Ontario."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Corporate Limousine Service Ontario",
          "description": "Professional chauffeur services for business meetings, conferences, and executive travel across Ontario."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Special Occasions Limo",
          "description": "Luxury transportation for birthdays, anniversaries, proms, and bachelorette parties in Peterborough."
        }
      }
    ]
  },
  "sameAs": [
    "https://www.facebook.com/06yildizlimo",
    "https://www.instagram.com/06yildizlimo"
  ]
}

// JSON-LD: FAQ Schema (shows Q&A in Google search results)
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How much does a limousine service cost in Peterborough?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Our luxury limousine services start from $75 CAD deposit. Airport transfers from Peterborough to Toronto Pearson Airport (YYZ) typically range from $150-$250 CAD depending on the vehicle. Contact us for a free custom quote within 30 minutes."
      }
    },
    {
      "@type": "Question",
      "name": "Do you offer airport transfers from Peterborough to Toronto?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes! We specialize in airport transfers from Peterborough to Toronto Pearson International Airport (YYZ) and Billy Bishop Airport (YTZ). We track your flight and adjust pickup times accordingly. Available 24/7."
      }
    },
    {
      "@type": "Question",
      "name": "What luxury vehicles do you have in your fleet?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Our fleet includes Rolls-Royce Phantom, Mercedes-Benz S-Class, BMW 750Li, Cadillac Escalade ESV, Lincoln Navigator L, GMC Yukon XL, Volvo XC90, and a luxury party bus. All vehicles are meticulously maintained and driven by professional chauffeurs."
      }
    },
    {
      "@type": "Question",
      "name": "Do you provide wedding limousine services in Peterborough?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Absolutely! We offer elegant wedding limousine packages including custom decorations, red-carpet service, and professional chauffeurs in formal attire. We serve Peterborough, Toronto, and all of Ontario."
      }
    },
    {
      "@type": "Question",
      "name": "How far in advance should I book a limousine?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We recommend booking at least 48 hours in advance for regular transfers and 2-4 weeks for weddings and special events. However, we also accommodate last-minute bookings based on availability. Call us at +1 (709) 300-9006 for urgent requests."
      }
    },
    {
      "@type": "Question",
      "name": "Are your chauffeurs professionally trained?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, all our chauffeurs are professionally trained, licensed, background-checked, and insured. They are impeccably dressed in formal attire and have extensive knowledge of Ontario routes. Multilingual capabilities are available."
      }
    }
  ]
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        {/* Preload LCP image — fetched before HTML body is parsed */}
        <link rel="preload" href="/yildizlimo.png" as="image" type="image/png" fetchPriority="high" />
        {/* CRITICAL CSS - Prevents flash of white & FOUC. Covers full above-the-fold hero. */}
        <style dangerouslySetInnerHTML={{ __html: `
:root{--background:oklch(8% 0 0);--foreground:oklch(98% 0 0);--gold:oklch(70% .12 85);--card:oklch(12% 0 0);--border:oklch(20% 0 0)}
*,::before,::after{box-sizing:border-box}
html{line-height:1.5;-webkit-text-size-adjust:100%}
body{margin:0;background-color:oklch(8% 0 0);color:oklch(98% 0 0);font-family:var(--font-inter,ui-sans-serif,system-ui,sans-serif);min-height:100vh}
header{position:fixed;top:0;left:0;right:0;z-index:50;transition:all .3s}
.min-h-screen{min-height:100vh}
.bg-background{background-color:oklch(8% 0 0)}
.relative{position:relative}
.flex{display:flex}
.items-center{align-items:center}
.justify-center{justify-content:center}
.justify-between{justify-content:space-between}
.text-center{text-align:center}
.font-serif{font-family:var(--font-playfair,Georgia,serif)}
.font-black{font-weight:900}
.font-bold{font-weight:700}
.text-white{color:#fff}
.text-gold{color:oklch(70% .12 85)}
.container{width:100%;margin-left:auto;margin-right:auto;padding-left:1rem;padding-right:1rem}
.px-4{padding-left:1rem;padding-right:1rem}
.py-24{padding-top:6rem;padding-bottom:6rem}
.pt-20{padding-top:5rem}
.h-20{height:5rem}
.w-full{width:100%}
.overflow-hidden{overflow:hidden}
.hidden{display:none}
.gap-8{gap:2rem}
.z-50{z-index:50}
.fixed{position:fixed}
.top-0{top:0}
.left-0{left:0}
.right-0{right:0}
.inset-0{inset:0}
.absolute{position:absolute}
.opacity-0{opacity:0}
.transition-all{transition:all .15s cubic-bezier(.4,0,.2,1)}
        `.replace(/\n\s*/g, '') }} />
        {/* JSON-LD: Local Business - Critical for Google indexing & GMB */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
        {/* JSON-LD: FAQ - Shows Q&A boxes in Google search results */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      </head>
      <body className={`${playfair.variable} ${inter.variable} font-sans antialiased`}>
        <FacebookPixel />
        {children}
        <FloatingCallButton />
        <Analytics />

        {/* Facebook Pixel - afterInteractive: does not block rendering */}
        <Script
          id="facebook-pixel"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '${FB_PIXEL_ID}');
              fbq('track', 'PageView');
            `,
          }}
        />
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: 'none' }}
            src={`https://www.facebook.com/tr?id=${FB_PIXEL_ID}&ev=PageView&noscript=1`}
            alt=""
          />
        </noscript>

        {/* ElevenLabs ConvAI Widget Script - lazyOnload: loads after page is interactive */}
        <Script
          src={ELEVENLABS_SCRIPT_URL}
          strategy="lazyOnload"
          crossOrigin="anonymous"
        />

        {/* ElevenLabs AI Voice Assistant Widget */}
        <elevenlabs-convai
          agent-id={ELEVENLABS_AGENT_ID}
          position="right"
          open-chat-on-load="false"
          transparent-background="true"
          primary-color="#B8860B"
          background-color="#1a1a1a"
          text-color="#ffffff"
          header-text-color="#B8860B"
          input-color="#2a2a2a"
          input-placeholder-color="#888888"
          chip-color="#B8860B"
          font-size="16px"
          transfer-to-support="+19179435984"
          predefined-messages={JSON.stringify([
            "Hello! I'd like to book a limousine for airport transfer.",
            "What vehicles do you have available?",
            "Can I get a quote for Peterborough to Toronto airport?",
            "Do you offer wedding limousine services?",
            "How much for a luxury sedan to YYZ?"
          ])}
          metadata={JSON.stringify({
            source: 'website',
            page: 'home',
            brand: '06YILDIZ LIMO'
          })}
        />
      </body>
    </html>
  )
}
