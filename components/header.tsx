"use client"

import { useState, useEffect } from "react"
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Button } from "@/components/ui/button"
import { Phone, Mail, Menu, X } from "lucide-react"

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const pathname = usePathname()

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
    const isHomePage = pathname === "/"
    
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

  const handleNavigation = (path: string, sectionId?: string) => {
    setIsMobileMenuOpen(false)
    
    // If we're on homepage and there's a section ID, scroll to it
    if (pathname === "/" && sectionId) {
      scrollToSection(sectionId)
    }
  }

  return (
    <header 
      role="banner"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/95 backdrop-blur-sm border-b border-border" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/yildizlimo.png"
              alt="06YILDIZ LIMO Logo"
              width={150}
              height={50}
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <nav role="navigation" aria-label="Main navigation" className="hidden lg:flex items-center gap-8">
            <Link 
              href="/fleet"
              className="text-sm text-foreground/80 hover:text-gold transition-colors"
              onClick={() => handleNavigation("/fleet", "fleet")}
            >
              {'Fleet'}
            </Link>
            <Link 
              href="/service"
              className="text-sm text-foreground/80 hover:text-gold transition-colors"
              onClick={() => handleNavigation("/service", "services")}
            >
              {'Services'}
            </Link>
            <Link 
              href="/booking"
              className="text-sm text-foreground/80 hover:text-gold transition-colors"
              onClick={() => handleNavigation("/booking", "booking")}
            >
              {'Booking'}
            </Link>
            <Link 
              href="/contact"
              className="text-sm text-foreground/80 hover:text-gold transition-colors"
              onClick={() => handleNavigation("/contact", "contact")}
            >
              {'Contact'}
            </Link>
          </nav>

          {/* Contact Info & CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <a href="tel:+17093009006" className="flex items-center gap-2 text-sm text-foreground/80 hover:text-gold transition-colors">
              <Phone className="w-4 h-4" />
              <span>{'+1 (709) 300-9006'}</span>
            </a>
            <Link href="/booking">
              <Button 
                className="bg-gold hover:bg-gold/90 text-background font-semibold"
              >
                {'Book Now'}
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-foreground hover:text-gold transition-colors"
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden py-6 border-t border-border">
            <nav role="navigation" aria-label="Mobile navigation" className="flex flex-col gap-4">
              <Link 
                href="/fleet"
                className="text-left text-foreground/80 hover:text-gold transition-colors py-2"
                onClick={() => handleNavigation("/fleet", "fleet")}
              >
                {'Fleet'}
              </Link>
              <Link 
                href="/service"
                className="text-left text-foreground/80 hover:text-gold transition-colors py-2"
                onClick={() => handleNavigation("/service", "services")}
              >
                {'Services'}
              </Link>
              <Link 
                href="/booking"
                className="text-left text-foreground/80 hover:text-gold transition-colors py-2"
                onClick={() => handleNavigation("/booking", "booking")}
              >
                {'Booking'}
              </Link>
              <Link 
                href="/contact"
                className="text-left text-foreground/80 hover:text-gold transition-colors py-2"
                onClick={() => handleNavigation("/contact", "contact")}
              >
                {'Contact'}
              </Link>
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
