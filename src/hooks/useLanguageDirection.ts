import { useEffect } from 'react';
import { LanguageCode, SUPPORTED_LANGUAGES } from '../translations';

export function useLanguageDirection(lang: LanguageCode) {
  useEffect(() => {
    const langObj = SUPPORTED_LANGUAGES.find((l) => l.code === lang);
    const dir = langObj?.dir || (lang === 'ar' ? 'rtl' : 'ltr');

    document.documentElement.setAttribute('dir', dir);
    document.documentElement.setAttribute('lang', lang);
    document.body.dir = dir;

    // Store in localStorage for persistent session
    try {
      localStorage.setItem('stayr_lang', lang);
    } catch (e) {
      console.warn('LocalStorage save failed:', e);
    }

    // Dispatch custom event if external components need immediate recalculation
    window.dispatchEvent(
      new CustomEvent('language-direction-change', {
        detail: { dir, lang },
      })
    );
  }, [lang]);
}
