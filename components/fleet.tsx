"use client"

import { Crown, Briefcase, Users, Sparkles, X } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { useState } from "react"

// PRESTIGE COLLECTION - The Kings League
const prestigeVehicles = [
  {
    name: "Rolls-Royce Phantom",
    description: "The ultimate expression of luxury - unmatched elegance in timeless black",
    capacity: "Up to 4 passengers",
    features: ["Starlight Headliner", "Lamb's Wool Carpets", "Bespoke Audio System", "Magic Carpet Ride Suspension", "Privacy Dividers", "Champagne Cooler", "Heated & Ventilated Seats", "WiFi Connectivity"],
    image: "/rolls.png",
    icon: Crown,
  },
  {
    name: "Mercedes-Benz S-Class",
    description: "The pinnacle of automotive luxury in classic black elegance",
    capacity: "Up to 4 passengers",
    features: ["Executive Rear Seats", "Burmester 3D Surround Sound", "Air Balance Cabin Fragrance", "Magic Body Control Suspension", "Massage Seats", "Panoramic Sunroof", "Ambient Lighting", "Driver Assistance Package"],
    image: "/mercedes.png",
    icon: Crown,
  },
  {
    name: "BMW 750Li",
    description: "German engineering excellence in sleek black with executive comfort",
    capacity: "Up to 4 passengers",
    features: ["Executive Lounge Seating", "Gesture Control System", "Laser Lights", "Sky Lounge Glass Roof", "Bowers & Wilkins Diamond Audio", "Wireless Phone Charging", "Parking Assistant", "Carbon Fiber Interior Trim"],
    image: "/bmw.png",
    icon: Briefcase,
  },
]

// EXECUTIVE FLEET - Business & Airport Transfer
const executiveVehicles = [
  {
    name: "Cadillac Escalade ESV",
    description: "Iconic American luxury SUV with extended space and commanding presence",
    capacity: "Up to 7 passengers",
    features: ["Executive Black Leather", "AKG Studio Audio", "Super Cruise Hands-Free Driving", "Rear Entertainment System", "Wireless Charging", "Heated Second Row Seats", "Power Fold Third Row", "Bose Centerpoint Audio"],
    image: "/escalade.png",
    icon: Crown,
  },
  {
    name: "Lincoln Navigator L",
    description: "Sophisticated American luxury with spacious black exterior and modern technology",
    capacity: "Up to 7 passengers",
    features: ["Perfect Position Seats with Massage", "Revel Ultima 3D Audio", "Panoramic Vista Roof", "WiFi Hotspot for up to 10 Devices", "Active Glide Suspension", "Phone as Key Technology", "Heads-Up Display", "Lane Keeping System"],
    image: "/lincoln.png",
    icon: Crown,
  },
  {
    name: "GMC Yukon Denali",
    description: "Premium full-size black SUV combining power and sophisticated luxury",
    capacity: "Up to 7 passengers",
    features: ["Denali Premium Interior", "Bose Premium Audio", "Magnetic Ride Control", "Wireless Charging", "Heated & Ventilated Seats", "Power Liftgate", "Advanced Safety Features", "Luxury Package"],
    image: "/yukon.png",
    icon: Crown,
  },
  {
    name: "Chevrolet Suburban Premier",
    description: "Full-size luxury SUV with ultimate space and premium comfort for large groups",
    capacity: "Up to 8 passengers",
    features: ["Premium Leather Interior", "Rear Seat Entertainment", "Magnetic Ride Control", "Bose 10-Speaker Audio", "Power Retractable Running Boards", "Heated & Ventilated Seats", "Wireless Apple CarPlay", "360-Degree Camera"],
    image: "/Suburban.png",
    icon: Users,
  },
  {
    name: "Luxury Mercedes Sprinter",
    description: "Premium black passenger van for large groups with ultimate comfort",
    capacity: "Up to 12 passengers",
    features: ["Executive Leather Seating", "WiFi Connectivity", "Premium Audio System", "Individual Climate Control", "USB Charging Ports", "Vanity Mirrors", "Ample Luggage Space", "Privacy Partition"],
    image: "/bus.png",
    icon: Users,
  },
]

