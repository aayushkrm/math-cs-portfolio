import { Box, Container, Typography, Grid, Avatar, Paper, Divider } from '@mui/material';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import SchoolIcon from '@mui/icons-material/School';
import InterestsIcon from '@mui/icons-material/EmojiObjects';
import TargetIcon from '@mui/icons-material/Flag';

const About = ({ setActiveSection }) => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const aboutItems = [
    {
      title: 'Education',
      description: 'Currently pursuing a BSc in Mathematics and Computer Science at Tomsk State University. Expected graduation: 2027.',
      icon: <SchoolIcon sx={{ fontSize: 40, color: 'primary.main' }} />,
    },
    {
      title: 'Research Interests',
      description: 'Algorithm design, computational mathematics, machine learning, and mathematical modeling with applications in data science.',
      icon: <InterestsIcon sx={{ fontSize: 40, color: 'primary.main' }} />,
    },
    {
      title: 'Academic Goals',
      description: 'To bridge theoretical mathematics with practical computational solutions, contributing to advancements in scientific computing and data analysis.',
      icon: <TargetIcon sx={{ fontSize: 40, color: 'primary.main' }} />,
    },
  ];

  return (
    <Box
      id="about"
      ref={ref}
      sx={{
        py: { xs: 10, md: 15 },
        background: 'linear-gradient(135deg, #f8faff 0%, #f0f4ff 100%)',
        position: 'relative',
        overflow: 'hidden',
        '&:before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '100%',
          background: 'radial-gradient(circle at 10% 20%, rgba(66, 165, 245, 0.1) 0%, transparent 20%)',
          zIndex: 0,
        },
      }}
    >
      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          onViewportEnter={() => setActiveSection('about')}
        >
          <Box sx={{ textAlign: 'center', mb: { xs: 6, md: 10 } }}>
            <Typography 
              variant="h2" 
              component="h2" 
              sx={{ 
                display: 'inline-block',
                position: 'relative',
                '&:after': {
                  content: '""',
                  position: 'absolute',
                  bottom: -15,
                  left: '50%',
                  transform: 'translateX(-50%)',
                  width: 120,
                  height: 4,
                  background: 'linear-gradient(90deg, #3f51b5 0%, #2196f3 100%)',
                  borderRadius: 4,
                }
              }}
            >
              About Me
            </Typography>
            <Typography 
              variant="subtitle1" 
              sx={{ 
                mt: 3, 
                maxWidth: 700, 
                mx: 'auto',
                color: 'text.secondary',
                fontSize: '1.1rem',
                lineHeight: 1.8
              }}
            >
              Get to know more about my academic journey, research interests, and future aspirations
            </Typography>
          </Box>
          
          <Box 
            sx={{
              bgcolor: 'background.paper',
              borderRadius: 4,
              boxShadow: '0 10px 30px rgba(0,0,0,0.05)',
              overflow: 'hidden',
              mb: { xs: 6, md: 10 },
              position: 'relative',
              '&:before': {
                content: '""',
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                height: 6,
                background: 'linear-gradient(90deg, #3f51b5 0%, #2196f3 100%)',
              }
            }}
          >
            <Grid container spacing={0}>
              <Grid item xs={12} md={5} sx={{ p: { xs: 4, md: 6 }, display: 'flex', alignItems: 'center', bgcolor: '#f9faff' }}>
                <motion.div
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={inView ? { scale: 1, opacity: 1 } : { scale: 0.9, opacity: 0 }}
                  transition={{ delay: 0.2, duration: 0.6 }}
                  style={{ width: '100%' }}
                >
                  <Box sx={{ 
                    position: 'relative',
                    width: '100%',
                    maxWidth: 320,
                    mx: 'auto',
                    '&:before, &:after': {
                      content: '""',
                      position: 'absolute',
                      borderRadius: '50%',
                      border: '2px solid #e0e0ff',
                    },
                    '&:before': {
                      width: '100%',
                      height: '100%',
                      top: -15,
                      right: -15,
                      zIndex: 0,
                    },
                    '&:after': {
                      width: 'calc(100% - 30px)',
                      height: 'calc(100% - 30px)',
                      bottom: -15,
                      left: -15,
                      zIndex: 0,
                    }
                  }}>
                    <Box 
                      component="img"
                      src="https://source.unsplash.com/random/400x400/?portrait,mathematician"
                      alt="Profile"
                      sx={{
                        width: '100%',
                        height: 'auto',
                        borderRadius: '50%',
                        position: 'relative',
                        zIndex: 1,
                        border: '8px solid white',
                        boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
                      }}
                    />
                  </Box>
                </motion.div>
              </Grid>
              
              <Grid item xs={12} md={7} sx={{ p: { xs: 4, md: 6 } }}>
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
                  transition={{ delay: 0.3, duration: 0.6 }}
                >
                  <Typography variant="h4" gutterBottom sx={{ 
                    mb: 3, 
                    color: 'text.primary',
                    fontWeight: 700,
                    position: 'relative',
                    display: 'inline-block',
                    '&:after': {
                      content: '""',
                      position: 'absolute',
                      bottom: -10,
                      left: 0,
                      width: 60,
                      height: 4,
                      background: 'linear-gradient(90deg, #3f51b5 0%, #2196f3 100%)',
                      borderRadius: 4,
                    }
                  }}>
                    Academic Profile
                  </Typography>
                  
                  <Typography variant="body1" paragraph sx={{ color: 'text.secondary', mb: 3, fontSize: '1.05rem' }}>
                    As a dedicated Mathematics and Computer Science student at Tomsk State University, I am deeply fascinated by the intersection of theoretical mathematics and practical computation. My academic journey is driven by a passion for solving complex problems through algorithmic thinking and mathematical modeling.
                  </Typography>
                  
                  <Typography variant="body1" paragraph sx={{ color: 'text.secondary', mb: 4, fontSize: '1.05rem' }}>
                    My coursework has provided me with a strong foundation in advanced mathematics, data structures, and algorithm design, while my personal projects have allowed me to apply these concepts to real-world challenges in data analysis and scientific computing.
                  </Typography>
                  
                  <Box sx={{ display: 'flex', gap: 3, flexWrap: 'wrap' }}>
                    <Box 
                      sx={{ 
                        flex: 1,
                        minWidth: 160,
                        p: 2,
                        bgcolor: 'primary.light',
                        color: 'white',
                        borderRadius: 2,
                        textAlign: 'center',
                        boxShadow: '0 4px 6px rgba(63, 81, 181, 0.1)',
                        transition: 'all 0.3s ease',
                        '&:hover': {
                          transform: 'translateY(-3px)',
                          boxShadow: '0 8px 15px rgba(63, 81, 181, 0.2)',
                        }
                      }}
                    >
                      <SchoolIcon sx={{ fontSize: 36, mb: 1, opacity: 0.9 }} />
                      <Typography variant="h6" sx={{ fontWeight: 700, mb: 0.5 }}>BSc</Typography>
                      <Typography variant="body2" sx={{ opacity: 0.9, fontSize: '0.9rem' }}>Mathematics & CS</Typography>
                    </Box>
                    
                    <Box 
                      sx={{ 
                        flex: 1,
                        minWidth: 160,
                        p: 2,
                        bgcolor: 'secondary.main',
                        color: 'white',
                        borderRadius: 2,
                        textAlign: 'center',
                        boxShadow: '0 4px 6px rgba(233, 30, 99, 0.1)',
                        transition: 'all 0.3s ease',
                        '&:hover': {
                          transform: 'translateY(-3px)',
                          boxShadow: '0 8px 15px rgba(233, 30, 99, 0.2)',
                        }
                      }}
                    >
                      <TargetIcon sx={{ fontSize: 36, mb: 1, opacity: 0.9 }} />
                      <Typography variant="h6" sx={{ fontWeight: 700, mb: 0.5 }}>2023-2027</Typography>
                      <Typography variant="body2" sx={{ opacity: 0.9, fontSize: '0.9rem' }}>Expected Graduation</Typography>
                    </Box>
                  </Box>
                </motion.div>
              </Grid>
            </Grid>
          </Box>

          <Box sx={{ textAlign: 'center', mb: 6 }}>
            <Typography 
              variant="h4" 
              component="h3" 
              sx={{ 
                mb: 2,
                fontWeight: 700,
                color: 'text.primary',
                position: 'relative',
                display: 'inline-block',
                '&:after': {
                  content: '""',
                  position: 'absolute',
                  bottom: -10,
                  left: '50%',
                  transform: 'translateX(-50%)',
                  width: 60,
                  height: 4,
                  background: 'linear-gradient(90deg, #3f51b5 0%, #2196f3 100%)',
                  borderRadius: 4,
                }
              }}
            >
              My Focus Areas
            </Typography>
            <Typography 
              variant="subtitle1" 
              sx={{ 
                maxWidth: 700, 
                mx: 'auto',
                color: 'text.secondary',
                mb: 6,
                fontSize: '1.1rem'
              }}
            >
              Exploring the intersection of mathematics and computer science through research and practical applications
            </Typography>
          </Box>
          
          <Grid container spacing={4}>
            {aboutItems.map((item, index) => (
              <Grid item xs={12} md={4} key={index}>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                  transition={{ delay: 0.4 + index * 0.1, duration: 0.5 }}
                  style={{ height: '100%' }}
                >
                  <Box
                    sx={{
                      p: 4,
                      height: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      textAlign: 'center',
                      borderRadius: 3,
                      bgcolor: 'background.paper',
                      boxShadow: '0 5px 20px rgba(0,0,0,0.05)',
                      border: '1px solid rgba(0,0,0,0.03)',
                      transition: 'all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1)',
                      position: 'relative',
                      overflow: 'hidden',
                      '&:hover': {
                        transform: 'translateY(-8px)',
                        boxShadow: '0 15px 35px rgba(0,0,0,0.08)',
                      },
                      '&:before': {
                        content: '""',
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        height: 4,
                        background: index === 0 
                          ? 'linear-gradient(90deg, #3f51b5 0%, #2196f3 100%)' 
                          : index === 1 
                            ? 'linear-gradient(90deg, #e91e63 0%, #f48fb1 100%)' 
                            : 'linear-gradient(90deg, #4caf50 0%, #8bc34a 100%)',
                      }
                    }}
                  >
                    <Box 
                      sx={{
                        width: 80,
                        height: 80,
                        borderRadius: '50%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        mb: 3,
                        background: index === 0 
                          ? 'linear-gradient(135deg, rgba(63, 81, 181, 0.1) 0%, rgba(33, 150, 243, 0.1) 100%)' 
                          : index === 1 
                            ? 'linear-gradient(135deg, rgba(233, 30, 99, 0.1) 0%, rgba(244, 143, 177, 0.1) 100%)' 
                            : 'linear-gradient(135deg, rgba(76, 175, 80, 0.1) 0%, rgba(139, 195, 74, 0.1) 100%)',
                        '& svg': {
                          fontSize: 36,
                          color: index === 0 ? '#3f51b5' : index === 1 ? '#e91e63' : '#4caf50',
                        }
                      }}
                    >
                      {item.icon}
                    </Box>
                    <Typography 
                      variant="h5" 
                      component="h3" 
                      gutterBottom 
                      sx={{ 
                        fontWeight: 700, 
                        color: 'text.primary',
                        mb: 2,
                        fontSize: '1.4rem'
                      }}
                    >
                      {item.title}
                    </Typography>
                    <Typography 
                      variant="body1" 
                      sx={{ 
                        color: 'text.secondary',
                        mb: 2,
                        fontSize: '1rem',
                        lineHeight: 1.7
                      }}
                    >
                      {item.description}
                    </Typography>
                  </Box>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </motion.div>
      </Container>
    </Box>
  );
};

export default About;
