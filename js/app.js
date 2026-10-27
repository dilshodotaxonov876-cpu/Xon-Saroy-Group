/**
 * XON SAROY - Asosiy Dastur Mantiqi (app.js)
 * - XON SAROY INFINITY 3D qopi dizayniga 100% mos va bir xil mockup arxitekturasi
 * - 3D tasvirlar (Mockup Photos) va 3D Izometrik Vektor generatori
 * - 11 ta mahsulot uchun alohida rangli tasmalar, ruscha rasmiy tavsiflar va ish jarayoni mini-rasmlari (thumbnails)
 * - 3D ko'tarilish va 11 xil yorug'lik nuri (Glowing effect)
 * - Ko'p tillilik (UZ/RU), kalkulyator, modallar va Telegram Bot API
 */

// Global holat (State)
let currentLang = localStorage.getItem('xon_lang') || 'uz';
let currentCategory = 'all';
let currentModalProductId = null;

// Telegram Bot Sozlamalari
let TELEGRAM_CONFIG = {
  botToken: localStorage.getItem('xon_bot_token') || '7891234567:AAExampleTelegramBotTokenHere',
  chatId: localStorage.getItem('xon_chat_id') || '-1001234567890',
  managerPhone: '+998904270010',
  telegramManagerUrl: 'https://t.me/dilshod_otaxonov'
};

