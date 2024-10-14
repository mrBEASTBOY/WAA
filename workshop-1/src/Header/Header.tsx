import React, { useState } from "react";
import "./Header.css";
export default function Header({
  addTodo,
}: {
  addTodo: (todo: string) => void;
}) {
  const [inputVal, setInputVal] = useState("");
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputVal(e.target.value);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    let val: string = inputVal.trim();
    if (e.key === "Enter") {
      if (val === "") {
        alert("Please enter valid string");
      } else {
        addTodo(inputVal);
        setInputVal("");
      }
    }
  };
  return (
    <div className="todo-header">
      <input
        type="text"
        placeholder="Enter task name"
        value={inputVal}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
      />
    </div>
  );
}
