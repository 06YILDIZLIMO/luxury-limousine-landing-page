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

## ⚠️ HALA YAPILMASI GEREKENLER (Trafik için)
- [ ] Google My Business kur → yerel aramalarda görün (ÜCRETSİZ)
- [ ] Google Ads başlat → anında trafik (ücretli)
- [ ] Airport Transfer landing page (/airport-transfer)
- [ ] Wedding Limo landing page (/wedding-limo)
