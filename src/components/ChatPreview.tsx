import { ChatMessage, MESSAGE_COLORS, MessagePosition } from '../types/chat';

interface ChatPreviewProps {
  messages: ChatMessage[];
  backgroundColor: string;
  position?: MessagePosition;
}

export function ChatPreview({
  messages,
  backgroundColor,
  position = 'inferior-esquerda',
}: ChatPreviewProps) {
  if (messages.length === 0) {
    return (
      <div
        className="w-full h-64 rounded-lg flex items-end p-6"
        style={{ backgroundColor }}
      >
        <div className="text-white/50 text-sm">
          Prévia do chat aparecerá aqui...
        </div>
      </div>
    );
  }

  const getPositionClasses = () => {
    switch (position) {
      case 'inferior-esquerda':
        return 'items-end justify-start';
      case 'inferior-direita':
        return 'items-end justify-end';
      case 'superior-esquerda':
        return 'items-start justify-start';
      case 'superior-direita':
        return 'items-start justify-end';
    }
  };

  return (
    <div
      className={`w-full min-h-64 rounded-lg flex p-6 ${getPositionClasses()}`}
      style={{ backgroundColor }}
    >
      <div className="space-y-1">
        {messages.map((message) => (
          <div
            key={message.id}
            style={{
              color: MESSAGE_COLORS[message.type],
              textShadow: '2px 2px 4px rgba(0, 0, 0, 0.8)',
              fontFamily: 'Arial, sans-serif',
              fontSize: '14px',
              lineHeight: '1.4',
            }}
          >
            {message.text}
          </div>
        ))}
      </div>
    </div>
  );
}
