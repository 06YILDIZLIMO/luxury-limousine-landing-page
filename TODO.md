# Website Pages & Performance TODO

## Pages Created ✅
- [x] 1. Create `/fleet` page (app/fleet/page.tsx)
- [x] 2. Create `/service` page (app/service/page.tsx)
- [x] 3. Create `/contact` page (app/contact/page.tsx)
- [x] 4. Verified `/booking` page (already existed and working)
- [x] 5. Updated Header navigation with proper Link routing
- [x] 6. All routes tested: 200 OK ✅

## Performance Fixes ✅
- [x] Delete 12 PNG files (~50MB saved)
- [x] Facebook Pixel → next/script strategy="afterInteractive" (fixes 40ms render blocking)
- [x] ElevenLabs → next/script strategy="lazyOnload" (non-blocking)
- [x] Add /_next/static/ cache headers (1yr immutable)
- [x] Update icon refs from .png → .webp in layout.tsx
- [x] Update JSON-LD logo from .png → .webp

## Deployed ✅
- Commit: 2886aa2
- All pages live: /, /fleet, /service, /contact, /booking

## Conversion Fixes ✅ (Arama almak için)
- [x] Hero: "Call Now: (709) 300-9006" butonu eklendi (tel: link)
- [x] Hero: "Book Online" butonu /booking'e bağlandı (eskiden çalışmıyordu)
- [x] Hero: "📞 Available 24/7" metni eklendi
- [x] Yeni: FloatingCallButton component - tüm sayfalarda sabit "Ara" butonu
  - Mobil: ekranın altında ortalanmış
  - Desktop: sağ alt köşe
- [x] layout.tsx: FloatingCallButton global olarak eklendi
- Commit: 7235232 (force-pushed)

## SEO Duplicate Canonical Fix ✅ (commit 2878ee3 → cc7be4a)
- [x] /fleet page: Added unique hero section (H1: "Our Luxury Fleet in Peterborough") + 5-item FAQ
- [x] /service page: Added unique hero section (H1: "Luxury Limousine Services in Peterborough") + 6-item FAQ
- [x] /contact page: Added unique hero section (H1: "Contact 06YILDIZ LIMO") + contact info cards
- [x] sitemap.ts: Fixed garbage Lighthouse text embedded in middle of file (chars 36-377)
- [x] layout.tsx: Fixed garbage text prepended + removed root alternates.canonical (was overriding ALL sub-pages → root cause of "Duplicate canonical" issue)
- [x] Build: SUCCESS ✅
- [x] Pushed to GitHub: cc7be4a ✅
- [x] Deployed to Vercel ✅
- [x] All pages verified LIVE in browser ✅
  - https://06yildizlimo.com/fleet ✅
  - https://06yildizlimo.com/service ✅
  - https://06yildizlimo.com/contact ✅
  - https://06yildizlimo.com/booking ✅

## ⚠️ HALA YAPILMASI GEREKENLER (Manuel - Yazılım değil)
- [ ] Google Search Console → "URL Inspection" ile /fleet, /service, /contact, /airport-transfer, /wedding-limo, /corporate-limo sayfalarını tek tek "Request Indexing" yap
- [ ] Google My Business kur → yerel aramalarda görün (ÜCRETSİZ) → business.google.com
- [ ] Google Ads başlat → anında trafik (ücretli)
- [ ] ElevenLabs Dashboard → 06yildizlimo.com adresini izin verilen domain olarak ekle
