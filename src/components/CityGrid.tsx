import React from 'react';
import { Star, MapPin, Plane, Building2, ExternalLink, Sparkles, Tag } from 'lucide-react';
import { CityData } from '../types';
import { Translation, LanguageCode } from '../translations';
import { convertPrice } from '../lib/affiliate';
import { calculateDynamicScore } from '../lib/ratingEngine';

interface CityGridProps {
  cities: CityData[];
  onSelectCity: (city: CityData) => void;
  currency?: string;
  t: Translation;
  lang: LanguageCode;
}

export const CityGrid: React.FC<CityGridProps> = ({ cities, onSelectCity, currency = 'USD', t, lang }) => {
  if (cities.length === 0) {
    return (
      <div className="p-12 text-center text-slate-400 bg-slate-900/50 rounded-2xl border border-slate-800">
        <p className="text-base">{lang === 'ar' ? 'لم يتم العثور على مدن تطابق شروط البحث.' : 'No cities found matching search criteria.'}</p>
      </div>
    );
  }

  // Calculate average city price for dynamic scoring reference
  const avgSystemPrice = Math.round(cities.reduce((acc, c) => acc + c.avg_hotel_price, 0) / cities.length);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
      {cities.map((city) => {
        const dynamicRating = calculateDynamicScore(
          city.avg_hotel_price,
          avgSystemPrice,
          city.hotel_deals_count * 12,
          city.zone === 'green' ? 'standard' : 'peak',
          Math.min(Math.max(Math.round(city.quality_score / 2), 3), 5)
        );

        const zoneBadgeBg = city.zone === 'green'
          ? 'bg-emerald-950/90 text-emerald-300 border-emerald-500/50'
          : city.zone === 'yellow'
          ? 'bg-amber-950/90 text-amber-300 border-amber-500/50'
          : 'bg-rose-950/90 text-rose-300 border-rose-500/50';

        const zoneGlow = city.zone === 'green' ? 'glow-green' : city.zone === 'yellow' ? 'glow-yellow' : 'glow-red';

        return (
          <div
            key={city.id}
            onClick={() => onSelectCity(city)}
            className="group relative bg-slate-900/80 hover:bg-slate-800/90 rounded-2xl border border-slate-800/90 hover:border-cyan-500/40 p-4 transition-all duration-300 cursor-pointer shadow-xl flex flex-col justify-between"
          >
            {/* Top Bar: Zone Tag & IATA Badge */}
            <div className="flex items-center justify-between gap-2 mb-3">
              <span className={`px-2.5 py-1 text-[11px] font-bold rounded-lg border ${zoneBadgeBg} ${zoneGlow}`}>
                {city.zone === 'green' ? t.greenZoneLabel : city.zone === 'yellow' ? t.yellowZoneLabel : t.redZoneLabel}
              </span>
              <div className="flex items-center gap-1.5 px-2 py-0.5 rounded-md bg-slate-950 text-slate-300 text-xs font-mono border border-slate-800">
                <Plane className="w-3 h-3 text-cyan-400" />
                <span>{city.iata}</span>
              </div>
            </div>

            {/* City Title & Country */}
            <div className="mb-3">
              <div className="flex items-baseline justify-between gap-2">
                <h3 className="text-lg font-bold text-slate-100 group-hover:text-cyan-300 transition-colors">
                  {lang === 'ar' ? city.name_ar : city.name_en}
                </h3>
                <span className="text-xs text-slate-400 font-mono">({city.name_en})</span>
              </div>
              <p className="text-xs text-slate-400 flex items-center gap-1 mt-0.5">
                <MapPin className="w-3.5 h-3.5 text-slate-500" />
                <span>{lang === 'ar' ? city.country_ar : city.country_en}</span>
              </p>
            </div>

            {/* Description */}
            <p className="text-xs text-slate-300/90 line-clamp-2 mb-4 leading-relaxed">
              {lang === 'ar' ? city.description_ar : city.description_en}
            </p>

            {/* Metrics Footer */}
            <div className="pt-3 border-t border-slate-800/80 space-y-2">
              <div className="flex items-center justify-between text-xs">
                <span className="text-slate-400">{t.avgNightlyRate}:</span>
                <span className="text-sm font-extrabold text-cyan-300">
                  {convertPrice(city.avg_hotel_price, currency)} <span className="text-[10px] text-slate-500 font-normal">/{t.night}</span>
                </span>
              </div>

              {/* Dynamic Value Rating */}
              <div className="flex items-center justify-between text-xs">
                <span className="text-slate-400">{t.qualityIndex}:</span>
                <div className="flex items-center gap-1.5">
                  <span className={`px-1.5 py-0.5 rounded text-[10px] font-bold border ${dynamicRating.badgeStyle}`}>
                    {lang === 'ar' ? dynamicRating.badge_ar : dynamicRating.badge_en}
                  </span>
                  <span className="flex items-center gap-1 text-amber-400 font-black">
                    <Star className="w-3.5 h-3.5 fill-amber-400" />
                    <span>{dynamicRating.score.toFixed(1)}</span>
                  </span>
                </div>
              </div>

              <div className="flex items-center justify-between text-xs pt-1">
                <span className="text-emerald-400 font-medium flex items-center gap-1">
                  <Tag className="w-3 h-3" />
                  {city.hotel_deals_count} {t.dealsCount}
                </span>
                <span className="text-cyan-400 text-xs font-semibold group-hover:translate-x-1 rtl:group-hover:-translate-x-1 transition-transform flex items-center gap-1">
                  {lang === 'ar' ? 'عرض الصفقة' : 'View Deals'}
                  <ExternalLink className="w-3 h-3" />
                </span>
              </div>
            </div>

          </div>
        );
      })}
    </div>
  );
};
