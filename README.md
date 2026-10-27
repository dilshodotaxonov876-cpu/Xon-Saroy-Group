# "XON SAROY" — Quruq Qurilish Aralashmalari Korporativ Katalog Sayti

> **Shior:** Turkiya texnologiyasi asosida O'zbekistonda ishlab chiqarilgan.  
> **Uslub:** Megamix.uz darajasidagi premium, zamonaviy va mobil qurilmalarga to'liq moslashgan korporativ katalog.

---

## 📌 Loyiha Tarkibi va Imkoniyatlari

1. **Header va Brendlash**:
   - XON SAROY brend logotipi va Turkiya texnologiyasi nishoni
   - Tezkor aloqa telefonlari (+998 90 427-00-10, +998 99 428-00-10, +998 99 429-00-10)
   - Ikki tilli tizim (**UZ** / **RU**) — sahifani qayta yuklamasdan lahzada almashtirish
   - "Ariza qoldirish" tezkor tugmasi

2. **Hero Banner**:
   - Megamix uslubidagi qudratli taqdimot, 3D qop vizuali va sifat kafolati statistikasi
   - "Ustalar uchun maxsus BONUS" aksiyasiga to'g'ridan-to'g'ri o'tish

3. **Ustalar Uchun Maxsus BONUS (Aksiya Bloki)**:
   - "Qop ichidan stikerni toping va sovg'alarni yutib oling!"
   - Bosh sovrinlar: Tracker/Onix avtomobili, PFT G4 suvoq stantsiyalari, smartfonlar va kafolatlangan pul mukofotlari
   - Aksiya shartlari va Telegram bot orqali kodni faollashtirish bo'yicha interaktiv modal oyna

4. **11 Ta Mahsulotning To'liq Katalogi**:
   - **Gips va Polimer Shpaklyovkalar**:
     * `SILK POLY 20 / SILK` (Satin gips) — 20/25 kg
     * `GLATT 05` (Gipsli pardoz shpaklyovkasi) — 25 kg
     * `Cover` (Fasad shpaklyovkasi) — 20 kg
     * `FleXon` (Chok va lepka uchun) — 20 kg
   - **Shtukaturka va Suvoqlar**:
     * `DOMINANT` (Universal gips suvoq) — 25 kg
     * `DOMINANT-SP` (Mashinada surtiluvchi gips suvoq) — 30 kg
     * `ARMOR` (Sementli armirlangan fasad suvoq) — 25 kg
   - **Yelimlar va Gidroizolyatsiya**:
     * `INFINITY` (Kuchaytirilgan kafel yelimi C1TE) — 25 kg
     * `BlockFix` (Gazobeton yelimi) — 25 kg
     * `HYDRO 255` (2 komponentli elastik gidroizolyatsiya) — 25 kg
   - **Quyma Pol**:
     * `LEVEL` (O'z-o'zidan tebranuvchi va silliqlanuvchi pol aralashmasi) — 25 kg

5. **Interaktiv Mahsulot Modali (Mahsulot Pasporti)**:
   - Qop tasviri va vazni
   - Qo'llanilish sohasi va afzalliklari
   - To'liq laboratoriya texnik ko'rsatkichlari (suv nisbati, sarfi, qotish vaqti, qatlam qalinligi, ish harorati, saqlash muddati, GOST/TSE standartlari)
   - **PDF yo'riqnomani yuklab olish / Chop etish** tugmasi
   - "Shu mahsulotga buyurtma berish" tugmasi

6. **Ustalar Uchun Quruq Qorishma Sarfi Kalkulyatori**:
   - Mahsulotni tanlash, maydon (m²) va qalinlikni (mm) kiritish
   - 5% zaxira bilan jami zarur kilogramm va qoplar sonini lahzada hisoblash
   - Hisoblangan hajmda arizani rasmiylashtirish

7. **Telegram Bot API Integratsiyalashgan Ariza Formasi**:
   - Ism, telefon, mahsulot, hajm va manzil
   - Saytdagi barcha arizalar kompaniyaning Telegram botiga darhol xabar bo'lib tushadi
   - Saytning o'zida qulay sozlash interfeysi mavjud ("Bot API" tugmasi)

8. **Chirchiq Shahridagi Manzil va Xarita**:
   - Toshkent viloyati, Chirchiq shahri, V.Haydarov ko'chasi 31/13
   - Interaktiv xarita va to'g'ridan-to'g'ri qo'ng'iroq qilish imkoniyati

---

## 🚀 Ishga Tushirish (Zero-Dependency)

Loyiha sof HTML5, Tailwind CSS va zamonaviy Vanilla JavaScript arxitekturasida yaratilgan. Hech qanday `npm install` yoki `node` o'rnatish talab qilinmaydi!

1. Papkaga kiring:
   ```
   C:\Users\delux\.gemini\antigravity\scratch\xon-saroy-catalog
   ```
2. `index.html` faylini istalgan brauzerda (Google Chrome, Edge, Safari, Firefox) oching.
3. Windows PowerShell orqali ishga tushirish:
   ```powershell
   Start-Process index.html
   ```

---

## 🤖 Telegram Bot Integratsiyasini Sozlash

Saytdan arizalar sizning Telegram guruhingizga tushishi uchun:

1. Telegramda [@BotFather](https://t.me/BotFather) botiga kiring va `/newbot` buyrug'i orqali yangi bot ochib, uning **Token**ini oling (masalan: `7891234567:AAExampleToken...`).
2. Arizalar kelib tushishi kerak bo'lgan Telegram guruh yoki kanal yarating va botingizni o'sha guruhga admin qilib qo'shing.
3. Guruhning **Chat ID** sini bilish uchun [@userinfobot](https://t.me/userinfobot) botini guruhga qo'shing yoki `https://api.telegram.org/bot<TOKEN>/getUpdates` havolasini brauzerda oching. Guruh ID lari odatda `-100...` bilan boshlanadi.
4. Saytning yuqori o'ng burchagidagi **"Bot API"** tugmasini bosing:
   - `Telegram Bot Token` maydoniga tokeningizni kiriting.
   - `Guruh Chat ID` maydoniga chat ID ni kiriting.
   - **"Saqlash"** tugmasini bosing.
5. Endi saytdan yuborilgan har bir ariza darhol sizning Telegramingizga chiroyli formatlangan holda kelib tushadi!

---

## 🌐 Serverga Joylashtirish (Hosting)

Ushbu static saytni 1 daqiqada bepul internetga yuklash mumkin:
- **Vercel**: Papkani `vercel deploy` orqali yoki Vercel veb-interfeysiga tortib tashlash orqali.
- **Netlify**: Papkani `netlify.com/drop` sahifasiga tashlash kifoya.
- **cPanel / Apache / Nginx**: `public_html` papkasiga barcha fayllarni ko'chirish kifoya.

---

## 🛠️ CMS (Admin Panel) Integratsiyasi Bo'yicha Tavsiyalar

Agar kelajakda mahsulotlar soni va narxlarni boshqarish uchun backend panel kerak bo'lsa:
1. **Strapi (Headless CMS)**:
   - Mahsulotlar uchun `Product` kolleksiyasini yaratib, REST API orqali `js/data.js` o'rniga `fetch('https://api.xonsaroy.uz/api/products')` orqali ma'lumot olish mumkin.
2. **WordPress (WooCommerce / Custom Post Type)**:
   - WordPress REST API orqali integratsiya qilish.
3. **Laravel API**:
   - Katta hajmdagi ombor qoldiqlari, CRM va buyurtmalar hisobi uchun eng maqbul yechim.
