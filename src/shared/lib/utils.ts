import { ITodo } from "src/app";

export const getLocalstorage = (): ITodo[] => {
  const todos = localStorage.getItem('todos');
  return todos ? JSON.parse(todos) : [];
};

export const setLocalstorage = (todos: ITodo[]) => {
  localStorage.setItem('todos', JSON.stringify(todos));
};