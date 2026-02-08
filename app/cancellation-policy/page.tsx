import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function CancellationPolicy() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-background to-card/30">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6">
              {'Cancellation '}
              <span className="text-gold">{'Policy'}</span>
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
            <h2>Cancellation Timeframes and Fees</h2>
            
            <div className="not-prose my-8">
              <div className="grid gap-4">
                <div className="p-6 bg-card border border-gold/30 rounded-lg">
                  <div className="flex items-center gap-4 mb-2">
                    <div className="w-12 h-12 bg-green-500/20 rounded-full flex items-center justify-center">
                      <span className="text-2xl">✓</span>
                    </div>
                    <div>
                      <h4 className="font-serif font-bold text-xl">48+ Hours Before</h4>
                      <p className="text-foreground/70 text-sm">Full refund</p>
                    </div>
                  </div>
                  <p className="text-foreground/70">{'Cancellations made 48 hours or more before the scheduled pickup time are eligible for a full refund of the booking amount.'}</p>
                </div>

                <div className="p-6 bg-card border border-gold/30 rounded-lg">
                  <div className="flex items-center gap-4 mb-2">
                    <div className="w-12 h-12 bg-yellow-500/20 rounded-full flex items-center justify-center">
                      <span className="text-2xl">!</span>
                    </div>
                    <div>
                      <h4 className="font-serif font-bold text-xl">24-48 Hours Before</h4>
                      <p className="text-foreground/70 text-sm">50% refund</p>
                    </div>
                  </div>
                  <p className="text-foreground/70">{'Cancellations made between 24 and 48 hours before pickup are eligible for a 50% refund of the booking amount.'}</p>
                </div>

                <div className="p-6 bg-card border border-gold/30 rounded-lg">
                  <div className="flex items-center gap-4 mb-2">
                    <div className="w-12 h-12 bg-red-500/20 rounded-full flex items-center justify-center">
                      <span className="text-2xl">✕</span>
                    </div>
                    <div>
                      <h4 className="font-serif font-bold text-xl">Less than 24 Hours</h4>
                      <p className="text-foreground/70 text-sm">No refund</p>
                    </div>
                  </div>
                  <p className="text-foreground/70">{'Cancellations made less than 24 hours before pickup are non-refundable. The full amount will be charged.'}</p>
                </div>

                <div className="p-6 bg-card border border-gold/30 rounded-lg">
                  <div className="flex items-center gap-4 mb-2">
                    <div className="w-12 h-12 bg-red-500/20 rounded-full flex items-center justify-center">
                      <span className="text-2xl">✕</span>
                    </div>
                    <div>
                      <h4 className="font-serif font-bold text-xl">No-Show</h4>
                      <p className="text-foreground/70 text-sm">No refund</p>
                    </div>
                  </div>
                  <p className="text-foreground/70">{'Failure to appear at the scheduled pickup location without prior cancellation will result in the full charge.'}</p>
                </div>
              </div>
            </div>

            <h2>How to Cancel</h2>
            <p>
              {'To cancel your reservation, please choose one of the following methods:'}
            </p>
            <ul>
              <li>{'Email: 06yildizlimousine@gmail.com'}</li>
              <li>{'Phone: +1 (705) 991-1905'}</li>
              <li>{'Online: Manage your booking through our website'}</li>
            </ul>
            <p>
              {'Please have your booking confirmation number ready when contacting us.'}
            </p>

            <h2>Modification Policy</h2>
            <p>
              {'Date and time modifications are allowed free of charge when made more than 24 hours before the scheduled pickup. Changes made within 24 hours may be subject to availability and potential price differences.'}
            </p>

            <h2>Airport Transfers</h2>
            <p>
              {'For airport transfers, we recommend confirming your reservation at least 72 hours in advance. Flight delays and early arrivals are monitored, and our drivers will adjust pickup times accordingly at no additional charge.'}
            </p>

            <h2>Special Events and Weddings</h2>
            <p>
              {'For weddings, special events, and large group bookings, special cancellation terms may apply:'}
            </p>
            <ul>
              <li>{'Cancellations 7+ days before: Full refund'}</li>
              <li>{'Cancellations 3-7 days before: 50% refund'}</li>
              <li>{'Cancellations less than 3 days before: Non-refundable'}</li>
            </ul>

            <h2>Weather-Related Cancellations</h2>
            <p>
              {'In cases of severe weather conditions that make travel unsafe, we will work with you to reschedule your booking at no additional cost. If rescheduling is not possible, a full refund will be provided.'}
            </p>

            <h2>Refund Process</h2>
            <p>
              {'Approved refunds will be processed within 5-7 business days. The time it takes for the refund to appear in your account depends on your financial institution:'}
            </p>
            <ul>
              <li>{'Credit/Debit Cards: 5-7 business days'}</li>
              <li>{'Bank Transfers: 3-5 business days'}</li>
              <li>{'PayPal: 2-3 business days'}</li>
            </ul>

            <h2>Early Morning and Late Night Bookings</h2>
            <p>
              {'Bookings scheduled between 11:00 PM and 5:00 AM are subject to additional availability确认. Cancellations for these time slots follow the standard cancellation policy.'}
            </p>

            <h2>Force Majeure</h2>
            <p>
              {'06YILDIZ Limo shall not be liable for failures or delays caused by circumstances beyond our reasonable control, including but not limited to natural disasters, acts of God, government actions, or transportation disruptions.'}
            </p>

            <h2>Contact Us</h2>
            <p>
              {'For questions about this Cancellation Policy, please contact us:'}
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

