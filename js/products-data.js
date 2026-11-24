/**
 * XON SAROY — 12 ta asosiy mahsulotlar to'liq bazasi
 * Yangi zamonaviy dizayn: 4 ustunli studiya kartochkalari, toifa filtrlari va batafsil sahifa
 */

const PRODUCTS_DATA = [
  // 1. DOMINANT-SP (Shtukaturka)
  {
    id: "dominant-sp",
    name: "DOMINANT-SP",
    category: "shtukaturka",
    categoryLabel: "SHTUKATURKA",
    themeColor: "#E02424",
    weight: "25 kg",
    image: "assets/images/dominantsp.png?v=4",
    subtitle: "Mashinada surtiladigan shtukaturka",
    desc: "Dominant-SP — devor va shiftlarni mashina yordamida tez va tekis suvash uchun mo'ljallangan quruq qurilish aralashmasi. Katta hajmdagi ichki ishlar uchun ideal.",
    features: [
      "Mashinada surtish uchun",
      "Katta maydonlarda tez ishlash",
      "Tekis va silliq sirt"
    ],
    specs: {
      type: "Mashinada surtiladigan shtukaturka",
      category: "Shtukaturka",
      application: "Ichki ishlar",
      weight: "25 kg",
      waterRatio: { uz: "13 – 15 litr suv / 25 kg", ru: "13 – 15 л воды на 25 кг" },
      consumption: { uz: "9.5 – 10.5 kg/m² (10 mm qatlam)", ru: "9.5 – 10.5 кг/м² (слой 10 мм)" },
      dryingTime: { uz: "120 – 180 daqiqa", ru: "120 – 180 минут" }
    },
    title: { uz: "DOMINANT-SP (Mashina suvoq)", ru: "DOMINANT-SP (Штукатурка машинная)" },
    shortDesc: {
      uz: "Mashinada surtiladigan gipsli suvoq aralashmasi.",
      ru: "Штукатурная смесь машинного нанесения на гипсовой основе."
    }
  },

  // 2. ARMOR (Shtukaturka)
  {
    id: "armor",
    name: "ARMOR",
    category: "shtukaturka",
    categoryLabel: "SHTUKATURKA",
    themeColor: "#525B62",
    weight: "25 kg",
    image: "assets/images/armor.png?v=4",
    subtitle: "Armirlangan sement shtukaturka",
    desc: "Armor — bino fasadlari va nam xonalar uchun mo'ljallangan, armirlangan tolali sement asosli yuqori mustahkam quruq qurilish aralashmasi.",
    features: [
      "Armirlangan tolali mustahkam tarkib",
      "Fasad va nam xonalar uchun",
      "Muzlash va namlikka yuqori chidamlilik"
    ],
    specs: {
      type: "Armirlangan sement shtukaturka",
      category: "Shtukaturka",
      application: "Tashqi va ichki ishlar",
      weight: "25 kg",
      waterRatio: { uz: "5.0 – 6.0 litr suv / 25 kg", ru: "5.0 – 6.0 л воды на 25 кг" },
      consumption: { uz: "14 – 16 kg/m² (10 mm qatlam)", ru: "14 – 16 кг/м? (слой 10 мм)" },
      dryingTime: { uz: "24 soat", ru: "24 часа" }
    },
    title: { uz: "ARMOR (Armirlangan sement suvoq)", ru: "ARMOR (Армированная цементная штукатурка)" },
    shortDesc: {
      uz: "Fasad va ichki nam xonalar uchun mustahkam sement suvoq.",
      ru: "Высокопрочная армированная цементная штукатурка."
    }
  },

  // 3. SILK (Shpaklyovka)
  {
    id: "silk",
    name: "SILK",
    category: "shpaklyovka",
    categoryLabel: "SHPAKLYOVKA",
    themeColor: "#0284C7",
    weight: "20 kg",
    image: "assets/images/silk.png?v=4",
    subtitle: "Finish shpaklyovka",
    desc: "Silk — devor va shiftlarni yakuniy pardozlash, ipakdek silliq va qor-oppoq yuza hosil qilish uchun mo'ljallangan yuqori sifatli gipsli finish shpaklyovka.",
    features: [
      "Ipakdek silliq va oq yuza",
      "Oson surtiladi va silliqlanadi",
      "Yorilishlarga o'ta chidamli"
    ],
    specs: {
      type: "Finish shpaklyovka",
      category: "Shpaklyovka",
      application: "Ichki ishlar",
      weight: "20 kg",
      waterRatio: { uz: "12 – 14 litr suv / 20 kg", ru: "12 – 14 л воды на 20 кг" },
      consumption: { uz: "0.8 – 1.0 kg/m² (1 mm qatlam)", ru: "0.8 – 1.0 кг/м? (слой 1 мм)" },
      dryingTime: { uz: "120 – 150 daqiqa", ru: "120 – 150 минут" }
    },
    title: { uz: "SILK (Finish shpaklyovka)", ru: "SILK (Финишная шпаклевка)" },
    shortDesc: {
      uz: "Ipakdek silliq yakuniy gipsli finish shpaklyovka.",
      ru: "Высококачественная гипсовая финишная шпаклевка."
    }
  },

  // 4. SILK POLY (Shpaklyovka)
  {
    id: "silk-poly",
    name: "SILK POLY",
    category: "shpaklyovka",
    categoryLabel: "SHPAKLYOVKA",
    themeColor: "#8B5CF6",
    weight: "20 kg",
    image: "assets/images/silkpoly.png?v=4",
    subtitle: "Polimer finish shpaklyovka",
    desc: "Silk Poly — maxsus polimer qo'shimchalar bilan boyitilgan, yuqori yopishuvchanlikka ega elastik pardoz shpaklyovkasi.",
    features: [
      "Polimerli maxsus elastik tarkib",
      "Ultra yuqori adgeziya va yopishish",
      "Bo'yoq sarfini sezilarli tejaydi"
    ],
    specs: {
      type: "Polimer finish shpaklyovka",
      category: "Shpaklyovka",
      application: "Ichki ishlar",
      weight: "20 kg",
      waterRatio: { uz: "12 – 13 litr suv / 20 kg", ru: "12 – 13 л воды на 20 кг" },
      consumption: { uz: "0.7 – 0.9 kg/m² (1 mm qatlam)", ru: "0.7 – 0.9 кг/м? (слой 1 мм)" },
      dryingTime: { uz: "180 daqiqa", ru: "180 минут" }
    },
    title: { uz: "SILK POLY (Polimer finish shpaklyovka)", ru: "SILK POLY (Полимерная финишная шпаклевка)" },
    shortDesc: {
      uz: "Polimerli elastik yuqori sifatli pardoz shpaklyovkasi.",
      ru: "Полимерная финишная шпаклевка повышенной белизны."
    }
  },

  // 5. DOMINANT (Shtukaturka)
  {
    id: "dominant",
    name: "DOMINANT",
    category: "shtukaturka",
    categoryLabel: "SHTUKATURKA",
    themeColor: "#EA580C",
    weight: "25 kg",
    image: "assets/images/dominant.png?v=4",
    subtitle: "Universal gipsli suvoq",
    desc: "Dominant — qo'lda surtish uchun mo'ljallangan, gips asosli universal suvoq qorishmasi. Devorlardagi katta notekisliklarni bir qatlamda to'g'irlaydi.",
    features: [
      "Universal qo'lda suvoq",
      "Qalin qatlamda oson surtiladi",
      "Ekologik toza va nafas oluvchi"
    ],
    specs: {
      type: "Universal gipsli suvoq",
      category: "Shtukaturka",
      application: "Ichki ishlar",
      weight: "25 kg",
      waterRatio: { uz: "14 – 16 litr suv / 25 kg", ru: "14 – 16 л воды на 25 кг" },
      consumption: { uz: "8.5 – 9.5 kg/m² (10 mm qatlam)", ru: "8.5 – 9.5 кг/м? (слой 10 мм)" },
      dryingTime: { uz: "120 – 180 daqiqa", ru: "120 – 180 минут" }
    },
    title: { uz: "DOMINANT (Universal gips suvoq)", ru: "DOMINANT (Штукатурка гипсовая универсальная)" },
    shortDesc: {
      uz: "Qo'lda surtish uchun qulay universal gips suvoq.",
      ru: "Универсальная штукатурка ручного нанесения."
    }
  },

  // 6. GLATT 05 (Shpaklyovka)
  {
    id: "glatt-05",
    name: "GLATT 05",
    category: "shpaklyovka",
    categoryLabel: "SHPAKLYOVKA",
    themeColor: "#4F46E5",
    weight: "20 kg",
    image: "assets/images/glatt05.png?v=4",
    subtitle: "Gipsli pardoz shpaklyovka",
    desc: "Glatt 05 — 0.5 mm gacha o'ta nozik qatlamda surtiladigan, devorlarni yakuniy sifatli bo'yash uchun tayyorlovchi gipsli pardoz shpaklyovkasi.",
    features: [
      "0.5 mm o'ta nozik qatlam",
      "Yaltiroq va oyna kabi silliq yuza",
      "Qum va g'adir-budurliksiz"
    ],
    specs: {
      type: "Gipsli pardoz shpaklyovka",
      category: "Shpaklyovka",
      application: "Ichki ishlar",
      weight: "20 kg",
      waterRatio: { uz: "12 – 14 litr suv / 20 kg", ru: "12 – 14 л воды на 20 кг" },
      consumption: { uz: "0.6 – 0.8 kg/m² (0.5 mm qatlam)", ru: "0.6 – 0.8 кг/м? (слой 0.5 мм)" },
      dryingTime: { uz: "120 daqiqa", ru: "120 минут" }
    },
    title: { uz: "GLATT 05 (Pardoz shpaklyovka)", ru: "GLATT 05 (Шпаклевка финишная тонкослойная)" },
    shortDesc: {
      uz: "O'ta yupqa 0.5 mm pardoz shpaklyovkasi.",
      ru: "Тонкослойная финишная шпаклевка 0.5 мм."
    }
  },

  // 7. COVER (Shpaklyovka)
  {
    id: "cover",
    name: "COVER",
    category: "shpaklyovka",
    categoryLabel: "SHPAKLYOVKA",
    themeColor: "#16A34A",
    weight: "25 kg",
    image: "assets/images/cover.png?v=4",
    subtitle: "Fasad shpaklyovka",
    desc: "Cover — bino tashqi fasadlari va nam muhitlar uchun oq sement asosida ishlab chiqarilgan, ob-havoga o'ta chidamli fasad shpaklyovkasi.",
    features: [
      "Muzlash va quyosh nurlariga chidamli",
      "Oq sement asosli mustahkam baza",
      "Fasad to'ri bilan mustahkam bog'lanish"
    ],
    specs: {
      type: "Fasad shpaklyovka",
      category: "Shpaklyovka",
      application: "Tashqi va fasad ishlari",
      weight: "25 kg",
      waterRatio: { uz: "8.0 – 9.0 litr suv / 25 kg", ru: "8.0 – 9.0 л воды на 25 кг" },
      consumption: { uz: "1.2 – 1.5 kg/m² (1 mm qatlam)", ru: "1.2 – 1.5 кг/м? (слой 1 мм)" },
      dryingTime: { uz: "24 soat", ru: "24 часа" }
    },
    title: { uz: "COVER (Fasad shpaklyovka)", ru: "COVER (Фасадная шпаклевка белая)" },
    shortDesc: {
      uz: "Oq sement asosli tashqi fasad shpaklyovkasi.",
      ru: "Шпаклевка фасадная на белом цементе."
    }
  },

  // 8. FleXon (Shpaklyovka)
  {
    id: "flexon",
    name: "FLEXON",
    category: "shpaklyovka",
    categoryLabel: "SHPAKLYOVKA",
    themeColor: "#E11D48",
    weight: "25 kg",
    image: "assets/images/flexon.png?v=4",
    subtitle: "Gipsokarton choklari uchun aralashma",
    desc: "FleXon — gipsokarton plitalari (GKL) choklarini mustahkamlash, yoriqlar hosil bo'lishining oldini olish uchun maxsus elastik qorishma.",
    features: [
      "Choklarda yoriq qoldirmaydi",
      "Yuqori darajadagi elastiklik",
      "Armirlangan qog'oz va to'r bilan ideal birikish"
    ],
    specs: {
      type: "Chok to'ldiruvchi aralashma",
      category: "Shpaklyovka",
      application: "Gipsokarton choklari",
      weight: "25 kg",
      waterRatio: { uz: "13 – 15 litr suv / 25 kg", ru: "13 – 15 л воды на 25 кг" },
      consumption: { uz: "0.25 – 0.35 kg/chok metri", ru: "0.25 – 0.35 кг на погонный метр" },
      dryingTime: { uz: "120 daqiqa", ru: "120 минут" }
    },
    title: { uz: "FLEXON (Gipsokarton chok yelimi)", ru: "FLEXON (Шпаклевка для швов ГКЛ)" },
    shortDesc: {
      uz: "Gipsokarton choklarini mustahkamlash qorishmasi.",
      ru: "Высокопрочная смесь для заделки швов гипсокартона."
    }
  },

  // 9. INFINITY (Yelim)
  {
    id: "infinity",
    name: "INFINITY",
    category: "yelim",
    categoryLabel: "YELIM",
    themeColor: "#7C3AED",
    weight: "25 kg",
    image: "assets/images/infinity.png?v=4",
    subtitle: "Kuchaytirilgan kafel yelimi",
    desc: "Infinity — katta o'lchamli keramogranit, granit, kafel va tabiiy toshlar uchun mo'ljallangan C1TE klassidagi yuqori kuchaytirilgan plitka yelimi.",
    features: [
      "C1TE klassdagi kuchli yopishish",
      "Sirg'alib tushishga qarshi xususiyat",
      "Issiq pol tizimlariga 100% mos"
    ],
    specs: {
      type: "Kuchaytirilgan kafel yelimi",
      category: "Yelim",
      application: "Ichki va tashqi kafel ishlari",
      weight: "25 kg",
      waterRatio: { uz: "6.0 – 6.5 litr suv / 25 kg", ru: "6.0 – 6.5 л воды на 25 кг" },
      consumption: { uz: "3.5 – 5.0 kg/m²", ru: "3.5 – 5.0 кг/м?" },
      dryingTime: { uz: "Ochiq vaqt: 30 daqiqa, qotish: 24 soat", ru: "Открытое время: 30 мин, хождение: 24 ч" }
    },
    title: { uz: "INFINITY (Kafel yelimi C1TE)", ru: "INFINITY (Клей плиточный C1TE)" },
    shortDesc: {
      uz: "Keramogranit va issiq pollar uchun kuchaytirilgan yelim.",
      ru: "Усиленный плиточный клей C1TE для керамогранита."
    }
  },

  // 10. BlockFix (Yelim)
  {
    id: "blockfix",
    name: "BLOCKFIX",
    category: "yelim",
    categoryLabel: "YELIM",
    themeColor: "#475569",
    weight: "25 kg",
    image: "assets/images/blockfix.png?v=4",
    subtitle: "Gazoblok va penoblok yelimi",
    desc: "BlockFix — gazobeton va penobloklarni 2-3 mm li yupqa chok bilan terish uchun mo'ljallangan, sovuq o'tishini to'suvchi montaj yelimi.",
    features: [
      "Yupqa 2-3 mm chok hosil qiladi",
      "Issiqlik yo'qotilishini oldini oladi",
      "Mustahkam va tez qotuvchi"
    ],
    specs: {
      type: "Blok terish yelimi",
      category: "Yelim",
      application: "Gazoblok va penoblok",
      weight: "25 kg",
      waterRatio: { uz: "5.5 – 6.0 litr suv / 25 kg", ru: "5.5 – 6.0 л воды на 25 кг" },
      consumption: { uz: "20 – 25 kg/m³ devor", ru: "20 – 25 кг/м³ кладки" },
      dryingTime: { uz: "24 soat", ru: "24 часа" }
    },
    title: { uz: "BLOCKFIX (Gazoblok yelimi)", ru: "BLOCKFIX (Клей для газоблока)" },
    shortDesc: {
      uz: "Gazobeton bloklarni yupqa chok bilan terish yelimi.",
      ru: "Тонкошовный клей для газобетонных и пеноблоков."
    }
  },

  // 11. LEVEL (Pol)
  {
    id: "level",
    name: "LEVEL",
    category: "pol",
    categoryLabel: "POL",
    themeColor: "#D97706",
    weight: "25 kg",
    image: "assets/images/level.png?v=4",
    subtitle: "O'z-o'zidan tekislanuvchi quyma pol",
    desc: "Level — barcha turdagi pol qoplamalari (laminat, parket, kafel) ostiga ideal gorizontal tekis maydon yaratuvchi o'z-o'zidan yoyiluvchi quyma pol.",
    features: [
      "O'z-o'zidan ideal tekislanadi",
      "6-8 soatda ustida yurish mumkin",
      "Monolit mustahkam qatlam"
    ],
    specs: {
      type: "Quyma pol aralashmasi",
      category: "Pol",
      application: "Ichki pol ishlari",
      weight: "25 kg",
      waterRatio: { uz: "5.5 – 6.5 litr suv / 25 kg", ru: "5.5 – 6.5 л воды на 25 кг" },
      consumption: { uz: "1.5 – 1.7 kg/m² (1 mm qatlam)", ru: "1.5 – 1.7 кг/м? (слой 1 мм)" },
      dryingTime: { uz: "6 – 8 soat (to'liq yuklama: 7 kun)", ru: "6 – 8 часов (полная нагрузка: 7 дней)" }
    },
    title: { uz: "LEVEL (Quyma pol)", ru: "LEVEL (Наливной пол самонивелирующийся)" },
    shortDesc: {
      uz: "O'z-o'zidan silliq yoyiluvchi quyma pol aralashmasi.",
      ru: "Самонивелирующийся наливной пол быстрого твердения."
    }
  },

  // 12. HYDRO (Gidroizolyatsiya)
  {
    id: "hydro",
    name: "HYDRO",
    category: "gidroizolyatsiya",
    categoryLabel: "GIDROIZOLYATSIYA",
    themeColor: "#0D9488",
    weight: "25 kg",
    image: "assets/images/hydro255.png?v=4",
    subtitle: "Gidroizolyatsiya aralashmasi",
    desc: "Hydro — basseyn, hammom, podval va poydevorlarni suv sizib chiqishi va namlikdan 100% himoya qiluvchi polimer-sementli elastik gidroizolyatsiya.",
    features: [
      "100% suv o'tkazmaslik kafolati",
      "Elastik va suv bosimiga bardoshli",
      "Basseyn va nam xonalar uchun ideal"
    ],
    specs: {
      type: "Elastik gidroizolyatsiya",
      category: "Gidroizolyatsiya",
      application: "Basseyn, hammom, rezervuarlar",
      weight: "25 kg",
      waterRatio: { uz: "6.0 – 6.5 litr suv / 25 kg", ru: "6.0 – 6.5 л воды на 25 кг" },
      consumption: { uz: "2.5 – 3.5 kg/m² (2 qatlamda)", ru: "2.5 – 3.5 кг/м? (в 2 слоя)" },
      dryingTime: { uz: "Qatlamlar oralig'i: 4 soat, to'liq: 48 soat", ru: "Между слоями: 4 ч, полное: 48 ч" }
    },
    title: { uz: "HYDRO (Elastik gidroizolyatsiya)", ru: "HYDRO (Гидроизоляция эластичная)" },
    shortDesc: {
      uz: "Basseyn va nam joylar uchun polimer-sementli gidroizolyatsiya.",
      ru: "Эластичная полимерцементная гидроизоляция."
    }
  }
];

// Orqaga muvofiqlik uchun (legacy id aliaslar)
PRODUCTS_DATA.forEach(p => {
  p.defaultWeightKg = parseInt(p.weight) || 25;
  if (!p.title) p.title = { uz: p.name, ru: p.name };
  if (!p.shortDesc) p.shortDesc = { uz: p.subtitle, ru: p.subtitle };
  if (!p.fullDesc) p.fullDesc = { uz: p.desc, ru: p.desc };
  if (!p.application) p.application = { uz: p.specs.application, ru: p.specs.application };
  if (p.id === 'infinity') p.legacyId = 'infinity-adhesive';
  if (p.id === 'silk-poly') p.legacyId = 'silk-poly-20';
  if (p.id === 'silk') p.legacyId = 'silk-finish';
  if (p.id === 'cover') p.legacyId = 'cover-facade';
  if (p.id === 'dominant') p.legacyId = 'dominant-universal';
  if (p.id === 'armor') p.legacyId = 'armor-facade';
  if (p.id === 'hydro') p.legacyId = 'hydro-255';
  if (p.id === 'level') p.legacyId = 'level-floor';
});
