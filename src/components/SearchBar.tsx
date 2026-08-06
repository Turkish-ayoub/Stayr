import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Search, X, MapPin, Plane, Building2, Sparkles, Navigation } from 'lucide-react';
import { CityData } from '../types';
import { CITIES_DATA } from '../data/citiesData';
import { Translation, LanguageCode } from '../translations';

export interface SearchLocationResult {
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

interface SearchBarProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  onPlaceSelected?: (result: SearchLocationResult) => void;
  t: Translation;
  lang: LanguageCode;
}

interface SuggestionItem {
  id: string;
  primaryText: string;
  secondaryText: string;
  iata?: string;
  flag: string;
  type: 'dataset' | 'google';
  cityData?: CityData;
  placeId?: string;
  description?: string;
}

function getCountryFlagEmoji(country: string): string {
  if (!country) return '🌐';
  const c = country.toLowerCase().trim();
  if (c.includes('tunis') || c.includes('تونس') || c === 'tn') return '🇹🇳';
  if (c.includes('saudi') || c.includes('السعودية') || c === 'sa') return '🇸🇦';
  if (c.includes('emirates') || c.includes('الإمارات') || c.includes('dubai') || c === 'ae') return '🇦🇪';
  if (c.includes('japan') || c.includes('اليابان') || c === 'jp') return '🇯🇵';
  if (c.includes('france') || c.includes('فرنسا') || c === 'fr') return '🇫🇷';
  if (c.includes('egypt') || c.includes('مصر') || c === 'eg') return '🇪🇬';
  if (c.includes('turkey') || c.includes('تركيا') || c === 'tr') return '🇹🇷';
  if (c.includes('qatar') || c.includes('قطر') || c === 'qa') return '🇶🇦';
  if (c.includes('morocco') || c.includes('المغرب') || c === 'ma') return '🇲🇦';
  if (c.includes('united states') || c.includes('أمريكا') || c === 'us') return '🇺🇸';
  if (c.includes('united kingdom') || c.includes('بريطانيا') || c === 'gb') return '🇬🇧';
  if (c.includes('spain') || c.includes('إسبانيا') || c === 'es') return '🇪🇸';
  if (c.includes('italy') || c.includes('إيطاليا') || c === 'it') return '🇮🇹';
  if (c.includes('germany') || c.includes('ألمانيا') || c === 'de') return '🇩🇪';
  if (c.includes('china') || c.includes('الصين') || c === 'cn') return '🇨🇳';
  if (c.includes('thailand') || c.includes('تايلاند') || c === 'th') return '🇹🇭';
  if (c.includes('indonesia') || c.includes('إندونيسيا') || c === 'id') return '🇮🇩';
  if (c.includes('malaysia') || c.includes('ماليزيا') || c === 'my') return '🇲🇾';
  if (c.includes('switzerland') || c.includes('سويسرا') || c === 'ch') return '🇨🇭';
  if (c.includes('greece') || c.includes('اليونان') || c === 'gr') return '🇬🇷';
  if (c.includes('singapore') || c.includes('سنغافورة') || c === 'sg') return '🇸🇬';
  if (c.includes('brazil') || c.includes('البرازيل') || c === 'br') return '🇧🇷';
  if (c.includes('russia') || c.includes('روسيا') || c === 'ru') return '🇷🇺';
  if (c.includes('australia') || c.includes('أستراليا') || c === 'au') return '🇦🇺';
  return '📍';
}

