import React, { useState, useRef, useEffect } from 'react';
import { Globe, ChevronDown, Check, Coins } from 'lucide-react';
import { LanguageCode, SUPPORTED_LANGUAGES } from '../translations';

interface LanguageSelectorProps {
  currentLang: LanguageCode;
  onLanguageChange: (newLang: LanguageCode) => void;
  currentCurrency: string;
  onCurrencyChange?: (newCurrency: string) => void;
}

export const LanguageSelector: React.FC<LanguageSelectorProps> = ({
  currentLang,
  onLanguageChange,
  currentCurrency,
  onCurrencyChange,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const activeLangObj =
    SUPPORTED_LANGUAGES.find((l) => l.code === currentLang) || SUPPORTED_LANGUAGES[0];

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSelect = (langCode: LanguageCode, defaultCurr: string) => {
    onLanguageChange(langCode);
    if (onCurrencyChange) {
      onCurrencyChange(defaultCurr);
    }
    setIsOpen(false);
  };

  return (
    <div className="relative inline-block text-left" ref={dropdownRef}>
      {/* Trigger Button */}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-slate-900/90 border border-slate-700/80 text-xs font-bold text-slate-200 hover:text-white hover:border-cyan-500/50 transition-all shadow-md backdrop-blur-md active:scale-95"
        title="Language & Region Selector"
      >
        <span className="text-base leading-none">{activeLangObj.flag}</span>
        <span className="font-semibold">{activeLangObj.nativeName}</span>
        <span className="text-[10px] px-1.5 py-0.2 rounded bg-slate-800 text-cyan-300 font-mono border border-slate-700/60 hidden sm:inline">
          {currentCurrency}
        </span>
        <ChevronDown className={`w-3.5 h-3.5 text-slate-400 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {/* Glassmorphic Dropdown Menu */}
      {isOpen && (
        <div className="absolute right-0 rtl:right-auto rtl:left-0 mt-2 w-56 rounded-2xl bg-[#0d1322]/95 border border-slate-800 shadow-2xl backdrop-blur-xl z-50 overflow-hidden divide-y divide-slate-800/80 animate-in fade-in slide-in-from-top-2 duration-150">
          <div className="p-2 text-[10px] font-extrabold text-slate-400 uppercase tracking-wider px-3 flex items-center justify-between">
            <span>Choose Language / اللغة</span>
            <Globe className="w-3.5 h-3.5 text-cyan-400" />
          </div>

          <div className="py-1 max-h-64 overflow-y-auto custom-scrollbar">
            {SUPPORTED_LANGUAGES.map((lang) => {
              const isSelected = lang.code === currentLang;
              return (
                <button
                  key={lang.code}
                  onClick={() => handleSelect(lang.code, lang.defaultCurrency)}
                  className={`w-full flex items-center justify-between px-3 py-2 text-xs font-medium transition-colors ${
                    isSelected
                      ? 'bg-cyan-950/80 text-cyan-300 border-r-2 rtl:border-r-0 rtl:border-l-2 border-cyan-400'
                      : 'text-slate-300 hover:bg-slate-800/80 hover:text-white'
                  }`}
                >
                  <div className="flex items-center gap-2.5">
                    <span className="text-base leading-none">{lang.flag}</span>
                    <div className="text-left rtl:text-right">
                      <span className="block font-semibold">{lang.nativeName}</span>
                      <span className="text-[10px] text-slate-400 block">{lang.name}</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-slate-900 text-amber-400 border border-slate-800">
                      {lang.defaultCurrency}
                    </span>
                    {isSelected && <Check className="w-4 h-4 text-cyan-400" />}
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};
