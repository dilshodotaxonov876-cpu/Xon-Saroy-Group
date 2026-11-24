/**
 * ============================================================================
 * XON SAROY — FLOATING COLOR CONTROL SYSTEM (3240 RANG)
 * Deterministik 3240 ta noyob rang, 20 kategoriya, Stepper (+/-), Sliders,
 * 10 ta element, Auto-contrast, Dark/Light/System, Hex/RGB, Gradient, Undo/Reset
 * ============================================================================
 */

(function () {
  'use strict';

  // 1. 20 TA KATEGORIYA KONFIGURATSIYASI (20 x 162 = 3240 TA RANG)
  const CATEGORIES = [
    { name: "Red", hMin: 348, hMax: 372, sMin: 0.55, sMax: 1.0, lMin: 0.20, lMax: 0.82 },
    { name: "Orange", hMin: 14, hMax: 42, sMin: 0.60, sMax: 1.0, lMin: 0.25, lMax: 0.82 },
    { name: "Yellow", hMin: 44, hMax: 66, sMin: 0.65, sMax: 1.0, lMin: 0.28, lMax: 0.88 },
    { name: "Green", hMin: 75, hMax: 155, sMin: 0.45, sMax: 0.98, lMin: 0.18, lMax: 0.82 },
    { name: "Teal", hMin: 158, hMax: 185, sMin: 0.45, sMax: 0.98, lMin: 0.18, lMax: 0.80 },
    { name: "Cyan", hMin: 186, hMax: 208, sMin: 0.50, sMax: 1.0, lMin: 0.22, lMax: 0.82 },
    { name: "Blue", hMin: 210, hMax: 236, sMin: 0.50, sMax: 1.0, lMin: 0.18, lMax: 0.82 },
    { name: "Indigo", hMin: 238, hMax: 260, sMin: 0.45, sMax: 0.98, lMin: 0.18, lMax: 0.80 },
    { name: "Violet", hMin: 262, hMax: 280, sMin: 0.45, sMax: 0.98, lMin: 0.20, lMax: 0.82 },
    { name: "Purple", hMin: 282, hMax: 316, sMin: 0.45, sMax: 0.98, lMin: 0.18, lMax: 0.80 },
    { name: "Pink", hMin: 318, hMax: 346, sMin: 0.50, sMax: 1.0, lMin: 0.28, lMax: 0.85 },
    { name: "Brown", hMin: 18, hMax: 38, sMin: 0.35, sMax: 0.85, lMin: 0.12, lMax: 0.48 },
    { name: "Gray", hMin: 0, hMax: 360, sMin: 0.0, sMax: 0.08, lMin: 0.15, lMax: 0.88 },
    { name: "Black", hMin: 0, hMax: 360, sMin: 0.0, sMax: 0.30, lMin: 0.02, lMax: 0.16 },
    { name: "White", hMin: 0, hMax: 360, sMin: 0.0, sMax: 0.25, lMin: 0.88, lMax: 0.99 },
    { name: "Pastel Colors", hMin: 0, hMax: 360, sMin: 0.30, sMax: 0.65, lMin: 0.74, lMax: 0.92 },
    { name: "Neon Colors", hMin: 0, hMax: 360, sMin: 0.92, sMax: 1.0, lMin: 0.48, lMax: 0.68 },
    { name: "Gradient Colors", hMin: 0, hMax: 360, sMin: 0.75, sMax: 0.98, lMin: 0.35, lMax: 0.70 },
    { name: "Dark Colors", hMin: 0, hMax: 360, sMin: 0.35, sMax: 0.85, lMin: 0.10, lMax: 0.28 },
    { name: "Light Colors", hMin: 0, hMax: 360, sMin: 0.12, sMax: 0.48, lMin: 0.78, lMax: 0.94 }
  ];

  // 10 TA BOSHQARILADIGAN ELEMENT RO'YXATI
  const ELEMENTS = [
    { key: "primary", name: "Primary (Asosiy)", var: "--ccs-primary", default: "#0055A5" },
    { key: "secondary", name: "Secondary (Qo'shimcha)", var: "--ccs-secondary", default: "#002147" },
    { key: "accent", name: "Accent (Urg'u)", var: "--ccs-accent", default: "#C8102E" },
    { key: "bg", name: "Background (Fon)", var: "--ccs-bg", default: "#FFFFFF" },
    { key: "text", name: "Text (Matn)", var: "--ccs-text", default: "#1E293B" },
    { key: "button", name: "Button (Tugma)", var: "--ccs-button", default: "#0055A5" },
    { key: "navbar", name: "Navbar (Header)", var: "--ccs-navbar", default: "linear-gradient(90deg, #004E98 0%, #005BB5 45%, #01478F 100%)" },
    { key: "card", name: "Card (Karta)", var: "--ccs-card", default: "#FFFFFF" },
    { key: "border", name: "Border (Chegara)", var: "--ccs-border", default: "#E2E8F0" },
    { key: "footer", name: "Footer (Pastki qism)", var: "--ccs-footer", default: "linear-gradient(180deg, #F0F7FD 0%, #E2EDF8 100%)" }
  ];

  // COLOR CONVERSION HELPERS
  function hslToRgb(h, s, l) {
    h = ((h % 360) + 360) % 360;
    const c = (1 - Math.abs(2 * l - 1)) * s;
    const x = c * (1 - Math.abs(((h / 60) % 2) - 1));
    const m = l - c / 2;
    let r1 = 0, g1 = 0, b1 = 0;
    if (h < 60) { r1 = c; g1 = x; b1 = 0; }
    else if (h < 120) { r1 = x; g1 = c; b1 = 0; }
    else if (h < 180) { r1 = 0; g1 = c; b1 = x; }
    else if (h < 240) { r1 = 0; g1 = x; b1 = c; }
    else if (h < 300) { r1 = x; g1 = 0; b1 = c; }
    else { r1 = c; g1 = 0; b1 = x; }
    const r = Math.max(0, Math.min(255, Math.round((r1 + m) * 255)));
    const g = Math.max(0, Math.min(255, Math.round((g1 + m) * 255)));
    const b = Math.max(0, Math.min(255, Math.round((b1 + m) * 255)));
    return [r, g, b];
  }

  function rgbToHex(r, g, b) {
    const hex = n => Math.max(0, Math.min(255, Math.round(n))).toString(16).padStart(2, '0').toUpperCase();
    return `#${hex(r)}${hex(g)}${hex(b)}`;
  }

  function hexToRgb(hex) {
    hex = hex.replace('#', '').trim();
    if (hex.length === 3) {
      hex = hex.split('').map(c => c + c).join('');
    }
    if (hex.length !== 6) return null;
    const num = parseInt(hex, 16);
    if (isNaN(num)) return null;
    return {
      r: (num >> 16) & 255,
      g: (num >> 8) & 255,
      b: num & 255
    };
  }

  function rgbToHsl(r, g, b) {
    r /= 255; g /= 255; b /= 255;
    const max = Math.max(r, g, b), min = Math.min(r, g, b);
    let h = 0, s = 0, l = (max + min) / 2;
    if (max !== min) {
      const d = max - min;
      s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
      switch (max) {
        case r: h = ((g - b) / d + (g < b ? 6 : 0)); break;
        case g: h = ((b - r) / d + 2); break;
        case b: h = ((r - g) / d + 4); break;
      }
      h *= 60;
    }
    return {
      h: Math.round(h),
      s: Math.round(s * 100),
      l: Math.round(l * 100)
    };
  }

  function getLuminance(r, g, b) {
    return 0.299 * r + 0.587 * g + 0.114 * b;
  }

  function getContrastTextColor(hex) {
    const rgb = hexToRgb(hex);
    if (!rgb) return '#FFFFFF';
    const lum = getLuminance(rgb.r, rgb.g, rgb.b);
    return lum > 142 ? '#0F172A' : '#FFFFFF';
  }

  // 2. 3240 DETERMINISTIK NOYOB RANG GENERATORI
  const allColors = [];
  const colorIdMap = new Map();
  const hexMap = new Map();

  function generate3240Colors() {
    const seen = new Set();
    let globalId = 1;

    for (const cat of CATEGORIES) {
      for (let i = 0; i < 18; i++) {
        for (let j = 0; j < 9; j++) {
          const t1 = i / 17;
          const t2 = j / 8;
          const h = cat.hMin + t1 * (cat.hMax - cat.hMin);
          const s = cat.sMin + t2 * (cat.sMax - cat.sMin);
          const l = cat.lMin + ((i + j * 2) / 33) * (cat.lMax - cat.lMin);

          let [r, g, b] = hslToRgb(h, s, l);
          let hex = rgbToHex(r, g, b);

          let attempt = 0;
          while (seen.has(hex)) {
            attempt++;
            const step = (attempt % 2 === 1) ? Math.ceil(attempt / 2) : -Math.floor(attempt / 2);
            const mod = attempt % 3;
            if (mod === 0) r = Math.max(0, Math.min(255, r + step));
            else if (mod === 1) g = Math.max(0, Math.min(255, g + step));
            else b = Math.max(0, Math.min(255, b + step));
            hex = rgbToHex(r, g, b);
          }
          seen.add(hex);

          const hsl = rgbToHsl(r, g, b);
          const colorObj = {
            id: globalId++,
            category: cat.name,
            hex: hex,
            rgb: { r, g, b },
            rgbStr: `rgb(${r}, ${g}, ${b})`,
            hsl: hsl,
            hslStr: `hsl(${hsl.h}, ${hsl.s}%, ${hsl.l}%)`
          };

          allColors.push(colorObj);
          colorIdMap.set(colorObj.id, colorObj);
          hexMap.set(hex.toUpperCase(), colorObj);
        }
      }
    }
  }

  generate3240Colors();

  // 3. THEME MANAGER STATE & STORAGE
  const STORAGE_KEY = 'ccs_theme_config';
  const MAX_HISTORY = 30;

  const defaultState = {
    mode: 'light', // 'light' | 'dark' | 'auto'
    activeElement: 'primary',
    stepSize: 1, // 1 | 10 | 100
    currentColorId: 1042, // Default vibrant corporate blue
    activeTab: 'colors', // 'colors' | 'code' | 'gradient' | 'saved'
    favorites: [],
    recents: [],
    elementsConfig: {
      primary: { color: '#0055A5', isAuto: true },
      secondary: { color: '#002147', isAuto: true },
      accent: { color: '#C8102E', isAuto: true },
      bg: { color: '#FFFFFF', isAuto: true },
      text: { color: '#1E293B', isAuto: true },
      button: { color: '#0055A5', isAuto: true },
      navbar: { color: 'linear-gradient(90deg, #004E98 0%, #005BB5 45%, #01478F 100%)', isAuto: true },
      card: { color: '#FFFFFF', isAuto: true },
      border: { color: '#E2E8F0', isAuto: true },
      footer: { color: 'linear-gradient(180deg, #F0F7FD 0%, #E2EDF8 100%)', isAuto: true }
    },
    gradient: {
      type: 'linear',
      stops: 2,
      stop1: '#0055A5',
      stop2: '#002147',
      stop3: '#C8102E',
      angle: 135
    }
  };

  let state = JSON.parse(JSON.stringify(defaultState));
  const historyStack = [];

  // Load from localStorage
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      const parsed = JSON.parse(saved);
      state = Object.assign(state, parsed);
      // Ensure elementsConfig is robustly merged
      if (parsed.elementsConfig) {
        state.elementsConfig = Object.assign({}, defaultState.elementsConfig, parsed.elementsConfig);
      }
    }
  } catch (e) {
    console.warn('CCS: Failed to parse localStorage state:', e);
  }

  function saveState() {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    } catch (e) {
      console.warn('CCS: Failed to save to localStorage:', e);
    }
  }

  function pushUndoState() {
    historyStack.push(JSON.stringify({
      mode: state.mode,
      elementsConfig: state.elementsConfig,
      gradient: state.gradient,
      currentColorId: state.currentColorId
    }));
    if (historyStack.length > MAX_HISTORY) {
      historyStack.shift();
    }
  }

  // 4. HARMONIZATION & AUTO-GENERATION ENGINE
  function harmonizeElements(primaryHex, isDark) {
    const rgb = hexToRgb(primaryHex) || { r: 0, g: 85, b: 165 };
    const hsl = rgbToHsl(rgb.r, rgb.g, rgb.b);

    // Secondary: analogous -25 deg or deeper
    const secH = ((hsl.h - 25) + 360) % 360;
    const secRgb = hslToRgb(secH, Math.max(0.4, hsl.s / 100), isDark ? 0.25 : 0.20);
    const secHex = rgbToHex(...secRgb);

    // Accent: complementary/triadic +150 deg, high chroma
    const accH = (hsl.h + 150) % 360;
    const accRgb = hslToRgb(accH, 0.95, isDark ? 0.60 : 0.50);
    const accHex = rgbToHex(...accRgb);

    // Dark/Light specific tones
    const bg = isDark ? '#0B1120' : '#FFFFFF';
    const card = isDark ? '#1E293B' : '#FFFFFF';
    const border = isDark ? '#334155' : '#E2E8F0';
    const text = isDark ? '#F1F5F9' : '#1E293B';

    // Gradients
    const navbar = `linear-gradient(90deg, ${secHex} 0%, ${primaryHex} 50%, ${secHex} 100%)`;
    const footer = isDark 
      ? `linear-gradient(180deg, #0F172A 0%, #0B1120 100%)` 
      : `linear-gradient(180deg, rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, 0.08) 0%, rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, 0.16) 100%)`;

    return {
      secondary: secHex,
      accent: accHex,
      bg: bg,
      text: text,
      button: primaryHex,
      navbar: navbar,
      card: card,
      border: border,
      footer: footer
    };
  }

  // 5. CSS VARIABLES INJECTION & LIVE APPLICATION
  function applyTheme() {
    const root = document.documentElement;
    const isDark = state.mode === 'dark' || 
      (state.mode === 'auto' && window.matchMedia('(prefers-color-scheme: dark)').matches);

    if (isDark) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }

    // Harmonize any elements with isAuto: true
    const primaryHex = state.elementsConfig.primary.color;
    const harmonized = harmonizeElements(primaryHex, isDark);

    for (const key of Object.keys(state.elementsConfig)) {
      if (key !== 'primary' && state.elementsConfig[key].isAuto) {
        state.elementsConfig[key].color = harmonized[key];
      }
    }

    // Apply CSS variables
    for (const el of ELEMENTS) {
      const val = state.elementsConfig[el.key].color;
      root.style.setProperty(el.var, val);

      // Contrast text colors for buttons, navbar, etc.
      if (el.key === 'button') {
        const btnTextColor = getContrastTextColor(val);
        root.style.setProperty('--ccs-button-text', btnTextColor);
      } else if (el.key === 'navbar' && !val.includes('gradient')) {
        root.style.setProperty('--ccs-navbar-text', getContrastTextColor(val));
      } else if (el.key === 'card') {
        root.style.setProperty('--ccs-card-text', getContrastTextColor(val));
      }
    }

    // Primary RGB for transparent glows
    const pRgb = hexToRgb(primaryHex) || { r: 0, g: 85, b: 165 };
    root.style.setProperty('--ccs-primary-rgb', `${pRgb.r}, ${pRgb.g}, ${pRgb.b}`);
    root.style.setProperty('--ccs-primary-glow', `rgba(${pRgb.r}, ${pRgb.g}, ${pRgb.b}, 0.28)`);

    // Gradient variable
    const grad = state.gradient;
    let gradVal = '';
    if (grad.type === 'linear') {
      gradVal = grad.stops === 3 
        ? `linear-gradient(${grad.angle}deg, ${grad.stop1} 0%, ${grad.stop2} 50%, ${grad.stop3} 100%)`
        : `linear-gradient(${grad.angle}deg, ${grad.stop1} 0%, ${grad.stop2} 100%)`;
    } else {
      gradVal = grad.stops === 3
        ? `radial-gradient(circle, ${grad.stop1} 0%, ${grad.stop2} 50%, ${grad.stop3} 100%)`
        : `radial-gradient(circle, ${grad.stop1} 0%, ${grad.stop2} 100%)`;
    }
    root.style.setProperty('--ccs-gradient', gradVal);

    saveState();
  }

  // System dark mode listener
  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', () => {
    if (state.mode === 'auto') {
      applyTheme();
      updateUI();
    }
  });

  // 6. COLOR ACTIONS & HELPERS
  function selectColor(colorId, recordHistory = true) {
    const color = colorIdMap.get(colorId);
    if (!color) return;

    if (recordHistory) pushUndoState();

    state.currentColorId = colorId;
    const activeEl = state.activeElement;

    state.elementsConfig[activeEl].color = color.hex;
    state.elementsConfig[activeEl].isAuto = (activeEl === 'primary'); // Only primary stays auto-driver

    // If primary changed, harmonize other auto elements
    if (activeEl === 'primary') {
      const isDark = document.documentElement.classList.contains('dark');
      const harmonized = harmonizeElements(color.hex, isDark);
      for (const k of Object.keys(state.elementsConfig)) {
        if (k !== 'primary' && state.elementsConfig[k].isAuto) {
          state.elementsConfig[k].color = harmonized[k];
        }
      }
    }

    // Add to recent history (max 15)
    state.recents = state.recents.filter(id => id !== colorId);
    state.recents.unshift(colorId);
    if (state.recents.length > 15) state.recents.pop();

    applyTheme();
    updateUI();
  }

  function stepBy(delta) {
    const total = 3240;
    let nextId = ((state.currentColorId - 1 + delta) % total + total) % total + 1;
    selectColor(nextId);
  }

  function findClosestColor(hex) {
    const target = hexToRgb(hex);
    if (!target) return allColors[0];

    let closest = allColors[0];
    let minDistance = Infinity;

    for (const c of allColors) {
      const d = Math.pow(c.rgb.r - target.r, 2) +
                Math.pow(c.rgb.g - target.g, 2) +
                Math.pow(c.rgb.b - target.b, 2);
      if (d === 0) return c;
      if (d < minDistance) {
        minDistance = d;
        closest = c;
      }
    }
    return closest;
  }

  function showToast(msg) {
    let toast = document.getElementById('ccsToast');
    if (!toast) {
      toast = document.createElement('div');
      toast.id = 'ccsToast';
      document.body.appendChild(toast);
    }
    toast.textContent = msg;
    toast.classList.add('show');
    clearTimeout(toast._timer);
    toast._timer = setTimeout(() => {
      toast.classList.remove('show');
    }, 2200);
  }

  // 7. BUILD FLOATING UI IN DOM
  function createUI() {
    if (document.getElementById('ccsFloatingPanel')) return;

    // Trigger Button
    const trigger = document.createElement('button');
    trigger.id = 'ccsFloatingTrigger';
    trigger.title = "Ranglar tizimi (3240 rang)";
    trigger.setAttribute('aria-label', "Ranglar boshqaruv panelini ochish");
    trigger.innerHTML = `
      <div class="ccs-pulse-ring"></div>
      <svg class="w-5 h-5 fill-current" viewBox="0 0 24 24">
        <path d="M12 2C6.49 2 2 6.49 2 12c0 4.42 3.58 8 8 8 1.1 0 2-.9 2-2 0-.5-.2-.96-.54-1.33-.34-.37-.56-.86-.56-1.42 0-1.1.9-2 2-2h2.1c4.42 0 8-3.58 8-8 0-5.51-4.49-10-10-10zm-6 9c-.83 0-1.5-.67-1.5-1.5S5.17 8 6 8s1.5.67 1.5 1.5S6.83 11 6 11zm3-4c-.83 0-1.5-.67-1.5-1.5S8.17 4 9 4s1.5.67 1.5 1.5S9.83 7 9 7zm6 0c-.83 0-1.5-.67-1.5-1.5S14.17 4 15 4s1.5.67 1.5 1.5S15.83 7 15 7zm3 4c-.83 0-1.5-.67-1.5-1.5S17.17 8 18 8s1.5.67 1.5 1.5S18.83 11 18 11z"/>
      </svg>
    `;

    // Panel
    const panel = document.createElement('div');
    panel.id = 'ccsFloatingPanel';
    panel.innerHTML = `
      <!-- 1. Header (Never clips) -->
      <div class="ccs-header">
        <div class="ccs-title-box">
          <span class="ccs-title">Color Control</span>
          <span class="ccs-badge-count">3240</span>
        </div>
        <div class="ccs-theme-modes">
          <button class="ccs-mode-btn" data-mode="light" title="Kunduzgi rejim">☀️</button>
          <button class="ccs-mode-btn" data-mode="dark" title="Tungi rejim">🌙</button>
          <button class="ccs-mode-btn" data-mode="auto" title="Tizim rejimi (Auto)">⚙️</button>
        </div>
        <button class="ccs-close-btn" id="ccsCloseBtn" title="Yopish">✕</button>
      </div>

      <!-- 2. Target Element Selector (Never clips) -->
      <div class="ccs-target-bar">
        <div class="ccs-target-row">
          <select id="ccsTargetSelect" class="ccs-target-select">
            ${ELEMENTS.map(el => `<option value="${el.key}">${el.name}</option>`).join('')}
          </select>
          <button id="ccsAutoSyncBtn" class="ccs-auto-sync-btn" title="Avtomatik uyg'unlikka qaytarish">
            <span>🔄</span> <span id="ccsAutoSyncText">Avto</span>
          </button>
        </div>
      </div>

      <!-- 3. Tabs Bar (Never clips) -->
      <div class="ccs-tabs-bar">
        <button class="ccs-tab-btn active" data-tab="colors">Ranglar</button>
        <button class="ccs-tab-btn" data-tab="code">Kod</button>
        <button class="ccs-tab-btn" data-tab="gradient">Gradient</button>
        <button class="ccs-tab-btn" data-tab="saved">Saqlangan</button>
      </div>

      <!-- 4. Scrollable Body (Only this part scrolls) -->
      <div class="ccs-body">

        <!-- TAB 1: RANGLAR -->
        <div class="ccs-tab-panel active" id="ccsTabColors">
          <!-- Active Color Preview Card -->
          <div class="ccs-active-card">
            <div id="ccsPreviewSwatch" class="ccs-color-swatch-large"></div>
            <div class="ccs-color-meta">
              <div class="ccs-color-title-row">
                <span id="ccsColorIdBadge" class="ccs-color-id-badge">№ 1</span>
                <span id="ccsColorCatBadge" class="ccs-color-sub-text">Blue</span>
              </div>
              <div id="ccsColorHexText" class="ccs-color-hex-text">#0055A5</div>
              <div id="ccsColorHslText" class="ccs-color-sub-text">hsl(210, 100%, 32%)</div>
            </div>
            <div class="ccs-card-actions">
              <button id="ccsFavBtn" class="ccs-icon-action-btn" title="Sevimliga qo'shish">⭐</button>
              <button id="ccsCopyHexBtn" class="ccs-icon-action-btn" title="HEX nusxalash">📋</button>
            </div>
          </div>

          <!-- Category Selector -->
          <div class="ccs-category-row">
            <select id="ccsCategorySelect" class="ccs-select-input">
              ${CATEGORIES.map((cat, idx) => `<option value="${cat.name}">${cat.name} (162 ta rang)</option>`).join('')}
            </select>
          </div>

          <!-- Stepper (+ / - va 1, 10, 100 qadamlar) -->
          <div class="ccs-stepper-container">
            <div class="ccs-step-modes">
              <span>Qadam o'lchami:</span>
              <div class="ccs-step-pills">
                <button class="ccs-step-pill active" data-step="1">1</button>
                <button class="ccs-step-pill" data-step="10">10</button>
                <button class="ccs-step-pill" data-step="100">100</button>
              </div>
            </div>
            <div class="ccs-step-buttons">
              <button id="ccsStepPrev" class="ccs-step-btn">
                <span>◀</span> <span>− Oldingi</span>
              </button>
              <button id="ccsStepNext" class="ccs-step-btn">
                <span>Keyingi +</span> <span>▶</span>
              </button>
            </div>
          </div>

          <!-- Saturation & Brightness Sliders -->
          <div class="ccs-slider-group">
            <div class="ccs-slider-row">
              <div class="ccs-slider-label">
                <span>Intensivlik (Saturation)</span>
                <span id="ccsSatVal">80%</span>
              </div>
              <input type="range" id="ccsSatRange" class="ccs-range-input" min="0" max="100" value="80">
            </div>
            <div class="ccs-slider-row">
              <div class="ccs-slider-label">
                <span>Yorqinlik (Brightness)</span>
                <span id="ccsBriVal">50%</span>
              </div>
              <input type="range" id="ccsBriRange" class="ccs-range-input" min="0" max="100" value="50">
            </div>
          </div>

          <!-- Swatches Grid for Category -->
          <div id="ccsSwatchesGrid" class="ccs-swatches-grid"></div>
        </div>

        <!-- TAB 2: KOD -->
        <div class="ccs-tab-panel" id="ccsTabCode">
          <div class="ccs-code-input-group">
            <div class="ccs-input-row">
              <label class="ccs-input-label">HEX Kod (#RRGGBB / #RGB):</label>
              <input type="text" id="ccsHexInput" class="ccs-text-field" placeholder="#0055A5" maxlength="9">
              <span id="ccsHexError" class="ccs-error-text">Noto'g'ri HEX formati!</span>
            </div>

            <div class="ccs-input-row">
              <label class="ccs-input-label">RGB Kod (r, g, b):</label>
              <input type="text" id="ccsRgbInput" class="ccs-text-field" placeholder="0, 85, 165">
              <span id="ccsRgbError" class="ccs-error-text">Noto'g'ri RGB formati (0-255 oralig'ida)!</span>
            </div>

            <div class="ccs-picker-row">
              <input type="color" id="ccsNativePicker" class="ccs-native-color-picker" value="#0055A5" title="Native Color Picker">
              <button id="ccsApplyCodeBtn" class="ccs-apply-btn">Rangni qo'llash</button>
            </div>

            <div id="ccsMatchBox" class="ccs-match-box">
              <span class="ccs-match-label">Palitradagi eng yaqin moslik (3240 ichida):</span>
              <span id="ccsMatchText" class="ccs-match-val">№ 1042 — Blue (#0055A5)</span>
              <button id="ccsJumpMatchBtn" class="ccs-btn-secondary" style="margin-top: 4px; padding: 4px 8px; font-size: 11px;">
                Shu rangga o'tish ➜
              </button>
            </div>
          </div>
        </div>

        <!-- TAB 3: GRADIENT -->
        <div class="ccs-tab-panel" id="ccsTabGradient">
          <div id="ccsGradPreview" class="ccs-gradient-preview"></div>
          
          <div style="display: flex; gap: 6px;">
            <button class="ccs-btn-secondary active" id="ccsGradLinearBtn" style="flex: 1;">Linear</button>
            <button class="ccs-btn-secondary" id="ccsGradRadialBtn" style="flex: 1;">Radial</button>
          </div>

          <div style="display: flex; gap: 6px;">
            <button class="ccs-btn-secondary active" id="ccsGradStops2" style="flex: 1;">2 ta rang</button>
            <button class="ccs-btn-secondary" id="ccsGradStops3" style="flex: 1;">3 ta rang</button>
          </div>

          <!-- Color Stop Inputs -->
          <div style="display: flex; gap: 6px; align-items: center;">
            <input type="color" id="ccsGradStop1" class="ccs-native-color-picker" value="#0055A5" style="flex: 1;">
            <input type="color" id="ccsGradStop2" class="ccs-native-color-picker" value="#002147" style="flex: 1;">
            <input type="color" id="ccsGradStop3" class="ccs-native-color-picker" value="#C8102E" style="flex: 1; display: none;">
          </div>

          <!-- Angle Slider -->
          <div class="ccs-slider-row" id="ccsGradAngleRow">
            <div class="ccs-slider-label">
              <span>Burchak (Angle)</span>
              <span id="ccsGradAngleVal">135°</span>
            </div>
            <input type="range" id="ccsGradAngleRange" class="ccs-range-input" min="0" max="360" value="135">
          </div>

          <!-- Quick Angle Presets -->
          <div style="display: flex; gap: 4px;">
            <button class="ccs-step-pill" data-angle="45">45°</button>
            <button class="ccs-step-pill" data-angle="90">90°</button>
            <button class="ccs-step-pill" data-angle="135">135°</button>
            <button class="ccs-step-pill" data-angle="180">180°</button>
            <button class="ccs-step-pill" data-angle="270">270°</button>
          </div>

          <!-- Apply buttons -->
          <div class="ccs-gradient-actions">
            <button id="ccsApplyGradBrand" class="ccs-apply-btn">Brand gradientiga qo'llash</button>
            <button id="ccsApplyGradNavbar" class="ccs-btn-secondary">Header (Navbar) ga qo'llash</button>
            <button id="ccsApplyGradFooter" class="ccs-btn-secondary">Footer ga qo'llash</button>
          </div>
        </div>

        <!-- TAB 4: SAQLANGAN -->
        <div class="ccs-tab-panel" id="ccsTabSaved">
          <div style="display: flex; align-items: center; justify-content: space-between;">
            <span style="font-size: 11.5px; font-weight: 800; color: #475569;">⭐ Sevimli ranglar</span>
            <span id="ccsFavCount" style="font-size: 10px; font-weight: 700; color: #94A3B8;">0 ta</span>
          </div>
          <div id="ccsFavList" class="ccs-saved-list"></div>

          <div style="display: flex; align-items: center; justify-content: space-between; margin-top: 10px;">
            <span style="font-size: 11.5px; font-weight: 800; color: #475569;">🕒 Oxirgi ishlatilganlar</span>
            <button id="ccsClearRecentsBtn" style="border: none; background: none; font-size: 10px; color: #EF4444; font-weight: 700; cursor: pointer;">Tozalash</button>
          </div>
          <div id="ccsRecentsList" class="ccs-saved-list"></div>
        </div>

      </div>

      <!-- 5. Footer Bar (Reset / Undo - Never clips) -->
      <div class="ccs-footer-bar">
        <button id="ccsUndoBtn" class="ccs-footer-btn" title="Oxirgi amalni bekor qilish">
          <span>↩</span> <span>Qaytarish</span>
        </button>
        <button id="ccsResetBtn" class="ccs-footer-btn" title="Barcha ranglarni tiklash">
          <span>↺</span> <span>Tiklash</span>
        </button>
      </div>
    `;

    document.body.appendChild(trigger);
    document.body.appendChild(panel);

    setupEvents();
  }

  // 8. EVENT LISTENERS SETUP
  function setupEvents() {
    const trigger = document.getElementById('ccsFloatingTrigger');
    const panel = document.getElementById('ccsFloatingPanel');
    const closeBtn = document.getElementById('ccsCloseBtn');

    // Open/Close toggle
    trigger.addEventListener('click', () => {
      panel.classList.toggle('open');
      trigger.classList.toggle('active', panel.classList.contains('open'));
    });

    closeBtn.addEventListener('click', () => {
      panel.classList.remove('open');
      trigger.classList.remove('active');
    });

    // Dark/Light/Auto modes
    panel.querySelectorAll('.ccs-mode-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        pushUndoState();
        state.mode = btn.dataset.mode;
        applyTheme();
        updateUI();
        showToast(`Rejim: ${state.mode.toUpperCase()}`);
      });
    });

    // Element Selector
    const targetSelect = document.getElementById('ccsTargetSelect');
    targetSelect.addEventListener('change', (e) => {
      state.activeElement = e.target.value;
      const elColor = state.elementsConfig[state.activeElement]?.color;
      if (elColor) {
        if (elColor.startsWith('#')) {
          const closest = findClosestColor(elColor);
          if (closest) state.currentColorId = closest.id;
        } else if (elColor.includes('#')) {
          const hexMatch = elColor.match(/#[0-9A-Fa-f]{6}/);
          if (hexMatch) {
            const closest = findClosestColor(hexMatch[0]);
            if (closest) state.currentColorId = closest.id;
          }
        }
      }
      updateUI();
    });

    // Auto-sync button
    const autoSyncBtn = document.getElementById('ccsAutoSyncBtn');
    autoSyncBtn.addEventListener('click', () => {
      const activeEl = state.activeElement;
      if (activeEl === 'primary') return;
      pushUndoState();
      state.elementsConfig[activeEl].isAuto = true;
      applyTheme();
      updateUI();
      showToast(`${activeEl.toUpperCase()} avtomatik holatga ulandi!`);
    });

    // Tabs switching
    panel.querySelectorAll('.ccs-tab-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        state.activeTab = btn.dataset.tab;
        panel.querySelectorAll('.ccs-tab-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        panel.querySelectorAll('.ccs-tab-panel').forEach(p => p.classList.remove('active'));
        const activePanel = document.getElementById(`ccsTab${capitalize(state.activeTab)}`);
        if (activePanel) activePanel.classList.add('active');
      });
    });

    // Category Selector
    const catSelect = document.getElementById('ccsCategorySelect');
    catSelect.addEventListener('change', (e) => {
      const catName = e.target.value;
      const firstInCat = allColors.find(c => c.category === catName);
      if (firstInCat) selectColor(firstInCat.id);
    });

    // Stepper buttons & step size pills
    panel.querySelectorAll('.ccs-step-pill').forEach(pill => {
      pill.addEventListener('click', () => {
        panel.querySelectorAll('.ccs-step-pill').forEach(p => p.classList.remove('active'));
        pill.classList.add('active');
        state.stepSize = parseInt(pill.dataset.step, 10);
      });
    });

    document.getElementById('ccsStepPrev').addEventListener('click', () => {
      stepBy(-state.stepSize);
    });

    document.getElementById('ccsStepNext').addEventListener('click', () => {
      stepBy(state.stepSize);
    });

    // Sliders: Saturation & Brightness
    const satRange = document.getElementById('ccsSatRange');
    const briRange = document.getElementById('ccsBriRange');

    function applySliderChange() {
      const s = parseInt(satRange.value, 10);
      const l = parseInt(briRange.value, 10);
      document.getElementById('ccsSatVal').textContent = `${s}%`;
      document.getElementById('ccsBriVal').textContent = `${l}%`;

      const curr = colorIdMap.get(state.currentColorId);
      if (!curr) return;

      const rgb = hslToRgb(curr.hsl.h, s / 100, l / 100);
      const hex = rgbToHex(...rgb);

      const closest = findClosestColor(hex);
      selectColor(closest.id, false); // live sliding without spamming undo stack
    }

    satRange.addEventListener('input', applySliderChange);
    briRange.addEventListener('input', applySliderChange);

    // Copy HEX button
    document.getElementById('ccsCopyHexBtn').addEventListener('click', () => {
      const curr = colorIdMap.get(state.currentColorId);
      if (curr) {
        navigator.clipboard.writeText(curr.hex);
        showToast(`HEX nusxalandi: ${curr.hex}`);
      }
    });

    // Favorite Star button
    document.getElementById('ccsFavBtn').addEventListener('click', () => {
      const id = state.currentColorId;
      if (state.favorites.includes(id)) {
        state.favorites = state.favorites.filter(x => x !== id);
        showToast("Sevimli ranglardan olib tashlandi");
      } else {
        state.favorites.push(id);
        showToast("Sevimli ranglarga saqlandi ⭐");
      }
      saveState();
      updateUI();
    });

    // TAB 2: HEX & RGB code input
    const hexInput = document.getElementById('ccsHexInput');
    const rgbInput = document.getElementById('ccsRgbInput');
    const nativePicker = document.getElementById('ccsNativePicker');

    hexInput.addEventListener('input', (e) => {
      let val = e.target.value.trim();
      if (!val.startsWith('#') && val.length > 0) val = '#' + val;
      const rgb = hexToRgb(val);
      const errEl = document.getElementById('ccsHexError');
      if (rgb) {
        errEl.style.display = 'none';
        hexInput.classList.remove('is-error');
        rgbInput.value = `${rgb.r}, ${rgb.g}, ${rgb.b}`;
        if (val.length === 7) nativePicker.value = val;
        const closest = findClosestColor(val);
        document.getElementById('ccsMatchText').textContent = `№ ${closest.id} — ${closest.category} (${closest.hex})`;
      } else if (val.length > 3) {
        errEl.style.display = 'block';
        hexInput.classList.add('is-error');
      }
    });

    rgbInput.addEventListener('input', (e) => {
      const val = e.target.value.trim();
      const parts = val.replace(/rgb\(|\)/g, '').split(',').map(n => parseInt(n.trim(), 10));
      const errEl = document.getElementById('ccsRgbError');
      if (parts.length === 3 && parts.every(n => !isNaN(n) && n >= 0 && n <= 255)) {
        errEl.style.display = 'none';
        rgbInput.classList.remove('is-error');
        const hex = rgbToHex(parts[0], parts[1], parts[2]);
        hexInput.value = hex;
        nativePicker.value = hex;
        const closest = findClosestColor(hex);
        document.getElementById('ccsMatchText').textContent = `№ ${closest.id} — ${closest.category} (${closest.hex})`;
      } else if (val.length > 3) {
        errEl.style.display = 'block';
        rgbInput.classList.add('is-error');
      }
    });

    nativePicker.addEventListener('input', (e) => {
      const hex = e.target.value;
      hexInput.value = hex;
      const rgb = hexToRgb(hex);
      if (rgb) rgbInput.value = `${rgb.r}, ${rgb.g}, ${rgb.b}`;
      const closest = findClosestColor(hex);
      document.getElementById('ccsMatchText').textContent = `№ ${closest.id} — ${closest.category} (${closest.hex})`;
    });

    document.getElementById('ccsApplyCodeBtn').addEventListener('click', () => {
      const hexVal = hexInput.value.trim();
      const rgb = hexToRgb(hexVal);
      if (rgb) {
        const closest = findClosestColor(hexVal);
        selectColor(closest.id);
        showToast(`Rang qo'llandi: ${closest.hex}`);
      } else {
        showToast("Iltimos, to'g'ri rang kodini kiriting!");
      }
    });

    document.getElementById('ccsJumpMatchBtn').addEventListener('click', () => {
      const hexVal = hexInput.value.trim();
      const closest = findClosestColor(hexVal);
      selectColor(closest.id);
      // Switch to colors tab
      panel.querySelector('.ccs-tab-btn[data-tab="colors"]').click();
    });

    // TAB 3: GRADIENT EVENTS
    const gradAngle = document.getElementById('ccsGradAngleRange');
    gradAngle.addEventListener('input', (e) => {
      state.gradient.angle = parseInt(e.target.value, 10);
      document.getElementById('ccsGradAngleVal').textContent = `${state.gradient.angle}°`;
      applyTheme();
      updateGradientPreview();
    });

    panel.querySelectorAll('[data-angle]').forEach(btn => {
      btn.addEventListener('click', () => {
        state.gradient.angle = parseInt(btn.dataset.angle, 10);
        gradAngle.value = state.gradient.angle;
        document.getElementById('ccsGradAngleVal').textContent = `${state.gradient.angle}°`;
        applyTheme();
        updateGradientPreview();
      });
    });

    document.getElementById('ccsGradLinearBtn').addEventListener('click', () => {
      state.gradient.type = 'linear';
      document.getElementById('ccsGradLinearBtn').classList.add('active');
      document.getElementById('ccsGradRadialBtn').classList.remove('active');
      document.getElementById('ccsGradAngleRow').style.display = 'flex';
      applyTheme();
      updateGradientPreview();
    });

    document.getElementById('ccsGradRadialBtn').addEventListener('click', () => {
      state.gradient.type = 'radial';
      document.getElementById('ccsGradRadialBtn').classList.add('active');
      document.getElementById('ccsGradLinearBtn').classList.remove('active');
      document.getElementById('ccsGradAngleRow').style.display = 'none';
      applyTheme();
      updateGradientPreview();
    });

    document.getElementById('ccsGradStops2').addEventListener('click', () => {
      state.gradient.stops = 2;
      document.getElementById('ccsGradStops2').classList.add('active');
      document.getElementById('ccsGradStops3').classList.remove('active');
      document.getElementById('ccsGradStop3').style.display = 'none';
      applyTheme();
      updateGradientPreview();
    });

    document.getElementById('ccsGradStops3').addEventListener('click', () => {
      state.gradient.stops = 3;
      document.getElementById('ccsGradStops3').classList.add('active');
      document.getElementById('ccsGradStops2').classList.remove('active');
      document.getElementById('ccsGradStop3').style.display = 'block';
      applyTheme();
      updateGradientPreview();
    });

    const stop1 = document.getElementById('ccsGradStop1');
    const stop2 = document.getElementById('ccsGradStop2');
    const stop3 = document.getElementById('ccsGradStop3');

    stop1.addEventListener('input', (e) => { state.gradient.stop1 = e.target.value; applyTheme(); updateGradientPreview(); });
    stop2.addEventListener('input', (e) => { state.gradient.stop2 = e.target.value; applyTheme(); updateGradientPreview(); });
    stop3.addEventListener('input', (e) => { state.gradient.stop3 = e.target.value; applyTheme(); updateGradientPreview(); });

    document.getElementById('ccsApplyGradBrand').addEventListener('click', () => {
      applyTheme();
      showToast("Gradient brand stillariga ulandi!");
    });

    document.getElementById('ccsApplyGradNavbar').addEventListener('click', () => {
      pushUndoState();
      const gradCss = document.documentElement.style.getPropertyValue('--ccs-gradient');
      state.elementsConfig.navbar.color = gradCss;
      state.elementsConfig.navbar.isAuto = false;
      applyTheme();
      updateUI();
      showToast("Gradient Header (Navbar) ga qo'llandi!");
    });

    document.getElementById('ccsApplyGradFooter').addEventListener('click', () => {
      pushUndoState();
      const gradCss = document.documentElement.style.getPropertyValue('--ccs-gradient');
      state.elementsConfig.footer.color = gradCss;
      state.elementsConfig.footer.isAuto = false;
      applyTheme();
      updateUI();
      showToast("Gradient Footer ga qo'llandi!");
    });

    // Clear Recents
    document.getElementById('ccsClearRecentsBtn').addEventListener('click', () => {
      state.recents = [];
      saveState();
      updateUI();
      showToast("Tarix tozalandi");
    });

    // FOOTER: UNDO & RESET
    document.getElementById('ccsUndoBtn').addEventListener('click', () => {
      if (historyStack.length === 0) {
        showToast("Qaytarish uchun harakat mavjud emas");
        return;
      }
      const prevJson = historyStack.pop();
      try {
        const prev = JSON.parse(prevJson);
        state.mode = prev.mode;
        state.elementsConfig = prev.elementsConfig;
        state.gradient = prev.gradient;
        state.currentColorId = prev.currentColorId;
        applyTheme();
        updateUI();
        showToast("Oldingi holat qaytarildi ↩");
      } catch (e) {
        console.warn('CCS: Failed to undo:', e);
      }
    });

    document.getElementById('ccsResetBtn').addEventListener('click', () => {
      pushUndoState();
      state = JSON.parse(JSON.stringify(defaultState));
      applyTheme();
      updateUI();
      showToast("Barcha ranglar boshlang'ich holatga qaytarildi ↺");
    });
  }

  // 9. UPDATE UI STATE
  function updateUI() {
    const curr = colorIdMap.get(state.currentColorId) || allColors[0];
    const activeEl = state.activeElement;
    const elConfig = state.elementsConfig[activeEl];

    // Theme Mode active pill
    document.querySelectorAll('.ccs-mode-btn').forEach(btn => {
      btn.classList.toggle('active', btn.dataset.mode === state.mode);
    });

    // Target select
    const targetSelect = document.getElementById('ccsTargetSelect');
    if (targetSelect) targetSelect.value = activeEl;

    // Auto-sync status button (Always visible in target row)
    const autoSyncBtn = document.getElementById('ccsAutoSyncBtn');
    const autoSyncText = document.getElementById('ccsAutoSyncText');
    if (autoSyncBtn) {
      autoSyncBtn.style.display = 'flex';
      if (activeEl === 'primary') {
        autoSyncBtn.disabled = true;
        autoSyncBtn.style.opacity = '0.75';
        autoSyncBtn.style.cursor = 'default';
        autoSyncBtn.classList.add('is-auto');
        autoSyncText.textContent = "Asosiy";
        autoSyncBtn.title = "Primary element boshqa barcha elementlarni avtomatik boshqaradi";
      } else {
        autoSyncBtn.disabled = false;
        autoSyncBtn.style.opacity = '1';
        autoSyncBtn.style.cursor = 'pointer';
        autoSyncBtn.classList.toggle('is-auto', elConfig.isAuto);
        autoSyncText.textContent = elConfig.isAuto ? "Avto" : "Qo'lda";
        autoSyncBtn.title = elConfig.isAuto ? "Primary bilan avtomatik bog'langan" : "Primary uyg'unligiga qaytarish uchun bosing";
      }
    }

    // Swatch preview & meta
    const swatch = document.getElementById('ccsPreviewSwatch');
    if (swatch) {
      swatch.style.backgroundColor = curr.hex;
      swatch.textContent = getContrastTextColor(curr.hex) === '#FFFFFF' ? '✨' : '⭐';
      swatch.style.color = getContrastTextColor(curr.hex);
    }

    const idBadge = document.getElementById('ccsColorIdBadge');
    if (idBadge) idBadge.textContent = `№ ${curr.id} / 3240`;

    const catBadge = document.getElementById('ccsColorCatBadge');
    if (catBadge) catBadge.textContent = curr.category;

    const hexText = document.getElementById('ccsColorHexText');
    if (hexText) hexText.textContent = curr.hex;

    const hslText = document.getElementById('ccsColorHslText');
    if (hslText) hslText.textContent = curr.hslStr;

    // Favorite button star
    const favBtn = document.getElementById('ccsFavBtn');
    if (favBtn) {
      favBtn.classList.toggle('active-fav', state.favorites.includes(curr.id));
    }

    // Category select
    const catSelect = document.getElementById('ccsCategorySelect');
    if (catSelect && catSelect.value !== curr.category) {
      catSelect.value = curr.category;
    }

    // Sliders
    const satRange = document.getElementById('ccsSatRange');
    const briRange = document.getElementById('ccsBriRange');
    if (satRange) satRange.value = curr.hsl.s;
    if (briRange) briRange.value = curr.hsl.l;
    const satVal = document.getElementById('ccsSatVal');
    const briVal = document.getElementById('ccsBriVal');
    if (satVal) satVal.textContent = `${curr.hsl.s}%`;
    if (briVal) briVal.textContent = `${curr.hsl.l}%`;

    // Code Tab Inputs
    const hexInput = document.getElementById('ccsHexInput');
    const rgbInput = document.getElementById('ccsRgbInput');
    const nativePicker = document.getElementById('ccsNativePicker');
    if (hexInput) hexInput.value = curr.hex;
    if (rgbInput) rgbInput.value = `${curr.rgb.r}, ${curr.rgb.g}, ${curr.rgb.b}`;
    if (nativePicker) nativePicker.value = curr.hex;

    renderSwatchesGrid(curr.category);
    updateGradientPreview();
    renderSavedLists();
  }

  function renderSwatchesGrid(categoryName) {
    const grid = document.getElementById('ccsSwatchesGrid');
    if (!grid) return;
    grid.innerHTML = '';

    const catColors = allColors.filter(c => c.category === categoryName);
    catColors.forEach(c => {
      const dot = document.createElement('div');
      dot.className = `ccs-mini-swatch ${c.id === state.currentColorId ? 'active' : ''}`;
      dot.style.backgroundColor = c.hex;
      dot.title = `№ ${c.id} - ${c.hex}`;
      dot.addEventListener('click', () => selectColor(c.id));
      grid.appendChild(dot);
    });
  }

  function updateGradientPreview() {
    const preview = document.getElementById('ccsGradPreview');
    if (!preview) return;
    const grad = state.gradient;
    let cssGrad = '';
    if (grad.type === 'linear') {
      cssGrad = grad.stops === 3 
        ? `linear-gradient(${grad.angle}deg, ${grad.stop1} 0%, ${grad.stop2} 50%, ${grad.stop3} 100%)`
        : `linear-gradient(${grad.angle}deg, ${grad.stop1} 0%, ${grad.stop2} 100%)`;
    } else {
      cssGrad = grad.stops === 3
        ? `radial-gradient(circle, ${grad.stop1} 0%, ${grad.stop2} 50%, ${grad.stop3} 100%)`
        : `radial-gradient(circle, ${grad.stop1} 0%, ${grad.stop2} 100%)`;
    }
    preview.style.background = cssGrad;
  }

  function renderSavedLists() {
    const favList = document.getElementById('ccsFavList');
    const favCount = document.getElementById('ccsFavCount');
    if (favList && favCount) {
      favCount.textContent = `${state.favorites.length} ta`;
      favList.innerHTML = '';
      if (state.favorites.length === 0) {
        favList.innerHTML = `<div class="ccs-empty-state">Hozircha saqlangan ranglar yo'q.<br>Ranglar tabidagi ⭐ belgisini bosing.</div>`;
      } else {
        state.favorites.forEach(id => {
          const c = colorIdMap.get(id);
          if (!c) return;
          const item = document.createElement('div');
          item.className = 'ccs-saved-item';
          item.innerHTML = `
            <div class="ccs-saved-dot" style="background-color: ${c.hex}"></div>
            <div class="ccs-saved-info">№ ${c.id} • ${c.category} (${c.hex})</div>
            <button style="border: none; background: none; color: #94A3B8; cursor: pointer; padding: 2px 6px;">✕</button>
          `;
          item.querySelector('.ccs-saved-info').addEventListener('click', () => selectColor(c.id));
          item.querySelector('.ccs-saved-dot').addEventListener('click', () => selectColor(c.id));
          item.querySelector('button').addEventListener('click', (e) => {
            e.stopPropagation();
            state.favorites = state.favorites.filter(x => x !== id);
            saveState();
            renderSavedLists();
          });
          favList.appendChild(item);
        });
      }
    }

    const recentsList = document.getElementById('ccsRecentsList');
    if (recentsList) {
      recentsList.innerHTML = '';
      if (state.recents.length === 0) {
        recentsList.innerHTML = `<div class="ccs-empty-state">Hali ranglar tanlanmadi.</div>`;
      } else {
        state.recents.forEach(id => {
          const c = colorIdMap.get(id);
          if (!c) return;
          const item = document.createElement('div');
          item.className = 'ccs-saved-item';
          item.innerHTML = `
            <div class="ccs-saved-dot" style="background-color: ${c.hex}"></div>
            <div class="ccs-saved-info">№ ${c.id} • ${c.category} (${c.hex})</div>
          `;
          item.addEventListener('click', () => selectColor(c.id));
          recentsList.appendChild(item);
        });
      }
    }
  }

  function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  // 10. INITIALIZATION
  function init() {
    applyTheme();
    createUI();
    updateUI();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

  // 11. EXPOSE PUBLIC API FOR TESTING & INTEGRATION
  window.ColorControlSystem = {
    allColors,
    CATEGORIES,
    ELEMENTS,
    getState: () => JSON.parse(JSON.stringify(state)),
    selectColor,
    stepBy,
    setMode: (mode) => {
      pushUndoState();
      state.mode = mode;
      applyTheme();
      updateUI();
    },
    reset: () => {
      state = JSON.parse(JSON.stringify(defaultState));
      applyTheme();
      updateUI();
    },
    undo: () => {
      if (historyStack.length > 0) {
        state = JSON.parse(historyStack.pop());
        applyTheme();
        updateUI();
      }
    },
    openPanel: () => {
      const p = document.getElementById('ccsFloatingPanel');
      const t = document.getElementById('ccsFloatingTrigger');
      if (p) p.classList.add('open');
      if (t) t.classList.add('active');
    },
    closePanel: () => {
      const p = document.getElementById('ccsFloatingPanel');
      const t = document.getElementById('ccsFloatingTrigger');
      if (p) p.classList.remove('open');
      if (t) t.classList.remove('active');
    }
  };

})();
