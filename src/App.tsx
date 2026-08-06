/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useMemo } from 'react';
import { CITIES_DATA } from './data/citiesData';
import { CityData, Region, TourismZone, ViewMode } from './types';
import { TRANSLATIONS, LanguageCode, SUPPORTED_LANGUAGES } from './translations';
import { useLanguageDirection } from './hooks/useLanguageDirection';
import { Header } from './components/Header';
import { SubHeaderFilter } from './components/SubHeaderFilter';
import { AnalyticsPanel } from './components/AnalyticsPanel';
import { GisMap, SearchedLocationTarget } from './components/GisMap';
import { SearchLocationResult } from './components/SearchBar';
import { CityGrid } from './components/CityGrid';
import { DealsTable } from './components/DealsTable';
import { ZoneDistribution } from './components/ZoneDistribution';
import { StatsDashboard } from './components/StatsDashboard';
import { CityProfileDrawer } from './components/CityProfileDrawer';
import { AiTravelAdvisorDrawer } from './components/AiTravelAdvisorDrawer';

function getInitialLang(): LanguageCode {
  try {
    const saved = localStorage.getItem('stayr_lang') as LanguageCode;
    if (saved && SUPPORTED_LANGUAGES.some((l) => l.code === saved)) {
      return saved;
    }
    const navLang = navigator.language.split('-')[0].toLowerCase() as LanguageCode;
    if (SUPPORTED_LANGUAGES.some((l) => l.code === navLang)) {
      return navLang;
    }
  } catch (e) {
    console.warn('LocalStorage access warning:', e);
  }
  return 'ar';
}

