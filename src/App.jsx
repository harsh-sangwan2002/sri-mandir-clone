// App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import GlobalStyles from './GlobalStyles';
import Home from './pages/Home';
import Epuja from './pages/Epuja';
import Footer from './components/Footer';
import Socials from './components/Socials';
// import Panchang from './Panchang';
// import Temples from './Temples';

const App = () => {
  return (
    <Router>
      <GlobalStyles />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/epuja" element={<Epuja />} />
        {/* <Route path="/temples" element={<Temples />} /> */}
      </Routes>
      <Footer />
      <Socials />
    </Router>
  );
};

export default App;
