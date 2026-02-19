import { useEffect } from 'react'
import { usePathname, useSearchParams } from 'next/navigation'

declare global {
  interface Window {
    fbq: any
    _fbq: any
  }
}

export const FB_PIXEL_ID = process.env.NEXT_PUBLIC_FACEBOOK_PIXEL_ID

// Initialize Facebook Pixel
export const initFacebookPixel = () => {
  if (!FB_PIXEL_ID) {
    console.warn('Facebook Pixel ID not found')
    return
  }

  if (typeof window !== 'undefined' && !window.fbq) {
    const script = `
      !function(f,b,e,v,n,t,s)
      {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
      n.callMethod.apply(n,arguments):n.queue.push(arguments)};
      if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
      n.queue=[];t=b.createElement(e);t.async=!0;
      t.src=v;s=b.getElementsByTagName(e)[0];
      s.parentNode.insertBefore(t,s)}(window, document,'script',
      'https://connect.facebook.net/en_US/fbevents.js');
      fbq('init', '${FB_PIXEL_ID}');
    `
    const scriptElement = document.createElement('script')
    scriptElement.innerHTML = script
    document.head.appendChild(scriptElement)

    // Add noscript pixel
    const noscript = document.createElement('noscript')
    const img = document.createElement('img')
    img.height = 1
    img.width = 1
    img.style.display = 'none'
    img.src = `https://www.facebook.com/tr?id=${FB_PIXEL_ID}&ev=PageView&noscript=1`
    noscript.appendChild(img)
    document.body.appendChild(noscript)
  }
}

// Track page view
export const pageview = () => {
  if (typeof window !== 'undefined' && window.fbq) {
    window.fbq('track', 'PageView')
  }
}

// Standard Events
export const trackEvent = (eventName: string, options = {}) => {
  if (typeof window !== 'undefined' && window.fbq) {
    window.fbq('track', eventName, options)
  }
}

// Custom Events
export const trackCustomEvent = (eventName: string, options = {}) => {
  if (typeof window !== 'undefined' && window.fbq) {
    window.fbq('trackCustom', eventName, options)
  }
}

// Standard Facebook Events with proper typing
export const FacebookEvents = {
  // Track when user views content (fleet, services)
  ViewContent: (data: {
    content_name?: string
    content_category?: string
    content_ids?: string[]
    content_type?: string
    value?: number
    currency?: string
  }) => {
    trackEvent('ViewContent', data)
  },

  // Track when user initiates checkout (booking form submission)
  InitiateCheckout: (data: {
    content_ids?: string[]
    content_name?: string
    content_category?: string
    num_items?: number
    value?: number
    currency?: string
  }) => {
    trackEvent('InitiateCheckout', data)
  },

  // Track when user adds to cart (selects service)
  AddToCart: (data: {
    content_ids?: string[]
    content_name?: string
    content_type?: string
    value?: number
    currency?: string
  }) => {
    trackEvent('AddToCart', data)
  },

  // Track purchase completion
  Purchase: (data: {
    content_ids?: string[]
    content_name?: string
    content_type?: string
    value: number
    currency: string
    transaction_id?: string
  }) => {
    trackEvent('Purchase', data)
  },

  // Track lead generation (contact form)
  Lead: (data: {
    content_name?: string
    content_category?: string
    value?: number
    currency?: string
  }) => {
    trackEvent('Lead', data)
  },

  // Track search
  Search: (data: {
    search_string?: string
    content_category?: string
  }) => {
    trackEvent('Search', data)
  },

  // Track contact
  Contact: (data: {
    content_name?: string
    content_category?: string
  }) => {
    trackEvent('Contact', data)
  },
}

// Hook to track page views on route changes
export const usePageView = () => {
  const pathname = usePathname()
  const searchParams = useSearchParams()

  useEffect(() => {
    if (pathname) {
      pageview()
    }
  }, [pathname, searchParams])
}

// Generate event ID for deduplication
export const generateEventId = () => {
  return `${Date.now()}_${Math.random().toString(36).substr(2, 9)}`
}

// Hash user data for advanced matching (client-side)
export const hashUserData = async (data: string): Promise<string> => {
  if (typeof window === 'undefined' || !window.crypto || !window.crypto.subtle) {
    return data
  }

  const encoder = new TextEncoder()
  const dataBuffer = encoder.encode(data.toLowerCase().trim())
  const hashBuffer = await window.crypto.subtle.digest('SHA-256', dataBuffer)
  const hashArray = Array.from(new Uint8Array(hashBuffer))
  const hashHex = hashArray.map(b => b.toString(16).padStart(2, '0')).join('')
  return hashHex
}
