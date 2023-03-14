import { Link } from "react-router-dom";
import "./App.css";

const Home = () => (
  <div>
    <nav>
      <Link to="/about">About</Link>
      <Link to="/contact">Contact</Link>
    </nav>
    <h1>Home</h1>
  </div>
);

export default Home;
