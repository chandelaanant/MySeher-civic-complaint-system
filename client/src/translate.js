// export async function translateText(text) {
//   const response = await fetch("https://libretranslate.de/translate", {
//     method: "POST",
//     headers: { "Content-Type": "application/json" },
//     body: JSON.stringify({
//       q: text,
//       source: "en",
//       target: "hi",
//       format: "text"
//     }),
//   });

//   const data = await response.json();
//   console.log(`${text} → ${data.translatedText}`);
// }

// translate.js
// src/translate.js
export async function translateText(text, targetLang) {
  try {
    const response = await fetch("https://libretranslate.de/translate", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        q: text,
        source: "en",
        target: targetLang,
        format: "text"
      }),
    });
    const data = await response.json();
    return data.translatedText;
  } catch (err) {
    console.error("Translation error:", err);
    return text; // fallback to English
  }
}
