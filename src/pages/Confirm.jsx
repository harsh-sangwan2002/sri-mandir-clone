import React from 'react';
import styled from 'styled-components';
import { Button, Typography } from '@mui/material';
import { useNavigate, useLocation } from 'react-router-dom';
import { ArrowForward } from '@mui/icons-material';

const ConfirmContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  margin-top:3rem;
  text-align: center;
`;

const ConfirmCard = styled.div`
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 20px;
  max-width: 400px;
  width: 100%;
`;

const ConfirmButton = styled(Button)`
  background-color: #90ee90; /* Light green background */
  color: white;
  margin-top: 20px;
  &:hover {
    background-color: #32cd32; /* Darker green on hover */
  }
`;

const Confirm = () => {
    const navigate = useNavigate();
    const { state } = useLocation();
    const { price, familyType } = state || {};

    const handleGoHome = () => {
        navigate('/');
    };

    return (
        <ConfirmContainer>
            <ConfirmCard>
                <Typography variant="h5" fontWeight="bold" gutterBottom>
                    Congrats!
                </Typography>
                <Typography variant="body1" gutterBottom>
                    Your booking has been confirmed.
                </Typography>
                {price && familyType && (
                    <>
                        <Typography variant="body2" color="textSecondary">
                            Price: {price}
                        </Typography>
                        <Typography variant="body2" color="textSecondary">
                            Family Type: {familyType}
                        </Typography>
                    </>
                )}
                <ConfirmButton variant="contained" endIcon={<ArrowForward />} onClick={handleGoHome}>
                    Go to Home
                </ConfirmButton>
            </ConfirmCard>
        </ConfirmContainer>
    );
};

export default Confirm;
