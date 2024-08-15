import { render, screen } from '@testing-library/react';
import { TodoList } from './todo-list';
import { ITodo } from 'src/app/store/todos';

describe('TodoList Component', () => {
  const todos: ITodo[] = [
    { id: '1', value: 'First task', isCompleted: false },
    { id: '2', value: 'Second task', isCompleted: true },
  ];

  it('renders a list of todos when items are provided', () => {
    render(<TodoList items={todos} />);

    const firstTask = screen.getByText('First task');
    const secondTask = screen.getByText('Second task');

    expect(firstTask).toBeInTheDocument();
    expect(secondTask).toBeInTheDocument();
  });

  it('renders "None" when the todo list is empty', () => {
    render(<TodoList items={[]} />);

    const noneElement = screen.getByText('None');

    expect(noneElement).toBeInTheDocument();
  });

  it('displays a line-through style for completed tasks', () => {
    render(<TodoList items={todos} />);

    const completedTask = screen.getByText('Second task');

    expect(completedTask).toHaveClass('line-through');
  });

  it('matches the snapshot', () => {
    const { asFragment } = render(
      <TodoList items={todos} />
    );
    expect(asFragment()).toMatchSnapshot();
  });

});
