import { ChatWelcome } from "@/components/chat";
import type { Message } from "@/components/chat/ChatMessage";
import ChatSession from "@/components/chat/ChatSession";
import React from "react";

const Chat = () => {
  const [messages, setMessages] = React.useState<Message[]>([]);

  const handleSend = (message: Message) => {
    setMessages((prev) => [...prev, message]);
    console.log("Message sent:", message);
    
    // Simulate sending the message to an API or processing it
    setTimeout(() => {
      const reply: Message = {
        role: "assistant",
        content: `You said: "${message.content}" 🤖`,
      };
      setMessages((prev) => [...prev, reply]);
    }, 2000);
  };

  return (
    <>
      {messages.length === 0 ? (
        <ChatWelcome onSend={handleSend} />
      ) : (
        <ChatSession messages={messages} onSend={handleSend} />
      )}
    </>
  );
};

export default Chat;
