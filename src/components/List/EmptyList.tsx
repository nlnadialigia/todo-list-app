import { ClipboardList } from 'lucide-react';
import './index.css';

export function EmptyList() {
  return (
    <div className="empty">
      <ClipboardList color="#808080" size={56} />
      <h4>Você ainda não possui tarefas cadastradas</h4>
      <span>Crie tarefas e organize seus itens a fazer</span>
    </div>
  );
}
