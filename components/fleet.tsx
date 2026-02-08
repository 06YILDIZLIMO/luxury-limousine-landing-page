import { Crown, Briefcase, Users, Sparkles } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const fleetVehicles = [
  {
    name: "Cadillac Escalade ESV",
    description: "Iconic American luxury SUV with extended space and commanding presence",
    capacity: "Up to 7 passengers",
    features: ["Executive Black Leather", "AKG Studio Audio", "Super Cruise", "Rear Entertainment"],
    image: "/escalade.png",
    icon: Crown,
  },
  {
    name: "GMC Yukon Denali",
    description: "Premium full-size black SUV combining power and sophisticated luxury",
    capacity: "Up to 7 passengers",
    features: ["Adaptive Cruise Control", "Head-Up Display", "Premium Sound", "Luxury Seating"],
    image: "/yukon.png",
    icon: Crown,
  },
  {
    name: "Lincoln Navigator L",
    description: "Sophisticated American luxury with spacious black exterior and modern technology",
    capacity: "Up to 7 passengers",
    features: ["Perfect Position Seats", "Revel Audio", "Panoramic Vista Roof", "WiFi Hotspot"],
    image: "/lincoln.png",
    icon: Crown,
  },
  {
    name: "Mercedes-Benz S-Class",
    description: "The pinnacle of automotive luxury in classic black elegance",
    capacity: "Up to 4 passengers",
    features: ["Executive Rear Seats", "Burmester Sound", "Air Balance", "Magic Body Control"],
    image: "/mercedes.png",
    icon: Crown,
  },
  {
    name: "BMW 750Li",
    description: "German engineering excellence in sleek black with executive comfort",
    capacity: "Up to 4 passengers",
    features: ["Executive Lounge Seating", "Gesture Control", "Laser Lights", "Sky Lounge Roof"],
    image: "/bmw.png",
    icon: Briefcase,
  },
  {
    name: "Rolls-Royce Phantom",
    description: "The ultimate expression of luxury - unmatched elegance in timeless black",
    capacity: "Up to 4 passengers",
    features: ["Starlight Headliner", "Lamb's Wool Carpets", "Bespoke Audio", "Magic Carpet Ride"],
    image: "/rolls.png",
    icon: Crown,
  },
  {
    name: "Chevrolet Suburban",
    description: "Full-size luxury SUV with ultimate space and premium comfort for large groups",
    capacity: "Up to 8 passengers",
    features: ["Premium Leather", "Rear Seat Entertainment", "Magnetic Ride Control", "Bose Audio System"],
    image: "/Suburban.png",
    icon: Users,
  },
  {
    name: "Volvo XC90",
    description: "Scandinavian luxury SUV with advanced safety and elegant black design",
    capacity: "Up to 7 passengers",
    features: ["Bowers & Wilkins Audio", "Pilot Assist", "Air Suspension", "Crystal Gear Shifter"],
    image: "/VolvoXc90.png",
    icon: Crown,
  },
  {
    name: "Luxury Mercedes Sprinter",
    description: "Premium black passenger van for large groups with ultimate comfort",
    capacity: "Up to 12 passengers",
    features: ["Executive Seating", "WiFi Connectivity", "Premium Audio", "Climate Control"],
    image: "/bus.png",
    icon: Users,
  },
]

export function Fleet() {
  return (
    <section id="fleet" className="py-32 bg-background relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gold/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-[800px] h-[800px] bg-gold/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10 max-w-7xl">
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-20">
          <div className="inline-block px-6 py-2 rounded-full border border-gold/30 bg-gold/10 mb-6">
            <span className="text-sm text-gold font-semibold tracking-wide uppercase">Our Collection</span>
          </div>
          <h2 className="text-5xl md:text-7xl font-serif font-black mb-8 leading-tight">
            Premium <span className="luxury-gradient">Fleet</span>
          </h2>
          <p className="text-xl text-foreground/80 leading-relaxed font-light">
            Choose from our meticulously maintained fleet of luxury vehicles, each equipped with premium amenities to ensure your comfort and satisfaction.
          </p>
        </div>

        {/* Fleet Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {fleetVehicles.map((vehicle, index) => {
            const Icon = vehicle.icon
            return (
              <Card key={index} className="group bg-card/50 backdrop-blur-sm border-border/50 hover:border-gold/50 transition-all duration-500 overflow-hidden hover:shadow-2xl hover:shadow-gold/10 hover:-translate-y-2">
                <div className="relative h-72 overflow-hidden">
                  <img 
                    src={vehicle.image || "/placeholder.svg"}
                    alt={vehicle.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-card/60 to-transparent" />
                  <div className="absolute top-6 right-6 w-14 h-14 bg-gold rounded-full flex items-center justify-center shadow-lg">
                    <Icon className="w-7 h-7 text-background" />
                  </div>
                </div>
                <CardContent className="p-8">
                  <h3 className="text-2xl font-serif font-bold mb-3 group-hover:text-gold transition-colors">{vehicle.name}</h3>
                  <p className="text-foreground/70 mb-5 leading-relaxed">{vehicle.description}</p>
                  <div className="flex items-center gap-2 text-sm text-gold mb-6 font-medium">
                    <Users className="w-5 h-5" />
                    <span>{vehicle.capacity}</span>
                  </div>
                  <div className="space-y-3">
                    <p className="text-sm font-semibold text-foreground/90 uppercase tracking-wide">Features</p>
                    <div className="grid grid-cols-1 gap-3">
                      {vehicle.features.map((feature, i) => (
                        <div key={i} className="flex items-center gap-3 text-sm text-foreground/80">
                          <div className="w-2 h-2 bg-gold rounded-full" />
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
