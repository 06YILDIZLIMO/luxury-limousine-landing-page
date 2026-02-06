import { Card, CardContent } from "@/components/ui/card"
import { Plane, Briefcase, Heart, PartyPopper, Building2, MapPin } from "lucide-react"

const services = [
  {
    icon: Plane,
    title: "Airport Transfers",
    description: "Reliable and punctual airport transportation with flight tracking and meet-and-greet service.",
  },
  {
    icon: Briefcase,
    title: "Corporate Events",
    description: "Professional chauffeur services for business meetings, conferences, and executive travel.",
  },
  {
    icon: Heart,
    title: "Weddings",
    description: "Make your special day unforgettable with our elegant wedding limousine packages.",
  },
  {
    icon: PartyPopper,
    title: "Special Occasions",
    description: "Celebrate birthdays, anniversaries, proms, and nights out in style and comfort.",
  },
  {
    icon: Building2,
    title: "City Tours",
    description: "Explore Ontario's finest destinations with personalized guided tours in luxury.",
  },
  {
    icon: MapPin,
    title: "Point-to-Point",
    description: "Direct transportation to any destination across Ontario with premium comfort.",
  },
]

const chauffeurFeatures = [
  "Professionally trained and licensed",
  "Impeccably dressed in formal attire",
  "Extensive knowledge of Ontario routes",
  "Discreet and courteous service",
  "Background checked and insured",
  "Multilingual capabilities available",
]

export function Services() {
  return (
    <section id="services" className="py-24 bg-gradient-to-b from-background to-card/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block px-4 py-1 rounded-full border border-gold/30 bg-gold/10 mb-4">
            <span className="text-sm text-gold font-medium">{'What We Offer'}</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-serif font-bold mb-6 text-balance">
            {'Luxury '}
            <span className="text-gold">{'Services'}</span>
          </h2>
          <p className="text-lg text-foreground/70 leading-relaxed">
            {'From corporate travel to life\'s most memorable moments, we provide exceptional limousine services tailored to your needs.'}
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <Card key={index} className="group bg-card border-border hover:border-gold/50 transition-all duration-300 hover:shadow-lg hover:shadow-gold/10">
                <CardContent className="p-6">
                  <div className="w-14 h-14 bg-gold/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-gold group-hover:scale-110 transition-all duration-300">
                    <Icon className="w-7 h-7 text-gold group-hover:text-background transition-colors" />
                  </div>
                  <h3 className="text-xl font-serif font-bold mb-3">{service.title}</h3>
                  <p className="text-foreground/70 leading-relaxed">{service.description}</p>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Professional Chauffeurs Section */}
        <div className="max-w-6xl mx-auto">
          <Card className="bg-gradient-to-br from-card to-card/50 border-gold/30 overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="relative h-64 lg:h-auto">
                <img 
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=600&fit=crop&q=80"
                  alt="Professional chauffeur"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent to-card lg:to-transparent" />
              </div>
              <CardContent className="p-8 lg:p-12 flex flex-col justify-center">
                <div className="inline-block px-4 py-1 rounded-full border border-gold/30 bg-gold/10 mb-4 self-start">
                  <span className="text-sm text-gold font-medium">{'Excellence in Service'}</span>
                </div>
                <h3 className="text-3xl md:text-4xl font-serif font-bold mb-6">
                  {'Professional '}
                  <span className="text-gold">{'Chauffeurs'}</span>
                </h3>
                <p className="text-foreground/70 mb-6 leading-relaxed">
                  {'Our team of experienced chauffeurs is dedicated to providing you with the highest level of service, safety, and professionalism. Each driver is carefully selected and trained to exceed your expectations.'}
                </p>
                <div className="space-y-3">
                  {chauffeurFeatures.map((feature, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="w-5 h-5 bg-gold rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <div className="w-2 h-2 bg-background rounded-full" />
                      </div>
                      <span className="text-foreground/80">{feature}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </div>
          </Card>
        </div>
      </div>
    </section>
  )
}
