import React, { HtmlHTMLAttributes } from "react";
import { Todo } from "../types/Todo";
import "./Item.css";
import { useTodoUpdate } from "../context/TodoUpdateContext";
export default function Item({
  todo,
  onDeleteTodo,
}: {
  todo: Todo;
  onDeleteTodo: (id: number | string) => void;
}) {
  const updateTodo = useTodoUpdate();
  const handleChange =
    (id: string | number) => (e: React.ChangeEvent<HTMLInputElement>) => {
      console.log("hello");
      updateTodo(id, e.target.checked);
    };

  const deleteHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    const result = window.confirm("Are you sure you want to delete this todo?");
    if (result) {
      onDeleteTodo(todo.id);
    }
  };
  return (
    <li>
      <label>
        <input
          type="checkbox"
          checked={todo.done}
          onChange={handleChange(todo.id)}
        />
        <span>{todo.name}</span>
      </label>
      <button className="btn btn-danger" onClick={deleteHandler}>
        Delete
      </button>
    </li>
  );
}
