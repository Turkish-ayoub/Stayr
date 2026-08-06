import React, { useState, useEffect, useRef, useCallback, useMemo } from 'react';
import {
  APIProvider,
  Map,
  AdvancedMarker,
  useMap,
  useMapsLibrary
} from '@vis.gl/react-google-maps';
import L from 'leaflet';
import { motion, AnimatePresence } from 'motion/react';
import {
  MapPin,
  Building2,
  ExternalLink,
  Layers,
  Globe,
  Compass,
  DollarSign,
  X,
  Star,
  Sparkles,
  Navigation,
  Maximize2,
  Minimize2,
  Hotel,
  ShieldCheck,
  Plane,
  Ticket,
  Copy,
  Check,
  Key,
  Info,
  ArrowRight,
  ChevronLeft,
  Percent,
  Search
} from 'lucide-react';
import { CityData } from '../types';
import { Translation, LanguageCode } from '../translations';
import { generateAffiliateLink, convertPrice, OTAProvider } from '../lib/affiliate';

// API Key setup following Constitution rules
const API_KEY =
  process.env.GOOGLE_MAPS_PLATFORM_KEY ||
  (import.meta as any).env?.VITE_GOOGLE_MAPS_PLATFORM_KEY ||
  (globalThis as any).GOOGLE_MAPS_PLATFORM_KEY ||
  '';

const hasValidKey = Boolean(API_KEY) && API_KEY !== 'YOUR_API_KEY' && API_KEY.trim().length > 10;

export interface SearchedLocationTarget {
  lat: number;
  lng: number;
  cityNameAr: string;
  cityNameEn: string;
  countryAr?: string;
  countryEn?: string;
  stateAr?: string;
  iata?: string;
  cityData?: CityData;
}

interface GisMapProps {
  cities: CityData[];
  selectedCity: CityData | null;
  onSelectCity: (city: CityData) => void;
  searchedLocation?: SearchedLocationTarget | null;
  checkInDate?: string;
  checkOutDate?: string;
  currency?: string;
  t: Translation;
  lang: LanguageCode;
}

interface ClickedLocation {
  lat: number;
  lng: number;
  address_ar: string;
  address_en: string;
  city_name_ar: string;
  city_name_en: string;
  state_governorate_ar: string;
  country_name_ar: string;
  country_name_en: string;
  country_code: string;
  nearestCity?: CityData;
  distanceToNearestKm?: number;
  isWaterOrDesert?: boolean;
}

interface OTARate {
  provider: string;
  name_ar: string;
  badge_ar: string;
  logoColor: string;
  bgGradient: string;
  pricePerNight: number;
  discountPct?: number;
  bookingUrl: string;
  features_ar: string[];
}

interface RadiusHotel {
  id: string;
  name_ar: string;
  name_en: string;
  stars: number;
  rating: number;
  reviewsCount: number;
  distanceKm: number;
  pricePerNight: number;
  district_ar: string;
  provider: string;
  dealUrl: string;
}

// Haversine Distance Helper in Kilometers
function calculateDistanceKm(lat1: number, lon1: number, lat2: number, lon2: number): number {
  const R = 6371; // Earth's radius in km
  const dLat = ((lat2 - lat1) * Math.PI) / 180;
  const dLon = ((lon2 - lon1) * Math.PI) / 180;
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos((lat1 * Math.PI) / 180) *
      Math.cos((lat2 * Math.PI) / 180) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return Math.round(R * c * 10) / 10;
}

// Find nearest city from dataset
function getNearestCityFromDataset(lat: number, lng: number, cities: CityData[]) {
  if (!cities || cities.length === 0) return { city: null, distanceKm: 0 };
  let minDistance = Infinity;
  let nearest: CityData | null = null;

  for (const c of cities) {
    const dist = calculateDistanceKm(lat, lng, c.coordinates[0], c.coordinates[1]);
    if (dist < minDistance) {
      minDistance = dist;
      nearest = c;
    }
  }
  return { city: nearest, distanceKm: minDistance };
}

// Generate realistic multi-OTA rates dynamically
function generateOTARates(basePrice: number, cityName: string, checkIn?: string, checkOut?: string, currency: string = 'USD'): OTARate[] {
  const safePrice = Math.max(45, basePrice || 90);

  return [
    {
      provider: 'Booking.com',
      name_ar: 'بوكينج كوم',
      badge_ar: 'أفضل سعر ضمان',
      logoColor: '#003580',
      bgGradient: 'from-blue-900/40 via-blue-800/30 to-slate-900/80',
      pricePerNight: safePrice,
      bookingUrl: generateAffiliateLink('Booking.com', cityName, checkIn, checkOut, currency),
      features_ar: ['إلغاء مجاني لمعظم الغرف', 'الدفع في مكان الإقامة', 'خدمة عملاء 24/7']
    },
    {
      provider: 'Agoda',
      name_ar: 'اجودا (Agoda)',
      badge_ar: 'خصم التطبيق -12%',
      logoColor: '#e11d48',
      bgGradient: 'from-rose-900/40 via-rose-800/30 to-slate-900/80',
      pricePerNight: Math.round(safePrice * 0.88),
      discountPct: 12,
      bookingUrl: generateAffiliateLink('Agoda', cityName, checkIn, checkOut, currency),
      features_ar: ['خصم حصري على الهواتف', 'تجميع نقاط AgodaCash', 'ضمان مطابقة السعر']
    },
    {
      provider: 'Expedia',
      name_ar: 'إكسبيديا (Expedia)',
      badge_ar: 'باقة + إفطار مجاني',
      logoColor: '#eab308',
      bgGradient: 'from-amber-900/40 via-amber-800/30 to-slate-900/80',
      pricePerNight: Math.round(safePrice * 1.04),
      bookingUrl: generateAffiliateLink('Expedia', cityName, checkIn, checkOut, currency),
      features_ar: ['نقاط مكافآت One Key', 'خصم عند دمج الطيران والفندق', 'خيارات حجز مرنة']
    },
    {
      provider: 'Trip.com',
      name_ar: 'تريب كوم (Trip.com)',
      badge_ar: 'عرض الشرق الأوسط وآسيا',
      logoColor: '#06b6d4',
      bgGradient: 'from-cyan-900/40 via-cyan-800/30 to-slate-900/80',
      pricePerNight: Math.round(safePrice * 0.92),
      discountPct: 8,
      bookingUrl: generateAffiliateLink('Trip.com', cityName, checkIn, checkOut, currency),
      features_ar: ['تأكيد حجز فوري', 'دعم كامل باللغة العربية', 'عروض قطارات وطيران']
    },
    {
      provider: 'Hotels.com',
      name_ar: 'هوتيلز كوم',
      badge_ar: 'اكسب ليلة مجانية',
      logoColor: '#9333ea',
      bgGradient: 'from-purple-900/40 via-purple-800/30 to-slate-900/80',
      pricePerNight: Math.round(safePrice * 0.97),
      bookingUrl: generateAffiliateLink('Hotels.com', cityName, checkIn, checkOut, currency),
      features_ar: ['ليلة واحدة مجانية لكل 10 ليالٍ', 'عروض السرية للأعضاء', 'حجز سريع ومباشر']
    }
  ];
}

