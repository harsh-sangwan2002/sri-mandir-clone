import styled from 'styled-components';
import BannerSlide from './BannerSlide';

const HeroContainer = styled.div`
  margin-top:1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1rem 5rem;
  background-image: linear-gradient(to bottom, #eacfc2, #FFFFFF);
  color: #000;
  min-height: 50vh;
  width: 100vw;
  box-sizing: border-box;

  @media (max-width: 1024px) {
    padding: 1rem 0;
  }

  @media (max-width: 768px) {
    padding: 1rem 0;
  }

  @media (max-width: 480px) {
    padding: 1rem 0;
  }
`;

const HeroText = styled.h1`
  font-size: 34px; 
  letter-spacing: 2px;
  line-height: 3.5rem;
  font-weight: 600;
  color: #333;
  text-align: center;
  margin-bottom: 5rem;

  @media (max-width: 768px) {
    font-size: 28px;
  }

  @media (max-width: 480px) {
    font-size: 24px;
  }
`;

const Hero = () => {
  return (
    <HeroContainer>
      <HeroText>
        Perform your Puja as per Vedic rituals at Famous Hindu Temples in India with Sri Mandir
      </HeroText>
      <BannerSlide />
    </HeroContainer>
  );
};

export default Hero;
