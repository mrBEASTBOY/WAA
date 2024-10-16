import { useNavigate, useParams } from "react-router-dom";
import { posts } from "../data/posts";
import React, { useState } from "react";

export default function EditPost() {
  const { id } = useParams();
  const post = posts.find((p) => p.id === parseInt(id || ""));
  const postIdx = posts.findIndex((p) => p.id === parseInt(id || ""));
  const [title, setTitle] = useState(post ? post.title : "");
  const [content, setContent] = useState(post ? post.content : "");

  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (postIdx !== -1) {
      posts[postIdx] = { id: parseInt(id!), title, content };
    }
    navigate(`/posts/${id}`);
  };

  return (
    <div>
      {post ? (
        <>
          <h1>Edit Post</h1>
          <form onSubmit={handleSubmit}>
            <div>
              <label>Title</label>
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>

            <div>
              <label>Content</label>
              <input
                type="text"
                value={content}
                onChange={(e) => setContent(e.target.value)}
              />
            </div>

            <button type="submit">Save</button>
          </form>
        </>
      ) : (
        <p>Post Not Found</p>
      )}
    </div>
  );
}
