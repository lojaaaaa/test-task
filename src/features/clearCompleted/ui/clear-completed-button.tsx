import { Button } from 'antd';
import { useTodosStore } from 'src/app/store/todos';

export const ClearCompletedButton = () => {
  const clearCompletedTodos = useTodosStore((state) => state.clearCompletedTodos);

  const handleClearCompleted = () => {
    clearCompletedTodos();
  };

  return (
    <Button type='text' onClick={handleClearCompleted} >
      Clear completed
    </Button>
  )
};