export default function App() {
  const [lang, setLang] = useState<LanguageCode>(getInitialLang);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedRegion, setSelectedRegion] = useState<Region | 'all'>('all');
  const [selectedZone, setSelectedZone] = useState<TourismZone | 'all'>('all');
  const [viewMode, setViewMode] = useState<ViewMode>('map');
  const [selectedCity, setSelectedCity] = useState<CityData | null>(null);
  const [searchedLocation, setSearchedLocation] = useState<SearchedLocationTarget | null>(null);
  const [isAiDrawerOpen, setIsAiDrawerOpen] = useState(false);

  // Travel Context (Dates & Currency)
  const today = new Date().toISOString().split('T')[0];
  const nextWeek = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString().split('T')[0];
  const [checkInDate, setCheckInDate] = useState(today);
  const [checkOutDate, setCheckOutDate] = useState(nextWeek);

  const activeLangObj = SUPPORTED_LANGUAGES.find((l) => l.code === lang) || SUPPORTED_LANGUAGES[0];
  const [currency, setCurrency] = useState(activeLangObj.defaultCurrency);

  const t = TRANSLATIONS[lang] || TRANSLATIONS.en;

  // Dynamically update document dir (RTL/LTR) & lang attribute
  useLanguageDirection(lang);

  // Parse deep-link query params on mount
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const cityParam = params.get('city');
    const currencyParam = params.get('currency');
    const checkInParam = params.get('checkIn');
    const checkOutParam = params.get('checkOut');

    if (currencyParam) setCurrency(currencyParam);
    if (checkInParam) setCheckInDate(checkInParam);
    if (checkOutParam) setCheckOutDate(checkOutParam);

    if (cityParam) {
      const found = CITIES_DATA.find(
        (c) =>
          c.name_en.toLowerCase() === cityParam.toLowerCase() ||
          c.name_ar.toLowerCase() === cityParam.toLowerCase() ||
          c.id.toLowerCase() === cityParam.toLowerCase()
      );
      if (found) {
        setSelectedCity(found);
      }
    }
  }, []);

  // Zone Counts for top header pills
  const zoneCounts = useMemo(() => {
    return {
      green: CITIES_DATA.filter(c => c.zone === 'green').length,
      yellow: CITIES_DATA.filter(c => c.zone === 'yellow').length,
      red: CITIES_DATA.filter(c => c.zone === 'red').length,
    };
  }, []);

  // Filtered Cities
  const filteredCities = useMemo(() => {
    return CITIES_DATA.filter((city) => {
      // Filter by Region
      if (selectedRegion !== 'all' && city.region !== selectedRegion) {
        return false;
      }

      // Filter by Zone
      if (selectedZone !== 'all' && city.zone !== selectedZone) {
        return false;
      }

      // Filter by Search Query
      if (searchQuery.trim() !== '') {
        const query = searchQuery.toLowerCase().trim();
        const matchNameAr = city.name_ar.toLowerCase().includes(query);
        const matchNameEn = city.name_en.toLowerCase().includes(query);
        const matchIata = city.iata.toLowerCase().includes(query);
        const matchCountryAr = city.country_ar.toLowerCase().includes(query);
        const matchCountryEn = city.country_en.toLowerCase().includes(query);

        return matchNameAr || matchNameEn || matchIata || matchCountryAr || matchCountryEn;
      }

      return true;
    });
  }, [searchQuery, selectedRegion, selectedZone]);

  const handleOpenAiForCity = (city: CityData) => {
    setSelectedCity(city);
    setIsAiDrawerOpen(true);
  };

  const handlePlaceSelected = (result: SearchLocationResult) => {
    setSearchedLocation(result);
    if (result.cityData) {
      setSelectedCity(result.cityData);
    }
    setViewMode('map');
  };

  const [currentNav, setCurrentNav] = useState('map');

  const handleNavSelect = (nav: string) => {
    setCurrentNav(nav);
    if (nav === 'map') setViewMode('map');
    else if (nav === 'home') setViewMode('grid');
    else if (nav === 'trips') setViewMode('table');
  };

  return (
    <div className="min-h-screen bg-[#090d16] text-slate-100 flex flex-col font-['Cairo',sans-serif] relative">
      
      {/* 1. Top Global Navigation Header */}
      <Header
        lang={lang}
        setLang={setLang}
        currency={currency}
        setCurrency={setCurrency}
        t={t}
        zoneCounts={zoneCounts}
        activeZoneFilter={selectedZone}
        setActiveZoneFilter={setSelectedZone}
        onOpenAiAdvisor={() => setIsAiDrawerOpen(true)}
        currentNav={currentNav}
        onNavSelect={handleNavSelect}
      />

      {/* 2. Sub-Header Controls & View Switcher */}
      <SubHeaderFilter
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        onPlaceSelected={handlePlaceSelected}
        selectedRegion={selectedRegion}
        setSelectedRegion={setSelectedRegion}
        selectedZone={selectedZone}
        setSelectedZone={setSelectedZone}
        viewMode={viewMode}
        setViewMode={setViewMode}
        checkInDate={checkInDate}
        setCheckInDate={setCheckInDate}
        checkOutDate={checkOutDate}
        setCheckOutDate={setCheckOutDate}
        currency={currency}
        setCurrency={setCurrency}
        t={t}
        lang={lang}
      />

      {/* 3. Analytics KPI Summary Panel */}
      <AnalyticsPanel
        cities={filteredCities}
        currency={currency}
        t={t}
        lang={lang}
      />

      {/* 4. Main View Container */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 lg:px-8 py-6 space-y-6">
        
        {viewMode === 'map' && (
          <GisMap
            cities={filteredCities}
            selectedCity={selectedCity}
            onSelectCity={(city) => setSelectedCity(city)}
            searchedLocation={searchedLocation}
            checkInDate={checkInDate}
            checkOutDate={checkOutDate}
            currency={currency}
            t={t}
            lang={lang}
          />
        )}

        {viewMode === 'grid' && (
          <CityGrid
            cities={filteredCities}
            onSelectCity={(city) => setSelectedCity(city)}
            currency={currency}
            t={t}
            lang={lang}
          />
        )}

        {viewMode === 'table' && (
          <DealsTable
            cities={filteredCities}
            onSelectCity={(city) => setSelectedCity(city)}
            checkInDate={checkInDate}
            checkOutDate={checkOutDate}
            currency={currency}
            t={t}
            lang={lang}
          />
        )}

        {viewMode === 'distribution' && (
          <ZoneDistribution
            cities={filteredCities}
            t={t}
            lang={lang}
          />
        )}

        {viewMode === 'stats' && (
          <StatsDashboard
            cities={filteredCities}
            t={t}
            lang={lang}
          />
        )}

      </main>

      {/* 5. Contextual City Profile & Travelpayouts Drawer */}
      <CityProfileDrawer
        city={selectedCity}
        onClose={() => setSelectedCity(null)}
        onAskAi={handleOpenAiForCity}
        checkInDate={checkInDate}
        checkOutDate={checkOutDate}
        currency={currency}
        t={t}
        lang={lang}
      />

      {/* 6. Gemini AI Travel Advisor Drawer */}
      <AiTravelAdvisorDrawer
        isOpen={isAiDrawerOpen}
        onClose={() => setIsAiDrawerOpen(false)}
        selectedCity={selectedCity}
        t={t}
        lang={lang}
      />

      {/* Footer */}
      <footer className="border-t border-slate-800/80 bg-[#070a12] py-4 px-4 lg:px-8 text-center text-xs text-slate-500">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <span className="font-bold text-slate-200 text-sm tracking-wide">Stayr</span>
            <span className="text-slate-600">|</span>
            <span>{lang === 'ar' ? 'محرك الخريطة الذكية ومقارنة أسعار الفنادق العالمية © 2026' : 'Smart Interactive Hotel & Travel Map Engine © 2026'}</span>
          </div>
          <span className="text-[11px] text-slate-600">Stayr Meta-Search Ecosystem (Booking.com, Agoda, Expedia, Trip.com, WayAway)</span>
        </div>
      </footer>

      {/* Floating AI Travel Assistant Trigger Button */}
      <button
        onClick={() => setIsAiDrawerOpen(true)}
        className="fixed bottom-6 right-6 rtl:right-auto rtl:left-6 z-40 group flex items-center gap-2.5 px-4 py-3 rounded-2xl bg-gradient-to-r from-indigo-600 via-purple-600 to-cyan-600 text-white shadow-[0_0_25px_rgba(99,102,241,0.5)] hover:shadow-[0_0_35px_rgba(99,102,241,0.8)] hover:scale-105 active:scale-95 transition-all duration-300 border border-indigo-400/40"
        title={t.aiAdvisorBtn}
      >
        <div className="relative flex items-center justify-center">
          <div className="w-5 h-5 flex items-center justify-center">
            <span className="text-cyan-200 font-bold text-sm">🤖</span>
          </div>
          <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
        </div>
        <span className="text-xs font-bold tracking-wide hidden sm:inline">{t.aiAdvisorBtn}</span>
        <span className="text-amber-300 animate-spin text-xs">✨</span>
      </button>

    </div>
  );
}
