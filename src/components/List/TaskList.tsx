import { Circle, Trash2 } from 'lucide-react';
import './index.css';

// interface TaskProps {}
export function TasksList() {
  return (
    <div className="tasks-list">
      <div className="task">
        <Circle color="#4EA8D3" />
        <p>
          Nesse repositório você vai encontrar o desafio implementado com
          diversos detalhes adicionais que melhoram a experiência do usuário.
          Vai lá dar uma olhadinha para ver o que você pode aprender de novo ou
          até para implementar na sua própria solução
        </p>
        <Trash2 />
      </div>
      <div className="task">
        <Circle color="#4EA8D3" />
        <p>
          Nesse repositório você vai encontrar o desafio implementado com
          diversos detalhes adicionais que melhoram a experiência do usuário.
          Vai lá dar uma olhadinha para ver o que você pode aprender de novo ou
          até para implementar na sua própria solução
        </p>
        <Trash2 />
      </div>
    </div>
  );
}
