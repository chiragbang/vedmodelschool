"use client"
import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MobileStepper from '@mui/material/MobileStepper';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import "../styles/Testimonials.css"

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const testimonials = [
  {
    name: 'Dr. Manjeet Kumar',
    designation: 'Humboldt Fellow Bioinformatics Scientist',
    testimonial: 'Words cannot explain my gratitude to the management and all teachers when I was at Ved Model Sr. Sec. School.',
    profileImg: '/images/Dr-Manjeet.webp',
  },
  {
    name: 'Dr. Bhushan Kathuria',
    designation: 'ENT/Head and Neck Oncosurgeon',
    testimonial: 'The school has good culture, a broad background and strong moral foundation.',
    profileImg: '/images/bhushan.webp',
  },

  {
    name: 'Piyusha',
    designation: 'Student',
    testimonial: 'Ved Model Sr. Sec. School is more than just a school. Grateful for the unforgettable experiences and lifelong friendships forged here.',
    profileImg: '/images/Piyusha.webp',
  },

  {
    name: 'Nakul',
    designation: 'Student',
    testimonial: "At Ved Model Sr. Sec. School, I found my passion, my purpose, and my people. Grateful for every moment.",
    profileImg: '/images/Nakul.webp',
  },

  {
    name: 'Jiya',
    designation: 'Student',
    testimonial: "At Ved Model Sr. Sec. School, I've found my second home, where learning is inspiring, friendships are cherished, and dreams take flight.",
    profileImg: '/images/Jiya.webp',
  },

  {
    name: 'Rahul',
    designation: 'Student',
    testimonial: "From day one, Ved Model Sr. Sec. School welcomed me into a family of learners and leaders. Grateful for the support and endless opportunities.",
    profileImg: '/images/Rahul.webp',
  },
];

function SwipeableTestimonials() {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = testimonials.length;

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
    

    <Box className="mobile-test" sx={{width:"100%", maxWidth: 400, flexGrow: 1, boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.5)' }}>
      {/* <Paper
        square
        elevation={0}
        sx={{
          display: 'flex',
          alignItems: 'center',
          height: 50,
          pl: 2,
          bgcolor: 'background.default',
        }}
      >
        <Typography>{testimonials[activeStep].name}</Typography>
      </Paper> */}
      <AutoPlaySwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
      >
        {testimonials.map((testimonial, index) => (
          <div key={index}>
            {Math.abs(activeStep - index) <= 2 ? (
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  textAlign: 'center',
                  p: 2,
                }}
              >
                <img
                  src={testimonial.profileImg}
                  alt={testimonial.name}
                  style={{ width: 150, height:150, borderRadius: '50%' }}
                />
                <Typography variant="h6" sx={{ my: 1 }}>
                  {testimonial.name}
                </Typography>
                <Typography variant="subtitle1" sx={{ mb: 2 }}>
                  {testimonial.designation}
                </Typography>
                <Typography variant="body1">{testimonial.testimonial}</Typography>
              </Box>
            ) : null}
          </div>
        ))}
      </AutoPlaySwipeableViews>
      <MobileStepper
        steps={maxSteps}
        position="static"
        activeStep={activeStep}
        nextButton={
          <Button
            size="small"
            onClick={handleNext}
            disabled={activeStep === maxSteps - 1}
          >
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

export default SwipeableTestimonials;
