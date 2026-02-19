# Facebook Pixel & Conversions API Integration - TODO

## Phase 1: Setup & Dependencies ✅
- [ ] Install required npm packages
- [ ] Create environment variables template
- [ ] Set up Facebook Pixel utility

## Phase 2: Facebook Pixel Client-Side Integration
- [ ] Create Facebook Pixel utility (`lib/facebook-pixel.ts`)
- [ ] Create Facebook Pixel component (`components/FacebookPixel.tsx`)
- [ ] Add Pixel initialization to `app/layout.tsx`
- [ ] Add PageView tracking

## Phase 3: Conversions API Server-Side Integration
- [ ] Create Conversions API utility (`lib/facebook-conversions-api.ts`)
- [ ] Create API route (`app/api/facebook/conversions/route.ts`)
- [ ] Implement Dataset Quality API support
- [ ] Add event deduplication logic

## Phase 4: Event Tracking Implementation
- [ ] Track InitiateCheckout event (booking form submission)
- [ ] Track Purchase event (payment completion)
- [ ] Track Lead event (contact form)
- [ ] Track ViewContent events (fleet, services)
- [ ] Track AddToCart event (service selection)

## Phase 5: Integration with Existing Features
- [ ] Integrate with Stripe checkout flow
- [ ] Integrate with WhatsApp notifications
- [ ] Add tracking to booking success page
- [ ] Add tracking to contact form

## Phase 6: Testing & Validation
- [ ] Test events in Facebook Events Manager
- [ ] Verify Conversions API events
- [ ] Test event deduplication
- [ ] Validate Dataset Quality metrics

## Environment Variables Required:
```
NEXT_PUBLIC_FACEBOOK_PIXEL_ID=your_pixel_id_here
FACEBOOK_CONVERSIONS_API_TOKEN=your_api_token_here
FACEBOOK_CONVERSIONS_API_TEST_CODE=your_test_code_here (optional)
```

## Notes:
- Dataset Quality API integration cannot be disabled once enabled
- Server-side events provide better tracking accuracy
- Event deduplication prevents double counting
- Advanced matching improves event match quality
