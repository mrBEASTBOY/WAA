import React, { createContext, useContext } from "react";

type UpdateTodoContextType = (id: string | number, done: boolean) => void;

const TodoUpdateContext = createContext<UpdateTodoContextType | undefined>(
  undefined
);

export const useTodoUpdate = () => {
  const context = useContext(TodoUpdateContext);
  if (!context) {
    throw new Error("useTodoUpdate must be used within a TodoUpdateProvider");
  }
  return context;
};

export default TodoUpdateContext;
