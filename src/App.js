import React from 'react';
import './Css/App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Entertainment from './Components/Entertainment';
import Fashion from './Components/Fashion';
import Technology from './Components/Technology';
import LandingPage from './Components/LandingPage';
import Footer from './Components/Footer';
import Categories from './Components/Categories';
import Header from './Components/Header';
import World from './Components/World';
import Business from './Components/Business'
import Sports from './Components/Sports';
import Science from './Components/Science';
import Literature from './Components/Literature';
import Health from './Components/Health';

function App() {
  return (
    <>
    <BrowserRouter>
      <Header />
      <Categories />
      <Routes>
        <Route index element={<LandingPage />} />
        <Route path="world" element={<World />} />
        <Route path="business" element={<Business />} />
        <Route path="technology" element={<Technology />} />
        <Route path="entertainment" element={<Entertainment />} />
        <Route path="sports" element={<Sports />} />
        <Route path="science" element={<Science />} />
        <Route path="health" element={<Health />} />
        <Route path="fashion" element={<Fashion />} />
        <Route path="literature" element={<Literature />} />
      </Routes>
      <Footer />
    </BrowserRouter>
    </>
  );
}

export default App;
