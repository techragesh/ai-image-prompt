import { cn } from "@/lib/utils";

interface ChatMessageProps {
  message: {
    id: string;
    type: 'user' | 'ai';
    content: string;
    image?: string;
    timestamp: Date;
    loading?: boolean;
  };
}

export const ChatMessage = ({ message }: ChatMessageProps) => {
  return (
    <div
      className={cn(
        "flex w-full mb-6",
        message.type === 'user' ? 'justify-end' : 'justify-start'
      )}
    >
      <div
        className={cn(
          "max-w-[80%] rounded-2xl px-4 py-3 shadow-card transition-all duration-300 hover:shadow-glow",
          message.type === 'user'
            ? "bg-primary text-primary-foreground ml-4"
            : "bg-card border border-border mr-4"
        )}
      >
        {message.image && (
          <div className="mb-3">
            <img
              src={message.image}
              alt="Uploaded image"
              className="w-full max-w-sm rounded-lg shadow-md"
            />
          </div>
        )}
        
        <div className="space-y-2">
          {message.loading ? (
            <div className="flex space-x-1">
              <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce [animation-delay:-0.3s]"></div>
              <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce [animation-delay:-0.15s]"></div>
              <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce"></div>
            </div>
          ) : (
            <p className="text-sm leading-relaxed whitespace-pre-wrap">
              {message.content}
            </p>
          )}
          
          <div
            className={cn(
              "text-xs opacity-70",
              message.type === 'user' ? 'text-primary-foreground' : 'text-muted-foreground'
            )}
          >
            {message.timestamp.toLocaleTimeString([], { 
              hour: '2-digit', 
              minute: '2-digit' 
            })}
          </div>
        </div>
      </div>
    </div>
  );
};