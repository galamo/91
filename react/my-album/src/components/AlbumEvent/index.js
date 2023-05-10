import EventRank from "../EventRank";
import LikeCounter from "../LikeCounter";
import css from "./style.module.css";

function AlbumEvent(props) {
  const { eventName, date, type, numberOfImages, rank } = props;

  const numberOfImagesColor = getColorByNumberOfImages(numberOfImages);
  return (
    <div className={css.eventCard}>
      <h2>{eventName}</h2>
      <span>{date}</span>
      <h3> {type} </h3>
      {numberOfImages ? (
        <span
          className={css.circle}
          style={{ background: numberOfImagesColor }}
        >
          {numberOfImages}
        </span>
      ) : null}
      <EventRank rank={rank} />
      <LikeCounter />
    </div>
  );
}

function getColorByNumberOfImages(number) {
  if (typeof number !== "number") return;
  if (number === 0) return;
  if (number <= 10) return "red";
  if (number > 10 && number <= 50) return "blue";
  if (number > 50) return "yellow";
}

export default AlbumEvent;
