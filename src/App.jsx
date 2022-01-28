import Topbar from "./components/topbar/Topbar";
import Intro from "./components/intro/Intro";
import Portfolio from "./components/portfolio/Portfolio";
import Achievements from "./components/achievements/Achievements";
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
        <Achievements />
        <Resume />
        <Contact />
      </div>
    </div>
  );
}

export default App;
