import logo from "./logo.svg";
import "./App.css";
import AlbumCard from "./components/AlbumCard";
import "./container.css";
import css from "./app.module.css";
import AlbumEvent from "./components/AlbumEvent";
const dummyDataEvents = [
  {
    eventName: "Avi's Pessah",
    date: "5/7/2020, 6:53:07 PM",
    type: "Holiday",
    numberOfImages: 50,
    rank: 10,
  },
  {
    eventName: "Noy's Driving license",
    date: "5/7/2020, 6:53:07 PM",
    type: "Test",
    numberOfImages: 0,
    rank: 3,
  },
  {
    eventName: "Tomer's Birthday",
    date: "5/7/2020, 6:53:07 PM",
    type: "Test",
    numberOfImages: 0,
    rank: 3,
  },
  {
    eventName: "Tomer's Wedding",
    date: "5/7/2020, 6:53:07 PM",
    type: "Test",
    numberOfImages: 0,
    rank: 3,
  },
  {
    eventName: "Rafi's Exit",
    date: "5/7/2020, 6:53:07 PM",
    type: "Test",
    numberOfImages: 0,
    rank: 3,
  },
];
function App() {
  return (
    <div>
      <MyHeader text="My Album Application" />
      {/* <MyHeader text="My Cars Application" /> */}
      {/* <MyHeader text="My Products Application" /> */}
      {/* <MyHeader /> */}
      {/* <MyButton color="blue" /> */}
      <div className="albumContainer">
        {dummyDataEvents.map((eventObj) => {
          return (
            <AlbumEvent
              eventName={eventObj.eventName}
              date={eventObj.date}
              type={eventObj.type}
              numberOfImages={eventObj.numberOfImages}
              rank={eventObj.rank}
            />
          );
        })}
      </div>
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
