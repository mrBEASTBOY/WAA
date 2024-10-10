import { useState } from "react";
import "./App.scss";
import avatar from "./images/bozai.png";

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

const App = () => {
  // Comment List data
  const [comments, setComments] = useState([
    {
      // comment id
      rpid: 3,
      // user info
      user: {
        uid: "13258165",
        avatar: "",
        uname: "Jay Zhou",
      },
      // comment content
      content: "Nice, well done",
      // created datetime
      ctime: "10-18 08:15",
      like: 88,
    },
    {
      rpid: 2,
      user: {
        uid: "36080105",
        avatar: "",
        uname: "Song Xu",
      },
      content: "I search for you thousands of times, from dawn till dusk.",
      ctime: "11-13 11:29",
      like: 88,
    },
    {
      rpid: 1,
      user: {
        uid: "30009257",
        avatar,
        uname: "John",
      },
      content:
        "I told my computer I needed a break... now it will not stop sending me vacation ads.",
      ctime: "10-19 09:00",
      like: 66,
    },
  ]);

  const [totalCount, setTotalCount] = useState(comments.length);

  const [activeTab, setActiveTab] = useState("");

  const [newComment, setNewComment] = useState("");

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
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
