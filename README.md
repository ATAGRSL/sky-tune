# 🌤️ SkyTune - Hava Durumuna Göre Müzik Önerici

Modern web teknolojileri ile kullanıcının bulunduğu konumdaki hava durumuna göre kişiselleştirilmiş müzik türü öneren akıllı tek sayfalık web uygulaması. Sesli komutlar, gece/gündüz modu ve offline destek özellikleriyle.

## ✨ Özellikler

- 📍 **Otomatik konum tespiti** - GPS ile anlık konum alma
- 🌤️ **Gerçek zamanlı hava durumu** - OpenWeatherMap API entegrasyonu
- 🎵 **Akıllı müzik önerileri** - Hava durumuna özel öneriler
- 🎨 **Dinamik arka plan renkleri** - Hava durumuna göre değişen renkler
- 🌙 **Gece/gündüz modu** - Zaman dilimine göre farklı öneriler
- 🎤 **Sesli komutlar** - Web Speech API ile sesli etkileşim
- 📱 **Responsive tasarım** - Tüm cihazlarda mükemmel görünüm
- ⚡ **Modern animasyonlar** - Smooth geçişler ve hover efektleri
- 💾 **Offline destek** - Local Storage ile önbellekleme
- 📊 **Detaylı hava durumu** - Nem, rüzgar, görüş uzaklığı
- 🔄 **Otomatik yenileme** - Bağlantı geldiğinde veri güncelleme

## 🛠️ Kullanılan Teknolojiler

- **HTML5** - Semantik markup ve erişilebilirlik
- **CSS3** - Modern layout, animasyonlar ve responsive tasarım
- **JavaScript ES6+ Modüller** - Modüler kod yapısı
- **OpenWeatherMap API** - Gerçek zamanlı hava durumu verisi
- **Web Speech API** - Ses tanıma ve sentezleme
- **Geolocation API** - Konum tespiti
- **Local Storage API** - Offline veri önbellekleme
- **CSS Custom Properties** - Dinamik tema yönetimi

## 🚀 Kurulum ve Çalıştırma

