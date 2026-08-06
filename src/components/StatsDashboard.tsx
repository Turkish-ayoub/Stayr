import React from 'react';
import { BarChart3, TrendingUp, Sparkles, Award, Hotel, Plane, Shield } from 'lucide-react';
import { CityData } from '../types';
import { Translation, LanguageCode } from '../translations';

interface StatsDashboardProps {
  cities: CityData[];
  t: Translation;
  lang: LanguageCode;
}

export const StatsDashboard: React.FC<StatsDashboardProps> = ({ cities, t, lang }) => {
  // Sort top 5 highest quality
  const topQualityCities = [...cities].sort((a, b) => b.quality_score - a.quality_score).slice(0, 5);

  // Sort top 5 best value (green zone highest quality)
  const bestValueCities = [...cities].filter(c => c.zone === 'green').sort((a, b) => b.quality_score - a.quality_score).slice(0, 5);

  // Sort top 5 luxury hubs
  const luxuryHubs = [...cities].filter(c => c.zone === 'red').sort((a, b) => b.avg_hotel_price - a.avg_hotel_price).slice(0, 5);

  return (
    <div className="space-y-6">
      
      {/* Top 3 Intelligence Banners */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        
        {/* Banner 1: Top Rated Hubs */}
        <div className="p-5 rounded-2xl bg-slate-900/90 border border-slate-800 space-y-3 shadow-xl">
          <div className="flex items-center gap-2 text-amber-400 font-bold text-sm">
            <Award className="w-5 h-5 text-amber-400" />
            <span>{lang === 'ar' ? 'أعلى المدن تقييماً من حيث الجودة' : 'Top Quality Index Destinations'}</span>
          </div>
          <div className="space-y-2 pt-2">
            {topQualityCities.map((c, i) => (
              <div key={c.id} className="flex items-center justify-between p-2 rounded-lg bg-slate-950 border border-slate-800/80 text-xs">
                <span className="text-slate-200 font-bold">#{i + 1} {lang === 'ar' ? c.name_ar : c.name_en} ({c.iata})</span>
                <span className="text-amber-400 font-extrabold flex items-center gap-1">
                  ⭐ {c.quality_score}/10
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Banner 2: Best Value (Green Zone Leaders) */}
        <div className="p-5 rounded-2xl bg-slate-900/90 border border-slate-800 space-y-3 shadow-xl">
          <div className="flex items-center gap-2 text-emerald-400 font-bold text-sm">
            <TrendingUp className="w-5 h-5 text-emerald-400" />
            <span>{lang === 'ar' ? 'أفضل صفقات الميزانية الاقتصادية (Green)' : 'Top Value Leaders (< $80)'}</span>
          </div>
          <div className="space-y-2 pt-2">
            {bestValueCities.map((c, i) => (
              <div key={c.id} className="flex items-center justify-between p-2 rounded-lg bg-slate-950 border border-slate-800/80 text-xs">
                <span className="text-slate-200 font-bold">#{i + 1} {lang === 'ar' ? c.name_ar : c.name_en}</span>
                <span className="text-emerald-400 font-extrabold">${c.avg_hotel_price}/{t.night}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Banner 3: Ultra Luxury Leaders */}
        <div className="p-5 rounded-2xl bg-slate-900/90 border border-slate-800 space-y-3 shadow-xl">
          <div className="flex items-center gap-2 text-rose-400 font-bold text-sm">
            <Sparkles className="w-5 h-5 text-rose-400" />
            <span>{lang === 'ar' ? 'أغلى الوجهات الفندقية الحصرية (Red)' : 'Ultra Luxury Destinations (> $250)'}</span>
          </div>
          <div className="space-y-2 pt-2">
            {luxuryHubs.map((c, i) => (
              <div key={c.id} className="flex items-center justify-between p-2 rounded-lg bg-slate-950 border border-slate-800/80 text-xs">
                <span className="text-slate-200 font-bold">#{i + 1} {lang === 'ar' ? c.name_ar : c.name_en}</span>
                <span className="text-rose-400 font-extrabold">${c.avg_hotel_price}/{t.night}</span>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* Bar Chart Representation for Hotel Prices */}
      <div className="p-6 rounded-2xl bg-slate-900/90 border border-slate-800 space-y-4 shadow-2xl">
        <div className="flex items-center justify-between">
          <h3 className="text-base font-bold text-slate-100 flex items-center gap-2">
            <BarChart3 className="w-5 h-5 text-cyan-400" />
            <span>{lang === 'ar' ? 'مقارنة أسعار الليلة الفندقية للمدن المفهرسة ($)' : 'Average Nightly Hotel Rates Comparison ($)'}</span>
          </h3>
          <span className="text-xs text-slate-400 font-mono">{cities.length} {lang === 'ar' ? 'مدن' : 'cities'}</span>
        </div>

        <div className="space-y-3 pt-2">
          {cities.map((city) => {
            const maxPrice = 600;
            const barWidth = Math.min(100, Math.max(8, (city.avg_hotel_price / maxPrice) * 100));

            const barColor = city.zone === 'green'
              ? 'bg-gradient-to-r from-emerald-600 to-emerald-400'
              : city.zone === 'yellow'
              ? 'bg-gradient-to-r from-amber-600 to-amber-400'
              : 'bg-gradient-to-r from-rose-600 to-rose-400';

            return (
              <div key={city.id} className="space-y-1">
                <div className="flex items-center justify-between text-xs font-semibold">
                  <span className="text-slate-200">{lang === 'ar' ? city.name_ar : city.name_en} ({city.iata})</span>
                  <span className="font-mono text-cyan-300">${city.avg_hotel_price}</span>
                </div>
                <div className="h-2.5 w-full bg-slate-950 rounded-full overflow-hidden p-0.5 border border-slate-800">
                  <div
                    style={{ width: `${barWidth}%` }}
                    className={`h-full rounded-full transition-all duration-700 ${barColor}`}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>

    </div>
  );
};
