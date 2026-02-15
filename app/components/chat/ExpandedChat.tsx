import Image from "next/image";
import { Message } from "@/app/types";
import { ChatMessage } from "./ChatMessage";
import { TypingIndicator } from "./TypingIndicator";
import { ChatInput } from "./ChatInput";

interface ExpandedChatProps {
  messages: Message[];
  isTyping: boolean;
  inputValue: string;
  setInputValue: (value: string) => void;
  handleKeyDown: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  handleInputFocus: (e: React.FocusEvent<HTMLInputElement>) => void;
  handleSendMessage: () => void;
  setIsChatExpanded: (value: boolean) => void;
  messagesContainerRef: React.RefObject<HTMLDivElement | null>;
  chatEndRef: React.RefObject<HTMLDivElement | null>;
  inputRef: React.RefObject<HTMLInputElement | null>;
}

export function ExpandedChat({
  messages,
  isTyping,
  inputValue,
  setInputValue,
  handleKeyDown,
  handleInputFocus,
  handleSendMessage,
  setIsChatExpanded,
  messagesContainerRef,
  chatEndRef,
  inputRef,
}: ExpandedChatProps) {
  return (
    <>
      {/* Chat header */}
      <div className="p-4 border-b border-white/10 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full overflow-hidden ring-2 ring-purple-400/30">
            <Image
              src="/tudose.jpeg"
              alt="Tudose"
              width={40}
              height={40}
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <p className="text-white font-medium">AI Tudose</p>
            <p className="text-white/60 text-xs">Online</p>
          </div>
        </div>
        <button
          onClick={(e) => {
            e.stopPropagation();
            setIsChatExpanded(false);
          }}
          className="text-white/60 hover:text-white transition-colors"
        >
          <i className="fas fa-compress-alt"></i>
        </button>
      </div>

      {/* Messages area */}
      <div ref={messagesContainerRef} className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((message) => (
          <ChatMessage key={message.id} message={message} />
        ))}
        {isTyping && <TypingIndicator />}
        <div ref={chatEndRef} />
      </div>

      {/* Input area */}
      <div className="p-4 border-t border-white/10">
        <ChatInput
          inputValue={inputValue}
          setInputValue={setInputValue}
          handleKeyDown={handleKeyDown}
          handleInputFocus={handleInputFocus}
          handleSendMessage={handleSendMessage}
          inputRef={inputRef}
          placeholder="Type your message..."
        />
      </div>
    </>
  );
}