export const SearchBar: React.FC<SearchBarProps> = ({
  searchQuery,
  setSearchQuery,
  onPlaceSelected,
  t,
  lang,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [suggestions, setSuggestions] = useState<SuggestionItem[]>([]);
  const [selectedIndex, setSelectedIndex] = useState<number>(-1);
  const [isLoading, setIsLoading] = useState(false);

  const containerRef = useRef<HTMLDivElement>(null);
  const autocompleteServiceRef = useRef<google.maps.places.AutocompleteService | null>(null);
  const geocoderRef = useRef<google.maps.Geocoder | null>(null);

  // Initialize Google Places Autocomplete Service if available
  useEffect(() => {
    if (window.google && window.google.maps && window.google.maps.places) {
      if (!autocompleteServiceRef.current) {
        autocompleteServiceRef.current = new window.google.maps.places.AutocompleteService();
      }
      if (!geocoderRef.current) {
        geocoderRef.current = new window.google.maps.Geocoder();
      }
    }
  }, []);

  // Close dropdown on click outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Generate suggestions based on input
  useEffect(() => {
    const q = searchQuery.trim().toLowerCase();
    if (!q) {
      setSuggestions([]);
      setIsOpen(false);
      return;
    }

    setIsLoading(true);

    // 1. Search in local indexed dataset CITIES_DATA
    const matchedDataset: SuggestionItem[] = CITIES_DATA.filter((city) => {
      return (
        city.name_ar.toLowerCase().includes(q) ||
        city.name_en.toLowerCase().includes(q) ||
        city.iata.toLowerCase().includes(q) ||
        city.country_ar.toLowerCase().includes(q) ||
        city.country_en.toLowerCase().includes(q)
      );
    }).map((city) => ({
      id: `dataset-${city.id}`,
      primaryText: lang === 'ar' ? city.name_ar : city.name_en,
      secondaryText: lang === 'ar' ? `${city.country_ar} • ${city.avg_hotel_price}$/ليلة` : `${city.country_en} • $${city.avg_hotel_price}/night`,
      iata: city.iata,
      flag: getCountryFlagEmoji(city.country_en || city.country_ar),
      type: 'dataset',
      cityData: city,
    }));

    // 2. Query Google Places Autocomplete if service is loaded
    if (window.google && window.google.maps && window.google.maps.places) {
      if (!autocompleteServiceRef.current) {
        autocompleteServiceRef.current = new window.google.maps.places.AutocompleteService();
      }

      autocompleteServiceRef.current.getPlacePredictions(
        {
          input: searchQuery,
          types: ['(cities)'],
        },
        (predictions, status) => {
          setIsLoading(false);
          let googleItems: SuggestionItem[] = [];

          if (status === google.maps.places.PlacesServiceStatus.OK && predictions) {
            googleItems = predictions.map((pred) => ({
              id: `google-${pred.place_id}`,
              primaryText: pred.structured_formatting?.main_text || pred.description,
              secondaryText: pred.structured_formatting?.secondary_text || '',
              flag: getCountryFlagEmoji(pred.structured_formatting?.secondary_text || pred.description),
              type: 'google',
              placeId: pred.place_id,
              description: pred.description,
            }));
          }

          // Combine dataset & google predictions (deduplicate dataset by primaryText)
          const combined = [...matchedDataset];
          for (const gItem of googleItems) {
            if (!combined.some((d) => d.primaryText.toLowerCase() === gItem.primaryText.toLowerCase())) {
              combined.push(gItem);
            }
          }

          setSuggestions(combined.slice(0, 8));
          setIsOpen(combined.length > 0);
          setSelectedIndex(-1);
        }
      );
    } else {
      setIsLoading(false);
      setSuggestions(matchedDataset.slice(0, 8));
      setIsOpen(matchedDataset.length > 0);
      setSelectedIndex(-1);
    }
  }, [searchQuery, lang]);

  // Handle selection of a suggestion item
  const handleSelectSuggestion = useCallback(
    async (item: SuggestionItem) => {
      setIsOpen(false);
      setSearchQuery(item.primaryText);

      if (item.type === 'dataset' && item.cityData) {
        if (onPlaceSelected) {
          onPlaceSelected({
            lat: item.cityData.coordinates[0],
            lng: item.cityData.coordinates[1],
            cityNameAr: item.cityData.name_ar,
            cityNameEn: item.cityData.name_en,
            countryAr: item.cityData.country_ar,
            countryEn: item.cityData.country_en,
            iata: item.cityData.iata,
            cityData: item.cityData,
          });
        }
        return;
      }

      // If Google Places item, resolve place details via Geocoder
      if (item.placeId) {
        if (!geocoderRef.current && window.google?.maps?.Geocoder) {
          geocoderRef.current = new window.google.maps.Geocoder();
        }

        if (geocoderRef.current) {
          try {
            const results = await new Promise<google.maps.GeocoderResult[]>((resolve, reject) => {
              geocoderRef.current!.geocode({ placeId: item.placeId }, (res, status) => {
                if (status === 'OK' && res && res.length > 0) resolve(res);
                else reject(status);
              });
            });

            if (results && results[0]) {
              const best = results[0];
              const lat = best.geometry.location.lat();
              const lng = best.geometry.location.lng();

              let cityNameAr = item.primaryText;
              let cityNameEn = item.primaryText;
              let countryAr = '';
              let countryEn = '';
              let stateAr = '';

              for (const comp of best.address_components) {
                if (comp.types.includes('locality') || comp.types.includes('postal_town')) {
                  cityNameAr = comp.long_name;
                  cityNameEn = comp.long_name;
                } else if (comp.types.includes('administrative_area_level_1')) {
                  stateAr = comp.long_name;
                } else if (comp.types.includes('country')) {
                  countryAr = comp.long_name;
                  countryEn = comp.long_name;
                }
              }

              // Check if matching indexed city exists in dataset
              const matchedCity = CITIES_DATA.find(
                (c) =>
                  c.name_en.toLowerCase() === cityNameEn.toLowerCase() ||
                  c.name_ar.toLowerCase() === cityNameAr.toLowerCase()
              );

              if (onPlaceSelected) {
                onPlaceSelected({
                  lat,
                  lng,
                  cityNameAr,
                  cityNameEn,
                  countryAr,
                  countryEn,
                  stateAr,
                  cityData: matchedCity,
                });
              }
            }
          } catch (err) {
            console.warn('Geocoding place error:', err);
          }
        }
      }
    },
    [onPlaceSelected, setSearchQuery]
  );

  // Keyboard navigation
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (!isOpen || suggestions.length === 0) {
      if (e.key === 'Enter' && suggestions.length > 0) {
        handleSelectSuggestion(suggestions[0]);
      }
      return;
    }

    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setSelectedIndex((prev) => (prev < suggestions.length - 1 ? prev + 1 : 0));
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setSelectedIndex((prev) => (prev > 0 ? prev - 1 : suggestions.length - 1));
    } else if (e.key === 'Enter') {
      e.preventDefault();
      const target = selectedIndex >= 0 ? suggestions[selectedIndex] : suggestions[0];
      if (target) {
        handleSelectSuggestion(target);
      }
    } else if (e.key === 'Escape') {
      setIsOpen(false);
    }
  };

  const handleClear = () => {
    setSearchQuery('');
    setSuggestions([]);
    setIsOpen(false);
  };

  return (
    <div ref={containerRef} className="relative flex-1 min-w-[280px]">
      <div className="relative flex items-center">
        <div className="absolute inset-y-0 right-3.5 rtl:right-3.5 ltr:right-auto ltr:left-3.5 flex items-center pointer-events-none text-slate-400 z-10">
          <Search className="w-4 h-4 text-cyan-400" />
        </div>

        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          onFocus={() => {
            if (suggestions.length > 0) setIsOpen(true);
          }}
          onKeyDown={handleKeyDown}
          placeholder={t.searchPlaceholder}
          className="w-full bg-slate-900/95 text-slate-100 text-xs sm:text-sm rounded-xl pr-10 rtl:pr-10 ltr:pr-10 ltr:pl-10 py-2.5 border border-slate-700/80 focus:border-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/30 transition-all placeholder:text-slate-500 shadow-inner"
        />

        {isLoading && (
          <div className="absolute inset-y-0 left-9 rtl:left-9 ltr:left-auto ltr:right-9 flex items-center text-cyan-400">
            <Sparkles className="w-3.5 h-3.5 animate-spin" />
          </div>
        )}

        {searchQuery && (
          <button
            type="button"
            onClick={handleClear}
            className="absolute inset-y-0 left-3 rtl:left-3 ltr:left-auto ltr:right-3 flex items-center text-slate-400 hover:text-white transition-colors p-1"
            title={t.close || 'Clear'}
          >
            <X className="w-4 h-4" />
          </button>
        )}
      </div>

      {/* Glassmorphic Real-Time Suggestions Dropdown */}
      {isOpen && suggestions.length > 0 && (
        <div className="absolute top-full right-0 left-0 mt-2 z-50 bg-slate-900/95 backdrop-blur-2xl border border-slate-700/80 rounded-2xl shadow-2xl overflow-hidden divide-y divide-slate-800/80">
          <div className="p-2 bg-slate-950/80 text-[10px] font-bold text-slate-400 flex items-center justify-between px-3">
            <span className="flex items-center gap-1">
              <Navigation className="w-3 h-3 text-cyan-400" />
              {lang === 'ar' ? 'اقتراحات البحث المباشر' : 'Live Suggestions'}
            </span>
            <span className="text-slate-500 font-mono text-[9px]">Google Places & Stayr Index</span>
          </div>

          <ul className="max-h-72 overflow-y-auto py-1">
            {suggestions.map((item, index) => {
              const isSelected = index === selectedIndex;
              return (
                <li key={item.id}>
                  <button
                    type="button"
                    onClick={() => handleSelectSuggestion(item)}
                    onMouseEnter={() => setSelectedIndex(index)}
                    className={`w-full text-right rtl:text-right ltr:text-left px-3.5 py-2.5 flex items-center justify-between gap-3 transition-colors ${
                      isSelected ? 'bg-cyan-950/60 text-white' : 'hover:bg-slate-800/60 text-slate-200'
                    }`}
                  >
                    <div className="flex items-center gap-2.5 min-w-0">
                      <span className="text-base shrink-0">{item.flag}</span>
                      <div className="truncate">
                        <div className="text-xs font-semibold text-slate-100 flex items-center gap-1.5 truncate">
                          <span>{item.primaryText}</span>
                          {item.iata && (
                            <span className="px-1.5 py-0.2 rounded bg-cyan-500/20 text-cyan-300 text-[10px] font-mono font-bold shrink-0">
                              {item.iata}
                            </span>
                          )}
                        </div>
                        <p className="text-[11px] text-slate-400 truncate">{item.secondaryText}</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-1.5 shrink-0">
                      {item.type === 'dataset' ? (
                        <span className="px-2 py-0.5 rounded-full bg-emerald-500/15 text-emerald-300 border border-emerald-500/30 text-[10px] font-medium flex items-center gap-1">
                          <Building2 className="w-2.5 h-2.5" />
                          {lang === 'ar' ? 'وجهة متاحة' : 'Indexed'}
                        </span>
                      ) : (
                        <span className="px-2 py-0.5 rounded-full bg-sky-500/15 text-sky-300 border border-sky-500/30 text-[10px] font-medium flex items-center gap-1">
                          <MapPin className="w-2.5 h-2.5" />
                          Google Place
                        </span>
                      )}
                    </div>
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
};
