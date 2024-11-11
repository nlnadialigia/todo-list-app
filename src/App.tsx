import { CirclePlus } from 'lucide-react';
import './app.css';
import { HeaderList } from './components/List/HeaderList';
import { Task } from './components/List/Task';
function App() {
  return (
    <div className="app">
      <header className="app-header">
        <img src="/logo.png" className="" alt="logo" />
      </header>

      <main>
        <div className="create">
          <input type="text" placeholder="Adicionar uma nova tarefa" />
          <button type="submit">
            <span>Criar</span>
            <CirclePlus />
          </button>
        </div>
        <div className="tasks">
          <HeaderList />
          <div className="tasks-list">
            <Task />
            <Task />
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
