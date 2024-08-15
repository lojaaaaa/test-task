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
  todos: [],

  createTodo: (todo) => set((state) => ({
    todos: [...state.todos, todo]
  })),

  updateTodos: (updatedTodos) => set(() => ({
    todos: updatedTodos,
  })),

  clearCompletedTodos: () => set((state) => ({
    todos: state.todos.filter(todo => !todo.isCompleted)
  })),

  setTodoStatus: (id, isCompleted) => set((state) => ({
    todos: state.todos.map(todo =>
      todo.id === id ? { ...todo, isCompleted } : todo
    )
  }))
}));
