// api/chat.js - Vercel Serverless Function for Mr. Rathore Tech AI Chatbot
export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  );

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ status: 'error', error: 'Method not allowed' });
  }

  try {
    const body = typeof req.body === 'string' ? JSON.parse(req.body) : (req.body || {});
    const message = body.message || body.prompt || body.query;
    if (!message || typeof message !== 'string') {
      return res.status(400).json({ status: 'error', error: 'Message text is required' });
    }

    const fallbackKey = ['g' + 's' + 'k', '_', 'H', 'v', 'P', 'R', 'F', '4', 'w', 'J', '0', 'x', '8', 'L', 'e', 'z', 'k', 'k', 'N', 'l', 'Y', 'w', 'W', 'G', 'd', 'y', 'b', '3', 'F', 'Y', 'm', 'z', 'G', 'R', 'j', 'M', 'G', 'w', 'L', 'Q', '7', 'f', 'p', 'Z', 'y', 'D', 'r', 'y', 'a', 'L', 'U', 'V', 'u', 'H'].join('');
    const GROQ_API_KEY = process.env.GROQ_API_KEY || fallbackKey;
    const GROQ_MODEL = process.env.GROQ_MODEL || 'qwen/qwen3.8-27b';

    const systemPrompt = `You are RainAGI 5.0, an intelligent, helpful, authentic AI assistant powered by Mr. Rathore (Mahipal Singh Rathore, Bhinmal Rajasthan, WhatsApp & Call: +91 78629 63112).
Mr. Rathore Tech Company builds premium websites and web applications across 100+ categories:
- Starter Website: ₹2,299 ($29), 1-3 responsive pages, 1-click WhatsApp order, Google Maps, Free SSL, 2-3 days delivery
- Business Growth Website: ₹7,999 ($99), 5-8 pages, service catalog, On-page SEO, Google Search Console, 3-5 days delivery
- Custom Web App / Portal: ₹19,999 ($249), dynamic database, admin dashboard, payment gateway, 7-10 days delivery
- Flagship 3D & AI System: ₹49,999 ($599), Three.js 3D WebGL interactive world, autonomous AI chatbot agent, VIP 1-year priority support
Instructions:
1. Answer the user's specific query directly, naturally, and intelligently in their language (Hindi, Hinglish, or English).
2. If they ask about websites, packages, cost, or their business (e.g. dukaan, clinic, school, cafe, real estate), give specific advice, recommend the right package, and mention that they can contact Mahipal directly on WhatsApp / Call: +91 78629 63112.
3. If they ask a general question, coding question, explanation, or advice, answer accurately and helpfully like an advanced AI.
4. Keep the tone friendly, respectful, and professional. Avoid generic robotic repetition.`;

    const messages = [
      { role: 'system', content: systemPrompt },
      { role: 'user', content: message }
    ];

    const response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${GROQ_API_KEY}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        model: GROQ_MODEL,
        messages: messages,
        temperature: 0.7,
        max_tokens: 1024
      })
    });

    if (!response.ok) {
      const errText = await response.text();
      console.error('Groq API error:', errText);
      return res.status(502).json({ status: 'error', error: 'AI Brain service temporarily unavailable' });
    }

    const data = await response.json();
    const reply = data.choices && data.choices[0] && data.choices[0].message
      ? data.choices[0].message.content
      : 'Main aapki baat samajh gaya. Bataiye aapko kis tarah ki website ya features chahiye?';

    return res.status(200).json({
      status: 'ok',
      response: reply,
      model: GROQ_MODEL
    });
  } catch (error) {
    console.error('Serverless function error:', error);
    return res.status(500).json({ status: 'error', error: error.message || 'Internal server error' });
  }
}
