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
             class="w-full h-auto max-h-[350px] object-contain drop-shadow-xl transition-transform duration-300 pointer-events-none" 
             style="image-rendering: -webkit-optimize-contrast; image-rendering: high-quality; transform: translateZ(0);"
             loading="lazy" />
      </div>
    `;
  }
  return get3DSvgBag(product);
}

// ==========================================================================
// 4. TILLARNI ALMASHTIRISH (UZ / RU / EN)
// ==========================================================================
function setLanguage(lang) {
  if (!TRANSLATIONS[lang]) return;
  currentLang = lang;
  localStorage.setItem('xon_lang', lang);

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (TRANSLATIONS[lang] && TRANSLATIONS[lang][key]) {
      el.textContent = TRANSLATIONS[lang][key];
    }
  });

  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    if (TRANSLATIONS[lang] && TRANSLATIONS[lang][key]) {
      el.setAttribute('placeholder', TRANSLATIONS[lang][key]);
    }
  });

  // Til tugmalarini faollashtirish (UZ, RU, EN)
  ['UZ', 'RU', 'EN'].forEach(code => {
    const btn = document.getElementById(`lang${code}`);
    if (btn) {
      if (code.toLowerCase() === lang.toLowerCase()) {
        btn.className = "text-amber-300 font-black underline decoration-2 underline-offset-4 transition";
      } else {
        btn.className = "text-white/75 hover:text-white transition";
      }
    }
  });

  renderProducts();

  if (typeof populateCalculatorProducts === 'function' && document.getElementById('calcProductSelect')) {
    populateCalculatorProducts();
    calculateConsumption();
  }

  if (currentModalProductId) {
    openProductModal(currentModalProductId);
  }
}

let currentSearchQuery = '';

// ==========================================================================
// 5. MAHSULOTLAR KATALOGINI RENDER QILISH VA FILTRLASH (YANGI DIZAYN)
// ==========================================================================
let currentCatalogFilter = 'barchasi';

function filterCatalog(category, btnElement) {
  currentCatalogFilter = category;

  // Filtr pilllarini faollashtirish
  const container = document.getElementById('catalogFilterPills');
  if (container) {
    container.querySelectorAll('.catalog-filter-pill').forEach(btn => {
      btn.classList.remove('active');
    });
  }
  if (btnElement) {
    btnElement.classList.add('active');
  }

  // Agar batafsil oyna ochiq bo'lsa, uni yopib ro'yxatga qaytamiz
  closeProductDetailView();

  renderProducts();
}

function renderProducts() {
  const container = document.getElementById('productsGrid');
  if (!container) return;

  const filtered = PRODUCTS_DATA.filter(item => {
    if (currentCatalogFilter === 'barchasi' || currentCatalogFilter === 'all') return true;
    return item.category === currentCatalogFilter;
  });

  if (filtered.length === 0) {
    container.innerHTML = `
      <div class="col-span-full text-center py-16 text-slate-500">
        <span class="text-4xl block mb-3">🔍</span>
        <p class="text-lg font-bold">Ushbu toifada mahsulot topilmadi</p>
        <p class="text-xs text-slate-400 mt-1">Boshqa toifani tanlang yoki "Barchasi" tugmasini bosing</p>
      </div>
    `;
    return;
  }

  container.innerHTML = filtered.map(product => {
    return createProductCardHtml(product);
  }).join('');
}

function createProductCardHtml(product) {
  const isArmor = product.id === 'armor';
  const arrowBtnBg = isArmor 
    ? 'bg-[#525B62] text-white hover:bg-black' 
    : 'bg-white border border-gray-300 text-gray-700 hover:bg-black hover:text-white hover:border-black';

  return `
    <div class="product-studio-card bg-white dark:bg-[#0A4B8F] border border-gray-200 dark:border-white/10 flex flex-col group cursor-pointer overflow-hidden transition-all duration-300" 
         onclick="openProductDetailView('${product.id}')">
      
      <!-- Yuqori rangli tasma -->
      <div class="h-1.5 w-full" style="background-color: ${product.themeColor};"></div>

      <!-- Studio Kulrang Rasm Qutisi -->
      <div class="product-studio-box relative h-72 sm:h-80 flex items-center justify-center p-4 overflow-hidden select-none">
        
        <!-- Chap yuqori burchakdagi vazn nishoni -->
        <div class="absolute top-3 left-3 z-10">
          <span class="px-2.5 py-0.5 text-xs font-bold text-white tracking-wider rounded-sm shadow-sm" style="background-color: ${product.themeColor};">
            ${product.weight}
          </span>
        </div>

        <!-- 3D Qop tasviri -->
        <img src="${product.image}" 
             alt="${product.name}" 
             class="h-56 sm:h-64 object-contain filter drop-shadow-[0_18px_24px_rgba(0,0,0,0.35)] group-hover:scale-105 transition-transform duration-300 pointer-events-none" 
             loading="lazy" />
      </div>

      <!-- Pastki Oq Qism -->
      <div class="product-card-body p-5 bg-white dark:bg-[#0A4B8F] flex items-center justify-between gap-3">
        <div class="flex-1 min-w-0">
          <h3 class="font-extrabold text-lg sm:text-xl text-slate-900 dark:text-white tracking-tight group-hover:text-red-600 dark:group-hover:text-amber-300 transition-colors truncate">
            ${product.name}
          </h3>
          <p class="text-xs text-slate-500 dark:text-slate-300 mt-1 line-clamp-2 leading-snug">
            ${product.subtitle}
          </p>
        </div>

        <!-- Ochish dumaloq tugmasi (↗) -->
        <button onclick="event.stopPropagation(); openProductDetailView('${product.id}');" 
                class="w-10 h-10 rounded-full flex items-center justify-center transition-colors flex-shrink-0 ${arrowBtnBg}" 
                aria-label="${product.name} tafsilotlari">
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.2" d="M7 17L17 7M17 7H7M17 7V17"/>
          </svg>
        </button>
      </div>

    </div>
  `;
}

// BATAFSIL MAHSULOT OYNASINI OCHISH (2, 3, 4-RASMLARDAGI DIZAYN)
function openProductDetailView(productId) {
  const product = PRODUCTS_DATA.find(p => p.id === productId || p.legacyId === productId);
  if (!product) return;

  // Agar hozir katalog sahifasida bo'lmasa, katalogga o'tamiz
  if (typeof window.showPageView === 'function') {
    window.showPageView('catalog', false);
  }

  const imgEl = document.getElementById('detailProductImage');
  const badgeEl = document.getElementById('detailProductCategoryBadge');
  const nameEl = document.getElementById('detailProductName');
  const subtitleEl = document.getElementById('detailProductSubtitle');
  const descEl = document.getElementById('detailProductDesc');
  const featuresEl = document.getElementById('detailProductFeatures');
  const specsTableEl = document.getElementById('detailProductSpecsTable');
  const similarGridEl = document.getElementById('similarProductsGrid');

  if (imgEl) {
    imgEl.src = product.image;
    imgEl.alt = product.name;
  }
  if (badgeEl) {
    badgeEl.textContent = product.categoryLabel;
    badgeEl.style.backgroundColor = product.themeColor;
  }
  if (nameEl) {
    nameEl.textContent = product.name;
  }
  if (subtitleEl) {
    subtitleEl.textContent = product.subtitle;
  }
  if (descEl) {
    descEl.textContent = product.desc;
  }

  // Afzalliklar (Qizil doira ichida oq galochka)
  if (featuresEl) {
    featuresEl.innerHTML = (product.features || []).map(feat => `
      <div class="flex items-center gap-3">
        <span class="w-6 h-6 rounded-full bg-[#E02424] text-white flex items-center justify-center flex-shrink-0 shadow-sm">
          <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7"/>
          </svg>
        </span>
        <span class="text-sm sm:text-base font-semibold text-slate-800 dark:text-slate-200">${feat}</span>
      </div>
    `).join('');
  }

  // Chiziqli parametrlar jadvali
  if (specsTableEl) {
    specsTableEl.innerHTML = `
      <div class="py-3.5 flex justify-between items-center text-sm sm:text-base">
        <span class="text-slate-500 dark:text-slate-400">Turi</span>
        <span class="font-medium text-slate-900 dark:text-white text-right">${product.specs.type || product.subtitle}</span>
      </div>
      <div class="py-3.5 flex justify-between items-center text-sm sm:text-base">
        <span class="text-slate-500 dark:text-slate-400">Kategoriya</span>
        <span class="font-medium text-slate-900 dark:text-white text-right">${product.specs.category || product.categoryLabel}</span>
      </div>
      <div class="py-3.5 flex justify-between items-center text-sm sm:text-base">
        <span class="text-slate-500 dark:text-slate-400">Qo'llanilishi</span>
        <span class="font-medium text-slate-900 dark:text-white text-right">${product.specs.application || "Ichki va tashqi ishlar"}</span>
      </div>
      <div class="py-3.5 flex justify-between items-center text-sm sm:text-base">
        <span class="text-slate-500 dark:text-slate-400">Qop og'irligi</span>
        <span class="font-medium text-slate-900 dark:text-white text-right">${product.specs.weight || product.weight}</span>
      </div>
    `;
  }

  // O'xshash mahsulotlar (shu toifadagi boshqa mahsulotlar)
  if (similarGridEl) {
    const similarProducts = PRODUCTS_DATA
      .filter(p => p.id !== product.id)
      .sort((a, b) => (a.category === product.category ? -1 : 1))
      .slice(0, 4);

    similarGridEl.innerHTML = similarProducts.map(p => createProductCardHtml(p)).join('');
  }

  // Oynalarni almashtirish
  const gridView = document.getElementById('catalogGridView');
  const detailView = document.getElementById('catalogDetailView');
  if (gridView) gridView.classList.add('hidden');
  if (detailView) detailView.classList.remove('hidden');

  // Katalog boshiga chiqarish
  const catalogSection = document.getElementById('catalog');
  if (catalogSection) {
    catalogSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
  } else {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}

function closeProductDetailView() {
  const gridView = document.getElementById('catalogGridView');
  const detailView = document.getElementById('catalogDetailView');
  if (detailView) detailView.classList.add('hidden');
  if (gridView) gridView.classList.remove('hidden');

  const catalogSection = document.getElementById('catalog');
  if (catalogSection) {
    catalogSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}

window.filterCatalog = filterCatalog;
window.openProductDetailView = openProductDetailView;
window.closeProductDetailView = closeProductDetailView;

// Orqaga moslik uchun eski funksiyalar
function slideProducts(dir) {}
function updateSliderState() {}
function filterCategory(cat, element) { filterCatalog(cat === 'all' ? 'barchasi' : cat, element); }
function handleCatalogSearch(val) {}
function filterCategoryAndScroll(cat) { filterCatalog(cat === 'all' ? 'barchasi' : cat); }


// ==========================================================================
// 6. MAHSULOTNING INTERAKTIV MODAL OYNASI (PASPORT VA SPETSIFIKATSIYA)
// ==========================================================================
function openProductModal(productId) {
  openProductDetailView(productId);
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
  const estWater = Math.ceil(totalKg * 0.25);

  resultKgEl.textContent = `${totalKg} kg`;
  resultBagsEl.textContent = `${totalBags} ${currentLang === 'uz' ? "qop" : "мешков"}`;

  const resultWaterEl = document.getElementById('calcResultWater');
  if (resultWaterEl) {
    resultWaterEl.textContent = `~${estWater} L`;
  }
}

function setCalcPreset(area, thickness) {
  const areaInput = document.getElementById('calcArea');
  const thicknessInput = document.getElementById('calcThickness');
  if (areaInput) areaInput.value = area;
  if (thicknessInput) thicknessInput.value = thickness;
  calculateConsumption();
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
  closeProductModal();
  const product = PRODUCTS_DATA.find(p => p.id === productId);
  const commentField = document.getElementById('orderClientComment');
  const nameField = document.getElementById('orderClientName');
  if (commentField && product) {
    const isUz = currentLang === 'uz';
    const isRu = currentLang === 'ru';
    const title = isUz ? product.title.uz : (isRu ? product.title.ru : product.name);
    commentField.value = isUz 
      ? `${title} (${product.weight}) mahsuloti bo'yicha buyurtma bermoqchiman.` 
      : (isRu ? `Хочу заказать ${title} (${product.weight}).` : `I would like to order ${title} (${product.weight}).`);
  }
  if (typeof window.showPageView === 'function') {
    window.showPageView('contact');
  }
  if (nameField) {
    setTimeout(() => nameField.focus(), 300);
  }
}

