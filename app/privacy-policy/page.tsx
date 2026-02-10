import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-background to-card/30">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6">
              {'Privacy '}
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
            <h2>Introduction</h2>
            <p>
              {'06YILDIZ Limo ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website and use our limousine services.'}
            </p>

            <h2>Information We Collect</h2>
            <h3>Personal Data</h3>
            <p>
              {'We may collect personally identifiable information that you voluntarily provide to us when you:'}
            </p>
            <ul>
              <li>{'Book our limousine services'}</li>
              <li>{'Create an account on our website'}</li>
              <li>{'Contact us for inquiries'}</li>
              <li>{'Subscribe to our newsletter'}</li>
              <li>{'Participate in surveys or promotions'}</li>
            </ul>
            <p>
              {'This information may include:'}
            </p>
            <ul>
              <li>{'Name and contact information (email, phone number, address)'}</li>
              <li>{'Payment information'}</li>
              <li>{'Travel preferences and requirements'}</li>
              <li>{'Communication history'}</li>
            </ul>

            <h3>Usage Data</h3>
            <p>
              {'We automatically collect certain information when you visit our website, including:'}
            </p>
            <ul>
              <li>{'IP address and browser type'}</li>
              <li>{'Operating system'}</li>
              <li>{'Access times and pages viewed'}</li>
              <li>{'Referring website addresses'}</li>
            </ul>

            <h2>How We Use Your Information</h2>
            <p>
              {'We use the information we collect to:'}
            </p>
            <ul>
              <li>{'Provide and maintain our limousine services'}</li>
              <li>{'Process bookings and payments'}</li>
              <li>{'Send confirmations and updates about your reservation'}</li>
              <li>{'Respond to your comments, questions, and requests'}</li>
              <li>{'Send you marketing communications (with your consent)'}</li>
              <li>{'Improve our website and services'}</li>
              <li>{'Comply with legal obligations'}</li>
            </ul>

            <h2>Information Sharing and Disclosure</h2>
            <p>
              {'We do not sell, trade, or otherwise transfer your personally identifiable information to outside parties except in the following circumstances:'}
            </p>
            <ul>
              <li>{'With service providers who assist in our operations'}</li>
              <li>{'To comply with legal requirements or respond to lawful requests'}</li>
              <li>{'To protect our rights, privacy, safety, or property'}</li>
              <li>{'In connection with a merger, acquisition, or sale of assets'}</li>
            </ul>

            <h2>Data Security</h2>
            <p>
              {'We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet is 100% secure.'}
            </p>

            <h2>Cookies and Tracking Technologies</h2>
            <p>
              {'Our website may use cookies, web beacons, and similar tracking technologies to collect information about your browsing activities. You can set your browser to refuse all cookies or to indicate when a cookie is being sent.'}
            </p>

            <h2>Third-Party Links</h2>
            <p>
              {'Our website may contain links to third-party websites. We are not responsible for the privacy practices or content of these third-party sites. We encourage you to review their privacy policies.'}
            </p>

            <h2>Your Rights</h2>
            <p>
              {'You have the right to:'}
            </p>
            <ul>
              <li>{'Access and receive a copy of your personal data'}</li>
              <li>{'Rectify inaccurate personal data'}</li>
              <li>{'Request deletion of your personal data'}</li>
              <li>{'Object to processing of your personal data'}</li>
              <li>{'Request restriction of processing'}</li>
              <li>{'Data portability'}</li>
            </ul>

            <h2>Children's Privacy</h2>
            <p>
              {'Our services are not directed to individuals under the age of 18. We do not knowingly collect personal information from children. If you believe we have collected information from a child, please contact us immediately.'}
            </p>

            <h2>Changes to This Policy</h2>
            <p>
              {'We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last modified" date.'}
            </p>

            <h2>Contact Us</h2>
            <p>
              {'If you have any questions about this Privacy Policy, please contact us:'}
            </p>
            <ul>
              <li>{'Email: 06yildizlimousine@gmail.com'}</li>
              <li>{'Phone: +1 (709) 300-9006'}</li>
              <li>{'Address: 2270 Lynhaven Road, Peterborough, ON K9K 1V7, Canada'}</li>
            </ul>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

