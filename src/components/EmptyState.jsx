import { Rocket } from "lucide-react"; // Se estiver usando Lucide, ou use um Emoji

function EmptyState() {
  return (
    <div className="flex flex-col items-center justify-center p-8 bg-slate-600/20 rounded-2xl border-2 border-dashed border-slate-500 animate-pulse">
      <div className="bg-slate-700 p-4 rounded-full mb-4">
        <Rocket className="text-slate-400 w-8 h-8" />
      </div>
      <h3 className="text-slate-200 font-semibold text-lg">Nenhuma tarefa por aqui</h3>
      <p className="text-slate-400 text-sm text-center max-w-[200px]">
        Sua lista está vazia. Adicione uma nova missão para começar sua jornada.
      </p>
    </div>
  );
}

export default EmptyState;