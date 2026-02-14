# Open Graph Image Oluşturma Talimatları

## Sosyal Medya Görseli Gerekli!

Sitenizin sosyal medyada (Facebook, Twitter, LinkedIn) paylaşıldığında güzel görünmesi için **og-image.png** dosyası oluşturmanız gerekiyor.

## Adım 1: HTML Dosyasını Açın

1. Tarayıcınızda şu dosyayı açın:
   ```
   luxury-limousine-landing-page/public/og-image.html
   ```

2. Veya doğrudan şu URL'yi açın:
   ```
   file:///Users/06yildizlimo/Desktop/luxury-limousine-landing-page/public/og-image.html
   ```

## Adım 2: Screenshot Alın

### Chrome/Edge Kullanıyorsanız:
1. Sayfayı tam ekran yapın (F11)
2. Developer Tools'u açın (F12)
3. Console'da şu komutu çalıştırın:
   ```javascript
   document.body.style.width = '1200px';
   document.body.style.height = '630px';
   ```
4. Cmd+Shift+P (Mac) veya Ctrl+Shift+P (Windows)
5. "Capture screenshot" yazın
6. "Capture full size screenshot" seçin
7. İndirilen dosyayı `og-image.png` olarak kaydedin

### Alternatif Yöntem - Online Tool:
1. https://www.screenshotmachine.com/ adresine gidin
2. Dosya yolunu yapıştırın veya HTML'i yükleyin
3. Boyut: 1200x630 seçin
4. Screenshot alın ve `og-image.png` olarak kaydedin

### Alternatif Yöntem - Mac Screenshot:
1. HTML dosyasını Safari'de açın
2. Tam ekran yapın
3. Cmd+Shift+4 basın
4. Space tuşuna basın (pencere screenshot modu)
5. Pencereye tıklayın
6. Görseli `og-image.png` olarak kaydedin

## Adım 3: Dosyayı Yerleştirin

1. `og-image.png` dosyasını şuraya kopyalayın:
   ```
   luxury-limousine-landing-page/public/og-image.png
   ```

2. Dosya boyutu kontrol edin:
   - Boyut: 1200x630 piksel
   - Format: PNG
   - Dosya boyutu: < 5 MB

## Adım 4: Test Edin

### Facebook Debugger:
1. https://developers.facebook.com/tools/debug/ adresine gidin
2. URL'nizi girin: `https://www.06yildizlimo.com`
3. "Scrape Again" butonuna tıklayın
4. Görselin göründüğünü kontrol edin

### Twitter Card Validator:
1. https://cards-dev.twitter.com/validator adresine gidin
2. URL'nizi girin: `https://www.06yildizlimo.com`
3. "Preview card" butonuna tıklayın
4. Görselin göründüğünü kontrol edin

### LinkedIn Post Inspector:
1. https://www.linkedin.com/post-inspector/ adresine gidin
2. URL'nizi girin: `https://www.06yildizlimo.com`
3. "Inspect" butonuna tıklayın
4. Görselin göründüğünü kontrol edin

## Adım 5: Git'e Ekleyin

```bash
cd luxury-limousine-landing-page
git add public/og-image.png
git commit -m "feat: Add Open Graph social media image"
git push origin main
```

## Beklenen Sonuç

Sosyal medyada paylaşıldığında:
- ✅ Büyük, göz alıcı görsel
- ✅ 06YILDIZ LIMO logosu ve taç
- ✅ "Luxury Limousine Service" başlığı
- ✅ Hizmet açıklaması
- ✅ Lokasyon bilgisi (Peterborough & Toronto)

## Sorun Giderme

### Görsel Görünmüyorsa:
1. Dosya adının tam olarak `og-image.png` olduğundan emin olun
2. Dosyanın `public` klasöründe olduğundan emin olun
3. Vercel'de deploy edildikten sonra 24 saat bekleyin
4. Facebook/Twitter cache'ini temizleyin (debugger tool'ları kullanarak)

### Görsel Bozuksa:
1. Boyutun tam olarak 1200x630 olduğundan emin olun
2. PNG formatında olduğundan emin olun
3. Dosya boyutunun 5 MB'dan küçük olduğundan emin olun

## Hızlı Çözüm - Geçici Olarak Logo Kullanın

Eğer şimdi görsel oluşturamıyorsanız, geçici olarak mevcut logoyu kullanabilirsiniz:

```bash
cd luxury-limousine-landing-page/public
cp yildizlimo.png og-image.png
```

Ancak bu ideal değil çünkü logo 512x512 boyutunda. Sosyal medya için 1200x630 boyutunda özel görsel daha iyi görünür.

---

**Not**: Bu görsel, sitenizin sosyal medyada paylaşıldığında nasıl göründüğünü belirler. Profesyonel bir görsel, tıklama oranını %40'a kadar artırabilir!
