import React, { useState } from 'react';
import { X, Star, MapPin, Calendar, Building2, Plane, Compass, ExternalLink, Bot, Tag, ShieldCheck, Sparkles, Hotel, Share2, Check, Copy } from 'lucide-react';
import { CityData } from '../types';
import { Translation, LanguageCode } from '../translations';
import { generateAffiliateLink, convertPrice } from '../lib/affiliate';

interface CityProfileDrawerProps {
  city: CityData | null;
  onClose: () => void;
  onAskAi: (city: CityData) => void;
  checkInDate?: string;
  checkOutDate?: string;
  currency?: string;
  t: Translation;
  lang: LanguageCode;
}

export const CityProfileDrawer: React.FC<CityProfileDrawerProps> = ({
  city,
  onClose,
  onAskAi,
  checkInDate,
  checkOutDate,
  currency = 'USD',
  t,
  lang,
}) => {
  const [activeTab, setActiveTab] = useState<'hotels' | 'flights' | 'experiences'>('hotels');
  const [copiedShareLink, setCopiedShareLink] = useState(false);

  if (!city) return null;

  const handleShareDestination = () => {
    const url = `${window.location.origin}${window.location.pathname}?city=${encodeURIComponent(city.name_en)}&lat=${city.coordinates[0]}&lng=${city.coordinates[1]}`;
    navigator.clipboard.writeText(url);
    setCopiedShareLink(true);
    setTimeout(() => setCopiedShareLink(false), 2500);
  };

  const zoneBadgeClass = city.zone === 'green'
    ? 'bg-emerald-950/90 text-emerald-300 border-emerald-500/50 glow-green'
    : city.zone === 'yellow'
    ? 'bg-amber-950/90 text-amber-300 border-amber-500/50 glow-yellow'
    : 'bg-rose-950/90 text-rose-300 border-rose-500/50 glow-red';

  return (
    <div className="fixed inset-0 z-[10000] flex justify-end bg-black/70 backdrop-blur-sm transition-opacity animate-in fade-in duration-300">
      
      {/* Drawer Panel */}
      <div className="relative w-full max-w-xl h-full bg-[#0d1322] border-l rtl:border-r rtl:border-l-0 border-slate-800 shadow-2xl flex flex-col overflow-hidden text-slate-100 animate-in slide-in-from-right rtl:slide-in-from-left duration-300">
        
        {/* Drawer Header */}
        <div className="p-5 bg-slate-950/90 border-b border-slate-800 flex items-start justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className={`px-2.5 py-0.5 text-[11px] font-bold rounded-lg border ${zoneBadgeClass}`}>
                {city.zone === 'green' ? t.greenZoneLabel : city.zone === 'yellow' ? t.yellowZoneLabel : t.redZoneLabel}
              </span>
              <span className="px-2 py-0.5 rounded bg-slate-900 border border-slate-800 font-mono text-cyan-400 text-xs font-bold flex items-center gap-1">
                <Plane className="w-3 h-3" />
                {city.iata}
              </span>
            </div>

            <h2 className="text-2xl font-black text-slate-100">
              {lang === 'ar' ? city.name_ar : city.name_en}
              <span className="text-sm font-normal text-slate-400 ml-2 rtl:mr-2 rtl:ml-0">({city.name_en})</span>
            </h2>

            <p className="text-xs text-slate-400 flex items-center gap-1.5 mt-1">
              <MapPin className="w-3.5 h-3.5 text-slate-500" />
              <span>{lang === 'ar' ? city.country_ar : city.country_en}</span>
              <span className="text-slate-600">•</span>
              <span className="text-cyan-400">{city.region}</span>
            </p>
          </div>

          <div className="flex items-center gap-2">
            {/* One-Click Share Destination Button */}
            <button
              onClick={handleShareDestination}
              className={`p-2 rounded-xl text-xs font-semibold transition-all flex items-center gap-1.5 border ${
                copiedShareLink
                  ? 'bg-emerald-950 text-emerald-300 border-emerald-500/50'
                  : 'bg-slate-900 text-slate-300 hover:text-white hover:bg-slate-800 border-slate-800'
              }`}
              title={lang === 'ar' ? 'مشاركة هذه الوجهة (نسخ الرابط المباشر)' : 'Share Destination'}
            >
              {copiedShareLink ? (
                <>
                  <Check className="w-4 h-4 text-emerald-400" />
                  <span className="hidden sm:inline text-[11px] font-bold">{lang === 'ar' ? 'تم النسخ!' : 'Copied!'}</span>
                </>
              ) : (
                <>
                  <Share2 className="w-4 h-4 text-cyan-400" />
                  <span className="hidden sm:inline text-[11px]">{lang === 'ar' ? 'مشاركة' : 'Share'}</span>
                </>
              )}
            </button>

            <button
              onClick={onClose}
              className="p-2 rounded-xl bg-slate-900 text-slate-400 hover:text-white hover:bg-slate-800 border border-slate-800 transition-all"
              title={t.close}
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Quick Highlights Bar */}
        <div className="grid grid-cols-3 divide-x rtl:divide-x-reverse divide-slate-800 bg-slate-900/60 border-b border-slate-800 text-center py-3">
          <div className="px-3">
            <span className="text-[10px] text-slate-400 uppercase block">{t.avgNightlyRate}</span>
            <span className="text-base font-black text-cyan-300">
              {convertPrice(city.avg_hotel_price, currency)} <span className="text-[10px] font-normal text-slate-500">/{t.night}</span>
            </span>
          </div>
          <div className="px-3">
            <span className="text-[10px] text-slate-400 uppercase block">{t.qualityIndex}</span>
            <span className="text-base font-black text-amber-400 flex items-center justify-center gap-1">
              <Star className="w-4 h-4 fill-amber-400" />
              {city.quality_score}
            </span>
          </div>
          <div className="px-3">
            <span className="text-[10px] text-slate-400 uppercase block">{t.seasonality}</span>
            <span className="text-xs font-bold text-slate-200 truncate block mt-0.5">{lang === 'ar' ? city.best_season_ar : city.best_season_en}</span>
          </div>
        </div>

        {/* AI Travel Advisor Trigger Banner */}
        <div className="p-3 bg-gradient-to-r from-indigo-950/80 via-slate-900 to-purple-950/80 border-b border-indigo-500/30 flex items-center justify-between gap-3">
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-xl bg-indigo-600/20 border border-indigo-500/40 text-cyan-300">
              <Bot className="w-5 h-5 animate-bounce" />
            </div>
            <div>
              <p className="text-xs font-bold text-slate-100">
                {lang === 'ar' ? 'هل تريد خطة سفر مخصصة لهذه المدينة؟' : 'Need a custom itinerary for this city?'}
              </p>
              <p className="text-[11px] text-slate-400">
                {lang === 'ar' ? 'استشر ذكاء Stayr لتخفيض تكاليف الفنادق والطيران' : 'Get Stayr AI tips on hotel savings, tax & flight hacks'}
              </p>
            </div>
          </div>

          <button
            onClick={() => onAskAi(city)}
            className="px-3 py-1.5 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white text-xs font-bold shadow-lg hover:scale-105 active:scale-95 transition-all whitespace-nowrap flex items-center gap-1.5"
          >
            <Sparkles className="w-3.5 h-3.5 text-amber-300" />
            <span>{lang === 'ar' ? 'اسأل AI' : 'Ask AI'}</span>
          </button>
        </div>

        {/* Tab Switcher: Hotels / Flights / Experiences */}
        <div className="flex border-b border-slate-800 bg-slate-950 px-4 pt-2 gap-2">
          <button
            onClick={() => setActiveTab('hotels')}
            className={`flex items-center gap-2 px-4 py-2.5 text-xs font-bold border-b-2 transition-all ${
              activeTab === 'hotels'
                ? 'border-cyan-500 text-cyan-400 bg-slate-900/50 rounded-t-lg'
                : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            <Building2 className="w-4 h-4" />
            <span>{t.bookingDeals} ({city.curated_hotels.length})</span>
          </button>

          <button
            onClick={() => setActiveTab('flights')}
            className={`flex items-center gap-2 px-4 py-2.5 text-xs font-bold border-b-2 transition-all ${
              activeTab === 'flights'
                ? 'border-cyan-500 text-cyan-400 bg-slate-900/50 rounded-t-lg'
                : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            <Plane className="w-4 h-4" />
            <span>{t.flightSearch}</span>
          </button>

          <button
            onClick={() => setActiveTab('experiences')}
            className={`flex items-center gap-2 px-4 py-2.5 text-xs font-bold border-b-2 transition-all ${
              activeTab === 'experiences'
                ? 'border-cyan-500 text-cyan-400 bg-slate-900/50 rounded-t-lg'
                : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            <Compass className="w-4 h-4" />
            <span>{t.activitiesTours} ({city.experiences.length})</span>
          </button>
        </div>

        {/* Drawer Scrollable Content Body */}
        <div className="flex-1 overflow-y-auto p-5 space-y-5 custom-scrollbar">
          
          {/* TAB 1: Hotels */}
          {activeTab === 'hotels' && (
            <div className="space-y-4">
              
              {/* Direct Travelpayouts Primary Quick Buttons */}
              <div className="p-4 rounded-2xl bg-slate-900/90 border border-slate-800 space-y-3">
                <span className="text-xs font-bold text-slate-300 block">
                  {lang === 'ar' ? 'محركات حجز الفنادق المباشرة (مع معلمات Stayr Monetization)' : 'Direct Booking Platforms (Stayr Affiliate Engine)'}
                </span>

                <div className="grid grid-cols-2 gap-3">
                  <a
                    href={generateAffiliateLink('Booking.com', city.name_en, checkInDate, checkOutDate, currency)}
                    target="_blank"
                    rel="noreferrer"
                    className="p-3 rounded-xl bg-gradient-to-r from-blue-700 to-blue-600 hover:from-blue-600 hover:to-blue-500 text-white font-bold text-xs shadow-lg hover:shadow-blue-500/25 transition-all flex flex-col items-center gap-1 text-center"
                  >
                    <span className="text-sm">Booking.com</span>
                    <span className="text-[10px] text-blue-200 font-normal">{city.hotel_deals_count} {t.dealsCount}</span>
                  </a>

                  <a
                    href={generateAffiliateLink('Agoda', city.name_en, checkInDate, checkOutDate, currency)}
                    target="_blank"
                    rel="noreferrer"
                    className="p-3 rounded-xl bg-gradient-to-r from-emerald-700 to-emerald-600 hover:from-emerald-600 hover:to-emerald-500 text-white font-bold text-xs shadow-lg hover:shadow-emerald-500/25 transition-all flex flex-col items-center gap-1 text-center"
                  >
                    <span className="text-sm">Agoda</span>
                    <span className="text-[10px] text-emerald-200 font-normal">{lang === 'ar' ? 'خصومات آسيا والشرق الأوسط' : 'Best Rates Asia & MENA'}</span>
                  </a>
                </div>
              </div>

              {/* Curated Hotel Cards */}
              <div className="space-y-3">
                <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                  {lang === 'ar' ? 'أفضل الخيارات الموصى بها في هذه المدينة' : 'Curated Hotels & Resorts'}
                </h4>

                {city.curated_hotels.map((hotel) => {
                  const dealLink = generateAffiliateLink(
                    (hotel.provider as any) || 'Booking.com',
                    city.name_en,
                    checkInDate,
                    checkOutDate,
                    currency
                  );

                  return (
                    <div
                      key={hotel.id}
                      className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800/90 hover:border-slate-700 transition-all space-y-3"
                    >
                      <div className="flex items-start justify-between gap-2">
                        <div>
                          <span className="px-2 py-0.5 text-[10px] font-bold rounded bg-amber-950 text-amber-300 border border-amber-500/30 mb-1.5 inline-block">
                            {lang === 'ar' ? hotel.badge_ar : hotel.badge_en}
                          </span>
                          <h5 className="text-sm font-bold text-slate-100">
                            {lang === 'ar' ? hotel.hotel_name_ar : hotel.hotel_name_en}
                          </h5>
                          <div className="flex items-center gap-1 mt-0.5">
                            {Array.from({ length: hotel.stars }).map((_, i) => (
                              <Star key={i} className="w-3 h-3 fill-amber-400 text-amber-400" />
                            ))}
                            <span className="text-[11px] text-slate-400 font-bold ml-1 rtl:mr-1">
                              ⭐ {hotel.rating}/10
                            </span>
                          </div>
                        </div>

                        <div className="text-right rtl:text-left">
                          <span className="text-base font-extrabold text-cyan-300 block">
                            {convertPrice(hotel.price_per_night, currency)}
                          </span>
                          <span className="text-[10px] text-slate-500">{t.night}</span>
                        </div>
                      </div>

                      <div className="flex items-center justify-between pt-2 border-t border-slate-800 text-xs">
                        <span className="text-slate-400 font-mono text-[11px]">
                          {lang === 'ar' ? 'عبر:' : 'Via:'} <strong className="text-slate-200">{hotel.provider}</strong>
                        </span>

                        <a
                          href={dealLink}
                          target="_blank"
                          rel="noreferrer"
                          className="px-3 py-1.5 rounded-lg bg-cyan-600 hover:bg-cyan-500 text-white font-bold text-xs transition-all shadow flex items-center gap-1"
                        >
                          <span>{t.directBooking}</span>
                          <ExternalLink className="w-3 h-3" />
                        </a>
                      </div>
                    </div>
                  );
                })}
              </div>

            </div>
          )}

          {/* TAB 2: Flights */}
          {activeTab === 'flights' && (
            <div className="space-y-4">
              <div className="p-5 rounded-2xl bg-slate-900/90 border border-slate-800 space-y-4">
                <div className="flex items-center gap-3">
                  <div className="p-3 rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/30">
                    <Plane className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-100">
                      {lang === 'ar' ? `رحلات الطيران إلى مطار (${city.iata})` : `Flights to Airport (${city.iata})`}
                    </h4>
                    <p className="text-xs text-slate-400">
                      {city.active_flights_count} {lang === 'ar' ? 'مسار طيران مباشر وغير مباشر متاح حالياً' : 'active flight connections'}
                    </p>
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 text-xs space-y-2">
                  <div className="flex justify-between text-slate-300">
                    <span>{lang === 'ar' ? 'كود المطار المستهدف:' : 'Target Airport Code:'}</span>
                    <span className="font-mono font-bold text-cyan-400">{city.iata}</span>
                  </div>
                  <div className="flex justify-between text-slate-300">
                    <span>{lang === 'ar' ? 'مزود الطيران الشريك:' : 'Affiliate Engine:'}</span>
                    <span className="font-bold text-indigo-400">WayAway / Aviasales</span>
                  </div>
                </div>

                <a
                  href={generateAffiliateLink('WayAway', city.name_en)}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full py-3 rounded-xl bg-gradient-to-r from-cyan-600 to-indigo-600 hover:from-cyan-500 hover:to-indigo-500 text-white text-xs font-bold transition-all shadow-lg flex items-center justify-center gap-2"
                >
                  <Plane className="w-4 h-4" />
                  <span>{lang === 'ar' ? 'ابحث عن تذاكر الطيران بأقل سعر الآن' : 'Search Lowest Fare Flights'}</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          )}

          {/* TAB 3: Experiences */}
          {activeTab === 'experiences' && (
            <div className="space-y-3">
              <div className="flex items-center justify-between text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
                <span>{lang === 'ar' ? 'رحلات وجولات GetYourGuide' : 'GetYourGuide Tours & Activities'}</span>
                <span className="text-cyan-400">{city.experiences.length} {lang === 'ar' ? 'جولة' : 'tours'}</span>
              </div>

              {city.experiences.map((exp, idx) => (
                <div key={idx} className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800/90 space-y-3">
                  <div className="flex items-start justify-between gap-2">
                    <h5 className="text-sm font-bold text-slate-100">
                      {lang === 'ar' ? exp.title_ar : exp.title_en}
                    </h5>
                    <span className="text-sm font-extrabold text-amber-400 whitespace-nowrap">
                      {convertPrice(exp.price, currency)}
                    </span>
                  </div>

                  <div className="flex items-center justify-between text-xs text-slate-400">
                    <span>⏱️ {exp.duration}</span>
                    <span className="text-amber-400 font-bold">⭐ {exp.rating} ({exp.reviews_count.toLocaleString()})</span>
                  </div>

                  <a
                    href={generateAffiliateLink('GetYourGuide', city.name_en)}
                    target="_blank"
                    rel="noreferrer"
                    className="w-full py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 hover:text-white text-xs font-bold transition-all flex items-center justify-center gap-1.5 border border-slate-700"
                  >
                    <span>{lang === 'ar' ? 'احجز التجربة عبر GetYourGuide' : 'Book Experience on GetYourGuide'}</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              ))}
            </div>
          )}

        </div>

      </div>
    </div>
  );
};

