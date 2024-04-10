import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Link, Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <header>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="movies">Movies</Link>
          </li>
          <li>
            <Link to="about">About</Link>
          </li>
        </ul>
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default App;
