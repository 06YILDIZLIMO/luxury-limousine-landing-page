# 🚀 Quick Start - Facebook Pixel Integration

## ✅ What's Done
- Facebook Pixel ID `1523730565356174` is installed
- Client-side tracking is active
- Server-side infrastructure is ready
- All code is implemented and tested

## ⚡ To Go Live - 3 Steps

### 1️⃣ Get Your Conversions API Token
1. Visit: https://business.facebook.com/events_manager2
2. Select Pixel ID: `1523730565356174`
3. Go to Settings → Conversions API
4. Click "Generate Access Token"
5. Copy the token

### 2️⃣ Add Token to Environment
Add to your `.env.local` file:
```bash
FACEBOOK_CONVERSIONS_API_TOKEN=paste_your_token_here
```

### 3️⃣ Deploy
```bash
# Add to Vercel environment variables
# Then deploy
git add .
git commit -m "Add Facebook Pixel integration"
git push
```

## 📊 What Gets Tracked

| Event | When | Where |
|-------|------|-------|
| PageView | Every page load | Automatic |
| AddToCart | Service selected | Booking form |
| InitiateCheckout | Form submitted | Booking form |
| Purchase | Payment complete | Success page |

## 🔍 Verify It's Working

1. Go to: https://business.facebook.com/events_manager2
2. Click "Test Events"
3. Visit your website
4. You should see events appearing in real-time

## 📱 Contact

- **Phone**: +1 (709) 300-9006
- **Email**: info@06yildizlimo.com
- **Website**: https://www.06yildizlimo.com

## 📚 Full Documentation

- [English Guide](./FACEBOOK_PIXEL_SETUP_GUIDE.md)
- [Türkçe Rehber](./FACEBOOK_PIXEL_KURULUM_TR.md)
- [Implementation Details](./IMPLEMENTATION_SUMMARY.md)

---

**Status**: ✅ Ready for Production
**Missing**: Only the Conversions API token
