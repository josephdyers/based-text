import { MessageSquare, Zap, Palette, Download, ArrowRight } from 'lucide-react';

interface HomeProps {
  onStart: () => void;
}

export function Home({ onStart }: HomeProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
        <div className="absolute top-40 right-20 w-72 h-72 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-1/2 w-72 h-72 bg-blue-600 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-4">
        <div className="text-center space-y-6 max-w-2xl">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="p-3 bg-blue-500/20 rounded-xl border border-blue-500/30">
              <MessageSquare className="text-blue-400" size={48} />
            </div>
          </div>

          <h1 className="text-6xl font-black text-white leading-tight">
            Gerador de Chat
            <span className="block bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
              SA:MP/FiveM
            </span>
          </h1>

          <p className="text-xl text-blue-100">
            Crie imagens de chat estilo GTA San Andreas Multiplayer com um simples clique. Personalize cores, posição e exporte em alta qualidade.
          </p>

          <div className="grid md:grid-cols-3 gap-6 py-8">
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-6 hover:border-blue-400/50 transition-all hover:bg-white/15">
              <Zap className="text-yellow-400 mb-3" size={32} />
              <h3 className="font-semibold text-white mb-2">Rápido e Fácil</h3>
              <p className="text-sm text-blue-100">Crie chats em segundos com interface intuitiva</p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-6 hover:border-blue-400/50 transition-all hover:bg-white/15">
              <Palette className="text-pink-400 mb-3" size={32} />
              <h3 className="font-semibold text-white mb-2">Customizável</h3>
              <p className="text-sm text-blue-100">Escolha cores, posições e fundos personalizados</p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-6 hover:border-blue-400/50 transition-all hover:bg-white/15">
              <Download className="text-cyan-400 mb-3" size={32} />
              <h3 className="font-semibold text-white mb-2">Exportar</h3>
              <p className="text-sm text-blue-100">Baixe suas imagens em PNG de alta resolução</p>
            </div>
          </div>

          <div className="space-y-4 pt-4">
            <button
              onClick={onStart}
              className="group relative inline-flex items-center gap-3 bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/50 transform hover:scale-105"
            >
              Começar Agora
              <ArrowRight className="group-hover:translate-x-1 transition-transform" size={24} />
            </button>
          </div>

          <div className="pt-8 border-t border-white/10">
            <p className="text-sm text-blue-200">
              Sem download necessário. Funciona direto no seu navegador.
            </p>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes blob {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </div>
  );
}
