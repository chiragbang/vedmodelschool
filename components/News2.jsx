"use client"
import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MobileStepper from '@mui/material/MobileStepper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import Link from 'next/link';
import "../styles/News.css"

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const newsEvents = [
  {
    title: 'Results',
    date: 'February 15, 2024',
    description: 'VMTT 2024 Results is being declared on 15 February 2024.',
    imageUrl: '/images/school.webp',
    link: '/results',
  },
  {
    title: 'Activities',
    date: 'March 20, 2024',
    description: 'Join us to participate, learn, and have fun at our exciting upcoming school events!',
    imageUrl: '/images/photos2/9.webp',
    link: '/activities',
  },
  {
    title: 'News',
    date: 'March 20, 2024',
    description: 'Brace yourselves for the latest scoop in our school news: where knowledge meets headlines!',
    imageUrl: '/images/photos2/38.webp',
    link: '/news',
  },
  {
    title: 'Farewell 2024',
    date: 'February 10, 2024',
    description: 'Farewell Memories: Ved Model School Bids Adieu in Style',
    imageUrl: '/images/Farewell/11.webp',
    link: '/farewell',
  },
  // Add more news/events as needed
];

function SwipeableNewsEvents() {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = newsEvents.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  return (
    <Box className="mobile-news-events" sx={{ width: '100%', maxWidth: 400, flexGrow: 1, boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.5)' }}>
      <AutoPlaySwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
      >
        {newsEvents.map((event, index) => (
          <Link href={event.link} key={index}>
              {Math.abs(activeStep - index) <= 2 ? (
                <Box
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    textAlign: 'center',
                    p: 2,
                    color: "black",
                  }}
                >
                  <img
                    src={event.imageUrl}
                    alt={event.title}
                    style={{ width: 400, height: 200, objectFit: 'cover', borderRadius: '8px' }}
                  />
                  <Typography variant="h6" sx={{ my: 1, paddingBlock: '2px', paddingInline: '10px', backgroundColor: '#e3a72f', borderRadius: '50px', color: 'white', fontWeight: 'bold', textTransform: 'capitalize' }}>
                    {event.title}
                  </Typography>
                  <Typography variant="body1">{event.description}</Typography>
                </Box>
              ) : null}
          </Link>
        ))}
      </AutoPlaySwipeableViews>
      <MobileStepper
        steps={maxSteps}
        position="static"
        activeStep={activeStep}
        nextButton={
          <Button size="small" onClick={handleNext} disabled={activeStep === maxSteps - 1}>
            Next
            {theme.direction === 'rtl' ? (
              <KeyboardArrowLeft />
            ) : (
              <KeyboardArrowRight />
            )}
          </Button>
        }
        backButton={
          <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
            {theme.direction === 'rtl' ? (
              <KeyboardArrowRight />
            ) : (
              <KeyboardArrowLeft />
            )}
            Back
          </Button>
        }
      />
    </Box>
  );
}

export default SwipeableNewsEvents;
