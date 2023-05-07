import logo from "./logo.svg";
import "./App.css";
import AlbumCard from "./components/AlbumCard";
import "./container.css";
import css from "./app.module.css";
import AlbumEvent from "./components/AlbumEvent";
const dummyDataAlbums = [
  {
    imageUrl:
      "https://www.thatbangkoklife.com/wp-content/uploads/2020/03/koh-nang-yuan.jpg",
    description: "Fun in thailand",
    date: new Date().toLocaleDateString(),
  },
  {
    imageUrl:
      "https://media.cnn.com/api/v1/images/stellar/prod/200924183413-dubai-9-1.jpg?q=w_1600,h_900,x_0,y_0,c_fill/w_1280",
    description: "Fun in Dubai",
    date: new Date().toLocaleDateString(),
  },
  {
    imageUrl: "https://www.bardugo.com/wp-content/uploads/11.jpg",
    description: "Fun in Israel",
    date: new Date().toLocaleDateString(),
  },
  {
    imageUrl: "https://media.timeout.com/images/105434111/image.jpg",
    description: "Fun in TLV",
    date: new Date().toLocaleDateString(),
  },
];

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
        {dummyDataAlbums.map((albumCard) => {
          return (
            <AlbumCard
              imageUrl={albumCard.imageUrl}
              description={albumCard.description}
              date={albumCard.date}
            />
          );
        })}
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
