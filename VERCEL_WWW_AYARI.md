# Vercel'de www Domain Ayarı

## ✅ Tamamlanan İşlemler:
1. ✅ HTTP → HTTPS yönlendirmesi çalışıyor
2. ✅ Güvenlik başlıkları aktif
3. ✅ Next.js config'de www redirect kodu eklendi

## ⚠️ Yapılması Gereken:

### Vercel Dashboard'da www Domain'ini Kaldırın veya Redirect Edin

**Seçenek 1: www Domain'ini Kaldırın (Önerilen)**

1. https://vercel.com/dashboard adresine gidin
2. `luxury-limousine-landing-page` projesini açın
3. **Settings** → **Domains** bölümüne gidin
4. `www.06yildizlimo.com` domain'ini bulun
5. Sağ taraftaki **⋮** (üç nokta) menüsüne tıklayın
6. **Remove** seçeneğini seçin
7. Onaylayın

**Seçenek 2: www'yi Redirect Olarak Ayarlayın**

1. https://vercel.com/dashboard adresine gidin
2. `luxury-limousine-landing-page` projesini açın
3. **Settings** → **Domains** bölümüne gidin
4. `www.06yildizlimo.com` domain'ini bulun
5. Sağ taraftaki **Edit** butonuna tıklayın
6. **Redirect to** seçeneğini işaretleyin
7. `06yildizlimo.com` yazın
8. **Save** butonuna tıklayın

## 🔍 Test Etme:

Değişiklikten sonra şu komutlarla test edin:

```bash
# www'den non-www'ye yönlendirme testi
curl -I -L https://www.06yildizlimo.com

# Sonuç şöyle olmalı:
# HTTP/2 308 (veya 301)
# Location: https://06yildizlimo.com/
# HTTP/2 200
```

## 📊 Google Search Console'da Yapılacaklar:

1. https://search.google.com/search-console adresine gidin
2. Property'nizi seçin
3. **Settings** → **Change of address** bölümüne gidin (varsa)
4. Veya **URL Inspection** aracını kullanarak:
   - `https://06yildizlimo.com` URL'ini inspect edin
   - **Request Indexing** butonuna tıklayın
5. **Sitemaps** bölümünden sitemap'i yeniden gönderin

## ⏱️ Bekleme Süresi:

- Vercel değişiklikleri: **Anında** (1-2 dakika)
- Google indexleme: **1-7 gün**
- Duplicate sorunun çözülmesi: **1-2 hafta**

## ✅ Başarı Kontrolü:

Şu testleri yapın:

```bash
# 1. HTTP → HTTPS
curl -I -L http://06yildizlimo.com | grep Location
# Sonuç: Location: https://06yildizlimo.com/

# 2. www → non-www
curl -I -L https://www.06yildizlimo.com | grep Location
# Sonuç: Location: https://06yildizlimo.com/

# 3. Güvenlik başlıkları
curl -I https://06yildizlimo.com | grep -i strict
# Sonuç: strict-transport-security: max-age=...
```

## 📝 Notlar:

- www domain'i kaldırıldıktan sonra, Google otomatik olarak canonical URL'i `https://06yildizlimo.com` olarak seçecektir
- Eski www URL'leri otomatik olarak yönlendirilecektir
- Duplicate content sorunu çözülecektir

## 🆘 Sorun mu var?

Eğer www yönlendirmesi çalışmıyorsa:
1. Vercel dashboard'da domain ayarlarını kontrol edin
2. DNS ayarlarını kontrol edin (www CNAME kaydı)
3. 10-15 dakika bekleyin (DNS propagation)