// ==========================================================================
// 1. ISHLATILISH JARAYONINI KO'RSATUVCHI 2D MINI-TASVIRLAR (THUMBNAILS)
// ==========================================================================
function getProcessThumbnailSvg(type, color) {
  switch (type) {
    case 'tile': // INFINITY: Kafel yopishtirish
      return `
        <rect width="176" height="106" fill="#F8FAFC" rx="4" />
        <path d="M 12 75 L 85 75 M 12 80 L 85 80 M 12 85 L 85 85 M 12 90 L 85 90 M 12 95 L 85 95" stroke="#94A3B8" stroke-width="2.5" stroke-linecap="round" />
        <rect x="18" y="16" width="60" height="50" rx="3" fill="#E2E8F0" stroke="#64748B" stroke-width="1.5" />
        <rect x="86" y="16" width="68" height="50" rx="3" fill="#CBD5E1" stroke="#64748B" stroke-width="1.5" />
        <rect x="86" y="72" width="68" height="26" rx="3" fill="#94A3B8" stroke="#475569" stroke-width="1.5" />
        <path d="M 40 50 L 72 32 L 64 26 L 32 44 Z" fill="${color}" />
        <rect x="48" y="24" width="28" height="8" rx="2" fill="#334155" />
        <path d="M 86 41 L 86 45 M 84 43 L 88 43" stroke="#DC2626" stroke-width="2.5" stroke-linecap="round" />
      `;

    case 'gasblock': // BlockFix: Gazobeton terish
      return `
        <rect width="176" height="106" fill="#F8FAFC" rx="4" />
        <rect x="15" y="55" width="70" height="42" rx="2" fill="#E2E8F0" stroke="#64748B" stroke-width="1.5" />
        <rect x="91" y="55" width="70" height="42" rx="2" fill="#E2E8F0" stroke="#64748B" stroke-width="1.5" />
        <rect x="45" y="14" width="85" height="38" rx="2" fill="#CBD5E1" stroke="#64748B" stroke-width="1.5" />
        <rect x="15" y="52" width="146" height="3" fill="${color}" />
        <path d="M 95 38 L 130 22 L 140 28 L 105 44 Z" fill="${color}" />
        <rect x="122" y="18" width="18" height="6" rx="2" fill="#1E293B" />
      `;

    case 'satin_spatula': // SILK POLY 20: Satin gips silliqlash
      return `
        <rect width="176" height="106" fill="#F8FAFC" rx="4" />
        <rect x="12" y="12" width="152" height="82" rx="3" fill="#F1F5F9" />
        <path d="M 12 12 L 100 12 L 80 94 L 12 94 Z" fill="#FFFFFF" opacity="0.9" />
        <path d="M 40 20 Q 95 45 65 94" stroke="#BAE6FD" stroke-width="3" fill="none" />
        <path d="M 75 25 L 145 65 L 138 78 L 68 38 Z" fill="#94A3B8" stroke="#475569" stroke-width="1.5" />
        <path d="M 85 28 L 142 61" stroke="#E2E8F0" stroke-width="3" stroke-linecap="round" />
        <path d="M 98 42 L 128 58" fill="none" stroke="${color}" stroke-width="4" stroke-linecap="round" />
        <circle cx="118" cy="50" r="8" fill="#1E293B" />
      `;

    case 'finish_spatula': // GLATT 05: Gipsli pardoz shpaklyovka
      return `
        <rect width="176" height="106" fill="#F8FAFC" rx="4" />
        <rect x="12" y="12" width="152" height="82" rx="3" fill="#F0F9FF" />
        <path d="M 12 12 Q 90 20 120 94 L 12 94 Z" fill="#FFFFFF" />
        <polygon points="45,28 48,36 56,39 48,42 45,50 42,42 34,39 42,36" fill="${color}" />
        <polygon points="75,55 77,61 83,63 77,65 75,71 73,65 67,63 73,61" fill="${color}" />
        <path d="M 82 26 L 146 62 L 138 74 L 74 38 Z" fill="#CBD5E1" stroke="#475569" stroke-width="1.5" />
        <rect x="100" y="38" width="34" height="10" rx="3" fill="${color}" />
      `;

    case 'facade_trowel': // Cover: Fasad shpaklyovka va to'r
      return `
        <rect width="176" height="106" fill="#F8FAFC" rx="4" />
        <rect x="12" y="12" width="152" height="82" rx="3" fill="#E2E8F0" />
        <pattern id="meshNet" width="8" height="8" patternUnits="userSpaceOnUse">
          <path d="M 0 0 L 8 0 M 0 0 L 0 8" stroke="#16A34A" stroke-width="0.8" opacity="0.4" />
        </pattern>
        <rect x="25" y="20" width="126" height="66" fill="url(#meshNet)" />
        <path d="M 25 20 L 95 20 L 75 86 L 25 86 Z" fill="#FFFFFF" opacity="0.9" />
        <rect x="75" y="32" width="60" height="42" rx="3" fill="#94A3B8" stroke="#334155" stroke-width="1.5" />
        <rect x="90" y="44" width="30" height="8" rx="2" fill="${color}" />
      `;

    case 'joint_tape': // FleXon: Gipsokarton choklari va lenta
      return `
        <rect width="176" height="106" fill="#F8FAFC" rx="4" />
        <rect x="12" y="12" width="72" height="82" rx="2" fill="#FEF2F2" stroke="#E2E8F0" stroke-width="1.5" />
        <rect x="88" y="12" width="76" height="82" rx="2" fill="#FEF2F2" stroke="#E2E8F0" stroke-width="1.5" />
        <rect x="76" y="14" width="24" height="78" fill="#FDF2F8" stroke="${color}" stroke-dasharray="2 2" stroke-width="1.5" />
        <path d="M 55 42 L 105 25 L 115 35 L 65 52 Z" fill="#E2E8F0" stroke="#334155" stroke-width="1.5" />
        <rect x="80" y="22" width="22" height="8" rx="2" fill="${color}" />
      `;

    case 'hand_plaster': // DOMINANT: Universal gips suvoq
      return `
        <rect width="176" height="106" fill="#F8FAFC" rx="4" />
        <pattern id="brickPat" width="24" height="12" patternUnits="userSpaceOnUse">
          <rect width="22" height="10" fill="#FCA5A5" opacity="0.4" />
          <path d="M 0 11 L 24 11 M 23 0 L 23 12" stroke="#EF4444" stroke-width="1" opacity="0.3" />
        </pattern>
        <rect x="12" y="12" width="152" height="82" rx="3" fill="url(#brickPat)" />
        <path d="M 12 12 L 95 12 L 70 94 L 12 94 Z" fill="#FFFFFF" stroke="#E2E8F0" stroke-width="1" />
        <rect x="68" y="35" width="58" height="38" rx="2" fill="#CBD5E1" stroke="#334155" stroke-width="1.5" />
        <path d="M 85 48 L 110 48" stroke="${color}" stroke-width="5" stroke-linecap="round" />
      `;

    case 'machine_plaster': // DOMINANT-SP: Mashinada suvoq purkash
      return `
        <rect width="176" height="106" fill="#F8FAFC" rx="4" />
        <rect x="12" y="12" width="152" height="82" rx="3" fill="#F1F5F9" />
        <path d="M 15 25 Q 70 20 85 94 L 15 94 Z" fill="#FED7AA" opacity="0.6" />
        <circle cx="50" cy="45" r="4" fill="${color}" opacity="0.7" />
        <circle cx="70" cy="35" r="5" fill="${color}" opacity="0.7" />
        <circle cx="65" cy="65" r="4" fill="${color}" opacity="0.7" />
        <circle cx="40" cy="70" r="6" fill="${color}" opacity="0.7" />
        <path d="M 105 78 L 140 45 L 148 52 L 115 85 Z" fill="#334155" />
        <circle cx="102" cy="80" r="5" fill="${color}" />
        <path d="M 135 55 L 160 85" stroke="#EA580C" stroke-width="4" stroke-linecap="round" />
      `;

    case 'armor_cement': // ARMOR: Fasad sementli armirlangan suvoq
      return `
        <rect width="176" height="106" fill="#F8FAFC" rx="4" />
        <rect x="12" y="12" width="152" height="82" rx="3" fill="#CBD5E1" />
        <path d="M 12 12 L 85 12 L 65 94 L 12 94 Z" fill="#64748B" />
        <line x1="30" y1="25" x2="50" y2="45" stroke="#FFFFFF" stroke-width="1.5" />
        <line x1="45" y1="65" x2="70" y2="40" stroke="#FFFFFF" stroke-width="1.5" />
        <line x1="25" y1="75" x2="45" y2="60" stroke="#FFFFFF" stroke-width="1.5" />
        <rect x="75" y="32" width="62" height="42" rx="2" fill="#E2E8F0" stroke="#0F172A" stroke-width="2" />
        <rect x="90" y="44" width="32" height="9" rx="2" fill="#DC2626" />
      `;

    case 'waterproof_roller': // HYDRO 255: Gidroizolyatsiya roligi va suv tomchilari
      return `
        <rect width="176" height="106" fill="#F8FAFC" rx="4" />
        <rect x="12" y="12" width="152" height="82" rx="3" fill="#E2E8F0" />
        <path d="M 12 12 L 105 12 L 85 94 L 12 94 Z" fill="#0D9488" opacity="0.85" />
        <circle cx="45" cy="45" r="6" fill="#38BDF8" stroke="#FFFFFF" stroke-width="1.5" />
        <circle cx="68" cy="65" r="4.5" fill="#38BDF8" stroke="#FFFFFF" stroke-width="1.5" />
        <rect x="88" y="24" width="18" height="46" rx="3" fill="${color}" stroke="#0F766E" stroke-width="1.5" />
        <path d="M 97 70 L 97 84 L 125 84 L 125 94" fill="none" stroke="#334155" stroke-width="3" stroke-linecap="round" />
        <rect x="118" y="88" width="14" height="6" rx="2" fill="#1E293B" />
      `;

    case 'level_floor': // LEVEL: O'z-o'zidan tebranuvchi pol va kirpi rolik
    default:
      return `
        <rect width="176" height="106" fill="#F8FAFC" rx="4" />
        <rect x="12" y="55" width="152" height="39" rx="2" fill="#E2E8F0" />
        <path d="M 12 55 Q 60 48 110 52 Q 140 46 164 50 L 164 94 L 12 94 Z" fill="#EAB308" opacity="0.9" />
        <line x1="20" y1="58" x2="155" y2="58" stroke="#FFFFFF" stroke-width="2" stroke-dasharray="6 3" />
        <rect x="75" y="22" width="28" height="18" rx="2" fill="#CA8A04" stroke="#713F12" stroke-width="1.2" />
        <line x1="78" y1="18" x2="78" y2="22" stroke="#713F12" stroke-width="1.5" />
        <line x1="85" y1="18" x2="85" y2="22" stroke="#713F12" stroke-width="1.5" />
        <line x1="92" y1="18" x2="92" y2="22" stroke="#713F12" stroke-width="1.5" />
        <line x1="99" y1="18" x2="99" y2="22" stroke="#713F12" stroke-width="1.5" />
        <path d="M 89 40 L 89 65 L 120 65" fill="none" stroke="#1E293B" stroke-width="3" stroke-linecap="round" />
      `;
  }
}

