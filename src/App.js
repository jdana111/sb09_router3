import { BrowserRouter, Routes, Route } from "react-router-dom";
import Search from './Search';
import Report from './Report';
import Admin from './Admin';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Search />} />
          <Route path="/report" element={<Report />} />
          <Route path="/admin" element={<Admin />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
