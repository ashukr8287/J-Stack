import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Home from './Pages/Home';
import BrowsJobs from './Pages/BrowsJobs';
import Contact from './Pages/Contact';
import SingleJob from './Pages/SingleJob';
import TopLoader from './utils/TopLoader';
import TitleManager from './utils/TitleManager';

function App() {
  return (
    <>
      <Navbar />
      <TitleManager/>
      <TopLoader/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/jobs' element={<BrowsJobs/>}/>
        <Route path='/job/:id' element={<SingleJob/>}/>
        <Route path='/contact' element={<Contact/>}/>
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
