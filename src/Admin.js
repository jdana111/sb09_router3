import { Link } from "react-router-dom";

const Admin = () => (
  <div>
    <ul>
      <li>
        <Link to="/">Search</Link>
      </li>
      <li>
        <Link to="/Report">Report</Link>
      </li>
    </ul>
    <h1>Admin</h1>
  </div>
);

export default Admin;
