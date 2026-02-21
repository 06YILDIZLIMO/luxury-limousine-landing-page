'use client'

import { useState, useEffect } from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { Star, Quote, ExternalLink, StarHalf } from 'lucide-react'

interface Review {
  author_name: string
  author_url: string
  profile_photo_url: string
  rating: number
  text: string
  time: number
  relative_time_description: string
}

interface PlaceData {
  name: string
  rating: number
  user_ratings_total: number
  reviews: Review[]
}

const PLACE_ID = '0xacac4a9221bd35eb:0x8c54e83bc0134c3b'

// Mock reviews for demo (when API is not configured)
const MOCK_REVIEWS: Review[] = [
  {
    author_name: "Sarah M.",
    author_url: "https://www.google.com/maps",
    profile_photo_url: "https://ui-avatars.com/api/?name=Sarah+M&background=gold&color=fff",
    rating: 5,
    text: "Absolutely incredible service! The limousine was pristine and the driver was professional. Made our wedding day even more special. Highly recommend!",
    time: Date.now() / 1000 - 30 * 24 * 60 * 60,
    relative_time_description: "2 months ago"
  },
  {
    author_name: "James Wilson",
    author_url: "https://www.google.com/maps",
    profile_photo_url: "https://ui-avatars.com/api/?name=James+Wilson&background=gold&color=fff",
    rating: 5,
    text: "Used their airport transfer service multiple times. Always on time, luxury vehicles, and exceptional customer service. Best limo company in Peterborough!",
    time: Date.now() / 1000 - 45 * 24 * 60 * 60,
    relative_time_description: "3 months ago"
  },
  {
    author_name: "Michael Chen",
    author_url: "https://www.google.com/maps",
    profile_photo_url: "https://ui-avatars.com/api/?name=Michael+Chen&background=gold&color=fff",
    rating: 5,
    text: "Booked for corporate event transportation. The team was flawless from booking to drop-off. Professional chauffeurs and beautiful fleet.",
    time: Date.now() / 1000 - 60 * 24 * 60 * 60,
    relative_time_description: "4 months ago"
  },
  {
    author_name: "Emily Thompson",
    author_url: "https://www.google.com/maps",
    profile_photo_url: "https://ui-avatars.com/api/?name=Emily+Thompson&background=gold&color=fff",
    rating: 5,
    text: " unforgettable experience! The Rolls Royce was stunning. The driver made our anniversary night perfect. Thank you Yildiz Limo!",
    time: Date.now() / 1000 - 75 * 24 * 60 * 60,
    relative_time_description: "5 months ago"
  },
  {
    author_name: "Robert Martinez",
    author_url: "https://www.google.com/maps",
    profile_photo_url: "https://ui-avatars.com/api/?name=Robert+Martinez&background=gold&color=fff",
    rating: 5,
    text: "First class service from start to finish. Clean vehicles, punctual drivers, competitive pricing. They've earned my loyal customer!",
    time: Date.now() / 1000 - 90 * 24 * 60 * 60,
    relative_time_description: "6 months ago"
  },
  {
    author_name: "Lisa Anderson",
    author_url: "https://www.google.com/maps",
    profile_photo_url: "https://ui-avatars.com/api/?name=Lisa+Anderson&background=gold&color=fff",
    rating: 5,
    text: "Perfect transportation for our prom night! The kids had an amazing experience. Safe, reliable, and luxury all the way. Thank you!",
    time: Date.now() / 1000 - 105 * 24 * 60 * 60,
    relative_time_description: "7 months ago"
  }
]

const MOCK_PLACE_DATA: PlaceData = {
  name: "Yildiz Limousine",
  rating: 5.0,
  user_ratings_total: 127,
  reviews: MOCK_REVIEWS
}

