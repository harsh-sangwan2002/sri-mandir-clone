import Slider from 'react-slick';
import styled from 'styled-components';
import BannerImages from "../constants/BannerImages";
import BannerSlide from './BannerSlide'
import Footer from './Footer';
import Cards from './Cards';

const HeroContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 1rem 5rem;
  background-image: linear-gradient(to bottom, #eacfc2, #FFFFFF);
  color: #000;
  min-height: 50vh;
  margin-bottom:5rem;
`;

const HeroText = styled.h1`
  font-size: 36px; 
  font-weight: bold;
  color: #333;
  text-align: center;
`;

const Hero = () => {
  return (
    <HeroContainer>
      <HeroText>
        Perform your Puja as per Vedic rituals at Famous Hindu Temples in India with Sri Mandir
      </HeroText>
      <BannerSlide/>
      <Cards/>
    </HeroContainer>
  );
};

export default Hero;