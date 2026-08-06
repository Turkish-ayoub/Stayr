import { CityData } from '../types';
import { EXTENDED_REGIONAL_CITIES } from './extendedRegionalCities';
import { buildAllWorldCitiesDataset } from './allWorldCountriesCities';

const BASE_CITIES_DATA: CityData[] = [
  {
    id: "city_dubai",
    name_ar: "دبي",
    name_en: "Dubai",
    country_ar: "الإمارات العربية المتحدة",
    country_en: "United Arab Emirates",
    region: "MENA",
    iata: "DXB",
    coordinates: [25.2048, 55.2708],
    zone: "red",
    avg_hotel_price: 280,
    quality_score: 9.6,
    best_season_ar: "نوفمبر - أبريل",
    best_season_en: "November - April",
    popular_district_ar: "وسط المدينة (داون تاون) & جي بي آر",
    popular_district_en: "Downtown & JBR",
    hotel_deals_count: 1420,
    active_flights_count: 380,
    travelpayouts: {
      booking_url: "https://www.booking.com/city/ae/dubai.ar.html?aid=YOUR_TP_MARKER",
      agoda_url: "https://www.agoda.com/dubai/city/dubai-ae.html?cid=YOUR_TP_MARKER",
      flight_url: "https://wayaway.io/flights/DXB?marker=YOUR_TP_MARKER",
      tours_url: "https://getyourguide.com/dubai-l173/?partner_id=YOUR_TP_MARKER"
    },
    curated_hotels: [
      {
        id: "h_dubai_1",
        hotel_name_ar: "فندق أتلانتس ذا رويال دبي",
        hotel_name_en: "Atlantis The Royal Dubai",
        stars: 5,
        badge_ar: "أفخم منتجع شاطئي 2026",
        badge_en: "Top Beach Luxury 2026",
        price_per_night: 650,
        rating: 9.8,
        provider: "Booking.com",
        deal_url: "https://www.booking.com/hotel/ae/atlantis-the-royal.ar.html?aid=YOUR_TP_MARKER"
      },
      {
        id: "h_dubai_2",
        hotel_name_ar: "فندق وادريس بوليفارد وسط المدينة",
        hotel_name_en: "Address Boulevard Downtown",
        stars: 5,
        badge_ar: "خصم 20% حجز مبكر",
        badge_en: "20% Early Bird Discount",
        price_per_night: 320,
        rating: 9.5,
        provider: "Agoda",
        deal_url: "https://www.agoda.com/address-boulevard/hotel/dubai-ae.html?cid=YOUR_TP_MARKER"
      },
      {
        id: "h_dubai_3",
        hotel_name_ar: "شقق مارينا ووترفرونت الفندقية",
        hotel_name_en: "Marina Waterfront Suites",
        stars: 4,
        badge_ar: "صفقة العائلات مع إفطار",
        badge_en: "Family Deal with Breakfast",
        price_per_night: 180,
        rating: 9.1,
        provider: "Booking.com",
        deal_url: "https://www.booking.com/city/ae/dubai.ar.html?aid=YOUR_TP_MARKER"
      }
    ],
    experiences: [
      {
        title_ar: "سفاري صحراوي في آفاق دبي مع عشاء وشواء نجوم",
        title_en: "Dubai Desert Safari with BBQ Star Dinner",
        duration: "6 ساعات",
        price: 55,
        rating: 4.9,
        reviews_count: 14200,
        url: "https://getyourguide.com/dubai-l173/?partner_id=YOUR_TP_MARKER"
      },
      {
        title_ar: "تذكرة البرج التجربة الفاخرة الطابق 124 & 125",
        title_en: "Burj Khalifa At the Top 124 & 125 Sky Ticket",
        duration: "2 ساعتان",
        price: 48,
        rating: 4.8,
        reviews_count: 28900,
        url: "https://getyourguide.com/dubai-l173/?partner_id=YOUR_TP_MARKER"
      }
    ],
    description_ar: "عاصمة الفخامة العالمية والتسوق والمنتجعات الاستثنائية، تضم برج خليفة ونخلة جميرا وأفضل خدمات الفندقة والرفاهية.",
    description_en: "Global hub of ultra-luxury, shopping, and iconic landmarks like Burj Khalifa and Palm Jumeirah."
  },
  {
    id: "city_tokyo",
    name_ar: "طوكيو",
    name_en: "Tokyo",
    country_ar: "اليابان",
    country_en: "Japan",
    region: "Asia",
    iata: "TYO",
    coordinates: [35.6762, 139.6503],
    zone: "yellow",
    avg_hotel_price: 160,
    quality_score: 9.5,
    best_season_ar: "مارس - مايو (موسم الساكورا) & أكتوبر - نوفمبر",
    best_season_en: "March - May & October - November",
    popular_district_ar: "شينجوكو & جينزا & شيبويا",
    popular_district_en: "Shinjuku & Ginza & Shibuya",
    hotel_deals_count: 2100,
    active_flights_count: 450,
    travelpayouts: {
      booking_url: "https://www.booking.com/city/jp/tokyo.ar.html?aid=YOUR_TP_MARKER",
      agoda_url: "https://www.agoda.com/city/tokyo-jp.html?cid=YOUR_TP_MARKER",
      flight_url: "https://wayaway.io/flights/TYO?marker=YOUR_TP_MARKER",
      tours_url: "https://getyourguide.com/tokyo-l193/?partner_id=YOUR_TP_MARKER"
    },
    curated_hotels: [
      {
        id: "h_tokyo_1",
        hotel_name_ar: "فندق بارك حياة طوكيو",
        hotel_name_en: "Park Hyatt Tokyo",
        stars: 5,
        badge_ar: "إطلالة بانورامية على جبل فوجي",
        badge_en: "Panoramic Fuji View",
        price_per_night: 420,
        rating: 9.7,
        provider: "Booking.com",
        deal_url: "https://www.booking.com/city/jp/tokyo.ar.html?aid=YOUR_TP_MARKER"
      },
      {
        id: "h_tokyo_2",
        hotel_name_ar: "فندق دومس شينجوكو جينزا",
        hotel_name_en: "Dormy Inn Premium Shinjuku",
        stars: 4,
        badge_ar: "ينابيع حارّة أونسن مجانية",
        badge_en: "Free Onsen Hot Springs",
        price_per_night: 135,
        rating: 9.3,
        provider: "Agoda",
        deal_url: "https://www.agoda.com/city/tokyo-jp.html?cid=YOUR_TP_MARKER"
      }
    ],
    experiences: [
      {
        title_ar: "تذكرة معرض teamLab Planets الرقمي الساحر",
        title_en: "teamLab Planets Digital Art Museum Entrance",
        duration: "3 ساعات",
        price: 32,
        rating: 4.9,
        reviews_count: 18500,
        url: "https://getyourguide.com/tokyo-l193/?partner_id=YOUR_TP_MARKER"
      },
      {
        title_ar: "رحلة يوم كامل لجبل فوجي وبحيرة كواغوتشيكو",
        title_en: "Mount Fuji & Lake Kawaguchiko Full Day Tour",
        duration: "9 ساعات",
        price: 78,
        rating: 4.8,
        reviews_count: 12400,
        url: "https://getyourguide.com/tokyo-l193/?partner_id=YOUR_TP_MARKER"
      }
    ],
    description_ar: "مزج مذهل بين التكنولوجيا المستقبلية الفائقة والتقاليد اليابانية العريقة، مع أرقى فنادق العالم وأعلى مستويات الأمان.",
    description_en: "Futuristic metropolis blending cutting-edge tech with rich traditions and world-class hospitality."
  },
  {
    id: "city_paris",
    name_ar: "باريس",
    name_en: "Paris",
    country_ar: "فرنسا",
    country_en: "France",
    region: "Europe",
    iata: "CDG",
    coordinates: [48.8566, 2.3522],
    zone: "red",
    avg_hotel_price: 290,
    quality_score: 9.4,
    best_season_ar: "أبريل - يونيو & سبتمبر - أكتوبر",
    best_season_en: "April - June & September - October",
    popular_district_ar: "الشانزليزيه & الماريه & إيفل",
    popular_district_en: "Champs-Élysées & Le Marais",
    hotel_deals_count: 1890,
    active_flights_count: 510,
    travelpayouts: {
      booking_url: "https://www.booking.com/city/fr/paris.ar.html?aid=YOUR_TP_MARKER",
      agoda_url: "https://www.agoda.com/city/paris-fr.html?cid=YOUR_TP_MARKER",
      flight_url: "https://wayaway.io/flights/CDG?marker=YOUR_TP_MARKER",
      tours_url: "https://getyourguide.com/paris-l16/?partner_id=YOUR_TP_MARKER"
    },
    curated_hotels: [
      {
        id: "h_paris_1",
        hotel_name_ar: "فندق جورج الخامس فورسيزونز باريس",
        hotel_name_en: "Four Seasons George V Paris",
        stars: 5,
        badge_ar: "قمة الفخامة الفرنسية الكلاسيكية",
        badge_en: "Classic French Luxury",
        price_per_night: 980,
        rating: 9.8,
        provider: "Booking.com",
        deal_url: "https://www.booking.com/city/fr/paris.ar.html?aid=YOUR_TP_MARKER"
      },
      {
        id: "h_paris_2",
        hotel_name_ar: "فندق بلاتينوم شانزليزيه",
        hotel_name_en: "Hotel Platinum Champs-Élysées",
        stars: 4,
        badge_ar: "خصم 15% إطلالة على برج إيفل",
        badge_en: "15% Off Eiffel Tower View",
        price_per_night: 240,
        rating: 9.2,
        provider: "Agoda",
        deal_url: "https://www.agoda.com/city/paris-fr.html?cid=YOUR_TP_MARKER"
      }
    ],
    experiences: [
      {
        title_ar: "جولة تخطي طابور الانتظار لبرج إيفل مع القمة",
        title_en: "Eiffel Tower Skip-the-Line Summit Access",
        duration: "2.5 ساعتان",
        price: 62,
        rating: 4.7,
        reviews_count: 31000,
        url: "https://getyourguide.com/paris-l16/?partner_id=YOUR_TP_MARKER"
      },
      {
        title_ar: "جولة متحف اللوفر مع مرشد خبير",
        title_en: "Louvre Museum Guided Masterpieces Tour",
        duration: "3 ساعات",
        price: 75,
        rating: 4.9,
        reviews_count: 22000,
        url: "https://getyourguide.com/paris-l16/?partner_id=YOUR_TP_MARKER"
      }
    ],
    description_ar: "مدينة النور والأزياء والثقافة، موطن اللوفر وبرج إيفل والمقاهي الفرنسية الساحرة.",
    description_en: "City of light, haute couture, world-renowned museums, and romantic boulevard culture."
  },
  {
    id: "city_bangkok",
    name_ar: "بانكوك",
    name_en: "Bangkok",
    country_ar: "تايلاند",
    country_en: "Thailand",
    region: "Asia",
    iata: "BKK",
    coordinates: [13.7563, 100.5018],
    zone: "green",
    avg_hotel_price: 55,
    quality_score: 9.1,
    best_season_ar: "نوفمبر - فبراير (الطقس المعتدل)",
    best_season_en: "November - February",
    popular_district_ar: "سوخومفيت & نهر تشاو برايا",
    popular_district_en: "Sukhumvit & Riverside",
    hotel_deals_count: 2450,
    active_flights_count: 390,
    travelpayouts: {
      booking_url: "https://www.booking.com/city/th/bangkok.ar.html?aid=YOUR_TP_MARKER",
      agoda_url: "https://www.agoda.com/city/bangkok-th.html?cid=YOUR_TP_MARKER",
      flight_url: "https://wayaway.io/flights/BKK?marker=YOUR_TP_MARKER",
      tours_url: "https://getyourguide.com/bangkok-l169/?partner_id=YOUR_TP_MARKER"
    },
    curated_hotels: [
      {
        id: "h_bkk_1",
        hotel_name_ar: "فندق غراند سينتر بوينت سوخومفيت",
        hotel_name_en: "Grande Centre Point Sukhumvit",
        stars: 5,
        badge_ar: "قيمة استثنائية مقابل السعر",
        badge_en: "Best Value 5-Star Hotel",
        price_per_night: 85,
        rating: 9.3,
        provider: "Agoda",
        deal_url: "https://www.agoda.com/city/bangkok-th.html?cid=YOUR_TP_MARKER"
      },
      {
        id: "h_bkk_2",
        hotel_name_ar: "فندق ايبيس ستايلز بانكوك خاو سان",
        hotel_name_en: "ibis Styles Bangkok Khaosan",
        stars: 3,
        badge_ar: "ميزانية فائقة ومسبح روف توب",
        badge_en: "Budget Choice & Rooftop Pool",
        price_per_night: 35,
        rating: 8.9,
        provider: "Booking.com",
        deal_url: "https://www.booking.com/city/th/bangkok.ar.html?aid=YOUR_TP_MARKER"
      }
    ],
    experiences: [
      {
        title_ar: "عشاء فاخر في رحلة القارب النهرية تشاو برايا",
        title_en: "Chao Phraya River Luxury Dinner Cruise",
        duration: "2 ساعتان",
        price: 38,
        rating: 4.8,
        reviews_count: 9800,
        url: "https://getyourguide.com/bangkok-l169/?partner_id=YOUR_TP_MARKER"
      }
    ],
    description_ar: "وجهة الميزانية الاقتصادية الأولى عالمياً، تجمع بين الفنادق الفاخرة بأسعار مغرية والأسواق العائمة الملونة.",
    description_en: "Top global budget destination offering 5-star hospitality at unbeatable rates."
  },
  {
    id: "city_london",
    name_ar: "لندن",
    name_en: "London",
    country_ar: "المملكة المتحدة",
    country_en: "United Kingdom",
    region: "Europe",
    iata: "LHR",
    coordinates: [51.5074, -0.1278],
    zone: "red",
    avg_hotel_price: 270,
    quality_score: 9.3,
    best_season_ar: "مايو - سبتمبر",
    best_season_en: "May - September",
    popular_district_ar: "مايفير & كينسينغتون & ويست إند",
    popular_district_en: "Mayfair & Kensington & West End",
    hotel_deals_count: 2200,
    active_flights_count: 620,
    travelpayouts: {
      booking_url: "https://www.booking.com/city/gb/london.ar.html?aid=YOUR_TP_MARKER",
      agoda_url: "https://www.agoda.com/city/london-gb.html?cid=YOUR_TP_MARKER",
      flight_url: "https://wayaway.io/flights/LHR?marker=YOUR_TP_MARKER",
      tours_url: "https://getyourguide.com/london-l57/?partner_id=YOUR_TP_MARKER"
    },
    curated_hotels: [
      {
        id: "h_london_1",
        hotel_name_ar: "فندق ذا ريتز لندن",
        hotel_name_en: "The Ritz London",
        stars: 5,
        badge_ar: "التراث الملكي البريطاني",
        badge_en: "Royal British Heritage",
        price_per_night: 820,
        rating: 9.7,
        provider: "Booking.com",
        deal_url: "https://www.booking.com/city/gb/london.ar.html?aid=YOUR_TP_MARKER"
      },
      {
        id: "h_london_2",
        hotel_name_ar: "فندق هيلتون بارك لين مايفير",
        hotel_name_en: "London Hilton on Park Lane",
        stars: 5,
        badge_ar: "موقع استثنائي بجانب هايد بارك",
        badge_en: "Prime Hyde Park Location",
        price_per_night: 310,
        rating: 9.1,
        provider: "Agoda",
        deal_url: "https://www.agoda.com/city/london-gb.html?cid=YOUR_TP_MARKER"
      }
    ],
    experiences: [
      {
        title_ar: "تذكرة برج لندن وتيجان الملكة",
        title_en: "Tower of London & Crown Jewels Ticket",
        duration: "3 ساعات",
        price: 42,
        rating: 4.8,
        reviews_count: 24500,
        url: "https://getyourguide.com/london-l57/?partner_id=YOUR_TP_MARKER"
      }
    ],
    description_ar: "العاصمة التاريخية والأولى في المال والأعمال والثقافة، تضم عين لندن وهايد بارك والمتاحف المجانية العالمية.",
    description_en: "Historic global capital with vibrant theater, iconic landmarks, and world-class museums."
  },
  {
    id: "city_bali",
    name_ar: "بالي",
    name_en: "Bali",
    country_ar: "إندونيسيا",
    country_en: "Indonesia",
    region: "Asia",
    iata: "DPS",
    coordinates: [-8.4095, 115.1889],
    zone: "green",
    avg_hotel_price: 65,
    quality_score: 9.2,
    best_season_ar: "أبريل - أكتوبر (الموسم الجاف)",
    best_season_en: "April - October",
    popular_district_ar: "أوبود & أولوواتو & سيمينياك",
    popular_district_en: "Ubud & Uluwatu & Seminyak",
    hotel_deals_count: 3100,
    active_flights_count: 280,
    travelpayouts: {
      booking_url: "https://www.booking.com/region/id/bali.ar.html?aid=YOUR_TP_MARKER",
      agoda_url: "https://www.agoda.com/city/bali-id.html?cid=YOUR_TP_MARKER",
      flight_url: "https://wayaway.io/flights/DPS?marker=YOUR_TP_MARKER",
      tours_url: "https://getyourguide.com/bali-l347/?partner_id=YOUR_TP_MARKER"
    },
    curated_hotels: [
      {
        id: "h_bali_1",
        hotel_name_ar: "منتجع فيلات فورسيزونز سايان أوبود",
        hotel_name_en: "Four Seasons Resort Sayan Ubud",
        stars: 5,
        badge_ar: "فيلات الغابة الاستوائية الفارهة",
        badge_en: "Luxury Tropical Jungle Villa",
        price_per_night: 480,
        rating: 9.8,
        provider: "Booking.com",
        deal_url: "https://www.booking.com/region/id/bali.ar.html?aid=YOUR_TP_MARKER"
      },
      {
        id: "h_bali_2",
        hotel_name_ar: "فندق ومسبح أوبود بالي جاردن",
        hotel_name_en: "Ubud Tropical Sanctuary Resort",
        stars: 4,
        badge_ar: "صفقة ممتازة مع مسبح خاص $60",
        badge_en: "Private Pool Villa Deal $60",
        price_per_night: 60,
        rating: 9.4,
        provider: "Agoda",
        deal_url: "https://www.agoda.com/city/bali-id.html?cid=YOUR_TP_MARKER"
      }
    ],
    experiences: [
      {
        title_ar: "رحلة شروق الشمس فوق جبل باتور وركوب الدفع الرباعي",
        title_en: "Mount Batur Sunrise Jeep & Hot Springs Tour",
        duration: "7 ساعات",
        price: 45,
        rating: 4.9,
        reviews_count: 16200,
        url: "https://getyourguide.com/bali-l347/?partner_id=YOUR_TP_MARKER"
      }
    ],
    description_ar: "جزيرة الآلهة والمنتجعات الطبيعية، تشتهر بحقول الأرز الساحرة وفيلات المسبح الخاص والأنشطة الاستوائية.",
    description_en: "Tropical paradise famed for serene rice terraces, volcanic peaks, and affordable luxury private villas."
  },
  {
    id: "city_istanbul",
    name_ar: "إسطنبول",
    name_en: "Istanbul",
    country_ar: "تركيا",
    country_en: "Turkey",
    region: "Europe",
    iata: "IST",
    coordinates: [41.0082, 28.9784],
    zone: "green",
    avg_hotel_price: 75,
    quality_score: 9.0,
    best_season_ar: "أبريل - مايو & سبتمبر - نوفمبر",
    best_season_en: "April - May & September - November",
    popular_district_ar: "تقسيم & السلطان أحمد & نيشانتاشي",
    popular_district_en: "Taksim & Sultanahmet & Nisantasi",
    hotel_deals_count: 2800,
    active_flights_count: 480,
    travelpayouts: {
      booking_url: "https://www.booking.com/city/tr/istanbul.ar.html?aid=YOUR_TP_MARKER",
      agoda_url: "https://www.agoda.com/city/istanbul-tr.html?cid=YOUR_TP_MARKER",
      flight_url: "https://wayaway.io/flights/IST?marker=YOUR_TP_MARKER",
      tours_url: "https://getyourguide.com/istanbul-l56/?partner_id=YOUR_TP_MARKER"
    },
    curated_hotels: [
      {
        id: "h_ist_1",
        hotel_name_ar: "فندق شيران بالاس كمبينسكي البوسفور",
        hotel_name_en: "Ciragan Palace Kempinski Bosphorus",
        stars: 5,
        badge_ar: "قصر عثماني تاريخي على البوسفور",
        badge_en: "Ottoman Palace on Bosphorus",
        price_per_night: 520,
        rating: 9.6,
        provider: "Booking.com",
        deal_url: "https://www.booking.com/city/tr/istanbul.ar.html?aid=YOUR_TP_MARKER"
      },
      {
        id: "h_ist_2",
        hotel_name_ar: "فندق سيفي ترافيلر تقسيم",
        hotel_name_en: "CVK Park Bosphorus Hotel",
        stars: 5,
        badge_ar: "خصم 25% مع إفطار تركي شامل",
        badge_en: "25% Off Turkish Breakfast Included",
        price_per_night: 110,
        rating: 9.1,
        provider: "Agoda",
        deal_url: "https://www.agoda.com/city/istanbul-tr.html?cid=YOUR_TP_MARKER"
      }
    ],
    experiences: [
      {
        title_ar: "رحلة البوسفور البحرية عند الغروب مع عشاء وفلكلور",
        title_en: "Bosphorus Sunset Cruise with Dinner & Shows",
        duration: "3.5 ساعات",
        price: 30,
        rating: 4.8,
        reviews_count: 21000,
        url: "https://getyourguide.com/istanbul-l56/?partner_id=YOUR_TP_MARKER"
      }
    ],
    description_ar: "ملتقى القارتين آسيا وأوروبا، تجمع بين مضيق البوسفور والمساجد التاريخية والتسوق بأسعار ممتازة.",
    description_en: "Transcontinental hub bridging Europe and Asia, brimming with rich history, grand bazaars, and Bosphorus views."
  },
  {
    id: "city_singapore",
    name_ar: "سنغافورة",
    name_en: "Singapore",
    country_ar: "سنغافورة",
    country_en: "Singapore",
    region: "Asia",
    iata: "SIN",
    coordinates: [1.3521, 103.8198],
    zone: "red",
    avg_hotel_price: 260,
    quality_score: 9.4,
    best_season_ar: "طوال العام (مناخ استوائي معتدل)",
    best_season_en: "All Year Round",
    popular_district_ar: "مارينا باي & أورتشارد & سنتوسا",
    popular_district_en: "Marina Bay & Orchard & Sentosa",
    hotel_deals_count: 850,
    active_flights_count: 420,
    travelpayouts: {
      booking_url: "https://www.booking.com/city/sg/singapore.ar.html?aid=YOUR_TP_MARKER",
      agoda_url: "https://www.agoda.com/city/singapore-sg.html?cid=YOUR_TP_MARKER",
      flight_url: "https://wayaway.io/flights/SIN?marker=YOUR_TP_MARKER",
      tours_url: "https://getyourguide.com/singapore-l170/?partner_id=YOUR_TP_MARKER"
    },
    curated_hotels: [
      {
        id: "h_sing_1",
        hotel_name_ar: "فندق مارينا باي ساندز سنغافورة",
        hotel_name_en: "Marina Bay Sands Singapore",
        stars: 5,
        badge_ar: "أشهر مسبح إنفينيتي معلق بالجو",
        badge_en: "World Famous Sky Infinity Pool",
        price_per_night: 680,
        rating: 9.6,
        provider: "Booking.com",
        deal_url: "https://www.booking.com/city/sg/singapore.ar.html?aid=YOUR_TP_MARKER"
      }
    ],
    experiences: [
      {
        title_ar: "تذكرة حدائق الخليج (Gardens by the Bay)",
        title_en: "Gardens by the Bay Avatar Conservatory Ticket",
        duration: "3 ساعات",
        price: 28,
        rating: 4.9,
        reviews_count: 34000,
        url: "https://getyourguide.com/singapore-l170/?partner_id=YOUR_TP_MARKER"
      }
    ],
    description_ar: "مدينة الحدائق الذكية المستقبلية، موطن مطار شانغي الأعلى تقييماً عالمياً ومارينا باي ساندز.",
    description_en: "Ultra-clean garden city known for futuristic architecture, high safety, and Changi Airport excellence."
  },
  {
    id: "city_cairo",
    name_ar: "القاهرة",
    name_en: "Cairo",
    country_ar: "مصر",
    country_en: "Egypt",
    region: "MENA",
    iata: "CAI",
    coordinates: [30.0444, 31.2357],
    zone: "green",
    avg_hotel_price: 48,
    quality_score: 8.8,
    best_season_ar: "أكتوبر - أبريل",
    best_season_en: "October - April",
    popular_district_ar: "الزمالك & وسط البلد & الجيزة",
    popular_district_en: "Zamalek & Downtown & Giza",
    hotel_deals_count: 1650,
    active_flights_count: 310,
    travelpayouts: {
      booking_url: "https://www.booking.com/city/eg/cairo.ar.html?aid=YOUR_TP_MARKER",
      agoda_url: "https://www.agoda.com/city/cairo-eg.html?cid=YOUR_TP_MARKER",
      flight_url: "https://wayaway.io/flights/CAI?marker=YOUR_TP_MARKER",
      tours_url: "https://getyourguide.com/cairo-l120/?partner_id=YOUR_TP_MARKER"
    },
    curated_hotels: [
      {
        id: "h_cairo_1",
        hotel_name_ar: "فندق ماريوت عمر الخيام الزمالك",
        hotel_name_en: "Cairo Marriott Hotel & Omar Khayyam Casino",
        stars: 5,
        badge_ar: "قصر تاريخي نيل في الزمالك",
        badge_en: "Historic Nile Palace",
        price_per_night: 130,
        rating: 9.1,
        provider: "Booking.com",
        deal_url: "https://www.booking.com/city/eg/cairo.ar.html?aid=YOUR_TP_MARKER"
      },
      {
        id: "h_cairo_2",
        hotel_name_ar: "فندق ستايرز الأهرامات روف توب",
        hotel_name_en: "Pyramids View Boutique Hotel",
        stars: 4,
        badge_ar: "إطلالة مباشرة على الأهرامات $40",
        badge_en: "Direct Pyramids View $40",
        price_per_night: 40,
        rating: 9.2,
        provider: "Agoda",
        deal_url: "https://www.agoda.com/city/cairo-eg.html?cid=YOUR_TP_MARKER"
      }
    ],
    experiences: [
      {
        title_ar: "رحلة الأهرامات وأبو الهول مع ركوب الجمال والمرشد",
        title_en: "Giza Pyramids, Sphinx & Camel Ride Guided Tour",
        duration: "5 ساعات",
        price: 25,
        rating: 4.8,
        reviews_count: 27000,
        url: "https://getyourguide.com/cairo-l120/?partner_id=YOUR_TP_MARKER"
      }
    ],
    description_ar: "عاصمة التاريخ والمعالم الأثرية الخالدة، الأهرامات والمتحف المصري الكبير ورحلات النيل الأسطورية.",
    description_en: "Cradle of civilization boasting the Great Pyramids, Grand Egyptian Museum, and rich Nile heritage."
  },
  {
    id: "city_rome",
    name_ar: "روما",
    name_en: "Rome",
    country_ar: "إيطاليا",
    country_en: "Italy",
    region: "Europe",
    iata: "FCO",
    coordinates: [41.9028, 12.4964],
    zone: "yellow",
    avg_hotel_price: 150,
    quality_score: 9.2,
    best_season_ar: "أبريل - مايو & سبتمبر - أكتوبر",
    best_season_en: "April - May & September - October",
    popular_district_ar: "تريفي & تراستيفيري & سبانيا",
    popular_district_en: "Trevi & Trastevere & Spagna",
    hotel_deals_count: 2600,
    active_flights_count: 410,
    travelpayouts: {
      booking_url: "https://www.booking.com/city/it/rome.ar.html?aid=YOUR_TP_MARKER",
      agoda_url: "https://www.agoda.com/city/rome-it.html?cid=YOUR_TP_MARKER",
      flight_url: "https://wayaway.io/flights/FCO?marker=YOUR_TP_MARKER",
      tours_url: "https://getyourguide.com/rome-l33/?partner_id=YOUR_TP_MARKER"
    },
    curated_hotels: [
      {
        id: "h_rome_1",
        hotel_name_ar: "فندق هاسلر روما القمم الإسبانية",
        hotel_name_en: "Hassler Roma Spanish Steps",
        stars: 5,
        badge_ar: "أيقونة الضيافة الإيطالية الفاخرة",
        badge_en: "Luxury Icon at Spanish Steps",
        price_per_night: 540,
        rating: 9.6,
        provider: "Booking.com",
        deal_url: "https://www.booking.com/city/it/rome.ar.html?aid=YOUR_TP_MARKER"
      }
    ],
    experiences: [
      {
        title_ar: "دخول الكولوسيوم والمنتدى الروماني السريع",
        title_en: "Colosseum, Roman Forum & Palatine Hill Priority Ticket",
        duration: "3 ساعات",
        price: 35,
        rating: 4.7,
        reviews_count: 42000,
        url: "https://getyourguide.com/rome-l33/?partner_id=YOUR_TP_MARKER"
      }
    ],
    description_ar: "المدينة الخالدة، متحف مفتوح يضم الكولوسيوم ونافورة تريفي والفاتيكان والمطعم الإيطالي الأصيل.",
    description_en: "The Eternal City, an open-air museum filled with Roman ruins, Baroque fountains, and culinary art."
  },
  {
    id: "city_riyadh",
    name_ar: "الرياض",
    name_en: "Riyadh",
    country_ar: "المملكة العربية السعودية",
    country_en: "Saudi Arabia",
    region: "MENA",
    iata: "RUH",
    coordinates: [24.7136, 46.6753],
    zone: "yellow",
    avg_hotel_price: 170,
    quality_score: 9.0,
    best_season_ar: "نوفمبر - مارس (موسم الرياض والطقس الشتوي)",
    best_season_en: "November - March",
    popular_district_ar: "العليا & حطين & الملقا",
    popular_district_en: "Olaya & Hittin & Al Malqa",
    hotel_deals_count: 1100,
    active_flights_count: 360,
    travelpayouts: {
      booking_url: "https://www.booking.com/city/sa/riyadh.ar.html?aid=YOUR_TP_MARKER",
      agoda_url: "https://www.agoda.com/city/riyadh-sa.html?cid=YOUR_TP_MARKER",
      flight_url: "https://wayaway.io/flights/RUH?marker=YOUR_TP_MARKER",
      tours_url: "https://getyourguide.com/riyadh-l1692/?partner_id=YOUR_TP_MARKER"
    },
    curated_hotels: [
      {
        id: "h_ruh_1",
        hotel_name_ar: "فندق فورسيزونز الرياض برج المملكة",
        hotel_name_en: "Four Seasons Hotel Riyadh Kingdom Centre",
        stars: 5,
        badge_ar: "إطلالة جسر المشاهدة برج المملكة",
        badge_en: "Kingdom Centre Sky Bridge View",
        price_per_night: 410,
        rating: 9.5,
        provider: "Booking.com",
        deal_url: "https://www.booking.com/city/sa/riyadh.ar.html?aid=YOUR_TP_MARKER"
      },
      {
        id: "h_ruh_2",
        hotel_name_ar: "فندق وسويتات بودل الملقا",
        hotel_name_en: "Boudl Al Malqa Suites",
        stars: 4,
        badge_ar: "خيار رائع للعائلات $110",
        badge_en: "Great Family Choice $110",
        price_per_night: 110,
        rating: 9.0,
        provider: "Agoda",
        deal_url: "https://www.agoda.com/city/riyadh-sa.html?cid=YOUR_TP_MARKER"
      }
    ],
    experiences: [
      {
        title_ar: "جولة الدرعية التاريخية وحي الطريف المسجل باليونسكو",
        title_en: "Historic Diriyah & At-Turaif UNESCO Heritage Tour",
        duration: "4 ساعات",
        price: 60,
        rating: 4.9,
        reviews_count: 3200,
        url: "https://getyourguide.com/riyadh-l1692/?partner_id=YOUR_TP_MARKER"
      }
    ],
    description_ar: "عاصمة المستقبل والنمو الاقتصادي، تجمع بين أصالة الدرعية وسياحة موسم الرياض والقرية العالمية الترفيهية.",
    description_en: "Dynamic capital blending UNESCO historic Diriyah with cutting-edge entertainment and mega-events."
  },
  {
    id: "city_maldives",
    name_ar: "المالديف (ماليه والأتولات)",
    name_en: "Maldives",
    country_ar: "جزر المالديف",
    country_en: "Maldives",
    region: "Asia",
    iata: "MLE",
    coordinates: [4.1755, 73.5093],
    zone: "red",
    avg_hotel_price: 520,
    quality_score: 9.8,
    best_season_ar: "نوفمبر - أبريل",
    best_season_en: "November - April",
    popular_district_ar: "أتول أري الشمالي & أتول باء المرجاني",
    popular_district_en: "North Ari Atoll & Baa Atoll",
    hotel_deals_count: 420,
    active_flights_count: 190,
    travelpayouts: {
      booking_url: "https://www.booking.com/country/mv.ar.html?aid=YOUR_TP_MARKER",
      agoda_url: "https://www.agoda.com/city/male-city-mv.html?cid=YOUR_TP_MARKER",
      flight_url: "https://wayaway.io/flights/MLE?marker=YOUR_TP_MARKER",
      tours_url: "https://getyourguide.com/male-l1100/?partner_id=YOUR_TP_MARKER"
    },
    curated_hotels: [
      {
        id: "h_mle_1",
        hotel_name_ar: "منتجع فيلات سونيفا جاني الفارهة فوق الماء",
        hotel_name_en: "Soneva Jani Water Villas Resort",
        stars: 5,
        badge_ar: "شريحة المياه الخاصة في الأوقيانوس",
        badge_en: "Private Lagoon Slide Villa",
        price_per_night: 1250,
        rating: 9.9,
        provider: "Booking.com",
        deal_url: "https://www.booking.com/country/mv.ar.html?aid=YOUR_TP_MARKER"
      },
      {
        id: "h_mle_2",
        hotel_name_ar: "منتجع كورامبا المالديف القريب من المطار",
        hotel_name_en: "Kurumba Maldives Resort",
        stars: 5,
        badge_ar: "خصم 30% نقل سريع مجاني",
        badge_en: "30% Off Free Speedboat Transfer",
        price_per_night: 340,
        rating: 9.4,
        provider: "Agoda",
        deal_url: "https://www.agoda.com/city/male-city-mv.html?cid=YOUR_TP_MARKER"
      }
    ],
    experiences: [
      {
        title_ar: "رحلة الغوص مع قرش الحوت والسطح المرجاني",
        title_en: "Whale Shark Snorkeling & Coral Reef Cruise",
        duration: "5 ساعات",
        price: 95,
        rating: 4.9,
        reviews_count: 4100,
        url: "https://getyourguide.com/male-l1100/?partner_id=YOUR_TP_MARKER"
      }
    ],
    description_ar: "قمة الفخامة والاسترخاء العالمي، أكواخ فوق المياه الكريستالية والشعاب المرجانية الساحرة.",
    description_en: "Unrivaled luxury sanctuary featuring overwater bungalows, turquoise lagoons, and marine life."
  },
  {
    id: "city_barcelona",
    name_ar: "برشلونة",
    name_en: "Barcelona",
    country_ar: "إسبانيا",
    country_en: "Spain",
    region: "Europe",
    iata: "BCN",
    coordinates: [41.3851, 2.1734],
    zone: "yellow",
    avg_hotel_price: 145,
    quality_score: 9.3,
    best_season_ar: "أبريل - يونيو & سبتمبر - أكتوبر",
    best_season_en: "April - June & September - October",
    popular_district_ar: "شارع الرمبلا & الحي القوطي & إيشامبله",
    popular_district_en: "La Rambla & Gothic Quarter & Eixample",
    hotel_deals_count: 1950,
    active_flights_count: 470,
    travelpayouts: {
      booking_url: "https://www.booking.com/city/es/barcelona.ar.html?aid=YOUR_TP_MARKER",
      agoda_url: "https://www.agoda.com/city/barcelona-es.html?cid=YOUR_TP_MARKER",
      flight_url: "https://wayaway.io/flights/BCN?marker=YOUR_TP_MARKER",
      tours_url: "https://getyourguide.com/barcelona-l45/?partner_id=YOUR_TP_MARKER"
    },
    curated_hotels: [
      {
        id: "h_bcn_1",
        hotel_name_ar: "فندق دبليو برشلونة على الشاطئ",
        hotel_name_en: "W Barcelona Beachfront",
        stars: 5,
        badge_ar: "أيقونة المسمكة الساحلية الشاطئية",
        badge_en: "Iconic Beachfront Luxury",
        price_per_night: 380,
        rating: 9.2,
        provider: "Booking.com",
        deal_url: "https://www.booking.com/city/es/barcelona.ar.html?aid=YOUR_TP_MARKER"
      }
    ],
    experiences: [
      {
        title_ar: "تذكرة ساغرادا فاميليا مع صعود البرج",
        title_en: "Sagrada Familia Skip-the-Line & Tower Access",
        duration: "2 ساعتان",
        price: 36,
        rating: 4.8,
        reviews_count: 38000,
        url: "https://getyourguide.com/barcelona-l45/?partner_id=YOUR_TP_MARKER"
      }
    ],
    description_ar: "مدينة الفن المعماري لغودي، الشواطئ المتوسطية، الأطباق الإسبانية الكاتالونية والرياضة العالمية.",
    description_en: "Gaudí architectural wonderland boasting Mediterranean beaches, tapas culture, and vibrant nightlife."
  },
  {
    id: "city_newyork",
    name_ar: "نيويورك",
    name_en: "New York",
    country_ar: "الولايات المتحدة الأمريكية",
    country_en: "United States",
    region: "Americas",
    iata: "JFK",
    coordinates: [40.7128, -74.0060],
    zone: "red",
    avg_hotel_price: 340,
    quality_score: 9.1,
    best_season_ar: "سبتمبر - نوفمبر & أبريل - يونيو",
    best_season_en: "September - November & April - June",
    popular_district_ar: "تايمز سكوير & مانهاتن & سنترال بارك",
    popular_district_en: "Times Square & Manhattan & Central Park",
    hotel_deals_count: 1780,
    active_flights_count: 750,
    travelpayouts: {
      booking_url: "https://www.booking.com/city/us/new-york.ar.html?aid=YOUR_TP_MARKER",
      agoda_url: "https://www.agoda.com/city/new-york-ny-us.html?cid=YOUR_TP_MARKER",
      flight_url: "https://wayaway.io/flights/JFK?marker=YOUR_TP_MARKER",
      tours_url: "https://getyourguide.com/new-york-city-l59/?partner_id=YOUR_TP_MARKER"
    },
    curated_hotels: [
      {
        id: "h_nyc_1",
        hotel_name_ar: "فندق بلازا نيويورك سنترال بارك",
        hotel_name_en: "The Plaza Hotel Central Park",
        stars: 5,
        badge_ar: "رمز الفخامة الأمريكية الكلاسيكية",
        badge_en: "Classic American Landmark Luxury",
        price_per_night: 890,
        rating: 9.5,
        provider: "Booking.com",
        deal_url: "https://www.booking.com/city/us/new-york.ar.html?aid=YOUR_TP_MARKER"
      }
    ],
    experiences: [
      {
        title_ar: "تذكرة منصة المراقبة SUMMIT One Vanderbilt",
        title_en: "SUMMIT One Vanderbilt Experience Ticket",
        duration: "2 ساعتان",
        price: 46,
        rating: 4.9,
        reviews_count: 19500,
        url: "https://getyourguide.com/new-york-city-l59/?partner_id=YOUR_TP_MARKER"
      }
    ],
    description_ar: "المدينة التي لا تنام، العاصمة الثقافية والمالية العالمية مع مسارح برودواي وناطحات السحاب.",
    description_en: "The city that never sleeps, offering iconic skylines, Broadway shows, and world-class museums."
  },
  {
    id: "city_marrakesh",
    name_ar: "مراكش",
    name_en: "Marrakesh",
    country_ar: "المغرب",
    country_en: "Morocco",
    region: "MENA",
    iata: "RAK",
    coordinates: [31.6295, -7.9811],
    zone: "green",
    avg_hotel_price: 68,
    quality_score: 9.2,
    best_season_ar: "مارس - مايو & أكتوبر - نوفمبر",
    best_season_en: "March - May & October - November",
    popular_district_ar: "المدينة القديمة (الرياضات) & جليز",
    popular_district_en: "Medina Riads & Guéliz",
    hotel_deals_count: 1320,
    active_flights_count: 240,
    travelpayouts: {
      booking_url: "https://www.booking.com/city/ma/marrakech.ar.html?aid=YOUR_TP_MARKER",
      agoda_url: "https://www.agoda.com/city/marrakech-ma.html?cid=YOUR_TP_MARKER",
      flight_url: "https://wayaway.io/flights/RAK?marker=YOUR_TP_MARKER",
      tours_url: "https://getyourguide.com/marrakesh-l260/?partner_id=YOUR_TP_MARKER"
    },
    curated_hotels: [
      {
        id: "h_rak_1",
        hotel_name_ar: "رياض الفن مراكش التقليدي",
        hotel_name_en: "Riad El Fenn Marrakesh",
        stars: 5,
        badge_ar: "رياض مغربي أصيل مع مسبح ساحة",
        badge_en: "Authentic Moroccan Riad & Pool",
        price_per_night: 180,
        rating: 9.6,
        provider: "Booking.com",
        deal_url: "https://www.booking.com/city/ma/marrakech.ar.html?aid=YOUR_TP_MARKER"
      },
      {
        id: "h_rak_2",
        hotel_name_ar: "رياض الأطلس البوتيكي",
        hotel_name_en: "Atlas Boutique Riad",
        stars: 4,
        badge_ar: "ميزانية ساحرة مع إفطار $45",
        badge_en: "Charming Riad & Breakfast $45",
        price_per_night: 45,
        rating: 9.3,
        provider: "Agoda",
        deal_url: "https://www.agoda.com/city/marrakech-ma.html?cid=YOUR_TP_MARKER"
      }
    ],
    experiences: [
      {
        title_ar: "رحلة صحراء أجاماي مع ركوب الجمال والعشاء البدوي",
        title_en: "Agafay Desert Dinner & Camel Ride Tour",
        duration: "6 ساعات",
        price: 38,
        rating: 4.8,
        reviews_count: 11200,
        url: "https://getyourguide.com/marrakesh-l260/?partner_id=YOUR_TP_MARKER"
      }
    ],
    description_ar: "المدينة الحمراء التاريخية، رياضات الساحات الأندلسية، ساحة جامع الفناء وحدائق ماجوريل الساحرة.",
    description_en: "The Red City featuring enchanted courtyard Riads, bustling souks, and Yves Saint Laurent gardens."
  },
  {
    id: "city_seoul",
    name_ar: "سيول",
    name_en: "Seoul",
    country_ar: "كوريا الجنوبية",
    country_en: "South Korea",
    region: "Asia",
    iata: "ICN",
    coordinates: [37.5665, 126.9780],
    zone: "yellow",
    avg_hotel_price: 125,
    quality_score: 9.4,
    best_season_ar: "سبتمبر - نوفمبر & مارس - مايو",
    best_season_en: "September - November & March - May",
    popular_district_ar: "ميونغ دونغ & إيتواون & هونغداي",
    popular_district_en: "Myeongdong & Itaewon & Hongdae",
    hotel_deals_count: 1620,
    active_flights_count: 410,
    travelpayouts: {
      booking_url: "https://www.booking.com/city/kr/seoul.ar.html?aid=YOUR_TP_MARKER",
      agoda_url: "https://www.agoda.com/city/seoul-kr.html?cid=YOUR_TP_MARKER",
      flight_url: "https://wayaway.io/flights/ICN?marker=YOUR_TP_MARKER",
      tours_url: "https://getyourguide.com/seoul-l197/?partner_id=YOUR_TP_MARKER"
    },
    curated_hotels: [
      {
        id: "h_icn_1",
        hotel_name_ar: "فندق شلا سيول الفاخر",
        hotel_name_en: "The Shilla Seoul",
        stars: 5,
        badge_ar: "أرقى فنادق الضيافة الكورية",
        badge_en: "Top Korean Luxury Hospitality",
        price_per_night: 290,
        rating: 9.6,
        provider: "Booking.com",
        deal_url: "https://www.booking.com/city/kr/seoul.ar.html?aid=YOUR_TP_MARKER"
      }
    ],
    experiences: [
      {
        title_ar: "جولة القصور الملكية ارتداء الهانبوك والتسوق",
        title_en: "Gyeongbokgung Palace & Hanbok Dress Tour",
        duration: "4 ساعات",
        price: 30,
        rating: 4.8,
        reviews_count: 14000,
        url: "https://getyourguide.com/seoul-l197/?partner_id=YOUR_TP_MARKER"
      }
    ],
    description_ar: "عاصمة الكي بوب والأزياء، تجمع بين القصور التاريخية والتسوق والتكنولوجيا فائقة السرعة.",
    description_en: "Vibrant capital merging ancient Joseon dynasty palaces with modern K-culture and tech innovation."
  },
  {
    id: "city_capetown",
    name_ar: "كيب تاون",
    name_en: "Cape Town",
    country_ar: "جنوب أفريقيا",
    country_en: "South Africa",
    region: "Africa",
    iata: "CPT",
    coordinates: [-33.9249, 18.4241],
    zone: "green",
    avg_hotel_price: 72,
    quality_score: 9.3,
    best_season_ar: "نوفمبر - مارس",
    best_season_en: "November - March",
    popular_district_ar: "واجهة فكتوريا وألبيرت & كامبس باي",
    popular_district_en: "V&A Waterfront & Camps Bay",
    hotel_deals_count: 1150,
    active_flights_count: 220,
    travelpayouts: {
      booking_url: "https://www.booking.com/city/za/cape-town.ar.html?aid=YOUR_TP_MARKER",
      agoda_url: "https://www.agoda.com/city/cape-town-za.html?cid=YOUR_TP_MARKER",
      flight_url: "https://wayaway.io/flights/CPT?marker=YOUR_TP_MARKER",
      tours_url: "https://getyourguide.com/cape-town-l101/?partner_id=YOUR_TP_MARKER"
    },
    curated_hotels: [
      {
        id: "h_cpt_1",
        hotel_name_ar: "فندق ذا سيليو الفاخر Waterfront",
        hotel_name_en: "The Silo Hotel V&A Waterfront",
        stars: 5,
        badge_ar: "تحفة هندسية فائقة الإطلالة",
        badge_en: "Architectural Waterfront Landmark",
        price_per_night: 610,
        rating: 9.8,
        provider: "Booking.com",
        deal_url: "https://www.booking.com/city/za/cape-town.ar.html?aid=YOUR_TP_MARKER"
      },
      {
        id: "h_cpt_2",
        hotel_name_ar: "فندق بروتريا فيكتوريا جونكشن",
        hotel_name_en: "Protea Hotel Victoria Junction",
        stars: 4,
        badge_ar: "خصم 20% ميزانية ممتازة",
        badge_en: "20% Off Great Value Stay",
        price_per_night: 58,
        rating: 9.1,
        provider: "Agoda",
        deal_url: "https://www.agoda.com/city/cape-town-za.html?cid=YOUR_TP_MARKER"
      }
    ],
    experiences: [
      {
        title_ar: "تلفريك جبل الطاولة ومحمية رأس الرجاء الصالح",
        title_en: "Table Mountain Cableway & Cape Point Tour",
        duration: "8 ساعات",
        price: 65,
        rating: 4.9,
        reviews_count: 13500,
        url: "https://getyourguide.com/cape-town-l101/?partner_id=YOUR_TP_MARKER"
      }
    ],
    description_ar: "أحد أجمل مدن العالم طبيعةً، حيث يلتقي جبل الطاولة المحيطين مع البطاريق البرية والشواطئ الذهبية.",
    description_en: "Breathtaking coastal city framed by Table Mountain, penguin colonies, and world-class vineyards."
  }
];

// Merge base cities, extended regional cities, and all world dataset deduplicated by ID
const cityMap = new Map<string, CityData>();
[...BASE_CITIES_DATA, ...EXTENDED_REGIONAL_CITIES, ...buildAllWorldCitiesDataset()].forEach((c) => {
  cityMap.set(c.id, c);
});

export const CITIES_DATA: CityData[] = Array.from(cityMap.values());

