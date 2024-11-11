import { Circle, CircleCheck, Trash2 } from 'lucide-react';
import { Task } from '../../App';
import { EmptyList } from './EmptyList';

interface ListProps {
  tasks: Task[];
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
}

export function List({ tasks, setTasks }: Readonly<ListProps>) {
  const hasTasks = tasks.length > 0;
  const doneTasks = tasks.filter((task) => task.isDone);

  const handleDoneTask = (id: number) => {
    const updateTask = tasks.map((t) => {
      if (t.id === id) {
        return {
          ...t,
          isDone: true,
        };
      }
      return t;
    });
    setTasks(updateTask);
  };

  const handleDeleteTask = (id: number) => {
    const updateTask = tasks.filter((t) => t.id !== id);
    setTasks(updateTask);
  };

  return (
    <div className="tasks">
      <div className="tasks-info">
        <div className="common tasks-created">
          <p>Tarefas criadas</p>
          <span>{tasks.length}</span>
        </div>
        <div className=" common tasks-completed">
          <p>Concluídas</p>
          <span>{hasTasks ? `0 de ${doneTasks.length}` : 0}</span>
        </div>
      </div>

      <div className="tasks-list">
        {hasTasks ? (
          tasks.map((task) => (
            <div className="task" key={task.id}>
              <button type="button" onClick={() => handleDoneTask(task.id)}>
                {task.isDone ? (
                  <CircleCheck color="#8284fa" />
                ) : (
                  <Circle color="#4EA8D3" />
                )}
              </button>
              <p className={task.isDone ? 'done' : ''}>{task.title}</p>
              <button type="button" onClick={() => handleDeleteTask(task.id)}>
                <Trash2 />
              </button>
            </div>
          ))
        ) : (
          <EmptyList />
        )}
      </div>
    </div>
  );
}
