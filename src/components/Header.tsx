import React from 'react';
import { Compass, Bot, Sparkles } from 'lucide-react';
import { TourismZone } from '../types';
import { Translation, LanguageCode } from '../translations';
import { LanguageSelector } from './LanguageSelector';

interface HeaderProps {
  lang: LanguageCode;
  setLang: (lang: LanguageCode) => void;
  currency: string;
  setCurrency: (currency: string) => void;
  t: Translation;
  zoneCounts: Record<TourismZone, number>;
  activeZoneFilter: TourismZone | 'all';
  setActiveZoneFilter: (zone: TourismZone | 'all') => void;
  onOpenAiAdvisor: () => void;
  currentNav?: string;
  onNavSelect?: (nav: string) => void;
}

export const Header: React.FC<HeaderProps> = ({
  lang,
  setLang,
  currency,
  setCurrency,
  t,
  zoneCounts,
  activeZoneFilter,
  setActiveZoneFilter,
  onOpenAiAdvisor,
  currentNav = 'map',
  onNavSelect
}) => {
  return (
    <header className="sticky top-0 z-30 bg-[#090d16]/95 backdrop-blur-xl border-b border-slate-800/80 px-4 lg:px-8 py-2.5 shadow-2xl">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-3">
        
        {/* Brand & Logo */}
        <div className="flex items-center gap-3 w-full md:w-auto justify-between md:justify-start">
          <div className="flex items-center gap-3">
            {/* Stayr Custom Glowing Logo Badge */}
            <div
              onClick={() => onNavSelect && onNavSelect('home')}
              className="relative group flex items-center gap-2.5 cursor-pointer select-none"
            >
              <div className="relative flex items-center justify-center w-10 h-10 rounded-2xl bg-gradient-to-br from-slate-900 via-cyan-950 to-slate-950 border border-cyan-400/40 shadow-[0_0_20px_rgba(6,182,212,0.35)] group-hover:shadow-[0_0_28px_rgba(6,182,212,0.6)] group-hover:border-cyan-400 transition-all duration-300">
                <svg className="w-6 h-6 text-cyan-300 drop-shadow-[0_0_8px_rgba(6,182,212,0.8)]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" />
                  <circle cx="12" cy="10" r="3" fill="currentColor" className="text-cyan-400" />
                </svg>
                <div className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-emerald-400 rounded-full animate-ping shadow-[0_0_8px_#34d399]" />
                <div className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-emerald-400 rounded-full border border-slate-950" />
              </div>

              <div className="flex flex-col">
                <div className="flex items-center gap-2">
                  <span className="text-2xl lg:text-3xl font-black tracking-tight text-white drop-shadow-[0_0_16px_rgba(6,182,212,0.5)] font-['Plus_Jakarta_Sans',sans-serif]">
                    Stayr
                  </span>
                  <span className="px-2 py-0.5 text-[9px] font-extrabold tracking-wider uppercase rounded-md bg-cyan-950/90 text-cyan-300 border border-cyan-500/40 shadow-[0_0_12px_rgba(6,182,212,0.3)]">
                    v2.0 Meta-Search
                  </span>
                </div>
                <p className="text-[11px] text-slate-400 font-medium hidden sm:block -mt-0.5">
                  {t.subtitle}
                </p>
              </div>
            </div>
          </div>

          {/* Top Navigation Links (Desktop/Tablet) */}
          <nav className="hidden lg:flex items-center gap-1 bg-slate-950/90 p-1 rounded-xl border border-slate-800 text-xs shadow-inner ml-4 rtl:ml-0 rtl:mr-4">
            <button
              onClick={() => onNavSelect && onNavSelect('home')}
              className={`px-3 py-1.5 rounded-lg font-bold transition-all ${
                currentNav === 'home'
                  ? 'bg-gradient-to-r from-cyan-600 to-indigo-600 text-white shadow-[0_0_12px_rgba(8,145,178,0.5)]'
                  : 'text-slate-400 hover:text-slate-200 hover:bg-slate-900'
              }`}
            >
              {lang === 'ar' ? 'الرئيسية' : 'Home'}
            </button>
            <button
              onClick={() => onNavSelect && onNavSelect('map')}
              className={`px-3 py-1.5 rounded-lg font-bold transition-all ${
                currentNav === 'map'
                  ? 'bg-gradient-to-r from-cyan-600 to-indigo-600 text-white shadow-[0_0_12px_rgba(8,145,178,0.5)]'
                  : 'text-slate-400 hover:text-slate-200 hover:bg-slate-900'
              }`}
            >
              {lang === 'ar' ? 'الخريطة التفاعلية' : 'Map View'}
            </button>
            <button
              onClick={() => onNavSelect && onNavSelect('trips')}
              className={`px-3 py-1.5 rounded-lg font-bold transition-all ${
                currentNav === 'trips'
                  ? 'bg-gradient-to-r from-cyan-600 to-indigo-600 text-white shadow-[0_0_12px_rgba(8,145,178,0.5)]'
                  : 'text-slate-400 hover:text-slate-200 hover:bg-slate-900'
              }`}
            >
              {lang === 'ar' ? 'رحلاتي الحافظة' : 'My Trips'}
            </button>
            <button
              onClick={onOpenAiAdvisor}
              className="px-3 py-1.5 rounded-lg font-semibold text-slate-400 hover:text-cyan-300 hover:bg-slate-900 transition-all flex items-center gap-1.5"
            >
              <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
              <span>{lang === 'ar' ? 'الدعم والمستشار' : 'Support & AI'}</span>
            </button>
          </nav>

          {/* Mobile Right Controls: Language Selector & AI Advisor */}
          <div className="flex md:hidden items-center gap-2">
            <LanguageSelector
              currentLang={lang}
              onLanguageChange={setLang}
              currentCurrency={currency}
              onCurrencyChange={setCurrency}
            />

            <button
              onClick={onOpenAiAdvisor}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 text-white text-xs font-medium shadow-md hover:brightness-110 active:scale-95 transition-all"
            >
              <Bot className="w-4 h-4 text-cyan-300" />
              <span>{lang === 'ar' ? 'المستشار' : 'AI'}</span>
            </button>
          </div>
        </div>

        {/* Counter Pills (Green, Yellow, Red Zones) */}
        <div className="flex items-center gap-2 sm:gap-3 overflow-x-auto max-w-full pb-1 md:pb-0 no-scrollbar">
          
          {/* Green Zone Pill */}
          <button
            onClick={() => setActiveZoneFilter(activeZoneFilter === 'green' ? 'all' : 'green')}
            className={`flex items-center gap-2 px-3 py-1.5 rounded-xl text-xs font-semibold transition-all border ${
              activeZoneFilter === 'green'
                ? 'bg-emerald-950/90 text-emerald-300 border-emerald-500 ring-2 ring-emerald-500/30 glow-green'
                : 'bg-slate-900/80 text-emerald-400/90 border-emerald-500/30 hover:bg-emerald-950/40 hover:border-emerald-500/50'
            }`}
          >
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_8px_#10b981]" />
            <span className="whitespace-nowrap">{t.budgetHubs}</span>
            <span className="px-1.5 py-0.2 text-[11px] rounded-md bg-emerald-900/60 text-emerald-200 border border-emerald-500/30">
              {zoneCounts.green}
            </span>
          </button>

          {/* Yellow Zone Pill */}
          <button
            onClick={() => setActiveZoneFilter(activeZoneFilter === 'yellow' ? 'all' : 'yellow')}
            className={`flex items-center gap-2 px-3 py-1.5 rounded-xl text-xs font-semibold transition-all border ${
              activeZoneFilter === 'yellow'
                ? 'bg-amber-950/90 text-amber-300 border-amber-500 ring-2 ring-amber-500/30 glow-yellow'
                : 'bg-slate-900/80 text-amber-400/90 border-amber-500/30 hover:bg-amber-950/40 hover:border-amber-500/50'
            }`}
          >
            <span className="w-2.5 h-2.5 rounded-full bg-amber-400 animate-pulse shadow-[0_0_8px_#f59e0b]" />
            <span className="whitespace-nowrap">{t.midTierHubs}</span>
            <span className="px-1.5 py-0.2 text-[11px] rounded-md bg-amber-900/60 text-amber-200 border border-amber-500/30">
              {zoneCounts.yellow}
            </span>
          </button>

          {/* Red Zone Pill */}
          <button
            onClick={() => setActiveZoneFilter(activeZoneFilter === 'red' ? 'all' : 'red')}
            className={`flex items-center gap-2 px-3 py-1.5 rounded-xl text-xs font-semibold transition-all border ${
              activeZoneFilter === 'red'
                ? 'bg-rose-950/90 text-rose-300 border-rose-500 ring-2 ring-rose-500/30 glow-red'
                : 'bg-slate-900/80 text-rose-400/90 border-rose-500/30 hover:bg-rose-950/40 hover:border-rose-500/50'
            }`}
          >
            <span className="w-2.5 h-2.5 rounded-full bg-rose-500 animate-pulse shadow-[0_0_8px_#ef4444]" />
            <span className="whitespace-nowrap">{t.luxuryHubs}</span>
            <span className="px-1.5 py-0.2 text-[11px] rounded-md bg-rose-900/60 text-rose-200 border border-rose-500/30">
              {zoneCounts.red}
            </span>
          </button>

        </div>

        {/* Right Controls (Desktop): Language Selector & AI Advisor Button */}
        <div className="hidden md:flex items-center gap-3">
          
          <LanguageSelector
            currentLang={lang}
            onLanguageChange={setLang}
            currentCurrency={currency}
            onCurrencyChange={setCurrency}
          />

          {/* AI Travel Advisor Trigger Button */}
          <button
            onClick={onOpenAiAdvisor}
            className="relative group overflow-hidden flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-indigo-600 via-purple-600 to-cyan-600 text-white text-xs font-bold shadow-[0_0_20px_rgba(99,102,241,0.35)] hover:shadow-[0_0_25px_rgba(99,102,241,0.6)] hover:scale-105 active:scale-95 transition-all border border-indigo-400/40"
          >
            <span className="absolute inset-0 bg-white/20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
            <Bot className="w-4 h-4 text-cyan-200 group-hover:rotate-12 transition-transform" />
            <span>{t.aiAdvisorBtn}</span>
            <Sparkles className="w-3.5 h-3.5 text-amber-300 animate-spin" />
          </button>

        </div>

      </div>
    </header>
  );
};

