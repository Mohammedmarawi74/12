
import { GoogleGenAI, Type } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

export const generateProfessionalCopy = async (topic: string) => {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `حول هذا الموضوع إلى محتوى احترافي لإنفوجرافيك باللغة العربية: "${topic}". 
      أحتاج إلى: عنوان عريض، عنوان فرعي، نسبة مئوية (رقم)، تسمية للمقارنة، قيمتين للمقارنة، ووصف مفصل.`,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            title: { type: Type.STRING },
            subtitle: { type: Type.STRING },
            percentage: { type: Type.STRING },
            comparisonLabel: { type: Type.STRING },
            val1: { type: Type.STRING },
            val2: { type: Type.STRING },
            label1: { type: Type.STRING },
            label2: { type: Type.STRING },
            description: { type: Type.STRING }
          },
          required: ["title", "subtitle", "percentage", "description"]
        }
      }
    });

    if (response.text) {
      return JSON.parse(response.text.trim());
    }
    return null;
  } catch (error) {
    console.error("Gemini Error:", error);
    return null;
  }
};
