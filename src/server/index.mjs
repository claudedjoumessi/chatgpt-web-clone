// backend/chat.ts
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { Groq } from 'groq-sdk';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const groq = new Groq({ apiKey: process.env.VITE_GROQ_API_KEY });

app.post('/chat', async (req, res) => {
  const { messages } = req.body;

  try {
    const completion = await groq.chat.completions.create({
      model: 'llama3-70b-8192',
      messages,
      temperature: 0.7,
      max_completion_tokens: 150,
    });

    const reply = completion.choices?.[0]?.message?.content;
    res.json({ reply });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.listen(8000, () => {
  console.log('Groq server running on http://localhost:8000');
});
