import { ChatSidebar } from "@/components/chat";
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
import { Ellipsis, Upload } from "lucide-react";
import { Button } from "../ui/button";
import ChatInput from "./ChatInput";

type ChatSessionProps = {
  messages: string[];
  onSend?: (message: string) => void;
};

export default function ChatSession({ messages, onSend }: ChatSessionProps) {
  return (
    <SidebarProvider>
      <ChatSidebar />
      <SidebarInset>
        <header className="sticky top-0 w-full flex h-16 shrink-0 items-center gap-2 rounded-t-md bg-[hsla(0,0%,4%,.85)] px-4 backdrop-blur-sm">
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
        <main className="h-full w-full flex justify-center  rounded-b-2xl">
          <div className="max-w-2xl w-full absolute bottom-0 mb-5">
            <ChatInput onSend={onSend} props={{ autoFocus: true }} />
          </div>
        </main>
      </SidebarInset>
    </SidebarProvider>
  );
}
