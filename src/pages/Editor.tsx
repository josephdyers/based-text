import { useState } from 'react';
import { MessageSquare, Trash2, Home } from 'lucide-react';
import { ChatMessage, MessageType, MessagePosition } from '../types/chat';
import { MessageInput } from '../components/MessageInput';
import { MessageList } from '../components/MessageList';
import { ChatPreview } from '../components/ChatPreview';
import { ImageGenerator } from '../components/ImageGenerator';
import { BackgroundSelector } from '../components/BackgroundSelector';
import { PositionSelector } from '../components/PositionSelector';
import { EditModal } from '../components/EditModal';

interface EditorProps {
  onHome: () => void;
}

export function Editor({ onHome }: EditorProps) {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [backgroundColor, setBackgroundColor] = useState('#000000');
  const [messagePosition, setMessagePosition] = useState<MessagePosition>('inferior-esquerda');
  const [editingId, setEditingId] = useState<string | null>(null);
  const [editingText, setEditingText] = useState('');
  const [editingType, setEditingType] = useState<MessageType>('fala');

  const handleAddMessage = (text: string, type: MessageType) => {
    const newMessage: ChatMessage = {
      id: Date.now().toString(),
      text,
      type,
    };
    setMessages([...messages, newMessage]);
  };

  const handleDeleteMessage = (id: string) => {
    setMessages(messages.filter((msg) => msg.id !== id));
  };

  const handleMoveUp = (id: string) => {
    const index = messages.findIndex((msg) => msg.id === id);
    if (index > 0) {
      const newMessages = [...messages];
      [newMessages[index - 1], newMessages[index]] = [newMessages[index], newMessages[index - 1]];
      setMessages(newMessages);
    }
  };

  const handleMoveDown = (id: string) => {
    const index = messages.findIndex((msg) => msg.id === id);
    if (index < messages.length - 1) {
      const newMessages = [...messages];
      [newMessages[index], newMessages[index + 1]] = [newMessages[index + 1], newMessages[index]];
      setMessages(newMessages);
    }
  };

  const handleEditMessage = (id: string) => {
    const message = messages.find((msg) => msg.id === id);
    if (message) {
      setEditingId(id);
      setEditingText(message.text);
      setEditingType(message.type);
    }
  };

  const handleSaveEdit = (newText: string, newType: MessageType) => {
    setMessages(
      messages.map((msg) =>
        msg.id === editingId ? { ...msg, text: newText, type: newType } : msg
      )
    );
    setEditingId(null);
  };

  const handleClearAll = () => {
    if (messages.length > 0 && confirm('Deseja limpar todas as mensagens?')) {
      setMessages([]);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="sticky top-0 bg-white border-b border-gray-200 shadow-sm z-20">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between max-w-7xl mx-auto">
            <div className="flex items-center gap-3">
              <MessageSquare className="text-blue-600" size={32} />
              <h1 className="text-2xl font-bold text-gray-900">Chat Generator</h1>
            </div>
            <button
              onClick={onHome}
              className="flex items-center gap-2 text-gray-600 hover:text-gray-900 font-medium transition-colors"
            >
              <Home size={20} />
              Voltar
            </button>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h2 className="text-xl font-semibold text-gray-900 mb-4">
                  Adicionar Mensagem
                </h2>
                <MessageInput onAddMessage={handleAddMessage} />
              </div>

              <div className="bg-white rounded-xl shadow-lg p-6">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-xl font-semibold text-gray-900">
                    Mensagens ({messages.length})
                  </h2>
                  {messages.length > 0 && (
                    <button
                      onClick={handleClearAll}
                      className="text-red-600 hover:text-red-700 text-sm font-medium flex items-center gap-1 transition-colors"
                    >
                      <Trash2 size={16} />
                      Limpar Tudo
                    </button>
                  )}
                </div>
                <MessageList
                  messages={messages}
                  onDelete={handleDeleteMessage}
                  onMoveUp={handleMoveUp}
                  onMoveDown={handleMoveDown}
                  onEdit={handleEditMessage}
                />
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h2 className="text-xl font-semibold text-gray-900 mb-4">
                  Prévia do Chat
                </h2>
                <ChatPreview
                  messages={messages}
                  backgroundColor={backgroundColor}
                  position={messagePosition}
                />
              </div>

              <div className="bg-white rounded-xl shadow-lg p-6">
                <h2 className="text-xl font-semibold text-gray-900 mb-4">
                  Posição das Mensagens
                </h2>
                <PositionSelector
                  position={messagePosition}
                  onPositionChange={setMessagePosition}
                />
              </div>

              <div className="bg-white rounded-xl shadow-lg p-6">
                <h2 className="text-xl font-semibold text-gray-900 mb-4">
                  Personalização
                </h2>
                <BackgroundSelector
                  backgroundColor={backgroundColor}
                  onColorChange={setBackgroundColor}
                />
              </div>

              <div className="bg-white rounded-xl shadow-lg p-6">
                <h2 className="text-xl font-semibold text-gray-900 mb-4">
                  Exportar Imagem
                </h2>
                <ImageGenerator
                  messages={messages}
                  backgroundColor={backgroundColor}
                  position={messagePosition}
                />
              </div>
            </div>
          </div>

          <div className="mt-8 bg-blue-50 border border-blue-200 rounded-xl p-6">
            <h3 className="font-semibold text-blue-900 mb-2">Como usar:</h3>
            <ul className="space-y-1 text-sm text-blue-800">
              <li>• <strong>Fala:</strong> Mensagens normais em branco</li>
              <li>• <strong>Ação:</strong> Ações do personagem em roxo</li>
              <li>• <strong>Número/Telefone:</strong> Informações numéricas em amarelo</li>
              <li>• <strong>Pensamento:</strong> Pensamentos do personagem em verde</li>
            </ul>
          </div>
        </div>
      </div>

      {editingId && (
        <EditModal
          text={editingText}
          type={editingType}
          onSave={handleSaveEdit}
          onCancel={() => setEditingId(null)}
          onTextChange={setEditingText}
          onTypeChange={setEditingType}
        />
      )}
    </div>
  );
}
