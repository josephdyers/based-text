import { useState } from 'react';
import { Plus } from 'lucide-react';
import { MessageType, MESSAGE_LABELS } from '../types/chat';

interface MessageInputProps {
  onAddMessage: (text: string, type: MessageType) => void;
}

export function MessageInput({ onAddMessage }: MessageInputProps) {
  const [text, setText] = useState('');
  const [type, setType] = useState<MessageType>('fala');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (text.trim()) {
      onAddMessage(text.trim(), type);
      setText('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Texto da Mensagem
        </label>
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Digite a mensagem do chat..."
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Tipo de Mensagem
        </label>
        <select
          value={type}
          onChange={(e) => setType(e.target.value as MessageType)}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        >
          {(Object.keys(MESSAGE_LABELS) as MessageType[]).map((key) => (
            <option key={key} value={key}>
              {MESSAGE_LABELS[key]}
            </option>
          ))}
        </select>
      </div>

      <button
        type="submit"
        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg flex items-center justify-center gap-2 transition-colors"
      >
        <Plus size={20} />
        Adicionar Mensagem
      </button>
    </form>
  );
}
