import AboutComponent from "./components/AboutComponent";
import ContactComponent from "./components/ContactComponent";
import MenuComponent from "./components/MenuComponent";
import HomeComponent from "./components/HomeComponent";
import DisplayItem from "./components/DisplayItem";

import { Link, Routes, Route } from "react-router-dom";

import "./styles/App.css";

function App() {
  return (
    <div>
      <header>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/menu">Menu</Link>
          <Link to="/conatct">Conact</Link>
        </nav>
      </header>

      <main>Placeholder content - hello class!</main>
      <Routes>
        <Route exact path="/" element={<HomeComponent />} />
        <Route exact path="/menu" element={<MenuComponent />} />
        <Route exact path="/menu/:id" element={<DisplayItem />} />
        <Route exact path="/contact" element={<ContactComponent />} />
        <Route exact path="/about" element={<AboutComponent />} />
      </Routes>
      <footer>
        <nav></nav>
      </footer>
    </div>
  );
}

export default App;
