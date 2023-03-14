import { Link } from "react-router-dom";

const Search = () => (
  <div>
    <ul>
      <li>
        <Link to="/report">Report</Link>
      </li>
      <li>
        <Link to="/admin">Admin</Link>
      </li>
    </ul>
    <h1>Search</h1>
  </div>
);

export default Search;
