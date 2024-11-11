import './app.css';
import { CreateTask } from './components/CreateTask';
import { Header } from './components/Header';
import { HeaderList, TasksList } from './components/List';

function App() {
  return (
    <div className="app">
      <Header />

      <main>
        <div className="create">
          <CreateTask />
        </div>

        <div className="tasks">
          <HeaderList />
          <TasksList />
        </div>
      </main>
    </div>
  );
}

export default App;
