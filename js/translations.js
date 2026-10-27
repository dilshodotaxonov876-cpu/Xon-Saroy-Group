/**
 * XON SAROY - Sayt interfeysi tarjimalar lug'ati (UZ / RU)
 */

const TRANSLATIONS = {
  uz: {
    // Header & Brand
    brandName: "XON SAROY",
    brandSubtitle: "Turkiya texnologiyasi asosida O'zbekistonda ishlab chiqarilgan",
    navHome: "Bosh sahifa",
    navCatalog: "Mahsulotlar",
    navBonus: "Ustalar Bonusi",
    navCalc: "Sarf Kalkulyatori",
    navAdvantages: "Afzalliklar",
    navContact: "Aloqa",
    quickOrderBtn: "Ariza qoldirish",
    phoneCall: "Qo'ng'iroq qilish",

    // Hero Section
    heroBadge: "100% Sifat Kafolati • Turkiya Texnologiyasi",
    heroTitle: "Mustahkam Qurilishning Oliy Asosi",
    heroDesc: "XON SAROY — professional ustalar va yirik qurilish ob'ektlari uchun yuqori darajada modifikatsiyalangan zamonaviy quruq qurilish aralashmalari brendi.",
    heroCatalogBtn: "Katalog bilan tanishish",
    heroBonusBtn: "Aksiyada qatnashish",
    heroStat1Val: "11+",
    heroStat1Lab: "Mahsulot turlari",
    heroStat2Val: "25 kg",
    heroStat2Lab: "Mustahkam qadoq",
    heroStat3Val: "100%",
    heroStat3Lab: "Turkiya standartlari",

    // Bonus Banner
    bonusTag: "USTALAR VA XARIDORLAR UCHUN AKSIYA",
    bonusTitle: "Ustalar uchun maxsus BONUS! Qop ichidan stikerni toping va sovg'alarni yutib oling!",
    bonusDesc: "Har bir XON SAROY mahsuloti qopida maxsus himoyalangan yutuqli stiker joylashtirilgan. Stikerni oching, kodni ro'yxatdan o'tkazing va avtomobil, zamonaviy maishiy texnikalar hamda professional suvoq apparatlarini qo'lga kiriting!",
    bonusBtnMore: "Aksiya shartlari bilan tanishish",
    bonusPrize1: "Avtomobil Tracker / Onix",
    bonusPrize2: "PFT Suvoq apparatlari",
    bonusPrize3: "Smartfonlar & Maishiy texnika",
    bonusPrize4: "Kafolatlangan pul mukofotlari",

    // Catalog Section
    catalogTag: "MAHSULOTLAR TARKIBI",
    catalogTitle: "Quruq Qurilish Aralashmalari Katalogi",
    catalogDesc: "Sizning bino va xonadonlaringiz uchun eng sara xomashyo va Turkiya qo'shimchalari asosida tayyorlangan mahsulotlar",
    
    catAll: "Barchasi",
    catPutty: "Gips va Polimer Shpaklyovkalar",
    catPlaster: "Shtukaturka va Suvoqlar",
    catAdhesive: "Yelimlar va Gidroizolyatsiya",
    catFloor: "Quyma Pol Aralashmalari",

    cardWeight: "Qadoq",
    cardWater: "Suv sarfi",
    cardConsumption: "Sarfi",
    cardDrying: "Qotish vaqti",
    cardDetailsBtn: "Batafsil texnik ko'rsatkichlar",
    cardOrderBtn: "Buyurtma berish",

    // Product Modal
    modalTitle: "Mahsulot Pasporti va Texnik Ko'rsatkichlari",
    modalUsageTitle: "Qo'llanilishi va Xususiyatlari:",
    modalAreaTitle: "Qo'llash sohasi:",
    modalSpecsTitle: "Texnik Parametrlari (Laboratoriya Ko'rsatkichlari):",
    specWater: "Suv aralashtirish nisbati",
    specConsumption: "O'rtacha sarflanish me'yori",
    specDrying: "Ishlatish va qotish vaqti",
    specLayer: "Tavsiya etilgan qatlam",
    specTemp: "Qo'llash harorati",
    specShelf: "Yaroqlilik va saqlash muddati",
    specStandard: "Muvofiqlik standarti",
    btnDownloadPdf: "PDF yo'riqnomani yuklab olish / Chop etish",
    btnOrderThis: "Shu mahsulotga buyurtma berish",
    modalClose: "Yopish",

    // Calculator Section
    calcTag: "USTALAR UCHUN QULAYLIK",
    calcTitle: "Aralashma Sarfini Hisoblash Kalkulyatori",
    calcDesc: "Qurilish maydoni va kerakli qalinlikni kiriting — dastur qancha kilogramm va nechta qop mahsulot kerakligini soniyalarda hisoblab beradi.",
    calcSelectLabel: "Mahsulotni tanlang:",
    calcAreaLabel: "Yuza maydoni (m²):",
    calcLayerLabel: "Qatlam qalinligi (mm):",
    calcResultTitle: "Hisob-kitob natijasi:",
    calcTotalKg: "Jami zarur mahsulot:",
    calcTotalBags: "Tavsiya etiladigan qoplar soni:",
    calcReserveNote: "* 5% zaxira bilan hisoblangan. Qop hajmi mahsulot turiga bog'liq.",
    calcOrderCalcBtn: "Ushbu hajmda arizani rasmiylashtirish",

    // Advantages
    advTag: "NEGA AYNAN BIZ?",
    advTitle: "XON SAROYning 4 Ta Ustun Afzalligi",
    adv1Title: "Turkiya Texnologiyasi",
    adv1Desc: "Yevropa standartlariga javob beruvchi maxsus polimer qo'shimchalar va retseptura.",
    adv2Title: "Laboratoriya Nazorati",
    adv2Desc: "Har bir partiya fabrikamizdagi zamonaviy laboratoriyada mustahkamlik va elastiklikka tekshiriladi.",
    adv3Title: "Ustalarga Qulaylik",
    adv3Desc: "Aralashmaning mayinligi, oson tortilishi va silliqlanishi ustalar mehnatini 2 barobar yengillashtiradi.",
    adv4Title: "Ulgurji Narxlar & Yetkazish",
    adv4Desc: "To'g'ridan-to'g'ri ishlab chiqaruvchidan birinchi qo'l narxlar va barcha hududlarga tez yetkazish.",

    // Lead Generation & Order Form
    leadTag: "BUYURTMA VA HAMKORLIK",
    leadTitle: "Ulgurji Xaridorlar va Ustalar Uchun Ariza",
    leadDesc: "Telefon raqamingizni qoldiring, 10 daqiqa ichida mutaxassisimiz siz bilan bog'lanib, eng qulay narxlar va yetkazib berish shartlarini taqdim etadi.",
    formName: "Ismingiz yoki Kompaniya nomi",
    formPhone: "Telefon raqamingiz",
    formProduct: "Qiziqtirgan mahsulot",
    formProductGeneral: "Umumiy konsultatsiya / Bir nechta mahsulot",
    formQuantity: "Taxminiy hajm (qop yoki tonna)",
    formNote: "Yetkazib berish manzili yoki qo'shimcha izoh",
    formSubmit: "Arizani jo'natish",
    formSubmitting: "Jo'natilmoqda...",
    formTelegramNote: "Arizangiz to'g'ridan-to'g'ri Telegram orqali mutaxassisimizga yuboriladi.",
    formSuccessTitle: "Arizangiz muvaffaqiyatli qabul qilindi!",
    formSuccessDesc: "Tez orada mutaxassisimiz siz bilan bog'lanadi. XON SAROY brendini tanlaganingiz uchun tashakkur!",
    formFallbackBtn: "Telegram orqali to'g'ridan-to'g'ri yozish",

    // Contact Section
    contactTag: "ALOQA VA MANZIL",
    contactTitle: "Fabrika va Savdo Bo'limi Bilan Bog'laning",
    contactDesc: "Kompaniyamizning ishlab chiqarish korxonasi va bosh ombori Chirchiq shahrida joylashgan.",
    addressTitle: "Ishlab chiqarish manzili:",
    addressVal: "Toshkent viloyati, Chirchiq shahri, V.Haydarov ko'chasi 31/13",
    phonesTitle: "Savdo bo'limi telefonlari:",
    workHoursTitle: "Ish vaqti:",
    workHoursVal: "Dushanba - Shanba: 08:30 - 18:30 (Yakshanba: Dam olish)",
    mapTitle: "Chirchiq shahridagi xaritamiz:",

    // Footer
    footerRights: "Barcha huquqlar himoyalangan.",
    footerDev: "Turkiya texnologiyasi asosida O'zbekistonda ishlab chiqarilgan yuqori sifatli quruq qorishmalar.",
    footerFastLinks: "Tezkor havolalar",
    footerContacts: "Bog'lanish",
    footerHotline: "Yagona aloqa markazi:"
  },

  ru: {
    // Header & Brand
    brandName: "XON SAROY",
    brandSubtitle: "Произведено в Узбекистане по турецкой технологии",
    navHome: "Главная",
    navCatalog: "Продукция",
    navBonus: "Бонус для Мастеров",
    navCalc: "Калькулятор",
    navAdvantages: "Преимущества",
    navContact: "Контакты",
    quickOrderBtn: "Оставить заявку",
    phoneCall: "Позвонить",

    // Hero Section
    heroBadge: "100% Гарантия Качества • Турецкая Технология",
    heroTitle: "Надежная Основа Качественного Строительства",
    heroDesc: "XON SAROY — высокомодифицированные сухие строительные смеси премиум-класса для профессиональных мастеров, подрядчиков и масштабных строительных объектов.",
    heroCatalogBtn: "Перейти в каталог",
    heroBonusBtn: "Участвовать в акции",
    heroStat1Val: "11+",
    heroStat1Lab: "Видов продукции",
    heroStat2Val: "25 кг",
    heroStat2Lab: "Прочная упаковка",
    heroStat3Val: "100%",
    heroStat3Lab: "Турецкий стандарт",

    // Bonus Banner
    bonusTag: "АКЦИЯ ДЛЯ МАСТЕРОВ И ПОКУПАТЕЛЕЙ",
    bonusTitle: "Специальный БОНУС для мастеров! Найдите стикер внутри мешка и выигрывайте призы!",
    bonusDesc: "В каждом мешке продукции XON SAROY находится защищенный призовой стикер. Найдите стикер, зарегистрируйте код и выигрывайте автомобиль, профессиональные штукатурные станции PFT и ценные подарки!",
    bonusBtnMore: "Подробнее об условиях акции",
    bonusPrize1: "Автомобиль Tracker / Onix",
    bonusPrize2: "Штукатурные станции PFT",
    bonusPrize3: "Смартфоны & Бытовая техника",
    bonusPrize4: "Гарантированные денежные призы",

    // Catalog Section
    catalogTag: "КАТАЛОГ ПРОДУКЦИИ",
    catalogTitle: "Сухие Строительные Смеси XON SAROY",
    catalogDesc: "Полный ассортимент сухих смесей, созданных на основе отборного сырья и лучших турецких модификаторов",
    
    catAll: "Все продукты",
    catPutty: "Гипсовые и Полимерные Шпаклевки",
    catPlaster: "Штукатурки и Смеси",
    catAdhesive: "Клеи и Гидроизоляция",
    catFloor: "Наливные Полы",

    cardWeight: "Фасовка",
    cardWater: "Расход воды",
    cardConsumption: "Расход",
    cardDrying: "Время схватывания",
    cardDetailsBtn: "Подробные характеристики",
    cardOrderBtn: "Заказать",

    // Product Modal
    modalTitle: "Паспорт Продукции и Технические Характеристики",
    modalUsageTitle: "Назначение и Особенности:",
    modalAreaTitle: "Область применения:",
    modalSpecsTitle: "Технические параметры (Лабораторные показатели):",
    specWater: "Пропорция смешивания с водой",
    specConsumption: "Средний расход сухой смеси",
    specDrying: "Время жизнеспособности и высыхания",
    specLayer: "Рекомендуемая толщина слоя",
    specTemp: "Температура применения",
    specShelf: "Срок и условия хранения",
    specStandard: "Стандарт соответствия",
    btnDownloadPdf: "Скачать PDF инструкцию / Печать",
    btnOrderThis: "Заказать этот продукт",
    modalClose: "Закрыть",

    // Calculator Section
    calcTag: "ИНСТРУМЕНТ ДЛЯ МАСТЕРОВ",
    calcTitle: "Калькулятор Расхода Сухих Смесей",
    calcDesc: "Укажите площадь и планируемую толщину слоя — калькулятор мгновенно рассчитает точный вес и количество мешков.",
    calcSelectLabel: "Выберите продукт:",
    calcAreaLabel: "Площадь поверхности (м²):",
    calcLayerLabel: "Толщина слоя (мм):",
    calcResultTitle: "Результат расчета:",
    calcTotalKg: "Всего требуется смеси:",
    calcTotalBags: "Рекомендуемое число мешков:",
    calcReserveNote: "* Рассчитано с запасом 5%. Вес мешка зависит от выбранного продукта.",
    calcOrderCalcBtn: "Оформить заявку на этот объем",

    // Advantages
    advTag: "ПОЧЕМУ XON SAROY?",
    advTitle: "4 Ключевых Преимущества Нашей Продукции",
    adv1Title: "Турецкая Технология",
    adv1Desc: "Европейские стандарты качества, оригинальные формулы и рецептуры ведущих турецких технологов.",
    adv2Title: "Контроль Качества",
    adv2Desc: "Каждая партия проходит многоуровневое тестирование в заводской лаборатории на адгезию и прочность.",
    adv3Title: "Удобство в Работе",
    adv3Desc: "Пластичность, легкое нанесение и идеальное выглаживание экономят до 40% времени и сил мастера.",
    adv4Title: "Оптовые Цены и Доставка",
    adv4Desc: "Цены из первых рук от завода-производителя и оперативная доставка на объекты по всему Узбекистану.",

    // Lead Generation & Order Form
    leadTag: "ЗАКАЗ И СОТРУДНИЧЕСТВО",
    leadTitle: "Заявка Для Мастеров и Оптовых Покупателей",
    leadDesc: "Оставьте номер телефона, наш специалист свяжется с вами в течение 10 минут, предоставит прайс-лист и согласует доставку.",
    formName: "Ваше имя или название компании",
    formPhone: "Номер телефона",
    formProduct: "Интересующий продукт",
    formProductGeneral: "Общая консультация / Несколько позиций",
    formQuantity: "Ориентировочный объем (мешки / тонны)",
    formNote: "Адрес объекта или примечание",
    formSubmit: "Отправить заявку",
    formSubmitting: "Отправка...",
    formTelegramNote: "Ваша заявка поступает напрямую в Telegram дежурному менеджеру.",
    formSuccessTitle: "Заявка успешно принята!",
    formSuccessDesc: "Наш менеджер свяжется с вами в ближайшее время. Спасибо за выбор XON SAROY!",
    formFallbackBtn: "Написать напрямую в Telegram",

    // Contact Section
    contactTag: "КОНТАКТЫ И АДРЕС",
    contactTitle: "Свяжитесь с Заводом и Отделом Продаж",
    contactDesc: "Производственный комплекс и центральный склад готовой продукции расположены в городе Чирчик.",
    addressTitle: "Адрес производства:",
    addressVal: "Ташкентская область, г. Чирчик, ул. В. Хайдарова 31/13",
    phonesTitle: "Отдел оптовых продаж:",
    workHoursTitle: "Режим работы:",
    workHoursVal: "Понедельник - Суббота: 08:30 - 18:30 (Воскресенье: Выходной)",
    mapTitle: "Карта проезда в Чирчике:",

    // Footer
    footerRights: "Все права защищены.",
    footerDev: "Сухие строительные смеси высшего качества, произведенные в Узбекистане по передовой турецкой технологии.",
    footerFastLinks: "Быстрые ссылки",
    footerContacts: "Контакты",
    footerHotline: "Единый телефон отдела продаж:"
  }
};
