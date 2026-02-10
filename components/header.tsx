"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Phone, Mail, Menu, X } from "lucide-react"

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    
    // Handle smooth scroll when page loads with hash
    if (window.location.hash) {
      const id = window.location.hash.slice(1)
      setTimeout(() => {
        const element = document.getElementById(id)
        if (element) {
          element.scrollIntoView({ behavior: "smooth" })
        }
      }, 100)
    }
    
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (id: string) => {
    // Check if we're on homepage
    const isHomePage = window.location.pathname === "/" || window.location.pathname === ""
    
    if (!isHomePage) {
      // Navigate to homepage with hash
      window.location.href = `/#${id}`
      return
    }
    
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      setIsMobileMenuOpen(false)
    }
  }

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/95 backdrop-blur-sm border-b border-border" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gold flex items-center justify-center">
              <span className="text-background font-bold text-xl">06</span>
            </div>
            <div>
              <div className="text-xl font-serif font-bold text-gold leading-tight">06YILDIZ</div>
              <div className="text-xs tracking-widest text-silver uppercase">Limousine</div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            <button 
              onClick={() => scrollToSection("fleet")}
              className="text-sm text-foreground/80 hover:text-gold transition-colors"
            >
              {'Fleet'}
            </button>
            <button 
              onClick={() => scrollToSection("services")}
              className="text-sm text-foreground/80 hover:text-gold transition-colors"
            >
              {'Services'}
            </button>
            <button 
              onClick={() => scrollToSection("booking")}
              className="text-sm text-foreground/80 hover:text-gold transition-colors"
            >
              {'Booking'}
            </button>
            <button 
              onClick={() => scrollToSection("contact")}
              className="text-sm text-foreground/80 hover:text-gold transition-colors"
            >
              {'Contact'}
            </button>
          </nav>

          {/* Contact Info & CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <a href="tel:+17093009006" className="flex items-center gap-2 text-sm text-foreground/80 hover:text-gold transition-colors">
              <Phone className="w-4 h-4" />
              <span>{'+1 (709) 300-9006'}</span>
            </a>
            <Button 
              onClick={() => scrollToSection("booking")}
              className="bg-gold hover:bg-gold/90 text-background font-semibold"
            >
              {'Book Now'}
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-foreground hover:text-gold transition-colors"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden py-6 border-t border-border">
            <nav className="flex flex-col gap-4">
              <button 
                onClick={() => scrollToSection("fleet")}
                className="text-left text-foreground/80 hover:text-gold transition-colors py-2"
              >
                {'Fleet'}
              </button>
              <button 
                onClick={() => scrollToSection("services")}
                className="text-left text-foreground/80 hover:text-gold transition-colors py-2"
              >
                {'Services'}
              </button>
              <button 
                onClick={() => scrollToSection("booking")}
                className="text-left text-foreground/80 hover:text-gold transition-colors py-2"
              >
                {'Booking'}
              </button>
              <button 
                onClick={() => scrollToSection("contact")}
                className="text-left text-foreground/80 hover:text-gold transition-colors py-2"
              >
                {'Contact'}
              </button>
              <a href="tel:+17093009006" className="flex items-center gap-2 text-gold py-2">
                <Phone className="w-4 h-4" />
                <span>{'+1 (709) 300-9006'}</span>
              </a>
              <a href="mailto:06yildizlimousine@gmail.com" className="flex items-center gap-2 text-gold py-2">
                <Mail className="w-4 h-4" />
                <span>{'Email Us'}</span>
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