// Generate radius hotels near clicked point
function generateRadiusHotels(lat: number, lng: number, placeName: string, basePrice: number): RadiusHotel[] {
  const safePrice = Math.max(50, basePrice || 100);
  const prefixes = [
    { ar: 'فندق وسبا', en: 'Hotel & Spa', stars: 5, score: 9.5, mult: 1.4 },
    { ar: 'منتجع الشاطئ الذهبي', en: 'Golden Resort', stars: 5, score: 9.3, mult: 1.25 },
    { ar: 'فندق البوتيك التراثي', en: 'Heritage Boutique Hotel', stars: 4, score: 8.9, mult: 0.9 },
    { ar: 'أجنحة الفخامة والأعمال', en: 'Luxury Business Suites', stars: 5, score: 9.6, mult: 1.6 },
    { ar: 'نزل الإقامة الملكية', en: 'Royal Residence Inn', stars: 4, score: 8.8, mult: 0.85 }
  ];

  return prefixes.map((p, idx) => {
    const dist = Math.round((0.3 + idx * 0.6) * 10) / 10;
    return {
      id: `hotel_radius_${idx}_${Math.round(lat * 100)}`,
      name_ar: `${p.ar} ${placeName}`,
      name_en: `${placeName} ${p.en}`,
      stars: p.stars,
      rating: p.score,
      reviewsCount: 120 + idx * 85,
      distanceKm: dist,
      pricePerNight: Math.round(safePrice * p.mult),
      district_ar: `على بعد ${dist} كم من الموقع المحدد`,
      provider: idx % 2 === 0 ? 'Booking.com' : 'Agoda',
      dealUrl: `https://www.booking.com/searchresults.html?ss=${encodeURIComponent(placeName)}&aid=YOUR_TP_MARKER`
    };
  });
}

// Google Maps Custom Dark Vector Style
const DARK_VECTOR_MAP_STYLE: google.maps.MapTypeStyle[] = [
  { elementType: 'geometry', stylers: [{ color: '#0f172a' }] },
  { elementType: 'labels.text.fill', stylers: [{ color: '#94a3b8' }] },
  { elementType: 'labels.text.stroke', stylers: [{ color: '#0f172a' }] },
  { featureType: 'administrative', elementType: 'country', stylers: [{ color: '#38bdf8' }] },
  { featureType: 'administrative.country', elementType: 'geometry.stroke', stylers: [{ color: '#1e293b' }, { weight: 1.2 }] },
  { featureType: 'administrative.province', elementType: 'geometry.stroke', stylers: [{ color: '#334155' }] },
  { featureType: 'landscape', elementType: 'geometry', stylers: [{ color: '#090d16' }] },
  { featureType: 'poi', elementType: 'geometry', stylers: [{ color: '#1e293b' }] },
  { featureType: 'poi', elementType: 'labels.text.fill', stylers: [{ color: '#38bdf8' }] },
  { featureType: 'road', elementType: 'geometry', stylers: [{ color: '#1e293b' }] },
  { featureType: 'road.highway', elementType: 'geometry', stylers: [{ color: '#0284c7' }] },
  { featureType: 'water', elementType: 'geometry', stylers: [{ color: '#030712' }] },
  { featureType: 'water', elementType: 'labels.text.fill', stylers: [{ color: '#38bdf8' }] }
];

// Inner Controller for Google Maps Instance & Click Events
function GoogleMapController({
  selectedCity,
  searchedLocation,
  clickedLocation,
  onMapClick,
  mapType
}: {
  selectedCity: CityData | null;
  searchedLocation?: SearchedLocationTarget | null;
  clickedLocation: ClickedLocation | null;
  onMapClick: (lat: number, lng: number) => void;
  mapType: 'dark' | 'satellite';
}) {
  const map = useMap();

  // Apply map type and style dynamically
  useEffect(() => {
    if (!map) return;

    if (mapType === 'satellite') {
      map.setMapTypeId('hybrid');
    } else {
      map.setMapTypeId('roadmap');
      map.setOptions({ styles: DARK_VECTOR_MAP_STYLE });
    }
  }, [map, mapType]);

  // Pan to searched location or selected city when updated
  useEffect(() => {
    if (!map) return;
    if (searchedLocation) {
      map.panTo({ lat: searchedLocation.lat, lng: searchedLocation.lng });
      map.setZoom(12);
    } else if (selectedCity) {
      map.panTo({ lat: selectedCity.coordinates[0], lng: selectedCity.coordinates[1] });
      map.setZoom(10);
    }
  }, [map, searchedLocation, selectedCity]);

  // Handle map click events directly on Google Map instance
  useEffect(() => {
    if (!map) return;

    const listener = map.addListener('click', (e: google.maps.MapMouseEvent) => {
      if (e.latLng) {
        const lat = e.latLng.lat();
        const lng = e.latLng.lng();
        onMapClick(lat, lng);
        map.panTo({ lat, lng });
      }
    });

    return () => {
      google.maps.event.removeListener(listener);
    };
  }, [map, onMapClick]);

  return null;
}

