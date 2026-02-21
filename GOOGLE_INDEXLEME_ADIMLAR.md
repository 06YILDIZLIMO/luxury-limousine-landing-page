# 🔍 Google Search Console - "Discovered Not Indexed" Düzeltme Rehberi

## ✅ Yapılan Teknik Düzeltmeler (Deploy Edildi)

1. **JSON-LD Structured Data** eklendi → Google içeriği artık anlıyor
2. **Sitemap düzeltildi** → `/services` → `/service` (doğru URL)
3. **Canonical URL'ler düzeltildi** → www → non-www (tutarlı)
4. **metadataBase düzeltildi** → www → non-www
5. **Tüm sayfalar 200 OK** → /fleet ✅ /service ✅ /contact ✅

---

## 📋 Google Search Console'da Yapmanız Gerekenler

### ADIM 1: Sitemap'i Yeniden Gönderin
1. https://search.google.com/search-console adresine gidin
2. Sol menüden **"Sitemaps"** tıklayın
3. Eğer eski sitemap varsa **silin** (06yildizlimo.com/sitemap.xml)
4. Yeni sitemap URL'sini girin: `sitemap.xml`
5. **"Submit"** butonuna tıklayın

### ADIM 2: Her Sayfayı Manuel Olarak İndexleme İsteyin
URL Inspection aracını kullanın - her URL için:

1. Search Console'da üstteki arama kutusuna URL'yi yapıştırın
2. **"Request Indexing"** butonuna tıklayın
3. Sırayla şu URL'leri isteyin:

```
https://06yildizlimo.com
https://06yildizlimo.com/fleet
https://06yildizlimo.com/service
https://06yildizlimo.com/contact
https://06yildizlimo.com/booking
```

### ADIM 3: JSON-LD'yi Doğrulayın
1. https://search.google.com/test/rich-results adresine gidin
2. `https://06yildizlimo.com` URL'sini girin
3. **"Test URL"** tıklayın
4. LocalBusiness ve FAQ schema'larının göründüğünü doğrulayın ✅

### ADIM 4: Mobile Usability Kontrol
1. Search Console → **"Mobile Usability"** tıklayın
2. Hata varsa düzeltin

---

## ⏱️ Bekleme Süreleri

| Eylem | Bekleme Süresi |
|-------|---------------|
| Sitemap submit | 1-3 gün |
| URL Inspection → Request Indexing | 1-7 gün |
| JSON-LD rich results görünmesi | 1-2 hafta |
| Tam indexleme | 1-4 hafta |

---

## 🚨 "Discovered - Currently Not Indexed" Neden Olur?

- **Crawl budget sorunu** → Google sırayı bekliyor (çözüm: Request Indexing)
- **İnce içerik** → Sayfada yeterli metin yok (çözüm: JSON-LD eklendi)
- **Canonical çakışması** → www vs non-www (✅ DÜZELTİLDİ)
- **Sitemap hatası** → Yanlış URL'ler (✅ DÜZELTİLDİ)
- **Yeni sayfa** → Google henüz crawl etmedi (çözüm: Request Indexing)

---

## 📊 Kontrol Listesi

- [x] JSON-LD LocalBusiness schema eklendi
- [x] JSON-LD FAQ schema eklendi  
- [x] Sitemap /services → /service düzeltildi
- [x] Canonical URL'ler www → non-www düzeltildi
- [x] Tüm sayfalar 200 OK döndürüyor
- [ ] Sitemap Search Console'a yeniden gönderildi
- [ ] /fleet için Request Indexing yapıldı
- [ ] /service için Request Indexing yapıldı
- [ ] /contact için Request Indexing yapıldı
- [ ] /booking için Request Indexing yapıldı
- [ ] Rich Results Test doğrulandı

---

## 💡 Ek İpuçları

### İç Linkleme (Önemli!)
Google sayfaları iç linkler aracılığıyla keşfeder. Footer ve header'da tüm sayfalara link olduğundan emin olun.

### Google My Business
- GMB profilinizde website URL'sini `https://06yildizlimo.com` olarak ayarlayın
- GMB'de tüm sayfaları "Services" olarak ekleyin
- GMB'de fotoğraf ekleyin (araçların fotoğrafları)

### Backlink Oluşturun
- Yelp, Yellow Pages, Canada411'e işletmenizi ekleyin
- Bu siteler Google'ın sayfalarınızı daha hızlı indexlemesini sağlar