### 1. API Key Almak
1. [OpenWeatherMap](https://openweathermap.org/api) adresine gidin
2. Ücretsiz hesap oluşturun
3. API key'inizi alın

### 2. Projeyi Hazırlamak
1. `api.js` dosyasını açın
2. İlk satırdaki `YOUR_API_KEY_HERE` yerine kendi API key'inizi yazın:

```javascript
const API_KEY = 'buraya_kendi_api_key_inizi_yazin';
```

**⚠️ Demo Key:** Proje şu anda demo API key ile çalışmaktadır. Kendi API key'inizi almak için [OpenWeatherMap](https://openweathermap.org/api) adresini ziyaret edin.

### 3. Uygulamayı Çalıştırmak
```bash
# Proje dizinine gidin
cd proje-dizini

# HTTP sunucusu başlatın
python3 -m http.server 8000
```

4. Tarayıcınızda `http://localhost:8000` adresini açın

**🌐 Canlı Demo:** [SkyTune Demo](http://localhost:8080) (Sunucu çalıştığında)

## 🎵 Müzik Öneri Sistemi

| Hava Durumu | Gündüz | Gece |
|-------------|---------|------|
| Güneşli | Enerjik Pop | Sakin Akustik |
| Bulutlu | Indie Rock | Lo-Fi Chill |
| Yağmurlu | Sakin Lofi Hip-Hop | Sakin Lofi Hip-Hop |
| Karlı | Akustik Klasikler | Akustik Klasikler |
| Fırtınalı | Elektronik Ambient | Elektronik Ambient |
| Çiseleme | Jazz | Jazz |
| Sisli | Klasik Müzik | Ambient |

## 🎤 Sesli Komutlar

🎵 **Kullanılabilir Sesli Komutlar:**

- **"Hava durumu"** - Mevcut hava durumu ve müzik önerisini sesli okur
- **"Müzik öner"** - Sadece müzik önerisini sesli söyler
- **"Sıcaklık"** - Mevcut sıcaklık değerini sesli belirtir
- **"Şehir"** - Hangi şehir için hava durumu gösterildiğini söyler
- **"Yenile"** - Hava durumu verilerini yeniler
- **"Merhaba"** - Asistan ile selamlaşma
- **"Yardım"** - Kullanılabilir komutları listeler

🎵 **Sesli Komut Kullanımı:**
1. 🎤 Butonuna tıklayın
2. Mikrofon simgesi kırmızıya dönecek
3. Yukarıdaki komutlardan birini söyleyin
4. Asistan size yanıt verecek

## 🎨 Renk Sistemi

- **Güneşli (Gündüz)**: Açık mavi gradyan
- **Güneşli (Gece)**: Lacivert ve mor gradyan
- **Yağmurlu**: Koyu gri tonları
- **Bulutlu (Gündüz)**: Orta gri tonları
- **Bulutlu (Gece)**: Koyu gri tonları
- **Karlı**: Beyaz ve açık mavi
- **Fırtınalı**: Çok koyu gri
- **Sisli (Gündüz)**: Açık gri tonları
- **Sisli (Gece)**: Koyu gri tonları

## 💾 Offline Destek

- **Önbellekleme**: Son 30 dakika içinde alınan hava durumu verileri otomatik olarak kaydedilir
- **Offline Erişim**: İnternet bağlantısı yokken önbellekten veri gösterilir
- **Otomatik Güncelleme**: İnternet bağlantısı geri geldiğinde veriler yenilenir
- **Bağlantı Bildirimleri**: Online/offline durum değişikliklerinde kullanıcı bilgilendirilir

## 📱 İnteraktif Özellikler

- **Hover Efektleri**: Tüm elementlerde smooth hover animasyonları
- **Sesli Geri Bildirim**: Tüm komutlara sesli yanıt
- **Animasyonlu Yükleme**: Çizgi animasyonlu loading durumu
- **Mikro Etkileşimler**: Buton click'lerinde ve hover'larda küçük animasyonlar
- **Responsive Feedback**: Her etkileşimde görsel geri bildirim

## 📱 Tarayıcı Desteği

- Chrome/Chromium
- Firefox
- Safari
- Edge



## 📋 Gereksinimler

- Modern web tarayıcısı (Chrome, Firefox, Safari önerilir)
- Konum servislerine izin (GPS erişimi için)
- Mikrofon erişimi (sesli komutlar için)
- İnternet bağlantısı (ilk kullanım için)
- OpenWeatherMap API key

## 🎯 Modern Web API'leri

- **Geolocation API** - Konum tespiti
- **Web Speech API** - Ses tanıma ve sentezleme
- **Local Storage API** - Veri önbellekleme
- **Navigator.onLine** - Bağlantı durumu tespiti
- **CSS Animations** - Smooth geçişler

## 📁 Proje Yapısı

```
SkyTune/
├── index.html          # Ana HTML dosyası - ARIA labels ile erişilebilir
├── style.css           # CSS stilleri - Responsive tasarım ve animasyonlar
├── main.js             # Ana koordinatör modül - Diğer modülleri yönetir
├── api.js              # API işlemleri - OpenWeatherMap entegrasyonu
├── ui.js               # UI güncellemeleri - DOM manipülasyonu ve arayüz
├── voice.js            # Sesli komutlar - Web Speech API implementasyonu
└── README.md           # Proje dokümantasyonu ve kullanım kılavuzu
```

### 🎯 Modüler Mimari Avantajları

- **Bakım Kolaylığı**: Her modül belirli bir sorumluluğa sahip
- **Tekrar Kullanılabilirlik**: Fonksiyonlar farklı projelerde kullanılabilir
- **Test Edilebilirlik**: Her modül ayrı ayrı test edilebilir
- **Performans**: Sadece ihtiyaç duyulan kodlar yüklenir
- **Geliştirme Hızı**: Paralel geliştirme imkanı

## ♿ Erişilebilirlik (Accessibility)

### ✅ Uygulanan Özellikler:

- **ARIA Labels**: Ekran okuyucular için açıklayıcı etiketler
- **Semantic HTML**: Anlamlı HTML elementleri
- **Keyboard Navigation**: Klavye ile navigasyon desteği
- **Focus Management**: Odak yönetimi
- **Color Contrast**: Yeterli renk kontrastı
- **Alt Text**: Görseller için alternatif metinler

### 🎯 Erişilebilirlik Testleri:

- [ ] Ekran okuyucu ile test edildi (NVDA, JAWS, VoiceOver)
- [ ] Klavye navigasyonu test edildi
- [ ] Renk kontrastı WCAG 2.1 AA standardına uygun
- [ ] Odak göstergeleri belirgin

## 🐛 Sorun Giderme

### "Konum alınamıyor" hatası
- Tarayıcı ayarlarından konum iznini kontrol edin
- HTTPS protokolü kullandığınızdan emin olun
- VPN kullanıyorsanız kapatmayı deneyin

### "API key hatası"
- `api.js` dosyasında API key'inizi doğru yazdığınızdan emin olun
- OpenWeatherMap hesabınızın aktif olduğunu kontrol edin
- Demo key kullanıyorsanız, limit aşılmış olabilir

### Sesli komutlar çalışmıyor
- Tarayıcıda mikrofon iznini kontrol edin
- HTTPS bağlantısı gereklidir
- Web Speech API desteği olup olmadığını kontrol edin

### Offline mod çalışmıyor
- Önce online iken uygulamayı kullanın
- Local Storage'ın aktif olduğundan emin olun
- Tarayıcı ayarlarından site verilerini temizlemeyin

### Uygulama açılmıyor
- Dosyaların aynı dizinde olduğundan emin olun
- HTTP sunucusunun çalıştığından emin olun
- Tarayıcı konsolunda hata mesajlarını kontrol edin
- Modül import hatası varsa `type="module"` kontrol edin

## 🚀 Performans Optimizasyonları

- **Verimli API Çağrıları**: Koordinat bazlı önbellekleme
- **Lazy Loading**: İhtiyaç olduğunda veri yükleme
- **Optimized Animations**: Hardware acceleration kullanımı
- **Memory Management**: Otomatik önbellek temizleme
- **Error Boundaries**: Hata durumunda graceful degradation

## 🔒 Güvenlik

- Konum bilgisi sadece hava durumu için kullanılır
- API anahtarı istemci tarafında saklanır
- HTTPS protokolü zorunludur
- Local Storage şifrelenmiş veri saklama
- XSS koruması için input sanitization

## 📄 Lisans

Bu proje açık kaynak kodludur ve kişisel/öğrenim amaçlı kullanım için oluşturulmuştur. Ticari kullanım için OpenWeatherMap API şartlarını inceleyiniz.

## 🤝 Katkıda Bulunma

Bu proje açık kaynak kodlu bir projedir ve katkılarınıza açığız! 🎉

### 📝 Nasıl Katkıda Bulunabilirsiniz:

1. **Fork** edin
2. **Feature branch** oluşturun (`git checkout -b feature/amazing-feature`)
3. **Commit** edin (`git commit -m 'Add amazing feature'`)
4. **Push** edin (`git push origin feature/amazing-feature`)
5. **Pull Request** oluşturun

### 🐛 Bug Bildirimi:
- Issue'lar için [GitHub Issues](https://github.com/your-username/SkyTune/issues) kullanın
- Lütfen detaylı açıklama ve adımlar ekleyin
- Ekran görüntüleri çok yardımcı olur!

### 📋 Geliştirme Standartları:
- ESLint kurallarına uyun
- Semantik commit mesajları kullanın
- Test yazın (gelecekte eklenecek)
- Accessibility standartlarına uyun

## 📊 Proje İstatistikleri

![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-blue.svg)
![HTML5](https://img.shields.io/badge/HTML5-Semantic-orange.svg)
![CSS3](https://img.shields.io/badge/CSS3-Modern-blue.svg)
![OpenWeatherMap](https://img.shields.io/badge/OpenWeatherMap-API-green.svg)
![Web%20Speech%20API](https://img.shields.io/badge/Web%20Speech%20API-Enabled-purple.svg)
![License](https://img.shields.io/badge/License-MIT-yellow.svg)

## 🌟 Son Notlar

Bu uygulama modern web teknolojilerini kullanarak hava durumu ve müzik önerilerini akıllı bir şekilde birleştirir. Her özellik dikkatlice implement edilmiş ve kullanıcı deneyimi ön planda tutulmuştur.

### 🎯 Proje Felsefesi:
- **Kullanıcı Odaklı**: Basit ve sezgisel tasarım
- **Performans Odaklı**: Hızlı ve verimli kod
- **Erişilebilirlik Odaklı**: Herkes için kullanılabilir
- **Modern Web**: En yeni web teknolojilerini kullanma

**🎵 Mutlu kodlamalar! 🎵**

---

<div align="center">
  <p>Geliştirici: <a href="https://github.com/ATAGRSL">Ata Gürsel</a></p>
  <p>⭐ Bu projeyi beğendiyseniz yıldız vermeyi unutmayın! ⭐</p>
</div>
