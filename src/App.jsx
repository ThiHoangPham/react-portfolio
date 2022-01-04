import Topbar from "./components/topbar/Topbar";
import Intro from "./components/intro/Intro";
import Portfolio from "./components/portfolio/Portfolio";
import Works from "./components/works/Works";
import Others from "./components/others/Others";
import Contact from "./components/contact/Contact";

function App() {
  return (
    <div className="app">
      <Topbar />
      <div className="sections">
        <Intro />
        <Portfolio />
        <Works />
        <Others />
        <Contact />
      </div>
    </div>
  );
}

export default App;
