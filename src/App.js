import { useState } from "react";
import {
  Navbar,
  Home,
  About,
  Skills,
  Works,
  Contact,
} from "./components/imports";

function App() {
  const [darkTheme, setDarkTheme] = useState(false);
  return (
    <div className={darkTheme ? "dark" : ""}>
      <span className="">
        <Navbar darkTheme={darkTheme} setDarkTheme={setDarkTheme} />
        <Home />
        <About />
        <Skills />
        <Works />
        <Contact />
      </span>
    </div>
  );
}

export default App;
