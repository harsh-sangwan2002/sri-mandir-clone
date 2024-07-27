<<<<<<< HEAD
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Socials from "../components/Socials";

const Home = () => {
  
  return (
    <div>
      <Hero/>
    </div>
=======
import styled from 'styled-components';
import ImgSlider from '../components/ImgSlider';

const Container = styled.div`
  background: linear-gradient(to bottom, #fff, #ff5722);
  padding: 20px;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;
`;

const Text = styled.h1`
  font-size: 32px;
  color: #ff5722;
  margin-bottom: 20px;
`;

const Home = () => {
  return (
    <Container>
      <Content>
        <Text>
          Perform your Puja as per Vedic rituals at Famous Hindu Temples in India with Sri Mandir
        </Text>
        <ImgSlider />
      </Content>
    </Container>
>>>>>>> a6ee5869fe59f304161ec8361616ddca09373d18
  );
};

export default Home;