export const GisMap: React.FC<GisMapProps> = ({
  cities,
  selectedCity,
  onSelectCity,
  searchedLocation,
  checkInDate,
  checkOutDate,
  currency = 'USD',
  t,
  lang
}) => {
  const [mapType, setMapType] = useState<'dark' | 'satellite'>('satellite');
  const [showHeatmap, setShowHeatmap] = useState(false);
  const [showGlowingBadges, setShowGlowingBadges] = useState(false); // Default: OFF for clean, uncluttered map
  const [isFullScreen, setIsFullScreen] = useState(false);
  const [clickedLocation, setClickedLocation] = useState<ClickedLocation | null>(null);
  const [isGeocoding, setIsGeocoding] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [copiedCoords, setCopiedCoords] = useState(false);
  const [activeTab, setActiveTab] = useState<'ota' | 'hotels'>('ota');

  // Leaflet Fallback Map Refs
  const leafletContainerRef = useRef<HTMLDivElement>(null);
  const leafletInstanceRef = useRef<L.Map | null>(null);
  const leafletTileRef = useRef<L.TileLayer | null>(null);
  const leafletLabelsRef = useRef<L.TileLayer | null>(null);
  const leafletMarkerRef = useRef<L.Marker | null>(null);
  const leafletCityMarkersGroupRef = useRef<L.LayerGroup | null>(null);

  // Perform Reverse Geocoding for clicked coordinates
  const performReverseGeocode = useCallback(
    async (lat: number, lng: number) => {
      setIsGeocoding(true);
      setIsDrawerOpen(true);

      const nearestInfo = getNearestCityFromDataset(lat, lng, cities);

      let resolvedCityAr = '';
      let resolvedCityEn = '';
      let resolvedStateAr = '';
      let resolvedCountryAr = '';
      let resolvedCountryEn = '';
      let countryCode = '';
      let isWaterOrDesert = false;

      // 1. Try Google Geocoder if available
      if (window.google && window.google.maps && window.google.maps.Geocoder) {
        try {
          const geocoder = new window.google.maps.Geocoder();
          const response = await new Promise<google.maps.GeocoderResult[]>((resolve, reject) => {
            geocoder.geocode({ location: { lat, lng }, language: lang }, (results, status) => {
              if (status === 'OK' && results && results.length > 0) {
                resolve(results);
              } else {
                reject(status);
              }
            });
          });

          if (response && response.length > 0) {
            const best = response[0];
            for (const comp of best.address_components) {
              if (comp.types.includes('locality') || comp.types.includes('postal_town')) {
                resolvedCityAr = comp.long_name;
                resolvedCityEn = comp.long_name;
              } else if (comp.types.includes('administrative_area_level_1')) {
                resolvedStateAr = comp.long_name;
              } else if (comp.types.includes('country')) {
                resolvedCountryAr = comp.long_name;
                resolvedCountryEn = comp.long_name;
                countryCode = comp.short_name;
              }
            }
          }
        } catch (err) {
          console.warn('Google Reverse Geocoding fallback to OpenStreetMap:', err);
        }
      }

      // 2. Fallback to OpenStreetMap Nominatim if Google geocoding returned empty or wasn't available
      if (!resolvedCountryAr) {
        try {
          const res = await fetch(
            `https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lng}&accept-language=${lang},en`
          );
          if (res.ok) {
            const data = await res.json();
            if (data && data.address) {
              resolvedCityAr =
                data.address.city ||
                data.address.town ||
                data.address.village ||
                data.address.suburb ||
                data.address.county ||
                '';
              resolvedCityEn = resolvedCityAr;
              resolvedStateAr = data.address.state || data.address.region || '';
              resolvedCountryAr = data.address.country || '';
              countryCode = (data.address.country_code || '').toUpperCase();
            } else {
              isWaterOrDesert = true;
            }
          }
        } catch (err) {
          console.warn('Nominatim reverse geocode error:', err);
        }
      }

      // 3. Fallback to dataset nearest city if remote location or ocean
      if (!resolvedCityAr && nearestInfo.city) {
        if (nearestInfo.distanceKm > 180) {
          isWaterOrDesert = true;
          resolvedCityAr = `موقع ناءٍ بالقرب من ${nearestInfo.city.name_ar}`;
          resolvedCityEn = `Remote Area near ${nearestInfo.city.name_en}`;
        } else {
          resolvedCityAr = nearestInfo.city.name_ar;
          resolvedCityEn = nearestInfo.city.name_en;
        }
        resolvedCountryAr = nearestInfo.city.country_ar;
        resolvedCountryEn = nearestInfo.city.country_en;
      }

      const fullAddressAr = [resolvedCityAr, resolvedStateAr, resolvedCountryAr]
        .filter(Boolean)
        .join('، ');
      const fullAddressEn = [resolvedCityEn, resolvedCountryEn].filter(Boolean).join(', ');

      setClickedLocation({
        lat,
        lng,
        address_ar: fullAddressAr || 'موقع محدد على الخريطة',
        address_en: fullAddressEn || 'Selected Map Location',
        city_name_ar: resolvedCityAr || 'منطقة مستهدفة',
        city_name_en: resolvedCityEn || 'Target Zone',
        state_governorate_ar: resolvedStateAr,
        country_name_ar: resolvedCountryAr || 'دولي',
        country_name_en: resolvedCountryEn || 'International',
        country_code: countryCode || 'INT',
        nearestCity: nearestInfo.city || undefined,
        distanceToNearestKm: nearestInfo.distanceKm,
        isWaterOrDesert
      });

      setIsGeocoding(false);
    },
    [cities, lang]
  );

  // Handle external search location selection: trigger reverse geocode, animate map & open drawer
  useEffect(() => {
    if (searchedLocation) {
      performReverseGeocode(searchedLocation.lat, searchedLocation.lng);

      if (!hasValidKey && leafletInstanceRef.current) {
        leafletInstanceRef.current.panTo([searchedLocation.lat, searchedLocation.lng]);
        leafletInstanceRef.current.setZoom(12);
      }
    }
  }, [searchedLocation, performReverseGeocode]);

  // Handle map click
  const handleMapClick = useCallback(
    (lat: number, lng: number) => {
      performReverseGeocode(lat, lng);
    },
    [performReverseGeocode]
  );

  // Initialize Leaflet Map Fallback if Google Maps Key is missing
  useEffect(() => {
    if (hasValidKey || !leafletContainerRef.current) return;

    if (!leafletInstanceRef.current) {
      const map = L.map(leafletContainerRef.current, {
        center: [25.2, 55.2],
        zoom: 4,
        zoomControl: false,
        attributionControl: false
      });

      const darkTile = L.tileLayer(
        'https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png',
        { maxZoom: 19, subdomains: 'abcd' }
      ).addTo(map);

      leafletTileRef.current = darkTile;

      map.on('click', (e: L.LeafletMouseEvent) => {
        handleMapClick(e.latlng.lat, e.latlng.lng);
        map.panTo(e.latlng);
      });

      leafletInstanceRef.current = map;
    }
  }, [handleMapClick]);

  // Update Leaflet tile style when mapType changes
  useEffect(() => {
    if (hasValidKey || !leafletInstanceRef.current) return;

    const map = leafletInstanceRef.current;
    if (leafletTileRef.current) {
      map.removeLayer(leafletTileRef.current);
    }
    if (leafletLabelsRef.current) {
      map.removeLayer(leafletLabelsRef.current);
    }

    if (mapType === 'satellite') {
      const satTile = L.tileLayer(
        'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}',
        { maxZoom: 18 }
      ).addTo(map);

      // Add high-contrast places & road labels layer over satellite
      const labelsTile = L.tileLayer(
        'https://{s}.basemaps.cartocdn.com/rastertiles/voyager_only_labels/{z}/{x}/{y}{r}.png',
        { maxZoom: 18, subdomains: 'abcd' }
      ).addTo(map);

      leafletTileRef.current = satTile;
      leafletLabelsRef.current = labelsTile;
    } else {
      const darkTile = L.tileLayer(
        'https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png',
        { maxZoom: 19, subdomains: 'abcd' }
      ).addTo(map);
      leafletTileRef.current = darkTile;
      leafletLabelsRef.current = null;
    }
  }, [mapType]);

  // Render City Markers on Leaflet Map (Optional Glowing Badges)
  useEffect(() => {
    if (hasValidKey || !leafletInstanceRef.current || !cities || cities.length === 0) return;
    const map = leafletInstanceRef.current;

    if (leafletCityMarkersGroupRef.current) {
      leafletCityMarkersGroupRef.current.clearLayers();
    } else {
      leafletCityMarkersGroupRef.current = L.layerGroup().addTo(map);
    }

    cities.forEach((city) => {
      const isSelected = selectedCity?.id === city.id;
      // Do not show floating badges on all cities unless user explicitly enables glowing badges or city is selected
      if (!showGlowingBadges && !isSelected) return;

      const isGreen = city.zone === 'green';
      const isYellow = city.zone === 'yellow';
      const badgeBorder = isGreen ? 'border-emerald-500/80' : isYellow ? 'border-amber-500/80' : 'border-rose-500/80';
      const badgeText = isGreen ? 'text-emerald-300' : isYellow ? 'text-amber-300' : 'text-rose-300';
      const badgeDot = isGreen ? 'bg-emerald-400' : isYellow ? 'bg-amber-400' : 'bg-rose-500';
      const cityName = lang === 'ar' ? city.name_ar : city.name_en;
      const priceText = convertPrice(city.avg_hotel_price, currency);

      const customIcon = L.divIcon({
        className: 'custom-city-marker-div',
        html: `<div class="cursor-pointer flex items-center gap-1.5 px-2.5 py-1 rounded-full border ${badgeBorder} bg-slate-950/90 ${badgeText} backdrop-blur-md text-[11px] font-bold shadow-xl hover:scale-110 transition-transform">
          <span class="w-2 h-2 rounded-full ${badgeDot} animate-pulse"></span>
          <span>${cityName}</span>
          <span class="font-mono text-[10px] opacity-90">${priceText}</span>
        </div>`,
        iconSize: [120, 30],
        iconAnchor: [60, 15]
      });

      const marker = L.marker([city.coordinates[0], city.coordinates[1]], { icon: customIcon });
      marker.on('click', () => {
        onSelectCity(city);
        performReverseGeocode(city.coordinates[0], city.coordinates[1]);
        map.panTo([city.coordinates[0], city.coordinates[1]]);
      });
      marker.addTo(leafletCityMarkersGroupRef.current!);
    });
  }, [hasValidKey, cities, lang, currency, onSelectCity, performReverseGeocode, showGlowingBadges, selectedCity]);

  // Update Leaflet marker when clickedLocation changes
  useEffect(() => {
    if (hasValidKey || !leafletInstanceRef.current || !clickedLocation) return;

    const map = leafletInstanceRef.current;
    if (leafletMarkerRef.current) {
      map.removeLayer(leafletMarkerRef.current);
    }

    const customIcon = L.divIcon({
      className: 'custom-pin-animated',
      html: `<div class="relative flex items-center justify-center">
        <span class="animate-ping absolute inline-flex h-8 w-8 rounded-full bg-cyan-400 opacity-75"></span>
        <div class="relative z-10 w-9 h-9 rounded-full bg-gradient-to-tr from-cyan-500 via-sky-400 to-indigo-600 border-2 border-white shadow-xl flex items-center justify-center text-white">
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
        </div>
      </div>`,
      iconSize: [36, 36],
      iconAnchor: [18, 18]
    });

    const marker = L.marker([clickedLocation.lat, clickedLocation.lng], { icon: customIcon }).addTo(map);
    leafletMarkerRef.current = marker;
  }, [clickedLocation]);

  // Calculated OTA Rates & Radius Hotels
  const calculatedOTARates = useMemo(() => {
    if (!clickedLocation) return [];
    const baseP = clickedLocation.nearestCity?.avg_hotel_price || 95;
    const searchCityName = clickedLocation.city_name_en || clickedLocation.city_name_ar || 'Dubai';
    return generateOTARates(baseP, searchCityName, checkInDate, checkOutDate, currency);
  }, [clickedLocation, checkInDate, checkOutDate, currency]);

  const calculatedRadiusHotels = useMemo(() => {
    if (!clickedLocation) return [];
    const baseP = clickedLocation.nearestCity?.avg_hotel_price || 95;
    return generateRadiusHotels(
      clickedLocation.lat,
      clickedLocation.lng,
      clickedLocation.city_name_ar,
      baseP
    );
  }, [clickedLocation]);

  const copyCoordinates = () => {
    if (!clickedLocation) return;
    const text = `${clickedLocation.lat.toFixed(5)}, ${clickedLocation.lng.toFixed(5)}`;
    navigator.clipboard.writeText(text);
    setCopiedCoords(true);
    setTimeout(() => setCopiedCoords(false), 2000);
  };

  const averagePriceVal = useMemo(() => {
    if (!cities || cities.length === 0) return 94;
    const sum = cities.reduce((acc, c) => acc + (c.avg_hotel_price || 0), 0);
    return Math.round(sum / cities.length);
  }, [cities]);

  return (
    <div
      className={`relative w-full rounded-3xl overflow-hidden border border-slate-800 bg-[#070b14] shadow-[0_0_50px_rgba(0,0,0,0.8)] transition-all duration-300 ${
        isFullScreen ? 'fixed inset-0 z-50 rounded-none h-screen w-screen' : 'h-[740px]'
      }`}
    >
      {/* 1. GLASSMORPHISM FLOATING CONTROL PANEL (Left Overlay Panel) */}
      <div className="absolute top-4 left-4 z-20 w-72 max-w-[calc(100vw-32px)] bg-slate-950/85 backdrop-blur-2xl border border-slate-700/60 p-4 rounded-2xl shadow-2xl space-y-3 text-slate-100">
        
        {/* Title & Status */}
        <div className="flex items-center justify-between border-b border-slate-800/80 pb-2.5">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-pulse shadow-[0_0_10px_#22d3ee]" />
            <span className="text-xs font-bold text-white uppercase tracking-wider">
              {lang === 'ar' ? 'مركز التحكم الجغرافي' : 'Geo Control Center'}
            </span>
          </div>
          <span className="px-2 py-0.5 text-[9px] font-bold rounded-md bg-cyan-950/90 text-cyan-300 border border-cyan-500/30">
            {lang === 'ar' ? 'مباشر' : 'LIVE'}
          </span>
        </div>

        {/* KPI Metrics - Large Numbers with Neon Glowing Accents */}
        <div className="grid grid-cols-2 gap-2">
          
          <div className="p-2.5 rounded-xl bg-slate-900/80 border border-slate-800 flex flex-col justify-between">
            <span className="text-[10px] text-slate-400 font-medium flex items-center gap-1">
              <DollarSign className="w-3 h-3 text-cyan-400" />
              {lang === 'ar' ? 'متوسط السعر' : 'Avg Nightly'}
            </span>
            <span className="text-lg font-black text-cyan-300 drop-shadow-[0_0_10px_rgba(6,182,212,0.7)] font-mono mt-1">
              {convertPrice(averagePriceVal, currency)}
            </span>
          </div>

          <div className="p-2.5 rounded-xl bg-slate-900/80 border border-slate-800 flex flex-col justify-between">
            <span className="text-[10px] text-slate-400 font-medium flex items-center gap-1">
              <Star className="w-3 h-3 text-amber-400" />
              {lang === 'ar' ? 'مؤشر الجودة' : 'Quality Score'}
            </span>
            <span className="text-lg font-black text-emerald-300 drop-shadow-[0_0_10px_rgba(16,185,129,0.7)] font-mono mt-1">
              8.9 / 10
            </span>
          </div>

          <div className="p-2.5 rounded-xl bg-slate-900/80 border border-slate-800 flex flex-col justify-between">
            <span className="text-[10px] text-slate-400 font-medium flex items-center gap-1">
              <Building2 className="w-3 h-3 text-indigo-400" />
              {lang === 'ar' ? 'المدن المفهرسة' : 'Indexed Cities'}
            </span>
            <span className="text-lg font-black text-indigo-300 font-mono mt-1">
              {cities.length} {lang === 'ar' ? 'مدينة' : 'Cities'}
            </span>
          </div>

          <div className="p-2.5 rounded-xl bg-slate-900/80 border border-slate-800 flex flex-col justify-between">
            <span className="text-[10px] text-slate-400 font-medium flex items-center gap-1">
              <Ticket className="w-3 h-3 text-rose-400" />
              {lang === 'ar' ? 'العروض النشطة' : 'Active Deals'}
            </span>
            <span className="text-lg font-black text-rose-300 font-mono mt-1">
              1,996
            </span>
          </div>

        </div>

        {/* Layer Mode Toggles & Optional Glowing Badges Switch */}
        <div className="pt-1 flex flex-col gap-2">
          <span className="text-[10px] text-slate-400 font-semibold uppercase tracking-wider">
            {lang === 'ar' ? 'طبقات الخريطة الجغرافية' : 'Map Layer Backdrop'}
          </span>

          <div className="grid grid-cols-2 gap-1.5 p-1 bg-slate-900 rounded-xl border border-slate-800">
            <button
              onClick={() => setMapType('dark')}
              className={`px-2.5 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center justify-center gap-1.5 ${
                mapType === 'dark'
                  ? 'bg-gradient-to-r from-cyan-600 to-indigo-600 text-white shadow-lg shadow-cyan-600/30'
                  : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800'
              }`}
            >
              <Globe className="w-3.5 h-3.5" />
              {lang === 'ar' ? 'فيكتور داكن' : 'Dark Vector'}
            </button>

            <button
              onClick={() => setMapType('satellite')}
              className={`px-2.5 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center justify-center gap-1.5 ${
                mapType === 'satellite'
                  ? 'bg-gradient-to-r from-cyan-600 to-indigo-600 text-white shadow-lg shadow-cyan-600/30'
                  : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800'
              }`}
            >
              <Layers className="w-3.5 h-3.5" />
              {lang === 'ar' ? 'أقمار صناعية' : 'Satellite'}
            </button>
          </div>

          {/* Optional Glowing Badges Toggle Switch */}
          <div className="pt-2 border-t border-slate-800/80 flex flex-col gap-1.5">
            <div className="flex items-center justify-between">
              <span className="text-[10px] text-slate-300 font-bold uppercase tracking-wider flex items-center gap-1">
                <Sparkles className="w-3 h-3 text-cyan-400" />
                {lang === 'ar' ? 'اللافتات المضيئة' : 'Glowing Badges'}
              </span>
              <span className="text-[9px] px-1.5 py-0.5 rounded bg-cyan-950 text-cyan-300 border border-cyan-500/30 font-bold">
                {lang === 'ar' ? 'خيار اختياري' : 'Optional'}
              </span>
            </div>

            <button
              onClick={() => setShowGlowingBadges(!showGlowingBadges)}
              className={`w-full py-2 px-3 rounded-xl border text-xs font-bold transition-all flex items-center justify-between gap-2 ${
                showGlowingBadges
                  ? 'bg-gradient-to-r from-cyan-950 via-slate-900 to-indigo-950 border-cyan-400/80 text-cyan-200 shadow-[0_0_20px_rgba(6,182,212,0.3)]'
                  : 'bg-slate-900/90 border-slate-800 text-slate-400 hover:text-slate-200 hover:bg-slate-800'
              }`}
            >
              <div className="flex items-center gap-2">
                <span className={`w-2.5 h-2.5 rounded-full ${showGlowingBadges ? 'bg-cyan-400 animate-pulse' : 'bg-slate-600'}`} />
                <span>{showGlowingBadges ? (lang === 'ar' ? 'مُمَكّنة فوق الخريطة' : 'Enabled on map') : (lang === 'ar' ? 'مَخفية (اضغط للتفعيل)' : 'Hidden (Click to enable)')}</span>
              </div>
              <div className={`w-8 h-4 rounded-full transition-colors relative p-0.5 ${showGlowingBadges ? 'bg-cyan-500' : 'bg-slate-700'}`}>
                <div className={`w-3 h-3 rounded-full bg-white transition-transform ${showGlowingBadges ? 'translate-x-4 rtl:-translate-x-4' : 'translate-x-0'}`} />
              </div>
            </button>
            <p className="text-[10px] text-slate-400 leading-snug">
              {lang === 'ar'
                ? 'تفعيل خيار الشارات واللافتات المضيئة للمدن والأسعار اختياري وليس إجبارياً على المستخدم'
                : 'Glowing price badges on map are completely optional'}
            </p>
          </div>
        </div>

      </div>

      {/* 2. Top-Right Controls Overlay with Optional Glowing Badges Button */}
      <div className="absolute top-4 right-4 z-20 flex items-center gap-2 bg-slate-950/85 backdrop-blur-xl border border-slate-700/60 p-1.5 rounded-xl shadow-2xl">
        <button
          onClick={() => setShowGlowingBadges(!showGlowingBadges)}
          className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 border ${
            showGlowingBadges
              ? 'bg-cyan-950/90 border-cyan-400 text-cyan-300 shadow-[0_0_15px_rgba(6,182,212,0.4)]'
              : 'bg-slate-900/80 border-slate-700/60 text-slate-400 hover:text-slate-200 hover:bg-slate-800'
          }`}
          title={lang === 'ar' ? 'تفعيل/إخفاء اللافتات المضيئة' : 'Toggle Glowing Map Badges'}
        >
          <Sparkles className={`w-3.5 h-3.5 ${showGlowingBadges ? 'text-cyan-400 animate-spin' : 'text-slate-400'}`} />
          <span>
            {showGlowingBadges
              ? (lang === 'ar' ? 'اللافتات المضيئة: مُمَكّنة' : 'Glowing Badges: ON')
              : (lang === 'ar' ? 'اللافتات المضيئة: اختياري' : 'Glowing Badges: Optional')}
          </span>
        </button>

        <div className="w-px h-5 bg-slate-800 mx-0.5" />

        <button
          onClick={() => setIsFullScreen(!isFullScreen)}
          className="p-2 rounded-lg text-slate-300 hover:text-white hover:bg-slate-800 transition-all flex items-center gap-1.5 text-xs font-bold"
          title={isFullScreen ? 'إنهاء الشاشة الكاملة' : 'ملء الشاشة'}
        >
          {isFullScreen ? <Minimize2 className="w-4 h-4 text-cyan-400" /> : <Maximize2 className="w-4 h-4 text-cyan-400" />}
          <span className="hidden sm:inline">{isFullScreen ? (lang === 'ar' ? 'تصغير' : 'Exit Full') : (lang === 'ar' ? 'ملء الشاشة' : 'Fullscreen')}</span>
        </button>
      </div>

      {/* 3. Hint Overlay Banner at Bottom Left */}
      <div className="absolute bottom-4 left-4 z-20 bg-slate-950/85 backdrop-blur-lg border border-slate-700/50 px-3.5 py-2 rounded-xl text-slate-300 text-xs flex items-center gap-2 shadow-xl pointer-events-none">
        <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
        <span>{lang === 'ar' ? 'انقر في أي مكان على الخريطة لتحديد الموقع ومقارنة أسعار الفنادق والمزودين' : 'Click anywhere on the map to inspect location & compare multi-OTA hotel deals'}</span>
      </div>

      {/* 4. MAIN MAP CANVAS (Google Maps or Leaflet Vector Fallback) */}
      <div className="w-full h-full relative">
        {hasValidKey ? (
          <APIProvider apiKey={API_KEY} version="weekly" libraries={['places', 'geometry']}>
            <Map
              defaultCenter={{ lat: 25.2048, lng: 55.2708 }}
              defaultZoom={4}
              mapId="DEMO_MAP_ID"
              internalUsageAttributionIds={['gmp_mcp_codeassist_v1_aistudio']}
              style={{ width: '100%', height: '100%' }}
              disableDefaultUI={true}
              zoomControl={true}
            >
              <GoogleMapController
                selectedCity={selectedCity}
                searchedLocation={searchedLocation}
                clickedLocation={clickedLocation}
                onMapClick={handleMapClick}
                mapType={mapType}
              />

              {/* Render City Markers on Google Map (Only when showGlowingBadges is true or city is selected) */}
              {cities.map((city) => {
                const isSelected = selectedCity?.id === city.id;
                // Only render floating badges if showGlowingBadges is turned ON by user or for selected city
                if (!showGlowingBadges && !isSelected) return null;

                const isGreen = city.zone === 'green';
                const isYellow = city.zone === 'yellow';
                const badgeColor = isGreen
                  ? 'bg-emerald-950/90 text-emerald-300 border-emerald-500/80 shadow-[0_0_12px_rgba(16,185,129,0.4)]'
                  : isYellow
                  ? 'bg-amber-950/90 text-amber-300 border-amber-500/80 shadow-[0_0_12px_rgba(245,158,11,0.4)]'
                  : 'bg-rose-950/90 text-rose-300 border-rose-500/80 shadow-[0_0_12px_rgba(244,63,94,0.4)]';

                const convertedP = convertPrice(city.avg_hotel_price, currency);

                return (
                  <AdvancedMarker
                    key={city.id}
                    position={{ lat: city.coordinates[0], lng: city.coordinates[1] }}
                    onClick={() => {
                      onSelectCity(city);
                      performReverseGeocode(city.coordinates[0], city.coordinates[1]);
                    }}
                  >
                    <div className={`cursor-pointer transform -translate-x-1/2 -translate-y-1/2 transition-all duration-300 hover:scale-110 ${isSelected ? 'scale-125 z-30' : 'scale-100 z-10'}`}>
                      <div className={`flex items-center gap-1.5 px-2.5 py-1 rounded-full border backdrop-blur-md text-[11px] font-bold ${badgeColor}`}>
                        <span className={`w-2 h-2 rounded-full ${isGreen ? 'bg-emerald-400' : isYellow ? 'bg-amber-400' : 'bg-rose-500'} animate-pulse`} />
                        <span>{lang === 'ar' ? city.name_ar : city.name_en}</span>
                        <span className="font-mono text-[10px] opacity-90">{convertedP}</span>
                      </div>
                    </div>
                  </AdvancedMarker>
                );
              })}

              {/* Render Animated Dropped Pin Marker at Clicked Location */}
              {clickedLocation && (
                <AdvancedMarker position={{ lat: clickedLocation.lat, lng: clickedLocation.lng }}>
                  <div className="relative flex items-center justify-center transform -translate-x-1/2 -translate-y-1/2">
                    <span className="animate-ping absolute inline-flex h-10 w-10 rounded-full bg-cyan-400 opacity-75" />
                    <div className="relative z-10 w-10 h-10 rounded-full bg-gradient-to-tr from-cyan-500 via-sky-400 to-indigo-600 border-2 border-white shadow-2xl flex items-center justify-center text-white scale-110">
                      <MapPin className="w-5 h-5 text-white animate-bounce" />
                    </div>
                  </div>
                </AdvancedMarker>
              )}
            </Map>
          </APIProvider>
        ) : (
          <div ref={leafletContainerRef} className="w-full h-full z-10" />
        )}
      </div>

      {/* 5. MULTI-OTA PRICE COMPARISON DRAWER SIDE PANEL */}
      <AnimatePresence>
        {isDrawerOpen && clickedLocation && (
          <motion.div
            initial={{ x: '100%', opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: '100%', opacity: 0 }}
            transition={{ type: 'spring', damping: 25, stiffness: 220 }}
            className="absolute top-0 right-0 bottom-0 z-30 w-full sm:w-[450px] bg-slate-900/95 backdrop-blur-2xl border-r sm:border-l border-slate-700/60 shadow-2xl flex flex-col text-slate-100 overflow-hidden"
            dir="rtl"
          >
            {/* Drawer Header */}
            <div className="p-5 border-b border-slate-800 bg-gradient-to-b from-slate-900 to-slate-950 flex items-start justify-between gap-3">
              <div className="space-y-1 flex-1">
                <div className="flex items-center gap-2">
                  <span className="px-2 py-0.5 rounded-full bg-cyan-500/20 text-cyan-300 text-[10px] font-bold border border-cyan-500/30">
                    محدد جغرافياً 📍
                  </span>
                  <button
                    onClick={copyCoordinates}
                    className="text-[10px] text-slate-400 hover:text-cyan-300 flex items-center gap-1 font-mono transition-colors"
                    title="نسخ الإحداثيات"
                  >
                    {copiedCoords ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                    {clickedLocation.lat.toFixed(4)}, {clickedLocation.lng.toFixed(4)}
                  </button>
                </div>

                <h2 className="text-xl font-bold text-white tracking-tight flex items-center gap-2">
                  {isGeocoding ? (
                    <span className="flex items-center gap-2 text-slate-400 text-sm">
                      <Sparkles className="w-4 h-4 animate-spin text-cyan-400" />
                      جاري فك الترميز الجغرافي للموقع...
                    </span>
                  ) : (
                    clickedLocation.city_name_ar || 'الموقع المحدد'
                  )}
                </h2>

                <p className="text-xs text-slate-400 flex items-center gap-1">
                  <Building2 className="w-3.5 h-3.5 text-slate-500" />
                  {clickedLocation.address_ar}
                </p>
              </div>

              <button
                onClick={() => setIsDrawerOpen(false)}
                className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white transition-all"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Ocean or Desert Alert Banner */}
            {clickedLocation.isWaterOrDesert && (
              <div className="mx-4 mt-3 p-3 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-200 text-xs flex items-start gap-2">
                <Info className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold">تنبيه الموقع البعيد / البحري</p>

                  <p className="text-[11px] text-amber-300/80 mt-0.5">
                    النقطة المحددة تقع في منطقة صحراوية أو مائية بعيدة. تم عرض أقرب مركز سياحي (
                    {clickedLocation.nearestCity?.name_ar} على بعد {clickedLocation.distanceToNearestKm} كم).
                  </p>
                </div>
              </div>
            )}

            {/* Tab Navigation */}
            <div className="flex items-center border-b border-slate-800 bg-slate-950/60 p-1 mx-4 mt-3 rounded-xl">
              <button
                onClick={() => setActiveTab('ota')}
                className={`flex-1 py-2 text-xs font-bold rounded-lg transition-all flex items-center justify-center gap-1.5 ${
                  activeTab === 'ota'
                    ? 'bg-gradient-to-r from-cyan-600 to-sky-600 text-white shadow-lg shadow-cyan-600/30'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                <DollarSign className="w-3.5 h-3.5" />
                مقارنة أسعار المنصات العالمية (5 OTAs)
              </button>

              <button
                onClick={() => setActiveTab('hotels')}
                className={`flex-1 py-2 text-xs font-bold rounded-lg transition-all flex items-center justify-center gap-1.5 ${
                  activeTab === 'hotels'
                    ? 'bg-gradient-to-r from-cyan-600 to-sky-600 text-white shadow-lg shadow-cyan-600/30'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                <Hotel className="w-3.5 h-3.5" />
                فنادق المربع الجغرافي ({calculatedRadiusHotels.length})
              </button>
            </div>

            {/* Tab Content */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 custom-scrollbar">
              {activeTab === 'ota' && (
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-xs text-slate-400 px-1">
                    <span>المنصة والعرض</span>
                    <span>سعر الليلة التقديري</span>
                  </div>

                  {calculatedOTARates.map((ota) => (
                    <div
                      key={ota.provider}
                      className={`p-3.5 rounded-xl border border-slate-800 bg-gradient-to-r ${ota.bgGradient} hover:border-slate-700 transition-all space-y-2.5 group`}
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <div
                            className="w-3 h-3 rounded-full"
                            style={{ backgroundColor: ota.logoColor }}
                          />
                          <span className="font-bold text-sm text-white">{ota.name_ar}</span>
                          <span className="text-[10px] px-2 py-0.5 rounded-md bg-slate-800/80 text-cyan-300 font-medium border border-slate-700">
                            {ota.badge_ar}
                          </span>
                        </div>

                        <div className="text-left">
                          <span className="text-lg font-black text-cyan-300">
                            {convertPrice(ota.pricePerNight, currency)}
                          </span>
                          <span className="text-[10px] text-slate-400 block">/ليلة</span>
                        </div>
                      </div>

                      <ul className="text-[11px] text-slate-300/80 space-y-1">
                        {ota.features_ar.map((feat, idx) => (
                          <li key={idx} className="flex items-center gap-1.5">
                            <ShieldCheck className="w-3 h-3 text-emerald-400 shrink-0" />
                            <span>{feat}</span>
                          </li>
                        ))}
                      </ul>

                      <a
                        href={ota.bookingUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full py-2 rounded-lg bg-slate-800/90 hover:bg-cyan-600 text-slate-200 hover:text-white font-semibold text-xs transition-all flex items-center justify-center gap-1.5 border border-slate-700 hover:border-cyan-500 shadow-md"
                      >
                        احجز عبر {ota.provider}
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  ))}
                </div>
              )}

              {activeTab === 'hotels' && (
                <div className="space-y-3">
                  {calculatedRadiusHotels.map((hotel) => (
                    <div
                      key={hotel.id}
                      className="p-3.5 rounded-xl border border-slate-800 bg-slate-900/80 hover:bg-slate-800/80 transition-all space-y-2"
                    >
                      <div className="flex items-start justify-between gap-2">
                        <div>
                          <h4 className="font-bold text-sm text-white">{hotel.name_ar}</h4>
                          <div className="flex items-center gap-1.5 text-xs text-amber-400 mt-0.5">
                            <div className="flex">
                              {Array.from({ length: hotel.stars }).map((_, i) => (
                                <Star key={i} className="w-3 h-3 fill-amber-400 text-amber-400" />
                              ))}
                            </div>
                            <span className="text-slate-400 text-[11px]">
                              ({hotel.rating} ممتازة · {hotel.reviewsCount} تقييم)
                            </span>
                          </div>
                        </div>

                        <div className="text-left shrink-0">
                          <span className="text-base font-bold text-emerald-400">
                            {convertPrice(hotel.pricePerNight, currency)}
                          </span>
                          <span className="text-[10px] text-slate-400 block">/ليلة</span>
                        </div>
                      </div>

                      <p className="text-[11px] text-slate-400 flex items-center gap-1">
                        <Navigation className="w-3 h-3 text-cyan-400" />
                        {hotel.district_ar}
                      </p>

                      <a
                        href={hotel.dealUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full py-2 rounded-lg bg-cyan-600 hover:bg-cyan-500 text-white font-semibold text-xs transition-all flex items-center justify-center gap-1.5 shadow-lg shadow-cyan-600/20"
                      >
                        عرض تفاصيل الفندق والحجز
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Quick Travelpayouts Direct Actions Footer */}
            <div className="p-4 border-t border-slate-800 bg-slate-950 flex items-center gap-2">
              <a
                href={`https://wayaway.io/flights?marker=YOUR_TP_MARKER`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-2 px-3 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700 text-slate-200 text-xs font-semibold flex items-center justify-center gap-1.5 transition-all"
              >
                <Plane className="w-3.5 h-3.5 text-sky-400" />
                تذاكر طيران
              </a>

              <a
                href={`https://getyourguide.com/?partner_id=YOUR_TP_MARKER`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-2 px-3 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700 text-slate-200 text-xs font-semibold flex items-center justify-center gap-1.5 transition-all"
              >
                <Ticket className="w-3.5 h-3.5 text-amber-400" />
                جولات ترفيهية
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
