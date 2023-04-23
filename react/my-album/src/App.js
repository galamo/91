import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div>
      <MyHeader text="My Album Application" />
      <MyHeader text="My Cars Application" />
      <MyHeader text="My Products Application" />
      <MyHeader />
    </div>
  );
}

function MyHeader(props) {
  if (typeof props.text !== "string") return null;
  return (
    <button>
      <h1 style={{ color: "red" }}>{props.text || "Missing Text"} </h1>
    </button>
  );
}

export default App;
