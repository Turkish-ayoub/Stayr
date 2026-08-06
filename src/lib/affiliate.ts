// Central Travelpayouts & OTA Monetization Engine for Stayr
export const TRAVELPAYOUTS_MARKER = 'YOUR_TP_MARKER';

export type OTAProvider = 
  | 'Booking.com' 
  | 'Agoda' 
  | 'Expedia' 
  | 'Trip.com' 
  | 'Hotels.com' 
  | 'WayAway' 
  | 'GetYourGuide';

export function generateAffiliateLink(
  provider: OTAProvider,
  city: string,
  checkIn?: string,
  checkOut?: string,
  currency: string = 'USD'
): string {
  const encodedCity = encodeURIComponent(city);
  const marker = TRAVELPAYOUTS_MARKER;

  switch (provider) {
    case 'Booking.com': {
      let url = `https://www.booking.com/searchresults.html?ss=${encodedCity}&aid=${marker}&selected_currency=${currency}`;
      if (checkIn && checkOut) {
        url += `&checkin=${checkIn}&checkout=${checkOut}`;
      }
      return url;
    }
    case 'Agoda': {
      let url = `https://www.agoda.com/search?text=${encodedCity}&cid=${marker}&currency=${currency}`;
      if (checkIn && checkOut) {
        url += `&checkin=${checkIn}&checkout=${checkOut}`;
      }
      return url;
    }
    case 'Expedia': {
      let url = `https://www.expedia.com/Hotel-Search?destination=${encodedCity}&camref=${marker}`;
      if (checkIn && checkOut) {
        url += `&startDate=${checkIn}&endDate=${checkOut}`;
      }
      return url;
    }
    case 'Trip.com': {
      return `https://ar.trip.com/hotels/list?keyword=${encodedCity}&allianceid=${marker}&curr=${currency}`;
    }
    case 'Hotels.com': {
      return `https://www.hotels.com/search.do?q-destination=${encodedCity}&camref=${marker}`;
    }
    case 'WayAway': {
      return `https://wayaway.io/flights?marker=${marker}&origin=&destination=${encodedCity}`;
    }
    case 'GetYourGuide': {
      return `https://getyourguide.com/?partner_id=${marker}&q=${encodedCity}`;
    }
    default:
      return `https://www.booking.com/searchresults.html?ss=${encodedCity}&aid=${marker}`;
  }
}

// Currency Conversion Helpers
export interface CurrencyInfo {
  code: string;
  symbol: string;
  rateToUSD: number; // 1 USD = rate units
  label_ar: string;
}

export const SUPPORTED_CURRENCIES: CurrencyInfo[] = [
  { code: 'USD', symbol: '$', rateToUSD: 1, label_ar: 'دولار أمريكي ($)' },
  { code: 'EUR', symbol: '€', rateToUSD: 0.92, label_ar: 'يورو (€)' },
  { code: 'SAR', symbol: 'ر.س', rateToUSD: 3.75, label_ar: 'ريال سعودي (SAR)' },
  { code: 'AED', symbol: 'د.إ', rateToUSD: 3.67, label_ar: 'درهم إماراتي (AED)' },
  { code: 'TND', symbol: 'د.ت', rateToUSD: 3.10, label_ar: 'دينار تونسي (TND)' },
];

export function convertPrice(amountInUSD: number, currencyCode: string): string {
  const curr = SUPPORTED_CURRENCIES.find((c) => c.code === currencyCode) || SUPPORTED_CURRENCIES[0];
  const converted = Math.round(amountInUSD * curr.rateToUSD);
  return `${curr.symbol} ${converted.toLocaleString()}`;
}
