"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Phone, Mail, MapPin, Clock, Send, CheckCircle, Loader2 } from "lucide-react"

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  })
  const [isLoading, setIsLoading] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [error, setError] = useState("")

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
    setError("")
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError("")

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (response.ok && data.success) {
        setIsSuccess(true)
        setFormData({ name: "", email: "", phone: "", service: "", message: "" })
      } else {
        setError(data.error || "Something went wrong. Please try again.")
      }
    } catch (err) {
      setError("Failed to send message. Please call us directly at +1 (709) 300-9006")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <section id="contact" className="py-24 bg-gradient-to-b from-background to-card/30">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block px-4 py-1 rounded-full border border-gold/30 bg-gold/10 mb-4">
            <span className="text-sm text-gold font-medium">Get In Touch</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-serif font-bold mb-6 text-balance">
            Contact <span className="text-gold">Us</span>
          </h2>
          <p className="text-lg text-foreground/70 leading-relaxed">
            Our dedicated team is available 24/7 to assist you with reservations, inquiries, and any special requests you may have.
          </p>
        </div>

        {/* Contact Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mb-12">
          <Card className="bg-card border-gold/30 hover:border-gold/50 transition-all duration-300 group">
            <CardContent className="p-6 text-center">
              <div className="w-14 h-14 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-gold group-hover:scale-110 transition-all duration-300">
                <Phone className="w-7 h-7 text-gold group-hover:text-background transition-colors" />
              </div>
              <h3 className="font-serif font-bold text-lg mb-2">Phone</h3>
              <a href="tel:+17093009006" className="text-gold hover:text-gold/80 transition-colors">
                +1 (709) 300-9006
              </a>
            </CardContent>
          </Card>

          <Card className="bg-card border-gold/30 hover:border-gold/50 transition-all duration-300 group">
            <CardContent className="p-6 text-center">
              <div className="w-14 h-14 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-gold group-hover:scale-110 transition-all duration-300">
                <Mail className="w-7 h-7 text-gold group-hover:text-background transition-colors" />
              </div>
              <h3 className="font-serif font-bold text-lg mb-2">Email</h3>
              <a href="mailto:06yildizlimousine@gmail.com" className="text-gold hover:text-gold/80 transition-colors break-all text-sm">
                06yildizlimousine@gmail.com
              </a>
            </CardContent>
          </Card>

          <Card className="bg-card border-gold/30 hover:border-gold/50 transition-all duration-300 group">
            <CardContent className="p-6 text-center">
              <div className="w-14 h-14 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-gold group-hover:scale-110 transition-all duration-300">
                <MapPin className="w-7 h-7 text-gold group-hover:text-background transition-colors" />
              </div>
              <h3 className="font-serif font-bold text-lg mb-2">Address</h3>
              <p className="text-foreground/70 text-sm leading-relaxed">
                2270 Lynhaven Road<br />
                Peterborough, ON K9K 1V7<br />
                Ontario, Canada
              </p>
            </CardContent>
          </Card>

          <Card className="bg-card border-gold/30 hover:border-gold/50 transition-all duration-300 group">
            <CardContent className="p-6 text-center">
              <div className="w-14 h-14 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-gold group-hover:scale-110 transition-all duration-300">
                <Clock className="w-7 h-7 text-gold group-hover:text-background transition-colors" />
              </div>
              <h3 className="font-serif font-bold text-lg mb-2">Hours</h3>
              <p className="text-foreground/70 text-sm">
                24/7 Availability<br />
                Always at your service
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Contact Form + Map */}
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Contact Form */}
          <Card className="bg-card border-gold/30 shadow-2xl shadow-gold/5">
            <CardContent className="p-8">
              <h3 className="text-2xl font-serif font-bold mb-2">Send Us a Message</h3>
              <p className="text-foreground/60 text-sm mb-6">Fill out the form and we'll get back to you within 1 hour.</p>

              {isSuccess ? (
                <div className="text-center py-12">
                  <div className="w-20 h-20 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-10 h-10 text-gold" />
                  </div>
                  <h4 className="text-xl font-serif font-bold mb-2">Message Sent!</h4>
                  <p className="text-foreground/70 mb-6">
                    Thank you! We received your message and will contact you within 1 hour.
                  </p>
                  <Button
                    onClick={() => setIsSuccess(false)}
                    className="bg-gold hover:bg-gold/90 text-background"
                  >
                    Send Another Message
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="John Smith"
                        className="bg-background border-border focus:border-gold"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+1 (705) 123-4567"
                        className="bg-background border-border focus:border-gold"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="john@example.com"
                      className="bg-background border-border focus:border-gold"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="service">Service Interested In</Label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full px-3 py-2 bg-background border border-border rounded-md focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold text-foreground"
                    >
                      <option value="">Select a service (optional)</option>
                      <option value="Airport Transfer">Airport Transfer</option>
                      <option value="Corporate Events">Corporate Events</option>
                      <option value="Wedding">Wedding</option>
                      <option value="Special Occasions">Special Occasions</option>
                      <option value="City Tours">City Tours</option>
                      <option value="Point-to-Point">Point-to-Point</option>
                      <option value="General Inquiry">General Inquiry</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      placeholder="Tell us about your transportation needs, dates, number of passengers, etc."
                      rows={5}
                      className="bg-background border-border focus:border-gold resize-none"
                    />
                  </div>

                  {error && (
                    <div className="p-3 bg-red-500/10 border border-red-500/30 rounded-md">
                      <p className="text-red-400 text-sm">{error}</p>
                    </div>
                  )}

                  <Button
                    type="submit"
                    size="lg"
                    disabled={isLoading}
                    className="w-full bg-gold hover:bg-gold/90 text-background font-semibold group"
                  >
                    {isLoading ? (
                      <>
                        <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message
                        <Send className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                      </>
                    )}
                  </Button>

                  <p className="text-xs text-foreground/50 text-center">
                    We respond within 1 hour. For urgent requests, call us directly.
                  </p>
                </form>
              )}
            </CardContent>
          </Card>

          {/* Map */}
          <div className="space-y-6">
            <Card className="bg-card border-gold/30 overflow-hidden h-80 lg:h-full min-h-[320px]">
              <div className="relative w-full h-full">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2856.5!2d-78.3!3d44.3!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d59d6f00000001%3A0x0000000000000000!2s2270%20Lynhaven%20Rd%2C%20Peterborough%2C%20ON%20K9K%201V7!5e0!3m2!1sen!2sca!4v0000000000000!5m2!1sen!2sca"
                  width="100%"
                  height="100%"
                  style={{ border: 0, minHeight: "320px" }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="absolute inset-0 w-full h-full"
                  title="Google Maps - 2270 Lynhaven Road, Peterborough ON"
                />
              </div>
            </Card>

            {/* Quick Contact Buttons */}
            <div className="grid grid-cols-2 gap-4">
              <a href="tel:+17093009006" className="block">
                <Button className="w-full bg-gold hover:bg-gold/90 text-background font-semibold" size="lg">
                  <Phone className="w-4 h-4 mr-2" />
                  Call Now
                </Button>
              </a>
              <a href="mailto:06yildizlimousine@gmail.com" className="block">
                <Button variant="outline" className="w-full border-gold/50 text-gold hover:bg-gold hover:text-background font-semibold" size="lg">
                  <Mail className="w-4 h-4 mr-2" />
                  Email Us
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