// ==========================================================================
// 2. 3D IZOMETRIK VEKTOR MOCKUP GENERATORI (IMAGE MAVJUD BO'LMAGANDA)
// ==========================================================================
function get3DSvgBag(product) {
  const isUz = currentLang === 'uz';
  const ribbonColor = product.ribbonColor || '#7C3AED';
  const ribbonColorDark = product.ribbonColorDark || '#5B21B6';
  const ruSubtitle = product.ruSubtitle || 'ВЫСОКОКАЧЕСТВЕННАЯ СУХАЯ СМЕСЬ';
  const weightVal = product.defaultWeightKg || 25;

  return `
    <svg viewBox="0 0 320 440" class="w-full h-auto select-none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="bagSurface-${product.id}" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stop-color="#F1F5F9" />
          <stop offset="5%" stop-color="#FFFFFF" />
          <stop offset="92%" stop-color="#FFFFFF" />
          <stop offset="100%" stop-color="#E2E8F0" />
        </linearGradient>

        <linearGradient id="sideGusset-${product.id}" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stop-color="#CBD5E1" />
          <stop offset="70%" stop-color="#94A3B8" />
          <stop offset="100%" stop-color="#64748B" />
        </linearGradient>

        <linearGradient id="ribbonGrad-${product.id}" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="${ribbonColor}" />
          <stop offset="100%" stop-color="${ribbonColorDark}" />
        </linearGradient>

        <linearGradient id="stitchTape" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stop-color="#94A3B8" />
          <stop offset="50%" stop-color="#CBD5E1" />
          <stop offset="100%" stop-color="#94A3B8" />
        </linearGradient>

        <radialGradient id="groundShadow-${product.id}" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stop-color="rgba(15, 23, 42, 0.35)" />
          <stop offset="50%" stop-color="rgba(15, 23, 42, 0.15)" />
          <stop offset="100%" stop-color="rgba(15, 23, 42, 0)" />
        </radialGradient>
      </defs>

      <!-- 1. PASTKI REALISTIK SOYA -->
      <ellipse cx="160" cy="425" rx="130" ry="12" fill="url(#groundShadow-${product.id})" />
      <ellipse cx="160" cy="425" rx="90" ry="6" fill="rgba(15, 23, 42, 0.25)" />

      <!-- 2. QOPNING YON TOMONI (SIDE GUSSET) -->
      <polygon points="34,36 58,34 58,414 34,406" fill="url(#sideGusset-${product.id})" stroke="#64748B" stroke-width="1" />
      <polygon points="34,112 58,112 58,168 34,164" fill="${ribbonColorDark}" />
      
      <g transform="translate(48, 270) rotate(-90)">
        <text x="0" y="0" fill="#FFFFFF" font-size="8.5" font-weight="900" letter-spacing="1.5" font-family="Arial, sans-serif">
          XON SAROY  •  ${product.name.toUpperCase()}  •  ${weightVal} KG
        </text>
      </g>

      <!-- 3. QOPNING ASOSIY FRONT YUZASI -->
      <rect x="58" y="24" width="232" height="392" rx="4" fill="url(#bagSurface-${product.id})" stroke="#94A3B8" stroke-width="1.5" />

      <path d="M 64 36 L 282 36" stroke="rgba(0,0,0,0.06)" stroke-width="1.5" />
      <path d="M 58 112 Q 174 116 290 112" stroke="rgba(0,0,0,0.05)" stroke-width="1" />
      <path d="M 58 168 Q 174 172 290 168" stroke="rgba(0,0,0,0.08)" stroke-width="1.2" />
      <path d="M 62 408 L 286 408" stroke="rgba(0,0,0,0.08)" stroke-width="1.5" />

      <!-- 4. YUQORI VA PASTKI TIKUV CHOKLARI -->
      <rect x="52" y="22" width="242" height="12" rx="2" fill="url(#stitchTape)" stroke="#64748B" stroke-width="1" />
      <line x1="54" y1="28" x2="292" y2="28" stroke="#1E293B" stroke-width="2" stroke-dasharray="4 3" />
      <path d="M 292 28 Q 304 30 308 38" fill="none" stroke="#334155" stroke-width="2" stroke-linecap="round" />

      <rect x="52" y="410" width="242" height="12" rx="2" fill="url(#stitchTape)" stroke="#64748B" stroke-width="1" />
      <line x1="54" y1="416" x2="292" y2="416" stroke="#1E293B" stroke-width="2" stroke-dasharray="4 3" />

      <!-- 5. YUQORI AKSIYA BANNERI -->
      <rect x="58" y="34" width="232" height="28" fill="#0A1128" />
      <text x="174" y="46" fill="#FEF08A" font-size="6.8" font-weight="900" text-anchor="middle" font-family="Arial, sans-serif" letter-spacing="0.5">
        ★ BU SHUNCHAKI QOP EMAS — BU SOVG'ALI QOP! ★
      </text>
      <text x="174" y="56" fill="#FFFFFF" font-size="6.2" font-weight="800" text-anchor="middle" font-family="Arial, sans-serif">
        QOP ICHIDA YUTUQLI STIKER BOR • YUTUQLARNI YUTIB OLING
      </text>

      <!-- 6. BREND NOMI (XON SAROY) -->
      <g transform="translate(68, 70)">
        <circle cx="18" cy="18" r="14" fill="#C8102E" stroke="#FFFFFF" stroke-width="1.5" />
        <path d="M 17 12 A 6.5 6.5 0 1 0 21 24 A 5 5 0 1 1 17 12 Z" fill="#FFFFFF" />
        <polygon points="22,17 23,19 25,19 23.5,20.5 24,22.5 22,21.2 20,22.5 20.5,20.5 19,19 21,19" fill="#FFFFFF" transform="scale(0.85) translate(4, 2)" />
        
        <text x="40" y="19" fill="#0F172A" font-size="22" font-weight="900" font-family="Arial, sans-serif" letter-spacing="1.5">
          XON SAROY
        </text>
        <text x="40" y="31" fill="#C8102E" font-size="6.5" font-weight="800" font-family="Arial, sans-serif" letter-spacing="0.6">
          TURKEY TECHNOLOGY • O'ZBEKISTONDA ISHLAB CHIQARILGAN
        </text>
      </g>

      <!-- 7. RANGLI TASMA: MAHSULOT NOMI VA RUSCHA TAVSIFI -->
      <rect x="58" y="112" width="232" height="56" fill="url(#ribbonGrad-${product.id})" />
      
      <text x="174" y="139" fill="#FFFFFF" font-size="22" font-weight="900" text-anchor="middle" font-family="Arial, sans-serif" letter-spacing="1">
        ${product.name}
      </text>

      <text x="174" y="156" fill="#FEF08A" font-size="8.2" font-weight="800" text-anchor="middle" font-family="Arial, sans-serif" letter-spacing="0.4">
        ${ruSubtitle}
      </text>

      <!-- 8. O'RTA RASM (THUMBNAIL) -->
      <g transform="translate(86, 178)">
        <rect width="176" height="106" rx="4" fill="#FFFFFF" stroke="#CBD5E1" stroke-width="1.5" />
        ${getProcessThumbnailSvg(product.thumbnailType, ribbonColor)}
      </g>

      <!-- 9. VAZN VA TEXNIK PIKTOGRAMMALAR -->
      <g transform="translate(70, 334)">
        <rect width="66" height="36" rx="5" fill="#0F172A" stroke="#334155" stroke-width="1.5" />
        <text x="33" y="24" fill="#FFFFFF" font-size="16" font-weight="900" text-anchor="middle" font-family="Arial, sans-serif">
          ${weightVal} kg
        </text>
      </g>

      <g transform="translate(148, 334)">
        <circle cx="16" cy="18" r="14" fill="#F0F9FF" stroke="#0284C7" stroke-width="1.2" />
        <path d="M 16 9 C 16 9 10 17 10 20 A 6 6 0 0 0 22 20 C 22 17 16 9 16 9 Z" fill="#0284C7" />

        <circle cx="48" cy="18" r="14" fill="#F0FDF4" stroke="#16A34A" stroke-width="1.2" />
        <path d="M 43 23 C 43 15 54 13 54 13 C 54 13 55 22 47 24 Z" fill="#16A34A" />
        <path d="M 43 23 L 51 17" stroke="#FFFFFF" stroke-width="1.2" />

        <circle cx="80" cy="18" r="14" fill="#EFF6FF" stroke="#3B82F6" stroke-width="1.2" />
        <path d="M 80 11 L 80 25 M 73 18 L 87 18 M 75 13 L 85 23 M 75 23 L 85 13" stroke="#3B82F6" stroke-width="1.6" stroke-linecap="round" />

        <circle cx="112" cy="18" r="14" fill="#FFFBEB" stroke="#D97706" stroke-width="1.2" />
        <polygon points="112,11 119,16 117,24 107,24 105,16" fill="#D97706" />
      </g>

      <g transform="translate(70, 376)">
        <text x="0" y="0" fill="#64748B" font-size="7" font-weight="800" font-family="Arial, sans-serif">
          GOST / TSE EN • ISO 9001:2015 SERTIFIKATLANGAN
        </text>
      </g>

      <!-- 10. PASTKI AKSIYA BANNERI -->
      <rect x="58" y="384" width="232" height="26" fill="#0A1128" />
      <text x="174" y="397" fill="#FEF08A" font-size="6.5" font-weight="900" text-anchor="middle" font-family="Arial, sans-serif">
        BU SHUNCHAKI QOP EMAS — BU SOVG'ALI QOP! • STIKERNI TOPING
      </text>
      <text x="174" y="405" fill="#CBD5E1" font-size="5.8" font-weight="700" text-anchor="middle" font-family="Arial, sans-serif">
        SOVG'ALAR: AVTOMOBIL, MAISHIY TEXNIKA VA PUL MUKOFOTLARI
      </text>
    </svg>
  `;
}

