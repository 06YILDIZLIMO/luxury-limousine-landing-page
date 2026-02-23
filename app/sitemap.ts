import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://06yildizlimo.com'
  const currentDate = new Date()

  return [
    // Home Page - Highest Priority
    {
      url: baseUrl,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 1,
      images: [
        'https://06yildizlimo.com/og-image.png',
        'https://06yildizlimo.com/yildizlimo.webp',
      ],
    },
    // Booking Page - High Priority (conversion page)
    {
      url: `${baseUrl}/booking`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.95,
    },
    // Fleet Page
    {
      url: `${baseUrl}/fleet`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.85,
      images: [
        'https://06yildizlimo.com/rolls.webp',
        'https://06yildizlimo.com/mercedes.webp',
        'https://06yildizlimo.com/bmw.webp',
        'https://06yildizlimo.com/escalade.webp',
        'https://06yildizlimo.com/lincoln.webp',
        'https://06yildizlimo.com/yukon.webp',
        'https://06yildizlimo.com/Suburban.webp',
        'https://06yildizlimo.com/VolvoXc90.webp',
      ],
    },
    // Service Page
    {
      url: `${baseUrl}/service`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.85,
    },
    // Airport Transfer Landing Page - High Priority (SEO)
    {
      url: `${baseUrl}/airport-transfer`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    // Wedding Limo Landing Page - High Priority (SEO)
    {
      url: `${baseUrl}/wedding-limo`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    // Corporate Limo Landing Page - High Priority (SEO)
    {
      url: `${baseUrl}/corporate-limo`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    // Contact Page
    {
      url: `${baseUrl}/contact`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    // Cancellation Policy
    {
      url: `${baseUrl}/cancellation-policy`,
      lastModified: currentDate,
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    // Privacy Policy
    {
      url: `${baseUrl}/privacy-policy`,
      lastModified: currentDate,
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    // Terms & Conditions
    {
      url: `${baseUrl}/terms-conditions`,
      lastModified: currentDate,
      changeFrequency: 'yearly',
      priority: 0.3,
    },
  ]
}
