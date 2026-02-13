import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://06yildizlimo.com'
  const currentDate = new Date()

  return [
    // Home Page
    {
      url: baseUrl,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 1,
      images: ['https://06yildizlimo.com/yildizlimo.png'],
    },
    // Booking Page
    {
      url: `${baseUrl}/booking`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    // Services Page
    {
      url: `${baseUrl}/services`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    // Fleet Page
    {
      url: `${baseUrl}/fleet`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.8,
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
    // Booking Success Page
    {
      url: `${baseUrl}/booking/success`,
      lastModified: currentDate,
      changeFrequency: 'never',
      priority: 0.5,
    },
  ]
}

