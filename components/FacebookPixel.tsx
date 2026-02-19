'use client'

import { useEffect, Suspense } from 'react'
import { initFacebookPixel, usePageView } from '@/lib/facebook-pixel'

// Inner component that uses useSearchParams (must be wrapped in Suspense)
function FacebookPageViewTracker() {
  usePageView()
  return null
}

// Main component that initializes the pixel
function FacebookPixelInit() {
  useEffect(() => {
    // Initialize Facebook Pixel on mount
    initFacebookPixel()
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
