import styled from 'styled-components';
import { Card, CardContent, Typography, Button } from '@mui/material';
import { ArrowForward } from '@mui/icons-material';
import { usePujaPackageContext } from '../context/PujaPackageContext';
import { useNavigate } from 'react-router-dom';

const PackageContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 20px;
  gap: 20px;
`;

const PackageCard = styled(Card).attrs(({ borderColor }) => ({
  style: {
    borderColor: borderColor,
  },
}))`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  max-width: 300px;
  border: 2px solid;
  border-radius: 10px;
  padding: 10px;
  box-sizing: border-box;
  @media (max-width: 768px) {
    max-width: 100%;
  }
`;

const PackageContent = styled(CardContent)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0;
`;

const PriceText = styled(Typography).attrs(({ borderColor }) => ({
  style: {
    color: borderColor,
  },
}))`
  font-size: 24px;
  font-weight: bold;
  text-align: center;
  margin-bottom: 10px;
`;

const FamilyTypeText = styled(Typography).attrs(({ borderColor }) => ({
  style: {
    color: borderColor,
  },
}))`
  text-align: center;
  margin-bottom: 10px;
`;

const DetailText = styled.li`
  list-style: inside;
  margin-bottom: 5px;
`;

const SelectButton = styled(Button)`
  background-color: #90ee90;
  color: white;
  margin-top: 10px;
  align-self: center;
  &:hover {
    background-color: #32cd32;
  }
`;

const PujaPackage = ({ bookingUrl }) => {
  const getBorderColor = (key) => {
    switch (key) {
      case 'pkg1':
        return '#FFB74D';
      case 'pkg2':
        return '#64B5F6';
      case 'pkg3':
        return '#FF8A80';
      case 'pkg4':
        return '#9575CD';
      default:
        return '#000';
    }
  };

  const PujaPackageData = usePujaPackageContext();
  const navigate = useNavigate();

  const handlePujaBooking = (packageData) => {
    navigate(`/epuja/cart/${packageData.familyType.replace(/ /g, '-').toLowerCase()}`, { state: packageData });
  };

  return (
    <PackageContainer>
      {Object.entries(PujaPackageData).map(([key, packageData]) => (
        <PackageCard key={key} borderColor={getBorderColor(key)}>
          <PackageContent>
            <PriceText borderColor={getBorderColor(key)}>{packageData.price}</PriceText>
            <FamilyTypeText borderColor={getBorderColor(key)}>{packageData.familyType}</FamilyTypeText>
            <Typography variant="body2" align="center">{packageData.noOfPeople}</Typography>
            {packageData.points.map((point, idx) => (
              <DetailText key={idx} variant="body2" color="textSecondary">
                {point}
              </DetailText>
            ))}
          </PackageContent>
          <SelectButton variant="contained" endIcon={<ArrowForward />} onClick={() => handlePujaBooking(packageData)}>
            Participate
          </SelectButton>
        </PackageCard>
      ))}
    </PackageContainer>
  );
};

export default PujaPackage;
