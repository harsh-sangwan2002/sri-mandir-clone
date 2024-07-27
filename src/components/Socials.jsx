import React from 'react';
import styled from 'styled-components';
import img1 from '../assets/azadi_ka_mahotsav.svg';
import img2 from '../assets/startupindia.svg';
import img3 from '../assets/digitalindia.svg';
import instagram from '../assets/insta.svg';
import youtube from '../assets/youtube.svg';
import facebook from '../assets/facebook.svg';

const Container = styled.footer`
  color: #333;
  text-align: center;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 20px;
  padding: 1rem 6rem;
  max-height:62px;
`;

const Images = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap:1rem;

  img{
    width:7rem;
    height:3rem;
  }
`
const SocialLinks = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

const SocialLink = styled.li`

    margin-right: 1rem;
  > a {
    text-decoration: none;
    color: white;
    transition: color 0.2s ease-in-out;
    font-size:12px;
    font-weight: bold;
    letter-spacing: normal;
    &:hover {
      color: #ccc;
    }
  }
`;

const Socials = () => {
    return (
        <Container>
            <Images>
                <li><img src={img3} alt="Digital India" /></li>
                <li><img src={img2} alt="StartUp India" /></li>
                <li><img src={img1} alt="Azadi Ka Mohatsav" /></li>
            </Images>
            <div>
                <SocialLinks>
                    <SocialLink>
                        <a href="https://www.srimandir.com/aboutus/en" target='_blank'>
                            <img src={instagram} alt="Insta" />
                        </a>
                    </SocialLink>
                    <SocialLink>
                        <a href="https://www.srimandir.com/terms-of-use" target='_blank'>
                            <img src={youtube} alt="Insta" />
                        </a>
                    </SocialLink>
                    <SocialLink>
                        <a href="https://www.srimandir.com/privacy-policy" target='_blank'>
                            <img src={facebook} alt="Facebook" />
                        </a>
                    </SocialLink>
                </SocialLinks>
            </div>
        </Container>
    );
};

export default Socials;