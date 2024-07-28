import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import EpujaHistory from './pages/EpujaHistory';
import Epuja from './pages/Epuja';
import EpujaDetails from './pages/EpujaDetails';
import CardProvider from './context/CardContext.js';
import PujaPackageProvider from './context/PujaPackageContext.js';

const App = () => (
  <CardProvider>
    <PujaPackageProvider>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/epuja" element={<Epuja />} />
        <Route path="/epuja/history" element={<EpujaHistory />} />
        <Route path="/epuja/:id" element={<EpujaDetails />} />
      </Routes>
    </PujaPackageProvider>
  </CardProvider>
);

export default App;
