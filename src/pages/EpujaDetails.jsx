import React, { useContext, useRef } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { Card, CardMedia, CardContent, Typography, Button } from '@mui/material';
import { LocationOn, CalendarToday, ArrowForward } from '@mui/icons-material';
import PujaPackage from '../components/PujaPackage';
import { useCardContext } from '../context/CardContext';

const DetailContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
`;

const HorizontalCard = styled(Card)`
  display: flex;
  max-width: 900px;
  width: 100%;
  margin: 20px;
  padding: 20px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
`;

const CardDetails = styled(CardContent)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 20px;
  flex: 1;
`;

const ContentText = styled(Typography)`
  margin-bottom: 10px;
`;

const IconTextContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

const SelectButton = styled(Button)`
  background-color: #90ee90; /* Light green background */
  color: white;
  &:hover {
    background-color: #32cd32; /* Darker green on hover */
  }
`;

const TimerContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

const Timer = styled.div`
  margin: 0 5px;
  text-align: center;
`;

const EpujaDetails = () => {
  const { id } = useParams();
  const cards = useCardContext();

  const card = cards.find((data) => {
    let title = data.heading.toLowerCase();
    let param = id.replace(/-/g, ' ').toLowerCase();

    return title.includes(param);
  });

  const pujaPackageRef = useRef(null);

  const handleScrollToPujaPackage = () => {
    pujaPackageRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  if (!card) {
    return <Typography variant="h6">Card not found</Typography>;
  }

  const pujaBookingName = card.heading.replace(/\s+/g, '-');

  return (
    <DetailContainer>
      <HorizontalCard>
        <CardMedia component="img" height="200" image={card.image} alt="Temple" />
        <CardDetails>
          <ContentText variant="h6">{card.heading}</ContentText>
          <ContentText variant="body1" fontWeight="bold">
            {card.boldText}
          </ContentText>
          <ContentText variant="body2" color="textSecondary">
            {card.smallText}
          </ContentText>
          <IconTextContainer>
            <LocationOn />
            <Typography variant="body2" color="textSecondary">
              {card.templeInfo}
            </Typography>
          </IconTextContainer>
          <IconTextContainer>
            <CalendarToday />
            <Typography variant="body2" color="textSecondary">
              {card.dateInfo}
            </Typography>
          </IconTextContainer>
          <TimerContainer>
            <Timer>
              <Typography variant="h6">{card.timer.days}</Typography>
              <Typography variant="body2" color="textSecondary">Day</Typography>
            </Timer>
            <Timer>
              <Typography variant="h6">{card.timer.hours}</Typography>
              <Typography variant="body2" color="textSecondary">Hours</Typography>
            </Timer>
            <Timer>
              <Typography variant="h6">{card.timer.minutes}</Typography>
              <Typography variant="body2" color="textSecondary">Minutes</Typography>
            </Timer>
            <Timer>
              <Typography variant="h6">{card.timer.seconds}</Typography>
              <Typography variant="body2" color="textSecondary">Secs</Typography>
            </Timer>
          </TimerContainer>
          <Typography variant="body2" color="textSecondary">
            {card.participationInfo}
          </Typography>
          <SelectButton variant="contained" endIcon={<ArrowForward />} onClick={handleScrollToPujaPackage}>
            Select puja package
          </SelectButton>
        </CardDetails>
      </HorizontalCard>
      <div ref={pujaPackageRef}>
        <PujaPackage bookingUrl={pujaBookingName} />
      </div>
    </DetailContainer>
  );
};

export default EpujaDetails;
