import logo from "./logo.svg";
import "./App.css";
import AlbumCard from "./components/AlbumCard";
import "./container.css";
import css from "./app.module.css";
function App() {
  return (
    <div>
      <MyHeader text="My Album Application" />
      <MyHeader text="My Cars Application" />
      <MyHeader text="My Products Application" />
      <MyHeader />
      <MyButton color="blue" />
      <div className="albumContainer">
        <AlbumCard
          imageUrl="https://www.thatbangkoklife.com/wp-content/uploads/2020/03/koh-nang-yuan.jpg"
          description="fun in thai"
          date={"'5/7/2020, 6:53:07 PM'"}
        />
        <AlbumCard
          imageUrl="https://www.thatbangkoklife.com/wp-content/uploads/2020/03/koh-nang-yuan.jpg"
          description="fun in thai"
          date={"'5/7/2020, 6:53:07 PM'"}
        />
        <AlbumCard
          imageUrl="https://www.thatbangkoklife.com/wp-content/uploads/2020/03/koh-nang-yuan.jpg"
          description="fun in thai"
          date={"'5/7/2020, 6:53:07 PM'"}
        />
        <AlbumCard
          imageUrl="https://www.thatbangkoklife.com/wp-content/uploads/2020/03/koh-nang-yuan.jpg"
          description="fun in thai"
          date={"'5/7/2020, 6:53:07 PM'"}
        />
        <AlbumCard
          imageUrl="https://www.thatbangkoklife.com/wp-content/uploads/2020/03/koh-nang-yuan.jpg"
          description="fun in thai"
          date={"'5/7/2020, 6:53:07 PM'"}
        />
        <AlbumCard
          imageUrl="https://www.thatbangkoklife.com/wp-content/uploads/2020/03/koh-nang-yuan.jpg"
          description="fun in thai"
          date={"'5/7/2020, 6:53:07 PM'"}
        />
        <AlbumCard
          imageUrl="https://www.thatbangkoklife.com/wp-content/uploads/2020/03/koh-nang-yuan.jpg"
          description="fun in thai"
          date={"'5/7/2020, 6:53:07 PM'"}
        />
      </div>
    </div>
  );
}

function MyHeader(props) {
  if (typeof props.text !== "string") return null;
  return (
    <button className={css.buttonHeader}>
      <h1 style={{ color: "red", fontWeight: "bold" }}>
        {props.text || "Missing Text"}{" "}
      </h1>
    </button>
  );
}

let someBoolean = true;

function MyButton(props) {
  const { color } = props;
  return (
    <button style={{ color: someBoolean ? "green" : "red" }}> Click me </button>
  );
}

export default App;
