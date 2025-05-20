import React, { useEffect, useState } from 'react';
import { Box, Typography, Button, Container, IconButton, useTheme, alpha } from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-scroll';
import SchoolIcon from '@mui/icons-material/School';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import { styled, keyframes } from '@mui/material/styles';

// Animation keyframes
const float = keyframes`
  0% { transform: translateY(0px); }
  50% { transform: translateY(-15px); }
  100% { transform: translateY(0px); }
`;

const FloatingShape = styled('div')(({ theme }) => ({
  position: 'absolute',
  borderRadius: '50%',
  background: `linear-gradient(135deg, ${alpha(theme.palette.primary.light, 0.1)} 0%, ${alpha(theme.palette.secondary.light, 0.1)} 100%)`,
  filter: 'blur(40px)',
  zIndex: 0,
}));

const ScrollIndicator = styled(motion.div)({
  position: 'absolute',
  bottom: '40px',
  left: '50%',
  transform: 'translateX(-50%)',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  cursor: 'pointer',
  zIndex: 1,
});

const Hero = () => {
  return (
    <Box
      id="home"
      sx={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        p: 3,
        background: 'linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)',
        borderBottom: '1px solid #dee2e6'
      }}
    >
      <Container maxWidth="md">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Typography
            variant="h2"
            component="h1"
            sx={{
              fontSize: { xs: '2.5rem', sm: '3.5rem', md: '4rem' },
              fontWeight: 700,
              mb: 3,
              color: '#212529',
              lineHeight: 1.2
            }}
          >
            Ayush Kumar
          </Typography>
          
          <Typography 
            variant="h5"
            sx={{
              color: '#495057',
              mb: 3,
              fontWeight: 500,
              lineHeight: 1.3
            }}
          >
            Mathematics & Computer Science Student
          </Typography>
          
          <Box sx={{ mb: 4 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', mb: 1 }}>
              <SchoolIcon sx={{ mr: 1, color: '#6c757d' }} />
              <Typography component="span" sx={{ color: '#495057' }}>
                Tomsk State University, Faculty of Mechanics and Mathematics
              </Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <LocationOnIcon sx={{ mr: 1, color: '#6c757d' }} />
              <Typography component="span" sx={{ color: '#495057' }}>
                Tomsk, Russia
              </Typography>
            </Box>
          </Box>
          
          <Typography
            variant="body1"
            sx={{ 
              mb: 4, 
              fontSize: '1.1rem', 
              lineHeight: 1.8,
              color: 'text.secondary'
            }}
          >
            A dedicated Mathematics and Computer Science student at Tomsk State University. My academic and research pursuits center on computational mathematics, algorithm design, and machine learning, with a focus on applying these disciplines to data science and the development of innovative software solutions. I am driven by the challenge of bridging rigorous theoretical frameworks with impactful, real-world technological advancements.
          </Typography>
          
          <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Button
              component={Link}
              to="contact"
              variant="contained"
              size="large"
              sx={{
                px: 4,
                py: 1.5,
                borderRadius: '8px',
                textTransform: 'none',
                fontWeight: 600,
                boxShadow: '0 4px 14px 0 rgba(25, 118, 210, 0.3)',
                '&:hover': {
                  boxShadow: '0 6px 20px 0 rgba(25, 118, 210, 0.4)',
                },
              }}
            >
              Get In Touch
            </Button>
            <Button
              component={Link}
              to="projects"
              variant="outlined"
              size="large"
              sx={{
                px: 4,
                py: 1.5,
                borderRadius: '8px',
                textTransform: 'none',
                fontWeight: 600,
                borderWidth: '2px',
                '&:hover': {
                  borderWidth: '2px',
                },
              }}
            >
              View My Work
            </Button>
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
};

export default Hero;
