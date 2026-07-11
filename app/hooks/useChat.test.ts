import { act, renderHook } from "@testing-library/react";
import { useChat } from "./useChat";
import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";

describe("useChat Hook", () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  it("should initialize with correct default state", () => {
    const { result } = renderHook(() => useChat());
    expect(result.current.isChatExpanded).toBe(false);
    expect(result.current.messages).toHaveLength(1);
    expect(result.current.messages[0].sender).toBe("ai");
    expect(result.current.messages[0].text).toContain("Hello!");
    expect(result.current.inputValue).toBe("");
    expect(result.current.isTyping).toBe(false);
  });

  it("should expand the chat", () => {
    const { result } = renderHook(() => useChat());
    act(() => {
      result.current.setIsChatExpanded(true);
    });
    expect(result.current.isChatExpanded).toBe(true);
  });

  it("should update input value", () => {
    const { result } = renderHook(() => useChat());
    act(() => {
      result.current.setInputValue("Hello Stefan");
    });
    expect(result.current.inputValue).toBe("Hello Stefan");
  });

  it("should not send message if input is empty", () => {
    const { result } = renderHook(() => useChat());
    act(() => {
      result.current.handleSendMessage();
    });
    expect(result.current.messages).toHaveLength(1);
  });

  it("should send message, expand chat, and simulate AI response", () => {
    const { result } = renderHook(() => useChat());

    // Send a message
    act(() => {
      result.current.setInputValue("Tell me about FocusFlow");
    });
    act(() => {
      result.current.handleSendMessage();
    });

    // Verify user message state
    expect(result.current.isChatExpanded).toBe(true);
    expect(result.current.inputValue).toBe("");
    expect(result.current.isTyping).toBe(true);
    expect(result.current.messages).toHaveLength(2);
    expect(result.current.messages[1].text).toBe("Tell me about FocusFlow");
    expect(result.current.messages[1].sender).toBe("user");

    // Advance timer to trigger response
    act(() => {
      vi.advanceTimersByTime(1500);
    });

    // Verify simulated AI response state
    expect(result.current.isTyping).toBe(false);
    expect(result.current.messages).toHaveLength(3);
    expect(result.current.messages[2].sender).toBe("ai");
  });
});
