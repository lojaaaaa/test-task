import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { CreateTodo } from './create-todo';

describe('CreateTodo Component', () => {
  it('renders input and doesnt show button if input is empty', () => {
    render(<CreateTodo />);

    const inputElement = screen.getByPlaceholderText('What needs to be done?');
    expect(inputElement).toBeInTheDocument();

    const buttonElement = screen.queryByText('Create');
    expect(buttonElement).not.toBeInTheDocument();
  });

  it('updates input value on change', () => {
    render(<CreateTodo />);

    const inputElement = screen.getByPlaceholderText('What needs to be done?');

    fireEvent.change(inputElement, { target: { value: 'task' } });
    expect(inputElement).toHaveValue('task');
  });

});
