import { useDebugValue, useState } from "react";
export default function Comments(props) {
  const { extraHeader } = props;
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
          <span>Comment {extraHeader}:</span>
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
              key={singleComment.comment}
              {...singleComment}
              deleteSingleComment={(
                currentUserToDelete,
                currentCommentToDelete
              ) => {
                const newComments = allComments.filter(
                  (c) =>
                    c.userName !== currentUserToDelete &&
                    c.comment !== currentCommentToDelete
                );
                setAllComments(newComments);
              }}
            />
          );
        })}
      </div>
    </div>
  );
}

function SingleComment(props) {
  const [currentFontSize, setCurrentFontSize] = useState(15);
  const { userName, comment } = props;
  return (
    <div style={{ padding: "10px", margin: "10px", background: "blue" }}>
      <span>{userName}</span>
      <p style={{ fontSize: `${currentFontSize}px` }}>{comment} </p>
      <button
        onClick={() => {
          props.deleteSingleComment(userName, comment);
        }}
      >
        Delete
      </button>
      <button
        onClick={() => {
          setCurrentFontSize(currentFontSize + 1);
        }}
      >
        +
      </button>
      <button
        onClick={() => {
          setCurrentFontSize(currentFontSize - 1);
        }}
      >
        -
      </button>
    </div>
  );
}
