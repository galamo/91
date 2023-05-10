import { useState } from "react";
export default function Comments() {
  const [userName, setUserName] = useState("");
  const [comment, setComment] = useState("");
  const [allComments, setAllComments] = useState([]);
//   console.log(allComments);
  function setUserNameInput(event) {
    const value = event.target.value;
    setUserName(value);
  }
  function setCommentInput(event) {
    const value = event.target.value;
    setComment(value);
  }
  function addCommentHandler() {
      if (!userName || !comment) return;
    const newComment = { userName, comment };
    setAllComments([...allComments, newComment]);
    setUserName("");
    setComment("");
  }

  return (
    <div style={{ padding: "20px" }}>
      <div>
        <h3> Add Comment </h3>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <span>Name:</span>{" "}
          <input type={"text"} value={userName} onChange={setUserNameInput} />
        </div>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <span>Comment:</span>
          <input type={"text"} value={comment} onChange={setCommentInput} />
        </div>
        <div style={{ textAlign: "right" }}>
          <button onClick={addCommentHandler}> Add Comment </button>
        </div>
      </div>
      <div>
        <h3> Comments:</h3>
        {allComments.map((singleComment) => {
          return (
            <SingleComment
              //   userName={singleComment.userName}
              //   comment={singleComment.comment}
              {...singleComment}
            />
          );
        })}
      </div>
    </div>
  );
}

function SingleComment(props) {
  const { userName, comment } = props;
  return (
    <div style={{ padding: "10px", margin: "10px", background: "blue" }}>
      <span>{userName}</span>
      <p>{comment}</p>
    </div>
  );
}
