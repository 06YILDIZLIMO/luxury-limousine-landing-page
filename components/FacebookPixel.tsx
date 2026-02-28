'use client'

import { useEffect, Suspense } from 'react'
import { usePageView, FB_PIXEL_ID } from '@/lib/facebook-pixel'

// Inner component that uses useSearchParams (must be wrapped in Suspense)
function FacebookPageViewTracker() {
  usePageView()
  return null
}

// Loads Facebook Pixel ONLY after first user interaction (scroll, click, etc.)
// This prevents fbevents.js (96 KiB) from blocking LCP/FCP
function FacebookPixelInit() {
  useEffect(() => {
    let loaded = false

    const loadPixel = () => {
      if (loaded) return
      loaded = true

      // Remove all listeners immediately
      INTERACTION_EVENTS.forEach(ev =>
        window.removeEventListener(ev, loadPixel)
      )
      clearTimeout(fallbackTimer)

      // Set up fbq queue BEFORE the script loads so calls don't get lost
      if (typeof window !== 'undefined' && !window.fbq) {
        const n: any = function (...args: any[]) {
          n.callMethod ? n.callMethod.apply(n, args) : n.queue.push(args)
        }
        n.push = n
        n.loaded = true
        n.version = '2.0'
        n.queue = []
        window.fbq = n
        window._fbq = n
      }

      // Fire init + PageView immediately (queued until script loads)
      window.fbq('init', FB_PIXEL_ID)
      window.fbq('track', 'PageView')

      // Inject fbevents.js asynchronously
      const script = document.createElement('script')
      script.async = true
      script.src = 'https://connect.facebook.net/en_US/fbevents.js'
      document.head.appendChild(script)
    }

    const INTERACTION_EVENTS = ['scroll', 'click', 'mousemove', 'touchstart', 'keydown']

    // Attach listeners (passive = no scroll jank)
    INTERACTION_EVENTS.forEach(ev =>
      window.addEventListener(ev, loadPixel, { once: true, passive: true })
    )

    // Fallback: load after 5 s even if user never interacts
    const fallbackTimer = setTimeout(loadPixel, 5000)

    return () => {
      INTERACTION_EVENTS.forEach(ev => window.removeEventListener(ev, loadPixel))
      clearTimeout(fallbackTimer)
    }
  }, [])

  return null
}

export function FacebookPixel() {
  return (
    <>
      <FacebookPixelInit />
      <Suspense fallback={null}>
        <FacebookPageViewTracker />
      </Suspense>
    </>
  )
}
