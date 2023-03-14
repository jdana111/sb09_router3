import { Link } from 'react-router-dom';
import './App.css';

const Report = () => (
  <div>
    <nav>
      <Link to="/">Home</Link>
      <Link to="/admin">Admin</Link>
    </nav>
    <h1>Report</h1>
  </div>
)

export default Report