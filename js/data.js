/**
 * XON SAROY - 11 ta mahsulotning to'liq ma'lumotlar bazasi (UZ / RU)
 * XON SAROY INFINITY 3D qopi dizayniga 100% mos va bir xil mockup arxitekturasi
 */

const PRODUCTS_DATA = [
  // 1. INFINITY — Binafsha (Purple) tasma / УСИЛЕННЫЙ КЛЕЙ ПЛИТОЧНЫЙ
  {
    id: "infinity-adhesive",
    slug: "infinity",
    name: "INFINITY",
    category: "adhesive",
    image: "assets/images/infinity.jpg",
    ruSubtitle: "УСИЛЕННЫЙ КЛЕЙ ПЛИТОЧНЫЙ",
    uzSubtitle: "KUCHAYTIRILGAN KAFEL YELIMI C1TE",
    ribbonColor: "#7C3AED",
    ribbonColorDark: "#5B21B6",
    glowClass: "glow-purple",
    thumbnailType: "tile",
    weight: "25 kg",
    defaultWeightKg: 25,
    badge: {
      uz: "C1TE Kuchaytirilgan",
      ru: "Усиленный C1TE"
    },
    categoryIndicator: {
      type: "yelim",
      labelUz: "KAFEL YELIMI",
      labelRu: "ПЛИТОЧНЫЙ КЛЕЙ",
      color: "#7C3AED",
      bgColor: "#F5F3FF",
      borderColor: "#DDD6FE"
    },
    colorScheme: {
      primary: "#7C3AED",
      accent: "#5B21B6",
      contrast: "#0F172A",
      text: "#FFFFFF"
    },
    title: {
      uz: "INFINITY (Kuchaytirilgan Kafel Yelimi C1TE)",
      ru: "INFINITY (Усиленный клей плиточный C1TE)"
    },
    shortDesc: {
      uz: "Katta o'lchamli kafel, granit, marmar va issiq pollar uchun yuqori adgeziyali kafel yelimi.",
      ru: "Высокоадгезивный клей для крупноформатного керамогранита, кафеля, мрамора и теплых полов."
    },
    fullDesc: {
      uz: "INFINITY — Turkiya formulasi bo'yicha tayyorlangan kuchaytirilgan plitka yelimi (C1TE sinfi). Sirg'alib tushishga qarshi xususiyatga (T) va uzoqroq ochiq vaqtga (E) ega. Katta o'lchamli og'ir kafel va keramika plitkalarini devor va polga mustahkam qotiradi. Issiq pol tizimlariga to'liq mos keladi.",
      ru: "INFINITY — профессиональный усиленный плиточный клей повышенной фиксации (класс C1TE). Обладает нулевым вертикальным сползанием и увеличенным открытым временем. Идеален для керамогранита больших форматов и систем теплых полов."
    },
    application: {
      uz: "Ichki va tashqi maydonlar, terassa, basseyn atroflari va issiq pollar.",
      ru: "Внутренняя и наружная облицовка, теплые полы, террасы, балконы."
    },
    specs: {
      waterRatio: {
        uz: "2.3 – 2.6 litr suv / 10 kg qorishma",
        ru: "2.3 – 2.6 л воды на 10 кг смеси"
      },
      consumption: {
        uz: "3.5 – 5.0 kg/m² (tishli spatel o'lchamiga ko'ra)",
        ru: "3.5 – 5.0 кг/м² (в зависимости от размера зубьев шпателя)"
      },
      dryingTime: {
        uz: "Ochiq vaqt: 30 daqiqa (yurish mumkin: 24 soat)",
        ru: "Открытое время: 30 мин (хождение через 24 ч)"
      },
      layerThickness: {
        uz: "3.0 – 10.0 mm",
        ru: "3.0 – 10.0 мм"
      },
      workTemp: "+5°C dan +30°C gacha",
      shelfLife: {
        uz: "12 oy",
        ru: "12 месяцев"
      },
      standard: "GOST R 56387-2018 / EN 12004 (C1TE)"
    }
  },

  // 2. BlockFix — To'q kulrang (Dark Grey) tasma / КЛЕЙ ДЛЯ ГАЗОБЕТОНА И ПЕНОБЛОКОВ
  {
    id: "blockfix",
    slug: "blockfix",
    name: "BlockFix",
    category: "adhesive",
    image: "assets/images/blockfix.jpg",
    ruSubtitle: "КЛЕЙ ДЛЯ ГАЗОБЕТОНА И ПЕНОБЛОКОВ",
    uzSubtitle: "GAZOBETON VA PENOBLOK YELIMI",
    ribbonColor: "#4B5563",
    ribbonColorDark: "#1F2937",
    glowClass: "glow-darkgrey",
    thumbnailType: "gasblock",
    weight: "25 kg",
    defaultWeightKg: 25,
    badge: {
      uz: "Gazobeton Yelimi",
      ru: "Для газоблока"
    },
    categoryIndicator: {
      type: "yelim",
      labelUz: "BLOK YELIMI",
      labelRu: "КЛЕЙ ДЛЯ БЛОКОВ",
      color: "#4B5563",
      bgColor: "#F3F4F6",
      borderColor: "#D1D5DB"
    },
    colorScheme: {
      primary: "#4B5563",
      accent: "#1F2937",
      contrast: "#0F172A",
      text: "#FFFFFF"
    },
    title: {
      uz: "BlockFix (Gazobeton va Penoblok Yelimi)",
      ru: "BlockFix (Монтажный клей для газобетона и пеноблока)"
    },
    shortDesc: {
      uz: "Gazobeton va ko'pikli bloklarni 2-3 mm nozik chok bilan terish uchun issiqlikni saqlovchi montaj yelimi.",
      ru: "Теплоизоляционный клей для тонкошовной кладки блоков из ячеистого бетона (газоблока, пеноблока)."
    },
    fullDesc: {
      uz: "BlockFix — gazoblok va penobloklarni terishda sovuqlik ko'priklari hosil bo'lishining oldini oluvchi yupqa qatlamli (2-3 mm) montaj yelimi. Yuqori yopishish quvvatiga ega, binoning issiqlik izolyatsiyasini 30% gacha oshiradi va qorishma sarfini keskin tejaydi.",
      ru: "BlockFix — клей для кладки газобетонных блоков с толщиной шва всего 2-3 мм. Препятствует образованию «мостиков холода», сохраняя тепло в доме. Высокая прочность сцепления исключает смещение блоков при монтаже."
    },
    application: {
      uz: "Gazobeton, penobeton, polistirolbeton bloklarini terish.",
      ru: "Кладка стен и перегородок из газобетонных и пеноблоков."
    },
    specs: {
      waterRatio: {
        uz: "2.2 – 2.5 litr suv / 10 kg qorishma",
        ru: "2.2 – 2.5 л воды на 10 кг смеси"
      },
      consumption: {
        uz: "20 – 25 kg/m³ blok uchun (qatlam 2-3 mm)",
        ru: "20 – 25 кг на 1 м³ блоков (слой 2-3 мм)"
      },
      dryingTime: {
        uz: "Tuzatish vaqti: 15 daqiqa (qotish: 24 soat)",
        ru: "Корректировка: 15 минут (схватывание: 24 ч)"
      },
      layerThickness: {
        uz: "2.0 – 5.0 mm",
        ru: "2.0 – 5.0 мм"
      },
      workTemp: "+5°C dan +30°C gacha",
      shelfLife: {
        uz: "12 oy",
        ru: "12 месяцев"
      },
      standard: "GOST 31357-2007"
    }
  },

  // 3. SILK POLY 20 — Havorang/Ko'k (Cyan/Blue) tasma / САТИНОВАЯ ГИПСОВАЯ ШПАКЛЕВКА
  {
    id: "silk-poly-20",
    slug: "silk-poly-20",
    name: "SILK POLY 20",
    category: "putty",
    image: "assets/images/silkpoly.jpg",
    ruSubtitle: "САТИНОВАЯ ГИПСОВАЯ ШПАКЛЕВКА",
    uzSubtitle: "SATIN GIPSLI PARDOZ SHPAKLYOVKA",
    ribbonColor: "#0284C7",
    ribbonColorDark: "#0369A1",
    glowClass: "glow-cyan",
    thumbnailType: "satin_spatula",
    weight: "20 kg / 25 kg",
    defaultWeightKg: 25,
    badge: {
      uz: "Premium Satin",
      ru: "Премиум Сатин"
    },
    categoryIndicator: {
      type: "gips",
      labelUz: "GIPSLI SHPAKLYOVKA",
      labelRu: "ГИПСОВАЯ ШПАКЛЕВКА",
      color: "#0284C7",
      bgColor: "#F0F9FF",
      borderColor: "#BAE6FD"
    },
    colorScheme: {
      primary: "#0284C7",
      accent: "#0369A1",
      contrast: "#0F172A",
      text: "#FFFFFF"
    },
    title: {
      uz: "SILK POLY 20 / SILK (Satin Gips)",
      ru: "SILK POLY 20 / SILK (Сатингипс полимерный)"
    },
    shortDesc: {
      uz: "Ichki devor va shiftlarni silliqlash uchun yuqori oqlik darajasiga ega polimerli satin gipsli pardoz shpaklyovkasi.",
      ru: "Высокобелая полимерная гипсовая финишная шпаклевка для идеального выглаживания внутренних стен и потолков."
    },
    fullDesc: {
      uz: "XON SAROY SILK POLY 20 — Turkiya texnologiyasi bo'yicha ishlab chiqarilgan, polimer qo'shimchalar bilan boyitilgan nozik donador satin gips. Bo'yoq va gulqog'oz (oboy) tagiga mukammal, oyna kabi silliq va oq yuza yaratadi. Yengil surtiladi, silliqlashda changlanmaydi va yorilmaydi.",
      ru: "XON SAROY SILK POLY 20 — высококачественная финишная сатиновая шпаклевка на гипсовой основе с модифицирующими полимерными добавками. Создает зеркально гладкую, шелковистую белоснежную поверхность под покраску и обои. Легко наносится и шлифуется, не дает усадки и трещин."
    },
    application: {
      uz: "Barcha turdagi beton, gipsokarton, sement va gips suvoq qilingan quruq ichki xonalarda.",
      ru: "Для сухих внутренних помещений по бетонным, гипсокартонным, цементным и гипсовым поверхностям."
    },
    specs: {
      waterRatio: {
        uz: "6.5 – 7.0 litr suv / 10 kg qorishma",
        ru: "6.5 – 7.0 л воды на 10 кг смеси"
      },
      consumption: {
        uz: "0.9 – 1.1 kg/m² (1 mm qalinlikda)",
        ru: "0.9 – 1.1 кг/м² (при толщине 1 мм)"
      },
      dryingTime: {
        uz: "100 – 120 daqiqa (to'liq qotish: 24 soat)",
        ru: "100 – 120 минут (полное высыхание: 24 часа)"
      },
      layerThickness: {
        uz: "0.2 – 2.0 mm",
        ru: "0.2 – 2.0 мм"
      },
      workTemp: "+5°C dan +30°C gacha",
      shelfLife: {
        uz: "12 oy quruq joyda, taglik ustida",
        ru: "12 месяцев в сухом месте на поддонах"
      },
      standard: "GOST 31387-2008 / TSE EN 13279-1"
    }
  },

  // 4. GLATT 05 — Och ko'k (Light Blue) tasma / ГИПСОВАЯ ФИНИШНАЯ ШПАКЛЕВКА
  {
    id: "glatt-05",
    slug: "glatt-05",
    name: "GLATT 05",
    category: "putty",
    image: "assets/images/glatt05.jpg",
    ruSubtitle: "ГИПСОВАЯ ФИНИШНАЯ ШПАКЛЕВКА",
    uzSubtitle: "GIPSLI PARDOZ SHPAKLYOVKA",
    ribbonColor: "#38BDF8",
    ribbonColorDark: "#0284C7",
    glowClass: "glow-lightblue",
    thumbnailType: "finish_spatula",
    weight: "25 kg",
    defaultWeightKg: 25,
    badge: {
      uz: "Finish Shpaklyovka",
      ru: "Финишная"
    },
    categoryIndicator: {
      type: "gips",
      labelUz: "GIPSLI PARDOZ",
      labelRu: "ГИПСОВЫЙ ФИНИШ",
      color: "#0284C7",
      bgColor: "#F0F9FF",
      borderColor: "#BAE6FD"
    },
    colorScheme: {
      primary: "#0284C7",
      accent: "#38BDF8",
      contrast: "#0F172A",
      text: "#FFFFFF"
    },
    title: {
      uz: "GLATT 05 (Gipsli Pardoz Shpaklyovkasi)",
      ru: "GLATT 05 (Гипсовая финишная шпаклевка)"
    },
    shortDesc: {
      uz: "Ichki yuzalarni tekislash va bo'yashga tayyorlash uchun mo'ljallangan nozik gipsli shpaklyovka.",
      ru: "Тонкослойная финишная гипсовая шпаклевка для идеальной подготовки стен под высококачественную окраску."
    },
    fullDesc: {
      uz: "GLATT 05 — devor va shiftlarni yakuniy pardozlash uchun yuqori darajada egiluvchan va silliqlanuvchi qorishma. Tarkibidagi maxsus mikro-tolalar tufayli yuzada mikroyoriqlar paydo bo'lishining oldini oladi. Tejamkor va oson surtiladi.",
      ru: "GLATT 05 — эластичная и легко поддающаяся шлифовке сухая смесь для чистовой отделки. Благодаря микроволокнам и пластификаторам предотвращает появление микротрещин, обеспечивает ровную белоснежную базу."
    },
    application: {
      uz: "Ichki xonalar: gipsokarton choklari va tekislangan devorlar.",
      ru: "Внутренние помещения: стыки гипсокартона, оштукатуренные стены и потолки."
    },
    specs: {
      waterRatio: {
        uz: "6.0 – 6.5 litr suv / 10 kg qorishma",
        ru: "6.0 – 6.5 л воды на 10 кг смеси"
      },
      consumption: {
        uz: "1.0 – 1.2 kg/m² (1 mm qalinlikda)",
        ru: "1.0 – 1.2 кг/м² (при толщине 1 мм)"
      },
      dryingTime: {
        uz: "90 – 120 daqiqa",
        ru: "90 – 120 минут"
      },
      layerThickness: {
        uz: "0.5 – 3.0 mm",
        ru: "0.5 – 3.0 мм"
      },
      workTemp: "+5°C dan +30°C gacha",
      shelfLife: {
        uz: "12 oy",
        ru: "12 месяцев"
      },
      standard: "GOST 31387-2008"
    }
  },

  // 5. Cover — Yashil (Green) tasma / ФАСАДНАЯ ШПАКЛЕВКА НА ЦЕМЕНТНОЙ ОСНОВЕ
  {
    id: "cover-facade",
    slug: "cover",
    name: "COVER",
    category: "putty",
    image: "assets/images/cover.jpg",
    ruSubtitle: "ФАСАДНАЯ ШПАКЛЕВКА НА ЦЕМЕНТНОЙ ОСНОВЕ",
    uzSubtitle: "SEMENT ASOSLI FASAD SHPAKLYOVKA",
    ribbonColor: "#16A34A",
    ribbonColorDark: "#15803D",
    glowClass: "glow-green",
    thumbnailType: "facade_trowel",
    weight: "20 kg",
    defaultWeightKg: 20,
    badge: {
      uz: "Fasad Shpaklyovka",
      ru: "Фасадная"
    },
    categoryIndicator: {
      type: "sement",
      labelUz: "SEMENTLI FASAD",
      labelRu: "ЦЕМЕНТНЫЙ ФАСАД",
      color: "#16A34A",
      bgColor: "#F0FDF4",
      borderColor: "#BBF7D0"
    },
    colorScheme: {
      primary: "#16A34A",
      accent: "#15803D",
      contrast: "#0F172A",
      text: "#FFFFFF"
    },
    title: {
      uz: "COVER (Sementli Fasad Shpaklyovkasi)",
      ru: "COVER (Фасадная шпаклевка на цементной основе)"
    },
    shortDesc: {
      uz: "Bino fasadlari va nam xonalar uchun sovuqqa va namlikka chidamli oq sement asosli shpaklyovka.",
      ru: "Влаго- и морозостойкая белая цементная шпаклевка для фасадов зданий и влажных помещений."
    },
    fullDesc: {
      uz: "COVER — oq sement, gidrofob va polimer qo'shimchalardan tashkil topgan mustahkam fasad shpaklyovkasi. Yomg'ir, qor, quyosh nurlari va keskin harorat o'zgarishlariga bardoshli. Fasadlarni bo'yashdan oldin tekislash va mustahkamlash uchun ideal yechim.",
      ru: "COVER — высокопрочная фасадная шпаклевка на белом цементе со специальными гидрофобными модификаторами. Устойчива к осадкам, УФ-лучам и перепадам температур. Создает надежный защитный слой перед покраской."
    },
    application: {
      uz: "Tashqi fasadlar, bino sokollari, hammom, podval va yuqori namlikli xonalar.",
      ru: "Фасады зданий, цоколи, ванные комнаты, подвалы и влажные помещения."
    },
    specs: {
      waterRatio: {
        uz: "3.5 – 4.0 litr suv / 10 kg qorishma",
        ru: "3.5 – 4.0 л воды на 10 кг смеси"
      },
      consumption: {
        uz: "1.2 – 1.4 kg/m² (1 mm qalinlikda)",
        ru: "1.2 – 1.4 кг/м² (при толщине 1 мм)"
      },
      dryingTime: {
        uz: "180 – 240 daqiqa (to'liq qotish: 48 soat)",
        ru: "180 – 240 минут (полный набор прочности: 48 ч)"
      },
      layerThickness: {
        uz: "1.0 – 4.0 mm",
        ru: "1.0 – 4.0 мм"
      },
      workTemp: "+5°C dan +30°C gacha",
      shelfLife: {
        uz: "12 oy",
        ru: "12 месяцев"
      },
      standard: "GOST 31357-2007"
    }
  },

  // 6. FleXon — Pushti/Siyohrang (Pink/Magenta) tasma / ШПАКЛЕВКА ДЛЯ ШВОВ И ТРЕЩИН
  {
    id: "flexon",
    slug: "flexon",
    name: "FleXon",
    category: "putty",
    image: "assets/images/flexon.jpg",
    ruSubtitle: "ШПАКЛЕВКА ДЛЯ ШВОВ И ТРЕЩИН",
    uzSubtitle: "CHOK VA YORIQLAR UCHUN ELASTIK SHPAKLYOVKA",
    ribbonColor: "#DB2777",
    ribbonColorDark: "#9D174D",
    glowClass: "glow-magenta",
    thumbnailType: "joint_tape",
    weight: "20 kg",
    defaultWeightKg: 20,
    badge: {
      uz: "Chok va Lepka",
      ru: "Шовный клей-шпаклевка"
    },
    categoryIndicator: {
      type: "gips",
      labelUz: "CHOK SHPAKLYOVKA",
      labelRu: "ШОВНАЯ ШПАКЛЕВКА",
      color: "#DB2777",
      bgColor: "#FDF2F8",
      borderColor: "#FBCFE8"
    },
    colorScheme: {
      primary: "#DB2777",
      accent: "#9D174D",
      contrast: "#0F172A",
      text: "#FFFFFF"
    },
    title: {
      uz: "FleXon (Chok va Lepka Shpaklyovkasi)",
      ru: "FleXon (Шпаклевка для швов и трещин)"
    },
    shortDesc: {
      uz: "Gipsokarton choklarini armirlash lentasi bilan yopish va gips dekoratsiyalar (lepka) montaji uchun.",
      ru: "Специальная высокоэластичная шпаклевка для заделки швов ГКЛ с лентой и монтажа лепного декора."
    },
    fullDesc: {
      uz: "FleXon — yuqori adgeziyali polimer-gipsli maxsus aralashma. Gipsokarton (GKL/GVL) listlari tutashgan choklarni yopish, burchaklarni mustahkamlash va gips lepkalarini devorga ishonchli yopishtirish uchun ishlab chiqilgan. Elastikligi yuqori, deformatsiyalarga chidamli.",
      ru: "FleXon — эластичная высокоадгезивная смесь на основе гипса и полимеров. Предназначена для заделки швов гипсокартона с армирующей лентой, приклеивания гипсовой лепнины и карнизов. Не растрескивается."
    },
    application: {
      uz: "Gipsokarton listlari choklari, dekorativ karnizlar va gips elementlari.",
      ru: "Стыки листов гипсокартона, монтаж гипсового декора, карнизов и молдингов."
    },
    specs: {
      waterRatio: {
        uz: "5.5 – 6.0 litr suv / 10 kg qorishma",
        ru: "5.5 – 6.0 л воды на 10 кг смеси"
      },
      consumption: {
        uz: "0.3 – 0.5 kg/m (choklarni to'ldirishda)",
        ru: "0.3 – 0.5 кг/пог.м (заполнение швов)"
      },
      dryingTime: {
        uz: "60 – 90 daqiqa",
        ru: "60 – 90 минут"
      },
      layerThickness: {
        uz: "1.0 – 5.0 mm",
        ru: "1.0 – 5.0 мм"
      },
      workTemp: "+5°C dan +30°C gacha",
      shelfLife: {
        uz: "12 oy",
        ru: "12 месяцев"
      },
      standard: "GOST 31387-2008"
    }
  },

  // 7. DOMINANT — Qizil (Red) tasma / УНИВЕРСАЛЬНАЯ ГИПСОВАЯ ШТУКАТУРКА
  {
    id: "dominant-universal",
    slug: "dominant",
    name: "DOMINANT",
    category: "plaster",
    image: "assets/images/dominant.jpg",
    ruSubtitle: "УНИВЕРСАЛЬНАЯ ГИПСОВАЯ ШТУКАТУРКА",
    uzSubtitle: "UNIVERSAL GIPSLI SUVOQ ARALASHMASI",
    ribbonColor: "#DC2626",
    ribbonColorDark: "#991B1B",
    glowClass: "glow-red",
    thumbnailType: "hand_plaster",
    weight: "25 kg / 30 kg",
    defaultWeightKg: 25,
    badge: {
      uz: "Xit Mahsulot",
      ru: "Хит Продаж"
    },
    categoryIndicator: {
      type: "gips",
      labelUz: "GIPSLI SUVOQ",
      labelRu: "ГИПСОВАЯ ШТУКАТУРКА",
      color: "#DC2626",
      bgColor: "#FEF2F2",
      borderColor: "#FECACA"
    },
    colorScheme: {
      primary: "#DC2626",
      accent: "#991B1B",
      contrast: "#0F172A",
      text: "#FFFFFF"
    },
    title: {
      uz: "DOMINANT (Universal Gips Suvoq)",
      ru: "DOMINANT (Универсальная гипсовая штукатурка)"
    },
    shortDesc: {
      uz: "Qo'lda suvoq qilish uchun yengil, issiqlik va tovushni ushlab qoluvchi universal gipsli suvoq aralashmasi.",
      ru: "Легкая универсальная гипсовая штукатурка ручного нанесения с тепло- и звукоизолирующими свойствами."
    },
    fullDesc: {
      uz: "DOMINANT — ustalar tomonidan eng ko'p e'tirof etilgan universal gips suvoq. Tarkibida tabiiy perlit mavjud bo'lib, xonadagi namlik muvozanatini tabiiy tartibga soladi. Qalin qatlamda (50 mm gacha) ham bir martada oqmasdan va yorilmasdan surtiladi.",
      ru: "DOMINANT — флагманская гипсовая штукатурка с перлитом для ручного оштукатуривания стен и потолков. Обладает великолепной пластичностью, не требует дополнительного шпаклевания при глянцевании. Толщина слоя до 50 мм за один проход."
    },
    application: {
      uz: "G'isht, beton, gazobeton va barcha turdagi mustahkam ichki devorlar.",
      ru: "Кирпичные, бетонные основания, газоблок и пеноблок внутри помещений."
    },
    specs: {
      waterRatio: {
        uz: "6.0 – 6.5 litr suv / 10 kg qorishma",
        ru: "6.0 – 6.5 л воды на 10 кг смеси"
      },
      consumption: {
        uz: "8.5 – 9.5 kg/m² (10 mm qalinlikda)",
        ru: "8.5 – 9.5 кг/м² (при толщине 10 мм)"
      },
      dryingTime: {
        uz: "120 – 150 daqiqa (boshlang'ich qotish)",
        ru: "120 – 150 минут (начало схватывания)"
      },
      layerThickness: {
        uz: "5.0 – 50.0 mm",
        ru: "5.0 – 50.0 мм"
      },
      workTemp: "+5°C dan +30°C gacha",
      shelfLife: {
        uz: "12 oy",
        ru: "12 месяцев"
      },
      standard: "GOST 31377-2008 / TSE EN 13279-1"
    }
  },

  // 8. DOMINANT-SP — Olovrang/Zargaldoq (Orange) tasma / МАШИННАЯ ГИПСОВАЯ ШТУКАТУРКА
  {
    id: "dominant-sp",
    slug: "dominant-sp",
    name: "DOMINANT-SP",
    category: "plaster",
    image: "assets/images/dominantsp.jpg",
    ruSubtitle: "МАШИННАЯ ГИПСОВАЯ ШТУКАТУРКА",
    uzSubtitle: "MASHINADA SURTILUVCHI GIPSLI SUVOQ",
    ribbonColor: "#EA580C",
    ribbonColorDark: "#C2410C",
    glowClass: "glow-orange",
    thumbnailType: "machine_plaster",
    weight: "30 kg",
    defaultWeightKg: 30,
    badge: {
      uz: "Mashina Usuli",
      ru: "Машинная"
    },
    categoryIndicator: {
      type: "gips",
      labelUz: "MASHINA SUVOQI",
      labelRu: "МАШИННАЯ ШТУКАТУРКА",
      color: "#EA580C",
      bgColor: "#FFF7ED",
      borderColor: "#FED7AA"
    },
    colorScheme: {
      primary: "#EA580C",
      accent: "#C2410C",
      contrast: "#0F172A",
      text: "#FFFFFF"
    },
    title: {
      uz: "DOMINANT-SP (Mashinada Surtiluvchi Gips Suvoq)",
      ru: "DOMINANT-SP (Машинная гипсовая штукатурка)"
    },
    shortDesc: {
      uz: "Shpaturka apparatlari (PFT, Kaleta) orqali yirik ob'ektlarda tez va unumli suvoq qilish uchun.",
      ru: "Для механизированного нанесения штукатурными станциями на крупных строительных объектах."
    },
    fullDesc: {
      uz: "DOMINANT-SP — mexanizatsiyalashgan usulda suvoq apparatlari (PFT, Putzmeister, Kaleta) orqali surtish uchun maxsus tayyorlangan gipsli aralashma. Uzoqroq ushlanish vaqti (o'tish vaqti) ustalarga katta maydonlarni tez va charchoqsiz tekislash imkonini beradi.",
      ru: "DOMINANT-SP — сухая смесь машинного нанесения. Обладает оптимизированным временем схватывания для обработки больших площадей штукатурными станциями. Обеспечивает высокую скорость и экономичность работ на масштабных объектах."
    },
    application: {
      uz: "Katta hajmli turar-joy majmualari, biznes markazlar va xonadonlar.",
      ru: "Крупные жилые комплексы, коммерческая недвижимость, масштабные ремонты."
    },
    specs: {
      waterRatio: {
        uz: "5.5 – 6.0 litr suv / 10 kg qorishma",
        ru: "5.5 – 6.0 л воды на 10 кг смеси"
      },
      consumption: {
        uz: "8.0 – 9.0 kg/m² (10 mm qalinlikda)",
        ru: "8.0 – 9.0 кг/м² (при толщине 10 мм)"
      },
      dryingTime: {
        uz: "150 – 180 daqiqa",
        ru: "150 – 180 минут"
      },
      layerThickness: {
        uz: "5.0 – 40.0 mm",
        ru: "5.0 – 40.0 мм"
      },
      workTemp: "+5°C dan +30°C gacha",
      shelfLife: {
        uz: "12 oy",
        ru: "12 месяцев"
      },
      standard: "GOST 31377-2008"
    }
  },

  // 9. ARMOR — Jigarrang/Qorong'i ko'k tasma / ЦЕМЕНТНАЯ ФАСАДНАЯ ШТУКАТУРКА
  {
    id: "armor-facade",
    slug: "armor",
    name: "ARMOR",
    category: "plaster",
    image: "assets/images/armor.jpg",
    ruSubtitle: "ЦЕМЕНТНАЯ ФАСАДНАЯ ШТУКАТУРКА",
    uzSubtitle: "SEMENTLI ARMIRLANGAN FASAD SUVOQ",
    ribbonColor: "#1E293B",
    ribbonColorDark: "#0F172A",
    glowClass: "glow-navy",
    thumbnailType: "armor_cement",
    weight: "25 kg",
    defaultWeightKg: 25,
    badge: {
      uz: "Fasad Suvoq",
      ru: "Фасадная армированная"
    },
    categoryIndicator: {
      type: "sement",
      labelUz: "SEMENTLI ARMIRLANGAN",
      labelRu: "ЦЕМЕНТНАЯ АРМИРОВАННАЯ",
      color: "#1E293B",
      bgColor: "#F1F5F9",
      borderColor: "#CBD5E1"
    },
    colorScheme: {
      primary: "#1E293B",
      accent: "#0F172A",
      contrast: "#DC2626",
      text: "#FFFFFF"
    },
    title: {
      uz: "ARMOR (Sementli Armirlangan Fasad Suvoq)",
      ru: "ARMOR (Цементная армированная штукатурка)"
    },
    shortDesc: {
      uz: "Fasadlar va sokol qismlarini mustahkamlash uchun tolali armirlangan yuqori kuchga ega sement suvoq.",
      ru: "Высокопрочная цементная штукатурка с фиброволокном для фасадов, цоколей и влажных зон."
    },
    fullDesc: {
      uz: "ARMOR — portlandsement, fraksiyalangan qum va polipropilen mikro-tolalar asosidagi og'ir sharoitlarga bardoshli suvoq. Mexanik zarbalarga va ob-havo injiqliklariga nihoyatda chidamli. Fasadlarni tashqi tomondan izolyatsiya qilish tizimlarida mustahkam asos vazifasini o'taydi.",
      ru: "ARMOR — сверхпрочная цементная штукатурная смесь, армированная фиброволокном. Предотвращает усадочные трещины, обеспечивает исключительную стойкость к механическим нагрузкам, морозу и влаге. Отлично подходит для цоколей."
    },
    application: {
      uz: "Bino tashqi devorlari, poydevor/sokol qismi, sanoat zonalari va garajlar.",
      ru: "Наружные фасады, цокольные этажи, подвалы, производственные помещения."
    },
    specs: {
      waterRatio: {
        uz: "2.0 – 2.4 litr suv / 10 kg qorishma",
        ru: "2.0 – 2.4 л воды на 10 кг смеси"
      },
      consumption: {
        uz: "15.0 – 17.0 kg/m² (10 mm qalinlikda)",
        ru: "15.0 – 17.0 кг/м² (при толщине 10 мм)"
      },
      dryingTime: {
        uz: "180 daqiqa (to'liq qotish: 28 kun)",
        ru: "180 минут (проектная прочность: 28 дней)"
      },
      layerThickness: {
        uz: "10.0 – 30.0 mm",
        ru: "10.0 – 30.0 мм"
      },
      workTemp: "+5°C dan +30°C gacha",
      shelfLife: {
        uz: "12 oy",
        ru: "12 месяцев"
      },
      standard: "GOST 31357-2007"
    }
  },

  // 10. HYDRO 255 — Dengiz ko'ki (Teal) tasma / ДВУХКОМПОНЕНТНАЯ ГИДРОИЗОЛЯЦИЯ
  {
    id: "hydro-255",
    slug: "hydro-255",
    name: "HYDRO 255",
    category: "hydro",
    image: "assets/images/hydro255.jpg",
    ruSubtitle: "ДВУХКОМПОНЕНТНАЯ ГИДРОИЗОЛЯЦИЯ",
    uzSubtitle: "2 KOMPONENTLI ELASTIK GIDROIZOLYATSIYA",
    ribbonColor: "#0D9488",
    ribbonColorDark: "#0F766E",
    glowClass: "glow-teal",
    thumbnailType: "waterproof_roller",
    weight: "25 kg (20+5 kg)",
    defaultWeightKg: 25,
    badge: {
      uz: "2-Komponentli Elastik",
      ru: "2-Компонентная"
    },
    categoryIndicator: {
      type: "hydro",
      labelUz: "GIDROIZOLYATSIYA",
      labelRu: "ГИДРОИЗОЛЯЦИЯ",
      color: "#0D9488",
      bgColor: "#F0FDFA",
      borderColor: "#99F6E4"
    },
    colorScheme: {
      primary: "#0D9488",
      accent: "#0F766E",
      contrast: "#0F172A",
      text: "#FFFFFF"
    },
    title: {
      uz: "HYDRO 255 (2-Komponentli Elastik Gidroizolyatsiya)",
      ru: "HYDRO 255 (Двухкомпонентная гидроизоляция)"
    },
    shortDesc: {
      uz: "Basseyn, terassa, hammom va poydevorlarni suv sizishidan 100% himoya qiluvchi elastik qoplama.",
      ru: "Эластичная двухкомпонентная гидроизоляция для бассейнов, террас, ванных комнат и фундаментов."
    },
    fullDesc: {
      uz: "HYDRO 255 — sement asosli kukun va suyuq polimer emulsiyadan iborat professional 2-komponentli gidroizolyatsiya. Yuzaga surtilganda elastik choksiz membrana hosil qiladi, hatto 1.5 mm gacha bo'lgan mikroyoriqlarni to'liq to'sib beradi. Ijobiy va salbiy suv bosimiga bardoshli.",
      ru: "HYDRO 255 — профессиональный состав на основе цементно-песчаной смеси и жидкого полимерного латекса. Образует бесшовную водонепроницаемую мембрану с высокой эластичностью, перекрывающую микротрещины до 1.5 мм. Подходит для бассейнов и резервуаров с питьевой водой."
    },
    application: {
      uz: "Basseynlar, hammom va dush xonalari, balkon, poydevor va suv rezervuarlari.",
      ru: "Бассейны, влажные зоны, санузлы, резервуары для воды, фундаменты."
    },
    specs: {
      waterRatio: {
        uz: "Suv qo'shilmaydi! 20 kg kukun + 5 kg suyuq komponent",
        ru: "Вода не требуется! 20 кг порошка + 5 кг эмульсии"
      },
      consumption: {
        uz: "2.5 – 3.5 kg/m² (2 qatlamda)",
        ru: "2.5 – 3.5 кг/м² (в 2 слоя)"
      },
      dryingTime: {
        uz: "Qatlamlar oralig'i: 4-6 soat (to'liq suv quyish: 7 kun)",
        ru: "Между слоями: 4-6 часов (наполнение водой: 7 дней)"
      },
      layerThickness: {
        uz: "1.5 – 3.0 mm (jami 2 qatlam)",
        ru: "1.5 – 3.0 мм (суммарно в 2 слоя)"
      },
      workTemp: "+5°C dan +30°C gacha",
      shelfLife: {
        uz: "12 oy (suyuqlikni muzlashdan asrang)",
        ru: "12 месяцев (жидкий компонент беречь от мороза)"
      },
      standard: "EN 14891 / GOST 31357"
    }
  },

  // 11. LEVEL — Sariq/Oltin (Yellow/Gold) tasma / САМОНИВЕЛИРУЮЩИЙСЯ НАЛИВНОЙ ПОЛ
  {
    id: "level-floor",
    slug: "level",
    name: "LEVEL",
    category: "floor",
    image: "assets/images/level.jpg",
    ruSubtitle: "САМОНИВЕЛИРУЮЩИЙСЯ НАЛИВНОЙ ПОЛ",
    uzSubtitle: "O'Z-O'ZIDAN TEBRANUVCHI QUYMA POL",
    ribbonColor: "#EAB308",
    ribbonColorDark: "#CA8A04",
    glowClass: "glow-yellow",
    thumbnailType: "level_floor",
    weight: "25 kg",
    defaultWeightKg: 25,
    badge: {
      uz: "O'z-o'zidan Silliqlanuvchi",
      ru: "Самовыравнивающийся"
    },
    categoryIndicator: {
      type: "pol",
      labelUz: "QUYMA POL ASOSI",
      labelRu: "ОСНОВА НАЛИВНОГО ПОЛА",
      color: "#CA8A04",
      bgColor: "#FEFCE8",
      borderColor: "#FEF08A"
    },
    colorScheme: {
      primary: "#CA8A04",
      accent: "#EAB308",
      contrast: "#0F172A",
      text: "#FFFFFF"
    },
    title: {
      uz: "LEVEL (O'z-o'zidan Tebranuvchi Quyma Pol)",
      ru: "LEVEL (Самонивелирующийся наливной пол)"
    },
    shortDesc: {
      uz: "Laminat, kafel va parket tagiga polni mukammal gorizontal tekislash uchun o'z-o'zidan yoyiluvchi aralashma.",
      ru: "Быстротвердеющий самонивелирующийся наливной пол под ламинат, плитку, паркет и линолеум."
    },
    fullDesc: {
      uz: "LEVEL — yuqori oquvchanlikka ega bo'lgan, pol yuzasini o'z kuchi bilan ideal tekislikka keltiruvchi zamonaviy quyma pol aralashmasi. Qurigandan keyin yuqori mustahkamlikka erishadi, yorilmaydi va deformatsiyalanmaydi. 4-6 soatdan keyin ustida yurish mumkin.",
      ru: "LEVEL — самовыравнивающийся пол на комплексном связующем. Обладает великолепной растекаемостью, создает прочное горизонтальное основание без усадки и трещин. Пешее хождение возможно уже через 4-6 часов. Идеален для систем подогрева пола."
    },
    application: {
      uz: "Uy, ofis, savdo markazlari va jamoat joylaridagi pol yuzalari.",
      ru: "Полы в жилых и общественных помещениях, под финишные покрытия."
    },
    specs: {
      waterRatio: {
        uz: "5.0 – 5.5 litr suv / 25 kg qorishma",
        ru: "5.0 – 5.5 л воды на 25 kg смеси"
      },
      consumption: {
        uz: "1.5 – 1.7 kg/m² (1 mm qalinlikda)",
        ru: "1.5 – 1.7 кг/м² (при толщине 1 мм)"
      },
      dryingTime: {
        uz: "Yurish: 4-6 soat (qoplama yotqizish: 3-7 kun)",
        ru: "Пешая нагрузка: 4-6 часов (покрытия: 3-7 дней)"
      },
      layerThickness: {
        uz: "2.0 – 20.0 mm",
        ru: "2.0 – 20.0 мм"
      },
      workTemp: "+10°C dan +25°C gacha",
      shelfLife: {
        uz: "6 oy quruq joyda",
        ru: "6 месяцев в сухом месте"
      },
      standard: "GOST 31358-2007"
    }
  }
];
