import React from 'react';
import styled from 'styled-components';
import { Card, CardMedia, CardContent, Typography, Button, IconButton } from '@mui/material';
import { LocationOn, CalendarToday, ArrowForward } from '@mui/icons-material';
import CardData from '../constants/CardData';

const CardsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  padding: 20px;
`;

const StyledCard = styled(Card)`
  max-width: 345px;
  margin: 20px;
`;

const ContentText = styled(Typography)`
  margin-bottom: 10px;
`;

const IconTextContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

const ParticipateButton = styled(Button)`
  background-color: green;
  color: white;
  &:hover {
    background-color: darkgreen;
  }
`;

const Cards = () => {
    return (
        <CardsContainer>
            {CardData.map((data, index) => (
                <StyledCard key={index}>
                    <CardMedia
                        component="img"
                        height="140"
                        image={data.image}
                        alt="Temple"
                    />
                    <CardContent>
                        <ContentText variant="h6" align="center">
                            {data.heading}
                        </ContentText>
                        <ContentText variant="body1" fontWeight="bold">
                            {data.boldText}
                        </ContentText>
                        <ContentText variant="body2" color="textSecondary">
                            {data.smallText}
                        </ContentText>
                        <IconTextContainer>
                            <LocationOn />
                            <Typography variant="body2" color="textSecondary">
                                {data.templeInfo}
                            </Typography>
                        </IconTextContainer>
                        <IconTextContainer>
                            <CalendarToday />
                            <Typography variant="body2" color="textSecondary">
                                {data.dateInfo}
                            </Typography>
                        </IconTextContainer>
                        <ParticipateButton
                            variant="contained"
                            endIcon={<ArrowForward />}
                            fullWidth
                        >
                            Participate
                        </ParticipateButton>
                    </CardContent>
                </StyledCard>
            ))}
        </CardsContainer>
    );
};

export default Cards;