// ==========================================================================
// 3. 3D QOP VIZUAL GENERATORI (IMAGE MAVJUD BO'LSA 3D RASM, BO'LMASA 3D VEKTOR)
// ==========================================================================
function getProductBagSvg(product) {
  if (product.image) {
    return `
      <div class="relative w-full flex items-center justify-center py-1 select-none">
        <img src="${product.image}" 
             alt="${product.name}" 
             class="w-full h-auto max-h-[310px] object-contain drop-shadow-2xl transition-transform duration-300 pointer-events-none" 
             loading="lazy" />
      </div>
    `;
  }
  return get3DSvgBag(product);
}

// ==========================================================================
// 4. TILLARNI ALMASHTIRISH (UZ / RU)
// ==========================================================================
function setLanguage(lang) {
  if (!TRANSLATIONS[lang]) return;
  currentLang = lang;
  localStorage.setItem('xon_lang', lang);

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (TRANSLATIONS[lang][key]) {
      el.textContent = TRANSLATIONS[lang][key];
    }
  });

  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    if (TRANSLATIONS[lang][key]) {
      el.setAttribute('placeholder', TRANSLATIONS[lang][key]);
    }
  });

  const btnUz = document.getElementById('langUzBtn');
  const btnRu = document.getElementById('langRuBtn');
  if (btnUz && btnRu) {
    if (lang === 'uz') {
      btnUz.className = "px-3 py-1 text-xs font-bold rounded bg-red-600 text-white shadow-sm transition";
      btnRu.className = "px-3 py-1 text-xs font-bold rounded text-slate-600 hover:text-slate-900 transition";
    } else {
      btnRu.className = "px-3 py-1 text-xs font-bold rounded bg-red-600 text-white shadow-sm transition";
      btnUz.className = "px-3 py-1 text-xs font-bold rounded text-slate-600 hover:text-slate-900 transition";
    }
  }

  renderProducts();
  populateCalculatorProducts();
  calculateConsumption();

  if (currentModalProductId) {
    openProductModal(currentModalProductId);
  }
}

