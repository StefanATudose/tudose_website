import { Message } from "@/app/types";

interface ChatMessageProps {
  message: Message;
}

export function ChatMessage({ message }: ChatMessageProps) {
  return (
    <div
      className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}
    >
      <div
        className={`max-w-[80%] p-3 rounded-2xl ${
          message.sender === "user"
            ? "bg-purple-500 text-white rounded-br-md"
            : "bg-white/10 text-white rounded-bl-md"
        }`}
      >
        <p className="text-sm">{message.text}</p>
      </div>
    </div>
  );
}