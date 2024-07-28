import { Route, Routes } from 'react-router-dom';
import styled from 'styled-components';

import GlobalStyle from './GlobalStyles';

import Home from './pages/Home';
import EpujaHistory from './pages/EpujaHistory';
import Epuja from './pages/Epuja';
import EpujaDetails from './pages/EpujaDetails';
import Cart from './pages/Cart';
import Booking from './pages/Booking';
import Confirm from './pages/Confirm';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Socials from './components/Socials';

import CardProvider from './context/CardContext';
import PujaPackageProvider from './context/PujaPackageContext';

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const ContentWrapper = styled.div`
  flex: 1;
`;

const EpujaLayout = () => (
  <div>
    <Routes>
      <Route path="/" element={<Epuja />} />
      <Route path="history" element={<EpujaHistory />} />
      <Route path=":id" element={<EpujaDetails />} />
      <Route path="cart/:bookingId" element={<Cart />} />
      <Route path="sankalp/:val" element={<Booking />} />
      <Route path="confirm" element={<Confirm />} />
    </Routes>
  </div>
);

const App = () => (
  <AppContainer>
    <CardProvider>
      <PujaPackageProvider>
        <GlobalStyle />
        <Navbar />
        <ContentWrapper>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/epuja/*" element={<EpujaLayout />} />
          </Routes>
        </ContentWrapper>
        <Footer />
        <Socials />
      </PujaPackageProvider>
    </CardProvider>
  </AppContainer>
);

export default App;