// ==========================================================================
// 5. MAHSULOTLAR KATALOGINI RENDER QILISH VA FILTRLASH
// ==========================================================================
function renderProducts() {
  const container = document.getElementById('productsGrid');
  if (!container) return;

  const t = TRANSLATIONS[currentLang];
  const filtered = PRODUCTS_DATA.filter(item => {
    if (currentCategory === 'all') return true;
    return item.category === currentCategory;
  });

  if (filtered.length === 0) {
    container.innerHTML = `
      <div class="col-span-full text-center py-12 text-slate-500">
        <p class="text-lg font-semibold">${currentLang === 'uz' ? "Ushbu toifada mahsulot topilmadi" : "В данной категории товары не найдены"}</p>
      </div>
    `;
    return;
  }

  container.innerHTML = filtered.map(product => {
    const isUz = currentLang === 'uz';
    const title = isUz ? product.title.uz : product.title.ru;
    const desc = isUz ? product.shortDesc.uz : product.shortDesc.ru;
    const water = isUz ? product.specs.waterRatio.uz : product.specs.waterRatio.ru;
    const consumption = isUz ? product.specs.consumption.uz : product.specs.consumption.ru;
    const drying = isUz ? product.specs.dryingTime.uz : product.specs.dryingTime.ru;

    const ind = product.categoryIndicator;
    const indLabel = isUz ? ind.labelUz : ind.labelRu;

    return `
      <div class="bag-card bg-white rounded-2xl border border-slate-200 overflow-hidden flex flex-col justify-between group ${product.glowClass}">
        <!-- Yuqori qism: Vizual va FRONT Mockup Qop -->
        <div class="relative p-5 pb-2 bg-gradient-to-b from-slate-50 to-white flex flex-col items-center min-h-[330px] justify-center">
          
          <!-- Rangli Kategoriya Tegi -->
          <div class="absolute top-4 left-4 z-10">
            <span class="px-2.5 py-1 rounded-md text-[11px] font-black uppercase tracking-wider shadow-sm" style="background-color: ${ind.bgColor}; color: ${ind.color}; border: 1px solid ${ind.borderColor}">
              ${indLabel}
            </span>
          </div>

          <!-- Qop vazni -->
          <div class="absolute top-4 right-4 z-10">
            <span class="px-2.5 py-1 rounded-md text-xs font-extrabold bg-slate-900 text-white shadow-sm">
              ${product.weight}
            </span>
          </div>

          <!-- XON SAROY 3D Mockup Qopi (Hoverda 3D ko'tarilish va nur bilan) -->
          <div class="cursor-pointer my-2 w-full max-w-[230px] bag-2d-container" onclick="openProductModal('${product.id}')">
            ${getProductBagSvg(product)}
          </div>
        </div>

        <!-- O'rta qism: Matn va texnik parametrlar -->
        <div class="p-6 pt-2 flex-1 flex flex-col justify-between">
          <div>
            <div class="flex items-center gap-2 mb-1">
              <span class="w-2.5 h-2.5 rounded-full" style="background-color: ${product.ribbonColor}"></span>
              <span class="text-[11px] font-extrabold uppercase tracking-wider" style="color: ${product.ribbonColor}">
                ${product.ruSubtitle}
              </span>
            </div>
            <h3 class="text-lg font-black text-slate-900 group-hover:text-red-600 transition-colors leading-snug cursor-pointer" onclick="openProductModal('${product.id}')">
              ${title}
            </h3>
            <p class="text-xs text-slate-600 mt-2 line-clamp-2 leading-relaxed">
              ${desc}
            </p>
          </div>

          <!-- Asosiy parametrlar bloki -->
          <div class="mt-4 pt-3 border-t border-slate-100 space-y-1.5 text-xs text-slate-700 bg-slate-50/80 p-3 rounded-xl">
            <div class="flex justify-between items-center">
              <span class="text-slate-500 font-medium">${t.cardWater}:</span>
              <span class="font-bold text-slate-900">${water}</span>
            </div>
            <div class="flex justify-between items-center">
              <span class="text-slate-500 font-medium">${t.cardConsumption}:</span>
              <span class="font-bold text-slate-900">${consumption}</span>
            </div>
            <div class="flex justify-between items-center">
              <span class="text-slate-500 font-medium">${t.cardDrying}:</span>
              <span class="font-bold text-slate-900">${drying}</span>
            </div>
          </div>

          <!-- Tugmalar -->
          <div class="mt-5 grid grid-cols-2 gap-2">
            <button onclick="openProductModal('${product.id}')" class="w-full py-2.5 px-3 rounded-xl border border-slate-300 hover:border-slate-800 text-slate-800 text-xs font-bold transition flex items-center justify-center gap-1">
              <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
              ${t.cardDetailsBtn.split(' ')[0]}
            </button>
            <button onclick="triggerOrderForProduct('${product.id}')" class="w-full py-2.5 px-3 rounded-xl bg-red-600 hover:bg-red-700 text-white text-xs font-bold shadow-md shadow-red-600/20 transition flex items-center justify-center gap-1">
              <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"></path></svg>
              ${t.cardOrderBtn}
            </button>
          </div>
        </div>
      </div>
    `;
  }).join('');
}

