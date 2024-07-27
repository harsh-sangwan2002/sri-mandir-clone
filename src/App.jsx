import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import GlobalStyles from './GlobalStyles';
import Home from './pages/Home';
// import Panchang from './Panchang';
// import Temples from './Temples';

const App = () => {
  return (
    <Router>
      <GlobalStyles />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/panchang" element={<Panchang />} /> */}
        {/* <Route path="/temples" element={<Temples />} /> */}
      </Routes>
    </Router>
  );
};

export default App;
