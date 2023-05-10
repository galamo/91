// import "./index.css";
import css from "./style.module.css";
function AlbumCard(props) {
  const { imageUrl, description, date } = props;
  if (!imageUrl) return null;

  return (
    <div className={css.albumCard}>
      <div className={css.BgBlack}>
        <p> {`The description is: ${description}`} </p>
        <img src={imageUrl} height={200} width={200} />
        <h4> {new Date(date).toLocaleString()} </h4>
      </div>
    </div>
  );
}

export default AlbumCard;
