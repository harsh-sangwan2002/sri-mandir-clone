import styled from 'styled-components';
import { Button, TextField, Typography } from '@mui/material';
import { useLocation } from 'react-router-dom';
import { ArrowForward } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

const SankalpContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  height: 100vh;
`;

const FormCard = styled.div`
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 20px;
  max-width: 500px;
  width: 100%;
  text-align: center;
`;

const FormField = styled.div`
  margin-bottom: 15px;
`;

const ProceedButton = styled(Button)`
  background-color: #90ee90; /* Light green background */
  color: white;
  margin-top: 20px;
  &:hover {
    background-color: #32cd32; /* Darker green on hover */
  }
`;

const Booking = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const { price } = location.state;

    const confirmBooking = () => {
        navigate('/epuja/confirm');
    }

    return (
        <SankalpContainer>
            <FormCard>
                <Typography variant="h6" fontWeight="bold">Sankalp Details</Typography>
                <FormField>
                    <TextField label="WhatsApp Number" variant="outlined" fullWidth />
                </FormField>
                <FormField>
                    <TextField label="Name of member 1" variant="outlined" fullWidth />
                </FormField>
                <FormField>
                    <TextField label="Name of member 2" variant="outlined" fullWidth />
                </FormField>
                <FormField>
                    <TextField label="Name of member 3" variant="outlined" fullWidth />
                </FormField>
                <FormField>
                    <TextField label="Name of member 4" variant="outlined" fullWidth />
                </FormField>
                <FormField>
                    <TextField label="Participant's Gotra" variant="outlined" fullWidth />
                </FormField>
                <ProceedButton onClick={confirmBooking} variant="contained" endIcon={<ArrowForward />}>
                    <Typography variant="body2">Proceed to Book {price}</Typography>
                </ProceedButton>
            </FormCard>
        </SankalpContainer>
    );
};

export default Booking;
