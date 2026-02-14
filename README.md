# 🚗 Luxury Limousine Landing Page

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Next.js](https://img.shields.io/badge/Next.js-15.1.6-black)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.0-38bdf8)](https://tailwindcss.com/)

A modern, feature-rich landing page for luxury limousine services built with Next.js, TypeScript, and Tailwind CSS. Features include online booking, payment processing, AI voice agent integration, and Google Reviews display.

## ✨ Features

- 🎨 **Modern UI/UX** - Sleek, responsive design with Tailwind CSS
- 📱 **Mobile-First** - Fully responsive across all devices
- 💳 **Payment Integration** - Stripe checkout for seamless bookings
- 🤖 **AI Voice Agent** - ElevenLabs integration for customer support
- 📞 **Twilio Integration** - Voice call handling and SMS notifications
- ⭐ **Google Reviews** - Display customer testimonials
- 🚙 **Fleet Showcase** - Display luxury vehicle options
- 📅 **Online Booking** - Easy-to-use booking system
- 🔒 **Secure** - Built with security best practices
- ⚡ **Fast Performance** - Optimized for speed with Next.js 15

## 🚀 Quick Start

### Prerequisites

- Node.js 20.x or higher
- npm, pnpm, or yarn
- API keys for Stripe, Twilio, ElevenLabs, and OpenAI

### Installation

1. Clone the repository:
```bash
git clone https://github.com/06YILDIZLIMO/luxury-limousine-landing-page.git
cd luxury-limousine-landing-page
```

2. Install dependencies:
```bash
pnpm install
# or
npm install
# or
yarn install
```

3. Create a `.env.local` file in the root directory:
```env
# Stripe
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=your_stripe_publishable_key
STRIPE_SECRET_KEY=your_stripe_secret_key

# Twilio
TWILIO_ACCOUNT_SID=your_twilio_account_sid
TWILIO_AUTH_TOKEN=your_twilio_auth_token
TWILIO_PHONE_NUMBER=your_twilio_phone_number

# ElevenLabs
ELEVENLABS_API_KEY=your_elevenlabs_api_key
ELEVENLABS_AGENT_ID=your_elevenlabs_agent_id

# OpenAI
OPENAI_API_KEY=your_openai_api_key
```

4. Run the development server:
```bash
pnpm dev
# or
npm run dev
# or
yarn dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser

## 📁 Project Structure

```
luxury-limousine-landing-page/
├── app/                      # Next.js app directory
│   ├── api/                 # API routes
│   │   ├── checkout/        # Stripe checkout
│   │   ├── elevenlabs/      # AI voice agent
│   │   ├── twilio/          # Voice & SMS
│   │   └── reviews/         # Google reviews
│   ├── booking/             # Booking pages
│   ├── privacy-policy/      # Privacy policy
│   ├── terms-conditions/    # Terms & conditions
│   └── page.tsx             # Home page
├── components/              # React components
│   ├── ui/                  # Reusable UI components
│   ├── header.tsx           # Navigation header
│   ├── hero.tsx             # Hero section
│   ├── fleet.tsx            # Vehicle showcase
│   ├── services.tsx         # Services section
│   ├── booking.tsx          # Booking form
│   └── footer.tsx           # Footer
├── lib/                     # Utility functions
│   ├── utils.ts             # Helper functions
│   ├── elevenlabs.ts        # ElevenLabs integration
│   └── openai.ts            # OpenAI integration
├── public/                  # Static assets
│   └── *.png                # Vehicle images
└── types/                   # TypeScript definitions
```

## 🛠️ Tech Stack

- **Framework**: [Next.js 15](https://nextjs.org/) - React framework with App Router
- **Language**: [TypeScript](https://www.typescriptlang.org/) - Type-safe JavaScript
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com/) - Utility-first CSS
- **UI Components**: [Radix UI](https://www.radix-ui.com/) - Accessible components
- **Payment**: [Stripe](https://stripe.com/) - Payment processing
- **Voice**: [Twilio](https://www.twilio.com/) - Voice & SMS
- **AI**: [ElevenLabs](https://elevenlabs.io/) - AI voice agent
- **AI**: [OpenAI](https://openai.com/) - GPT integration
- **Analytics**: [Vercel Analytics](https://vercel.com/analytics) - Performance monitoring

## 📝 Available Scripts

```bash
# Development
pnpm dev          # Start development server
pnpm build        # Build for production
pnpm start        # Start production server
pnpm lint         # Run ESLint
```

## 🌐 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import your repository on [Vercel](https://vercel.com)
3. Add environment variables
4. Deploy!

### Other Platforms

This is a standard Next.js application and can be deployed to any platform that supports Node.js:
- AWS
- Google Cloud
- Azure
- DigitalOcean
- Railway
- Render

See [Next.js deployment documentation](https://nextjs.org/docs/deployment) for details.

## 🤝 Contributing

We welcome contributions! Please see our [Contributing Guide](CONTRIBUTING.md) for details.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🔒 Security

Please see our [Security Policy](SECURITY.md) for reporting vulnerabilities.

## 📧 Contact

- GitHub: [@06YILDIZLIMO](https://github.com/06YILDIZLIMO)
- Project Link: [https://github.com/06YILDIZLIMO/luxury-limousine-landing-page](https://github.com/06YILDIZLIMO/luxury-limousine-landing-page)

## 🙏 Acknowledgments

- Generated with [BLACKBOX AI Builder](https://www.blackbox.ai)
- Icons by [Lucide](https://lucide.dev/)
- UI components by [Radix UI](https://www.radix-ui.com/)

## 📚 Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [TypeScript Documentation](https://www.typescriptlang.org/docs/)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Stripe Documentation](https://stripe.com/docs)

---

Made with ❤️ by [06YILDIZLIMO](https://github.com/06YILDIZLIMO)
