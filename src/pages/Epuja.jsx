import Cards from '../components/Cards';
import styled from 'styled-components';
import Hero from '../components/Hero';
import Footer from '../components/Footer';
import Socials from '../components/Socials';

const PageContainer = styled.div`
  margin: 0px;
  padding:0px;
`;

const Epuja = () => {
  return (
    <PageContainer>
      <Hero/>
      <Cards />
      <Footer/>
      <Socials/>
    </PageContainer>
  );
};

export default Epuja;
