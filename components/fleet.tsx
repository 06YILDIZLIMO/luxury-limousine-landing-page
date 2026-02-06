import { Card, CardContent } from "@/components/ui/card"
import { Users, Briefcase, Sparkles, Crown } from "lucide-react"

const fleetVehicles = [
  {
    name: "Chevrolet Suburban 2025 Premier",
    description: "The ultimate in luxury SUV transportation with commanding presence",
    capacity: "Up to 6 passengers",
    features: ["Premium Leather", "Panoramic Sunroof", "WiFi Hotspot", "Heated & Cooled Seats"],
    image: "https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?w=800&h=600&fit=crop&q=80",
    icon: Crown,
  },
  {
    name: "GMC Yukon Denali",
    description: "Premium full-size SUV combining power, luxury and sophisticated technology",
    capacity: "Up to 7 passengers",
    features: ["Adaptive Cruise Control", "Head-Up Display", "Premium Sound", "Luxury Seating"],
    image: "https://images.unsplash.com/photo-1548032840-f16a3cd4d243?w=800&h=600&fit=crop&q=80",
    icon: Crown,
  },
  {
    name: "Volvo XC90 Excellence",
    description: "Swedish luxury and safety combined with sophisticated elegance",
    capacity: "Up to 6 passengers",
    features: ["Air Suspension", "Bowers & Wilkins Audio", "Massage Seats", "Crystal Shifter"],
    image: "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=800&h=600&fit=crop&q=80",
    icon: Sparkles,
  },
  {
    name: "Cadillac Escalade ESV",
    description: "Iconic American luxury with extended space and premium amenities",
    capacity: "Up to 7 passengers",
    features: ["Executive Seating", "AKG Studio Audio", "Super Cruise", "Rear Entertainment"],
    image: "https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=800&h=600&fit=crop&q=80",
    icon: Crown,
  },
  {
    name: "Lincoln Navigator L",
    description: "Sophisticated American luxury with spacious interior and modern technology",
    capacity: "Up to 7 passengers",
    features: ["Perfect Position Seats", "Revel Audio", "Panoramic Vista Roof", "WiFi"],
    image: "https://images.unsplash.com/photo-1581540222194-0def2dda95b8?w=800&h=600&fit=crop&q=80",
    icon: Users,
  },
  {
    name: "Rolls-Royce Phantom",
    description: "The pinnacle of automotive luxury - unmatched elegance and prestige",
    capacity: "Up to 4 passengers",
    features: ["Starlight Headliner", "Lamb's Wool Carpets", "Bespoke Audio", "Magic Carpet Ride"],
    image: "https://images.unsplash.com/photo-1631295868223-63265b40d9e4?w=800&h=600&fit=crop&q=80",
    icon: Crown,
  },
  {
    name: "Mercedes-Benz S-Class",
    description: "The benchmark of automotive luxury and executive transportation",
    capacity: "Up to 4 passengers",
    features: ["Executive Rear Seats", "Burmester Sound", "Air Balance", "Magic Body Control"],
    image: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=800&h=600&fit=crop&q=80",
    icon: Crown,
  },
  {
    name: "BMW 7 Series",
    description: "German engineering excellence meets luxurious comfort",
    capacity: "Up to 4 passengers",
    features: ["Executive Lounge Seating", "Gesture Control", "Laser Lights", "Sky Lounge Roof"],
    image: "https://images.unsplash.com/photo-1555215695-3004980ad54e?w=800&h=600&fit=crop&q=80",
    icon: Briefcase,
  },
  {
    name: "Luxury Party Bus",
    description: "Ultimate group transportation for celebrations and special events",
    capacity: "Up to 20 passengers",
    features: ["LED Light Show", "Premium Bar", "Dance Floor", "State-of-the-Art Sound System"],
    image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=800&h=600&fit=crop&q=80",
    icon: Users,
  },
]

export function Fleet() {
  return (
    <section id="fleet" className="py-24 bg-background relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block px-4 py-1 rounded-full border border-gold/30 bg-gold/10 mb-4">
            <span className="text-sm text-gold font-medium">{'Our Collection'}</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-serif font-bold mb-6 text-balance">
            {'Premium '}
            <span className="text-gold">{'Fleet'}</span>
          </h2>
          <p className="text-lg text-foreground/70 leading-relaxed">
            {'Choose from our meticulously maintained fleet of luxury vehicles, each equipped with premium amenities to ensure your comfort and satisfaction.'}
          </p>
        </div>

        {/* Fleet Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {fleetVehicles.map((vehicle, index) => {
            const Icon = vehicle.icon
            return (
              <Card key={index} className="group bg-card border-border hover:border-gold/50 transition-all duration-300 overflow-hidden">
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={vehicle.image || "/placeholder.svg"}
                    alt={vehicle.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent" />
                  <div className="absolute top-4 right-4 w-12 h-12 bg-gold rounded-full flex items-center justify-center">
                    <Icon className="w-6 h-6 text-background" />
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-2xl font-serif font-bold mb-2">{vehicle.name}</h3>
                  <p className="text-foreground/70 mb-4">{vehicle.description}</p>
                  <div className="flex items-center gap-2 text-sm text-gold mb-4">
                    <Users className="w-4 h-4" />
                    <span>{vehicle.capacity}</span>
                  </div>
                  <div className="space-y-2">
                    <p className="text-sm font-semibold text-foreground/90">{'Features:'}</p>
                    <div className="grid grid-cols-2 gap-2">
                      {vehicle.features.map((feature, i) => (
                        <div key={i} className="flex items-center gap-2 text-sm text-foreground/70">
                          <div className="w-1.5 h-1.5 bg-gold rounded-full" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
