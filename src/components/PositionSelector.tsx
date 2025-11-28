import { MessagePosition, POSITION_LABELS } from '../types/chat';
import { CornerDownLeft, CornerDownRight, CornerUpLeft, CornerUpRight } from 'lucide-react';

interface PositionSelectorProps {
  position: MessagePosition;
  onPositionChange: (position: MessagePosition) => void;
}

export function PositionSelector({ position, onPositionChange }: PositionSelectorProps) {
  const positions: Array<{ value: MessagePosition; icon: React.ReactNode; label: string }> = [
    { value: 'inferior-esquerda', icon: <CornerDownLeft size={32} />, label: 'Inferior\nEsquerda' },
    { value: 'inferior-direita', icon: <CornerDownRight size={32} />, label: 'Inferior\nDireita' },
    { value: 'superior-esquerda', icon: <CornerUpLeft size={32} />, label: 'Superior\nEsquerda' },
    { value: 'superior-direita', icon: <CornerUpRight size={32} />, label: 'Superior\nDireita' },
  ];

  return (
    <div className="grid grid-cols-2 gap-3">
      {positions.map((pos) => (
        <button
          key={pos.value}
          onClick={() => onPositionChange(pos.value)}
          className={`p-4 rounded-lg border-2 transition-all flex flex-col items-center justify-center gap-2 ${
            position === pos.value
              ? 'border-blue-500 bg-blue-50'
              : 'border-gray-200 hover:border-gray-300 bg-white'
          }`}
        >
          <div className={position === pos.value ? 'text-blue-600' : 'text-gray-600'}>
            {pos.icon}
          </div>
          <div className={`text-xs text-center whitespace-pre-line font-medium ${
            position === pos.value ? 'text-blue-600' : 'text-gray-600'
          }`}>
            {pos.label}
          </div>
        </button>
      ))}
    </div>
  );
}
