import { useState } from "react";
const likeUrl =
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNfPQ_67ERoFGt-YVPMfxNecMI4XENQvCeDKWV7aih&s";
function LikeCounter() {
  const [counter, setCounter] = useState(0);
  //   console.log("Like counter render");
  function incrementCounter() {
    setCounter(counter + 1);
  }

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <img
        height={25}
        width={25}
        src={likeUrl}
        alt="Missing"
        onClick={incrementCounter}
      />
      {counter > 0 ? counter : null}
    </div>
  );
}

export default LikeCounter;
