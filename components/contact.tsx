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
              <a href="tel:+17093009006" className="text-gold hover:text-gold/80 transition-colors">
<<<<<<< HEAD
                {'+1 (709)3009006'}
=======
                {'+1 (709) 300-9006'}
>>>>>>> 80ddc3b (Fix twilio input type)
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
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2856.5!2d-78.3!3d44.3!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d59d6f00000001%3A0x0000000000000000!2s2270%20Lynhaven%20Rd%2C%20Peterborough%2C%20ON%20K9K%201V7!5e0!3m2!1sen!2sca!4v0000000000000!5m2!1sen!2sca"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0 w-full h-full"
                title="Google Maps - 2270 Lynhaven Road, Peterborough ON"
              />
            </div>
          </Card>
        </div>
      </div>
    </section>
  )
}