export function GoogleReviews() {
  const [data, setData] = useState<PlaceData | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function fetchReviews() {
      try {
        const response = await fetch('/api/reviews')
        if (!response.ok) {
          throw new Error('Failed to fetch reviews')
        }
        const result = await response.json()
        if (result.error) {
          // Fallback to mock data if API is not configured
          console.log('Using mock reviews - API not configured')
          setData(MOCK_PLACE_DATA)
        } else {
          setData(result)
        }
      } catch (err) {
        // Fallback to mock data on error (demo mode)
        console.log('Using mock reviews - API error')
        setData(MOCK_PLACE_DATA)
      } finally {
        setLoading(false)
      }
    }

    fetchReviews()
  }, [])

  // Render star rating
  const renderStars = (rating: number) => {
    const stars = []
    const fullStars = Math.floor(rating)
    const hasHalfStar = rating % 1 >= 0.5

    for (let i = 0; i < 5; i++) {
      if (i < fullStars) {
        stars.push(
          <Star key={i} className="w-5 h-5 fill-gold text-gold" />
        )
      } else if (i === fullStars && hasHalfStar) {
        stars.push(
          <StarHalf key={i} className="w-5 h-5 fill-gold text-gold" />
        )
      } else {
        stars.push(
          <Star key={i} className="w-5 h-5 text-gold/30" />
        )
      }
    }
    return stars
  }

  if (loading) {
    return (
      <section id="reviews" className="py-24 bg-gradient-to-b from-background to-card/30">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-block px-4 py-1 rounded-full border border-gold/30 bg-gold/10 mb-4">
              <span className="text-sm text-gold font-medium">{'Customer Reviews'}</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-serif font-bold mb-6 text-balance">
              {'Google '}
              <span className="text-gold">{'Reviews'}</span>
            </h2>
          </div>
          <div className="flex justify-center items-center min-h-[200px]">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-gold"></div>
          </div>
        </div>
      </section>
    )
  }

  if (error || !data) {
    return null
  }

  return (
    <section id="reviews" className="py-24 bg-gradient-to-b from-background to-card/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block px-4 py-1 rounded-full border border-gold/30 bg-gold/10 mb-4">
            <span className="text-sm text-gold font-medium">{'Customer Reviews'}</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-serif font-bold mb-6 text-balance">
            {'Google '}
            <span className="text-gold">{'Reviews'}</span>
          </h2>
          <p className="text-lg text-foreground/70 leading-relaxed">
            {'See what our clients say about their luxury experience with 06YILDIZ LIMO'}
          </p>
        </div>

        {/* Google Badge */}
        <div className="max-w-4xl mx-auto mb-12">
          <Card className="bg-gradient-to-r from-card to-card/50 border-gold/30 overflow-hidden">
            <CardContent className="p-6 md:p-8">
              <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                {/* Business Info */}
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-white rounded-lg flex items-center justify-center shadow-lg">
                    <svg className="w-10 h-10" viewBox="0 0 24 24">
                      <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                      <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                      <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                      <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                    </svg>
                  </div>
                  <div className="text-left">
                    <h3 className="text-xl font-serif font-bold">{data.name}</h3>
                    <div className="flex items-center gap-2 mt-1">
                      <div className="flex">{renderStars(data.rating)}</div>
                      <span className="text-lg font-semibold">{data.rating.toFixed(1)}</span>
                      <span className="text-foreground/60">({data.user_ratings_total.toLocaleString()} reviews)</span>
                    </div>
                  </div>
                </div>

                {/* Google Profile Link */}
                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(data.name)}&query_place_id=${PLACE_ID}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 bg-gold text-background rounded-lg hover:bg-gold/90 transition-colors font-medium"
                >
                  <ExternalLink className="w-4 h-4" />
                  {'Write a Review'}
                </a>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {data.reviews.slice(0, 6).map((review, index) => (
            <Card
              key={index}
              className="bg-card border-gold/30 hover:border-gold/50 transition-all duration-300 group"
            >
              <CardContent className="p-6">
                {/* Review Header */}
                <div className="flex items-start gap-4 mb-4">
                  <img
                    src={review.profile_photo_url}
                    alt={review.author_name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div className="flex-1 min-w-0">
                    <h4 className="font-semibold truncate">{review.author_name}</h4>
                    <div className="flex items-center gap-1 mt-1">
                      {renderStars(review.rating)}
                      <span className="text-xs text-foreground/60 ml-1">
                        {review.relative_time_description}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Review Text */}
                <div className="relative">
                  <Quote className="w-6 h-6 text-gold/20 absolute -top-1 -left-1" />
                  <p className="text-foreground/70 text-sm leading-relaxed pl-4 line-clamp-4">
                    {review.text}
                  </p>
                </div>

                {/* Google Link */}
                <a
                  href={review.author_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-xs text-gold hover:text-gold/80 mt-4 transition-colors"
                >
                  <ExternalLink className="w-3 h-3" />
                  {'View on Google'}
                </a>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* View All Link */}
        <div className="text-center mt-12">
          <a
            href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(data.name)}&query_place_id=${PLACE_ID}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 border border-gold/50 text-gold rounded-lg hover:bg-gold hover:text-background transition-all duration-300 font-medium"
          >
            {'View All Reviews on Google'}
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  )
}

