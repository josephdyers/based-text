export type MessageType = 'fala' | 'acao' | 'numero' | 'pensamento';
export type MessagePosition = 'inferior-esquerda' | 'inferior-direita' | 'superior-esquerda' | 'superior-direita';

export interface ChatMessage {
  id: string;
  text: string;
  type: MessageType;
}

export const MESSAGE_COLORS: Record<MessageType, string> = {
  fala: '#ffffff',
  acao: '#bc9dd2',
  numero: '#d9ea14',
  pensamento: '#33a116',
};

export const MESSAGE_LABELS: Record<MessageType, string> = {
  fala: 'Fala',
  acao: 'Ação',
  numero: 'Número/Telefone',
  pensamento: 'Pensamento',
};

export const POSITION_LABELS: Record<MessagePosition, string> = {
  'inferior-esquerda': 'Inferior Esquerda',
  'inferior-direita': 'Inferior Direita',
  'superior-esquerda': 'Superior Esquerda',
  'superior-direita': 'Superior Direita',
};
