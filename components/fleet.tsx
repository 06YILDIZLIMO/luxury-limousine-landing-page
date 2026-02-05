import { Card, CardContent } from "@/components/ui/card"
import { Users, Briefcase, Sparkles, Crown } from "lucide-react"

const fleetVehicles = [
  {
    name: "Executive Sedan",
    description: "Perfect for business meetings and airport transfers",
    capacity: "Up to 3 passengers",
    features: ["Leather Interior", "WiFi", "Bottled Water", "Phone Chargers"],
    image: "https://placehold.co/800x600?text=Luxury+black+executive+sedan+limousine+with+chrome+details+and+tinted+windows+in+elegant+showroom+lighting",
    icon: Briefcase,
  },
  {
    name: "Stretch Limousine",
    description: "Ideal for weddings, proms, and special celebrations",
    capacity: "Up to 8 passengers",
    features: ["Premium Bar", "LED Lighting", "Sound System", "Privacy Partition"],
    image: "https://placehold.co/800x600?text=White+stretch+limousine+with+elegant+exterior+design+and+luxury+wheels+photographed+from+side+angle",
    icon: Sparkles,
  },
  {
    name: "SUV Limousine",
    description: "Spacious luxury for corporate events and group travel",
    capacity: "Up to 14 passengers",
    features: ["Fiber Optic Lighting", "Premium Audio", "Bar Service", "Climate Control"],
    image: "https://placehold.co/800x600?text=Black+SUV+stretch+limousine+with+chrome+accents+and+custom+wheels+in+dramatic+studio+lighting",
    icon: Users,
  },
  {
    name: "Presidential Suite",
    description: "Ultimate luxury for VIP clients and executives",
    capacity: "Up to 6 passengers",
    features: ["Massage Seats", "Champagne Service", "Starlight Ceiling", "Entertainment System"],
    image: "https://placehold.co/800x600?text=Premium+black+luxury+limousine+with+golden+accent+trim+and+exclusive+VIP+styling+photographed+in+elegant+setting",
    icon: Crown,
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