// Kategoriya bo'yicha filtrlash
function filterCategory(cat, element) {
  currentCategory = cat;
  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.classList.remove('active');
  });
  if (element) {
    element.classList.add('active');
  }
  renderProducts();
}

// ==========================================================================
// 6. MAHSULOTNING INTERAKTIV MODAL OYNASI (PASPORT VA SPETSIFIKATSIYA)
// ==========================================================================
function openProductModal(productId) {
  const product = PRODUCTS_DATA.find(p => p.id === productId);
  if (!product) return;
  currentModalProductId = productId;

  const t = TRANSLATIONS[currentLang];
  const isUz = currentLang === 'uz';
  const modal = document.getElementById('productModal');
  const modalContent = document.getElementById('productModalContent');
  if (!modal || !modalContent) return;

  const title = isUz ? product.title.uz : product.title.ru;
  const fullDesc = isUz ? product.fullDesc.uz : product.fullDesc.ru;
  const application = isUz ? product.application.uz : product.application.ru;

  modalContent.innerHTML = `
    <!-- Modal Sarlavha qismi -->
    <div class="p-6 md:p-8 bg-slate-900 text-white relative">
      <div class="flex items-center justify-between gap-4">
        <div class="flex items-center gap-2">
          <span class="px-3 py-1 rounded text-white text-xs font-bold uppercase tracking-wider" style="background-color: ${product.ribbonColor}">
            ${product.ruSubtitle}
          </span>
          <span class="px-3 py-1 rounded bg-slate-800 text-amber-300 text-xs font-extrabold border border-amber-500/30">
            ${product.weight}
          </span>
        </div>
        <button onclick="closeProductModal()" class="text-slate-400 hover:text-white transition p-1 rounded-lg hover:bg-slate-800 no-print">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>
        </button>
      </div>

      <div class="flex items-center gap-3.5 mt-3">
        <img src="assets/images/logo.jpg" alt="XON SAROY" class="w-12 h-12 rounded-xl object-cover border border-amber-400/60 shadow-md flex-shrink-0">
        <div>
          <h2 class="text-xl md:text-2xl font-black text-white leading-tight">
            ${title}
          </h2>
          <p class="text-slate-300 text-xs mt-0.5">
            ${t.brandSubtitle} • Standart: ${product.specs.standard}
          </p>
        </div>
      </div>
    </div>

    <!-- Modal Ichki qismi: 2 ustunli (Rasm + Xususiyatlar) -->
    <div class="p-6 md:p-8 grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
      <!-- Chap ustun: FRONT 3D Qop rasmi va Tugmalar -->
      <div class="md:col-span-5 flex flex-col items-center">
        <div class="w-full max-w-[270px] bg-slate-50 p-4 rounded-2xl border border-slate-200 bag-2d-container">
          ${getProductBagSvg(product)}
        </div>

        <div class="w-full mt-6 space-y-3 no-print">
          <button onclick="triggerOrderForProduct('${product.id}')" class="w-full py-3.5 px-4 rounded-xl bg-red-600 hover:bg-red-700 text-white font-extrabold shadow-lg shadow-red-600/30 transition flex items-center justify-center gap-2">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"></path></svg>
            ${t.btnOrderThis}
          </button>
          
          <button onclick="window.print()" class="w-full py-3 px-4 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold transition flex items-center justify-center gap-2 border border-slate-300">
            <svg class="w-5 h-5 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z"></path></svg>
            ${t.btnDownloadPdf}
          </button>
        </div>
      </div>

      <!-- O'ng ustun: Tavsif va Texnik Parametrlar Jadvali -->
      <div class="md:col-span-7 space-y-6">
        <div>
          <h4 class="text-sm font-bold uppercase tracking-wider text-red-600">
            ${t.modalUsageTitle}
          </h4>
          <p class="text-sm text-slate-700 mt-2 leading-relaxed font-normal">
            ${fullDesc}
          </p>
        </div>

        <div>
          <h4 class="text-sm font-bold uppercase tracking-wider text-slate-900">
            ${t.modalAreaTitle}
          </h4>
          <p class="text-xs text-slate-600 mt-1.5 p-3 rounded-lg bg-slate-50 border border-slate-200">
            ${application}
          </p>
        </div>

        <!-- Texnik parametrlar jadvali -->
        <div>
          <h4 class="text-sm font-black uppercase tracking-wider text-slate-900 mb-3 flex items-center gap-2">
            <svg class="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
            ${t.modalSpecsTitle}
          </h4>

          <div class="overflow-hidden border border-slate-200 rounded-xl shadow-sm">
            <table class="w-full text-left text-xs text-slate-700">
              <tbody class="divide-y divide-slate-200">
                <tr class="tech-spec-row">
                  <td class="p-3 font-semibold text-slate-600 w-1/2">${t.specWater}</td>
                  <td class="p-3 font-bold text-slate-900">${isUz ? product.specs.waterRatio.uz : product.specs.waterRatio.ru}</td>
                </tr>
                <tr class="tech-spec-row">
                  <td class="p-3 font-semibold text-slate-600">${t.specConsumption}</td>
                  <td class="p-3 font-bold text-slate-900">${isUz ? product.specs.consumption.uz : product.specs.consumption.ru}</td>
                </tr>
                <tr class="tech-spec-row">
                  <td class="p-3 font-semibold text-slate-600">${t.specDrying}</td>
                  <td class="p-3 font-bold text-slate-900">${isUz ? product.specs.dryingTime.uz : product.specs.dryingTime.ru}</td>
                </tr>
                <tr class="tech-spec-row">
                  <td class="p-3 font-semibold text-slate-600">${t.specLayer}</td>
                  <td class="p-3 font-bold text-slate-900">${isUz ? product.specs.layerThickness.uz : product.specs.layerThickness.ru}</td>
                </tr>
                <tr class="tech-spec-row">
                  <td class="p-3 font-semibold text-slate-600">${t.specTemp}</td>
                  <td class="p-3 font-bold text-slate-900">${product.specs.workTemp}</td>
                </tr>
                <tr class="tech-spec-row">
                  <td class="p-3 font-semibold text-slate-600">${t.specShelf}</td>
                  <td class="p-3 font-bold text-slate-900">${isUz ? product.specs.shelfLife.uz : product.specs.shelfLife.ru}</td>
                </tr>
                <tr class="tech-spec-row">
                  <td class="p-3 font-semibold text-slate-600">${t.specStandard}</td>
                  <td class="p-3 font-bold text-slate-900">${product.specs.standard}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  `;

  modal.classList.remove('hidden');
  document.body.style.overflow = 'hidden';
}

