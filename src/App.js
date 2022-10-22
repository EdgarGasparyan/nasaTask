import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Home from "./components/home/Home";
import Asteroids from "./components/asteroids/Asteroids";
import Astronomy from "./components/astronomy/Astronomy";
import Planet from "./components/planet/Planet";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="Asteroids" element={<Asteroids />} />
        <Route path="Astronomy" element={<Astronomy />} />
        <Route path="Planet" element={<Planet />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
