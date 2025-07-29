import { useState } from 'react';

export type ChatMessage = {
  role: 'user' | 'assistant';
  content: string;
};

export const useGroqChat = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const sendMessage = async (chatHistory: ChatMessage[]): Promise<string | null> => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch('http://localhost:8000/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: chatHistory }),
      });

      const data = await response.json();
      if (!response.ok) throw new Error(data?.error || 'Groq failed');

      return data.reply ?? null;
    } catch (err: any) {
      setError(err.message);
      return null;
    } finally {
      setLoading(false);
    }
  };

  return { sendMessage, loading, error };
};
