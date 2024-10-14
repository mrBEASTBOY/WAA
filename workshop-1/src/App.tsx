import React, { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";

import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import List from "./List/List";
import { Todo } from "./types/Todo";

import "./App.css";
import TodoUpdateContext from "./context/TodoUpdateContext";

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);

  useEffect(() => {
    async function getTodos() {
      const res = await fetch("http://localhost:3004/todos");
      const data = await res.json();
      setTodos(data);
    }
    getTodos();
  }, []);

  const addTodo = (newTodo: string) => {
    const newTodoItem: Todo = { id: uuidv4(), name: newTodo, done: false };
    setTodos([newTodoItem, ...todos]);
  };

  const updateTodo = (id: string | number, done: boolean) => {
    const newTodos = todos.map((todo) => {
      if (todo.id === id) return { ...todo, done };
      return todo;
    });
    setTodos(newTodos);
  };

  const deleteTodo = (id: number | string) => {
    const filteredTodos = todos.filter((todo) => todo.id !== id);
    setTodos(filteredTodos);
  };

  const deleteFinishedTodo = () => {
    const updatedTodos = todos.filter((todo) => !todo.done);
    setTodos(updatedTodos);
  };

  return (
    <TodoUpdateContext.Provider value={updateTodo}>
      <div className="todo-container">
        <div className="todo-wrap">
          <Header addTodo={addTodo} />
          <List todos={todos} onDeleteTodo={deleteTodo} />
          <Footer todos={todos} deleteFinishedTodo={deleteFinishedTodo} />
        </div>
      </div>
    </TodoUpdateContext.Provider>
  );
}

export default App;
