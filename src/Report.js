import { Link } from "react-router-dom";

const Report = () => (
  <div>
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/admin">Admin</Link>
      </li>
    </ul>
    <h1>Report</h1>
  </div>
);

export default Report;
