import React from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import styled from 'styled-components';
import devotees from '../assets/banner_devotees.webp';
import puja from '../assets/banner_puja.webp';
import review from '../assets/banner_review.webp';

const BannerSlide = () => {
  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };
  return (
    <CarouselContainer>
      <StyledSlider {...settings}>
        <Wrap>
          <a>
            <img src={devotees} alt="" />
          </a>
        </Wrap>
        <Wrap>
          <a>
            <img src={puja} alt="" />
          </a>
        </Wrap>
        <Wrap>
          <a>
            <img src={review} alt="" />
          </a>
        </Wrap>
      </StyledSlider>
    </CarouselContainer>
  );
}

const CarouselContainer = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem; 
  box-sizing: border-box;
`;

const StyledSlider = styled(Slider)`
  .slick-list {
    overflow: hidden;
  }

  .slick-slide img {
    width: 100%;
    height: auto;
  }

  .slick-dots li button:before {
    color: #ff5722;
  }
`;

const Wrap = styled.div`
  a {
    display: block;
    img {
      width: 100%;
      height: auto;
    }
  }
`;

export default BannerSlide;