async function handleOrderFormSubmit(e) {
  e.preventDefault();

  const form = document.getElementById('leadOrderForm');
  const submitBtn = document.getElementById('orderSubmitBtn');
  const successModal = document.getElementById('successModal') || document.getElementById('orderSuccessModal');

  const nameInput = document.getElementById('orderClientName') || document.getElementById('orderName');
  const phoneInput = document.getElementById('orderClientPhone') || document.getElementById('orderPhone');
  const commentInput = document.getElementById('orderClientComment') || document.getElementById('orderNote');

  const name = nameInput ? nameInput.value.trim() : '';
  const phone = phoneInput ? phoneInput.value.trim() : '';
  const comment = commentInput ? commentInput.value.trim() : '';

  if (!name || !phone) {
    alert(currentLang === 'uz' ? "Iltimos, ismingiz va telefon raqamingizni kiriting!" : (currentLang === 'ru' ? "Пожалуйста, введите имя и номер телефона!" : "Please enter your name and phone number!"));
    return;
  }

  const originalBtnText = submitBtn ? submitBtn.innerHTML : '';
  if (submitBtn) {
    submitBtn.disabled = true;
    submitBtn.innerHTML = `
      <svg class="animate-spin -ml-1 mr-2 h-4 w-4 text-white inline-block" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
        <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
        <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z"></path>
      </svg>
      ${TRANSLATIONS[currentLang] ? TRANSLATIONS[currentLang].formSubmitting : 'Yuborilmoqda...'}
    `;
  }

  const timeNow = new Date().toLocaleString();
  const telegramMessage = `
🏢 <b>YANGI ARIZA: XON SAROY SAYTI</b>
━━━━━━━━━━━━━━━━━━
👤 <b>Mijoz:</b> ${name}
📞 <b>Telefon:</b> <code>${phone}</code>
📝 <b>Xabar / Izoh:</b> ${comment || 'Belgilanmagan'}
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
    existingLeads.push({ name, phone, comment, time: timeNow });
    localStorage.setItem('xon_leads', JSON.stringify(existingLeads));
  }

  if (submitBtn) {
    submitBtn.disabled = false;
    submitBtn.innerHTML = originalBtnText;
  }

  if (form) form.reset();

  if (successModal) {
    successModal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
  }
}

function closeSuccessModal() {
  const modal = document.getElementById('successModal') || document.getElementById('orderSuccessModal');
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
// 9. OXFORD BLUE HERO SLIDER VA DASTUR YUKLANGANDA ISHGA TUSHISH (INIT)
// ==========================================================================

let currentHeroSlide = 0;
const totalHeroSlides = 4;
let heroSlideTimer = null;

function showHeroSlide(index) {
  currentHeroSlide = (index + totalHeroSlides) % totalHeroSlides;

  // Slaydlarni almashtirish (active-slide / hidden-slide)
  for (let i = 0; i < totalHeroSlides; i++) {
    const slide = document.getElementById(`heroSlide${i}`);
    if (slide) {
      if (i === currentHeroSlide) {
        slide.classList.remove('hidden-slide');
        slide.classList.add('active-slide');
      } else {
        slide.classList.add('hidden-slide');
        slide.classList.remove('active-slide');
      }
    }
  }

  // Sahifalash nuqtalari (Pagination Dots)
  const dots = document.querySelectorAll('.hero-dot');
  dots.forEach((dot, idx) => {
    if (idx === currentHeroSlide) {
      dot.classList.add('active');
    } else {
      dot.classList.remove('active');
    }
  });

  // Raqam ko'rsatkichini yangilash (01 / 04)
  const numElem = document.getElementById('heroSlideNumber');
  if (numElem) {
    numElem.textContent = `0${currentHeroSlide + 1} / 0${totalHeroSlides}`;
  }
}

function nextHeroSlide() {
  showHeroSlide(currentHeroSlide + 1);
  resetHeroTimer();
}

function prevHeroSlide() {
  showHeroSlide(currentHeroSlide - 1);
  resetHeroTimer();
}

function goToHeroSlide(index) {
  showHeroSlide(index);
  resetHeroTimer();
}

function resetHeroTimer() {
  if (heroSlideTimer) clearInterval(heroSlideTimer);
  heroSlideTimer = setInterval(() => {
    showHeroSlide(currentHeroSlide + 1);
  }, 7000);
}

function switchHeroProduct(slug) {
  // Legacy qo'llab-quvvatlash uchun xavfsiz wrapper
  const idx = ['infinity', 'silkpoly', 'dominant', 'glatt05'].indexOf(slug);
  if (idx !== -1) {
    goToHeroSlide(idx);
  }
}

document.addEventListener('DOMContentLoaded', () => {
  // 1. Tilni o'rnatish
  setLanguage(currentLang);

  // 2. Hero slaydini boshlash
  showHeroSlide(0);
  resetHeroTimer();

  // 3. Katta gorizontal mahsulotlar slayderi (drag and scroll)
  const slider = document.getElementById('productsGrid');
  if (slider) {
    slider.addEventListener('scroll', updateSliderState, { passive: true });

    let isDown = false;
    let startX = 0;
    let scrollStart = 0;

    slider.addEventListener('mousedown', (e) => {
      if (e.target.closest('button')) return;
      isDown = true;
      slider.style.cursor = 'grabbing';
      startX = e.pageX - slider.offsetLeft;
      scrollStart = slider.scrollLeft;
    });

    window.addEventListener('mouseup', () => {
      if (isDown) {
        isDown = false;
        if (slider) slider.style.cursor = '';
      }
    });

    slider.addEventListener('mousemove', (e) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - slider.offsetLeft;
      const walk = (x - startX) * 1.5;
      slider.scrollLeft = scrollStart - walk;
    });

    setTimeout(updateSliderState, 200);
  }

  // 4. Jonli qidiruv
  const searchInput = document.getElementById('catalogSearchInput');
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      handleCatalogSearch(e.target.value);
    });
  }

  // 5. Ariza formasi
  const orderForm = document.getElementById('leadOrderForm');
  if (orderForm) {
    orderForm.addEventListener('submit', handleOrderFormSubmit);
  }

  // 6. Mobil menyu
  const mobileMenuBtn = document.getElementById('mobileMenuBtn');
  const mobileMenu = document.getElementById('mobileMenu');
  if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden');
    });
  }

  // 7. Klaviatura Esc tugmasi
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeProductModal();
      if (typeof closeOrderModal === 'function') closeOrderModal();
      closeSuccessModal();
      if (typeof closeBonusModal === 'function') closeBonusModal();
      if (typeof closeTelegramSettingsModal === 'function') closeTelegramSettingsModal();
      if (typeof closeCertModal === 'function') closeCertModal();
      if (typeof closeGalleryModal === 'function') closeGalleryModal();
    }
  });

  // 8. Tungi rejim va Rang tanlash olib tashlangan - toza standart ko'rinish
  try {
    localStorage.removeItem('xon_theme');
    localStorage.removeItem('xon_theme_color');
    document.documentElement.classList.remove('dark');
    document.documentElement.removeAttribute('data-theme-color');
  } catch (e) {}

  // 9. Sayt ochilganda yoki F5 bosilganda joriy hash bo'limini (yoki 'home'ni) ko'rsatish
  const initialHash = window.location.hash.replace('#', '').trim();
  window.showPageView(initialHash || 'home', false);
});

// 8. Hamkorlar karuselini o'ngga va chapga o'tkazish
window.scrollPartners = function(direction) {
  const carousel = document.getElementById('partnersCarousel');
  if (!carousel) return;
  const scrollAmount = 260;
  if (direction === 'prev') {
    carousel.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
  } else {
    carousel.scrollBy({ left: scrollAmount, behavior: 'smooth' });
  }
};

// 9. Sertifikatlar va Sovrinlar tablarini almashtirish
window.switchAwardsTab = function(tab) {
  const certsPanel = document.getElementById('certsPanel');
  const awardsPanel = document.getElementById('awardsPanel');
  const btnCerts = document.getElementById('tabBtnCerts');
  const btnAwards = document.getElementById('tabBtnAwards');

  if (tab === 'certificates') {
    if (certsPanel) certsPanel.classList.remove('hidden');
    if (awardsPanel) awardsPanel.classList.add('hidden');
    if (btnCerts) btnCerts.className = "px-5 py-2.5 rounded-lg text-xs sm:text-sm font-bold transition-all shadow-sm bg-oxford text-white";
    if (btnAwards) btnAwards.className = "px-5 py-2.5 rounded-lg text-xs sm:text-sm font-bold text-slate-600 hover:text-slate-900 transition-all";
  } else {
    if (certsPanel) certsPanel.classList.add('hidden');
    if (awardsPanel) awardsPanel.classList.remove('hidden');
    if (btnAwards) btnAwards.className = "px-5 py-2.5 rounded-lg text-xs sm:text-sm font-bold transition-all shadow-sm bg-oxford text-white";
    if (btnCerts) btnCerts.className = "px-5 py-2.5 rounded-lg text-xs sm:text-sm font-bold text-slate-600 hover:text-slate-900 transition-all";
  }
};

// 10. Sertifikat / Sovrin Lightbox modalini ochish
window.openCertModal = function(title, desc, code) {
  const modal = document.getElementById('certModal');
  if (!modal) return;
  const titleEl = document.getElementById('certModalTitle');
  const descEl = document.getElementById('certModalDesc');
  const codeEl = document.getElementById('certModalCode');

  if (titleEl) titleEl.textContent = title;
  if (descEl) descEl.textContent = desc;
  if (codeEl) codeEl.textContent = code || '';

  modal.classList.remove('hidden');
  document.body.style.overflow = 'hidden';
};

// 11. Sertifikat / Sovrin modalini yopish
window.closeCertModal = function() {
  const modal = document.getElementById('certModal');
  if (!modal) return;
  modal.classList.add('hidden');
  document.body.style.overflow = '';
};

// 12. Galereya modalini ochish va yopish
window.openGalleryModal = function(slot, title, desc) {
  const modal = document.getElementById('galleryModal');
  if (!modal) return;
  const slotEl = document.getElementById('galleryModalSlot');
  const titleEl = document.getElementById('galleryModalTitle');
  const descEl = document.getElementById('galleryModalDesc');

  if (slotEl) slotEl.textContent = 'Fotosurat #' + slot;
  if (titleEl) titleEl.textContent = title;
  if (descEl) descEl.textContent = desc || '';

  modal.classList.remove('hidden');
  document.body.style.overflow = 'hidden';
};

window.closeGalleryModal = function() {
  const modal = document.getElementById('galleryModal');
  if (!modal) return;
  modal.classList.add('hidden');
  document.body.style.overflow = '';
};

// 13. Alohida oynalar (SPA View Router) boshqaruvi
window.showPageView = function(viewName, updateHash = true) {
  const validViews = [
    'home', 'production', 'gallery', 
    'catalog', 'packaging', 'news', 'partners', 'contact'
  ];

  // Aliaslar
  if (viewName === 'about') viewName = 'production';
  if (viewName === 'qorishmalar' || viewName === 'mixes') viewName = 'catalog';

  if (!validViews.includes(viewName)) {
    viewName = 'home';
  }

  // Barcha oynalarni yashirish
  document.querySelectorAll('.site-page-view').forEach(view => {
    view.classList.remove('active-view');
    view.style.display = 'none';
  });

  // Tanlangan oynani ochish
  const targetView = document.getElementById('view-' + viewName);
  if (targetView) {
    targetView.classList.add('active-view');
    targetView.style.display = 'block';
  }

  // URL Hash yangilash
  if (updateHash) {
    if (viewName === 'home') {
      if (window.location.hash) {
        history.pushState(null, '', window.location.pathname);
      }
    } else {
      window.location.hash = '#' + viewName;
    }
  }

  // Sahifa boshiga silliq chiqarish
  window.scrollTo({ top: 0, behavior: 'instant' });

  // Mobil menyuni yopish
  const mobileMenu = document.getElementById('mobileMenu');
  if (mobileMenu && !mobileMenu.classList.contains('hidden')) {
    mobileMenu.classList.add('hidden');
  }

  // Agar katalog bo'lsa, mahsulotlar ro'yxatini yangilash
  if (viewName === 'catalog') {
    setTimeout(() => {
      if (typeof renderProducts === 'function') renderProducts();
    }, 50);
  }
};

// URL Hash o'zgarganda (brauzer orqaga/oldinga tugmalari) oynani almashtirish
window.addEventListener('hashchange', () => {
  const hash = window.location.hash.replace('#', '').trim();
  if (hash) {
    window.showPageView(hash, false);
  } else {
    window.showPageView('home', false);
  }
});
