import { CirclePlus } from 'lucide-react';

interface CreateTaskProps {}
export function CreateTask() {
  return (
    <>
      <input type="text" placeholder="Adicionar uma nova tarefa" />
      <button type="submit">
        <span>Criar</span>
        <CirclePlus />
      </button>
    </>
  );
}
