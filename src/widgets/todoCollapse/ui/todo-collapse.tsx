import { useMemo } from 'react';
import { Collapse, CollapseProps } from 'antd';
import { TodoList } from "src/entities/todo";
import { useTodosStore } from 'src/app/store';

interface TodoCollapseProps {
  activeKeys: string[];
  setActiveKeys: (keys: string[]) => void;
};

export const TodoCollapse = ({ activeKeys, setActiveKeys }: TodoCollapseProps) => {
  const todos = useTodosStore((state) => state.todos);

  const activeTodos = useMemo(() => todos.filter((todo) => !todo.isCompleted), [todos]);
  const completedTodos = useMemo(() => todos.filter((todo) => todo.isCompleted), [todos]);

  const items: CollapseProps['items'] = [
    { 
      key: '1',
      label: <p>All  <span className='text-blue-500'>({todos.length})</span></p>,
      children: <TodoList items={todos}/>
    },
    {
      key: '2',
      label: <p>Active  <span className='text-green-500'>({activeTodos.length})</span></p>,
      children: <TodoList items={activeTodos}/>,
    },
    {
      key: '3',
      label: <p>Completed  <span className='text-red-500'>({completedTodos.length})</span></p>,
      children: <TodoList items={completedTodos}/>,
    },
  ];

  const onChange = (keys: string | string[]) => {
    setActiveKeys(Array.isArray(keys) ? keys : [keys]);
  };

  return (
    <Collapse items={items} onChange={onChange} bordered={false} activeKey={activeKeys} />
  );
};
