import { CityData } from '../types';

/**
 * Extended Regional Cities & Subdivisions Dataset
 * Includes detailed regional capitals, provincial centers, and major towns
 * for high-density Google Earth 3D zooming across Iraq, Middle East, Europe, Americas, Asia, and Africa.
 */
export const EXTENDED_REGIONAL_CITIES: CityData[] = [
  // ==================== TUNISIA (تونس - الـ 24 ولاية كاملة) ====================
  {
    id: "city_tunis",
    name_ar: "تونس العاصمة",
    name_en: "Tunis",
    country_ar: "تونس",
    country_en: "Tunisia",
    region: "MENA",
    iata: "TUN",
    coordinates: [36.8065, 10.1815],
    zone: "green",
    avg_hotel_price: 75,
    quality_score: 9.3,
    best_season_ar: "مارس - مايو & سبتمبر - نوفمبر",
    best_season_en: "March - May & September - November",
    popular_district_ar: "سيدي بوسعيد & المرسى & قرطاج & المدينة القديمة",
    popular_district_en: "Sidi Bou Said & La Marsa & Carthage",
    hotel_deals_count: 1240,
    active_flights_count: 240,
    travelpayouts: {
      booking_url: "https://www.booking.com/city/tn/tunis.ar.html?aid=YOUR_TP_MARKER",
      agoda_url: "https://www.agoda.com/city/tunis-tn.html?cid=YOUR_TP_MARKER",
      flight_url: "https://wayaway.io/flights/TUN?marker=YOUR_TP_MARKER",
      tours_url: "https://getyourguide.com/tunis-l379/?partner_id=YOUR_TP_MARKER"
    },
    curated_hotels: [
      {
        id: "h_tun_1",
        hotel_name_ar: "فندق لا ميزون بونشوا سيدي بوسعيد",
        hotel_name_en: "La Villa Bleu Sidi Bou Said",
        stars: 5,
        badge_ar: "إطلالة ساحرة على خليج قرطاج",
        badge_en: "Panoramic Carthage Gulf View",
        price_per_night: 180,
        rating: 9.7,
        provider: "Booking.com",
        deal_url: "https://www.booking.com/city/tn/tunis.ar.html?aid=YOUR_TP_MARKER"
      }
    ],
    experiences: [
      {
        title_ar: "جولة قرطاج الأثرية وسيدي بوسعيد والمدينة العتيقة",
        title_en: "Carthage Ruins, Sidi Bou Said & Medina Tour",
        duration: "6 ساعات",
        price: 35,
        rating: 4.9,
        reviews_count: 8900,
        url: "https://getyourguide.com/tunis-l379/?partner_id=YOUR_TP_MARKER"
      }
    ],
    description_ar: "عاصمة الخضراء تونس، تمزج بين الآثار البونية الرومانية بقرطاج وجمال سيدي بوسعيد الأزرق والأبيض.",
    description_en: "Capital of Tunisia combining ancient Carthage ruins, blue-and-white Sidi Bou Said cliff village, and UNESCO Medina."
  },
  {
    id: "city_sousse",
    name_ar: "سوسة",
    name_en: "Sousse",
    country_ar: "تونس",
    country_en: "Tunisia",
    region: "MENA",
    iata: "QUU",
    coordinates: [35.8256, 10.6369],
    zone: "green",
    avg_hotel_price: 65,
    quality_score: 9.1,
    best_season_ar: "مايو - أكتوبر",
    best_season_en: "May - October",
    popular_district_ar: "بورت القنطاوي & الكورنيش & الرباط التاريخي",
    popular_district_en: "Port El Kantaoui & Corniche",
    hotel_deals_count: 980,
    active_flights_count: 150,
    travelpayouts: {
      booking_url: "https://www.booking.com/city/tn/sousse.ar.html?aid=YOUR_TP_MARKER",
      agoda_url: "https://www.agoda.com/city/sousse-tn.html?cid=YOUR_TP_MARKER",
      flight_url: "https://wayaway.io/flights/TUN?marker=YOUR_TP_MARKER",
      tours_url: "https://getyourguide.com/sousse-l1421/?partner_id=YOUR_TP_MARKER"
    },
    curated_hotels: [
      {
        id: "h_sou_1",
        hotel_name_ar: "منتجع موفنبيك سوسة الشاطئي",
        hotel_name_en: "Mövenpick Resort & Marine Spa Sousse",
        stars: 5,
        badge_ar: "شاطئ خاص وفاخر على المتوسط",
        badge_en: "5-Star Luxury Marine Spa",
        price_per_night: 130,
        rating: 9.4,
        provider: "Booking.com",
        deal_url: "https://www.booking.com/city/tn/sousse.ar.html?aid=YOUR_TP_MARKER"
      }
    ],
    experiences: [
      {
        title_ar: "جولة مرسى بورت القنطاوي والرباط التاريخي",
        title_en: "Port El Kantaoui Marina & Ribat Tour",
        duration: "4 ساعات",
        price: 25,
        rating: 4.8,
        reviews_count: 4200,
        url: "https://getyourguide.com/sousse-l1421/?partner_id=YOUR_TP_MARKER"
      }
    ],
    description_ar: "جوهرة الساحل التونسي وميناء القنطاوي الترفيهي، تمتاز بشواطئها الذهبية ورباطها الإسلامي الأثري.",
    description_en: "Pearl of the Sahel featuring Mediterranean sandy beaches, UNESCO Ribat fortress, and Port El Kantaoui marina."
  },
  {
    id: "city_sfax",
    name_ar: "صفاقس",
    name_en: "Sfax",
    country_ar: "تونس",
    country_en: "Tunisia",
    region: "MENA",
    iata: "SFA",
    coordinates: [34.7406, 10.7603],
    zone: "green",
    avg_hotel_price: 55,
    quality_score: 8.9,
    best_season_ar: "طوال العام",
    best_season_en: "Year-Round",
    popular_district_ar: "باب ديوان & أسوار المدينة القديمة & أرخبيل قرقنة",
    popular_district_en: "Bab Diwan & Kerkennah Islands",
    hotel_deals_count: 620,
    active_flights_count: 90,
    travelpayouts: {
      booking_url: "https://www.booking.com/city/tn/sfax.ar.html?aid=YOUR_TP_MARKER",
      agoda_url: "https://www.agoda.com/city/sfax-tn.html?cid=YOUR_TP_MARKER",
      flight_url: "https://wayaway.io/flights/SFA?marker=YOUR_TP_MARKER",
      tours_url: "https://getyourguide.com/sfax-l3208/?partner_id=YOUR_TP_MARKER"
    },
    curated_hotels: [
      {
        id: "h_sfa_1",
        hotel_name_ar: "فندق زيتونة بالاس صفاقس",
        hotel_name_en: "Les Oliviers Palace Sfax",
        stars: 5,
        badge_ar: "مركز المدينة الأعمال والضيافة",
        badge_en: "City Center Business Hotel",
        price_per_night: 85,
        rating: 9.0,
        provider: "Booking.com",
        deal_url: "https://www.booking.com/city/tn/sfax.ar.html?aid=YOUR_TP_MARKER"
      }
    ],
    experiences: [
      {
        title_ar: "رحلة عبارة أرخبيل جزر قرقنة الهادئة",
        title_en: "Kerkennah Archipelago Ferry & Fishing Tour",
        duration: "5 ساعات",
        price: 20,
        rating: 4.8,
        reviews_count: 1800,
        url: "https://getyourguide.com/sfax-l3208/?partner_id=YOUR_TP_MARKER"
      }
    ],
    description_ar: "العاصمة الاقتصادية لتونس، تشتهر بأسوار مدينتها العتيقة المحفوظة تماماً وقربها من جزر قرقنة الساحرة.",
    description_en: "Tunisia's economic powerhouse, boasting historic preserved city walls and ferry access to pristine Kerkennah Islands."
  },
  {
    id: "city_hammamet",
    name_ar: "الحمامات / نابل",
    name_en: "Hammamet",
    country_ar: "تونس",
    country_en: "Tunisia",
    region: "MENA",
    iata: "NBL",
    coordinates: [36.4000, 10.6167],
    zone: "yellow",
    avg_hotel_price: 110,
    quality_score: 9.4,
    best_season_ar: "أبريل - أكتوبر",
    best_season_en: "April - October",
    popular_district_ar: "ياسمين الحمامات & القصبة الأثرية & نابل الفخار",
    popular_district_en: "Yasmine Hammamet & Kasbah",
    hotel_deals_count: 1150,
    active_flights_count: 180,
    travelpayouts: {
      booking_url: "https://www.booking.com/city/tn/hammamet.ar.html?aid=YOUR_TP_MARKER",
      agoda_url: "https://www.agoda.com/city/hammamet-tn.html?cid=YOUR_TP_MARKER",
      flight_url: "https://wayaway.io/flights/TUN?marker=YOUR_TP_MARKER",
      tours_url: "https://getyourguide.com/hammamet-l1422/?partner_id=YOUR_TP_MARKER"
    },
    curated_hotels: [
      {
        id: "h_ham_1",
        hotel_name_ar: "منتجع هاسيندا ذا سينباد الحمامات",
        hotel_name_en: "The Sindbad Hotel Hammamet",
        stars: 5,
        badge_ar: "حدائق استوائية وشاطئ خاص ساحر",
        badge_en: "Tropical Gardens & Private Beach",
        price_per_night: 160,
        rating: 9.6,
        provider: "Booking.com",
        deal_url: "https://www.booking.com/city/tn/hammamet.ar.html?aid=YOUR_TP_MARKER"
      }
    ],
    experiences: [
      {
        title_ar: "زيارة ياسمين الحمامات وسوق الفخار في نابل",
        title_en: "Yasmine Hammamet & Nabeul Pottery Market",
        duration: "5 ساعات",
        price: 30,
        rating: 4.9,
        reviews_count: 6100,
        url: "https://getyourguide.com/hammamet-l1422/?partner_id=YOUR_TP_MARKER"
      }
    ],
    description_ar: "عاصمة السياحة الشاطئية التونسية، تضم ياسمين الحمامات ومارينا الترفيهية وأسواق نابل الفخارية.",
    description_en: "Tunisia's premier resort town famous for Yasmine Hammamet marina, luxury beach hotels, and Nabeul pottery crafts."
  },
  {
    id: "city_djerba",
    name_ar: "جربة (ولاية مدنين)",
    name_en: "Djerba",
    country_ar: "تونس",
    country_en: "Tunisia",
    region: "MENA",
    iata: "DJE",
    coordinates: [33.8076, 10.8451],
    zone: "yellow",
    avg_hotel_price: 125,
    quality_score: 9.5,
    best_season_ar: "طوال العام",
    best_season_en: "Year-Round",
    popular_district_ar: "حومة السوق & جربة هود & ميدون",
    popular_district_en: "Houmt Souk & Djerbahood & Midoun",
    hotel_deals_count: 890,
    active_flights_count: 210,
    travelpayouts: {
      booking_url: "https://www.booking.com/city/tn/djerba.ar.html?aid=YOUR_TP_MARKER",
      agoda_url: "https://www.agoda.com/city/djerba-tn.html?cid=YOUR_TP_MARKER",
      flight_url: "https://wayaway.io/flights/DJE?marker=YOUR_TP_MARKER",
      tours_url: "https://getyourguide.com/djerba-l1423/?partner_id=YOUR_TP_MARKER"
    },
    curated_hotels: [
      {
        id: "h_dje_1",
        hotel_name_ar: "فندق هاسيندا راديسون بلو جربة",
        hotel_name_en: "Radisson Blu Palace Resort Djerba",
        stars: 5,
        badge_ar: "منتجع ثالاسو سبا فاخر على البحر",
        badge_en: "Luxury Sea Thalasso Spa Resort",
        price_per_night: 175,
        rating: 9.5,
        provider: "Booking.com",
        deal_url: "https://www.booking.com/city/tn/djerba.ar.html?aid=YOUR_TP_MARKER"
      }
    ],
    experiences: [
      {
        title_ar: "جولة قرية جربة هود الفنية وركوب الجمال بالغروب",
        title_en: "Djerbahood Open-Air Museum & Sunset Camel Ride",
        duration: "4 ساعات",
        price: 28,
        rating: 4.9,
        reviews_count: 5200,
        url: "https://getyourguide.com/djerba-l1423/?partner_id=YOUR_TP_MARKER"
      }
    ],
    description_ar: "جزيرة الأحلام المدرجة في اليونسكو، تشتهر بقرية جربة هود للغرافيتي الشارعي وحومة السوق والمنتجعات الصحية.",
    description_en: "UNESCO World Heritage island of dream beaches, Djerbahood street art village, and world-class thalassotherapy."
  },
  {
    id: "city_monastir",
    name_ar: "المنستير",
    name_en: "Monastir",
    country_ar: "تونس",
    country_en: "Tunisia",
    region: "MENA",
    iata: "MIR",
    coordinates: [35.7833, 10.8333],
    zone: "green",
    avg_hotel_price: 70,
    quality_score: 9.0,
    best_season_ar: "مايو - أكتوبر",
    best_season_en: "May - October",
    popular_district_ar: "رباط المنستير & ضريح بورقيبة & المارينا",
    popular_district_en: "Ribat of Monastir & Marina",
    hotel_deals_count: 540,
    active_flights_count: 130,
    travelpayouts: {
      booking_url: "https://www.booking.com/city/tn/monastir.ar.html?aid=YOUR_TP_MARKER",
      agoda_url: "https://www.agoda.com/city/monastir-tn.html?cid=YOUR_TP_MARKER",
      flight_url: "https://wayaway.io/flights/MIR?marker=YOUR_TP_MARKER",
      tours_url: "https://getyourguide.com/monastir-l1424/?partner_id=YOUR_TP_MARKER"
    },
    curated_hotels: [
      {
        id: "h_mir_1",
        hotel_name_ar: "فندق رويال ثالاسا المنستير",
        hotel_name_en: "Royal Thalassa Monastir",
        stars: 5,
        badge_ar: "إطلالة شاطئية ومركز ثالاسو عالمي",
        badge_en: "Royal Beach & Spa Stay",
        price_per_night: 110,
        rating: 9.2,
        provider: "Booking.com",
        deal_url: "https://www.booking.com/city/tn/monastir.ar.html?aid=YOUR_TP_MARKER"
      }
    ],
    experiences: [
      {
        title_ar: "زيارة قلعة الرباط التاريخية وضريح الرئيس بورقيبة",
        title_en: "Historic Ribat Fortress & Bourguiba Mausoleum",
        duration: "3 ساعات",
        price: 20,
        rating: 4.8,
        reviews_count: 3100,
        url: "https://getyourguide.com/monastir-l1424/?partner_id=YOUR_TP_MARKER"
      }
    ],
    description_ar: "مدينة تاريخية ساحلية يزينها رباط المنستير العظيم وضريح الزعيم الحبيب بورقيبة وميناء النزهة.",
    description_en: "Coastal heritage town dominated by the imposing 8th-century Ribat fortress and Bourguiba Mausoleum."
  },
  {
    id: "city_bizerte",
    name_ar: "بنزرت",
    name_en: "Bizerte",
    country_ar: "تونس",
    country_en: "Tunisia",
    region: "MENA",
    iata: "BZT",
    coordinates: [37.2744, 9.8739],
    zone: "green",
    avg_hotel_price: 60,
    quality_score: 9.0,
    best_season_ar: "أبريل - أكتوبر",
    best_season_en: "April - October",
    popular_district_ar: "الميناء القديم & رأس الأنجلة & بحيرة إشكل",
    popular_district_en: "Old Port & Cape Angela & Ichkeul",
    hotel_deals_count: 410,
    active_flights_count: 45,
    travelpayouts: {
      booking_url: "https://www.booking.com/city/tn/bizerte.ar.html?aid=YOUR_TP_MARKER",
      agoda_url: "https://www.agoda.com/city/bizerte-tn.html?cid=YOUR_TP_MARKER",
      flight_url: "https://wayaway.io/flights/TUN?marker=YOUR_TP_MARKER",
      tours_url: "https://getyourguide.com/bizerte-l1425/?partner_id=YOUR_TP_MARKER"
    },
    curated_hotels: [
      {
        id: "h_bzt_1",
        hotel_name_ar: "فندق بيزيرت ريزورت الشاطئي",
        hotel_name_en: "Bizerte Resort Beach Hotel",
        stars: 4,
        badge_ar: "إطلالة مباشرة على الميناء القديم",
        badge_en: "Old Port Waterfront Hotel",
        price_per_night: 80,
        rating: 9.0,
        provider: "Booking.com",
        deal_url: "https://www.booking.com/city/tn/bizerte.ar.html?aid=YOUR_TP_MARKER"
      }
    ],
    experiences: [
      {
        title_ar: "زيارة رأس الأنجلة (أقصى نقطة بشمال قارة أفريقيا) ومحمية إشكل",
        title_en: "Cape Angela (Northernmost Point of Africa) & Ichkeul Lake",
        duration: "5 ساعات",
        price: 30,
        rating: 4.9,
        reviews_count: 2400,
        url: "https://getyourguide.com/bizerte-l1425/?partner_id=YOUR_TP_MARKER"
      }
    ],
    description_ar: "أقصى نقطة في شمال قارة أفريقيا برأس الأنجلة، تمتاز بمينائها الأندلسي العتيق وبحيرة إشكل الوطنية.",
    description_en: "Home to Cape Angela, the northernmost tip of the African continent, with a picturesque Andalusian old port."
  },
  {
    id: "city_kairouan",
    name_ar: "القيروان",
    name_en: "Kairouan",
    country_ar: "تونس",
    country_en: "Tunisia",
    region: "MENA",
    iata: "QKN",
    coordinates: [35.6781, 10.0963],
    zone: "green",
    avg_hotel_price: 50,
    quality_score: 9.2,
    best_season_ar: "أكتوبر - أبريل",
    best_season_en: "October - April",
    popular_district_ar: "جامع عقبة بن نافع & فسقيات الأغالبة & مقام أبي زمعة البلوي",
    popular_district_en: "Great Mosque of Kairouan & Aghlabid Basins",
    hotel_deals_count: 380,
    active_flights_count: 30,
    travelpayouts: {
      booking_url: "https://www.booking.com/city/tn/kairouan.ar.html?aid=YOUR_TP_MARKER",
      agoda_url: "https://www.agoda.com/city/kairouan-tn.html?cid=YOUR_TP_MARKER",
      flight_url: "https://wayaway.io/flights/TUN?marker=YOUR_TP_MARKER",
      tours_url: "https://getyourguide.com/kairouan-l1426/?partner_id=YOUR_TP_MARKER"
    },
    curated_hotels: [
      {
        id: "h_qkn_1",
        hotel_name_ar: "فندق القصبة القيروان التراثي",
        hotel_name_en: "Hotel La Kasbah Kairouan",
        stars: 5,
        badge_ar: "قصر معمار أندلسي فاخر داخل الأسوار",
        badge_en: "Historic Andalusian Kasbah Palace",
        price_per_night: 95,
        rating: 9.4,
        provider: "Booking.com",
        deal_url: "https://www.booking.com/city/tn/kairouan.ar.html?aid=YOUR_TP_MARKER"
      }
    ],
    experiences: [
      {
        title_ar: "جولة جامع عقبة بن نافع التاريخي وفسقيات الأغالبة",
        title_en: "UNESCO Great Mosque of Uqba & Aghlabid Basins Tour",
        duration: "4 ساعات",
        price: 22,
        rating: 4.9,
        reviews_count: 3800,
        url: "https://getyourguide.com/kairouan-l1426/?partner_id=YOUR_TP_MARKER"
      }
    ],
    description_ar: "عاصمة المغرب الإسلامي الأولى المدرجة باليونسكو، تضم جامع عقبة بن نافع وصناعة السجاد التونسي الفاخر.",
    description_en: "First Islamic capital of the Maghreb, famous for the UNESCO Great Mosque of Uqba and artisan carpet weaving."
  },
  {
    id: "city_tozeur",
    name_ar: "توزر",
    name_en: "Tozeur",
    country_ar: "تونس",
    country_en: "Tunisia",
    region: "MENA",
    iata: "TOE",
    coordinates: [33.9197, 8.1336],
    zone: "yellow",
    avg_hotel_price: 135,
    quality_score: 9.6,
    best_season_ar: "أكتوبر - أبريل",
    best_season_en: "October - April",
    popular_district_ar: "واحات الشبيكة وتامرزة & موقع حرب النجوم (عنق الجمل)",
    popular_district_en: "Mountain Oases & Star Wars Ong Jmal",
    hotel_deals_count: 310,
    active_flights_count: 75,
    travelpayouts: {
      booking_url: "https://www.booking.com/city/tn/tozeur.ar.html?aid=YOUR_TP_MARKER",
      agoda_url: "https://www.agoda.com/city/tozeur-tn.html?cid=YOUR_TP_MARKER",
      flight_url: "https://wayaway.io/flights/TOE?marker=YOUR_TP_MARKER",
      tours_url: "https://getyourguide.com/tozeur-l1427/?partner_id=YOUR_TP_MARKER"
    },
    curated_hotels: [
      {
        id: "h_toe_1",
        hotel_name_ar: "منتجع أنانتارا توزر الصحراوي الفاخر",
        hotel_name_en: "Anantara Tozeur Resort",
        stars: 5,
        badge_ar: "أفخم منتجع صحراوي في شمال أفريقيا",
        badge_en: "Ultra-Luxury Desert Oasis Resort",
        price_per_night: 290,
        rating: 9.8,
        provider: "Booking.com",
        deal_url: "https://www.booking.com/city/tn/tozeur.ar.html?aid=YOUR_TP_MARKER"
      }
    ],
    experiences: [
      {
        title_ar: "رحلة الدفع الرباعي لواحات الشبيكة الجبلية وموقع تصوير فيلم حرب النجوم",
        title_en: "Star Wars Ong Jmal Film Set & Chebika Mountain Oasis Tour",
        duration: "6 ساعات",
        price: 55,
        rating: 5.0,
        reviews_count: 4900,
        url: "https://getyourguide.com/tozeur-l1427/?partner_id=YOUR_TP_MARKER"
      }
    ],
    description_ar: "بوابة الصحراء الغربية وعروس الواحات الجبلية، تشتهر بموقع تصوير فيلم Star Wars وبساتين النخيل وشط الجريد.",
    description_en: "Gateway to the Sahara featuring lush palm oases, mountain waterfalls, Chott el Djerid salt flats, and Star Wars movie sets."
  },
  {
    id: "city_tabarka",
    name_ar: "طبرقة / عين دراهم (ولاية جندوبة)",
    name_en: "Tabarka",
    country_ar: "تونس",
    country_en: "Tunisia",
    region: "MENA",
    iata: "TBJ",
    coordinates: [36.9544, 8.7581],
    zone: "yellow",
    avg_hotel_price: 85,
    quality_score: 9.3,
    best_season_ar: "طوال العام (شتاء الثلوج وصيف الغوص)",
    best_season_en: "Year-Round",
    popular_district_ar: "إبر طبرقة الجرانيتية & غابات عين دراهم & قلعة الجينويز",
    popular_district_en: "Tabarka Needles & Ain Draham Forests",
    hotel_deals_count: 290,
    active_flights_count: 40,
    travelpayouts: {
      booking_url: "https://www.booking.com/city/tn/tabarka.ar.html?aid=YOUR_TP_MARKER",
      agoda_url: "https://www.agoda.com/city/tabarka-tn.html?cid=YOUR_TP_MARKER",
      flight_url: "https://wayaway.io/flights/TBJ?marker=YOUR_TP_MARKER",
      tours_url: "https://getyourguide.com/tabarka-l1428/?partner_id=YOUR_TP_MARKER"
    },
    curated_hotels: [
      {
        id: "h_tbj_1",
        hotel_name_ar: "فندق متبحة سيتاديل طبرقة للجولف",
        hotel_name_en: "La Cigale Tabarka Hotel Resort & Spa",
        stars: 5,
        badge_ar: "أفخم منتجع جولف وغابات صنوبر في تونس",
        badge_en: "Luxury Pine Forest & Golf Resort",
        price_per_night: 170,
        rating: 9.6,
        provider: "Booking.com",
        deal_url: "https://www.booking.com/city/tn/tabarka.ar.html?aid=YOUR_TP_MARKER"
      }
    ],
    experiences: [
      {
        title_ar: "رحلة غوص الشعاب المرجانية وزيارة غابات عين دراهم",
        title_en: "Coral Reef Scuba Diving & Ain Draham Mountain Trek",
        duration: "5 ساعات",
        price: 35,
        rating: 4.8,
        reviews_count: 1900,
        url: "https://getyourguide.com/tabarka-l1428/?partner_id=YOUR_TP_MARKER"
      }
    ],
    description_ar: "سويسرية تونس الشمالية، تجمع بين غابات الصنوبر الجبلية بعين دراهم وشواطئ المرجان وإبر طبرقة الصخرية.",
    description_en: "Tunisia's green alpine coastal haven, famous for coral reefs, Genovese fort, and Ain Draham oak forests."
  },
  {
    id: "city_mahdia",
    name_ar: "المهدية",
    name_en: "Mahdia",
    country_ar: "تونس",
    country_en: "Tunisia",
    region: "MENA",
    iata: "MHA",
    coordinates: [35.5047, 11.0622],
    zone: "green",
    avg_hotel_price: 72,
    quality_score: 9.2,
    best_season_ar: "مايو - أكتوبر",
    best_season_en: "May - October",
    popular_district_ar: "السقيفة الكحلة & الميناء الفاطمي القديم & برج الرأس",
    popular_district_en: "Skifa El Kahla & Fatimid Port",
    hotel_deals_count: 460,
    active_flights_count: 50,
    travelpayouts: {
      booking_url: "https://www.booking.com/city/tn/mahdia.ar.html?aid=YOUR_TP_MARKER",
      agoda_url: "https://www.agoda.com/city/mahdia-tn.html?cid=YOUR_TP_MARKER",
      flight_url: "https://wayaway.io/flights/MIR?marker=YOUR_TP_MARKER",
      tours_url: "https://getyourguide.com/mahdia-l1429/?partner_id=YOUR_TP_MARKER"
    },
    curated_hotels: [
      {
        id: "h_mha_1",
        hotel_name_ar: "فندق ماه ديا بالاس الفاطمي",
        hotel_name_en: "Mahdia Palace Thalasso Resort",
        stars: 5,
        badge_ar: "أجمل شاطئ رملي أبيض في تونس",
        badge_en: "Pristine White Sand Beach Stay",
        price_per_night: 105,
        rating: 9.3,
        provider: "Booking.com",
        deal_url: "https://www.booking.com/city/tn/mahdia.ar.html?aid=YOUR_TP_MARKER"
      }
    ],
    experiences: [
      {
        title_ar: "جولة بوابة السقيفة الكحلة الأثرية والميناء الفاطمي",
        title_en: "Skifa El Kahla Historic Gate & Fatimid Harbor Walk",
        duration: "3 ساعات",
        price: 18,
        rating: 4.8,
        reviews_count: 2100,
        url: "https://getyourguide.com/mahdia-l1429/?partner_id=YOUR_TP_MARKER"
      }
    ],
    description_ar: "عاصمة الدولة الفاطمية الأولى، تشتهر بشواطئها ذات الرمال البيضاء الناصعة وبوابة السقيفة الكحلة الأثرية.",
    description_en: "First historic capital of the Fatimid Caliphate, renowned for silky white beaches and traditional silk weaving."
  },
  {
    id: "city_gabes",
    name_ar: "قابس",
    name_en: "Gabes",
    country_ar: "تونس",
    country_en: "Tunisia",
    region: "MENA",
    iata: "GAE",
    coordinates: [33.8815, 10.0982],
    zone: "green",
    avg_hotel_price: 48,
    quality_score: 8.8,
    best_season_ar: "أكتوبر - أبريل",
    best_season_en: "October - April",
    popular_district_ar: "واحة جارة البحرية & سوق الحناء والبهارات",
    popular_district_en: "Jara Marine Oasis & Henna Market",
    hotel_deals_count: 210,
    active_flights_count: 20,
    travelpayouts: {
      booking_url: "https://www.booking.com/city/tn/gabes.ar.html?aid=YOUR_TP_MARKER",
      agoda_url: "https://www.agoda.com/city/gabes-tn.html?cid=YOUR_TP_MARKER",
      flight_url: "https://wayaway.io/flights/GAE?marker=YOUR_TP_MARKER",
      tours_url: "https://getyourguide.com/gabes-l1430/?partner_id=YOUR_TP_MARKER"
    },
    curated_hotels: [
      {
        id: "h_gae_1",
        hotel_name_ar: "فندق واحة قابس السياحي",
        hotel_name_en: "Oasis Hotel Gabes",
        stars: 3,
        badge_ar: "إطلالة على سوق الحناء والواحة البحرية",
        badge_en: "Marine Oasis & Souk View",
        price_per_night: 55,
        rating: 8.7,
        provider: "Booking.com",
        deal_url: "https://www.booking.com/city/tn/gabes.ar.html?aid=YOUR_TP_MARKER"
      }
    ],
    experiences: [
      {
        title_ar: "جولة الواحة البحرية الوحيدة في البحر المتوسط وسوق الحناء",
        title_en: "Unique Mediterranean Coastal Oasis & Henna Souk Tour",
        duration: "4 ساعات",
        price: 20,
        rating: 4.7,
        reviews_count: 1400,
        url: "https://getyourguide.com/gabes-l1430/?partner_id=YOUR_TP_MARKER"
      }
    ],
    description_ar: "الواحة البحرية الوحيدة المطلة مباشرة على البحر المتوسط في العالم، تشتهر بسوق الحناء وسوق جارة.",
    description_en: "The only coastal marine oasis on the Mediterranean Sea, famous for Henna spice markets and Jara oasis."
  },
  {
    id: "city_kebili",
    name_ar: "قبلي / دوز (بوابة الصحراء)",
    name_en: "Kebili",
    country_ar: "تونس",
    country_en: "Tunisia",
    region: "MENA",
    iata: "KBL",
    coordinates: [33.7043, 8.9690],
    zone: "green",
    avg_hotel_price: 65,
    quality_score: 9.3,
    best_season_ar: "نوفمبر - مارس (المهرجان الدولي للصحراء بدوز)",
    best_season_en: "November - March",
    popular_district_ar: "الكثبان الذهبية بدوز & المهرجان الدولي للصحراء",
    popular_district_en: "Douz Golden Dunes & Sahara Festival",
    hotel_deals_count: 240,
    active_flights_count: 35,
    travelpayouts: {
      booking_url: "https://www.booking.com/city/tn/kebili.ar.html?aid=YOUR_TP_MARKER",
      agoda_url: "https://www.agoda.com/city/kebili-tn.html?cid=YOUR_TP_MARKER",
      flight_url: "https://wayaway.io/flights/TOE?marker=YOUR_TP_MARKER",
      tours_url: "https://getyourguide.com/douz-l1431/?partner_id=YOUR_TP_MARKER"
    },
    curated_hotels: [
      {
        id: "h_kbl_1",
        hotel_name_ar: "مخيم مياري الصحراوي الفاخر بدوز",
        hotel_name_en: "Sahara Luxury Camp Douz",
        stars: 4,
        badge_ar: "مخيم نجوم الصحراء والخيام الملكية",
        badge_en: "Sahara Starry Night Luxury Glamping",
        price_per_night: 95,
        rating: 9.6,
        provider: "Booking.com",
        deal_url: "https://www.booking.com/city/tn/kebili.ar.html?aid=YOUR_TP_MARKER"
      }
    ],
    experiences: [
      {
        title_ar: "رحلة ركوب الجمال والمركبات الرباعية فوق كثبان دوز الذهبية",
        title_en: "Douz Sahara Golden Sand Dunes Quad & Camel Safari",
        duration: "5 ساعات",
        price: 35,
        rating: 4.9,
        reviews_count: 3100,
        url: "https://getyourguide.com/douz-l1431/?partner_id=YOUR_TP_MARKER"
      }
    ],
    description_ar: "بوابة الصحراء الكبرى الأولى وموطن دوز التي تستضيف المهرجان الدولي للصحراء وركوب الجمال في العرق الكبير.",
    description_en: "Ultimate Gateway to the Grand Erg Oriental desert, home to the famous International Festival of the Sahara in Douz."
  },
  {
    id: "city_gafsa",
    name_ar: "قفصة",
    name_en: "Gafsa",
    country_ar: "تونس",
    country_en: "Tunisia",
    region: "MENA",
    iata: "GSF",
    coordinates: [34.4250, 8.7842],
    zone: "green",
    avg_hotel_price: 45,
    quality_score: 8.7,
    best_season_ar: "أكتوبر - أبريل",
    best_season_en: "October - April",
    popular_district_ar: "الأحواض الرومانية التاريخية & الواحة القديمة",
    popular_district_en: "Roman Pools & Historic Oasis",
    hotel_deals_count: 180,
    active_flights_count: 15,
    travelpayouts: {
      booking_url: "https://www.booking.com/city/tn/gafsa.ar.html?aid=YOUR_TP_MARKER",
      agoda_url: "https://www.agoda.com/city/gafsa-tn.html?cid=YOUR_TP_MARKER",
      flight_url: "https://wayaway.io/flights/GSF?marker=YOUR_TP_MARKER",
      tours_url: "https://getyourguide.com/gafsa-l1432/?partner_id=YOUR_TP_MARKER"
    },
    curated_hotels: [
      {
        id: "h_gsf_1",
        hotel_name_ar: "فندق فندق قفصة بالاس",
        hotel_name_en: "Hotel Gafsa Palace",
        stars: 4,
        badge_ar: "فندق الراحة قرب الأحواض الرومانية",
        badge_en: "Comfort Stay Near Roman Pools",
        price_per_night: 60,
        rating: 8.8,
        provider: "Booking.com",
        deal_url: "https://www.booking.com/city/tn/gafsa.ar.html?aid=YOUR_TP_MARKER"
      }
    ],
    experiences: [
      {
        title_ar: "زيارة الأحواض الرومانية الأثرية وقطار اللقاء الوردي (الجرذون)",
        title_en: "Roman Archaeological Pools & Red Lizard Historic Train Tour",
        duration: "4 ساعات",
        price: 25,
        rating: 4.8,
        reviews_count: 950,
        url: "https://getyourguide.com/gafsa-l1432/?partner_id=YOUR_TP_MARKER"
      }
    ],
    description_ar: "عاصمة الجنوب الغربي التاريخية، تشتهر بالأحواض الرومانية الفريدة وقطار سيلان الفسفاط التاريخي.",
    description_en: "Historic southwestern hub known for ancient Roman stone swimming pools and Red Lizard heritage canyon train."
  },
  {
    id: "city_beja",
    name_ar: "باجة",
    name_en: "Beja",
    country_ar: "تونس",
    country_en: "Tunisia",
    region: "MENA",
    iata: "BJA",
    coordinates: [36.7256, 9.1817],
    zone: "green",
    avg_hotel_price: 42,
    quality_score: 8.9,
    best_season_ar: "مارس - مايو",
    best_season_en: "March - May",
    popular_district_ar: "القصبة الأثرية & سهول القمح & سد كساب",
    popular_district_en: "Beja Kasbah & Kasseb Dam",
    hotel_deals_count: 150,
    active_flights_count: 10,
    travelpayouts: {
      booking_url: "https://www.booking.com/city/tn/beja.ar.html?aid=YOUR_TP_MARKER",
      agoda_url: "https://www.agoda.com/city/beja-tn.html?cid=YOUR_TP_MARKER",
      flight_url: "https://wayaway.io/flights/TUN?marker=YOUR_TP_MARKER",
      tours_url: "https://getyourguide.com/beja-l1433/?partner_id=YOUR_TP_MARKER"
    },
    curated_hotels: [
      {
        id: "h_bja_1",
        hotel_name_ar: "فندق باجة فينيكس الجبلي",
        hotel_name_en: "Hotel Beja Valley",
        stars: 3,
        badge_ar: "إطلالة على مزارع القمح الخضراء",
        badge_en: "Green Wheat Valleys View",
        price_per_night: 48,
        rating: 8.7,
        provider: "Booking.com",
        deal_url: "https://www.booking.com/city/tn/beja.ar.html?aid=YOUR_TP_MARKER"
      }
    ],
    experiences: [
      {
        title_ar: "جولة القصبة الأثرية وتذوق الأجبان التقليدية الباجية",
        title_en: "Kasbah Citadel & Artisan Beja Cheese Tasting",
        duration: "3 ساعات",
        price: 15,
        rating: 4.8,
        reviews_count: 820,
        url: "https://getyourguide.com/beja-l1433/?partner_id=YOUR_TP_MARKER"
      }
    ],
    description_ar: "مطمرة روما الخضراء، تشتهر بسهول القمح اللانهائية والقصبة الأثرية وصناعة المخارق والأجبان اللذيذة.",
    description_en: "Tunisia's ancient breadbasket, famous for rolling green wheat fields, Kasbah fortress, and artisanal cheeses."
  },
  {
    id: "city_siliana",
    name_ar: "سليانة",
    name_en: "Siliana",
    country_ar: "تونس",
    country_en: "Tunisia",
    region: "MENA",
    iata: "SIL",
    coordinates: [36.0849, 9.3708],
    zone: "green",
    avg_hotel_price: 38,
    quality_score: 8.8,
    best_season_ar: "مارس - مايو & سبتمبر - نوفمبر",
    best_season_en: "March - May & September - November",
    popular_district_ar: "موقع زامة الأثري & جبل كسرى النخيل الجبلي",
    popular_district_en: "Kesra Mountain Village & Zama Site",
    hotel_deals_count: 120,
    active_flights_count: 5,
    travelpayouts: {
      booking_url: "https://www.booking.com/city/tn/siliana.ar.html?aid=YOUR_TP_MARKER",
      agoda_url: "https://www.agoda.com/city/siliana-tn.html?cid=YOUR_TP_MARKER",
      flight_url: "https://wayaway.io/flights/TUN?marker=YOUR_TP_MARKER",
      tours_url: "https://getyourguide.com/siliana-l1434/?partner_id=YOUR_TP_MARKER"
    },
    curated_hotels: [
      {
        id: "h_sil_1",
        hotel_name_ar: "دار الضيافة الجبلية كسرى",
        hotel_name_en: "Maison d'Hôte Kesra Siliana",
        stars: 3,
        badge_ar: "إقامة بين عيون المياه الجبلية وبساتين التين",
        badge_en: "Mountain Springs & Fig Grove Guesthouse",
        price_per_night: 42,
        rating: 9.1,
        provider: "Booking.com",
        deal_url: "https://www.booking.com/city/tn/siliana.ar.html?aid=YOUR_TP_MARKER"
      }
    ],
    experiences: [
      {
        title_ar: "جولة قرية كسرى الجبلية (أعلى قرية في تونس) وعيون المياه",
        title_en: "Kesra Mountain Village (Highest Village in Tunisia) Spring Walk",
        duration: "4 ساعات",
        price: 18,
        rating: 4.9,
        reviews_count: 650,
        url: "https://getyourguide.com/siliana-l1434/?partner_id=YOUR_TP_MARKER"
      }
    ],
    description_ar: "تضم قرية كسرى التاريخية وهي أعلى قرية مأهولة بالجمهورية التونسية، وموقع معركة زامة الشهيرة بين حنبعل وسكيبو.",
    description_en: "Home to Kesra, the highest mountain village in Tunisia, springs, and site of the legendary Battle of Zama."
  },
  {
    id: "city_zaghouan",
    name_ar: "زغوان",
    name_en: "Zaghouan",
    country_ar: "تونس",
    country_en: "Tunisia",
    region: "MENA",
    iata: "ZAG",
    coordinates: [36.4029, 10.1429],
    zone: "green",
    avg_hotel_price: 52,
    quality_score: 9.1,
    best_season_ar: "مارس - مايو (موسم تقطير زهر النسرين)",
    best_season_en: "March - May (Eglantine Festival)",
    popular_district_ar: "معبد المياه الروماني & جبل زغوان & المدينة الأندلسية",
    popular_district_en: "Roman Water Temple & Mount Zaghouan",
    hotel_deals_count: 190,
    active_flights_count: 15,
    travelpayouts: {
      booking_url: "https://www.booking.com/city/tn/zaghouan.ar.html?aid=YOUR_TP_MARKER",
      agoda_url: "https://www.agoda.com/city/zaghouan-tn.html?cid=YOUR_TP_MARKER",
      flight_url: "https://wayaway.io/flights/TUN?marker=YOUR_TP_MARKER",
      tours_url: "https://getyourguide.com/zaghouan-l1435/?partner_id=YOUR_TP_MARKER"
    },
    curated_hotels: [
      {
        id: "h_zag_1",
        hotel_name_ar: "دار زغوان الريفية التراثية",
        hotel_name_en: "Dar Zaghouan Eco Farm Guesthouse",
        stars: 4,
        badge_ar: "أفضل ضيافة ريفية وتقطير نسرين",
        badge_en: "Top Eco-Farm & Eglantine Water Tasting",
        price_per_night: 68,
        rating: 9.5,
        provider: "Booking.com",
        deal_url: "https://www.booking.com/city/tn/zaghouan.ar.html?aid=YOUR_TP_MARKER"
      }
    ],
    experiences: [
      {
        title_ar: "جولة معبد المياه الروماني وتفتيح زهر النسرين الأندلسي",
        title_en: "Roman Temple of Water & Andalusian Eglantine Rose Distillation",
        duration: "4 ساعات",
        price: 22,
        rating: 4.9,
        reviews_count: 1200,
        url: "https://getyourguide.com/zaghouan-l1435/?partner_id=YOUR_TP_MARKER"
      }
    ],
    description_ar: "مبعث الحنايا ومعبد المياه الروماني الذي كان يزود قرطاج بالماء، وتشتهر بتقطير زهر النسرين الأندلسي العطر.",
    description_en: "Famous for the magnificent Roman Temple of Water, Zaghouan aqueducts to Carthage, and sweet Eglantine rosewater."
  },
  {
    id: "city_sidi_bouzid",
    name_ar: "سيدي بوزيد",
    name_en: "Sidi Bouzid",
    country_ar: "تونس",
    country_en: "Tunisia",
    region: "MENA",
    iata: "SBD",
    coordinates: [35.0382, 9.4849],
    zone: "green",
    avg_hotel_price: 35,
    quality_score: 8.6,
    best_season_ar: "أكتوبر - أبريل",
    best_season_en: "October - April",
    popular_district_ar: "ساحة الشهداء & مزارع اللوز والزيتون",
    popular_district_en: "Martyrs Square & Almond Groves",
    hotel_deals_count: 110,
    active_flights_count: 5,
    travelpayouts: {
      booking_url: "https://www.booking.com/city/tn/sidi-bouzid.ar.html?aid=YOUR_TP_MARKER",
      agoda_url: "https://www.agoda.com/city/sidi-bouzid-tn.html?cid=YOUR_TP_MARKER",
      flight_url: "https://wayaway.io/flights/TUN?marker=YOUR_TP_MARKER",
      tours_url: "https://getyourguide.com/sidi-bouzid-l1436/?partner_id=YOUR_TP_MARKER"
    },
    curated_hotels: [
      {
        id: "h_sbd_1",
        hotel_name_ar: "فندق بوزيد الفلاحي",
        hotel_name_en: "Hotel Bouzid Central",
        stars: 3,
        badge_ar: "مركز المدينة الهادئ مع إفطار ريفي",
        badge_en: "Central City Stay & Country Breakfast",
        price_per_night: 40,
        rating: 8.5,
        provider: "Booking.com",
        deal_url: "https://www.booking.com/city/tn/sidi-bouzid.ar.html?aid=YOUR_TP_MARKER"
      }
    ],
    experiences: [
      {
        title_ar: "جولة المعالم التاريخية ومزارع اللوز والزيتون",
        title_en: "Heritage Martyrs Square & Almond Farm Tour",
        duration: "3 ساعات",
        price: 12,
        rating: 4.7,
        reviews_count: 450,
        url: "https://getyourguide.com/sidi-bouzid-l1436/?partner_id=YOUR_TP_MARKER"
      }
    ],
    description_ar: "قلب الوسط التونسي الفلاحي الزاخر بمزارع اللوز والزيتون والأغنام، ومركز الأحداث التاريخية الحديثة.",
    description_en: "Agricultural heartland of central Tunisia, known for vast almond orchards, olive groves, and historic heritage."
  },
  {
    id: "city_kasserine",
    name_ar: "القصرين",
    name_en: "Kasserine",
    country_ar: "تونس",
    country_en: "Tunisia",
    region: "MENA",
    iata: "KAS",
    coordinates: [35.1676, 8.8365],
    zone: "green",
    avg_hotel_price: 38,
    quality_score: 8.8,
    best_season_ar: "أكتوبر - أبريل",
    best_season_en: "October - April",
    popular_district_ar: "جبل الشعانبي (أعلى قمة في تونس) & موقع سبيطلة الروماني",
    popular_district_en: "Mount Chaambi & Sbeitla Roman Capitol",
    hotel_deals_count: 130,
    active_flights_count: 10,
    travelpayouts: {
      booking_url: "https://www.booking.com/city/tn/kasserine.ar.html?aid=YOUR_TP_MARKER",
      agoda_url: "https://www.agoda.com/city/kasserine-tn.html?cid=YOUR_TP_MARKER",
      flight_url: "https://wayaway.io/flights/TUN?marker=YOUR_TP_MARKER",
      tours_url: "https://getyourguide.com/sbeitla-l1437/?partner_id=YOUR_TP_MARKER"
    },
    curated_hotels: [
      {
        id: "h_kas_1",
        hotel_name_ar: "فندق سبيطلة كابيتول الأثري",
        hotel_name_en: "Sbeitla Hotel Capitol",
        stars: 3,
        badge_ar: "قريب جداً من معابد سبيطلة الرومانية",
        badge_en: "Adjacent to Sbeitla Roman Temples",
        price_per_night: 45,
        rating: 8.9,
        provider: "Booking.com",
        deal_url: "https://www.booking.com/city/tn/kasserine.ar.html?aid=YOUR_TP_MARKER"
      }
    ],
    experiences: [
      {
        title_ar: "جولة معابد الكابيتول الروماني بسبيطلة وإطلالة جبل الشعانبي",
        title_en: "Sbeitla Roman Capitol Forum & Mount Chaambi View",
        duration: "5 ساعات",
        price: 20,
        rating: 4.9,
        reviews_count: 1100,
        url: "https://getyourguide.com/sbeitla-l1437/?partner_id=YOUR_TP_MARKER"
      }
    ],
    description_ar: "موطن جبل الشعانبي وهو أعلى قمة جبلية بالجمهورية التونسية (1544م)، وتضم آثار سبيطلة الرومانية الذهبية.",
    description_en: "Home to Mount Chaambi (1,544m), the highest peak in Tunisia, and the golden Roman ruins of Sbeitla."
  },
  {
    id: "city_tataouine",
    name_ar: "تطاوين (قصور قصور الصحراء)",
    name_en: "Tataouine",
    country_ar: "تونس",
    country_en: "Tunisia",
    region: "MENA",
    iata: "TTN",
    coordinates: [32.9297, 10.4518],
    zone: "green",
    avg_hotel_price: 58,
    quality_score: 9.4,
    best_season_ar: "أكتوبر - أبريل",
    best_season_en: "October - April",
    popular_district_ar: "قصر أولاد سلطان & قصر حدادة & شنني الجبلية",
    popular_district_en: "Ksar Ouled Soltane & Chenini",
    hotel_deals_count: 220,
    active_flights_count: 25,
    travelpayouts: {
      booking_url: "https://www.booking.com/city/tn/tataouine.ar.html?aid=YOUR_TP_MARKER",
      agoda_url: "https://www.agoda.com/city/tataouine-tn.html?cid=YOUR_TP_MARKER",
      flight_url: "https://wayaway.io/flights/DJE?marker=YOUR_TP_MARKER",
      tours_url: "https://getyourguide.com/tataouine-l1438/?partner_id=YOUR_TP_MARKER"
    },
    curated_hotels: [
      {
        id: "h_ttn_1",
        hotel_name_ar: "فندق قصر المغارة الجبلية شنني",
        hotel_name_en: "Ksar Jouamaa Mountain Cave Hotel",
        stars: 4,
        badge_ar: "إقامة في غرف القصور البربرية الأثرية",
        badge_en: "Berber Cliff Cave Ksar Stay",
        price_per_night: 75,
        rating: 9.7,
        provider: "Booking.com",
        deal_url: "https://www.booking.com/city/tn/tataouine.ar.html?aid=YOUR_TP_MARKER"
      }
    ],
    experiences: [
      {
        title_ar: "جولة قصور البربر التاريخية (قصر أولاد سلطان وشنني وقصر حدادة)",
        title_en: "Ksar Ouled Soltane & Chenini Berber Troglodyte Tour",
        duration: "6 ساعات",
        price: 40,
        rating: 5.0,
        reviews_count: 3800,
        url: "https://getyourguide.com/tataouine-l1438/?partner_id=YOUR_TP_MARKER"
      }
    ],
    description_ar: "أيقونة سينما هوليوود التي استوحى منها جورج لوكاس كوكب Tatooine، تضم قصور أولاد سلطان وشنني الجبلية.",
    description_en: "Famous inspiration for George Lucas's Star Wars planet Tatooine, featuring ancient Berber multi-story Ksour architecture."
  },
  {
    id: "city_kef",
    name_ar: "الكاف",
    name_en: "El Kef",
    country_ar: "تونس",
    country_en: "Tunisia",
    region: "MENA",
    iata: "KEF",
    coordinates: [36.1826, 8.7148],
    zone: "green",
    avg_hotel_price: 40,
    quality_score: 9.1,
    best_season_ar: "مارس - مايو & أكتوبر - نوفمبر",
    best_season_en: "March - May & October - November",
    popular_district_ar: "القصبة العثمانية & معبد مائدة يوغرطة الجبلي",
    popular_district_en: "Ottoman Kasbah & Jugurtha Tabletop Mountain",
    hotel_deals_count: 160,
    active_flights_count: 10,
    travelpayouts: {
      booking_url: "https://www.booking.com/city/tn/el-kef.ar.html?aid=YOUR_TP_MARKER",
      agoda_url: "https://www.agoda.com/city/el-kef-tn.html?cid=YOUR_TP_MARKER",
      flight_url: "https://wayaway.io/flights/TUN?marker=YOUR_TP_MARKER",
      tours_url: "https://getyourguide.com/el-kef-l1439/?partner_id=YOUR_TP_MARKER"
    },
    curated_hotels: [
      {
        id: "h_kef_1",
        hotel_name_ar: "دار الضيافة سيدي بومخلوف الكاف",
        hotel_name_en: "Dar Sidi Boumakhlouf El Kef",
        stars: 4,
        badge_ar: "إطلالة بانورامية من أعالي القصبة",
        badge_en: "Kasbah Summit Panoramic Guesthouse",
        price_per_night: 55,
        rating: 9.4,
        provider: "Booking.com",
        deal_url: "https://www.booking.com/city/tn/el-kef.ar.html?aid=YOUR_TP_MARKER"
      }
    ],
    experiences: [
      {
        title_ar: "صعود مائدة يوغرطة الجبلية العجيبة والقصبة العثمانية",
        title_en: "Jugurtha Tableland Mountain Hike & Kasbah Tour",
        duration: "5 ساعات",
        price: 25,
        rating: 4.9,
        reviews_count: 1300,
        url: "https://getyourguide.com/el-kef-l1439/?partner_id=YOUR_TP_MARKER"
      }
    ],
    description_ar: "عروس الشمال الغربي المنحوتة في أعالي الجبل، تضم مائدة يوغرطة الأسطورية والقصبة العثمانية ومقام سيدي بومخلوف.",
    description_en: "Mountain fortress town home to the geological wonder of Jugurtha's Tableland plateau and Ottoman Citadel."
  },
  {
    id: "city_ariana",
    name_ar: "أريانة",
    name_en: "Ariana",
    country_ar: "تونس",
    country_en: "Tunisia",
    region: "MENA",
    iata: "ARI",
    coordinates: [36.8625, 10.1956],
    zone: "green",
    avg_hotel_price: 68,
    quality_score: 9.0,
    best_season_ar: "طوال العام",
    best_season_en: "Year-Round",
    popular_district_ar: "منتزه النحلي & المروج & الوردية",
    popular_district_en: "Ennahli Park & Ariana Rose Gardens",
    hotel_deals_count: 340,
    active_flights_count: 60,
    travelpayouts: {
      booking_url: "https://www.booking.com/city/tn/ariana.ar.html?aid=YOUR_TP_MARKER",
      agoda_url: "https://www.agoda.com/city/ariana-tn.html?cid=YOUR_TP_MARKER",
      flight_url: "https://wayaway.io/flights/TUN?marker=YOUR_TP_MARKER",
      tours_url: "https://getyourguide.com/ariana-l1440/?partner_id=YOUR_TP_MARKER"
    },
    curated_hotels: [
      {
        id: "h_ari_1",
        hotel_name_ar: "فندق الغزالة للابتكار والتكنولوجيا",
        hotel_name_en: "El Ghazala Tech Park Hotel",
        stars: 4,
        badge_ar: "قريب من قطب التكنولوجيا والورد",
        badge_en: "Modern Tech Park Stay",
        price_per_night: 75,
        rating: 9.0,
        provider: "Booking.com",
        deal_url: "https://www.booking.com/city/tn/ariana.ar.html?aid=YOUR_TP_MARKER"
      }
    ],
    experiences: [
      {
        title_ar: "جولة حدائق الورود التونسية ومنتزه النحلي الطبيعي",
        title_en: "Ariana Rose Festival & Ennahli Nature Park Walk",
        duration: "3 ساعات",
        price: 15,
        rating: 4.7,
        reviews_count: 780,
        url: "https://getyourguide.com/ariana-l1440/?partner_id=YOUR_TP_MARKER"
      }
    ],
    description_ar: "مدينة الورود والقطب التكنولوجي شمال تونس العاصمة، تمتاز بحدائق النحلي ومنتزهاتها الخضراء.",
    description_en: "Northern suburb of Tunis known as the City of Roses, housing major tech parks and green nature reserves."
  },
  {
    id: "city_ben_arous",
    name_ar: "بن عروس",
    name_en: "Ben Arous",
    country_ar: "تونس",
    country_en: "Tunisia",
    region: "MENA",
    iata: "BAR",
    coordinates: [36.7531, 10.2222],
    zone: "green",
    avg_hotel_price: 58,
    quality_score: 8.9,
    best_season_ar: "طوال العام",
    best_season_en: "Year-Round",
    popular_district_ar: "مقرين & رادس & ميناء رادس الملاحي",
    popular_district_en: "Radès Sports Complex & Megrine",
    hotel_deals_count: 280,
    active_flights_count: 40,
    travelpayouts: {
      booking_url: "https://www.booking.com/city/tn/ben-arous.ar.html?aid=YOUR_TP_MARKER",
      agoda_url: "https://www.agoda.com/city/ben-arous-tn.html?cid=YOUR_TP_MARKER",
      flight_url: "https://wayaway.io/flights/TUN?marker=YOUR_TP_MARKER",
      tours_url: "https://getyourguide.com/ben-arous-l1441/?partner_id=YOUR_TP_MARKER"
    },
    curated_hotels: [
      {
        id: "h_bar_1",
        hotel_name_ar: "فندق رادس الأولمبي",
        hotel_name_en: "Rades Olympic Sport Hotel",
        stars: 4,
        badge_ar: "إطلالة على المجمع الرياضي الأولمبي",
        badge_en: "Olympic Sports Complex Stay",
        price_per_night: 65,
        rating: 8.8,
        provider: "Booking.com",
        deal_url: "https://www.booking.com/city/tn/ben-arous.ar.html?aid=YOUR_TP_MARKER"
      }
    ],
    experiences: [
      {
        title_ar: "جولة مجمع رادس الأولمبي والغابات الساحلية",
        title_en: "Radès Olympic Arena & Coastal Forest Walk",
        duration: "3 ساعات",
        price: 15,
        rating: 4.7,
        reviews_count: 620,
        url: "https://getyourguide.com/ben-arous-l1441/?partner_id=YOUR_TP_MARKER"
      }
    ],
    description_ar: "البوابة الجنوبية للعاصمة وموطن المجمع الرياضي الأولمبي برادس والميناء التجاري.",
    description_en: "Southern gateway to Tunis metropolis, home to the national Radès Olympic Sports Arena."
  },
  {
    id: "city_manouba",
    name_ar: "منوبة",
    name_en: "Manouba",
    country_ar: "تونس",
    country_en: "Tunisia",
    region: "MENA",
    iata: "MNB",
    coordinates: [36.8078, 10.0864],
    zone: "green",
    avg_hotel_price: 45,
    quality_score: 8.8,
    best_season_ar: "طوال العام",
    best_season_en: "Year-Round",
    popular_district_ar: "قصر القبة السعيدة & المركب الجامعي منوبة",
    popular_district_en: "Ksar Kouba Saidia & University Hub",
    hotel_deals_count: 170,
    active_flights_count: 20,
    travelpayouts: {
      booking_url: "https://www.booking.com/city/tn/manouba.ar.html?aid=YOUR_TP_MARKER",
      agoda_url: "https://www.agoda.com/city/manouba-tn.html?cid=YOUR_TP_MARKER",
      flight_url: "https://wayaway.io/flights/TUN?marker=YOUR_TP_MARKER",
      tours_url: "https://getyourguide.com/manouba-l1442/?partner_id=YOUR_TP_MARKER"
    },
    curated_hotels: [
      {
        id: "h_mnb_1",
        hotel_name_ar: "فندق قصر منوبة التاريخي",
        hotel_name_en: "Manouba Heritage Hotel",
        stars: 3,
        badge_ar: "هدوء الريف قرب قصر القبة السعيدة",
        badge_en: "Quiet Suburban Heritage Stay",
        price_per_night: 50,
        rating: 8.6,
        provider: "Booking.com",
        deal_url: "https://www.booking.com/city/tn/manouba.ar.html?aid=YOUR_TP_MARKER"
      }
    ],
    experiences: [
      {
        title_ar: "زيارة قصر القبة السعيدة الأثري والمصانع التراثية",
        title_en: "Historic Ksar Kouba Saidia Palace Tour",
        duration: "3 ساعات",
        price: 12,
        rating: 4.6,
        reviews_count: 510,
        url: "https://getyourguide.com/manouba-l1442/?partner_id=YOUR_TP_MARKER"
      }
    ],
    description_ar: "الضاحية الغربية التاريخية، تشتهر بقصور البايات القديمة مثل قصر القبة السعيدة وجامعة منوبة.",
    description_en: "Western historic district of Tunis, known for historic Beylical palaces and academic institutions."
  },
  // ==================== IRAQ (العراق) - High Detail ====================
  {
    id: "city_baghdad",
    name_ar: "بغداد",
    name_en: "Baghdad",
    country_ar: "العراق",
    country_en: "Iraq",
    region: "MENA",
    iata: "BGW",
    coordinates: [33.3152, 44.3661],
    zone: "green",
    avg_hotel_price: 120,
    quality_score: 9.2,
    best_season_ar: "أكتوبر - أبريل",
    best_season_en: "October - April",
    popular_district_ar: "الكرادة & الجادرية & شارع الرشيد",
    popular_district_en: "Karrada & Jadiriya",
    hotel_deals_count: 320,
    active_flights_count: 140,
    travelpayouts: {
      booking_url: "https://www.booking.com/city/iq/baghdad.ar.html?aid=YOUR_TP_MARKER",
      agoda_url: "https://www.agoda.com/city/baghdad-iq.html?cid=YOUR_TP_MARKER",
      flight_url: "https://wayaway.io/flights/BGW?marker=YOUR_TP_MARKER",
      tours_url: "https://getyourguide.com/baghdad-l3201/?partner_id=YOUR_TP_MARKER"
    },
    curated_hotels: [
      {
        id: "h_bgw_1",
        hotel_name_ar: "فندق بابل روتانا بغداد",
        hotel_name_en: "Babylon Rotana Hotel Baghdad",
        stars: 5,
        badge_ar: "أفخم إطلالة على نهر دجلة",
        badge_en: "Luxury Tigris River View",
        price_per_night: 210,
        rating: 9.5,
        provider: "Booking.com",
        deal_url: "https://www.booking.com/city/iq/baghdad.ar.html?aid=YOUR_TP_MARKER"
      },
      {
        id: "h_bgw_2",
        hotel_name_ar: "فندق فلسطين الدولي",
        hotel_name_en: "Palestine International Hotel",
        stars: 4,
        badge_ar: "وسط المدينة والمركز التجاري",
        badge_en: "City Center Business Hotel",
        price_per_night: 110,
        rating: 9.0,
        provider: "Agoda",
        deal_url: "https://www.agoda.com/city/baghdad-iq.html?cid=YOUR_TP_MARKER"
      }
    ],
    experiences: [
      {
        title_ar: "جولة تاريخية في شارع المتنبي والقشلة والمتحف العراقي",
        title_en: "Al-Mutanabbi Street & Iraqi National Museum Tour",
        duration: "5 ساعات",
        price: 45,
        rating: 4.9,
        reviews_count: 2100,
        url: "https://getyourguide.com/baghdad-l3201/?partner_id=YOUR_TP_MARKER"
      }
    ],
    description_ar: "عاصمة العراق التاريخية ومركز الحضارة العباسية على ضفاف نهر دجلة الخالد، تضم شارع المتنبي والمتحف العراقي والآثار العريقة.",
    description_en: "Historic capital of Iraq and the Abbasid Caliphate along the Tigris River, rich in ancient civilization and heritage."
  },
  {
    id: "city_erbil",
    name_ar: "أربيل",
    name_en: "Erbil",
    country_ar: "العراق",
    country_en: "Iraq",
    region: "MENA",
    iata: "EBL",
    coordinates: [36.1901, 44.0091],
    zone: "green",
    avg_hotel_price: 95,
    quality_score: 9.3,
    best_season_ar: "مارس - مايو & سبتمبر - نوفمبر",
    best_season_en: "March - May & September - November",
    popular_district_ar: "قلعة أربيل التاريخية & عينكاوة",
    popular_district_en: "Erbil Citadel & Ainkawa",
    hotel_deals_count: 240,
    active_flights_count: 110,
    travelpayouts: {
      booking_url: "https://www.booking.com/city/iq/erbil.ar.html?aid=YOUR_TP_MARKER",
      agoda_url: "https://www.agoda.com/city/erbil-iq.html?cid=YOUR_TP_MARKER",
      flight_url: "https://wayaway.io/flights/EBL?marker=YOUR_TP_MARKER",
      tours_url: "https://getyourguide.com/erbil-l3202/?partner_id=YOUR_TP_MARKER"
    },
    curated_hotels: [
      {
        id: "h_ebl_1",
        hotel_name_ar: "فندق أربيل أربيل روتانا",
        hotel_name_en: "Erbil Rotana Hotel",
        stars: 5,
        badge_ar: "خمس نجوم فاخر قرب القلعة",
        badge_en: "5-Star Luxury Near Citadel",
        price_per_night: 175,
        rating: 9.4,
        provider: "Booking.com",
        deal_url: "https://www.booking.com/city/iq/erbil.ar.html?aid=YOUR_TP_MARKER"
      }
    ],
    experiences: [
      {
        title_ar: "جولة قلعة أربيل المسجلة باليونسكو والأسواق القديمة",
        title_en: "UNESCO Erbil Citadel & Heritage Souk Walk",
        duration: "4 ساعات",
        price: 35,
        rating: 4.8,
        reviews_count: 1800,
        url: "https://getyourguide.com/erbil-l3202/?partner_id=YOUR_TP_MARKER"
      }
    ],
    description_ar: "عاصمة إقليم كردستان العراق وتضم إحدى أقدم القلاع المأهولة في التاريخ المسجلة في لائحة اليونسكو للترث العالمي.",
    description_en: "Capital of Kurdistan Region of Iraq, featuring the UNESCO World Heritage Citadel, one of the oldest continuously inhabited sites in human history."
  },
  {
    id: "city_basra",
    name_ar: "البصرة",
    name_en: "Basra",
    country_ar: "العراق",
    country_en: "Iraq",
    region: "MENA",
    iata: "BSR",
    coordinates: [30.5081, 47.7835],
    zone: "green",
    avg_hotel_price: 110,
    quality_score: 9.0,
    best_season_ar: "نوفمبر - مارس",
    best_season_en: "November - March",
    popular_district_ar: "كورنيش شط العرب & البصرة القديمة",
    popular_district_en: "Shatt al-Arab Corniche",
    hotel_deals_count: 180,
    active_flights_count: 85,
    travelpayouts: {
      booking_url: "https://www.booking.com/city/iq/basra.ar.html?aid=YOUR_TP_MARKER",
      agoda_url: "https://www.agoda.com/city/basra-iq.html?cid=YOUR_TP_MARKER",
      flight_url: "https://wayaway.io/flights/BSR?marker=YOUR_TP_MARKER",
      tours_url: "https://getyourguide.com/basra-l3203/?partner_id=YOUR_TP_MARKER"
    },
    curated_hotels: [
      {
        id: "h_bsr_1",
        hotel_name_ar: "فندق موفنبيك البصرة",
        hotel_name_en: "Mövenpick Hotel Basra",
        stars: 5,
        badge_ar: "إطلالة شط العرب الفاخرة",
        badge_en: "Shatt Al Arab View",
        price_per_night: 160,
        rating: 9.2,
        provider: "Booking.com",
        deal_url: "https://www.booking.com/city/iq/basra.ar.html?aid=YOUR_TP_MARKER"
      }
    ],
    experiences: [
      {
        title_ar: "رحلة نهرية في شط العرب وزيارة أهوار جنوب العراق",
        title_en: "Shatt al-Arab Cruise & Mesopotamian Marshes Tour",
        duration: "6 ساعات",
        price: 50,
        rating: 4.9,
        reviews_count: 1200,
        url: "https://getyourguide.com/basra-l3203/?partner_id=YOUR_TP_MARKER"
      }
    ],
    description_ar: "عروس الخليج العراقي والتاريخ العريق على ملتقى دجلة والفرات في شط العرب وبوابة الأهوار الجنوبية.",
    description_en: "Venice of the Middle East, located at the confluence of Tigris and Euphrates rivers along the Shatt al-Arab waterway."
  },
  {
    id: "city_mosul",
    name_ar: "الموصل",
    name_en: "Mosul",
    country_ar: "العراق",
    country_en: "Iraq",
    region: "MENA",
    iata: "OSM",
    coordinates: [36.3400, 43.1300],
    zone: "green",
    avg_hotel_price: 85,
    quality_score: 8.9,
    best_season_ar: "مارس - مايو & أكتوبر - نوفمبر",
    best_season_en: "March - May & October - November",
    popular_district_ar: "الموصل القديمة & الغابات & نينوى",
    popular_district_en: "Old Mosul & Nineveh Ruins",
    hotel_deals_count: 110,
    active_flights_count: 40,
    travelpayouts: {
      booking_url: "https://www.booking.com/city/iq/mosul.ar.html?aid=YOUR_TP_MARKER",
      agoda_url: "https://www.agoda.com/city/mosul-iq.html?cid=YOUR_TP_MARKER",
      flight_url: "https://wayaway.io/flights/OSM?marker=YOUR_TP_MARKER",
      tours_url: "https://getyourguide.com/mosul-l3204/?partner_id=YOUR_TP_MARKER"
    },
    curated_hotels: [
      {
        id: "h_osm_1",
        hotel_name_ar: "فندق نينوى الدولي",
        hotel_name_en: "Nineveh International Hotel",
        stars: 4,
        badge_ar: "إطلالة على ضفاف نهر دجلة",
        badge_en: "Tigris River Front Stay",
        price_per_night: 95,
        rating: 8.8,
        provider: "Booking.com",
        deal_url: "https://www.booking.com/city/iq/mosul.ar.html?aid=YOUR_TP_MARKER"
      }
    ],
    experiences: [
      {
        title_ar: "جولة آثار نينوى الآشورية والبلدة القديمة",
        title_en: "Ancient Nineveh Assyrian Heritage Tour",
        duration: "5 ساعات",
        price: 40,
        rating: 4.8,
        reviews_count: 950,
        url: "https://getyourguide.com/mosul-l3204/?partner_id=YOUR_TP_MARKER"
      }
    ],
    description_ar: "أم الربيعين وعاصمة حضارة نينوى الآشورية التاريخية على نهر دجلة بشمال العراق.",
    description_en: "Historic city of Nineveh along the Tigris River, famous for its ancient Assyrian heritage and Spring beauty."
  },
  {
    id: "city_kerbala",
    name_ar: "كربلاء",
    name_en: "Kerbala",
    country_ar: "العراق",
    country_en: "Iraq",
    region: "MENA",
    iata: "KIB",
    coordinates: [32.6160, 44.0249],
    zone: "green",
    avg_hotel_price: 75,
    quality_score: 9.1,
    best_season_ar: "أكتوبر - أبريل",
    best_season_en: "October - April",
    popular_district_ar: "المركز القديم & العتبة المقدسة",
    popular_district_en: "Holy Shrines District",
    hotel_deals_count: 290,
    active_flights_count: 60,
    travelpayouts: {
      booking_url: "https://www.booking.com/city/iq/karbala.ar.html?aid=YOUR_TP_MARKER",
      agoda_url: "https://www.agoda.com/city/karbala-iq.html?cid=YOUR_TP_MARKER",
      flight_url: "https://wayaway.io/flights/BGW?marker=YOUR_TP_MARKER",
      tours_url: "https://getyourguide.com/karbala-l3205/?partner_id=YOUR_TP_MARKER"
    },
    curated_hotels: [
      {
        id: "h_kib_1",
        hotel_name_ar: "فندق بارون كربلاء الفاخر",
        hotel_name_en: "The Baron Hotel Karbala",
        stars: 5,
        badge_ar: "أعلى تقييم للضيافة الفاخرة",
        badge_en: "Top Rated Luxury Hotel",
        price_per_night: 125,
        rating: 9.5,
        provider: "Booking.com",
        deal_url: "https://www.booking.com/city/iq/karbala.ar.html?aid=YOUR_TP_MARKER"
      }
    ],
    experiences: [
      {
        title_ar: "جولة المعالم التاريخية والثقافية في كربلاء المقدسة",
        title_en: "Cultural & Heritage Tour of Holy Karbala",
        duration: "4 ساعات",
        price: 30,
        rating: 4.9,
        reviews_count: 3100,
        url: "https://getyourguide.com/karbala-l3205/?partner_id=YOUR_TP_MARKER"
      }
    ],
    description_ar: "مدينة تاريخية ودينية عريقة في وسط العراق تشتهر بآثارها العمرانية وصروحها المعمارية الفريدة.",
    description_en: "Major historic and cultural spiritual center in central Iraq, renowned for iconic architecture and hospitality."
  },
  {
    id: "city_najaf",
    name_ar: "النجف",
    name_en: "Najaf",
    country_ar: "العراق",
    country_en: "Iraq",
    region: "MENA",
    iata: "NJF",
    coordinates: [32.0000, 44.3167],
    zone: "green",
    avg_hotel_price: 80,
    quality_score: 9.0,
    best_season_ar: "أكتوبر - أبريل",
    best_season_en: "October - April",
    popular_district_ar: "المدينة القديمة & بحر النجف",
    popular_district_en: "Old Najaf & Lake District",
    hotel_deals_count: 260,
    active_flights_count: 95,
    travelpayouts: {
      booking_url: "https://www.booking.com/city/iq/najaf.ar.html?aid=YOUR_TP_MARKER",
      agoda_url: "https://www.agoda.com/city/najaf-iq.html?cid=YOUR_TP_MARKER",
      flight_url: "https://wayaway.io/flights/NJF?marker=YOUR_TP_MARKER",
      tours_url: "https://getyourguide.com/najaf-l3206/?partner_id=YOUR_TP_MARKER"
    },
    curated_hotels: [
      {
        id: "h_njf_1",
        hotel_name_ar: "فندق قصر الدر النجف",
        hotel_name_en: "Qasr Al-Durr Hotel Najaf",
        stars: 4,
        badge_ar: "إطلالة على بحر النجف والمدينة",
        badge_en: "Najaf Sea Panoramic View",
        price_per_night: 90,
        rating: 9.1,
        provider: "Booking.com",
        deal_url: "https://www.booking.com/city/iq/najaf.ar.html?aid=YOUR_TP_MARKER"
      }
    ],
    experiences: [
      {
        title_ar: "جولة سوق النجف التراثي وبحر النجف",
        title_en: "Traditional Najaf Souk & Lake Exploration",
        duration: "4 ساعات",
        price: 28,
        rating: 4.8,
        reviews_count: 2400,
        url: "https://getyourguide.com/najaf-l3206/?partner_id=YOUR_TP_MARKER"
      }
    ],
    description_ar: "مركز العلم والتاريخ والمخطوطات النادرة المطلة على بحر النجف في جنوب العراق.",
    description_en: "Historic scholarly capital overlooking the Sea of Najaf, rich in rare manuscripts and Islamic archaeology."
  },
  {
    id: "city_sulaymaniyah",
    name_ar: "السليمانية",
    name_en: "Sulaymaniyah",
    country_ar: "العراق",
    country_en: "Iraq",
    region: "MENA",
    iata: "ISU",
    coordinates: [35.5562, 45.4347],
    zone: "green",
    avg_hotel_price: 85,
    quality_score: 9.2,
    best_season_ar: "مارس - مايو & سبتمبر - نوفمبر",
    best_season_en: "March - May & September - November",
    popular_district_ar: "شارع مولوي & جبل أزمر & سرجنار",
    popular_district_en: "Azmar Mountain & Sarchinar",
    hotel_deals_count: 210,
    active_flights_count: 70,
    travelpayouts: {
      booking_url: "https://www.booking.com/city/iq/sulaymaniyah.ar.html?aid=YOUR_TP_MARKER",
      agoda_url: "https://www.agoda.com/city/sulaymaniyah-iq.html?cid=YOUR_TP_MARKER",
      flight_url: "https://wayaway.io/flights/ISU?marker=YOUR_TP_MARKER",
      tours_url: "https://getyourguide.com/sulaymaniyah-l3207/?partner_id=YOUR_TP_MARKER"
    },
    curated_hotels: [
      {
        id: "h_isu_1",
        hotel_name_ar: "فندق تيتانيك السليمانية وريديسن",
        hotel_name_en: "Grand Millenium Sulaimani",
        stars: 5,
        badge_ar: "برج بانورامي فاخر على الجبال",
        badge_en: "Luxury Panoramic Mountain Tower",
        price_per_night: 150,
        rating: 9.6,
        provider: "Booking.com",
        deal_url: "https://www.booking.com/city/iq/sulaymaniyah.ar.html?aid=YOUR_TP_MARKER"
      }
    ],
    experiences: [
      {
        title_ar: "رحلة صعود جبل أزمر وبحيرة دوكان الشاطئية",
        title_en: "Azmar Mountain Sunset & Dukan Lake Resort Tour",
        duration: "6 ساعات",
        price: 40,
        rating: 4.9,
        reviews_count: 1600,
        url: "https://getyourguide.com/sulaymaniyah-l3207/?partner_id=YOUR_TP_MARKER"
      }
    ],
    description_ar: "عاصمة الثقافة والجمال الجبلي بشمال العراق، تحيط بها جبال أزمر وبحيرة دوكان الساحرة.",
    description_en: "Cultural capital of Iraqi Kurdistan nestled amidst stunning mountain ranges and pristine Dukan Lake resorts."
  },
  {
    id: "city_kirkuk",
    name_ar: "كركوك",
    name_en: "Kirkuk",
    country_ar: "العراق",
    country_en: "Iraq",
    region: "MENA",
    iata: "KKY",
    coordinates: [35.4681, 44.3922],
    zone: "green",
    avg_hotel_price: 70,
    quality_score: 8.8,
    best_season_ar: "أكتوبر - أبريل",
    best_season_en: "October - April",
    popular_district_ar: "قلعة كركوك التاريخية & شارع أطلس",
    popular_district_en: "Kirkuk Citadel & Atlas Street",
    hotel_deals_count: 90,
    active_flights_count: 30,
    travelpayouts: {
      booking_url: "https://www.booking.com/city/iq/kirkuk.ar.html?aid=YOUR_TP_MARKER",
      agoda_url: "https://www.agoda.com/city/kirkuk-iq.html?cid=YOUR_TP_MARKER",
      flight_url: "https://wayaway.io/flights/BGW?marker=YOUR_TP_MARKER",
      tours_url: "https://getyourguide.com/kirkuk-l3208/?partner_id=YOUR_TP_MARKER"
    },
    curated_hotels: [
      {
        id: "h_kky_1",
        hotel_name_ar: "فندق كركوك بلازا",
        hotel_name_en: "Kirkuk Plaza Hotel",
        stars: 4,
        badge_ar: "خدمة راقية وسط المدينة",
        badge_en: "City Center Standard Stay",
        price_per_night: 75,
        rating: 8.7,
        provider: "Booking.com",
        deal_url: "https://www.booking.com/city/iq/kirkuk.ar.html?aid=YOUR_TP_MARKER"
      }
    ],
    experiences: [
      {
        title_ar: "جولة قلعة كركوك والأسواق القديمة",
        title_en: "Kirkuk Citadel & Ancient Bazaars Walk",
        duration: "3 ساعات",
        price: 25,
        rating: 4.7,
        reviews_count: 620,
        url: "https://getyourguide.com/kirkuk-l3208/?partner_id=YOUR_TP_MARKER"
      }
    ],
    description_ar: "مدينة النخيل والقلعة المرتفعة التاريخية التي تعكس تنوع الحضارات العراقية القديمة.",
    description_en: "Ancient city famous for its hilltop citadel and millennia-old crossroads of Mesopotamian trade."
  },
  {
    id: "city_dahuk",
    name_ar: "دهوك",
    name_en: "Dahuk",
    country_ar: "العراق",
    country_en: "Iraq",
    region: "MENA",
    iata: "DHD",
    coordinates: [36.8679, 42.9880],
    zone: "green",
    avg_hotel_price: 80,
    quality_score: 9.1,
    best_season_ar: "مارس - مايو & سبتمبر - نوفمبر",
    best_season_en: "March - May & September - November",
    popular_district_ar: "سد دهوك & مصيف زاويتا",
    popular_district_en: "Duhok Dam & Zawita Resort",
    hotel_deals_count: 120,
    active_flights_count: 25,
    travelpayouts: {
      booking_url: "https://www.booking.com/city/iq/duhok.ar.html?aid=YOUR_TP_MARKER",
      agoda_url: "https://www.agoda.com/city/duhok-iq.html?cid=YOUR_TP_MARKER",
      flight_url: "https://wayaway.io/flights/EBL?marker=YOUR_TP_MARKER",
      tours_url: "https://getyourguide.com/duhok-l3209/?partner_id=YOUR_TP_MARKER"
    },
    curated_hotels: [
      {
        id: "h_dhd_1",
        hotel_name_ar: "فندق ريكسوس دهوك",
        hotel_name_en: "Rixos Duhok Hotel",
        stars: 5,
        badge_ar: "منتجع جبال دهوك الخمس نجوم",
        badge_en: "5-Star Mountain Resort",
        price_per_night: 140,
        rating: 9.4,
        provider: "Booking.com",
        deal_url: "https://www.booking.com/city/iq/duhok.ar.html?aid=YOUR_TP_MARKER"
      }
    ],
    experiences: [
      {
        title_ar: "زيارة مصايف زاويتا وسولاف وسد دهوك الجبلي",
        title_en: "Zawita Pine Forests & Sulav Waterfall Tour",
        duration: "5 ساعات",
        price: 35,
        rating: 4.9,
        reviews_count: 850,
        url: "https://getyourguide.com/duhok-l3209/?partner_id=YOUR_TP_MARKER"
      }
    ],
    description_ar: "عروس الشمال العراقي المحاطة بالوديان الصنوبرية والمصايف الجبلية وسد دهوك الخلاب.",
    description_en: "Picturesque northern mountain city surrounded by pine valleys, waterfalls, and scenic water reservoirs."
  },
  {
    id: "city_zakho",
    name_ar: "زاخو",
    name_en: "Zakho",
    country_ar: "العراق",
    country_en: "Iraq",
    region: "MENA",
    iata: "ZKH",
    coordinates: [37.1461, 42.6860],
    zone: "green",
    avg_hotel_price: 65,
    quality_score: 8.9,
    best_season_ar: "مارس - مايو",
    best_season_en: "March - May",
    popular_district_ar: "جسر دلال الأثري & ضفاف الخابور",
    popular_district_en: "Delal Bridge & Khabur River",
    hotel_deals_count: 60,
    active_flights_count: 15,
    travelpayouts: {
      booking_url: "https://www.booking.com/city/iq/zakho.ar.html?aid=YOUR_TP_MARKER",
      agoda_url: "https://www.agoda.com/city/zakho-iq.html?cid=YOUR_TP_MARKER",
      flight_url: "https://wayaway.io/flights/EBL?marker=YOUR_TP_MARKER",
      tours_url: "https://getyourguide.com/zakho-l3210/?partner_id=YOUR_TP_MARKER"
    },
    curated_hotels: [
      {
        id: "h_zkh_1",
        hotel_name_ar: "فندق زاخو بلازا",
        hotel_name_en: "Zakho Hotel & Resort",
        stars: 4,
        badge_ar: "إطلالة على نهر الخابور وجسر دلال",
        badge_en: "Khabur River View",
        price_per_night: 70,
        rating: 8.9,
        provider: "Booking.com",
        deal_url: "https://www.booking.com/city/iq/zakho.ar.html?aid=YOUR_TP_MARKER"
      }
    ],
    experiences: [
      {
        title_ar: "جولة جسر دلال الروماني التاريخي على نهر الخابور",
        title_en: "Historic Delal Stone Bridge & Khabur River Walk",
        duration: "3 ساعات",
        price: 20,
        rating: 4.8,
        reviews_count: 450,
        url: "https://getyourguide.com/zakho-l3210/?partner_id=YOUR_TP_MARKER"
      }
    ],
    description_ar: "بوابة الحدود الشمالية التاريخية المشهورة بجسر دلال الحجري الأثري المستقر على نهر الخابور.",
    description_en: "Northern border city famous for its ancient Delal Stone Bridge spanning the Khabur River."
  },
  {
    id: "city_kut",
    name_ar: "الكوت",
    name_en: "Kut",
    country_ar: "العراق",
    country_en: "Iraq",
    region: "MENA",
    iata: "KUT",
    coordinates: [32.5056, 45.8178],
    zone: "green",
    avg_hotel_price: 60,
    quality_score: 8.7,
    best_season_ar: "نوفمبر - أبريل",
    best_season_en: "November - April",
    popular_district_ar: "سدة الكوت & كورنيش دجلة",
    popular_district_en: "Kut Barrage & Tigris Promenade",
    hotel_deals_count: 50,
    active_flights_count: 10,
    travelpayouts: {
      booking_url: "https://www.booking.com/city/iq/kut.ar.html?aid=YOUR_TP_MARKER",
      agoda_url: "https://www.agoda.com/city/kut-iq.html?cid=YOUR_TP_MARKER",
      flight_url: "https://wayaway.io/flights/BGW?marker=YOUR_TP_MARKER",
      tours_url: "https://getyourguide.com/kut-l3211/?partner_id=YOUR_TP_MARKER"
    },
    curated_hotels: [
      {
        id: "h_kut_1",
        hotel_name_ar: "فندق الكوت السياحي",
        hotel_name_en: "Kut River Tourist Hotel",
        stars: 3,
        badge_ar: "إطلالة سدة الكوت على نهر دجلة",
        badge_en: "Tigris Barrage View",
        price_per_night: 55,
        rating: 8.5,
        provider: "Booking.com",
        deal_url: "https://www.booking.com/city/iq/kut.ar.html?aid=YOUR_TP_MARKER"
      }
    ],
    experiences: [
      {
        title_ar: "جولة سدة الكوت الضخمة وشواطئ دجلة",
        title_en: "Famous Kut Barrage & Tigris Riverbanks Walk",
        duration: "3 ساعات",
        price: 20,
        rating: 4.6,
        reviews_count: 310,
        url: "https://getyourguide.com/kut-l3211/?partner_id=YOUR_TP_MARKER"
      }
    ],
    description_ar: "حاضرة واسط التاريخية على انحناءة نهر دجلة الشهيرة وسدتها الهندسية العريقة.",
    description_en: "Capital of Wasit province sitting on a dramatic horseshoe bend of the Tigris River, famous for Kut Barrage."
  },
  {
    id: "city_nasiriyah",
    name_ar: "الناصرية",
    name_en: "Nasiriyah",
    country_ar: "العراق",
    country_en: "Iraq",
    region: "MENA",
    iata: "XNH",
    coordinates: [31.0572, 46.2572],
    zone: "green",
    avg_hotel_price: 65,
    quality_score: 9.0,
    best_season_ar: "نوفمبر - مارس",
    best_season_en: "November - March",
    popular_district_ar: "زقورة أور السومرية & أهوار الجبايش",
    popular_district_en: "Ziggurat of Ur & Chibayish Marshes",
    hotel_deals_count: 80,
    active_flights_count: 20,
    travelpayouts: {
      booking_url: "https://www.booking.com/city/iq/nasiriyah.ar.html?aid=YOUR_TP_MARKER",
      agoda_url: "https://www.agoda.com/city/nasiriyah-iq.html?cid=YOUR_TP_MARKER",
      flight_url: "https://wayaway.io/flights/BGW?marker=YOUR_TP_MARKER",
      tours_url: "https://getyourguide.com/ur-l3212/?partner_id=YOUR_TP_MARKER"
    },
    curated_hotels: [
      {
        id: "h_xnh_1",
        hotel_name_ar: "فندق الجنوب الفاخر",
        hotel_name_en: "Al-Janoub Nasiriyah Hotel",
        stars: 4,
        badge_ar: "قريب من زقورة أور والأهوار",
        badge_en: "Gateway to Ur Ziggurat",
        price_per_night: 70,
        rating: 8.9,
        provider: "Booking.com",
        deal_url: "https://www.booking.com/city/iq/nasiriyah.ar.html?aid=YOUR_TP_MARKER"
      }
    ],
    experiences: [
      {
        title_ar: "رحلة اكتشاف زقورة أور السومرية وركوب المشحوف بالأهوار",
        title_en: "Sumerian Ziggurat of Ur & Chibayish Marshes Canoe Tour",
        duration: "6 ساعات",
        price: 45,
        rating: 5.0,
        reviews_count: 1500,
        url: "https://getyourguide.com/ur-l3212/?partner_id=YOUR_TP_MARKER"
      }
    ],
    description_ar: "بوابة مهد الحضارة السومرية وزقورة أور الأثرية وأهوار الجبايش المدرجة بقائمة التراث العالمي لليونسكو.",
    description_en: "Cradle of Sumerian civilization, birthplace of Prophet Abraham at Ur Ziggurat and the Mesopotamian World Heritage Marshes."
  },
  {
    id: "city_samarra",
    name_ar: "سامراء",
    name_en: "Samarra",
    country_ar: "العراق",
    country_en: "Iraq",
    region: "MENA",
    iata: "SMR",
    coordinates: [34.1983, 43.8742],
    zone: "green",
    avg_hotel_price: 70,
    quality_score: 9.1,
    best_season_ar: "أكتوبر - أبريل",
    best_season_en: "October - April",
    popular_district_ar: "المئذنة الملوية & القصور العباسية",
    popular_district_en: "Malwiya Minaret & Abbasid Palaces",
    hotel_deals_count: 45,
    active_flights_count: 10,
    travelpayouts: {
      booking_url: "https://www.booking.com/city/iq/samarra.ar.html?aid=YOUR_TP_MARKER",
      agoda_url: "https://www.agoda.com/city/samarra-iq.html?cid=YOUR_TP_MARKER",
      flight_url: "https://wayaway.io/flights/BGW?marker=YOUR_TP_MARKER",
      tours_url: "https://getyourguide.com/samarra-l3213/?partner_id=YOUR_TP_MARKER"
    },
    curated_hotels: [
      {
        id: "h_smr_1",
        hotel_name_ar: "فندق سامراء السياحي",
        hotel_name_en: "Samarra Heritage Hotel",
        stars: 3,
        badge_ar: "قريب من المئذنة الملوية التاريخية",
        badge_en: "Near Malwiya Spiral Minaret",
        price_per_night: 65,
        rating: 8.8,
        provider: "Booking.com",
        deal_url: "https://www.booking.com/city/iq/samarra.ar.html?aid=YOUR_TP_MARKER"
      }
    ],
    experiences: [
      {
        title_ar: "زيارة المئذنة الملوية الحلزونية المسجلة باليونسكو والقصور",
        title_en: "UNESCO Spiral Malwiya Minaret & Abbasid Archaeological Site",
        duration: "4 ساعات",
        price: 30,
        rating: 4.9,
        reviews_count: 890,
        url: "https://getyourguide.com/samarra-l3213/?partner_id=YOUR_TP_MARKER"
      }
    ],
    description_ar: "عاصمة الخلافة العباسية التاريخية التي تضم المئذنة الملوية الحلزونية الشهيرة عالمياً المسجلة في اليونسكو.",
    description_en: "Abbasid capital world-renowned for its UNESCO iconic spiral Malwiya Minaret and sprawling archaeological monuments."
  },

  // ==================== COLOMBIA (كولومبيا) - Detailed ====================
  {
    id: "city_bogota",
    name_ar: "بوغوتا",
    name_en: "Bogota",
    country_ar: "كولومبيا",
    country_en: "Colombia",
    region: "Americas",
    iata: "BOG",
    coordinates: [4.7110, -74.0721],
    zone: "green",
    avg_hotel_price: 68,
    quality_score: 9.1,
    best_season_ar: "ديسمبر - مارس",
    best_season_en: "December - March",
    popular_district_ar: "لا كانديلاريا التاريخية & تشابينيرو",
    popular_district_en: "La Candelaria & Zona T",
    hotel_deals_count: 850,
    active_flights_count: 240,
    travelpayouts: {
      booking_url: "https://www.booking.com/city/co/bogota.ar.html?aid=YOUR_TP_MARKER",
      agoda_url: "https://www.agoda.com/city/bogota-co.html?cid=YOUR_TP_MARKER",
      flight_url: "https://wayaway.io/flights/BOG?marker=YOUR_TP_MARKER",
      tours_url: "https://getyourguide.com/bogota-l171/?partner_id=YOUR_TP_MARKER"
    },
    curated_hotels: [
      {
        id: "h_bog_1",
        hotel_name_ar: "فندق جران أوهتيل بوغوتا",
        hotel_name_en: "Grand Hyatt Bogota",
        stars: 5,
        badge_ar: "أفخم إطلالة على جبال أنديز",
        badge_en: "Andes Mountain View Luxury",
        price_per_night: 160,
        rating: 9.5,
        provider: "Booking.com",
        deal_url: "https://www.booking.com/city/co/bogota.ar.html?aid=YOUR_TP_MARKER"
      }
    ],
    experiences: [
      {
        title_ar: "صعود جبل مونسيرات ومتحف الذهب الكولومبي الشهير",
        title_en: "Monserrate Cable Car & Gold Museum Guided Tour",
        duration: "5 ساعات",
        price: 35,
        rating: 4.9,
        reviews_count: 8900,
        url: "https://getyourguide.com/bogota-l171/?partner_id=YOUR_TP_MARKER"
      }
    ],
    description_ar: "عاصمة كولومبيا المرتفعة بين قمم جبال الأنديز، تضم حي لا كانديلاريا الاستعماري ومتحف الذهب الفريد.",
    description_en: "High-altitude capital of Colombia nestled in the Andes, known for historic La Candelaria and world famous Gold Museum."
  },
  {
    id: "city_medellin",
    name_ar: "ميديلين",
    name_en: "Medellin",
    country_ar: "كولومبيا",
    country_en: "Colombia",
    region: "Americas",
    iata: "MDE",
    coordinates: [6.2442, -75.5812],
    zone: "green",
    avg_hotel_price: 62,
    quality_score: 9.3,
    best_season_ar: "على مدار السنة (مدينة الربيع الدائم)",
    best_season_en: "Year-Round (City of Eternal Spring)",
    popular_district_ar: "إل بوبلادو & كومونا 13 & لاوريليس",
    popular_district_en: "El Poblado & Comuna 13",
    hotel_deals_count: 920,
    active_flights_count: 180,
    travelpayouts: {
      booking_url: "https://www.booking.com/city/co/medellin.ar.html?aid=YOUR_TP_MARKER",
      agoda_url: "https://www.agoda.com/city/medellin-co.html?cid=YOUR_TP_MARKER",
      flight_url: "https://wayaway.io/flights/MDE?marker=YOUR_TP_MARKER",
      tours_url: "https://getyourguide.com/medellin-l706/?partner_id=YOUR_TP_MARKER"
    },
    curated_hotels: [
      {
        id: "h_mde_1",
        hotel_name_ar: "فندق ذا تشارلي بوبلادو",
        hotel_name_en: "The Charlee Hotel Medellin",
        stars: 5,
        badge_ar: "أرقى تصميم عصري في إل بوبلادو",
        badge_en: "Top Chic El Poblado Stay",
        price_per_night: 140,
        rating: 9.4,
        provider: "Booking.com",
        deal_url: "https://www.booking.com/city/co/medellin.ar.html?aid=YOUR_TP_MARKER"
      }
    ],
    experiences: [
      {
        title_ar: "جولة كومونا 13 مع التلفريك ورحلة غواتابي وتخومها",
        title_en: "Comuna 13 Graffiti & Guatapé Rock Day Tour",
        duration: "8 ساعات",
        price: 40,
        rating: 4.9,
        reviews_count: 14200,
        url: "https://getyourguide.com/medellin-l706/?partner_id=YOUR_TP_MARKER"
      }
    ],
    description_ar: "مدينة الربيع الدائم المشهورة بالابتكار العمراني والتلفريك الجبلي والطقس المعتدل طوال العام.",
    description_en: "City of Eternal Spring renowned for urban innovation, cable cars, vibrant arts scene, and ideal weather."
  },
  {
    id: "city_cali",
    name_ar: "كالي",
    name_en: "Cali",
    country_ar: "كولومبيا",
    country_en: "Colombia",
    region: "Americas",
    iata: "CLO",
    coordinates: [3.4516, -76.5320],
    zone: "green",
    avg_hotel_price: 50,
    quality_score: 8.9,
    best_season_ar: "ديسمبر - مارس",
    best_season_en: "December - March",
    popular_district_ar: "سان أنطونيو & الممر النهري",
    popular_district_en: "San Antonio & Granada",
    hotel_deals_count: 420,
    active_flights_count: 110,
    travelpayouts: {
      booking_url: "https://www.booking.com/city/co/cali.ar.html?aid=YOUR_TP_MARKER",
      agoda_url: "https://www.agoda.com/city/cali-co.html?cid=YOUR_TP_MARKER",
      flight_url: "https://wayaway.io/flights/CLO?marker=YOUR_TP_MARKER",
      tours_url: "https://getyourguide.com/cali-l1715/?partner_id=YOUR_TP_MARKER"
    },
    curated_hotels: [
      {
        id: "h_clo_1",
        hotel_name_ar: "فندق إنتركونتيننتال كالي",
        hotel_name_en: "InterContinental Cali",
        stars: 5,
        badge_ar: "إطلالة على نهر كالي والحدائق",
        badge_en: "Cali River Front Resort",
        price_per_night: 95,
        rating: 9.1,
        provider: "Booking.com",
        deal_url: "https://www.booking.com/city/co/cali.ar.html?aid=YOUR_TP_MARKER"
      }
    ],
    experiences: [
      {
        title_ar: "دروس رقص السالسا في عاصمة السالسا العالمية",
        title_en: "World Salsa Capital Dance Masterclass & Night Tour",
        duration: "3 ساعات",
        price: 25,
        rating: 4.8,
        reviews_count: 3200,
        url: "https://getyourguide.com/cali-l1715/?partner_id=YOUR_TP_MARKER"
      }
    ],
    description_ar: "عاصمة رقص السالسا العالمية والمهرجانات الحيوية في جنوب غرب كولومبيا.",
    description_en: "World capital of Salsa dancing, famous for vibrant nightlife and colonial San Antonio neighborhood."
  },

  // ==================== SAUDI ARABIA (السعودية) - Detailed ====================
  {
    id: "city_riyadh",
    name_ar: "الرياض",
    name_en: "Riyadh",
    country_ar: "المملكة العربية السعودية",
    country_en: "Saudi Arabia",
    region: "MENA",
    iata: "RUH",
    coordinates: [24.7136, 46.6753],
    zone: "red",
    avg_hotel_price: 190,
    quality_score: 9.5,
    best_season_ar: "نوفمبر - مارس (موسم الرياض)",
    best_season_en: "November - March (Riyadh Season)",
    popular_district_ar: "برج المملكة & بوليفارد سيتي & المربع",
    popular_district_en: "Kingdom Tower & Boulevard City",
    hotel_deals_count: 880,
    active_flights_count: 320,
    travelpayouts: {
      booking_url: "https://www.booking.com/city/sa/riyadh.ar.html?aid=YOUR_TP_MARKER",
      agoda_url: "https://www.agoda.com/city/riyadh-sa.html?cid=YOUR_TP_MARKER",
      flight_url: "https://wayaway.io/flights/RUH?marker=YOUR_TP_MARKER",
      tours_url: "https://getyourguide.com/riyadh-l3221/?partner_id=YOUR_TP_MARKER"
    },
    curated_hotels: [
      {
        id: "h_ruh_1",
        hotel_name_ar: "فندق الفايصلية فورسيزونز الرياض",
        hotel_name_en: "Four Seasons Hotel Riyadh at Kingdom Centre",
        stars: 5,
        badge_ar: "إطلالة بانورامية من برج المملكة",
        badge_en: "Kingdom Tower Sky Suite",
        price_per_night: 420,
        rating: 9.7,
        provider: "Booking.com",
        deal_url: "https://www.booking.com/city/sa/riyadh.ar.html?aid=YOUR_TP_MARKER"
      }
    ],
    experiences: [
      {
        title_ar: "جولة حافة العالم وقصر المصمك والدرعية التاريخية",
        title_en: "Edge of the World & UNESCO Diriyah Heritage Tour",
        duration: "7 ساعات",
        price: 90,
        rating: 4.9,
        reviews_count: 5400,
        url: "https://getyourguide.com/riyadh-l3221/?partner_id=YOUR_TP_MARKER"
      }
    ],
    description_ar: "عاصمة المملكة الحيوية، تجمع بين أبراج المستقبل الشاهقة وحي الطريف التاريخي بالدرعية المسجل باليونسكو.",
    description_en: "Vibrant capital of Saudi Arabia, blending futuristic skyscrapers with UNESCO World Heritage Diriyah."
  },
  {
    id: "city_jeddah",
    name_ar: "جدة",
    name_en: "Jeddah",
    country_ar: "المملكة العربية السعودية",
    country_en: "Saudi Arabia",
    region: "MENA",
    iata: "JED",
    coordinates: [21.5433, 39.1728],
    zone: "red",
    avg_hotel_price: 155,
    quality_score: 9.4,
    best_season_ar: "نوفمبر - أبريل",
    best_season_en: "November - April",
    popular_district_ar: "جدة التاريخية (البلد) & الكورنيش الأوسط",
    popular_district_en: "Al-Balad Heritage & Corniche",
    hotel_deals_count: 760,
    active_flights_count: 290,
    travelpayouts: {
      booking_url: "https://www.booking.com/city/sa/jeddah.ar.html?aid=YOUR_TP_MARKER",
      agoda_url: "https://www.agoda.com/city/jeddah-sa.html?cid=YOUR_TP_MARKER",
      flight_url: "https://wayaway.io/flights/JED?marker=YOUR_TP_MARKER",
      tours_url: "https://getyourguide.com/jeddah-l3222/?partner_id=YOUR_TP_MARKER"
    },
    curated_hotels: [
      {
        id: "h_jed_1",
        hotel_name_ar: "فندق شادن وريديسن الكورنيش",
        hotel_name_en: "Rosewood Jeddah Corniche",
        stars: 5,
        badge_ar: "إطلالة ساحرة على البحر الأحمر",
        badge_en: "Red Sea Sunset Luxury",
        price_per_night: 310,
        rating: 9.6,
        provider: "Booking.com",
        deal_url: "https://www.booking.com/city/sa/jeddah.ar.html?aid=YOUR_TP_MARKER"
      }
    ],
    experiences: [
      {
        title_ar: "جولة منطقة البلد التاريخية والغوص بالبحر الأحمر",
        title_en: "UNESCO Al-Balad Heritage & Red Sea Scuba Diving",
        duration: "5 ساعات",
        price: 75,
        rating: 4.9,
        reviews_count: 4200,
        url: "https://getyourguide.com/jeddah-l3222/?partner_id=YOUR_TP_MARKER"
      }
    ],
    description_ar: "عروس البحر الأحمر وبوابة الحرمين الشريفين، تمتاز بمنطقة البلد التراثية وكورنيش الواجهة البحرية.",
    description_en: "Bride of the Red Sea and gateway to the Holy Mosques, famous for UNESCO Al-Balad coral buildings."
  },
  {
    id: "city_alula",
    name_ar: "العلا",
    name_en: "AlUla",
    country_ar: "المملكة العربية السعودية",
    country_en: "Saudi Arabia",
    region: "MENA",
    iata: "ULH",
    coordinates: [26.6171, 37.9225],
    zone: "red",
    avg_hotel_price: 340,
    quality_score: 9.8,
    best_season_ar: "أكتوبر - أبريل",
    best_season_en: "October - April",
    popular_district_ar: "الحجر (مدائن صالح) & جبل الفيل & البلدة القديمة",
    popular_district_en: "Hegra & Elephant Rock",
    hotel_deals_count: 140,
    active_flights_count: 65,
    travelpayouts: {
      booking_url: "https://www.booking.com/city/sa/al-ula.ar.html?aid=YOUR_TP_MARKER",
      agoda_url: "https://www.agoda.com/city/al-ula-sa.html?cid=YOUR_TP_MARKER",
      flight_url: "https://wayaway.io/flights/ULH?marker=YOUR_TP_MARKER",
      tours_url: "https://getyourguide.com/alula-l3223/?partner_id=YOUR_TP_MARKER"
    },
    curated_hotels: [
      {
        id: "h_ulh_1",
        hotel_name_ar: "منتجع هابيتاس العلا الصحراوي",
        hotel_name_en: "Habitas AlUla Desert Eco-Resort",
        stars: 5,
        badge_ar: "منتجع فاخر بين الصخور التاريخية",
        badge_en: "Eco-Luxury Desert Canyon Resort",
        price_per_night: 580,
        rating: 9.8,
        provider: "Booking.com",
        deal_url: "https://www.booking.com/city/sa/al-ula.ar.html?aid=YOUR_TP_MARKER"
      }
    ],
    experiences: [
      {
        title_ar: "جولة الحجر الأثرية بالنبطيين ومنطاد العلا",
        title_en: "UNESCO Hegra Nabataean Tombs & Hot Air Balloon Flight",
        duration: "6 ساعات",
        price: 120,
        rating: 5.0,
        reviews_count: 3800,
        url: "https://getyourguide.com/alula-l3223/?partner_id=YOUR_TP_MARKER"
      }
    ],
    description_ar: "أول موقع سعودي مدرج في قائمة التراث العالمي لليونسكو، متحف طبيعي مفتوح للمقابر النبطية بين الصخور الجرانيتية.",
    description_en: "Saudi Arabia's first UNESCO site, a living museum of ancient Nabataean rock-cut tombs and spectacular canyons."
  }
];
