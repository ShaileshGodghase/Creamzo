import React from 'react';
import './Css/App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Entertainment from './Components/Entertainment';
import Fashion from './Components/Fashion';
import Technology from './Components/Technology';
import LandingPage from './Components/LandingPage';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Categories from './Components/Categories';

function App() {
  return (
    <>
    <BrowserRouter>
      <Navbar />
      <Categories />
      <Routes>
        <Route index element={<LandingPage />} />
        <Route path="technology" element={<Technology />} />
        <Route path="entertainment" element={<Entertainment />} />
        <Route path="fashion" element={<Fashion />} />
      </Routes>
      <Footer />
    </BrowserRouter>
    </>
  );
}

export default App;
