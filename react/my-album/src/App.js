import logo from "./logo.svg";
import { useState } from "react";
import "./App.css";
import AlbumCard from "./components/AlbumCard";
import "./container.css";
import css from "./app.module.css";
import AlbumEvent from "./components/AlbumEvent";
import Users from "./components/Users";
 
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
  const [theme, setTheme] = useState("light");
  const [albumsEvents, setAlbumsEvents] = useState(dummyDataEvents);
  const [albumsCards, setAlbumsCards] = useState(dummyDataAlbums);
  // console.log("App is render!!!!");
  return (
    <div className={theme === "light" ? css.lightTheme : css.darkTheme}>
      <MyHeader text="My Album Application" />
      <Users />
      {`current State of theme is: ${theme}`}
      <button
        onClick={() => {
          if (theme === "light") {
            setTheme("dark"); // theme = dark
          } else {
            setTheme("light"); // theme = light
          }
        }}
        style={{
          background: "blue",
          color: "white",
          padding: "10px",
          margin: "10px",
          cursor: "pointer",
        }}
      >
        Change Theme to: {theme === "light" ? "Dark" : "Light"}
      </button>
      {/* <MyHeader text="My Cars Application" /> */}
      {/* <MyHeader text="My Products Application" /> */}
      {/* <MyHeader /> */}
      {/* <MyButton color="blue" /> */}
      <div className="albumContainer">
        {albumsEvents.map((eventObj) => {
          return (
            <AlbumEvent
              key={`${eventObj.eventName}${eventObj.date}`}
              eventName={eventObj.eventName}
              date={eventObj.date}
              type={eventObj.type}
              numberOfImages={eventObj.numberOfImages}
              rank={eventObj.rank}
              onDelete={(eName) => {
                const newAlbumsEvents = albumsEvents.filter(
                  (ae) => ae.eventName !== eName
                );
                setAlbumsEvents(newAlbumsEvents);
              }}
            />
          );
        })}
      </div>
      <div className="albumContainer">
        {albumsCards.map((albumCard) => {
          return (
            <AlbumCard
              key={`${albumCard.imageUrl}${albumCard.date}`}
              imageUrl={albumCard.imageUrl}
              description={albumCard.description}
              date={albumCard.date}
              deleteSingleItem={(imageUrl) => {
                const cardIndexToDelete = albumsCards.findIndex(
                  (a) => a.imageUrl === imageUrl
                );
                const copy = [...albumsCards];
                copy.splice(cardIndexToDelete, 1);
                setAlbumsCards(copy);
              }}
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
