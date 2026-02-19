# Facebook Pixel & Conversions API Kurulum Rehberi (Türkçe)

## 🎉 Tamamlanan İşlemler

### Facebook Pixel Entegrasyonu ✅
- Facebook Pixel ID: `1523730565356174` sisteme eklendi
- Otomatik sayfa görüntüleme takibi aktif
- Rezervasyon formu olayları takip ediliyor
- Ödeme tamamlama olayları takip ediliyor

### Conversions API Altyapısı ✅
- Sunucu tarafı olay takibi hazır
- Müşteri verilerinin güvenli şekilde hashlenmesi
- Olay tekrarını önleme sistemi
- Stripe ödeme entegrasyonu

## 🔧 Yapılması Gerekenler

### 1. Adım: Facebook Conversions API Token Alma

1. [Facebook Events Manager](https://business.facebook.com/events_manager2)'a gidin
2. Pixel'inizi seçin (ID: 1523730565356174)
3. "Ayarlar" sekmesine tıklayın
4. "Conversions API" bölümüne gidin
5. "Access Token Oluştur" butonuna tıklayın
6. Token'ı kopyalayın

### 2. Adım: Ortam Değişkenlerini Ayarlama

`.env.local` dosyanıza şunları ekleyin:

```bash
# Facebook Pixel (Zaten yapılandırılmış)
NEXT_PUBLIC_FACEBOOK_PIXEL_ID=1523730565356174

# Facebook Conversions API (GEREKLİ - Bunu ekleyin)
FACEBOOK_CONVERSIONS_API_TOKEN=buraya_token_yapistirin

# Opsiyonel: Test için
FACEBOOK_CONVERSIONS_API_TEST_CODE=TEST12345
```

### 3. Adım: Dataset Quality API'yi Etkinleştirme (Önerilen)

Dataset Quality API, olay eşleşme kalitesi gibi metrikleri sağlar:

1. Facebook Events Manager'a gidin
2. Dataset/Pixel'inizi seçin
3. "Ayarlar" > "Conversions API"'ye gidin
4. "Dataset Quality API"yi etkinleştirin
5. **Önemli**: Bir kez etkinleştirildiğinde devre dışı bırakılamaz

## 📊 Takip Edilen Olaylar

### 1. PageView (Sayfa Görüntüleme)
- **Ne zaman**: Her sayfa yüklendiğinde
- **Nerede**: Otomatik
- **Veri**: Sayfa URL'si

### 2. AddToCart (Sepete Ekleme)
- **Ne zaman**: Kullanıcı hizmet türü seçtiğinde
- **Nerede**: Rezervasyon formu
- **Veri**: Hizmet adı, depozito tutarı

### 3. InitiateCheckout (Ödemeyi Başlatma)
- **Ne zaman**: Rezervasyon formu gönderildiğinde
- **Nerede**: Rezervasyon formu
- **Veri**: Müşteri bilgileri, hizmet detayları, tutar

### 4. Purchase (Satın Alma)
- **Ne zaman**: Ödeme başarıyla tamamlandığında
- **Nerede**: Başarı sayfası
- **Veri**: İşlem ID, tutar, müşteri bilgileri

## 🔒 Gizlilik ve Veri Koruma

### Veri Hashleme
Facebook'a gönderilen tüm kişisel veriler SHA-256 ile hashlenmiştir:
- E-posta adresleri
- Telefon numaraları
- İsimler
- Konum verileri

### GDPR Uyumluluğu
- Kullanıcı verileri sadece açık eylemden sonra gönderilir
- Formlarla etkileşime girmeyen kullanıcılar takip edilmez
- Veriler iletimden önce hashlenir

## 🚀 Yayına Alma Kontrol Listesi

Canlıya almadan önce:

- [ ] `FACEBOOK_CONVERSIONS_API_TOKEN`'ı Vercel ortam değişkenlerine ekleyin
- [ ] Production'da `FACEBOOK_CONVERSIONS_API_TEST_CODE`'u kaldırın
- [ ] Tüm olayları Facebook Events Manager'da test edin
- [ ] Olay tekrarını önlemenin çalıştığını doğrulayın
- [ ] Dataset Quality metriklerini kontrol edin
- [ ] Vercel loglarında hata olup olmadığını kontrol edin

## 📈 İzleme ve Optimizasyon

### Olay Kalitesini Kontrol Etme
1. Events Manager > Diagnostics'e gidin
2. "Event Match Quality" skorunu inceleyin
3. "İyi" veya "Mükemmel" derecelendirme hedefleyin
4. Daha fazla müşteri verisi parametresi ekleyerek iyileştirin

### Performans İzleme
- İlk hafta her gün Events Manager'ı kontrol edin
- Olay sayılarını ve eşleşme oranlarını gözden geçirin
- Tekrarlanan olay olmadığını doğrulayın
- API hataları için sunucu loglarını izleyin

## 🎯 Sonraki Adımlar

### Önerilen İyileştirmeler:
1. **İletişim formuna Lead tracking ekleyin**
2. **Filo ve hizmet sayfalarına ViewContent tracking ekleyin**
3. **Stripe webhook'ları ile sunucu tarafı Purchase olayları kurun**
4. **Facebook Ads Manager'da Özel Dönüşümler yapılandırın**
5. **Attribution pencerelerini gereksinimlerinize göre ayarlayın**

### Gelişmiş Özellikler:
- Olaylara dayalı özel kitleler
- Benzer kitleler
- Yeniden hedefleme için dinamik reklamlar
- Reklam kampanyaları için dönüşüm optimizasyonu

## 📞 Destek

Sorun yaşarsanız:
1. Vercel deployment loglarını kontrol edin
2. Facebook Events Manager diagnostics'i inceleyin
3. Ortam değişkenlerinin doğru ayarlandığını doğrulayın
4. Tarayıcı konsolunda istemci tarafı hataları kontrol edin

## 📚 Kaynaklar

- [Facebook Pixel Dokümantasyonu](https://developers.facebook.com/docs/facebook-pixel)
- [Conversions API Dokümantasyonu](https://developers.facebook.com/docs/marketing-api/conversions-api)
- [Dataset Quality API](https://developers.facebook.com/docs/marketing-api/conversions-api/dataset-quality-api)

---

**Entegrasyon Durumu**: ✅ Production'a Hazır (Conversions API token bekleniyor)
**Son Güncelleme**: Aralık 2024

## 💡 Hızlı Başlangıç

1. Facebook'tan Conversions API token alın
2. `.env.local` dosyasına ekleyin
3. Geliştirme sunucusunu yeniden başlatın: `npm run dev`
4. Bir test rezervasyonu yapın
5. Facebook Events Manager'da olayları kontrol edin

Başarılar! 🎉
