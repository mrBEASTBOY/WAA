import { Todo } from "../types/Todo";
import "./Footer.css";
export default function Footer({
  todos,
  deleteFinishedTodo,
}: {
  todos: Todo[];
  deleteFinishedTodo: () => void;
}) {
  const finishedCount = todos.filter((todo) => todo.done).length;
  const totalCount = todos.length;

  const deleteHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    const result = window.confirm(
      "Are you sure you want to delete finished todos?"
    );
    if (result) {
      deleteFinishedTodo();
    }
  };
  return (
    <div className="todo-footer">
      <label>
        <input type="checkbox" />
      </label>
      <span>
        <span>Finished {finishedCount}</span> / total {totalCount}
      </span>
      <button className="btn btn-danger" onClick={deleteHandler}>
        Delete Finished Tasks
      </button>
    </div>
  );
}
