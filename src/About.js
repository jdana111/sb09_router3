import { Link } from 'react-router-dom';
import './App.css';

const About = () => (
  <div>
    <nav>
      <Link to="/">Home</Link>
      <Link to="/contact">Contact</Link>
    </nav>
    <h1>About</h1>
  </div>
)

export default About