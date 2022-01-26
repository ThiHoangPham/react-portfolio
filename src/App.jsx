import Topbar from "./components/topbar/Topbar";
import Intro from "./components/intro/Intro";
import Portfolio from "./components/portfolio/Portfolio";
import Works from "./components/works/Works";
import Others from "./components/resume/Resume";
import Contact from "./components/contact/Contact";
import "./app.scss"
import { useState } from "react"
import Menu from "./components/menu/Menu";
import Resume from "./components/resume/Resume";
function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  return (
    <div className="app">
      <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <div className="sections">
        <Intro />
        <Portfolio />
        <Works />
        <Resume />
        <Contact />
      </div>
    </div>
  );
}

export default App;
