import { useRef } from 'react';
import { Download } from 'lucide-react';
import { ChatMessage, MESSAGE_COLORS, MessagePosition } from '../types/chat';

interface ImageGeneratorProps {
  messages: ChatMessage[];
  backgroundColor: string;
  position?: MessagePosition;
}

export function ImageGenerator({
  messages,
  backgroundColor,
  position = 'inferior-esquerda',
}: ImageGeneratorProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const generateImage = () => {
    const canvas = canvasRef.current;
    if (!canvas || messages.length === 0) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = 1920;
    canvas.height = 1080;

    ctx.fillStyle = backgroundColor;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.font = '28px Arial';

    const lineHeight = 36;
    const padding = 40;

    let startX: number;
    let startY: number;
    let isRightAlign = false;
    let isTopAlign = false;

    switch (position) {
      case 'inferior-esquerda':
        startX = padding;
        startY = canvas.height - padding;
        ctx.textAlign = 'left';
        ctx.textBaseline = 'bottom';
        break;
      case 'inferior-direita':
        startX = canvas.width - padding;
        startY = canvas.height - padding;
        ctx.textAlign = 'right';
        ctx.textBaseline = 'bottom';
        isRightAlign = true;
        break;
      case 'superior-esquerda':
        startX = padding;
        startY = padding;
        ctx.textAlign = 'left';
        ctx.textBaseline = 'top';
        isTopAlign = true;
        break;
      case 'superior-direita':
        startX = canvas.width - padding;
        startY = padding;
        ctx.textAlign = 'right';
        ctx.textBaseline = 'top';
        isRightAlign = true;
        isTopAlign = true;
        break;
    }

    messages.forEach((message, index) => {
      let y: number;
      if (isTopAlign) {
        y = startY + index * lineHeight;
      } else {
        y = startY - (messages.length - 1 - index) * lineHeight;
      }

      ctx.shadowColor = 'rgba(0, 0, 0, 0.8)';
      ctx.shadowBlur = 4;
      ctx.shadowOffsetX = 2;
      ctx.shadowOffsetY = 2;

      ctx.fillStyle = MESSAGE_COLORS[message.type];
      ctx.fillText(message.text, startX, y);
    });

    canvas.toBlob((blob) => {
      if (blob) {
        const url = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = `chat-samp-${Date.now()}.png`;
        link.click();
        URL.revokeObjectURL(url);
      }
    });
  };

  return (
    <div className="space-y-4">
      <canvas ref={canvasRef} className="hidden" />

      <button
        onClick={generateImage}
        disabled={messages.length === 0}
        className="w-full bg-green-600 hover:bg-green-700 disabled:bg-gray-400 disabled:cursor-not-allowed text-white font-medium py-3 px-4 rounded-lg flex items-center justify-center gap-2 transition-colors"
      >
        <Download size={20} />
        Gerar Imagem PNG
      </button>

      {messages.length === 0 && (
        <p className="text-sm text-gray-500 text-center">
          Adicione mensagens para gerar a imagem
        </p>
      )}
    </div>
  );
}
