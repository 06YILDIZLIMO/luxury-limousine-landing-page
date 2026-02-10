# AI Voice Agent - TODO List

## ✅ TAMAMLANAN GÖREVLER

### 1. OpenAI System Prompt Güncelleme
- [x] lib/openai.ts dosyasını güncelle
- [x] Comprehensive pricing rules eklendi
- [x] Vehicle constraints eklendi
- [x] Conversation flow eklendi
- [x] calculatePrice() fonksiyonu eklendi
- [x] recommendVehicle() fonksiyonu eklendi

---

## 🚀 SON STRATEJİK FİYATLAR (CAD) - Peterborough ↔ YYZ One Way

| Araç | **Fiyat** | +HST | **Total** | **Uber Karşılığı** | Avantaj |
|------|-----------|------|-----------|-------------------|---------|
| **Luxury Sedan** | **$350** | $45.50 | **$395.50** | ~$487 | **$92 DAHA UCUZ!** 🏆 |
| **Luxury SUV** | **$430** | $55.90 | **$485.90** | ~$506 | **$20 DAHA UCUZ + GARANTİ ARAÇ** 🎯 |
| **S-Class / BMW 7 Series** | **$475** | $61.75 | **$536.75** | Premium | VIP Deneyim |
| **Standard XL** | **$350** | $45.50 | **$395.50** | - | Ekonomik Seçenek |
| **Stretch Limo (6)** | **$550** | $71.50 | **$621.50** | - | Premium |
| **Stretch Limo (10)** | **$600** | $78.00 | **$678.00** | - | Büyük Gruplar |
| **Sprinter Van** | **$650** | $84.50 | **$734.50** | - | 14 Kişi |
| **Rolls-Royce** | **$1,400** | $182 | **$1,582** | Ultra-Luxury | Kontrol Edilmeli |

### Ek Ücretler
- Airport Pickup: **+$20** (YYZ'den alım)
- 407 ETR: Client pays (toll)
- İptal (<4 saat): **%50** ücret
- Gratuity: **%15-20** önerilen

---

## 🎯 MARKA DURUŞU (KRİTİK!)

### YASAKLI KELİMELER (ASLA KULLANMA!)
- ~~"Uber"~~, ~~"Lyft"~~
- ~~"Cheap"~~, ~~"Discount"~~
- ~~Kıyaslama yapma!~~

### ONAYLI DİL:
✅ "Premium"
✅ "Fixed Rate"
✅ "Professional Chauffeur"
✅ "Guaranteed"
✅ "Competitive"

### Müşteriye Söylencek Cümle:
> **"We offer a guaranteed premium flat rate with professional chauffeurs, unlike fluctuating market prices."**

---

## 🗣️ KONUŞMA AKIŞI

1. **GREETING**: "Thank you for calling 06YILDIZ LIMO! How may I assist with your transportation needs today?"

2. **DETAILS**: Pickup, Destination, Date, Time, Pax, Luggage

3. **VEHICLE FILTER**:
   - **Pax > 3 VEYA Bags > 2** → **SUV ($475) ZORUNLU**
   - Sedan: Sadece 1-3 yolcu, 2 veya az bagaj

4. **PRICING RESPONSE**:
   > "We offer a guaranteed premium flat rate with professional chauffeurs, unlike fluctuating market prices."

5. **CLOSING**: Name, Phone, SMS payment link

---

## ✅ DURUM

**Status:** ✅ CRITICAL RULES EKLENDI - TEST EDİLMELİ

### 🔴 TEST CASE'LERİ (HER DEĞİŞİKLİKTEN SONRA ÇALIŞTIR!)

#### TEST 1: "Yasaklı Kelime" Testi
```
Input: "Uber bu yolu 440 dolara götürüyor, sizde indirim var mı?"
✅ DOĞRU CEVAP: "We offer a guaranteed premium flat rate with professional 
               chauffeurs, unlike fluctuating market prices."
❌ YANLIŞ: "Uber" kelimesini tekrar etmek
```

#### TEST 2: "Bagaj Tuzağı" Testi
```
Input: "4 kişiyiz ama 5 tane büyük bavulumuz var, Sedan olur mu?"
✅ DOĞRU CEVAP: "Unfortunately, a Sedan cannot accommodate 4 passengers with 
               5 bags. I recommend our Luxury SUV at $475 + HST..."
❌ YANLIŞ: "Tamam, Sedan verebiliriz" demek
```

---

---

## 🎯 SATIŞ ARGÜMANLARI (THE "CLOSER" SCRIPT)

### ARGUMENT 1: Gizli Ücret Saldırısı
**Müşteri uygulama fiyatını sorarsa:**
> "Ride-share apps show you one price, but they add 'Estimated Fees' of ~$70 and can charge up to $0.80 per minute in traffic. Our price is 100% fixed. Even if traffic stops for an hour, you don't pay a penny more."

### ARGUMENT 2: Araç Kalitesi Garantisi
**Hizmet karşılaştırması yapılırsa:**
> "You might see similar prices elsewhere, but those services send standard vehicles like Ford Expedition. We guarantee a full-size luxury SUV—Cadillac Escalade or Suburban—with professional chauffeur in formal attire."

### ARGUMENT 3: Şeffaf Vergi
**"Vergi dahil mi?" diye sorarsa:**
> "Our quotes are Base Rate + HST. Unlike apps where the final charge can change, we provide a transparent total before you book."

---

## 🚀 DEPLOYMENT KOMUTLARI

```bash
cd luxury-limousine-landing-page
npm run build
git add .
git commit -m "feat: Strategic pricing - Sedan $350, SUV $430 vs Uber Black"
git push
```

---

### Yapılacak Sonraki Adımlar
- [ ] Build test et
- [ ] Vercel'de deploy et
- [ ] Twilio Voice webhook test
- [ ] **Test case'leri manual test et!**

