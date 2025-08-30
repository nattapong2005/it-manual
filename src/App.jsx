import React from "react";
import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NotFound from "./pages/NotFound";
import Hardware from "./pages/Problem/Hardware";
import Software from "./pages/Problem/Software";
import Network from "./pages/Problem/Network";
import Other from "./pages/Problem/Other";
import FixTop from './FixTop';
import Crack from "./pages/Crack/Crack";
import Slide from "./pages/Slide/Slide";

const App = () => {
  return (
    <>
      <Router>
        <FixTop/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/hardware" element={<Hardware />} />
          <Route path="/software" element={<Software/>} />
          <Route path="/network" element={<Network/>}/>
          <Route path="/other" element={<Other/>} />
          <Route path="/crack" element={<Crack/>} />
          <Route path="/slide" element={<Slide/>} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
