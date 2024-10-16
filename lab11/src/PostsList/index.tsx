import { posts } from "../data/posts";
import { Link } from "react-router-dom";

export default function PostsList() {
  return (
    <div>
      <h1>Posts List</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <Link to={`/posts/${post.id}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
