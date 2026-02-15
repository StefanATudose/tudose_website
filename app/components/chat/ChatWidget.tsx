import { Message } from "@/app/types";
import { CollapsedChat } from "./CollapsedChat";
import { ExpandedChat } from "./ExpandedChat";

interface ChatWidgetProps {
  isChatExpanded: boolean;
  setIsChatExpanded: (value: boolean) => void;
  messages: Message[];
  isTyping: boolean;
  inputValue: string;
  setInputValue: (value: string) => void;
  handleKeyDown: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  handleInputFocus: (e: React.FocusEvent<HTMLInputElement>) => void;
  handleSendMessage: () => void;
  messagesContainerRef: React.RefObject<HTMLDivElement | null>;
  chatEndRef: React.RefObject<HTMLDivElement | null>;
  inputRef: React.RefObject<HTMLInputElement | null>;
}

export function ChatWidget({
  isChatExpanded,
  setIsChatExpanded,
  messages,
  isTyping,
  inputValue,
  setInputValue,
  handleKeyDown,
  handleInputFocus,
  handleSendMessage,
  messagesContainerRef,
  chatEndRef,
  inputRef,
}: ChatWidgetProps) {
  return (
    <div
      className={`transition-all duration-500 ease-out w-full max-w-2xl ${
        isChatExpanded ? "h-125" : "h-72 md:h-80"
      } bg-white/10 backdrop-blur-xl rounded-3xl border border-white/20 shadow-2xl flex flex-col overflow-hidden`}
    >
      {!isChatExpanded ? (
        <CollapsedChat
          inputValue={inputValue}
          setInputValue={setInputValue}
          handleKeyDown={handleKeyDown}
          handleInputFocus={handleInputFocus}
          handleSendMessage={handleSendMessage}
        />
      ) : (
        <ExpandedChat
          messages={messages}
          isTyping={isTyping}
          inputValue={inputValue}
          setInputValue={setInputValue}
          handleKeyDown={handleKeyDown}
          handleInputFocus={handleInputFocus}
          handleSendMessage={handleSendMessage}
          setIsChatExpanded={setIsChatExpanded}
          messagesContainerRef={messagesContainerRef}
          chatEndRef={chatEndRef}
          inputRef={inputRef}
        />
      )}
    </div>
  );
}