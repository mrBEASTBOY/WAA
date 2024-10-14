import Item from "../Item/Item";
import { Todo } from "../types/Todo";
import "./List.css";
export default function List({
  todos,
  onDeleteTodo,
}: {
  todos: Todo[] | null;
  onDeleteTodo: (id: number | string) => void;
}) {
  return (
    <ul className="todo-main">
      {todos?.map((todo) => (
        <Item todo={todo} key={todo.id} onDeleteTodo={onDeleteTodo} />
      ))}
    </ul>
  );
}
