interface BackgroundSelectorProps {
  backgroundColor: string;
  onColorChange: (color: string) => void;
}

export function BackgroundSelector({ backgroundColor, onColorChange }: BackgroundSelectorProps) {
  const presetColors = [
    { name: 'Preto', value: '#000000' },
    { name: 'Cinza Escuro', value: '#1a1a1a' },
    { name: 'Azul Escuro', value: '#0f172a' },
    { name: 'Verde Escuro', value: '#14532d' },
    { name: 'Roxo Escuro', value: '#4c1d95' },
  ];

  return (
    <div className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Cor de Fundo
        </label>
        <div className="flex gap-2 items-center">
          <input
            type="color"
            value={backgroundColor}
            onChange={(e) => onColorChange(e.target.value)}
            className="h-10 w-20 rounded cursor-pointer border border-gray-300"
          />
          <span className="text-sm text-gray-600 font-mono">{backgroundColor}</span>
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Cores Predefinidas
        </label>
        <div className="flex flex-wrap gap-2">
          {presetColors.map((preset) => (
            <button
              key={preset.value}
              onClick={() => onColorChange(preset.value)}
              className="px-3 py-2 text-sm rounded-lg border transition-colors hover:border-blue-500"
              style={{
                backgroundColor: preset.value,
                color: '#ffffff',
                borderColor: backgroundColor === preset.value ? '#3b82f6' : '#d1d5db',
              }}
            >
              {preset.name}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
