import "./App.css";

import AboutMe from "./components/AboutMe";
import BottomBar from "./components/BottomBar";
import Intro from "./components/Intro";
import LatestNews from "./components/LatestNews";
import LetsTalk from "./components/LetsTalk";
import NavBar from "./components/NavBar";
import Portfolio from "./components/Portfolio";
import Rights from "./components/Rights";
import Testimonial from "./components/Testimonial";
import Grid from "@mui/material/Grid";


function App() {
  return (
    <div>
      <NavBar />
      <Intro />
      <AboutMe />
      <Portfolio />
      <Testimonial />
      <LetsTalk />
      <LatestNews />
      <BottomBar />
      <Rights />
    </div>
  );
}

export default App;
