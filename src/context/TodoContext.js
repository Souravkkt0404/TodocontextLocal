import { createContext, useContext } from "react";

export const TodoContext = createContext({
  todos: [
    { id: 1, todo: "TODO MSG", completed: false },
    { id: 2, todo: "TODO MSG 2", completed: false },
    { id: 3, todo: "TODO MSG 3", completed: false },
  ],
  addTodo: (todo) => {},
  updateTodo: (id, todo) => {},
  deleteTodo: (id) => {},
  toggleComplete: (id) => {},
});

export const useTodo = () => {
  return useContext(TodoContext);
};

export const TodoProvider = TodoContext.Provider;
