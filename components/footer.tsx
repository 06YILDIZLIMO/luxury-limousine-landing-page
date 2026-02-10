'use client';

import Link from 'next/link'
import { Phone, Mail, MapPin } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-gold flex items-center justify-center">
                <span className="text-background font-bold text-xl">{'06'}</span>
              </div>
              <div>
                <div className="text-xl font-serif font-bold text-gold leading-tight">{'06YILDIZ'}</div>
                <div className="text-xs tracking-widest text-silver uppercase">{'Limousine'}</div>
              </div>
            </div>
            <p className="text-sm text-foreground/70 leading-relaxed">
              {'Premium luxury limousine services for discerning clients across Ontario. Experience elegance, comfort, and professionalism.'}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-serif font-bold text-lg mb-4">{'Quick Links'}</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/#fleet"
                  className="text-sm text-foreground/70 hover:text-gold transition-colors"
                >
                  {'Our Fleet'}
                </Link>
              </li>
              <li>
                <Link
                  href="/#services"
                  className="text-sm text-foreground/70 hover:text-gold transition-colors"
                >
                  {'Services'}
                </Link>
              </li>
              <li>
                <Link
                  href="/booking"
                  className="text-sm text-foreground/70 hover:text-gold transition-colors"
                >
                  {'Book Now'}
                </Link>
              </li>
              <li>
                <Link
                  href="/#contact"
                  className="text-sm text-foreground/70 hover:text-gold transition-colors"
                >
                  {'Contact'}
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-serif font-bold text-lg mb-4">{'Services'}</h3>
            <ul className="space-y-2 text-sm text-foreground/70">
              <li>
                <Link href="/#services" className="hover:text-gold transition-colors">
                  {'Airport Transfers'}
                </Link>
              </li>
              <li>
                <Link href="/#services" className="hover:text-gold transition-colors">
                  {'Corporate Events'}
                </Link>
              </li>
              <li>
                <Link href="/#services" className="hover:text-gold transition-colors">
                  {'Wedding Services'}
                </Link>
              </li>
              <li>
                <Link href="/#services" className="hover:text-gold transition-colors">
                  {'Special Occasions'}
                </Link>
              </li>
              <li>
                <Link href="/#services" className="hover:text-gold transition-colors">
                  {'City Tours'}
                </Link>
              </li>
              <li>
                <Link href="/#services" className="hover:text-gold transition-colors">
                  {'Point-to-Point'}
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-serif font-bold text-lg mb-4">{'Contact Info'}</h3>
            <ul className="space-y-3">
              <li>
                <a href="tel:+17093009006" className="flex items-start gap-3 text-sm text-foreground/70 hover:text-gold transition-colors group">
                  <Phone className="w-4 h-4 mt-0.5 flex-shrink-0 group-hover:text-gold" />
                  <span>{'+1 (709) 300-9006'}</span>
                </a>
              </li>
              <li>
                <a href="mailto:06yildizlimousine@gmail.com" className="flex items-start gap-3 text-sm text-foreground/70 hover:text-gold transition-colors group">
                  <Mail className="w-4 h-4 mt-0.5 flex-shrink-0 group-hover:text-gold" />
                  <span className="break-all">{'06yildizlimousine@gmail.com'}</span>
                </a>
              </li>
              <li>
                <div className="flex items-start gap-3 text-sm text-foreground/70">
                  <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  <span>
                    {'2270 Lynhaven Road'}
                    <br />
                    {'Peterborough, ON K9K 1V7'}
                    <br />
                    {'Ontario, Canada'}
                  </span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-foreground/60">
              {'© '}{currentYear}{' 06YILDIZ LIMO. All rights reserved.'}
            </p>
            <div className="flex items-center gap-6">
              <a href="/privacy-policy" className="text-sm text-foreground/60 hover:text-gold transition-colors">
                {'Privacy Policy'}
              </a>
              <a href="/terms-conditions" className="text-sm text-foreground/60 hover:text-gold transition-colors">
                {'Terms & Conditions'}
              </a>
              <a href="/cancellation-policy" className="text-sm text-foreground/60 hover:text-gold transition-colors">
                {'Cancellation Policy'}
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
