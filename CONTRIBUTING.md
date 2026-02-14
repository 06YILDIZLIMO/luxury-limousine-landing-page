# Contributing to Luxury Limousine Landing Page

First off, thank you for considering contributing to this project! It's people like you that make this project better.

## Code of Conduct

This project and everyone participating in it is governed by our [Code of Conduct](CODE_OF_CONDUCT.md). By participating, you are expected to uphold this code.

## How Can I Contribute?

### Reporting Bugs

Before creating bug reports, please check the existing issues to avoid duplicates. When you create a bug report, include as many details as possible:

* Use a clear and descriptive title
* Describe the exact steps to reproduce the problem
* Provide specific examples to demonstrate the steps
* Describe the behavior you observed and what behavior you expected
* Include screenshots if applicable
* Note your environment (OS, browser, Node.js version, etc.)

### Suggesting Enhancements

Enhancement suggestions are tracked as GitHub issues. When creating an enhancement suggestion, include:

* A clear and descriptive title
* A detailed description of the proposed functionality
* Explain why this enhancement would be useful
* List any alternative solutions you've considered

### Pull Requests

* Fill in the pull request template
* Follow the TypeScript and React coding standards
* Include appropriate test coverage
* Update documentation as needed
* End all files with a newline

## Development Setup

### Prerequisites

* Node.js (v20 or higher)
* npm, yarn, or pnpm

### Getting Started

1. Fork the repository
2. Clone your fork:
   ```bash
   git clone https://github.com/YOUR-USERNAME/luxury-limousine-landing-page.git
   cd luxury-limousine-landing-page
   ```

3. Install dependencies:
   ```bash
   npm install
   # or
   pnpm install
   # or
   yarn install
   ```

4. Create a branch for your changes:
   ```bash
   git checkout -b feature/your-feature-name
   ```

5. Start the development server:
   ```bash
   npm run dev
   ```

6. Open [http://localhost:3000](http://localhost:3000) in your browser

### Environment Variables

Create a `.env.local` file in the root directory with the following variables:

```env
# Stripe
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=your_stripe_key
STRIPE_SECRET_KEY=your_stripe_secret

# Twilio
TWILIO_ACCOUNT_SID=your_twilio_sid
TWILIO_AUTH_TOKEN=your_twilio_token
TWILIO_PHONE_NUMBER=your_twilio_number

# ElevenLabs
ELEVENLABS_API_KEY=your_elevenlabs_key
ELEVENLABS_AGENT_ID=your_agent_id

# OpenAI
OPENAI_API_KEY=your_openai_key
```

## Coding Standards

### TypeScript

* Use TypeScript for all new files
* Define proper types and interfaces
* Avoid using `any` type
* Use meaningful variable and function names

### React Components

* Use functional components with hooks
* Keep components small and focused
* Use proper prop typing
* Follow the existing component structure

### Styling

* Use Tailwind CSS utility classes
* Follow the existing design system
* Ensure responsive design for all screen sizes
* Test on multiple browsers

### Commit Messages

Follow the conventional commits specification:

* `feat:` - New feature
* `fix:` - Bug fix
* `docs:` - Documentation changes
* `style:` - Code style changes (formatting, etc.)
* `refactor:` - Code refactoring
* `test:` - Adding or updating tests
* `chore:` - Maintenance tasks

Example:
```
feat: add booking confirmation email
fix: resolve mobile menu navigation issue
docs: update API documentation
```

## Project Structure

```
luxury-limousine-landing-page/
├── app/                    # Next.js app directory
│   ├── api/               # API routes
│   ├── booking/           # Booking pages
│   └── page.tsx           # Home page
├── components/            # React components
│   ├── ui/               # Reusable UI components
│   └── ...               # Feature components
├── lib/                   # Utility functions
├── public/               # Static assets
└── types/                # TypeScript type definitions
```

## Testing

Before submitting a pull request:

1. Test your changes locally
2. Ensure the build succeeds:
   ```bash
   npm run build
   ```
3. Run the linter:
   ```bash
   npm run lint
   ```
4. Test on multiple browsers and devices

## Areas Where We Need Help

* Improving accessibility (WCAG compliance)
* Adding unit and integration tests
* Performance optimization
* Documentation improvements
* UI/UX enhancements
* Mobile responsiveness
* Internationalization (i18n)

## Questions?

Feel free to open an issue with the "question" label if you have any questions about contributing.

## License

By contributing, you agree that your contributions will be licensed under the same license as the project (MIT License).

---

Thank you for contributing! 🎉
