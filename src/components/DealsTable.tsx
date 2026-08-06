import React, { useState } from 'react';
import { ArrowUpDown, Star, Plane, ExternalLink, Building2, Tag } from 'lucide-react';
import { CityData } from '../types';
import { Translation, LanguageCode } from '../translations';
import { generateAffiliateLink, convertPrice } from '../lib/affiliate';

interface DealsTableProps {
  cities: CityData[];
  onSelectCity: (city: CityData) => void;
  checkInDate?: string;
  checkOutDate?: string;
  currency?: string;
  t: Translation;
  lang: LanguageCode;
}

export const DealsTable: React.FC<DealsTableProps> = ({
  cities,
  onSelectCity,
  checkInDate,
  checkOutDate,
  currency = 'USD',
  t,
  lang,
}) => {
  const [sortField, setSortField] = useState<'price' | 'rating' | 'deals'>('price');
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc');

  const sortedCities = [...cities].sort((a, b) => {
    let valA = a.avg_hotel_price;
    let valB = b.avg_hotel_price;

    if (sortField === 'rating') {
      valA = a.quality_score;
      valB = b.quality_score;
    } else if (sortField === 'deals') {
      valA = a.hotel_deals_count;
      valB = b.hotel_deals_count;
    }

    return sortOrder === 'asc' ? valA - valB : valB - valA;
  });

  const toggleSort = (field: 'price' | 'rating' | 'deals') => {
    if (sortField === field) {
      setSortOrder(prev => prev === 'asc' ? 'desc' : 'asc');
    } else {
      setSortField(field);
      setSortOrder('asc');
    }
  };

  return (
    <div className="bg-slate-900/80 rounded-2xl border border-slate-800 overflow-hidden shadow-2xl">
      <div className="overflow-x-auto">
        <table className="w-full text-right rtl:text-right ltr:text-left text-xs sm:text-sm text-slate-200">
          
          {/* Table Header */}
          <thead className="bg-slate-950 text-slate-400 font-bold border-b border-slate-800 uppercase text-[11px] tracking-wider">
            <tr>
              <th className="py-3.5 px-4">{lang === 'ar' ? 'المدينة والدولة' : 'City & Country'}</th>
              <th className="py-3.5 px-4">{lang === 'ar' ? 'كود IATA' : 'IATA Code'}</th>
              <th className="py-3.5 px-4">{lang === 'ar' ? 'المنطقة' : 'Zone'}</th>
              <th
                onClick={() => toggleSort('price')}
                className="py-3.5 px-4 cursor-pointer hover:text-white transition-colors"
              >
                <div className="flex items-center gap-1">
                  <span>{t.avgNightlyRate}</span>
                  <ArrowUpDown className="w-3.5 h-3.5 text-cyan-400" />
                </div>
              </th>
              <th
                onClick={() => toggleSort('rating')}
                className="py-3.5 px-4 cursor-pointer hover:text-white transition-colors"
              >
                <div className="flex items-center gap-1">
                  <span>{t.qualityIndex}</span>
                  <ArrowUpDown className="w-3.5 h-3.5 text-amber-400" />
                </div>
              </th>
              <th
                onClick={() => toggleSort('deals')}
                className="py-3.5 px-4 cursor-pointer hover:text-white transition-colors"
              >
                <div className="flex items-center gap-1">
                  <span>{t.activeDeals}</span>
                  <ArrowUpDown className="w-3.5 h-3.5 text-emerald-400" />
                </div>
              </th>
              <th className="py-3.5 px-4 text-center">{lang === 'ar' ? 'روابط Travelpayouts المباشرة' : 'Travelpayouts Booking'}</th>
            </tr>
          </thead>

          {/* Table Body */}
          <tbody className="divide-y divide-slate-800/80 font-medium">
            {sortedCities.map((city) => {
              const zoneColorClass = city.zone === 'green'
                ? 'text-emerald-400 bg-emerald-950/60 border-emerald-500/30'
                : city.zone === 'yellow'
                ? 'text-amber-400 bg-amber-950/60 border-amber-500/30'
                : 'text-rose-400 bg-rose-950/60 border-rose-500/30';

              return (
                <tr
                  key={city.id}
                  className="hover:bg-slate-800/60 transition-colors cursor-pointer"
                  onClick={() => onSelectCity(city)}
                >
                  <td className="py-3.5 px-4">
                    <div>
                      <span className="font-bold text-slate-100 text-sm">{lang === 'ar' ? city.name_ar : city.name_en}</span>
                      <span className="text-xs text-slate-400 block">{lang === 'ar' ? city.country_ar : city.country_en}</span>
                    </div>
                  </td>

                  <td className="py-3.5 px-4 font-mono font-bold text-cyan-400">
                    <span className="px-2 py-1 rounded bg-slate-950 border border-slate-800 inline-flex items-center gap-1">
                      <Plane className="w-3 h-3 text-cyan-400" />
                      {city.iata}
                    </span>
                  </td>

                  <td className="py-3.5 px-4">
                    <span className={`px-2.5 py-1 rounded-full text-xs font-bold border ${zoneColorClass}`}>
                      {city.zone === 'green' ? t.greenZoneLabel : city.zone === 'yellow' ? t.yellowZoneLabel : t.redZoneLabel}
                    </span>
                  </td>

                  <td className="py-3.5 px-4 font-extrabold text-cyan-300">
                    {convertPrice(city.avg_hotel_price, currency)} <span className="text-[10px] text-slate-500 font-normal">/{t.night}</span>
                  </td>

                  <td className="py-3.5 px-4">
                    <div className="flex items-center gap-1 text-amber-400 font-bold">
                      <Star className="w-3.5 h-3.5 fill-amber-400" />
                      <span>{city.quality_score}</span>
                      <span className="text-slate-500 text-[10px] font-normal">/10</span>
                    </div>
                  </td>

                  <td className="py-3.5 px-4 text-emerald-400 font-semibold">
                    {city.hotel_deals_count} {t.dealsCount}
                  </td>

                  <td className="py-3.5 px-4 text-center" onClick={(e) => e.stopPropagation()}>
                    <div className="flex items-center justify-center gap-2">
                      <a
                        href={generateAffiliateLink('Booking.com', city.name_en, checkInDate, checkOutDate, currency)}
                        target="_blank"
                        rel="noreferrer"
                        className="px-2.5 py-1 rounded-lg bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold transition-all shadow flex items-center gap-1"
                      >
                        Booking.com
                        <ExternalLink className="w-3 h-3" />
                      </a>
                      <a
                        href={generateAffiliateLink('Agoda', city.name_en, checkInDate, checkOutDate, currency)}
                        target="_blank"
                        rel="noreferrer"
                        className="px-2.5 py-1 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold transition-all shadow flex items-center gap-1"
                      >
                        Agoda
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>

        </table>
      </div>
    </div>
  );
};
