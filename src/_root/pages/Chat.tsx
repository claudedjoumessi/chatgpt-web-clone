import { ChatWelcome } from "@/components/chat";
import type { Message } from "@/components/chat/ChatMessage";
import ChatSession from "@/components/chat/ChatSession";
import React from "react";

const Chat = () => {
  const [messages, setMessages] = React.useState<Message[]>([]);
  const [isLoading, setIsLoading] = React.useState(false);

  const handleSend = (message: Message) => {
    setMessages((prev) => [...prev, message]);
    setIsLoading(true);
    console.log("Message sent:", message);
    
    // Simulate sending the message to an API or processing it
    setTimeout(() => {
      const reply: Message = {
        role: "assistant",
        content: `You said: "${message.content}" 🤖`,
      };
      setMessages((prev) => [...prev, reply]);
      setIsLoading(false);
    }, 2500);
  };

  return (
    <>
      {messages.length === 0 ? (
        <ChatWelcome onSend={handleSend} />
      ) : (
        <ChatSession messages={messages} onSend={handleSend} isLoading={isLoading} />
      )}
    </>
  );
};

export default Chat;
