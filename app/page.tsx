"use client";

import { useChat } from "@/app/hooks/useChat";
import { HeroSection, ProjectsSection, StartupSection, Footer } from "@/app/components/sections";

export default function Home() {
  const {
    isChatExpanded,
    setIsChatExpanded,
    messages,
    inputValue,
    setInputValue,
    isTyping,
    messagesContainerRef,
    chatEndRef,
    inputRef,
    handleSendMessage,
    handleKeyDown,
    handleInputFocus,
  } = useChat();

  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-white">
      <HeroSection
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
        scrollToProjects={scrollToProjects}
      />

      <ProjectsSection />

      <StartupSection />

      <Footer />
    </div>
  );
}
