import React from 'react';
import { Map, LayoutGrid, Table, PieChart, BarChart3, Filter, X, Calendar, DollarSign, Coins } from 'lucide-react';
import { Region, TourismZone, ViewMode } from '../types';
import { Translation, LanguageCode } from '../translations';
import { SUPPORTED_CURRENCIES } from '../lib/affiliate';
import { SearchBar, SearchLocationResult } from './SearchBar';

interface SubHeaderFilterProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  onPlaceSelected?: (result: SearchLocationResult) => void;
  selectedRegion: Region | 'all';
  setSelectedRegion: (region: Region | 'all') => void;
  selectedZone: TourismZone | 'all';
  setSelectedZone: (zone: TourismZone | 'all') => void;
  viewMode: ViewMode;
  setViewMode: (view: ViewMode) => void;
  checkInDate: string;
  setCheckInDate: (date: string) => void;
  checkOutDate: string;
  setCheckOutDate: (date: string) => void;
  currency: string;
  setCurrency: (curr: string) => void;
  t: Translation;
  lang: LanguageCode;
}

export const SubHeaderFilter: React.FC<SubHeaderFilterProps> = ({
  searchQuery,
  setSearchQuery,
  onPlaceSelected,
  selectedRegion,
  setSelectedRegion,
  selectedZone,
  setSelectedZone,
  viewMode,
  setViewMode,
  checkInDate,
  setCheckInDate,
  checkOutDate,
  setCheckOutDate,
  currency,
  setCurrency,
  t,
  lang,
}) => {
  const regions: Array<{ id: Region | 'all'; label_ar: string; label_en: string }> = [
    { id: 'all', label_ar: 'الكل', label_en: 'All' },
    { id: 'MENA', label_ar: 'الشرق الأوسط وشمال أفريقيا', label_en: 'MENA' },
    { id: 'Europe', label_ar: 'أوروبا', label_en: 'Europe' },
    { id: 'Asia', label_ar: 'آسيا', label_en: 'Asia' },
    { id: 'Americas', label_ar: 'الأمريكتان', label_en: 'Americas' },
    { id: 'Africa', label_ar: 'أفريقيا', label_en: 'Africa' },
  ];

  const zones: Array<{ id: TourismZone | 'all'; label_ar: string; label_en: string; color: string }> = [
    { id: 'all', label_ar: 'جميع المناطق', label_en: 'All Zones', color: 'bg-slate-700' },
    { id: 'green', label_ar: 'الخضراء (< $80)', label_en: 'Green (< $80)', color: 'bg-emerald-500' },
    { id: 'yellow', label_ar: 'الصفراء ($80-$250)', label_en: 'Yellow ($80-$250)', color: 'bg-amber-500' },
    { id: 'red', label_ar: 'الحمراء (> $250)', label_en: 'Red (> $250)', color: 'bg-rose-500' },
  ];

  return (
    <div className="bg-[#0b101d] border-b border-slate-800/90 px-4 lg:px-8 py-3 space-y-2.5">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row lg:items-center justify-between gap-3">
        
        {/* Dynamic Search & Google Places Autocomplete Bar */}
        <SearchBar
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          onPlaceSelected={onPlaceSelected}
          t={t}
          lang={lang}
        />

        {/* Travel Dates & Currency Control Bar */}
        <div className="flex flex-wrap items-center gap-2 bg-slate-950/80 p-1.5 rounded-xl border border-slate-800 text-xs shadow-inner">
          <div className="flex items-center gap-1.5 text-slate-400 px-1">
            <Calendar className="w-3.5 h-3.5 text-cyan-400" />
            <span className="text-[11px] font-medium hidden sm:inline">{lang === 'ar' ? 'التواريخ:' : 'Dates:'}</span>
          </div>

          <input
            type="date"
            value={checkInDate}
            onChange={(e) => setCheckInDate(e.target.value)}
            className="bg-slate-900 text-slate-200 text-xs font-mono font-semibold px-2 py-1 rounded-lg border border-slate-800 focus:border-cyan-500 focus:outline-none cursor-pointer"
            title={lang === 'ar' ? 'تاريخ الوصول' : 'Check-in Date'}
          />

          <span className="text-slate-600 font-bold">-</span>

          <input
            type="date"
            value={checkOutDate}
            onChange={(e) => setCheckOutDate(e.target.value)}
            className="bg-slate-900 text-slate-200 text-xs font-mono font-semibold px-2 py-1 rounded-lg border border-slate-800 focus:border-cyan-500 focus:outline-none cursor-pointer"
            title={lang === 'ar' ? 'تاريخ المغادرة' : 'Check-out Date'}
          />

          <div className="w-px h-4 bg-slate-800 mx-1" />

          {/* Currency Switcher */}
          <div className="flex items-center gap-1 bg-slate-900 px-2 py-1 rounded-lg border border-slate-800">
            <Coins className="w-3.5 h-3.5 text-amber-400" />
            <select
              value={currency}
              onChange={(e) => setCurrency(e.target.value)}
              className="bg-transparent text-slate-200 text-xs font-bold focus:outline-none cursor-pointer"
            >
              {SUPPORTED_CURRENCIES.map((curr) => (
                <option key={curr.code} value={curr.code} className="bg-slate-900 text-slate-200">
                  {curr.code} ({curr.symbol})
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Filters & View Switcher */}
        <div className="flex flex-wrap items-center gap-2 lg:gap-2.5 justify-between lg:justify-end">
          
          {/* Region Select */}
          <div className="flex items-center gap-1.5 bg-slate-900/90 p-1 rounded-xl border border-slate-800 text-xs">
            <Filter className="w-3.5 h-3.5 text-slate-400 ml-1.5 rtl:ml-1.5 ltr:ml-0 ltr:mr-1.5" />
            <select
              value={selectedRegion}
              onChange={(e) => setSelectedRegion(e.target.value as Region | 'all')}
              className="bg-transparent text-slate-200 text-xs font-semibold focus:outline-none cursor-pointer pr-1"
            >
              {regions.map((reg) => (
                <option key={reg.id} value={reg.id} className="bg-slate-900 text-slate-200">
                  {lang === 'ar' ? reg.label_ar : reg.label_en}
                </option>
              ))}
            </select>
          </div>

          {/* Zone Select */}
          <div className="flex items-center gap-1.5 bg-slate-900/90 p-1 rounded-xl border border-slate-800 text-xs">
            <select
              value={selectedZone}
              onChange={(e) => setSelectedZone(e.target.value as TourismZone | 'all')}
              className="bg-transparent text-slate-200 text-xs font-semibold focus:outline-none cursor-pointer pr-1"
            >
              {zones.map((zn) => (
                <option key={zn.id} value={zn.id} className="bg-slate-900 text-slate-200">
                  {lang === 'ar' ? zn.label_ar : zn.label_en}
                </option>
              ))}
            </select>
          </div>

          {/* View Switcher Tabs */}
          <div className="flex items-center bg-slate-950 p-1 rounded-xl border border-slate-800/90 shadow-inner overflow-x-auto max-w-full">
            
            <button
              onClick={() => setViewMode('map')}
              className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all ${
                viewMode === 'map'
                  ? 'bg-gradient-to-r from-cyan-600 to-indigo-600 text-white shadow-[0_0_12px_rgba(8,145,178,0.6)]'
                  : 'text-slate-400 hover:text-slate-200 hover:bg-slate-900'
              }`}
            >
              <Map className="w-3.5 h-3.5 text-cyan-300" />
              <span>{t.viewMap}</span>
            </button>

            <button
              onClick={() => setViewMode('grid')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                viewMode === 'grid'
                  ? 'bg-cyan-600 text-white shadow-[0_0_12px_rgba(8,145,178,0.5)]'
                  : 'text-slate-400 hover:text-slate-200 hover:bg-slate-900'
              }`}
            >
              <LayoutGrid className="w-3.5 h-3.5" />
              <span>{t.viewGrid}</span>
            </button>

            <button
              onClick={() => setViewMode('table')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                viewMode === 'table'
                  ? 'bg-cyan-600 text-white shadow-[0_0_12px_rgba(8,145,178,0.5)]'
                  : 'text-slate-400 hover:text-slate-200 hover:bg-slate-900'
              }`}
            >
              <Table className="w-3.5 h-3.5" />
              <span>{t.viewTable}</span>
            </button>

            <button
              onClick={() => setViewMode('distribution')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                viewMode === 'distribution'
                  ? 'bg-cyan-600 text-white shadow-[0_0_12px_rgba(8,145,178,0.5)]'
                  : 'text-slate-400 hover:text-slate-200 hover:bg-slate-900'
              }`}
            >
              <PieChart className="w-3.5 h-3.5" />
              <span>{t.viewDistribution}</span>
            </button>

            <button
              onClick={() => setViewMode('stats')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                viewMode === 'stats'
                  ? 'bg-cyan-600 text-white shadow-[0_0_12px_rgba(8,145,178,0.5)]'
                  : 'text-slate-400 hover:text-slate-200 hover:bg-slate-900'
              }`}
            >
              <BarChart3 className="w-3.5 h-3.5" />
              <span>{t.viewStats}</span>
            </button>

          </div>

        </div>

      </div>
    </div>
  );
};

