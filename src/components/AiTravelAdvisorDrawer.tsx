import React, { useState, useRef, useEffect } from 'react';
import { X, Bot, Send, Copy, Check, Edit2, Sparkles, RefreshCw, AlertCircle, Building2 } from 'lucide-react';
import { CityData, ChatMessage } from '../types';
import { Translation, LanguageCode } from '../translations';

interface AiTravelAdvisorDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  selectedCity: CityData | null;
  t: Translation;
  lang: LanguageCode;
}

export const AiTravelAdvisorDrawer: React.FC<AiTravelAdvisorDrawerProps> = ({
  isOpen,
  onClose,
  selectedCity,
  t,
  lang,
}) => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'welcome_1',
      sender: 'ai',
      text: lang === 'ar'
        ? 'أهلاً بك! أنا "المستشار الذكي للسياحة والفندقة العالمية". كيف يمكنني مساعدتك اليوم؟ يمكنك استشارتي في التخطيط، خفض أسعار الفنادق، أو اختيار أفضل المناطق للسكن.'
        : 'Welcome! I am your Global Tourism & Hotel Intelligence AI Advisor. How can I assist your trip planning or hotel budget strategy today?',
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    }
  ]);

  const [inputPrompt, setInputPrompt] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const chatBottomRef = useRef<HTMLDivElement>(null);

  // Auto-expand textarea height dynamically
  const handleTextareaChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInputPrompt(e.target.value);
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
      textareaRef.current.style.height = `${Math.min(textareaRef.current.scrollHeight, 180)}px`;
    }
  };

  // Scroll to bottom on new message
  useEffect(() => {
    chatBottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isLoading]);

  if (!isOpen) return null;

  // Handle Send Message
  const handleSendMessage = async (textToSend?: string) => {
    const promptText = (textToSend || inputPrompt).trim();
    if (!promptText || isLoading) return;

    const userMsg: ChatMessage = {
      id: `usr_${Date.now()}`,
      sender: 'user',
      text: promptText,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages(prev => [...prev, userMsg]);
    if (!textToSend) {
      setInputPrompt('');
      if (textareaRef.current) {
        textareaRef.current.style.height = 'auto';
      }
    }

    setIsLoading(true);

    try {
      const response = await fetch('/api/gemini/advisor', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          prompt: promptText,
          selectedCity,
          lang,
          chatHistory: messages.slice(-6)
        })
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'فشل الاتصال بالمستشار الذكي.');
      }

      const aiMsg: ChatMessage = {
        id: `ai_${Date.now()}`,
        sender: 'ai',
        text: data.text || 'لم يتوفر رد من النظام.',
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };

      setMessages(prev => [...prev, aiMsg]);
    } catch (err: any) {
      const errorMsg: ChatMessage = {
        id: `err_${Date.now()}`,
        sender: 'ai',
        text: `⚠️ ${err.message || 'حدث خطأ أثناء معالجة استفسارك.'}`,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      setMessages(prev => [...prev, errorMsg]);
    } finally {
      setIsLoading(false);
    }
  };

  // Copy Message to Clipboard
  const handleCopyText = (msgId: string, text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(msgId);
    setTimeout(() => setCopiedId(null), 2000);
  };

  // Edit User Message (re-load into input)
  const handleEditUserMsg = (text: string) => {
    setInputPrompt(text);
    if (textareaRef.current) {
      textareaRef.current.focus();
      textareaRef.current.style.height = 'auto';
      textareaRef.current.style.height = `${Math.min(textareaRef.current.scrollHeight, 180)}px`;
    }
  };

  // Preset Chips
  const presetChips = selectedCity ? [
    { label_ar: `خطة سفر 3 أيام في ${selectedCity.name_ar}`, label_en: `3-Day Itinerary for ${selectedCity.name_en}` },
    { label_ar: `أفضل الأحياء للسكن في ${selectedCity.name_ar}`, label_en: `Best stay neighborhoods in ${selectedCity.name_en}` },
    { label_ar: `كيفية توفير حجز الفنادق بـ ${selectedCity.name_ar}`, label_en: `Hotel savings hacks for ${selectedCity.name_en}` },
    { label_ar: `رسوم السياحة والضرائب بـ ${selectedCity.name_ar}`, label_en: `Tourist tax & fees in ${selectedCity.name_en}` }
  ] : [
    { label_ar: "أفضل المدن لميزانية أقل من 80$/ليلة", label_en: "Top Budget Cities < $80/night" },
    { label_ar: "استراتيجية حجز الفنادق قبل السفر", label_en: "Hotel booking timing strategy" },
    { label_ar: "مقارنة بين دبي وبانكوك وطوكيو", label_en: "Compare Dubai vs Bangkok vs Tokyo" },
    { label_ar: "نصائح الطيران وخصومات Travelpayouts", label_en: "Flight hacks & Travelpayouts tips" }
  ];

  return (
    <div className="fixed inset-0 z-[10000] flex justify-start rtl:justify-start ltr:justify-end bg-black/70 backdrop-blur-sm transition-opacity animate-in fade-in duration-300">
      
      {/* Side Panel Container */}
      <div className="relative w-full max-w-lg h-full bg-[#0a0f1d] border-r rtl:border-r-0 rtl:border-l border-slate-800 shadow-2xl flex flex-col overflow-hidden text-slate-100 animate-in slide-in-from-left rtl:slide-in-from-right duration-300">
        
        {/* Panel Header */}
        <div className="p-4 bg-slate-950/90 border-b border-slate-800 flex items-center justify-between gap-3">
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-xl bg-gradient-to-br from-indigo-500/20 to-purple-500/20 border border-indigo-500/40 text-cyan-300">
              <Bot className="w-5 h-5 text-cyan-300 animate-pulse" />
            </div>
            <div>
              <h3 className="text-sm font-bold text-slate-100 flex items-center gap-1.5">
                <span>{t.aiPromptTitle}</span>
                <Sparkles className="w-3.5 h-3.5 text-amber-300" />
              </h3>
              {selectedCity ? (
                <p className="text-[11px] text-cyan-400 font-medium">
                  {lang === 'ar' ? `التركيز الحالي: ${selectedCity.name_ar} (${selectedCity.iata})` : `Context: ${selectedCity.name_en} (${selectedCity.iata})`}
                </p>
              ) : (
                <p className="text-[11px] text-slate-400">
                  {lang === 'ar' ? 'مستشار Stayr الذكي للسياحة والفندقة' : 'Stayr AI Travel & Hotel Advisor'}
                </p>
              )}
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl bg-slate-900 text-slate-400 hover:text-white hover:bg-slate-800 border border-slate-800 transition-all"
            title={t.close}
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Chat History Body */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {messages.map((msg) => {
            const isUser = msg.sender === 'user';

            return (
              <div
                key={msg.id}
                className={`flex flex-col ${isUser ? 'items-end' : 'items-start'} gap-1`}
              >
                {/* Bubble Container */}
                <div
                  className={`relative max-w-[88%] p-3.5 rounded-2xl text-xs sm:text-sm leading-relaxed border shadow-md ${
                    isUser
                      ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white border-indigo-500/40 rounded-br-none rtl:rounded-br-2xl rtl:rounded-bl-none'
                      : 'bg-slate-900/90 text-slate-100 border-slate-800 rounded-bl-none rtl:rounded-bl-2xl rtl:rounded-br-none'
                  }`}
                >
                  {/* Text Content */}
                  <div className="break-words whitespace-pre-wrap font-sans">
                    {msg.text}
                  </div>

                  {/* Message Timestamp & Action Controls (Copy & Edit) */}
                  <div className="flex items-center justify-between gap-3 mt-2 pt-1.5 border-t border-white/10 text-[10px] opacity-80">
                    <span className="text-slate-300/80 font-mono">{msg.timestamp}</span>

                    <div className="flex items-center gap-1.5">
                      {/* Copy Button */}
                      <button
                        onClick={() => handleCopyText(msg.id, msg.text)}
                        className="p-1 rounded hover:bg-black/20 transition-all flex items-center gap-1 text-slate-200"
                        title={t.copyMsg}
                      >
                        {copiedId === msg.id ? (
                          <>
                            <Check className="w-3 h-3 text-emerald-300" />
                            <span className="text-[10px] text-emerald-300 font-bold">{t.copiedMsg}</span>
                          </>
                        ) : (
                          <>
                            <Copy className="w-3 h-3" />
                            <span className="text-[10px]">{t.copyMsg}</span>
                          </>
                        )}
                      </button>

                      {/* Edit Button (Only for User Messages) */}
                      {isUser && (
                        <button
                          onClick={() => handleEditUserMsg(msg.text)}
                          className="p-1 rounded hover:bg-black/20 transition-all flex items-center gap-1 text-slate-200"
                          title={t.editMsg}
                        >
                          <Edit2 className="w-3 h-3" />
                          <span className="text-[10px]">{t.editMsg}</span>
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}

          {/* Loading Indicator */}
          {isLoading && (
            <div className="flex items-center gap-2 p-3 rounded-2xl bg-slate-900/90 border border-slate-800 text-xs text-cyan-300 max-w-[70%]">
              <RefreshCw className="w-4 h-4 animate-spin text-cyan-400" />
              <span>{lang === 'ar' ? 'جارٍ تحليل البيانات وصياغة الإجابة...' : 'Analyzing tourism intelligence data...'}</span>
            </div>
          )}

          <div ref={chatBottomRef} />
        </div>

        {/* Preset Chips Bar */}
        <div className="p-2.5 bg-slate-950/80 border-t border-slate-800/80 overflow-x-auto no-scrollbar flex items-center gap-2">
          {presetChips.map((chip, i) => (
            <button
              key={i}
              onClick={() => handleSendMessage(lang === 'ar' ? chip.label_ar : chip.label_en)}
              className="px-2.5 py-1 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-cyan-300 border border-slate-800 text-xs font-medium whitespace-nowrap transition-all"
            >
              ⚡ {lang === 'ar' ? chip.label_ar : chip.label_en}
            </button>
          ))}
        </div>

        {/* Textarea Input Footer (Textarea Fix) */}
        <div className="p-3 bg-slate-950 border-t border-slate-800">
          <div className="relative flex items-end gap-2 bg-slate-900 rounded-2xl p-2 border border-slate-800 focus-within:border-cyan-500/80 transition-all">
            
            {/* Auto-expanding Textarea */}
            <textarea
              ref={textareaRef}
              rows={2}
              value={inputPrompt}
              onChange={handleTextareaChange}
              onKeyDown={(e) => {
                if (e.key === 'Enter' && !e.shiftKey) {
                  e.preventDefault();
                  handleSendMessage();
                }
              }}
              placeholder={lang === 'ar' ? 'اكتب استفسارك هنا (مثلاً: ما هي أفضل الفنادق ومناطق السكن في هذه المدينة؟)...' : 'Type your tourism query here...'}
              className="w-full bg-transparent text-slate-100 text-xs sm:text-sm resize-none focus:outline-none p-1.5 min-h-[44px] max-h-[180px] break-words whitespace-pre-wrap leading-relaxed placeholder:text-slate-500 overflow-y-auto"
            />

            {/* Send Button */}
            <button
              onClick={() => handleSendMessage()}
              disabled={isLoading || !inputPrompt.trim()}
              className={`p-2.5 rounded-xl transition-all shadow-lg flex items-center justify-center shrink-0 ${
                isLoading || !inputPrompt.trim()
                  ? 'bg-slate-800 text-slate-600 cursor-not-allowed'
                  : 'bg-gradient-to-r from-indigo-600 to-cyan-600 text-white hover:brightness-110 active:scale-95'
              }`}
            >
              <Send className="w-4 h-4 rtl:rotate-180" />
            </button>

          </div>
        </div>

      </div>
    </div>
  );
};
