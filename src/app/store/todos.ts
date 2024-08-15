import { getLocalstorage, setLocalstorage } from 'src/shared/lib';
import { create } from 'zustand'

export interface ITodo {
  id: string;
  value: string;
  isCompleted: boolean;
}

type State = {
  todos: ITodo[];
}

type Action = {
  createTodo: (todo: ITodo) => void;
  updateTodos: (todos: ITodo[]) => void;
  clearCompletedTodos: () => void;
  setTodoStatus: (id: string, isCompleted: boolean) => void;
}

export const useTodosStore = create<State & Action>((set) => ({
  todos: getLocalstorage(),

  createTodo: (todo) => set((state) => {
    const updatedTodos = [...state.todos, todo];
    setLocalstorage(updatedTodos);
    return { todos: updatedTodos };
  }),

  updateTodos: (updatedTodos) => set(() => {
    setLocalstorage(updatedTodos);
    return { todos: updatedTodos };
  }),

  clearCompletedTodos: () => set((state) => {
    const updatedTodos = state.todos.filter(todo => !todo.isCompleted);
    setLocalstorage(updatedTodos);
    return { todos: updatedTodos };
  }),

  setTodoStatus: (id, isCompleted) => set((state) => {
    const updatedTodos = state.todos.map(todo =>
      todo.id === id ? { ...todo, isCompleted } : todo
    );
    setLocalstorage(updatedTodos);
    return { todos: updatedTodos };
  }),
}));
