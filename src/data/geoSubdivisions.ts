export interface ProvinceFeature {
  type: 'Feature';
  id: string;
  countryCode: string; // ISO 2 or 3
  countryName_ar: string;
  countryName_en: string;
  provinceName_ar: string;
  provinceName_en: string;
  center: [number, number]; // [lat, lng]
  avgPrice: number;
  dealsCount: number;
  geometry: {
    type: 'Polygon' | 'MultiPolygon';
    coordinates: number[][][] | number[][][][];
  };
}

// Key Subdivision GeoJSON polygons for major countries & provinces
export const COUNTRY_PROVINCES_GEOJSON: ProvinceFeature[] = [
  // UAE (الإمارات)
  {
    type: 'Feature',
    id: 'ae_dubai',
    countryCode: 'ARE',
    countryName_ar: 'الإمارات العربية المتحدة',
    countryName_en: 'United Arab Emirates',
    provinceName_ar: 'إمارة دبي',
    provinceName_en: 'Emirate of Dubai',
    center: [25.2048, 55.2708],
    avgPrice: 280,
    dealsCount: 1420,
    geometry: {
      type: 'Polygon',
      coordinates: [[
        [54.88, 24.80], [55.55, 24.82], [55.62, 25.35], [55.15, 25.32], [54.88, 24.80]
      ]]
    }
  },
  {
    type: 'Feature',
    id: 'ae_abu_dhabi',
    countryCode: 'ARE',
    countryName_ar: 'الإمارات العربية المتحدة',
    countryName_en: 'United Arab Emirates',
    provinceName_ar: 'إمارة أبوظبي',
    provinceName_en: 'Emirate of Abu Dhabi',
    center: [24.4539, 54.3773],
    avgPrice: 210,
    dealsCount: 980,
    geometry: {
      type: 'Polygon',
      coordinates: [[
        [51.50, 22.50], [55.80, 22.50], [55.80, 24.80], [51.50, 24.80], [51.50, 22.50]
      ]]
    }
  },

  // Saudi Arabia (السعودية)
  {
    type: 'Feature',
    id: 'sa_riyadh',
    countryCode: 'SAU',
    countryName_ar: 'المملكة العربية السعودية',
    countryName_en: 'Saudi Arabia',
    provinceName_ar: 'منطقة الرياض',
    provinceName_en: 'Riyadh Region',
    center: [24.7136, 46.6753],
    avgPrice: 195,
    dealsCount: 890,
    geometry: {
      type: 'Polygon',
      coordinates: [[
        [44.00, 22.00], [48.50, 22.00], [48.50, 26.50], [44.00, 26.50], [44.00, 22.00]
      ]]
    }
  },
  {
    type: 'Feature',
    id: 'sa_makkah',
    countryCode: 'SAU',
    countryName_ar: 'المملكة العربية السعودية',
    countryName_en: 'Saudi Arabia',
    provinceName_ar: 'منطقة مكة المكرمة (جدة والمدينة)',
    provinceName_en: 'Makkah & Jeddah Region',
    center: [21.4858, 39.1925],
    avgPrice: 175,
    dealsCount: 1150,
    geometry: {
      type: 'Polygon',
      coordinates: [[
        [38.50, 19.50], [42.00, 19.50], [42.00, 23.50], [38.50, 23.50], [38.50, 19.50]
      ]]
    }
  },

  // France (فرنسا)
  {
    type: 'Feature',
    id: 'fr_ile_de_france',
    countryCode: 'FRA',
    countryName_ar: 'فرنسا',
    countryName_en: 'France',
    provinceName_ar: 'إيل دو فرانس (باريس ومحيطها)',
    provinceName_en: 'Île-de-France (Paris Region)',
    center: [48.8566, 2.3522],
    avgPrice: 310,
    dealsCount: 2100,
    geometry: {
      type: 'Polygon',
      coordinates: [[
        [1.50, 48.10], [3.50, 48.10], [3.50, 49.20], [1.50, 49.20], [1.50, 48.10]
      ]]
    }
  },
  {
    type: 'Feature',
    id: 'fr_paca',
    countryCode: 'FRA',
    countryName_ar: 'فرنسا',
    countryName_en: 'France',
    provinceName_ar: 'إقليم بروفانس ألب كوت دازور (نيس والكان)',
    provinceName_en: 'Provence-Alpes-Côte d\'Azur (Nice & Cannes)',
    center: [43.7102, 7.2620],
    avgPrice: 340,
    dealsCount: 1350,
    geometry: {
      type: 'Polygon',
      coordinates: [[
        [4.50, 43.00], [7.80, 43.00], [7.80, 45.00], [4.50, 45.00], [4.50, 43.00]
      ]]
    }
  },

  // Japan (اليابان)
  {
    type: 'Feature',
    id: 'jp_tokyo',
    countryCode: 'JPN',
    countryName_ar: 'اليابان',
    countryName_en: 'Japan',
    provinceName_ar: 'محافظة طوكيو الكبرى',
    provinceName_en: 'Tokyo Metropolis',
    center: [35.6762, 139.6503],
    avgPrice: 220,
    dealsCount: 1850,
    geometry: {
      type: 'Polygon',
      coordinates: [[
        [138.80, 35.20], [140.20, 35.20], [140.20, 36.20], [138.80, 36.20], [138.80, 35.20]
      ]]
    }
  },
  {
    type: 'Feature',
    id: 'jp_kansai',
    countryCode: 'JPN',
    countryName_ar: 'اليابان',
    countryName_en: 'Japan',
    provinceName_ar: 'إقليم كانساي (كيوتو وأوساكا)',
    provinceName_en: 'Kansai Region (Kyoto & Osaka)',
    center: [35.0116, 135.7681],
    avgPrice: 190,
    dealsCount: 1620,
    geometry: {
      type: 'Polygon',
      coordinates: [[
        [134.50, 34.00], [136.50, 34.00], [136.50, 35.80], [134.50, 35.80], [134.50, 34.00]
      ]]
    }
  },

  // Egypt (مصر)
  {
    type: 'Feature',
    id: 'eg_cairo',
    countryCode: 'EGY',
    countryName_ar: 'مصر',
    countryName_en: 'Egypt',
    provinceName_ar: 'محافظة القاهرة والجيزة',
    provinceName_en: 'Cairo & Giza Governorate',
    center: [30.0444, 31.2357],
    avgPrice: 75,
    dealsCount: 820,
    geometry: {
      type: 'Polygon',
      coordinates: [[
        [30.80, 29.50], [32.00, 29.50], [32.00, 30.50], [30.80, 30.50], [30.80, 29.50]
      ]]
    }
  },
  {
    type: 'Feature',
    id: 'eg_red_sea',
    countryCode: 'EGY',
    countryName_ar: 'مصر',
    countryName_en: 'Egypt',
    provinceName_ar: 'محافظة البحر الأحمر وجنوب سيناء (الغردقة وشرم)',
    provinceName_en: 'Red Sea & South Sinai (Hurghada & Sharm)',
    center: [27.2579, 33.8116],
    avgPrice: 68,
    dealsCount: 1240,
    geometry: {
      type: 'Polygon',
      coordinates: [[
        [32.50, 25.00], [35.50, 25.00], [35.50, 28.50], [32.50, 28.50], [32.50, 25.00]
      ]]
    }
  },

  // Thailand (تايلاند)
  {
    type: 'Feature',
    id: 'th_bangkok',
    countryCode: 'THA',
    countryName_ar: 'تايلاند',
    countryName_en: 'Thailand',
    provinceName_ar: 'منطقة بانكوك الكبرى',
    provinceName_en: 'Bangkok Metropolitan Region',
    center: [13.7563, 100.5018],
    avgPrice: 65,
    dealsCount: 1980,
    geometry: {
      type: 'Polygon',
      coordinates: [[
        [99.80, 13.20], [101.20, 13.20], [101.20, 14.50], [99.80, 14.50], [99.80, 13.20]
      ]]
    }
  },
  {
    type: 'Feature',
    id: 'th_phuket',
    countryCode: 'THA',
    countryName_ar: 'تايلاند',
    countryName_en: 'Thailand',
    provinceName_ar: 'محافظة بوكيت والجزر المجاورة',
    provinceName_en: 'Phuket Province & Islands',
    center: [7.8804, 98.3923],
    avgPrice: 85,
    dealsCount: 1540,
    geometry: {
      type: 'Polygon',
      coordinates: [[
        [98.00, 7.50], [99.00, 7.50], [99.00, 8.50], [98.00, 8.50], [98.00, 7.50]
      ]]
    }
  },

  // USA (الولايات المتحدة)
  {
    type: 'Feature',
    id: 'us_new_york',
    countryCode: 'USA',
    countryName_ar: 'الولايات المتحدة الأمريكية',
    countryName_en: 'United States',
    provinceName_ar: 'ولاية نيويورك',
    provinceName_en: 'New York State',
    center: [40.7128, -74.0060],
    avgPrice: 320,
    dealsCount: 2450,
    geometry: {
      type: 'Polygon',
      coordinates: [[
        [-79.80, 40.50], [-71.80, 40.50], [-71.80, 45.00], [-79.80, 45.00], [-79.80, 40.50]
      ]]
    }
  },
  {
    type: 'Feature',
    id: 'us_california',
    countryCode: 'USA',
    countryName_ar: 'الولايات المتحدة الأمريكية',
    countryName_en: 'United States',
    provinceName_ar: 'ولاية كاليفورنيا (لوس أنجلوس وسان فرانسيسكو)',
    provinceName_en: 'California (Los Angeles & SF)',
    center: [34.0522, -118.2437],
    avgPrice: 290,
    dealsCount: 3100,
    geometry: {
      type: 'Polygon',
      coordinates: [[
        [-124.50, 32.50], [-114.10, 32.50], [-114.10, 42.00], [-124.50, 42.00], [-124.50, 32.50]
      ]]
    }
  },

  // UK (المملكة المتحدة)
  {
    type: 'Feature',
    id: 'gb_england',
    countryCode: 'GBR',
    countryName_ar: 'المملكة المتحدة',
    countryName_en: 'United Kingdom',
    provinceName_ar: 'إقليم إنجلترا (لندن ومانشستر)',
    provinceName_en: 'England (London & Manchester)',
    center: [51.5074, -0.1278],
    avgPrice: 295,
    dealsCount: 2200,
    geometry: {
      type: 'Polygon',
      coordinates: [[
        [-5.50, 50.00], [1.80, 50.00], [1.80, 55.80], [-5.50, 55.80], [-5.50, 50.00]
      ]]
    }
  },

  // Turkey (تركيا)
  {
    type: 'Feature',
    id: 'tr_istanbul',
    countryCode: 'TUR',
    countryName_ar: 'تركيا',
    countryName_en: 'Turkey',
    provinceName_ar: 'ولاية إسطنبول',
    provinceName_en: 'Istanbul Province',
    center: [41.0082, 28.9784],
    avgPrice: 110,
    dealsCount: 2150,
    geometry: {
      type: 'Polygon',
      coordinates: [[
        [28.00, 40.80], [29.80, 40.80], [29.80, 41.60], [28.00, 41.60], [28.00, 40.80]
      ]]
    }
  },
  {
    type: 'Feature',
    id: 'tr_antalya',
    countryCode: 'TUR',
    countryName_ar: 'تركيا',
    countryName_en: 'Turkey',
    provinceName_ar: 'ولاية أنطاليا والساحل الجذّاب',
    provinceName_en: 'Antalya Mediterranean Region',
    center: [36.8969, 30.7133],
    avgPrice: 125,
    dealsCount: 1680,
    geometry: {
      type: 'Polygon',
      coordinates: [[
        [29.20, 36.00], [32.50, 36.00], [32.50, 37.50], [29.20, 37.50], [29.20, 36.00]
      ]]
    }
  },

  // Italy (إيطاليا)
  {
    type: 'Feature',
    id: 'it_lazio_rome',
    countryCode: 'ITA',
    countryName_ar: 'إيطاليا',
    countryName_en: 'Italy',
    provinceName_ar: 'إقليم لاتسيو (العاصمة روما)',
    provinceName_en: 'Lazio Region (Rome)',
    center: [41.9028, 12.4964],
    avgPrice: 240,
    dealsCount: 1950,
    geometry: {
      type: 'Polygon',
      coordinates: [[
        [11.50, 41.20], [14.00, 41.20], [14.00, 42.80], [11.50, 42.80], [11.50, 41.20]
      ]]
    }
  },
  {
    type: 'Feature',
    id: 'it_lombardy_milan',
    countryCode: 'ITA',
    countryName_ar: 'إيطاليا',
    countryName_en: 'Italy',
    provinceName_ar: 'إقليم لومبارديا (ميلانو وبحيرة كومو)',
    provinceName_en: 'Lombardy Region (Milan & Como)',
    center: [45.4642, 9.1900],
    avgPrice: 260,
    dealsCount: 1720,
    geometry: {
      type: 'Polygon',
      coordinates: [[
        [8.50, 44.80], [11.20, 44.80], [11.20, 46.60], [8.50, 46.60], [8.50, 44.80]
      ]]
    }
  },

  // Spain (إسبانيا)
  {
    type: 'Feature',
    id: 'es_catalonia',
    countryCode: 'ESP',
    countryName_ar: 'إسبانيا',
    countryName_en: 'Spain',
    provinceName_ar: 'إقليم كاتالونيا (برشلونة)',
    provinceName_en: 'Catalonia Region (Barcelona)',
    center: [41.3851, 2.1734],
    avgPrice: 230,
    dealsCount: 2050,
    geometry: {
      type: 'Polygon',
      coordinates: [[
        [0.20, 40.50], [3.30, 40.50], [3.30, 42.80], [0.20, 42.80], [0.20, 40.50]
      ]]
    }
  },
  {
    type: 'Feature',
    id: 'es_madrid',
    countryCode: 'ESP',
    countryName_ar: 'إسبانيا',
    countryName_en: 'Spain',
    provinceName_ar: 'إقليم مدريد العاصمة',
    provinceName_en: 'Community of Madrid',
    center: [40.4168, -3.7038],
    avgPrice: 210,
    dealsCount: 1840,
    geometry: {
      type: 'Polygon',
      coordinates: [[
        [-4.50, 39.80], [-3.00, 39.80], [-3.00, 41.20], [-4.50, 41.20], [-4.50, 39.80]
      ]]
    }
  },

  // Indonesia (إندونيسيا)
  {
    type: 'Feature',
    id: 'id_bali',
    countryCode: 'IDN',
    countryName_ar: 'إندونيسيا',
    countryName_en: 'Indonesia',
    provinceName_ar: 'مقاطعة بالي الساحرة',
    provinceName_en: 'Bali Province',
    center: [-8.4095, 115.1889],
    avgPrice: 72,
    dealsCount: 2380,
    geometry: {
      type: 'Polygon',
      coordinates: [[
        [114.40, -8.90], [115.80, -8.90], [115.80, -8.00], [114.40, -8.00], [114.40, -8.90]
      ]]
    }
  },

  // Malaysia (ماليزيا)
  {
    type: 'Feature',
    id: 'my_kl',
    countryCode: 'MYS',
    countryName_ar: 'ماليزيا',
    countryName_en: 'Malaysia',
    provinceName_ar: 'إقليم كوالالمبور وسيلانغور',
    provinceName_en: 'Kuala Lumpur & Selangor',
    center: [3.1390, 101.6869],
    avgPrice: 62,
    dealsCount: 1750,
    geometry: {
      type: 'Polygon',
      coordinates: [[
        [100.80, 2.50], [102.20, 2.50], [102.20, 3.80], [100.80, 3.80], [100.80, 2.50]
      ]]
    }
  }
];