function closeProductModal() {
  const modal = document.getElementById('productModal');
  if (modal) {
    modal.classList.add('hidden');
    document.body.style.overflow = '';
  }
  currentModalProductId = null;
}

// ==========================================================================
// 7. USTALAR UCHUN QURUQ QORISHMA SARFI KALKULYATORI
// ==========================================================================
function populateCalculatorProducts() {
  const select = document.getElementById('calcProductSelect');
  if (!select) return;

  const isUz = currentLang === 'uz';
  select.innerHTML = PRODUCTS_DATA.map(p => {
    const title = isUz ? p.title.uz : p.title.ru;
    return `<option value="${p.id}" data-weight="${p.defaultWeightKg}">${title} (${p.defaultWeightKg} kg)</option>`;
  }).join('');
}

function calculateConsumption() {
  const select = document.getElementById('calcProductSelect');
  const areaInput = document.getElementById('calcArea');
  const thicknessInput = document.getElementById('calcThickness');
  const resultKgEl = document.getElementById('calcResultKg');
  const resultBagsEl = document.getElementById('calcResultBags');

  if (!select || !areaInput || !thicknessInput || !resultKgEl || !resultBagsEl) return;

  const area = parseFloat(areaInput.value) || 0;
  const thickness = parseFloat(thicknessInput.value) || 1;
  const productId = select.value;
  const product = PRODUCTS_DATA.find(p => p.id === productId);

  if (!product || area <= 0) {
    resultKgEl.textContent = "0 kg";
    resultBagsEl.textContent = "0 " + (currentLang === 'uz' ? "qop" : "мешков");
    return;
  }

  let ratePerMm = 1.0;
  if (product.category === 'plaster') {
    ratePerMm = 0.9;
  } else if (product.id === 'armor-facade') {
    ratePerMm = 1.6;
  } else if (product.category === 'adhesive') {
    ratePerMm = 0.8;
  } else if (product.category === 'floor') {
    ratePerMm = 1.6;
  } else if (product.category === 'hydro') {
    ratePerMm = 1.5;
  }

  const totalKg = Math.ceil(area * thickness * ratePerMm * 1.05);
  const bagWeight = product.defaultWeightKg || 25;
  const totalBags = Math.ceil(totalKg / bagWeight);

  resultKgEl.textContent = `${totalKg} kg`;
  resultBagsEl.textContent = `${totalBags} ${currentLang === 'uz' ? "qop" : "мешков"}`;
}

function handleCalcOrder() {
  const select = document.getElementById('calcProductSelect');
  const resultBagsEl = document.getElementById('calcResultBags');
  const areaInput = document.getElementById('calcArea');
  const thicknessInput = document.getElementById('calcThickness');

  const product = PRODUCTS_DATA.find(p => p.id === select.value);
  const bags = resultBagsEl.textContent;
  const area = areaInput.value;
  const thickness = thicknessInput.value;

  openOrderModal(product ? product.id : null, `${bags} (${area} m², ${thickness} mm)`);
}

// ==========================================================================
// 8. BUYURTMA MODALI VA TELEGRAM BOT INTEGRATSIYASI
// ==========================================================================
function openOrderModal(preselectedProductId = null, prefilledQuantity = "") {
  closeProductModal();
  const modal = document.getElementById('orderModal');
  const select = document.getElementById('orderProductSelect');
  const quantityInput = document.getElementById('orderQuantity');
  
  if (select) {
    const isUz = currentLang === 'uz';
    const generalOption = `<option value="general">${TRANSLATIONS[currentLang].formProductGeneral}</option>`;
    const productOptions = PRODUCTS_DATA.map(p => {
      const title = isUz ? p.title.uz : p.title.ru;
      const selected = p.id === preselectedProductId ? 'selected' : '';
      return `<option value="${p.id}" ${selected}>${title}</option>`;
    }).join('');
    select.innerHTML = generalOption + productOptions;
    
    if (preselectedProductId) {
      select.value = preselectedProductId;
    }
  }

  if (quantityInput && prefilledQuantity) {
    quantityInput.value = prefilledQuantity;
  }

  if (modal) {
    modal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
  }
}

function closeOrderModal() {
  const modal = document.getElementById('orderModal');
  if (modal) {
    modal.classList.add('hidden');
    document.body.style.overflow = '';
  }
}

function triggerOrderForProduct(productId) {
  openOrderModal(productId);
}

