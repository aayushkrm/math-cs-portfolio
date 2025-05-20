import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Chip from '@mui/material/Chip';
import MuiDivider from '@mui/material/Divider';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiGithub, FiExternalLink, FiCode as FiCodeIcon } from 'react-icons/fi';

// Alias components to avoid conflicts
const Divider = MuiDivider;
const FiCode = FiCodeIcon;

const projects = [
  {
    title: 'Computational Mathematics Toolkit',
    description: 'A comprehensive library developed to implement and investigate numerical methods for solving differential equations, linear algebra operations, and statistical analysis, complete with visualization capabilities.',
    technologies: ['Python', 'NumPy', 'SciPy', 'Matplotlib'],
    image: 'https://images.unsplash.com/photo-1518605700399-5f689ff035d0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGFscGhvYmV0JTIwY29kZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=80',
    github: '#',
    demo: '#',
    featured: true,
    category: 'Research'
  },
  // ... other projects ...
];

const Projects = ({ setActiveSection }) => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const [activeCategory, setActiveCategory] = useState('All');
  
  const categories = ['All', ...new Set(projects.map(project => project.category))];
  const filteredProjects = activeCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);
    
  const featuredProjects = filteredProjects.filter(project => project.featured);
  const otherProjects = filteredProjects.filter(project => !project.featured);

  const ProjectCard = ({ project, variant = 'default' }) => (
    <Card 
      sx={{ 
        height: '100%', 
        display: 'flex', 
        flexDirection: 'column',
        transition: 'transform 0.3s, box-shadow 0.3s',
        '&:hover': {
          transform: 'translateY(-5px)',
          boxShadow: '0 10px 20px rgba(0,0,0,0.1)',
        },
      }}
    >
      <CardMedia
        component="img"
        height={variant === 'featured' ? 240 : 180}
        image={project.image}
        alt={project.title}
        sx={{ objectFit: 'cover' }}
      />
      <CardContent sx={{ flexGrow: 1, p: 3 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
          <FiCode style={{ marginRight: 8, color: '#1a237e' }} />
          <Typography variant="subtitle2" color="primary" sx={{ fontWeight: 600 }}>
            {project.category}
          </Typography>
        </Box>
        <Typography variant="h6" component="h4" gutterBottom>
          {project.title}
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
          {project.description}
        </Typography>
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 2 }}>
          {project.technologies.map(tech => (
            <Chip 
              key={tech} 
              label={tech} 
              size="small" 
              sx={{ 
                bgcolor: 'rgba(25, 118, 210, 0.08)',
                color: 'primary.main',
                fontWeight: 500,
              }}
            />
          ))}
        </Box>
        <Box sx={{ display: 'flex', gap: 2, mt: 'auto' }}>
          <Button 
            variant="outlined" 
            size="small" 
            href={project.github} 
            target="_blank" 
            rel="noopener noreferrer"
            startIcon={<FiGithub />}
          >
            Code
          </Button>
          <Button 
            variant="contained" 
            size="small" 
            href={project.demo} 
            target="_blank" 
            rel="noopener noreferrer"
            startIcon={<FiExternalLink />}
          >
            Live Demo
          </Button>
        </Box>
      </CardContent>
    </Card>
  );

  ProjectCard.propTypes = {
    project: PropTypes.object.isRequired,
    variant: PropTypes.oneOf(['default', 'featured'])
  };

  return (
    <Box id="projects" ref={ref} sx={{ py: 8, bgcolor: 'background.paper' }}>
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <Typography variant="h3" component="h2" sx={{ mb: 2, color: 'primary.main' }}>
            My Projects
          </Typography>
          <Divider sx={{ width: 80, height: 4, bgcolor: 'secondary.main', mb: 6 }} />
          
          {/* Category Filter */}
          <Box sx={{ mb: 6, display: 'flex', flexWrap: 'wrap', gap: 1 }}>
            {categories.map(category => (
              <Chip
                key={category}
                label={category}
                onClick={() => setActiveCategory(category)}
                sx={{
                  px: 2,
                  py: 1,
                  borderRadius: 2,
                  cursor: 'pointer',
                  transition: 'all 0.3s',
                  '&:hover': {
                    bgcolor: 'primary.light',
                    color: 'white',
                  },
                  ...(activeCategory === category && {
                    bgcolor: 'primary.main',
                    color: 'white',
                  }),
                }}
              />
            ))}
          </Box>
          
          {/* Featured Projects */}
          {featuredProjects.length > 0 && (
            <Box sx={{ mb: 8 }}>
              <Typography variant="h4" component="h3" sx={{ mb: 4, color: 'primary.dark' }}>
                Featured Research
                <Divider sx={{ width: '60px', height: '4px', bgcolor: 'secondary.main', mt: 1 }} />
              </Typography>
              <Grid container spacing={4}>
                {featuredProjects.map((project, index) => (
                  <Grid item xs={12} key={project.title}>
                    <motion.div
                      initial={{ opacity: 0, y: 50 }}
                      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                      transition={{ delay: index * 0.1, duration: 0.6 }}
                    >
                      <ProjectCard project={project} variant="featured" />
                    </motion.div>
                  </Grid>
                ))}
              </Grid>
            </Box>
          )}
          
          {/* Other Projects */}
          {otherProjects.length > 0 && (
            <Box sx={{ mt: 8 }}>
              <Typography variant="h4" component="h3" sx={{ mb: 4, color: 'primary.dark' }}>
                Other Projects
                <Divider sx={{ width: '60px', height: '4px', bgcolor: 'secondary.main', mt: 1 }} />
              </Typography>
              <Grid container spacing={3}>
                {otherProjects.map((project, index) => (
                  <Grid item xs={12} sm={6} md={4} key={project.title}>
                    <motion.div
                      initial={{ opacity: 0, y: 30 }}
                      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                      transition={{ delay: 0.1 * (index % 3), duration: 0.5 }}
                    >
                      <ProjectCard project={project} />
                    </motion.div>
                  </Grid>
                ))}
              </Grid>
            </Box>
          )}
        </motion.div>
      </Container>
    </Box>
  );
};

Projects.propTypes = {
  setActiveSection: PropTypes.func
};

export default Projects;
