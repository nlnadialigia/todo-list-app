import { CirclePlus } from 'lucide-react';
import { useState } from 'react';
import './app.css';
import { Header } from './components/Header';
import { List } from './components/List';

export interface Task {
  id: number;
  title: string;
  isDone: boolean;
}

function App() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [newTask, setNewTask] = useState<string>('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewTask(e.target.value);
  };

  const handleAddTask = () => {
    if (newTask.trim()) {
      const newId = tasks.length + 1;

      const newAdd: Task = {
        id: newId,
        title: newTask,
        isDone: false,
      };
      setTasks([...tasks, newAdd]);
      setNewTask('');
    }
  };

  return (
    <div className="app">
      <Header />

      <main>
        <div className="create">
          <input
            type="text"
            placeholder="Adicionar uma nova tarefa"
            value={newTask}
            onChange={handleInputChange}
          />
          <button type="submit" onClick={handleAddTask}>
            <span>Criar</span>
            <CirclePlus />
          </button>
        </div>

        <List tasks={tasks} setTasks={setTasks} />
      </main>
    </div>
  );
}

export default App;