// PREMIUM BUSINESS CLASS - Sophisticated Safety & Comfort
const premiumBusinessVehicles = [
  {
    name: "Volvo XC90",
    description: "Scandinavian luxury SUV with advanced safety and elegant black design",
    capacity: "Up to 4 passengers + Luggage",
    features: ["City Safety System", "Air Suspension", "Bowers & Wilkins Audio", "Panoramic Sunroof", "Massage Seats", "Pilot Assist", "360-Degree Camera", "Wireless Charging"],
    image: "/VolvoXc90.png",
    icon: Briefcase,
  },
]

// Modal Component
function VehicleModal({ vehicle, onClose }: { vehicle: any; onClose: () => void }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-4xl bg-card border border-gold/30 rounded-2xl overflow-hidden shadow-2xl shadow-gold/20 animate-in zoom-in-95 duration-200">
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-10 h-10 bg-black/50 hover:bg-gold rounded-full flex items-center justify-center text-white hover:text-black transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2">
          {/* Image Section */}
          <div className="relative h-80 lg:h-auto bg-black">
            <img 
              src={vehicle.image || "/placeholder.svg"}
              alt={vehicle.name}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
            <div className="absolute bottom-6 left-6">
              <span className="px-3 py-1 bg-gold text-black text-xs font-bold uppercase tracking-wider rounded-full">
                Premium Collection
              </span>
            </div>
          </div>

          {/* Details Section */}
          <div className="p-8 lg:p-10 space-y-6">
            <div>
              <h2 className="text-3xl lg:text-4xl font-serif font-bold text-white mb-2">
                {vehicle.name}
              </h2>
              <p className="text-foreground/70 text-lg leading-relaxed">
                {vehicle.description}
              </p>
            </div>

            {/* Capacity */}
            <div className="flex items-center gap-3 text-gold">
              <Users className="w-5 h-5" />
              <span className="font-medium">{vehicle.capacity}</span>
            </div>

            {/* Features */}
            <div className="space-y-4">
              <h3 className="text-sm font-semibold text-white uppercase tracking-wide">
                Premium Features
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {vehicle.features.map((feature: string, index: number) => (
                  <div key={index} className="flex items-center gap-2 text-sm text-foreground/80">
                    <div className="w-2 h-2 bg-gold rounded-full flex-shrink-0" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA Button */}
            <Button 
              size="lg"
              className="w-full bg-gold hover:bg-gold/90 text-black font-semibold text-lg py-6 group"
              onClick={() => {
                const bookingSection = document.getElementById("booking")
                if (bookingSection) {
                  bookingSection.scrollIntoView({ behavior: "smooth" })
                  onClose()
                }
              }}
            >
              Book This Vehicle
              <Sparkles className="ml-2 w-5 h-5 group-hover:scale-110 transition-transform" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export function Fleet() {
  const [selectedVehicle, setSelectedVehicle] = useState<any>(null)

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

        {/* Award Banner */}
        <div className="flex justify-center mb-12">
          <a href="https://threebestrated.ca/limo-service-in-peterborough-on" target="_blank" rel="noopener noreferrer" className="inline-block border-0">
            <img 
              src="https://threebestrated.ca/awards/limo_service-peterborough-2026-drk.svg" 
              alt="Best Limo service in Peterborough" 
              className="h-32 md:h-40 object-contain"
            />
          </a>
        </div>

        {/* PRESTIGE COLLECTION - The Kings League */}
        <div className="mb-20">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full border border-gold/30 bg-black/50 mb-4">
              <Sparkles className="w-5 h-5 text-gold" />
              <span className="text-sm text-gold font-semibold tracking-wide uppercase">The Kings League</span>
            </div>
            <h3 className="text-4xl md:text-5xl font-serif font-black text-white">
              THE PRESTIGE <span className="text-gold">COLLECTION</span>
            </h3>
            <p className="text-lg text-foreground/60 mt-4">
              For those who demand nothing but the extraordinary
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {prestigeVehicles.map((vehicle, index) => {
              const Icon = vehicle.icon
              return (
                <Card
                  key={index}
                  className="group bg-black/40 backdrop-blur-sm border-gold/30 hover:border-gold transition-all duration-500 overflow-hidden hover:shadow-2xl hover:shadow-gold/20 hover:-translate-y-2 cursor-pointer"
                  onClick={() => setSelectedVehicle(vehicle)}
                >
                  <div className="relative h-72 overflow-hidden">
                    <img
                      src={vehicle.image || "/placeholder.svg"}
                      alt={vehicle.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />
                    <div className="absolute top-6 right-6 w-14 h-14 bg-gold rounded-full flex items-center justify-center shadow-lg">
                      <Icon className="w-7 h-7 text-black" />
                    </div>
                    {/* View Details Badge */}
                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <span className="text-white font-semibold px-4 py-2 border border-white/50 rounded-full">
                        Click to View Details
                      </span>
                    </div>
                  </div>
                  <CardContent className="p-8">
                    <h3 className="text-2xl font-serif font-bold mb-3 text-white group-hover:text-gold transition-colors">{vehicle.name}</h3>
                    <p className="text-foreground/70 mb-5 leading-relaxed">{vehicle.description}</p>
                    <div className="flex items-center gap-2 text-sm text-gold mb-4 font-medium">
                      <Users className="w-5 h-5" />
                      <span>{vehicle.capacity}</span>
                    </div>
                    <div className="grid grid-cols-2 gap-2 mb-6">
                      {vehicle.features.slice(0, 4).map((feature, i) => (
                        <div key={i} className="flex items-center gap-2 text-xs text-foreground/60">
                          <div className="w-1.5 h-1.5 bg-gold rounded-full" />
                          <span className="truncate">{feature}</span>
                        </div>
                      ))}
                    </div>
                    <Button
                      size="lg"
                      className="w-full bg-gold hover:bg-gold/90 text-black font-semibold"
                      onClick={(e) => {
                        e.stopPropagation()
                        const bookingSection = document.getElementById("booking")
                        if (bookingSection) {
                          bookingSection.scrollIntoView({ behavior: "smooth" })
                        }
                      }}
                    >
                      Book Now
                    </Button>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>

        {/* THE EXECUTIVE FLEET - Business & Airport Transfer */}
        <div>
          <div className="text-center max-w-3xl mx-auto mb-10">
            <div className="inline-block px-6 py-3 rounded-full border border-slate-600/50 bg-slate-900/50 mb-4">
              <span className="text-sm text-slate-300 font-semibold tracking-wide uppercase">Business & Airport Class</span>
            </div>
            <h3 className="text-4xl md:text-5xl font-serif font-black mb-4">
              THE EXECUTIVE <span className="text-slate-400">FLEET</span>
            </h3>
            <p className="text-lg text-foreground/60">
              Premium comfort for business travel and airport transfers
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {executiveVehicles.map((vehicle, index) => {
              const Icon = vehicle.icon
              return (
                <Card
                  key={index}
                  className="group bg-gradient-to-br from-slate-800 to-slate-900 border-slate-700 hover:border-gold/50 transition-all duration-500 overflow-hidden hover:shadow-2xl hover:shadow-gold/10 hover:-translate-y-2 cursor-pointer"
                  onClick={() => setSelectedVehicle(vehicle)}
                >
                  <div className="relative h-56 overflow-hidden">
                    <img
                      src={vehicle.image || "/placeholder.svg"}
                      alt={vehicle.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-transparent" />
                    <div className="absolute top-4 right-4 w-12 h-12 bg-gold/20 rounded-full flex items-center justify-center">
                      <Icon className="w-6 h-6 text-gold" />
                    </div>
                    <div className="absolute inset-0 bg-slate-900/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <span className="text-white font-medium px-3 py-1 border border-white/50 rounded-full text-sm">
                        View Details
                      </span>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-serif font-bold mb-2 text-white group-hover:text-gold transition-colors">{vehicle.name}</h3>
                    <p className="text-slate-400 text-sm mb-3 line-clamp-2">{vehicle.description}</p>
                    <div className="flex items-center gap-2 text-xs text-gold font-medium mb-4">
                      <Users className="w-4 h-4" />
                      <span>{vehicle.capacity}</span>
                    </div>
                    <Button
                      size="sm"
                      className="w-full bg-gold hover:bg-gold/90 text-black font-medium text-sm"
                      onClick={(e) => {
                        e.stopPropagation()
                        const bookingSection = document.getElementById("booking")
                        if (bookingSection) {
                          bookingSection.scrollIntoView({ behavior: "smooth" })
                        }
                      }}
                    >
                      Book Now
                    </Button>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>

        {/* THE PREMIUM BUSINESS CLASS - Sophisticated Safety & Comfort */}
        <div className="mt-20">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full border border-gold/30 bg-black/50 mb-4">
              <Briefcase className="w-5 h-5 text-gold" />
              <span className="text-sm text-gold font-semibold tracking-wide uppercase">Premium Business Class</span>
            </div>
            <h3 className="text-4xl md:text-5xl font-serif font-black text-white">
              THE PREMIUM <span className="text-gold">BUSINESS CLASS</span>
            </h3>
            <p className="text-lg text-foreground/60 mt-4">
              Sophisticated safety and comfort for discerning travelers
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-8 max-w-2xl mx-auto">
            {premiumBusinessVehicles.map((vehicle, index) => {
              const Icon = vehicle.icon
              return (
                <Card
                  key={index}
                  className="group bg-black/40 backdrop-blur-sm border-gold/30 hover:border-gold transition-all duration-500 overflow-hidden hover:shadow-2xl hover:shadow-gold/20 hover:-translate-y-2 cursor-pointer"
                  onClick={() => setSelectedVehicle(vehicle)}
                >
                  <div className="relative h-72 overflow-hidden">
                    <img
                      src={vehicle.image || "/placeholder.svg"}
                      alt={vehicle.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />
                    <div className="absolute top-6 right-6 w-14 h-14 bg-gold rounded-full flex items-center justify-center shadow-lg">
                      <Icon className="w-7 h-7 text-black" />
                    </div>
                    {/* View Details Badge */}
                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <span className="text-white font-semibold px-4 py-2 border border-white/50 rounded-full">
                        Click to View Details
                      </span>
                    </div>
                  </div>
                  <CardContent className="p-8">
                    <h3 className="text-2xl font-serif font-bold mb-3 text-white group-hover:text-gold transition-colors">{vehicle.name}</h3>
                    <p className="text-foreground/70 mb-5 leading-relaxed">{vehicle.description}</p>
                    <div className="flex items-center gap-2 text-sm text-gold mb-4 font-medium">
                      <Users className="w-5 h-5" />
                      <span>{vehicle.capacity}</span>
                    </div>
                    <div className="grid grid-cols-2 gap-2 mb-6">
                      {vehicle.features.slice(0, 4).map((feature, i) => (
                        <div key={i} className="flex items-center gap-2 text-xs text-foreground/60">
                          <div className="w-1.5 h-1.5 bg-gold rounded-full" />
                          <span className="truncate">{feature}</span>
                        </div>
                      ))}
                    </div>
                    <Button
                      size="lg"
                      className="w-full bg-gold hover:bg-gold/90 text-black font-semibold"
                      onClick={(e) => {
                        e.stopPropagation()
                        const bookingSection = document.getElementById("booking")
                        if (bookingSection) {
                          bookingSection.scrollIntoView({ behavior: "smooth" })
                        }
                      }}
                    >
                      Book Now
                    </Button>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </div>

      {/* Vehicle Detail Modal */}
      {selectedVehicle && (
        <VehicleModal 
          vehicle={selectedVehicle} 
          onClose={() => setSelectedVehicle(null)} 
        />
      )}
    </section>
  )
}
