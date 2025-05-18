import { Box, Container, Typography, Grid, LinearProgress, Chip } from '@mui/material';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useState } from 'react';

const skills = [
  { name: 'Python', level: 85, category: 'Programming' },
  { name: 'JavaScript', level: 75, category: 'Programming' },
  { name: 'Java', level: 70, category: 'Programming' },
  { name: 'C++', level: 65, category: 'Programming' },
  { name: 'HTML/CSS', level: 80, category: 'Web' },
  { name: 'React', level: 70, category: 'Web' },
  { name: 'Node.js', level: 65, category: 'Web' },
  { name: 'SQL', level: 75, category: 'Database' },
  { name: 'MongoDB', level: 60, category: 'Database' },
  { name: 'Git', level: 75, category: 'Tools' },
  { name: 'Linux', level: 70, category: 'Tools' },
  { name: 'Data Structures', level: 80, category: 'CS Fundamentals' },
  { name: 'Algorithms', level: 75, category: 'CS Fundamentals' },
  { name: 'Linear Algebra', level: 85, category: 'Mathematics' },
  { name: 'Calculus', level: 80, category: 'Mathematics' },
  { name: 'Statistics', level: 75, category: 'Mathematics' },
];

const categories = [...new Set(skills.map(skill => skill.category))];

const Skills = ({ setActiveSection }) => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredSkills = selectedCategory === 'All' 
    ? skills 
    : skills.filter(skill => skill.category === selectedCategory);

  return (
    <Box
      id="skills"
      ref={ref}
      sx={{
        py: 10,
        bgcolor: 'background.default',
        position: 'relative',
      }}
    >
      <Container maxWidth="lg">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
          onViewportEnter={() => setActiveSection('skills')}
        >
          <Typography
            variant="h3"
            component="h2"
            align="center"
            gutterBottom
            sx={{ fontWeight: 700, mb: 2 }}
          >
            My Skills
          </Typography>
          <Typography
            variant="subtitle1"
            color="text.secondary"
            align="center"
            sx={{ maxWidth: 700, mx: 'auto', mb: 6 }}
          >
            Here are the technologies and skills I've been working with recently
          </Typography>

          <Box sx={{ mb: 6, display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 1 }}>
            <Chip
              label="All"
              onClick={() => setSelectedCategory('All')}
              color={selectedCategory === 'All' ? 'primary' : 'default'}
              sx={{ m: 0.5 }}
              clickable
            />
            {categories.map((category) => (
              <Chip
                key={category}
                label={category}
                onClick={() => setSelectedCategory(category)}
                color={selectedCategory === category ? 'primary' : 'default'}
                sx={{ m: 0.5 }}
                clickable
              />
            ))}
          </Box>

          <Grid container spacing={4}>
            {filteredSkills.map((skill, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ delay: index * 0.05, duration: 0.5 }}
                >
                  <Box>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                      <Typography variant="subtitle1" fontWeight={500}>
                        {skill.name}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {skill.level}%
                      </Typography>
                    </Box>
                    <LinearProgress
                      variant="determinate"
                      value={skill.level}
                      sx={{
                        height: 8,
                        borderRadius: 4,
                        backgroundColor: 'rgba(0, 0, 0, 0.05)',
                        '& .MuiLinearProgress-bar': {
                          borderRadius: 4,
                          background: 'linear-gradient(45deg, #1976d2 30%, #21CBF3 90%)',
                        },
                      }}
                    />
                  </Box>
                </motion.div>
              </Grid>
            ))}
          </Grid>

          <Box sx={{ mt: 6, textAlign: 'center' }}>
            <Typography variant="h5" gutterBottom sx={{ fontWeight: 600, mb: 2 }}>
              Currently Learning
            </Typography>
            <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 2 }}>
              {['Machine Learning', 'React Native', 'Docker', 'GraphQL'].map((skill, index) => (
                <motion.div
                  key={index}
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={inView ? { scale: 1, opacity: 1 } : { scale: 0.8, opacity: 0 }}
                  transition={{ delay: 0.5 + index * 0.1, type: 'spring', stiffness: 200 }}
                >
                  <Chip
                    label={skill}
                    variant="outlined"
                    sx={{
                      px: 2,
                      py: 1,
                      fontSize: '0.9rem',
                      borderStyle: 'dashed',
                    }}
                  />
                </motion.div>
              ))}
            </Box>
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
};

export default Skills;
