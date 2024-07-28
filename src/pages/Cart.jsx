import { useLocation, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { Button, Typography } from '@mui/material';
import { ArrowForward } from '@mui/icons-material';
import { v4 as uuidv4 } from 'uuid';

const CartContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  margin-top:3rem;
`;

const BillCard = styled.div`
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 20px;
  max-width: 400px;
  width: 100%;
  text-align: center;
`;

const BillDetails = styled.div`
  margin-bottom: 20px;
`;

const PriceText = styled(Typography)`
  font-size: 20px;
  font-weight: bold;
`;

const SelectButton = styled(Button)`
  background-color: #90ee90;
  color: white;
  margin-top: 20px;
  display: flex;
  gap:5rem;
  justify-content: space-between;
  padding: 10px 20px;
  &:hover {
    background-color: #32cd32;
  }
`;

const ButtonTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const ButtonIconContainer = styled.div`
  display: flex;
  align-items: center;
`;

const Cart = () => {
    const location = useLocation();
    const { price, familyType } = location.state;
    const navigate = useNavigate();

    const handleProceed = () => {
        const uniqueUrl = uuidv4();
        navigate(`/epuja/sankalp/${uniqueUrl}`, { state: { price, familyType } });
    };

    return (
        <CartContainer>
            <BillCard>
                <Typography variant="h6" fontWeight="bold">Bill Details</Typography>
                <BillDetails>
                    <Typography variant="body1">{familyType}</Typography>
                    <Typography variant="body2" color="textSecondary" gutterBottom>Price: {price}</Typography>
                    <PriceText>Total Amount: {price}</PriceText>
                </BillDetails>
                <SelectButton variant="contained" onClick={handleProceed}>
                    <ButtonTextContainer>
                        <Typography variant="body2">{price}</Typography>
                        <Typography variant="body2">{familyType}</Typography>
                    </ButtonTextContainer>
                    <ButtonIconContainer>
                        <Typography variant="body2" style={{ marginRight: '10px' }}>Continue</Typography>
                        <ArrowForward />
                    </ButtonIconContainer>
                </SelectButton>
            </BillCard>
        </CartContainer>
    );
};

export default Cart;
