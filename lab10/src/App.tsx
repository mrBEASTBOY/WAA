import React, { useState } from "react";
import "./App.css";
import Search from "./Search";
import List from "./List";
import Item from "./types/Item";

function App() {
  const [items, setItems] = useState<Item[]>([]);
  const [error, setError] = useState("");

  return (
    <div className="container">
      <Search setItems={setItems} setError={setError} />
      <List items={items} error={error} />
    </div>
  );
}

export default App;
