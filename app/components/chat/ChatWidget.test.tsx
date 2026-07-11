import { render, screen, fireEvent } from "@testing-library/react";
import { ChatWidget } from "./ChatWidget";
import { Message } from "@/app/types";
import { vi, describe, it, expect } from "vitest";
import React from "react";

describe("ChatWidget Component", () => {
  const defaultMessages: Message[] = [
    {
      id: 1,
      text: "Hello! How can I help you today?",
      sender: "ai",
      timestamp: new Date(),
    },
  ];

  const defaultProps = {
    isChatExpanded: false,
    setIsChatExpanded: vi.fn(),
    messages: defaultMessages,
    isTyping: false,
    inputValue: "",
    setInputValue: vi.fn(),
    handleKeyDown: vi.fn(),
    handleInputFocus: vi.fn(),
    handleSendMessage: vi.fn(),
    messagesContainerRef: React.createRef<HTMLDivElement>(),
    chatEndRef: React.createRef<HTMLDivElement>(),
    inputRef: React.createRef<HTMLInputElement>(),
  };

  it("renders collapsed chat state correctly", () => {
    render(<ChatWidget {...defaultProps} />);

    // Renders AI Stefan header
    expect(screen.getByText("AI Stefan")).toBeInTheDocument();
    expect(screen.getByText("Online · Ready to chat")).toBeInTheDocument();

    // Renders message preview
    expect(
      screen.getByText(/Hello! I'm the AI version of Tudose/i)
    ).toBeInTheDocument();

    // Render input
    const input = screen.getByPlaceholderText(/Type a message.../i);
    expect(input).toBeInTheDocument();
  });

  it("renders expanded chat state correctly", () => {
    render(<ChatWidget {...defaultProps} isChatExpanded={true} />);

    // Renders AI Tudose header instead of AI Stefan
    expect(screen.getByText("AI Tudose")).toBeInTheDocument();
    expect(screen.getByText("Online")).toBeInTheDocument();

    // Renders messages list
    expect(screen.getByText("Hello! How can I help you today?")).toBeInTheDocument();

    // Render input
    const input = screen.getByPlaceholderText("Type your message...");
    expect(input).toBeInTheDocument();
  });

  it("displays typing indicator when isTyping is true in expanded state", () => {
    render(
      <ChatWidget {...defaultProps} isChatExpanded={true} isTyping={true} />
    );

    // Look for typing indicator dots (inside TypingIndicator)
    const typingIndicator = screen.getByTestId("typing-indicator");
    expect(typingIndicator).toBeInTheDocument();
  });

  it("triggers callback when input is focused", () => {
    const handleInputFocus = vi.fn();
    render(<ChatWidget {...defaultProps} handleInputFocus={handleInputFocus} />);

    const input = screen.getByPlaceholderText(/Type a message.../i);
    fireEvent.focus(input);

    expect(handleInputFocus).toHaveBeenCalled();
  });

  it("triggers callback on input change and send button click", () => {
    const setInputValue = vi.fn();
    const handleSendMessage = vi.fn();

    render(
      <ChatWidget
        {...defaultProps}
        inputValue="tell me about rag"
        setInputValue={setInputValue}
        handleSendMessage={handleSendMessage}
      />
    );

    const input = screen.getByPlaceholderText(/Type a message.../i);
    fireEvent.change(input, { target: { value: "new text" } });
    expect(setInputValue).toHaveBeenCalledWith("new text");

    const sendButton = screen.getByRole("button");
    fireEvent.click(sendButton);
    expect(handleSendMessage).toHaveBeenCalled();
  });
});
