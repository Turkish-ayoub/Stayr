import React from 'react';
import { PieChart, BarChart2, ShieldCheck, DollarSign, Globe, Award } from 'lucide-react';
import { CityData, Region, TourismZone } from '../types';
import { Translation, LanguageCode } from '../translations';

interface ZoneDistributionProps {
  cities: CityData[];
  t: Translation;
  lang: LanguageCode;
}

export const ZoneDistribution: React.FC<ZoneDistributionProps> = ({ cities, t, lang }) => {
  const total = cities.length;

  const greenCities = cities.filter(c => c.zone === 'green');
  const yellowCities = cities.filter(c => c.zone === 'yellow');
  const redCities = cities.filter(c => c.zone === 'red');

  const regionsList: Region[] = ['MENA', 'Europe', 'Asia', 'Americas', 'Africa'];

  const regionCounts = regionsList.map(r => ({
    region: r,
    count: cities.filter(c => c.region === r).length,
    avgPrice: cities.filter(c => c.region === r).length > 0
      ? Math.round(cities.filter(c => c.region === r).reduce((acc, c) => acc + c.avg_hotel_price, 0) / cities.filter(c => c.region === r).length)
      : 0
  }));

  return (
    <div className="space-y-6">
      
      {/* 3 Zone Cards Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        
        {/* Green Zone Card */}
        <div className="p-5 rounded-2xl bg-slate-900/90 border border-emerald-500/40 glow-green space-y-4">
          <div className="flex items-center justify-between">
            <span className="w-3 h-3 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-xs font-bold text-emerald-400 bg-emerald-950/80 px-2.5 py-1 rounded-full border border-emerald-500/30">
              {t.greenZoneLabel} (&lt; $80/night)
            </span>
          </div>

          <div>
            <div className="text-3xl font-black text-slate-100">{greenCities.length} <span className="text-sm font-medium text-slate-400">/ {total}</span></div>
            <p className="text-xs text-slate-400 mt-1">{lang === 'ar' ? 'مدن سياحية عالية الجودة بأقل من 80 دولار للفيلا أو الفندق' : 'Top rated destinations with average rates under $80/night'}</p>
          </div>

          <div className="space-y-2 pt-2 border-t border-slate-800">
            {greenCities.slice(0, 4).map(c => (
              <div key={c.id} className="flex items-center justify-between text-xs text-slate-300">
                <span>{lang === 'ar' ? c.name_ar : c.name_en} ({c.iata})</span>
                <span className="font-extrabold text-emerald-400">${c.avg_hotel_price}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Yellow Zone Card */}
        <div className="p-5 rounded-2xl bg-slate-900/90 border border-amber-500/40 glow-yellow space-y-4">
          <div className="flex items-center justify-between">
            <span className="w-3 h-3 rounded-full bg-amber-400 animate-pulse" />
            <span className="text-xs font-bold text-amber-400 bg-amber-950/80 px-2.5 py-1 rounded-full border border-amber-500/30">
              {t.yellowZoneLabel} ($80 - $250/night)
            </span>
          </div>

          <div>
            <div className="text-3xl font-black text-slate-100">{yellowCities.length} <span className="text-sm font-medium text-slate-400">/ {total}</span></div>
            <p className="text-xs text-slate-400 mt-1">{lang === 'ar' ? 'فنادق ومنتجعات ممتازة للأعمال والعائلات الفاخرة' : 'Premier hotel hubs balancing luxury, business & location'}</p>
          </div>

          <div className="space-y-2 pt-2 border-t border-slate-800">
            {yellowCities.slice(0, 4).map(c => (
              <div key={c.id} className="flex items-center justify-between text-xs text-slate-300">
                <span>{lang === 'ar' ? c.name_ar : c.name_en} ({c.iata})</span>
                <span className="font-extrabold text-amber-400">${c.avg_hotel_price}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Red Zone Card */}
        <div className="p-5 rounded-2xl bg-slate-900/90 border border-rose-500/40 glow-red space-y-4">
          <div className="flex items-center justify-between">
            <span className="w-3 h-3 rounded-full bg-rose-500 animate-pulse" />
            <span className="text-xs font-bold text-rose-400 bg-rose-950/80 px-2.5 py-1 rounded-full border border-rose-500/30">
              {t.redZoneLabel} (&gt; $250/night)
            </span>
          </div>

          <div>
            <div className="text-3xl font-black text-slate-100">{redCities.length} <span className="text-sm font-medium text-slate-400">/ {total}</span></div>
            <p className="text-xs text-slate-400 mt-1">{lang === 'ar' ? 'أفخم وجهات العالم، أجنحة الرؤساء وفنادق الـ 5 نجوم' : 'Ultra-exclusive 5-star resorts, water villas & luxury suites'}</p>
          </div>

          <div className="space-y-2 pt-2 border-t border-slate-800">
            {redCities.slice(0, 4).map(c => (
              <div key={c.id} className="flex items-center justify-between text-xs text-slate-300">
                <span>{lang === 'ar' ? c.name_ar : c.name_en} ({c.iata})</span>
                <span className="font-extrabold text-rose-400">${c.avg_hotel_price}</span>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* Regional Breakdown List */}
      <div className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-4 shadow-xl">
        <h3 className="text-base font-bold text-slate-100 flex items-center gap-2">
          <Globe className="w-5 h-5 text-cyan-400" />
          <span>{lang === 'ar' ? 'التوزيع والتكلفة المتوسطة حسب الإقليم الجغرافي' : 'Regional Distribution & Avg Rate Matrix'}</span>
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {regionCounts.map((rc) => {
            const regPct = total > 0 ? Math.round((rc.count / total) * 100) : 0;
            return (
              <div key={rc.region} className="p-4 rounded-xl bg-slate-950 border border-slate-800/80 flex flex-col justify-between space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-cyan-300">{rc.region}</span>
                  <span className="text-[10px] text-slate-400 font-mono">{regPct}%</span>
                </div>

                <div className="text-xl font-extrabold text-slate-100">
                  {rc.count} <span className="text-xs text-slate-400 font-normal">{lang === 'ar' ? 'مدن' : 'cities'}</span>
                </div>

                <div className="text-xs text-slate-400 flex items-center justify-between pt-2 border-t border-slate-900">
                  <span>{lang === 'ar' ? 'المتوسط:' : 'Avg Rate:'}</span>
                  <span className="font-bold text-amber-400">${rc.avgPrice}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

    </div>
  );
};
