import './App.css';
import Navbar from  "./components/Navbar"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from  "./components/Footer"
import Home from  "./components/Home"
import Projects from  "./components/Projects"
import Contact from  "./components/Contact"

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/projects" element={<Projects/>} />
          <Route path="/contact" element={<Contact/>} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
