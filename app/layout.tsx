import React from "react"
import type { Metadata } from 'next'
import { Playfair_Display, Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { FacebookPixel } from '@/components/FacebookPixel'
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
  metadataBase: new URL('https://www.06yildizlimo.com'),
  alternates: {
    canonical: 'https://www.06yildizlimo.com',
  },
  openGraph: {
    type: 'website',
    locale: 'en_CA',
    url: 'https://www.06yildizlimo.com',
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
      { url: '/yildizlimo.png', sizes: '512x512', type: 'image/png' },
    ],
    apple: [
      { url: '/yildizlimo.png', sizes: '180x180', type: 'image/png' },
    ],
    shortcut: '/favicon.ico',
  },
}

// ElevenLabs ConvAI Widget Configuration
const ELEVENLABS_SCRIPT_URL = "https://unpkg.com/@elevenlabs/convai-widget-embed"
const ELEVENLABS_AGENT_ID = "agent_0001kh8zyfnkf55a1q355vb3khzq"

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        {/* ElevenLabs ConvAI Widget Script */}
        <script 
          src={ELEVENLABS_SCRIPT_URL} 
          async 
          type="text/javascript" 
          crossOrigin="anonymous"
        />
        
        {/* Meta Pixel Code */}
        <script
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
              fbq('init', '1523730565356174');
              fbq('track', 'PageView');
            `,
          }}
        />
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: 'none' }}
            src="https://www.facebook.com/tr?id=1523730565356174&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>
        {/* End Meta Pixel Code */}
      </head>
      <body className={`${playfair.variable} ${inter.variable} font-sans antialiased`}>
        <FacebookPixel />
        {children}
        <Analytics />
        
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