async function handleOrderFormSubmit(e) {
  e.preventDefault();

  const form = document.getElementById('leadOrderForm');
  const submitBtn = document.getElementById('orderSubmitBtn');
  const successModal = document.getElementById('orderSuccessModal');

  const name = document.getElementById('orderName').value.trim();
  const phone = document.getElementById('orderPhone').value.trim();
  const productSelect = document.getElementById('orderProductSelect');
  const productTitle = productSelect ? productSelect.options[productSelect.selectedIndex].text : "Konsultatsiya";
  const quantity = document.getElementById('orderQuantity').value.trim();
  const note = document.getElementById('orderNote').value.trim();

  if (!name || !phone) {
    alert(currentLang === 'uz' ? "Iltimos, ismingiz va telefon raqamingizni kiriting!" : "Пожалуйста, введите имя и номер телефона!");
    return;
  }

  const originalBtnText = submitBtn.innerHTML;
  submitBtn.disabled = true;
  submitBtn.innerHTML = `
    <svg class="animate-spin -ml-1 mr-2 h-4 w-4 text-white inline-block" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
      <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
      <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z"></path>
    </svg>
    ${TRANSLATIONS[currentLang].formSubmitting}
  `;

  const timeNow = new Date().toLocaleString();
  const telegramMessage = `
🏢 <b>YANGI ARIZA: XON SAROY SAYTI</b>
━━━━━━━━━━━━━━━━━━
👤 <b>Mijoz:</b> ${name}
📞 <b>Telefon:</b> <code>${phone}</code>
📦 <b>Mahsulot:</b> ${productTitle}
🔢 <b>Miqdor:</b> ${quantity || 'Belgilanmagan'}
📍 <b>Manzil / Izoh:</b> ${note || 'Yo\'q'}
⏰ <b>Vaqt:</b> ${timeNow}
🌐 <b>Til:</b> ${currentLang.toUpperCase()}
  `.trim();

  const token = TELEGRAM_CONFIG.botToken;
  const chatId = TELEGRAM_CONFIG.chatId;

  if (token && !token.includes('Example') && chatId && !chatId.includes('1234567890')) {
    try {
      await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          chat_id: chatId,
          text: telegramMessage,
          parse_mode: 'HTML'
        })
      });
    } catch (err) {
      console.warn("Telegram API orqali yuborishda xatolik:", err);
    }
  } else {
    console.log("XON SAROY Telegram Form Xabari:", telegramMessage);
    const existingLeads = JSON.parse(localStorage.getItem('xon_leads') || '[]');
    existingLeads.push({ name, phone, productTitle, quantity, note, time: timeNow });
    localStorage.setItem('xon_leads', JSON.stringify(existingLeads));
  }

  submitBtn.disabled = false;
  submitBtn.innerHTML = originalBtnText;

  closeOrderModal();
  form.reset();

  if (successModal) {
    successModal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
  }
}

function closeSuccessModal() {
  const modal = document.getElementById('orderSuccessModal');
  if (modal) {
    modal.classList.add('hidden');
    document.body.style.overflow = '';
  }
}

function openTelegramSettingsModal() {
  const modal = document.getElementById('telegramSettingsModal');
  if (modal) {
    document.getElementById('inputBotToken').value = TELEGRAM_CONFIG.botToken;
    document.getElementById('inputChatId').value = TELEGRAM_CONFIG.chatId;
    modal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
  }
}

function closeTelegramSettingsModal() {
  const modal = document.getElementById('telegramSettingsModal');
  if (modal) {
    modal.classList.add('hidden');
    document.body.style.overflow = '';
  }
}

function saveTelegramSettings() {
  const token = document.getElementById('inputBotToken').value.trim();
  const chat = document.getElementById('inputChatId').value.trim();

  TELEGRAM_CONFIG.botToken = token;
  TELEGRAM_CONFIG.chatId = chat;
  localStorage.setItem('xon_bot_token', token);
  localStorage.setItem('xon_chat_id', chat);

  alert(currentLang === 'uz' ? "Telegram Bot sozlamalari muvaffaqiyatli saqlandi!" : "Настройки Telegram бота успешно сохранены!");
  closeTelegramSettingsModal();
}

function openBonusModal() {
  const modal = document.getElementById('bonusModal');
  if (modal) {
    modal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
  }
}

function closeBonusModal() {
  const modal = document.getElementById('bonusModal');
  if (modal) {
    modal.classList.add('hidden');
    document.body.style.overflow = '';
  }
}

// ==========================================================================
// 9. DASTUR YUKLANGANDA ISHGA TUSHISH (INIT)
// ==========================================================================
document.addEventListener('DOMContentLoaded', () => {
  setLanguage(currentLang);

  const heroBagContainer = document.getElementById('heroFeaturedBag');
  if (heroBagContainer && PRODUCTS_DATA[0]) {
    heroBagContainer.innerHTML = `
      <div class="bag-2d-container w-72">
        ${getProductBagSvg(PRODUCTS_DATA[0])}
      </div>
    `;
  }

  const areaInput = document.getElementById('calcArea');
  const thicknessInput = document.getElementById('calcThickness');
  const selectProduct = document.getElementById('calcProductSelect');

  if (areaInput) areaInput.addEventListener('input', calculateConsumption);
  if (thicknessInput) thicknessInput.addEventListener('input', calculateConsumption);
  if (selectProduct) selectProduct.addEventListener('change', calculateConsumption);

  const orderForm = document.getElementById('leadOrderForm');
  if (orderForm) {
    orderForm.addEventListener('submit', handleOrderFormSubmit);
  }

  const mobileMenuBtn = document.getElementById('mobileMenuBtn');
  const mobileMenu = document.getElementById('mobileMenu');
  if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden');
    });
  }

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeProductModal();
      closeOrderModal();
      closeSuccessModal();
      closeBonusModal();
      closeTelegramSettingsModal();
    }
  });
});
