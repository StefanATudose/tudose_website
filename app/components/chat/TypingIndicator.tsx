export function TypingIndicator() {
  return (
    <div className="flex justify-start">
      <div className="bg-white/10 p-3 rounded-2xl rounded-bl-md">
        <div className="flex gap-1">
          <span className="w-2 h-2 bg-white/60 rounded-full animate-bounce"></span>
          <span className="w-2 h-2 bg-white/60 rounded-full animate-bounce" style={{ animationDelay: "0.1s" }}></span>
          <span className="w-2 h-2 bg-white/60 rounded-full animate-bounce" style={{ animationDelay: "0.2s" }}></span>
        </div>
      </div>
    </div>
  );
}