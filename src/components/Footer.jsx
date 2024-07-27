import React from 'react';
import styled from 'styled-components';
import footer_logo from '../assets/sirmandir_footer.svg';

const FooterContainer = styled.footer`
  background-image: linear-gradient(to right, #fd7d2b, #f99822);
  color: #fff;
  text-align: center;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 20px;
  padding: 1rem 62px;
  max-height:62px;

  >img{
    width:136px;
    height:31px;
    padding-left:2rem;
  }

  >div{
    margin-right:3rem;
  }
`;

const FooterLinks = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

const FooterLink = styled.li`

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

const Copyright = styled.small`
  font-size: 14px;
  color: white;
  margin-top: 10px;
  font-size:10px;
`;

const Footer = () => {
    return (
        <FooterContainer>
            <img src={footer_logo} alt="Sri Mandir Logo" />
            <div>
                <FooterLinks>
                    <FooterLink>
                        <a href="https://www.srimandir.com/aboutus/en" target='_blank'>ABOUT US</a>
                    </FooterLink>
                    <FooterLink>
                        <a href="https://www.srimandir.com/terms-of-use" target='_blank'>TERMS AND CONDITIONS</a>
                    </FooterLink>
                    <FooterLink>
                        <a href="https://www.srimandir.com/privacy-policy" target='_blank'>PRIVACY POLICY</a>
                    </FooterLink>
                </FooterLinks>
                <Copyright>
                    &copy;  2024 Firstprinciple Appsforbharat Pvt Ltd. All rights reserved.
                </Copyright>
            </div>
        </FooterContainer>
    );
};

export default Footer;