import { Card, CardContent } from "@/components/ui/card"
import { Phone, Mail, MapPin, Clock } from "lucide-react"

export function Contact() {
  return (
    <section id="contact" className="py-24 bg-gradient-to-b from-background to-card/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block px-4 py-1 rounded-full border border-gold/30 bg-gold/10 mb-4">
            <span className="text-sm text-gold font-medium">{'Get In Touch'}</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-serif font-bold mb-6 text-balance">
            {'Contact '}
            <span className="text-gold">{'Us'}</span>
          </h2>
          <p className="text-lg text-foreground/70 leading-relaxed">
            {'Our dedicated team is available 24/7 to assist you with reservations, inquiries, and any special requests you may have.'}
          </p>
        </div>

        {/* Contact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          <Card className="bg-card border-gold/30 hover:border-gold/50 transition-all duration-300 group">
            <CardContent className="p-6 text-center">
              <div className="w-14 h-14 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-gold group-hover:scale-110 transition-all duration-300">
                <Phone className="w-7 h-7 text-gold group-hover:text-background transition-colors" />
              </div>
              <h3 className="font-serif font-bold text-lg mb-2">{'Phone'}</h3>
              <a href="tel:+17059911905" className="text-gold hover:text-gold/80 transition-colors">
                {'+1 (705) 991-1905'}
              </a>
            </CardContent>
          </Card>

          <Card className="bg-card border-gold/30 hover:border-gold/50 transition-all duration-300 group">
            <CardContent className="p-6 text-center">
              <div className="w-14 h-14 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-gold group-hover:scale-110 transition-all duration-300">
                <Mail className="w-7 h-7 text-gold group-hover:text-background transition-colors" />
              </div>
              <h3 className="font-serif font-bold text-lg mb-2">{'Email'}</h3>
              <a href="mailto:06yildizlimousine@gmail.com" className="text-gold hover:text-gold/80 transition-colors break-all text-sm">
                {'06yildizlimousine@gmail.com'}
              </a>
            </CardContent>
          </Card>

          <Card className="bg-card border-gold/30 hover:border-gold/50 transition-all duration-300 group">
            <CardContent className="p-6 text-center">
              <div className="w-14 h-14 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-gold group-hover:scale-110 transition-all duration-300">
                <MapPin className="w-7 h-7 text-gold group-hover:text-background transition-colors" />
              </div>
              <h3 className="font-serif font-bold text-lg mb-2">{'Address'}</h3>
              <p className="text-foreground/70 text-sm leading-relaxed">
                {'2270 Lynhaven Road'}
                <br />
                {'Peterborough, ON K9K 1V7'}
                <br />
                {'Ontario, Canada'}
              </p>
            </CardContent>
          </Card>

          <Card className="bg-card border-gold/30 hover:border-gold/50 transition-all duration-300 group">
            <CardContent className="p-6 text-center">
              <div className="w-14 h-14 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-gold group-hover:scale-110 transition-all duration-300">
                <Clock className="w-7 h-7 text-gold group-hover:text-background transition-colors" />
              </div>
              <h3 className="font-serif font-bold text-lg mb-2">{'Hours'}</h3>
              <p className="text-foreground/70 text-sm">
                {'24/7 Availability'}
                <br />
                {'Always at your service'}
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Map Section */}
        <div className="max-w-6xl mx-auto mt-12">
          <Card className="bg-card border-gold/30 overflow-hidden">
            <div className="aspect-video bg-muted relative">
              <img 
                src="https://placehold.co/1200x600?text=Map+showing+Peterborough+Ontario+location+with+city+streets+and+landmarks+aerial+view"
                alt="Map showing Peterborough Ontario location with city streets and landmarks aerial view"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-background/50 backdrop-blur-sm">
                <div className="text-center">
                  <MapPin className="w-12 h-12 text-gold mx-auto mb-3" />
                  <p className="text-lg font-semibold">{'2270 Lynhaven Road, Peterborough'}</p>
                  <p className="text-sm text-foreground/70">{'Ontario K9K 1V7, Canada'}</p>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  )
}
