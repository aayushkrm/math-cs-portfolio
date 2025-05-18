import { Box, Container, Typography, Grid, Avatar, Paper } from '@mui/material';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const About = ({ setActiveSection }) => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const aboutItems = [
    {
      title: 'Education',
      description: 'Currently pursuing a BSc in Mathematics and Computer Science at [Your University]. Expected graduation: 2027.',
      icon: '🎓',
    },
    {
      title: 'Interests',
      description: 'Algorithm design, data analysis, machine learning, and mathematical modeling.',
      icon: '🔍',
    },
    {
      title: 'Goals',
      description: 'To apply mathematical theories and computational techniques to solve real-world problems.',
      icon: '🎯',
    },
  ];

  return (
    <Box
      id="about"
      ref={ref}
      sx={{
        py: 10,
        bgcolor: 'background.paper',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <Container maxWidth="lg">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
          onViewportEnter={() => setActiveSection('about')}
        >
          <Typography
            variant="h3"
            component="h2"
            align="center"
            gutterBottom
            sx={{ fontWeight: 700, mb: 6 }}
          >
            About Me
          </Typography>
          
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={4} sx={{ display: 'flex', justifyContent: 'center' }}>
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={inView ? { scale: 1, opacity: 1 } : { scale: 0.9, opacity: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
              >
                <Avatar
                  src="https://source.unsplash.com/random/400x400/?portrait"
                  alt="Profile"
                  sx={{
                    width: 250,
                    height: 250,
                    border: '5px solid',
                    borderColor: 'primary.main',
                    boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
                  }}
                />
              </motion.div>
            </Grid>
            <Grid item xs={12} md={8}>
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
                transition={{ delay: 0.3, duration: 0.6 }}
              >
                <Typography variant="h5" gutterBottom sx={{ fontWeight: 600, mb: 3 }}>
                  A bit about me
                </Typography>
                <Typography variant="body1" paragraph sx={{ mb: 3, fontSize: '1.1rem', lineHeight: 1.8 }}>
                  Hello! I'm a first-year student passionate about the intersection of mathematics and computer science. 
                  My journey in this field began with a curiosity about how mathematical concepts can be translated 
                  into computational solutions that make a real impact.
                </Typography>
                <Typography variant="body1" sx={{ mb: 4, fontSize: '1.1rem', lineHeight: 1.8 }}>
                  When I'm not studying, you can find me working on personal projects, participating in coding competitions, 
                  or exploring new technologies. I'm particularly interested in [specific interests, e.g., machine learning, 
                  algorithms, data visualization].
                </Typography>
              </motion.div>
            </Grid>
          </Grid>

          <Grid container spacing={4} sx={{ mt: 4 }}>
            {aboutItems.map((item, index) => (
              <Grid item xs={12} md={4} key={index}>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                  transition={{ delay: 0.4 + index * 0.1, duration: 0.5 }}
                >
                  <Paper
                    elevation={3}
                    sx={{
                      p: 3,
                      height: '100%',
                      transition: 'transform 0.3s, box-shadow 0.3s',
                      '&:hover': {
                        transform: 'translateY(-5px)',
                        boxShadow: '0 15px 30px rgba(0,0,0,0.1)',
                      },
                    }}
                  >
                    <Typography variant="h4" component="h2" gutterBottom>
                      About Me
                    </Typography>
                    <Typography variant="body1" paragraph>
                      I'm a first-year Mathematics and Computer Science student at Tomsk State University, 
                      Faculty of Mechanics and Mathematics. I'm passionate about solving complex problems 
                      and building innovative solutions through code.
                    </Typography>
                    <Typography variant="body1" paragraph>
                      Based in Tomsk, Russia, I'm constantly exploring new technologies and mathematical concepts.
                      My academic journey focuses on the intersection of mathematics and computer science,
                      where I can apply theoretical knowledge to practical programming challenges.
                    </Typography>
                  </Paper>
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
