import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import About from "./pages/About";
import Photography from "./pages/Photography";

const Navbar = () => (
  <nav className="bg-gray-800 text-white p-4 flex justify-center gap-6">
    <Link to="/" className="hover:underline">Home</Link>
    <Link to="/projects" className="hover:underline">Projects</Link>
    <Link to="/about" className="hover:underline">About Me</Link>
    <Link to="/photography" className="hover:underline">Photography</Link>
  </nav>
);

export default function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/about" element={<About />} />
        <Route path="/photography" element={<Photography />} />
      </Routes>
    </Router>
  );
}