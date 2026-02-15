import Image from "next/image";
import { ChatInput } from "./ChatInput";

interface CollapsedChatProps {
  inputValue: string;
  setInputValue: (value: string) => void;
  handleKeyDown: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  handleInputFocus: (e: React.FocusEvent<HTMLInputElement>) => void;
  handleSendMessage: () => void;
}

export function CollapsedChat({
  inputValue,
  setInputValue,
  handleKeyDown,
  handleInputFocus,
  handleSendMessage,
}: CollapsedChatProps) {
  return (
    <div className="flex-1 flex flex-col p-5">
      {/* Large header for collapsed state - much bigger on desktop */}
      <div className="flex items-center gap-5 mb-4">
        <div className="w-20 h-20 md:w-28 md:h-28 rounded-full overflow-hidden shadow-lg ring-4 ring-purple-400/30">
          <Image
            src="/tudose.jpeg"
            alt="Tudose"
            width={112}
            height={112}
            className="w-full h-full object-cover"
          />
        </div>
        <div>
          <p className="text-white text-2xl md:text-4xl font-semibold">AI Stefan</p>
          <p className="text-white/60 text-sm md:text-base">Online · Ready to chat</p>
        </div>
      </div>

      {/* AI message preview */}
      <div className="flex-1 flex flex-col justify-center">
        <div className="bg-white/10 rounded-2xl rounded-bl-md p-4 mb-4">
          <p className="text-white text-sm md:text-base line-clamp-2 md:line-clamp-3">
            Hello! I'm the AI version of Tudose. I specialize in building custom AI chatbots, RAG systems, and AI agents...
          </p>
        </div>
      </div>

      {/* Real input that expands on focus */}
      <ChatInput
        inputValue={inputValue}
        setInputValue={setInputValue}
        handleKeyDown={handleKeyDown}
        handleInputFocus={handleInputFocus}
        handleSendMessage={handleSendMessage}
      />
    </div>
  );
}