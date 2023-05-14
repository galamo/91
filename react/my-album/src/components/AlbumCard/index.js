// import "./index.css";
import { useState } from "react";
import Comments from "../Comments";
import css from "./style.module.css";
const MULTIPLE_FACTOR_IMAGE = 30;
function AlbumCard(props) {
  const { imageUrl, description, date, deleteSingleItem } = props;
  const [color, setColor] = useState("white");
  const [imageWIdth, setImageWidth] = useState(200);
  const [imageHeight, setImageHeight] = useState(200);

  if (!imageUrl) return null;

  function increaseImage() {
    setImageHeight(250);
    setImageWidth(250);
  }

  const isDeleteWorking = typeof deleteSingleItem === "function";
  return (
    <div className={css.albumCard}>
      {isDeleteWorking ? (
        <button
          onClick={() => {
            deleteSingleItem(imageUrl);
          }}
        >
          DELETE ME
        </button>
      ) : null}
      <input
        min={1}
        max={10}
        type={"range"}
        onChange={(event) => {
          const n = Number(event.target.value);
          setImageHeight(n * MULTIPLE_FACTOR_IMAGE);
          setImageWidth(n * MULTIPLE_FACTOR_IMAGE);
        }}
      />
      <input
        type={"text"}
        onChange={(event) => {
          // console.log(event.target.value);
          setColor(event.target.value);
        }}
      />
      <div
        style={{ background: color }}
        onClick={() => {
          setColor("green");
          increaseImage();
        }}
      >
        <p> {`The description is: ${description}`} </p>
        <img src={imageUrl} height={imageHeight} width={imageWIdth} />
        <h4> {new Date(date).toLocaleString()} </h4>
        <Comments />
      </div>
    </div>
  );
}

export default AlbumCard;
