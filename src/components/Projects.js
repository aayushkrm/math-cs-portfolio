import { Box, Container, Typography, Grid, Card, CardContent, CardMedia, Button, Chip } from '@mui/material';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiGithub, FiExternalLink } from 'react-icons/fi';

const projects = [
  {
    title: 'Mathematical Visualizer',
    description: 'An interactive web application that visualizes complex mathematical concepts including fractals, 3D graphs, and mathematical transformations.',
    technologies: ['React', 'Three.js', 'D3.js', 'MathJS'],
    image: 'https://source.unsplash.com/random/600x400/?mathematics,visualization',
    github: '#',
    demo: '#',
    featured: true
  },
  {
    title: 'Algorithm Visualizer',
    description: 'A tool that helps understand how various algorithms work by visualizing the step-by-step execution of sorting, pathfinding, and other algorithms.',
    technologies: ['JavaScript', 'HTML5 Canvas', 'CSS3'],
    image: 'https://source.unsplash.com/random/600x400/?algorithm,code',
    github: '#',
    demo: '#',
    featured: true
  },
  {
    title: 'Data Analysis Dashboard',
    description: 'A comprehensive dashboard for analyzing and visualizing datasets with various statistical tools and interactive charts.',
    technologies: ['Python', 'Pandas', 'Plotly', 'Streamlit'],
    image: 'https://source.unsplash.com/random/600x400/?data,analytics',
    github: '#',
    demo: '#',
    featured: false
  },
  {
    title: 'E-Learning Platform',
    description: 'A platform for online courses with video lectures, quizzes, and progress tracking for STEM subjects.',
    technologies: ['MERN Stack', 'Redux', 'Material-UI'],
    image: 'https://source.unsplash.com/random/600x400/?education,online',
    github: '#',
    demo: '#',
    featured: true
  },
  {
    title: 'Personal Finance Tracker',
    description: 'An application to track expenses, set budgets, and visualize spending patterns with clean, intuitive dashboards.',
    technologies: ['React', 'Node.js', 'MongoDB', 'Express'],
    image: 'https://source.unsplash.com/random/600x400/?finance,analytics',
    github: '#',
    demo: '#',
    featured: false
  },
  {
    title: 'Sudoku Solver',
    description: 'A web application that can solve any Sudoku puzzle using backtracking algorithm with visualization of the solving process.',
    technologies: ['JavaScript', 'HTML5', 'CSS3'],
    image: 'https://source.unsplash.com/random/600x400/?sudoku,puzzle',
    github: '#',
    demo: '#',
    featured: false
  },
];

const Projects = ({ setActiveSection }) => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const featuredProjects = projects.filter(project => project.featured);
  const otherProjects = projects.filter(project => !project.featured);

  return (
    <Box
      id="projects"
      ref={ref}
      sx={{
        py: 10,
        bgcolor: 'background.paper',
        position: 'relative',
      }}
    >
      <Container maxWidth="lg">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
          onViewportEnter={() => setActiveSection('projects')}
        >
          <Typography
            variant="h3"
            component="h2"
            align="center"
            gutterBottom
            sx={{ fontWeight: 700, mb: 2 }}
          >
            Featured Projects
          </Typography>
          <Typography
            variant="subtitle1"
            color="text.secondary"
            align="center"
            sx={{ maxWidth: 700, mx: 'auto', mb: 6 }}
          >
            Here are some of my selected projects that showcase my skills and experience
          </Typography>

          <Grid container spacing={4} sx={{ mb: 8 }}>
            {featuredProjects.map((project, index) => (
              <Grid item xs={12} key={index}>
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                >
                  <Card 
                    elevation={3} 
                    sx={{ 
                      display: 'flex', 
                      flexDirection: { xs: 'column', md: 'row' },
                      height: '100%',
                      transition: 'transform 0.3s, box-shadow 0.3s',
                      '&:hover': {
                        transform: 'translateY(-5px)',
                        boxShadow: '0 10px 30px rgba(0,0,0,0.15)',
                      },
                    }}
                  >
                    <Box sx={{ width: { xs: '100%', md: '50%' } }}>
                      <CardMedia
                        component="img"
                        image={project.image}
                        alt={project.title}
                        sx={{ 
                          height: { xs: 200, md: '100%' },
                          objectFit: 'cover'
                        }}
                      />
                    </Box>
                    <Box sx={{ 
                      width: { xs: '100%', md: '50%' },
                      display: 'flex',
                      flexDirection: 'column',
                      p: 4,
                    }}>
                      <Typography variant="h5" component="h3" gutterBottom sx={{ fontWeight: 600 }}>
                        {project.title}
                      </Typography>
                      <Typography variant="body1" color="text.secondary" paragraph sx={{ flexGrow: 1 }}>
                        {project.description}
                      </Typography>
                      <Box sx={{ mb: 3, display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                        {project.technologies.map((tech, i) => (
                          <Chip 
                            key={i} 
                            label={tech} 
                            size="small"
                            sx={{ 
                              fontSize: '0.7rem',
                              bgcolor: 'rgba(25, 118, 210, 0.1)',
                              color: 'primary.main',
                            }}
                          />
                        ))}
                      </Box>
                      <Box sx={{ display: 'flex', gap: 2 }}>
                        <Button
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          startIcon={<FiGithub />}
                          variant="outlined"
                          size="small"
                        >
                          Code
                        </Button>
                        <Button
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          startIcon={<FiExternalLink />}
                          variant="contained"
                          size="small"
                        >
                          Live Demo
                        </Button>
                      </Box>
                    </Box>
                  </Card>
                </motion.div>
              </Grid>
            ))}
          </Grid>

          <Typography
            variant="h4"
            component="h3"
            align="center"
            gutterBottom
            sx={{ fontWeight: 700, mb: 6, mt: 8 }}
          >
            Other Projects
          </Typography>

          <Grid container spacing={4}>
            {otherProjects.map((project, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                  transition={{ delay: 0.1 + index * 0.1, duration: 0.5 }}
                >
                  <Card 
                    elevation={3} 
                    sx={{ 
                      height: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                      transition: 'transform 0.3s, box-shadow 0.3s',
                      '&:hover': {
                        transform: 'translateY(-5px)',
                        boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
                      },
                    }}
                  >
                    <CardMedia
                      component="img"
                      height="160"
                      image={project.image}
                      alt={project.title}
                    />
                    <CardContent sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                      <Typography variant="h6" component="h3" gutterBottom sx={{ fontWeight: 600 }}>
                        {project.title}
                      </Typography>
                      <Typography variant="body2" color="text.secondary" paragraph sx={{ flexGrow: 1 }}>
                        {project.description}
                      </Typography>
                      <Box sx={{ mb: 2, display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                        {project.technologies.slice(0, 3).map((tech, i) => (
                          <Chip 
                            key={i} 
                            label={tech} 
                            size="small"
                            sx={{ 
                              fontSize: '0.6rem',
                              bgcolor: 'rgba(25, 118, 210, 0.1)',
                              color: 'primary.main',
                              height: 20
                            }}
                          />
                        ))}
                      </Box>
                      <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 'auto' }}>
                        <Button
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          size="small"
                          startIcon={<FiGithub size={16} />}
                          sx={{ minWidth: 'auto', p: 0.5 }}
                        >
                          Code
                        </Button>
                        <Button
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          size="small"
                          startIcon={<FiExternalLink size={16} />}
                          sx={{ minWidth: 'auto', p: 0.5 }}
                        >
                          Demo
                        </Button>
                      </Box>
                    </CardContent>
                  </Card>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </motion.div>
      </Container>
    </Box>
  );
};

export default Projects;
