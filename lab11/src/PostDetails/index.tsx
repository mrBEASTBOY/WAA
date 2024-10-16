import { Link, useParams } from "react-router-dom";
import { posts } from "../data/posts";

export default function PostDetails() {
  const { id } = useParams();
  const post = posts.find((p) => p.id === parseInt(id!));

  return (
    <div>
      {post ? (
        <>
          <h1>{post.title}</h1>
          <p>{post.content}</p>
          <Link to={`/posts/${post.id}/edit`}>Edit</Link>
        </>
      ) : (
        <p>Post Not Found</p>
      )}
    </div>
  );
}
