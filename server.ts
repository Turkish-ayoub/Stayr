import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI } from "@google/genai";

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // API Route: AI Travel Advisor
  app.post("/api/gemini/advisor", async (req, res) => {
    try {
      const apiKey = process.env.GEMINI_API_KEY;
      if (!apiKey) {
        return res.status(500).json({ error: "Gemini API key is not configured on the server." });
      }

      const { prompt, selectedCity, lang = "ar", chatHistory = [] } = req.body;

      if (!prompt || typeof prompt !== "string") {
        return res.status(400).json({ error: "Prompt is required." });
      }

      const ai = new GoogleGenAI({
        apiKey,
        httpOptions: {
          headers: {
            "User-Agent": "aistudio-build",
          },
        },
      });

      const cityContext = selectedCity
        ? `المدينة المختارة حالياً: ${selectedCity.name_ar} (${selectedCity.name_en}) - الدولة: ${selectedCity.country} - كود المطار: ${selectedCity.iata} - المنطقة السياحية: ${selectedCity.zone === 'green' ? 'منطقة ميزانية اقتصادي (< $80)' : selectedCity.zone === 'yellow' ? 'منطقة متوسطة ممتازة ($80-$250)' : 'منطقة فارهة وحصرية (> $250)'} - متوسط سعر الليلة: $${selectedCity.avg_hotel_price} - تقييم الجودة: ${selectedCity.quality_score}/10.`
        : "لم يتم اختيار مدينة بعينها حالياً.";

      const systemInstruction = `أنت "المستشار الذكي للسياحة والفندقة العالمية 195" (Global City & Hotel Tourism Intelligence Advisor)، خبير واستشاري راقي متخصص في تخطيط السفر الفاخر والاقتصادي، تحسين ميزانيات الفنادق، صفقات الطيران، والتحليل الجغرافي السياحي.
أجب باللغة المناسبة للمستخدم (إذا كان السؤال باللغة العربية أو لغة التطبيق عربية أجب بالعربية الفصيحة المنسقة بأناقة، أو بالإنجليزية إذا طُلب ذلك).

سياق الحسابات والمدينة الحالية:
${cityContext}

إرشادات الإجابة:
1. قدم نصائح دقيقة ومباشرة وعملية (مثلاً: أفضل أحياء السكن، كيفية تجنب ضرائب السياحة الفندقية المحلية، أفضل مواسم الحجز، وأسرار الحصول على أفضل الأسعار عبر Booking و Agoda و WayAway/Aviasales).
2. استخدم التنسيق الأنيق بالنقاط والعناوين الموزعة.
3. تجنب الإطالة المفرطة مع إعطاء قيمة عالية ومعلومات عملية.
4. إذا سألك المستخدم عن المقارنة بين المدن أو اقتراح مدن في المنطقة الخضراء أو الصفراء أو الحمراء، استخدم معرفتك الواسعة بالوجهات العالمية.`;

      // Build contents with history if provided
      const contents: Array<{ role: "user" | "model"; parts: Array<{ text: string }> }> = [];

      if (Array.isArray(chatHistory)) {
        for (const item of chatHistory) {
          if (item.sender === "user") {
            contents.push({ role: "user", parts: [{ text: item.text }] });
          } else if (item.sender === "ai") {
            contents.push({ role: "model", parts: [{ text: item.text }] });
          }
        }
      }

      // Add current user prompt
      contents.push({ role: "user", parts: [{ text: prompt }] });

      const response = await ai.models.generateContent({
        model: "gemini-3.6-flash",
        contents,
        config: {
          systemInstruction,
          temperature: 0.7,
        },
      });

      const replyText = response.text || "عذراً، لم أتمكن من استخراج رد مناسب. يرجى إعادة المحاولة.";

      return res.json({ text: replyText });
    } catch (error: any) {
      console.error("Gemini API Error:", error);
      return res.status(500).json({
        error: error.message || "حدث خطأ أثناء التواصل مع المستشار الذكي.",
      });
    }
  });

  // Vite middleware for dev or static serving for prod
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (_req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Global Hotel Tourism Intelligence server running on http://0.0.0.0:${PORT}`);
  });
}

startServer();
