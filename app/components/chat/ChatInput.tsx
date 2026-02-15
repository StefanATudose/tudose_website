interface ChatInputProps {
  inputValue: string;
  setInputValue: (value: string) => void;
  handleKeyDown: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  handleInputFocus: (e: React.FocusEvent<HTMLInputElement>) => void;
  handleSendMessage: () => void;
  inputRef?: React.RefObject<HTMLInputElement | null>;
  placeholder?: string;
  disabled?: boolean;
}

export function ChatInput({
  inputValue,
  setInputValue,
  handleKeyDown,
  handleInputFocus,
  handleSendMessage,
  inputRef,
  placeholder = "Type a message...",
  disabled,
}: ChatInputProps) {
  return (
    <div className="flex gap-2">
      <input
        ref={inputRef}
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onKeyDown={handleKeyDown}
        onFocus={handleInputFocus}
        placeholder={placeholder}
        className="flex-1 bg-white/10 border border-white/20 rounded-full px-4 py-2 text-white placeholder-white/40 focus:outline-none focus:border-purple-400 transition-colors"
      />
      <button
        onClick={handleSendMessage}
        disabled={disabled || !inputValue.trim()}
        className="w-10 h-10 rounded-full bg-linear-to-r from-purple-500 to-blue-500 flex items-center justify-center text-white disabled:opacity-50 hover:opacity-90 transition-opacity"
      >
        <i className="fas fa-paper-plane text-sm"></i>
      </button>
    </div>
  );
}