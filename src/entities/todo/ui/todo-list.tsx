
import { ITodo } from 'src/app/store';
import { TodoItem } from 'src/entities/todo';

interface TodoListProps {
  items: ITodo[];
}

export const TodoList = ({ items }: TodoListProps) => (
  <ul className="flex flex-col">
    {
      items.length
        ? items.map(({ id, value, isCompleted }) => (
          <TodoItem key={id} id={id} value={value} isCompleted={isCompleted} />
        ))
        : <span className="text-gray-500 text-center px-2 py-4">None</span>
    }
  </ul>
);
