import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import EpujaHistory from './pages/EpujaHistory';
import Epuja from './pages/Epuja';
import EpujaDetails from './pages/EpujaDetails';
import CardProvider from './context/CardContext';
import PujaPackageProvider from './context/PujaPackageContext';
import Cart from './pages/Cart';
import Booking from './pages/Booking';
import Confirm from './pages/Confirm';

const App = () => (
  <CardProvider>
    <PujaPackageProvider>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/epuja" element={<Epuja />} />
        <Route path="/epuja/history" element={<EpujaHistory />} />
        <Route path="/epuja/:id" element={<EpujaDetails />} />
        <Route path="/epuja/cart/:bookingId" element={<Cart />} />
        <Route path="/epuja/sankalp/:val" element={<Booking />} />
        <Route path="/epuja/confirm" element={<Confirm />} />
      </Routes>
    </PujaPackageProvider>
  </CardProvider>
);

export default App;
