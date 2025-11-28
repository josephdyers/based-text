import { Trash2, MoveUp, MoveDown, Edit2 } from 'lucide-react';
import { ChatMessage, MESSAGE_COLORS, MESSAGE_LABELS } from '../types/chat';

interface MessageListProps {
  messages: ChatMessage[];
  onDelete: (id: string) => void;
  onMoveUp: (id: string) => void;
  onMoveDown: (id: string) => void;
  onEdit?: (id: string) => void;
}

export function MessageList({ messages, onDelete, onMoveUp, onMoveDown, onEdit }: MessageListProps) {
  if (messages.length === 0) {
    return (
      <div className="text-center py-8 text-gray-500">
        Nenhuma mensagem adicionada. Adicione mensagens usando o formulário acima.
      </div>
    );
  }

  return (
    <div className="space-y-2">
      {messages.map((message, index) => (
        <div
          key={message.id}
          className="flex items-center gap-3 p-3 bg-white border border-gray-200 rounded-lg hover:border-gray-300 transition-colors"
        >
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-1">
              <span
                className="px-2 py-1 text-xs font-medium rounded"
                style={{
                  backgroundColor: MESSAGE_COLORS[message.type] + '20',
                  color: MESSAGE_COLORS[message.type],
                }}
              >
                {MESSAGE_LABELS[message.type]}
              </span>
            </div>
            <p className="text-gray-800">{message.text}</p>
          </div>

          <div className="flex gap-1">
            <button
              onClick={() => onMoveUp(message.id)}
              disabled={index === 0}
              className="p-2 text-gray-500 hover:text-blue-600 hover:bg-blue-50 rounded disabled:opacity-30 disabled:hover:bg-transparent disabled:hover:text-gray-500 transition-colors"
              title="Mover para cima"
            >
              <MoveUp size={18} />
            </button>
            <button
              onClick={() => onMoveDown(message.id)}
              disabled={index === messages.length - 1}
              className="p-2 text-gray-500 hover:text-blue-600 hover:bg-blue-50 rounded disabled:opacity-30 disabled:hover:bg-transparent disabled:hover:text-gray-500 transition-colors"
              title="Mover para baixo"
            >
              <MoveDown size={18} />
            </button>
            {onEdit && (
              <button
                onClick={() => onEdit(message.id)}
                className="p-2 text-gray-500 hover:text-amber-600 hover:bg-amber-50 rounded transition-colors"
                title="Editar"
              >
                <Edit2 size={18} />
              </button>
            )}
            <button
              onClick={() => onDelete(message.id)}
              className="p-2 text-gray-500 hover:text-red-600 hover:bg-red-50 rounded transition-colors"
              title="Remover"
            >
              <Trash2 size={18} />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
