import React from "react";
import { Route, Routes, useLocation, matchPath } from "react-router-dom";

import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Home from "./Pages/Home";
import BrowsJobs from "./Pages/BrowsJobs";
import Contact from "./Pages/Contact";
import SingleJob from "./Pages/SingleJob";
import TopLoader from "./utils/TopLoader";
import TitleManager from "./utils/TitleManager";
import NotFound from "./Pages/NotFound";

function App() {
  const location = useLocation();

  // Function to match current path to a list of known valid routes
  const validRoutes = ["/", "/jobs", "/contact", "/job/:id"];
  const isValidPath = validRoutes.some((path) =>
    matchPath({ path, end: true }, location.pathname)
  );

  return (
    <>
      {isValidPath && <Navbar />}

      <TitleManager />
      <TopLoader />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/jobs" element={<BrowsJobs />} />
        <Route path="/job/:id" element={<SingleJob />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

      {isValidPath && <Footer />}
    </>
  );
}

export default App;
