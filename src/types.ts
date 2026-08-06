export type TourismZone = 'green' | 'yellow' | 'red';

export type Region = 'Asia' | 'Europe' | 'Americas' | 'MENA' | 'Africa' | 'Oceania';

export interface TravelpayoutsLinks {
  booking_url: string;
  agoda_url: string;
  flight_url: string;
  tours_url: string;
}

export interface HotelOffer {
  id: string;
  hotel_name_ar: string;
  hotel_name_en: string;
  stars: number;
  badge_ar: string;
  badge_en: string;
  price_per_night: number;
  rating: number;
  provider: 'Booking.com' | 'Agoda' | 'Trip.com';
  image_url?: string;
  deal_url: string;
}

export interface TourExperience {
  title_ar: string;
  title_en: string;
  duration: string;
  price: number;
  rating: number;
  reviews_count: number;
  url: string;
}

export interface CityData {
  id: string;
  name_ar: string;
  name_en: string;
  country_ar: string;
  country_en: string;
  region: Region;
  iata: string;
  coordinates: [number, number]; // [lat, lng]
  zone: TourismZone; // green = budget (<$80), yellow = mid-tier ($80-$250), red = luxury (>$250)
  avg_hotel_price: number;
  quality_score: number; // 1-10
  best_season_ar: string;
  best_season_en: string;
  popular_district_ar: string;
  popular_district_en: string;
  hotel_deals_count: number;
  active_flights_count: number;
  travelpayouts: TravelpayoutsLinks;
  curated_hotels: HotelOffer[];
  experiences: TourExperience[];
  description_ar: string;
  description_en: string;
}

export interface ChatMessage {
  id: string;
  sender: 'user' | 'ai';
  text: string;
  timestamp: string;
}

export type ViewMode = 'map' | 'grid' | 'table' | 'distribution' | 'stats';
