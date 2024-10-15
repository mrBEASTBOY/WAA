import axios from "axios";
import React, { useState } from "react";
import Item from "../types/Item";

export default function Search({
  setItems,
  setError,
}: {
  setItems: (items: Item[]) => void;
  setError: (message: string) => void;
}) {
  const [searchVal, setSearchVal] = useState(""); // Initialize as an empty string

  const handleSearch = async () => {
    try {
      const res = await axios.get(
        `https://api.github.com/search/users?q=${searchVal}`
      );
      setItems(res.data.items);
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("Unknown error");
      }
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchVal(e.target.value); // Keeps it controlled
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <section className="jumbotron">
      <h3 className="jumbotron-heading">Search Github Users</h3>
      <div>
        <input
          type="text"
          placeholder="enter the name you search"
          value={searchVal} // Ensure it is always controlled
          onChange={handleChange}
          onKeyDown={handleKeyDown}
        />
        &nbsp;<button onClick={handleSearch}>Search</button>
      </div>
    </section>
  );
}
