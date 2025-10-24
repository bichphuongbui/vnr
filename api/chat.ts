// Vercel Serverless Function
// File này sẽ chạy trên server, giấu API key khỏi client

import type { VercelRequest, VercelResponse } from '@vercel/node';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  // Chỉ cho phép POST
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  // Lấy API key từ environment (không expose ra client)
  const GROQ_API_KEY = process.env.GROQ_API_KEY;
  
  if (!GROQ_API_KEY) {
    return res.status(500).json({ error: 'Server configuration error' });
  }

  try {
    const { messages, temperature = 0.7, max_tokens = 1024 } = req.body;

    const response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${GROQ_API_KEY}`
      },
      body: JSON.stringify({
        model: 'llama-3.1-8b-instant',
        messages: [
          {
            role: 'system',
            content: 'Bạn là trợ lý AI chuyên về lịch sử Việt Nam giai đoạn 1945-1954, Cách mạng tháng Tám và kháng chiến chống Pháp. Hãy trả lời bằng tiếng Việt, chính xác và dễ hiểu.'
          },
          ...messages
        ],
        temperature,
        max_tokens
      })
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      return res.status(response.status).json(errorData);
    }

    const data = await response.json();
    return res.status(200).json(data);
    
  } catch (error) {
    console.error('API Error:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
}
