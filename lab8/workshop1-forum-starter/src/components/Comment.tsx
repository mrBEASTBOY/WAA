export default function Comment({ comment }: { comment: any }) {
  return (
    <div className="content-wrap">
      {/* username */}
      <div className="user-info">
        <div className="user-name">{comment.user.uname}</div>
      </div>
      {/* comment content */}
      <div className="root-reply">
        <span className="reply-content">{comment.content}</span>
        <div className="reply-info">
          {/* comment created time */}
          <span className="reply-time">{comment.ctime}</span>
          {/* total likes */}
          <span className="reply-time">Like:{comment.like}</span>
          <span className="delete-btn">Delete</span>
        </div>
      </div>
    </div>
  );
}
