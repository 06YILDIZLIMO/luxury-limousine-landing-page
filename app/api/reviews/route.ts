import { NextResponse } from 'next/server'

const API_KEY = process.env.GOOGLE_PLACES_API_KEY
const PLACE_ID = process.env.GOOGLE_PLACE_ID

// Cache configuration
const CACHE_DURATION = 12 * 60 * 60 * 1000 // 12 hours in milliseconds
let cache: { data: any; timestamp: number } | null = null

interface Review {
  author_name: string
  author_url: string
  profile_photo_url: string
  rating: number
  text: string
  time: number
  relative_time_description: string
}

interface PlaceDetails {
  name: string
  rating: number
  user_ratings_total: number
  reviews: Review[]
}

async function fetchGoogleReviews(): Promise<PlaceDetails | null> {
  try {
    // Use the stable Places API v3 (Text Search)
    const url = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${PLACE_ID}&fields=name,rating,user_ratings_total,reviews&key=${API_KEY}`
    
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
      },
    })

    if (!response.ok) {
      throw new Error(`Google API error: ${response.status}`)
    }

    const data = await response.json()
    
    if (data.status !== 'OK') {
      throw new Error(`Google API status: ${data.status}`)
    }

    return data.result as PlaceDetails
  } catch (error) {
    console.error('Error fetching Google reviews:', error)
    return null
  }
}

export async function GET() {
  // Check cache first
  if (cache && Date.now() - cache.timestamp < CACHE_DURATION) {
    return NextResponse.json(cache.data)
  }

  // Fetch fresh data
  const reviewsData = await fetchGoogleReviews()

  if (!reviewsData) {
    return NextResponse.json(
      { error: 'Failed to fetch reviews' },
      { status: 500 }
    )
  }

  // Update cache
  cache = {
    data: reviewsData,
    timestamp: Date.now(),
  }

  return NextResponse.json(reviewsData)
}

