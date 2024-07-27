import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import GlobalStyles from './GlobalStyles';
import Home from './pages/Home';
<<<<<<< HEAD
import Epuja from './pages/Epuja';
import Footer from './components/Footer';
import Socials from './components/Socials';
=======
>>>>>>> a6ee5869fe59f304161ec8361616ddca09373d18
// import Panchang from './Panchang';
// import Temples from './Temples';

const App = () => {
  return (
    <Router>
      <GlobalStyles />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
<<<<<<< HEAD
        <Route path="/epuja" element={<Epuja />} />
        {/* <Route path="/temples" element={<Temples />} /> */}
      </Routes>
      <Footer />
      <Socials />
=======
        {/* <Route path="/panchang" element={<Panchang />} /> */}
        {/* <Route path="/temples" element={<Temples />} /> */}
      </Routes>
>>>>>>> a6ee5869fe59f304161ec8361616ddca09373d18
    </Router>
  );
};

export default App;
