import React from 'react';
import styled from 'styled-components';
import { Card, CardContent, Typography, Button } from '@mui/material';
import { ArrowForward } from '@mui/icons-material';
import PujaPackageData from '../constants/PujaPackageData';

const PackageContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 20px;
  gap: 20px;
`;

const PackageCard = styled(Card)`
  max-width: 300px;
  border: 2px solid ${({ borderColor }) => borderColor};
  border-radius: 10px;
`;

const PackageContent = styled(CardContent)`
  padding: 20px;
`;

const PriceText = styled(Typography)`
  color: ${({ borderColor }) => borderColor};
  font-size: 24px;
  font-weight: bold;
  text-align: center;
`;

const FamilyTypeText = styled(Typography)`
  color: ${({ borderColor }) => borderColor};
  text-align: center;
`;

const DetailText = styled(Typography)`
  margin-bottom: 10px;
`;

const SelectButton = styled(Button)`
  background-color: #90ee90; /* Light green background */
  color: white;
  margin-top: 10px;
  &:hover {
    background-color: #32cd32; /* Darker green on hover */
  }
`;

const PujaPackage = () => {
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
                        <SelectButton variant="contained" endIcon={<ArrowForward />}>
                            Participate
                        </SelectButton>
                    </PackageContent>
                </PackageCard>
            ))}
        </PackageContainer>
    );
};

export default PujaPackage;
