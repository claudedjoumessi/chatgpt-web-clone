import { cn } from "@/lib/utils";
import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

export type ChatRole = "user" | "assistant";

export type Message = {
  role: ChatRole;
  content: string;
  timestamp?: string;
};

const ChatMessage = ({ role, content, timestamp }: Message) => {
  return (
    <div
      className={`${cn(
        "relative flex items-center py-1",
        role === "user" ? "justify-end" : "justify-start"
      )}`}
    >
      {role === "assistant" ? (
        <Avatar
          className={"h-full mt-6 absolute left-[-32px] flex items-start"}
        >
          <AvatarImage
            src="/assets/images/chatgpt-icon.svg"
            alt="Assistant Avatar"
            className="size-7"
          />
          <AvatarFallback>{"A"}</AvatarFallback>
        </Avatar>
      ) : (
        <></>
      )}
      <div
        className={`${cn(
          "px-5 py-2.5 rounded-2xl max-w-lg",
          role === "user" ? "bg-neutral-800 max-w-lg" : ""
        )}`}
      >
        <span>{content}</span>
      </div>
    </div>
  );
};

export default ChatMessage;
