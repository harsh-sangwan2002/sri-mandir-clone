import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import styled from "styled-components";
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
        <Carousel {...settings}>
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
        </Carousel>
    );
}

const Carousel = styled(Slider)`
  margin-top: 20px;
  text-align: center;
  cursor: pointer;
  height: 80vh;
  overflow: hidden;
`;

const Wrap = styled.div`
  
  a {
    display: block;

    img {
      width: 100%;
      height: 80%;
    }
  }
`;

export default BannerSlide;