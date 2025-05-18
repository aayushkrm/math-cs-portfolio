import { Box, Typography, Button, Container, useTheme, useMediaQuery } from '@mui/material';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';

const Hero = ({ setActiveSection }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Box
      id="home"
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        pt: 8,
        position: 'relative',
        overflow: 'hidden',
        background: 'linear-gradient(135deg, #f5f7fa 0%, #e4e8f0 100%)',
      }}
    >
      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        <Box sx={{ maxWidth: isMobile ? '100%' : '70%' }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Typography
              variant="h6"
              color="primary"
              gutterBottom
              sx={{ fontWeight: 600, mb: 2 }}
            >
              Hello, I'm
            </Typography>
            <Typography
              variant="h2"
              component="h1"
              sx={{
                fontWeight: 800,
                mb: 2,
                background: 'linear-gradient(45deg, #1976d2 30%, #21CBF3 90%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
            </Typography>
            <Typography variant="h4" color="primary" gutterBottom>
              Mathematics & Computer Science Student
            </Typography>
            <Typography
              variant="body1"
              color="text.secondary"
              sx={{ mb: 4, fontSize: '1.1rem', lineHeight: 1.8 }}
            >
              I'm a first-year student passionate about solving complex problems through the
              intersection of mathematics and computer science. I enjoy exploring algorithms,
              data structures, and their real-world applications.
            </Typography>
            <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
              <Button
                component={Link}
                to="contact"
                spy={true}
                smooth={true}
                duration={500}
                variant="contained"
                color="primary"
                size="large"
                onSetActive={() => setActiveSection('contact')}
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
                spy={true}
                smooth={true}
                duration={500}
                variant="outlined"
                color="primary"
                size="large"
                onSetActive={() => setActiveSection('projects')}
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
        </Box>
      </Container>
      <Box
        sx={{
          position: 'absolute',
          right: 0,
          top: '50%',
          transform: 'translateY(-50%)',
          width: '40%',
          height: '80%',
          display: { xs: 'none', lg: 'block' },
          backgroundImage: 'url(https://source.unsplash.com/random/800x800/?mathematics,technology)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          borderRadius: '30% 0 0 30%',
          boxShadow: '-10px 0 30px rgba(0, 0, 0, 0.1)',
        }}
      />
    </Box>
  );
};

export default Hero;
