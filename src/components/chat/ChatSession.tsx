import { ChatMessage, ChatSidebar, ChatInput } from "@/components/chat";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Separator } from "@/components/ui/separator";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { Button } from "../ui/button";
import { Ellipsis, Upload } from "lucide-react";
import type { Message } from "./ChatMessage";

type ChatSessionProps = {
  messages: Message[];
  onSend?: (message: Message) => void;
  isLoading?: boolean;
};

export default function ChatSession({ messages, onSend, isLoading }: ChatSessionProps) {
  const fakeMessages: Message[] = [
    {
      role: "user",
      content: "Hello, how can I get GitHub badges?",
      timestamp: new Date().toISOString(),
    },
    {
      role: "assistant",
      content:
        "You can earn GitHub badges by completing various activities on GitHub, such as contributing to repositories, creating issues, and more.",
      timestamp: new Date().toISOString(),
    },
    {
      role: "user",
      content: "Can you show me some examples?",
      timestamp: new Date().toISOString(),
    },
    {
      role: "assistant",
      content:
        "Sure! Here are some examples of GitHub badges you can earn:\n\n- First Pull Request\n- First Issue\n- First Commit\n- Repository Starred",
      timestamp: new Date().toISOString(),
    },
    {
      role: "user",
      content: "Thanks! How do I get the First Pull Request badge?",
      timestamp: new Date().toISOString(),
    },
    {
      role: "assistant",
      content:
        "To get the First Pull Request badge, you need to create your first pull request on a repository. Once it's merged, you'll receive the badge.",
      timestamp: new Date().toISOString(),
    },
    {
      role: "user",
      content: "Great! I'll try that.",
      timestamp: new Date().toISOString(),
    },
    {
      role: "assistant",
      content: "Good luck! Let me know if you need any help.",
      timestamp: new Date().toISOString(),
    },
    {
      role: "user",
      content: "What about the First Issue badge?",
      timestamp: new Date().toISOString(),
    },
    {
      role: "assistant",
      content:
        "To earn the First Issue badge, you need to create your first issue in a repository. Once it's closed, you'll receive the badge.",
      timestamp: new Date().toISOString(),
    },
    {
      role: "user",
      content: "Thanks for the info!",
      timestamp: new Date().toISOString(),
    },
    {
      role: "assistant",
      content:
        "You're welcome! If you have any more questions, feel free to ask.",
      timestamp: new Date().toISOString(),
    },
    {
      role: "user",
      content: "How do I get the Repository Starred badge?",
      timestamp: new Date().toISOString(),
    },
    {
      role: "assistant",
      content:
        "To earn the Repository Starred badge, you need to star a repository. Once you've starred your first repository, you'll receive the badge.",
      timestamp: new Date().toISOString(),
    },
    {
      role: "user",
      content: "Awesome! Thanks for your help.",
      timestamp: new Date().toISOString(),
    },
    {
      role: "assistant",
      content: "No problem! Happy coding!",
      timestamp: new Date().toISOString(),
    },
  ];

  return (
    <SidebarProvider>
      <ChatSidebar />
      <SidebarInset className="overflow-hidden" style={{ height: 'calc(100dvh - (8.5px * 2))'}}>
        <header className="absolute top-0 w-full flex h-16 shrink-0 items-center gap-2 rounded-t-md bg-[hsla(0,0%,4%,.85)] px-4 backdrop-blur-xs z-20">
          <div className="flex items-center gap-2 px-4">
            <SidebarTrigger className="-ml-1" />
            <Separator
              orientation="vertical"
              className="mr-2 data-[orientation=vertical]:h-4"
            />
            <span className="text-md text-muted-foreground">
              Session {messages.length} Messages
            </span>

            <div className="absolute right-0 flex items-center gap-2 px-6 ml-auto">
              <Button
                variant={"ghost"}
                className="flex items-center gap-2 rounded-lg"
              >
                <Upload className="size-4 text-foreground" />
                <span className="text-md">Upload</span>
              </Button>

              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant={"ghost"}
                    className="flex items-center aspect-square rounded-lg"
                  >
                    <Ellipsis className="size-4 text-foreground" />
                    <span className="sr-only">More options</span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-48" side="bottom" align="end">
                  <DropdownMenuItem>
                    <span>Settings</span>
                    <DropdownMenuShortcut>⌘,</DropdownMenuShortcut>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <span>Help</span>
                    <DropdownMenuShortcut>F1</DropdownMenuShortcut>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>
                    <span>Logout</span>
                    <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        </header>
        <main className="overflow-y-scroll h-full w-full relative flex justify-center rounded-b-2xl pt-20 mb-35 ">
          <section
            id="chatMessages"
            className="h-full flex justify-center w-full rounded-b-2xl"
          >
            <div
              id="chat"
              className="max-w-2xl h-full w-full flex flex-col gap-8 pb-5"
            >
              {messages.map((message, index) => (
                <ChatMessage
                  key={index}
                  role={message.role}
                  content={message.content}
                />
              ))}
            </div>
          </section>
          <div className="max-w-2xl w-full fixed bottom-0 mb-5">
            <ChatInput onSend={onSend} props={{ autoFocus: true }} loading={isLoading} />
          </div>
        </main>
      </SidebarInset>
    </SidebarProvider>
  );
}
