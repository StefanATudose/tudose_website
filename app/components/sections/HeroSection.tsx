import { Message } from "@/app/types";
import { ChatWidget } from "@/app/components/chat";

interface HeroSectionProps {
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
  scrollToProjects: () => void;
}

export function HeroSection({
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
  scrollToProjects,
}: HeroSectionProps) {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-linear-to-br from-[#0a1628] via-[#1e3a5f] to-[#6b21a8] opacity-95"></div>

      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "1s" }}></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-purple-400/5 rounded-full blur-2xl animate-float" style={{ animationDelay: "2s" }}></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 py-20 flex flex-col items-center">
        {/* Name and title */}
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 tracking-tight">
            Hi, I'm Stefan
          </h1>
          <p className="text-xl md:text-2xl text-white/80 font-light">
            AI Solutions Architect
          </p>
        </div>

        {/* AI Chatbot */}
        <ChatWidget
          isChatExpanded={isChatExpanded}
          setIsChatExpanded={setIsChatExpanded}
          messages={messages}
          isTyping={isTyping}
          inputValue={inputValue}
          setInputValue={setInputValue}
          handleKeyDown={handleKeyDown}
          handleInputFocus={handleInputFocus}
          handleSendMessage={handleSendMessage}
          messagesContainerRef={messagesContainerRef}
          chatEndRef={chatEndRef}
          inputRef={inputRef}
        />

        {/* Scroll down button */}
        <button
          onClick={scrollToProjects}
          className="mt-16 text-white/60 hover:text-white transition-colors flex flex-col items-center gap-2 animate-bounce"
        >
          <span className="text-sm">Explore my work</span>
          <i className="fas fa-chevron-down text-2xl"></i>
        </button>
      </div>
    </section>
  );
}