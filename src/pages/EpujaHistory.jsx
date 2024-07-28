import React from 'react';
import styled from 'styled-components';
import { Button } from '@mui/material';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import { Link } from 'react-router-dom';

const EpujaContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: calc(100vh - 60px);
  padding: 20px;
  text-align: center;
`;

const StyledIcon = styled(MenuBookIcon)`
  font-size: 48px;
  color: #000;
  margin-bottom: 20px;
`;

const Title = styled.h1`
  font-size: 24px;
  margin-bottom: 20px;
  color: #000;
`;

const Description = styled.p`
  font-size: 16px;
  margin-bottom: 40px;
  color: #000;
`;

const BookButton = styled(Button)`
  background-color: #fd7d2b;
  color: #fff;
  padding: 10px 20px;
  border-radius: 25px;
  &:hover {
    background-color: #e66d1a;
  }
`;

const EpujaHistory = () => {
    return (
        <EpujaContainer>
            <StyledIcon />
            <Title>No Puja has been booked yet</Title>
            <Description>
                Book your Puja online at Popular Temples of India. Panditji will take sankalp with your name and gotra during the Puja.
            </Description>
            <BookButton component={Link} to="/epuja" variant="contained">Book Pooja Now</BookButton>
        </EpujaContainer>
    );
};

export default EpujaHistory;
