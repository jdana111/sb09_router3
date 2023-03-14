import { Link } from "react-router-dom";
import "./App.css";

const Admin = () => (
  <div>
    <nav>
      <Link to="/">Search</Link>
      <Link to="/Report">Report</Link>
    </nav>
    <h1>Admin</h1>
  </div>
);

export default Admin;
