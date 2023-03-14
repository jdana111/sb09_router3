import { Link } from "react-router-dom";
import "./App.css";

const Search = () => (
  <div>
    <nav>
      <Link to="/report">Report</Link>
      <Link to="/admin">Admin</Link>
    </nav>
    <h1>Search</h1>
  </div>
);

export default Search;
