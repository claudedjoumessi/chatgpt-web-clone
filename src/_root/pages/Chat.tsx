import { ChatWelcome } from "@/components/chat";
import { type ChatMessage, useGroqChat } from "@/hooks/useGroqChat";
import ChatSession from "@/components/chat/ChatSession";
import React from "react";

const Chat = () => {
  const [messages, setMessages] = React.useState<ChatMessage[]>([]);
  const [isLoading, setIsLoading] = React.useState(false);
  const { sendMessage } = useGroqChat();

  const handleSend = async (message: ChatMessage) => {

    const userMessage: ChatMessage = { role: "user", content: message.content };
    const newMessages = [...messages, userMessage];

    setMessages(newMessages);
    setIsLoading(true);
    const assistantReply = await sendMessage(newMessages);
    if (assistantReply) {
      setMessages([
        ...newMessages,
        { role: "assistant", content: assistantReply },
      ]);
      setIsLoading(false);
    }
  };

  return (
    <>
      {messages.length === 0 ? (
        <ChatWelcome onSend={handleSend} />
      ) : (
        <ChatSession
          messages={messages}
          onSend={handleSend}
          isLoading={isLoading}
        />
      )}
    </>
  );
};

export default Chat;
