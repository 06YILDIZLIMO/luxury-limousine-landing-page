# Facebook Pixel & Conversions API Setup Guide

## Overview
This guide explains how to complete the Facebook Pixel and Conversions API integration for 06YILDIZ LIMO website.

## ✅ What's Already Implemented

### 1. Facebook Pixel (Client-Side Tracking)
- ✅ Pixel ID: `1523730565356174` is configured
- ✅ Automatic PageView tracking on all pages
- ✅ Event tracking for:
  - `AddToCart` - When user selects a service type
  - `InitiateCheckout` - When booking form is submitted
  - `Purchase` - When payment is completed
  - `ViewContent` - Ready for fleet/service pages

### 2. Conversions API (Server-Side Tracking)
- ✅ Server-side event tracking infrastructure
- ✅ Advanced matching with hashed user data (email, phone, name)
- ✅ Event deduplication using event IDs
- ✅ Integration with Stripe checkout flow
- ✅ Client IP and User Agent tracking

### 3. Files Created/Modified
- ✅ `lib/facebook-pixel.ts` - Client-side tracking utilities
- ✅ `lib/facebook-conversions-api.ts` - Server-side tracking utilities
- ✅ `components/FacebookPixel.tsx` - Pixel component
- ✅ `app/api/facebook/conversions/route.ts` - Conversions API endpoint
- ✅ `app/layout.tsx` - Pixel initialization
- ✅ `components/booking.tsx` - Event tracking
- ✅ `app/booking/success/page.tsx` - Purchase tracking
- ✅ `app/api/checkout/route.ts` - Server-side event integration

## 🔧 Required Setup Steps

### Step 1: Get Facebook Conversions API Access Token

1. Go to [Facebook Events Manager](https://business.facebook.com/events_manager2)
2. Select your Pixel (ID: 1523730565356174)
3. Click on "Settings" tab
4. Scroll to "Conversions API" section
5. Click "Generate Access Token"
6. Copy the token

### Step 2: Configure Environment Variables

Add these to your `.env.local` file:

```bash
# Facebook Pixel (Already configured)
NEXT_PUBLIC_FACEBOOK_PIXEL_ID=1523730565356174

# Facebook Conversions API (REQUIRED - Add this)
FACEBOOK_CONVERSIONS_API_TOKEN=your_access_token_here

# Optional: For testing events in Events Manager
FACEBOOK_CONVERSIONS_API_TEST_CODE=TEST12345
```

### Step 3: Enable Dataset Quality API (Optional but Recommended)

The Dataset Quality API provides metrics like event match quality. To enable:

1. Go to Facebook Events Manager
2. Select your dataset/pixel
3. Navigate to "Settings" > "Conversions API"
4. Enable "Dataset Quality API"
5. Note: Once enabled, it cannot be disabled

### Step 4: Test Your Integration

#### Test Client-Side Events:
1. Go to [Facebook Events Manager](https://business.facebook.com/events_manager2)
2. Click on "Test Events" tab
3. Open your website
4. Perform actions (view pages, select service, submit booking)
5. Verify events appear in Test Events

#### Test Server-Side Events:
1. Add `FACEBOOK_CONVERSIONS_API_TEST_CODE` to `.env.local`
2. Restart your development server
3. Complete a booking
4. Check "Test Events" in Facebook Events Manager
5. Verify server events appear with the test code

## 📊 Events Being Tracked

### 1. PageView
- **When**: Every page load
- **Where**: Automatic via FacebookPixel component
- **Data**: Page URL

### 2. AddToCart
- **When**: User selects a service type in booking form
- **Where**: `components/booking.tsx`
- **Data**: Service name, deposit amount, currency

### 3. InitiateCheckout
- **When**: User submits booking form
- **Where**: `components/booking.tsx` (client) + `app/api/checkout/route.ts` (server)
- **Data**: Customer info, service details, amount
- **Deduplication**: Uses event ID to prevent double counting

### 4. Purchase
- **When**: Payment is completed successfully
- **Where**: `app/booking/success/page.tsx` (client) + future webhook (server)
- **Data**: Transaction ID, amount, customer info, service details

### 5. Lead (Ready to implement)
- **When**: Contact form submission
- **Where**: `components/contact.tsx` (needs implementation)
- **Data**: Customer contact information

### 6. ViewContent (Ready to implement)
- **When**: Viewing fleet or service pages
- **Where**: Fleet/Service page components (needs implementation)
- **Data**: Content name, category

## 🔒 Privacy & Data Protection

### Data Hashing
All personal data sent to Facebook Conversions API is hashed using SHA-256:
- Email addresses
- Phone numbers
- Names
- Location data

### GDPR Compliance
- User data is only sent after explicit action (booking, contact)
- No tracking of users who don't interact with forms
- Data is hashed before transmission

## 🚀 Deployment Checklist

Before deploying to production:

- [ ] Add `FACEBOOK_CONVERSIONS_API_TOKEN` to Vercel environment variables
- [ ] Remove or comment out `FACEBOOK_CONVERSIONS_API_TEST_CODE` in production
- [ ] Test all events in Facebook Events Manager
- [ ] Verify event deduplication is working
- [ ] Check Dataset Quality metrics (if enabled)
- [ ] Monitor for any errors in Vercel logs

## 📈 Monitoring & Optimization

### Check Event Quality
1. Go to Events Manager > Diagnostics
2. Review "Event Match Quality" score
3. Aim for "Good" or "Great" ratings
4. Improve by adding more customer data parameters

### Monitor Performance
- Check Events Manager daily for the first week
- Review event counts and match rates
- Verify no duplicate events
- Monitor server logs for API errors

## 🔄 Event Deduplication

The integration uses event IDs to prevent double counting:
- Client-side event: Tracked immediately
- Server-side event: Tracked with same event ID
- Facebook automatically deduplicates using the event ID

## 📞 Support

If you encounter issues:
1. Check Vercel deployment logs
2. Review Facebook Events Manager diagnostics
3. Verify environment variables are set correctly
4. Check browser console for client-side errors

## 🎯 Next Steps

### Recommended Enhancements:
1. **Add Lead tracking** to contact form
2. **Add ViewContent tracking** to fleet and service pages
3. **Set up Stripe webhooks** for server-side Purchase events
4. **Configure Custom Conversions** in Facebook Ads Manager
5. **Set up attribution windows** as per your requirements

### Advanced Features:
- Custom audiences based on events
- Lookalike audiences
- Dynamic ads for retargeting
- Conversion optimization for ad campaigns

## 📚 Resources

- [Facebook Pixel Documentation](https://developers.facebook.com/docs/facebook-pixel)
- [Conversions API Documentation](https://developers.facebook.com/docs/marketing-api/conversions-api)
- [Dataset Quality API](https://developers.facebook.com/docs/marketing-api/conversions-api/dataset-quality-api)
- [Event Deduplication](https://developers.facebook.com/docs/marketing-api/conversions-api/deduplicate-pixel-and-server-events)

---

**Integration Status**: ✅ Ready for Production (pending Conversions API token)
**Last Updated**: December 2024
