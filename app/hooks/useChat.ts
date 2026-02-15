import { useState, useRef, useEffect, useCallback } from "react";
import { Message } from "@/app/types";
import { aiResponses } from "@/app/data";

interface UseChatReturn {
  isChatExpanded: boolean;
  setIsChatExpanded: (value: boolean) => void;
  messages: Message[];
  inputValue: string;
  setInputValue: (value: string) => void;
  isTyping: boolean;
  messagesContainerRef: React.RefObject<HTMLDivElement | null>;
  chatEndRef: React.RefObject<HTMLDivElement | null>;
  inputRef: React.RefObject<HTMLInputElement | null>;
  handleSendMessage: () => void;
  handleKeyDown: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  handleInputFocus: (e: React.FocusEvent<HTMLInputElement>) => void;
  scrollToBottom: () => void;
}

export function useChat(): UseChatReturn {
  const [isChatExpanded, setIsChatExpanded] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Hello! How can I help you today?",
      sender: "ai",
      timestamp: new Date(),
    },
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesContainerRef = useRef<HTMLDivElement>(null);
  const chatEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Scroll to bottom of messages container (only scroll inside the chat, not the page)
  const scrollToBottom = useCallback(() => {
    if (messagesContainerRef.current) {
      messagesContainerRef.current.scrollTop = messagesContainerRef.current.scrollHeight;
    }
  }, []);

  // Scroll to bottom when new messages arrive (only when expanded)
  useEffect(() => {
    if (isChatExpanded) {
      // Store current scroll position
      const scrollY = window.scrollY;
      // Use a small timeout to ensure DOM is updated
      setTimeout(() => {
        scrollToBottom();
        // Restore scroll position after internal scroll
        window.scrollTo(0, scrollY);
      }, 50);
    }
  }, [messages, isChatExpanded, scrollToBottom]);

  // Focus input when chat expands
  useEffect(() => {
    if (isChatExpanded && inputRef.current) {
      // Store current scroll position
      const scrollY = window.scrollY;
      // Use preventScroll to avoid page scrolling when focusing
      inputRef.current.focus({ preventScroll: true });
      // Scroll to bottom when chat expands
      setTimeout(() => {
        scrollToBottom();
        // Restore scroll position
        window.scrollTo(0, scrollY);
      }, 100);
    }
  }, [isChatExpanded, scrollToBottom]);

  const handleSendMessage = useCallback(() => {
    if (!inputValue.trim()) return;

    // Store current scroll position to prevent page scroll
    const scrollY = window.scrollY;

    // Expand chat when sending first message
    if (!isChatExpanded) {
      setIsChatExpanded(true);
    }

    const userMessage: Message = {
      id: Date.now(),
      text: inputValue,
      sender: "user",
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputValue("");
    setIsTyping(true);

    // Restore scroll position
    requestAnimationFrame(() => {
      window.scrollTo(0, scrollY);
    });

    // Simulate AI response
    setTimeout(() => {
      const randomResponse = aiResponses[Math.floor(Math.random() * (aiResponses.length - 1)) + 1];
      const aiMessage: Message = {
        id: Date.now() + 1,
        text: randomResponse,
        sender: "ai",
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, aiMessage]);
      setIsTyping(false);
      // Restore scroll position after AI response
      requestAnimationFrame(() => {
        window.scrollTo(0, scrollY);
      });
    }, 1500);
  }, [inputValue, isChatExpanded]);

  const handleKeyDown = useCallback((e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      e.stopPropagation();
      handleSendMessage();
    }
  }, [handleSendMessage]);

  const handleInputFocus = useCallback((e: React.FocusEvent<HTMLInputElement>) => {
    if (!isChatExpanded) {
      // Store current scroll position
      const scrollY = window.scrollY;
      setIsChatExpanded(true);
      // Restore scroll position after expansion
      requestAnimationFrame(() => {
        window.scrollTo(0, scrollY);
      });
    }
  }, [isChatExpanded]);

  return {
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
    scrollToBottom,
  };
}