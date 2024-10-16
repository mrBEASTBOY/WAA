import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  NavLink,
} from "react-router-dom";

import "./App.css";
import PostsList from "./PostsList";
import PostDetails from "./PostDetails";
import EditPost from "./EditPost";

function App() {
  return (
    <Router>
      <NavLink to="/">Posts List</NavLink>
      <Routes>
        <Route path="/" element={<PostsList />} />
        <Route path="/posts/:id" element={<PostDetails />} />
        <Route path="/posts/:id/edit" element={<EditPost />} />
      </Routes>
    </Router>
  );
}

export default App;
