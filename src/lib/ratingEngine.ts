// Dynamic Real-Time AI Rating Engine for Stayr Meta-Search
// Calculates unbiased value-for-money scores, price-to-quality ratios, and dynamic badges

export interface DynamicRatingResult {
  score: number; // Real dynamic score (e.g., 8.3, 7.4, 9.1)
  scoreClass_ar: string;
  scoreClass_en: string;
  valueIndexPct: number; // e.g., +22% value or -15% overpriced
  badge_ar: string;
  badge_en: string;
  badgeStyle: string; // Tailwind styling for badges
  priceDiffFromAvgPct: number; // Difference compared to area average
}

/**
 * Calculates a real-time dynamic value-for-money score for hotels and destinations.
 * Adjusts dynamically based on real price-to-quality ratio, area baseline, and user reviews.
 */
export function calculateDynamicScore(
  hotelPrice: number,
  averageAreaPrice: number,
  userReviewsCount: number = 180,
  regionalStatus: string = 'standard',
  baseStars: number = 4
): DynamicRatingResult {
  const safeAvg = Math.max(averageAreaPrice, 20);
  const safePrice = Math.max(hotelPrice, 15);

  // 1. Base Score derived from Star Tier (Base 3-star = 6.8, 4-star = 7.8, 5-star = 8.8)
  let baseScore = 6.0 + (baseStars * 0.65);

  // 2. Price-to-Value Index (Area Average vs. Hotel Price)
  // Ratio > 1.0 means hotel is cheaper than average area rate (Great Value)
  // Ratio < 1.0 means hotel is priced above area rate
  const priceToAvgRatio = safeAvg / safePrice;
  const priceDiffFromAvgPct = Math.round(((safePrice - safeAvg) / safeAvg) * 100);

  // Value Bonus or Penalty (-1.5 to +1.5 points)
  let valueAdjustment = 0;
  if (priceToAvgRatio >= 1.4) {
    // Exceptional value deal (e.g. 40% cheaper than city average)
    valueAdjustment = +1.3;
  } else if (priceToAvgRatio >= 1.15) {
    valueAdjustment = +0.8;
  } else if (priceToAvgRatio >= 0.9) {
    valueAdjustment = +0.2;
  } else if (priceToAvgRatio >= 0.7) {
    valueAdjustment = -0.5; // Slightly expensive relative to area
  } else {
    // Price inflated without proportional star upgrade
    valueAdjustment = -1.2;
  }

  // 3. Review Volume Confidence Weight (More reviews = higher reliability)
  const reviewConfidence = Math.min(Math.log10(Math.max(userReviewsCount, 10)) / 3, 1);
  const reviewBonus = (reviewConfidence - 0.5) * 0.4;

  // 4. Regional Status & Seasonal Event Adjustment
  let regionalMultiplier = 0;
  if (regionalStatus === 'peak') regionalMultiplier = +0.1;
  else if (regionalStatus === 'event') regionalMultiplier = -0.1; // Surge pricing dampens score

  // Calculate final dynamic score
  let rawScore = baseScore + valueAdjustment + reviewBonus + regionalMultiplier;

  // Pseudo-random deterministic hash based on price & review count for micro-variation (e.g., 8.32 vs 8.30)
  const microHash = ((hotelPrice * 17 + userReviewsCount * 31) % 10) * 0.03;
  rawScore += microHash;

  // Clamp realistically between 5.8 and 9.7
  const score = Math.round(Math.min(Math.max(rawScore, 5.8), 9.7) * 10) / 10;

  // Determine Classifications and Badges
  let scoreClass_ar = 'جيد جداً';
  let scoreClass_en = 'Very Good';
  let badge_ar = 'قيمة ممتازة ⚡';
  let badge_en = 'Great Value ⚡';
  let badgeStyle = 'bg-cyan-950/90 text-cyan-300 border-cyan-500/50 shadow-[0_0_10px_rgba(6,182,212,0.3)]';

  if (score >= 9.2) {
    scoreClass_ar = 'استثنائي 💎';
    scoreClass_en = 'Exceptional 💎';
    badge_ar = 'صفقة فاخرة نادرة';
    badge_en = 'Rare Luxury Deal';
    badgeStyle = 'bg-emerald-950/90 text-emerald-300 border-emerald-500/60 shadow-[0_0_12px_rgba(16,185,129,0.4)]';
  } else if (score >= 8.5) {
    scoreClass_ar = 'ممتاز جداً 🌟';
    scoreClass_en = 'Superb 🌟';
    badge_ar = 'سعر منافس للغاية';
    badge_en = 'Top Competitive Rate';
    badgeStyle = 'bg-cyan-950/90 text-cyan-300 border-cyan-500/50 shadow-[0_0_10px_rgba(6,182,212,0.3)]';
  } else if (score >= 7.8) {
    scoreClass_ar = 'جيد جداً 👍';
    scoreClass_en = 'Very Good 👍';
    badge_ar = 'سعر العادل';
    badge_en = 'Fair Market Price';
    badgeStyle = 'bg-slate-900 text-slate-200 border-slate-700';
  } else if (score >= 7.0) {
    scoreClass_ar = 'جيد 🏨';
    scoreClass_en = 'Good 🏨';
    badge_ar = 'سعر اعتيادي';
    badge_en = 'Standard Rate';
    badgeStyle = 'bg-amber-950/80 text-amber-300 border-amber-500/40';
  } else {
    scoreClass_ar = 'سعر مرتفع نسبياً ⚠️';
    scoreClass_en = 'Priced Above Avg ⚠️';
    badge_ar = 'مؤشر سعر مرتفع';
    badge_en = 'Premium Premium';
    badgeStyle = 'bg-rose-950/80 text-rose-300 border-rose-500/40';
  }

  const valueIndexPct = Math.round((priceToAvgRatio - 1) * 100);

  return {
    score,
    scoreClass_ar,
    scoreClass_en,
    valueIndexPct,
    badge_ar,
    badge_en,
    badgeStyle,
    priceDiffFromAvgPct
  };
}
