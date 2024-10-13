import { useEffect, useState } from "react";
import "./App.scss";
import avatar from "./images/bozai.png";
import Comment from "./components/Comment";

// current logged in user info
const user = {
  // userid
  uid: "30009257",
  // profile
  avatar,
  // username
  uname: "John",
};

// Nav Tab
const tabs = [
  { type: "hot", text: "Top" },
  { type: "newest", text: "Newest" },
];

interface Comment {
  rpid: number;
  user: {
    uid: string;
    avatar: string;
    uname: string;
  };
  content: string;
  ctime: string;
  like: number;
}

const App = () => {
  // Comment List data
  const [comments, setComments] = useState<Comment[]>([]);

  const [totalCount, setTotalCount] = useState(comments.length);

  const [activeTab, setActiveTab] = useState("");

  const [newComment, setNewComment] = useState("");

  useEffect(() => {
    async function getList() {
      const res = await fetch("http://localhost:3004/list");
      const data: Comment[] = await res.json();
      setComments(data);
    }
    getList();
  }, []);

  const formatCurrentDate = () => {
    const now = new Date();
    const month = String(now.getMonth() + 1).padStart(2, "0"); // Get month (1-based)
    const day = String(now.getDate()).padStart(2, "0"); // Get day
    const hour = String(now.getHours()).padStart(2, "0"); // Get hours
    const minute = String(now.getMinutes()).padStart(2, "0"); // Get minutes
    return `${month}-${day} ${hour}:${minute}`;
  };

  // Stateful POST
  const handlePostCommentStateFul = () => {
    if (!newComment) return;
    console.log("Hello");
    const newCommentObj = {
      rpid: comments.length + 1,
      user: { uid: user.uid, avatar, uname: user.uname },
      content: newComment,
      ctime: formatCurrentDate(),
      like: 0,
    };

    setComments([newCommentObj, ...comments]);
    setTotalCount(comments.length);
    setNewComment("");
  };

  // Stateless POST
  const handlePostCommentStateLess = () => {
    if (!newComment) return;
  };

  const sortComments = (type: string) => {
    let sortedComments = [...comments];

    if (type === "top") {
      sortedComments = sortedComments.sort((a, b) => b.like - a.like);
    } else if (type === "newest") {
      sortedComments = sortedComments.sort((a, b) => {
        const [monthA, dayA] = a.ctime.split(" ")[0].split("-");
        const [monthB, dayB] = b.ctime.split(" ")[0].split("-");
        const timeA = a.ctime.split(" ")[1];
        const timeB = b.ctime.split(" ")[1];

        // Create date strings in a format the Date constructor understands (YYYY-MM-DDTHH:MM)
        const dateA = new Date(`2024-${monthA}-${dayA}T${timeA}`).getTime();
        const dateB = new Date(`2024-${monthB}-${dayB}T${timeB}`).getTime();

        return dateB - dateA;
      });
    }
    setComments(sortedComments);
    setActiveTab(type);
  };

  return (
    <div className="app">
      {/* Nav Tab */}
      <div className="reply-navigation">
        <ul className="nav-bar">
          <li className="nav-title">
            <span className="nav-title-text">Comments</span>
            {/* Like */}
            <span className="total-reply">{totalCount}</span>
          </li>
          <li className="nav-sort">
            {/* highlight class name： active */}
            <span
              className={`nav-item ${activeTab === "top" ? "active" : ""}`}
              onClick={() => sortComments("top")}
            >
              Top
            </span>
            <span
              className={`nav-item ${activeTab === "newest" ? "active" : ""}`}
              onClick={() => sortComments("newest")}
            >
              Newest
            </span>
          </li>
        </ul>
      </div>

      <div className="reply-wrap">
        {/* comments */}
        <div className="box-normal">
          {/* current logged in user profile */}
          <div className="reply-box-avatar">
            <div className="bili-avatar">
              <img className="bili-avatar-img" src={avatar} alt="Profile" />
            </div>
          </div>
          <div className="reply-box-wrap">
            {/* comment */}
            <textarea
              className="reply-box-textarea"
              placeholder="tell something..."
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
            />
            {/* post button */}
            <div className="reply-box-send">
              <div className="send-text" onClick={handlePostCommentStateFul}>
                post
              </div>
            </div>
          </div>
        </div>
        {/* comment list */}
        <div className="reply-list">
          {comments.map((comment) => (
            <div className="reply-item" key={comment.rpid}>
              {/* profile */}
              <div className="root-reply-avatar">
                <div className="bili-avatar">
                  <img className="bili-avatar-img" alt="" />
                </div>
              </div>

              <Comment comment={comment} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
