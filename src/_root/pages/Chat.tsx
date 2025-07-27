import { ChatWelcome } from "@/components/chat";
import ChatSession from "@/components/chat/ChatSession";
import React from "react";

const Chat = () => {
  const [messages, setMessages] = React.useState<string[]>([]);

  const handleSend = (message: string) => {
    setMessages((prev) => [...prev, message]);
    console.log("Message sent:", message);
    
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
