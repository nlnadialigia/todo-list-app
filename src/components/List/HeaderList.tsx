import './list.css';

export function HeaderList() {
  return (
    <div className="tasks-info">
      <div className="common tasks-created">
        <p>Tarefas criadas</p>
        <span>0</span>
      </div>
      <div className=" common tasks-completed">
        <p>Concluídas</p>
        <span>0</span>
      </div>
    </div>
  );
}
