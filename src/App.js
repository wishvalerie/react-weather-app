import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="New York" />
        <footer>
          This project was coded by{" "}
          <a
            href="https://www.instagram.com/wishvalerie/?hl=en"
            target="_blank"
            rel="noopener noreferrer"
          >
            Valeriia Yarovyk
          </a>{" "}
          and is{" "}
          <a
            href="https://github.com/wishvalerie/react-weather-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            open-sourced on Github
          </a>
        </footer>
      </div>
    </div>
  );
}
