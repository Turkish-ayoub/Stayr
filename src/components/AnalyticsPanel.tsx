import React from 'react';
import { DollarSign, Star, Globe2, Tag, Percent } from 'lucide-react';
import { CityData, TourismZone } from '../types';
import { Translation, LanguageCode } from '../translations';
import { convertPrice } from '../lib/affiliate';

interface AnalyticsPanelProps {
  cities: CityData[];
  currency?: string;
  t: Translation;
  lang: LanguageCode;
}

export const AnalyticsPanel: React.FC<AnalyticsPanelProps> = ({ cities, currency = 'USD', t, lang }) => {
  const totalCities = cities.length;

  const avgPrice = totalCities > 0
    ? Math.round(cities.reduce((acc, c) => acc + c.avg_hotel_price, 0) / totalCities)
    : 0;

  const avgQuality = totalCities > 0
    ? (cities.reduce((acc, c) => acc + c.quality_score, 0) / totalCities).toFixed(1)
    : "0.0";

  const totalDeals = cities.reduce((acc, c) => acc + c.hotel_deals_count, 0);

  // Distribution counts
  const greenCount = cities.filter(c => c.zone === 'green').length;
  const yellowCount = cities.filter(c => c.zone === 'yellow').length;
  const redCount = cities.filter(c => c.zone === 'red').length;

  const greenPct = totalCities > 0 ? Math.round((greenCount / totalCities) * 100) : 0;
  const yellowPct = totalCities > 0 ? Math.round((yellowCount / totalCities) * 100) : 0;
  const redPct = totalCities > 0 ? Math.round((redCount / totalCities) * 100) : 0;

  return (
    <div className="bg-[#0e1424] border-b border-slate-800/80 px-4 lg:px-8 py-3.5">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-4">
        
        {/* 4 KPI Cards Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 flex-1">
          
          {/* KPI 1: Avg Price */}
          <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800/90 flex items-center gap-3">
            <div className="p-2.5 rounded-lg bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
              <DollarSign className="w-5 h-5" />
            </div>
            <div>
              <p className="text-[11px] font-medium text-slate-400 uppercase tracking-wider">{t.avgNightlyRate}</p>
              <div className="flex items-baseline gap-1">
                <span className="text-base sm:text-lg font-bold text-slate-100">{convertPrice(avgPrice, currency)}</span>
                <span className="text-[10px] text-slate-400">/{t.night}</span>
              </div>
            </div>
          </div>

          {/* KPI 2: Quality Index */}
          <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800/90 flex items-center gap-3">
            <div className="p-2.5 rounded-lg bg-amber-500/10 text-amber-400 border border-amber-500/20">
              <Star className="w-5 h-5 fill-amber-400/20" />
            </div>
            <div>
              <p className="text-[11px] font-medium text-slate-400 uppercase tracking-wider">{t.qualityIndex}</p>
              <div className="flex items-baseline gap-1">
                <span className="text-base sm:text-lg font-bold text-slate-100">{avgQuality}</span>
                <span className="text-[10px] text-amber-400 font-semibold">/10</span>
              </div>
            </div>
          </div>

          {/* KPI 3: Indexed Cities */}
          <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800/90 flex items-center gap-3">
            <div className="p-2.5 rounded-lg bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
              <Globe2 className="w-5 h-5" />
            </div>
            <div>
              <p className="text-[11px] font-medium text-slate-400 uppercase tracking-wider">{t.totalCities}</p>
              <div className="flex items-baseline gap-1">
                <span className="text-base sm:text-lg font-bold text-slate-100">{totalCities}</span>
                <span className="text-[10px] text-slate-400">{lang === 'ar' ? 'مدينة' : 'cities'}</span>
              </div>
            </div>
          </div>

          {/* KPI 4: Active Deals */}
          <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800/90 flex items-center gap-3">
            <div className="p-2.5 rounded-lg bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
              <Tag className="w-5 h-5" />
            </div>
            <div>
              <p className="text-[11px] font-medium text-slate-400 uppercase tracking-wider">{t.activeDeals}</p>
              <div className="flex items-baseline gap-1">
                <span className="text-base sm:text-lg font-bold text-slate-100">{totalDeals.toLocaleString()}</span>
                <span className="text-[10px] text-slate-400">{lang === 'ar' ? 'عرض' : 'deals'}</span>
              </div>
            </div>
          </div>

        </div>

        {/* Zone Distribution Split Bar */}
        <div className="lg:w-[320px] p-3 rounded-xl bg-slate-900/80 border border-slate-800/90 flex flex-col justify-between gap-2">
          <div className="flex items-center justify-between text-xs font-semibold">
            <span className="text-slate-300 flex items-center gap-1.5">
              <Percent className="w-3.5 h-3.5 text-cyan-400" />
              {t.zoneRatio}
            </span>
            <span className="text-[11px] text-slate-400">{totalCities} {lang === 'ar' ? 'إجمالي' : 'Total'}</span>
          </div>

          {/* Progress Bar */}
          <div className="h-3 w-full bg-slate-950 rounded-full overflow-hidden flex p-0.5 border border-slate-800">
            <div
              style={{ width: `${greenPct}%` }}
              className="bg-emerald-500 h-full rounded-l-full transition-all duration-500 glow-green"
              title={`Budget Zone: ${greenPct}%`}
            />
            <div
              style={{ width: `${yellowPct}%` }}
              className="bg-amber-500 h-full transition-all duration-500 glow-yellow"
              title={`Mid-Tier Zone: ${yellowPct}%`}
            />
            <div
              style={{ width: `${redPct}%` }}
              className="bg-rose-500 h-full rounded-r-full transition-all duration-500 glow-red"
              title={`Ultra-Luxury Zone: ${redPct}%`}
            />
          </div>

          {/* Legend percents */}
          <div className="flex items-center justify-between text-[11px]">
            <span className="text-emerald-400 flex items-center gap-1 font-semibold">
              <span className="w-2 h-2 rounded-full bg-emerald-500 inline-block" />
              {greenPct}% {lang === 'ar' ? 'اقتصادي' : 'Budget'}
            </span>
            <span className="text-amber-400 flex items-center gap-1 font-semibold">
              <span className="w-2 h-2 rounded-full bg-amber-500 inline-block" />
              {yellowPct}% {lang === 'ar' ? 'متوسط' : 'Mid'}
            </span>
            <span className="text-rose-400 flex items-center gap-1 font-semibold">
              <span className="w-2 h-2 rounded-full bg-rose-500 inline-block" />
              {redPct}% {lang === 'ar' ? 'فاره' : 'Luxury'}
            </span>
          </div>
        </div>

      </div>
    </div>
  );
};
