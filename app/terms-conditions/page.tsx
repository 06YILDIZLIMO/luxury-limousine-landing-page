import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function TermsConditions() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-background to-card/30">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6">
              {'Terms & '}
              <span className="text-gold">{'Conditions'}</span>
            </h1>
            <p className="text-lg text-foreground/70 leading-relaxed">
              {'Last updated: January 2025'}
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto prose prose-lg prose-headings:font-serif prose-headings:text-foreground prose-p:text-foreground/70 prose-a:text-gold hover:prose-a:text-gold/80">
            <h2>Acceptance of Terms</h2>
            <p>
              {'By accessing and using the services provided by 06YILDIZ Limo, you accept and agree to be bound by the terms and provisions of this agreement. If you do not agree to abide by these terms, please do not use our services.'}
            </p>

            <h2>Booking and Reservations</h2>
            <h3>Reservation Requirements</h3>
            <ul>
              <li>{'All bookings must be made at least 24 hours in advance'}</li>
              <li>{'A valid credit card is required to secure all reservations'}</li>
              <li>{'Bookings are subject to vehicle availability'}</li>
              <li>{'Prices are subject to change without prior notice'}</li>
            </ul>

            <h3>Confirmation</h3>
            <p>
              {'All bookings will receive a confirmation email with pickup details, estimated arrival time, and total charges. Please review all details carefully and contact us immediately if any information is incorrect.'}
            </p>

            <h2>Payment Terms</h2>
            <ul>
              <li>{'Accepted payment methods: Credit cards, Debit cards, Bank transfers'}</li>
              <li>{'Full payment is due at the time of service unless prior credit arrangements are made'}</li>
              <li>{'Prices quoted are in Canadian Dollars (CAD)'}</li>
              <li>{'Gratuity is not included and is at your discretion'}</li>
              <li>{'Additional charges may apply for waiting time, extra stops, or specialized services'}</li>
            </ul>

            <h2>Cancellation Policy</h2>
            <p>
              {'Please refer to our Cancellation Policy page for detailed information regarding refunds and cancellation fees.'}
            </p>

            <h2>Service Terms</h2>
            <h3>Pickup and Delivery</h3>
            <ul>
              <li>{'Chauffeurs will arrive at the scheduled pickup location at the agreed time'}</li>
              <li>{'Standard waiting time is 15 minutes for airport pickups and 10 minutes for all other pickups'}</li>
              <li>{'Additional waiting time charges may apply after the free waiting period'}</li>
              <li>{'Clients must provide exact pickup addresses and contact information'}</li>
            </ul>

            <h3>Vehicle Selection</h3>
            <ul>
              <li>{'While we make every effort to provide the requested vehicle, we reserve the right to substitute with a comparable vehicle if necessary'}</li>
              <li>{'Specific vehicle requests are subject to availability'}</li>
            </ul>

            <h3>Conduct</h3>
            <p>
              {'Clients and passengers are expected to behave appropriately throughout the journey. We reserve the right to refuse service or terminate a booking if:'}
            </p>
            <ul>
              <li>{'Passengers are under the influence of drugs or alcohol'}</li>
              <li>{'Behavior is deemed unsafe or threatening'}</li>
              <li>{'Vehicle is damaged intentionally'}</li>
              <li>{'Any illegal activity occurs'}</li>
            </ul>

            <h2>Liability and Insurance</h2>
            <ul>
              <li>{'All vehicles are fully insured for passenger liability'}</li>
              <li>{'06YILDIZ Limo is not responsible for delays caused by weather, traffic, or circumstances beyond our control'}</li>
              <li>{'We are not liable for loss or damage to personal belongings left in vehicles'}</li>
              <li>{'Clients are responsible for any damage caused to vehicles during their service'}</li>
            </ul>

            <h2>Special Requests</h2>
            <p>
              {'Special arrangements such as child seats, wheelchair accessibility, or specific amenities must be requested at the time of booking. We will make every effort to accommodate special requests but cannot guarantee availability.'}
            </p>

            <h2>Privacy</h2>
            <p>
              {'Your personal information is protected in accordance with our Privacy Policy. We do not sell or share your information with third parties except as necessary to provide our services.'}
            </p>

            <h2>Intellectual Property</h2>
            <p>
              {'All content on this website, including logos, images, text, and designs, is the property of 06YILDIZ Limo and is protected by copyright laws. Unauthorized use is prohibited.'}
            </p>

            <h2>Disclaimer</h2>
            <p>
              {'06YILDIZ Limo provides services on an "as is" basis. We make no representations or warranties of any kind, express or implied, regarding the completeness, accuracy, or reliability of the information on this website.'}
            </p>

            <h2>Governing Law</h2>
            <p>
              {'These terms and conditions are governed by the laws of the Province of Ontario, Canada. Any disputes arising from these terms shall be resolved in the courts of Ontario.'}
            </p>

            <h2>Changes to Terms</h2>
            <p>
              {'We reserve the right to modify these terms and conditions at any time. Changes will be effective immediately upon posting to this website. Continued use of our services constitutes acceptance of the modified terms.'}
            </p>

            <h2>Contact Information</h2>
            <p>
              {'For questions about these terms, please contact us:'}
            </p>
            <ul>
              <li>{'Email: 06yildizlimousine@gmail.com'}</li>
              <li>{'Phone: +1 (705) 991-1905'}</li>
              <li>{'Address: 2270 Lynhaven Road, Peterborough, ON K9K 1V7, Canada'}</li>
            </ul>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

