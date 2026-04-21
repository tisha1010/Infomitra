export async function fetchFromGemini(query, language) {
  const prompt = `You are INFOMITRA, an assistant that explains Indian government documents and schemes in simple, clear language.

Query: ${query}
Language: ${language}

- Use **Markdown** formatting (## Headings, bullet points, numbered lists).  
- Keep answers clean, readable, and separated by sections.  
- Use emojis sparingly at the start of section titles.  
- Do NOT return everything in one paragraph. 
-if the query is not related to goverment scheme or document then respond with "Sorry, I can only help with government documents and schemes."
Provide the answer in this format:

📘 What is it?
- Short explanation in 2-3 sentences.

⭐ Why is it important?
- Bullet points explaining benefits.

✅ Eligibility
- Bullet points or short list.

🗂️ Required Documents
- Bullet points.

🛠️ Step-by-Step Application Process
1. Step one
2. Step two
3. Step three

🌐 Official Website / Reference Link
- Provide an official .gov.in or reliable reference link (if available).
Make sure each section starts on a new line and is clearly separated.`;


////

  try {
    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${process.env.GEMINI_API_KEY}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          contents: [{ parts: [{ text: prompt }] }],
        }),
      }
    );

    const data = await response.json();
    console.log("Gemini API raw:", data);

    if (data.candidates && data.candidates[0].content.parts[0].text) {
      return data.candidates[0].content.parts[0].text;
    } else {
      return "⚠️ No valid response from Gemini.";
    }
  } catch (error) {
    console.error("Gemini fetch error:", error);
    return "⚠️ Error fetching response.";
  }
}
