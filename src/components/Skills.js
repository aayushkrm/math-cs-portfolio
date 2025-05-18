import { useState, useEffect } from 'react';
import { 
  Box, 
  Container, 
  Typography, 
  Grid, 
  LinearProgress, 
  Chip, 
  Paper, 
  useTheme, 
  alpha,
  Tabs,
  Tab,
  Divider,
  Tooltip,
  IconButton,
  Zoom
} from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { styled } from '@mui/material/styles';
import { FaCode, FaServer, FaDatabase, FaTools, FaChartLine, FaRobot } from 'react-icons/fa';

// Styled Components
const SkillCard = styled(Paper)(({ theme: { spacing, shape, palette, shadows } }) => ({
  padding: spacing(3),
  height: '100%',
  borderRadius: shape.borderRadius * 2,
  transition: 'all 0.3s ease',
  border: `1px solid ${palette.divider}`,
  '&:hover': {
    transform: 'translateY(-5px)',
    boxShadow: shadows[8],
    borderColor: palette.primary.main,
  },
}));

const StyledTabs = styled(Tabs)(({ theme: { spacing, palette } }) => ({
  marginBottom: spacing(4),
  '& .MuiTabs-indicator': {
    height: 4,
    borderRadius: '2px 2px 0 0',
    background: `linear-gradient(90deg, ${palette.primary.main}, ${palette.secondary.main})`,
  },
}));

const StyledTab = styled(Tab)(({ theme: { palette } }) => ({
  textTransform: 'none',
  fontWeight: 600,
  fontSize: '1rem',
  color: palette.text.secondary,
  '&.Mui-selected': {
    color: palette.primary.main,
  },
  '&:hover': {
    color: palette.primary.main,
  },
}));

const SkillLevel = styled(LinearProgress)(({ theme: { palette }, value }) => ({
  height: 6,
  borderRadius: 3,
  backgroundColor: alpha(palette.primary.main, 0.1),
  '& .MuiLinearProgress-bar': {
    borderRadius: 3,
    background: `linear-gradient(90deg, ${palette.primary.main}, ${palette.secondary.main})`,
  },
}));

const SkillChip = styled(Chip)(({ theme: { spacing, palette, shadows } }) => ({
  margin: spacing(0.5),
  padding: spacing(0.5, 1.5),
  borderRadius: 20,
  fontWeight: 500,
  transition: 'all 0.2s ease',
  '&:hover': {
    transform: 'scale(1.05)',
    boxShadow: shadows[2],
  },
}));

// Category Icons
const CategoryIcon = ({ category }) => {
  const iconProps = { size: 20, style: { marginRight: 8 } };
  
  switch(category) {
    case 'Web Development':
      return <FaCode {...iconProps} />;
    case 'Backend':
      return <FaServer {...iconProps} />;
    case 'Database':
      return <FaDatabase {...iconProps} />;
    case 'Data Science':
      return <FaChartLine {...iconProps} />;
    case 'AI/ML':
      return <FaRobot {...iconProps} />;
    default:
      return <FaTools {...iconProps} />;
  }
};

const skills = [
  // Web Development
  { name: 'React', level: 85, category: 'Web Development', icon: '⚛️' },
  { name: 'Next.js', level: 80, category: 'Web Development', icon: '⏭️' },
  { name: 'TypeScript', level: 80, category: 'Web Development', icon: '📝' },
  { name: 'JavaScript (ES6+)', level: 85, category: 'Web Development', icon: '📜' },
  { name: 'HTML5 / CSS3', level: 90, category: 'Web Development', icon: '🎨' },
  { name: 'Tailwind CSS', level: 85, category: 'Web Development', icon: '🎨' },
  { name: 'Material-UI', level: 85, category: 'Web Development', icon: '🎨' },
  
  // Backend
  { name: 'Node.js', level: 80, category: 'Backend', icon: '🟢' },
  { name: 'Express', level: 80, category: 'Backend', icon: '🚀' },
  { name: 'Python', level: 85, category: 'Backend', icon: '🐍' },
  { name: 'Django', level: 75, category: 'Backend', icon: '🎸' },
  { name: 'RESTful APIs', level: 85, category: 'Backend', icon: '🔌' },
  { name: 'GraphQL', level: 70, category: 'Backend', icon: '📊' },
  
  // Database
  { name: 'MongoDB', level: 80, category: 'Database', icon: '🍃' },
  { name: 'PostgreSQL', level: 75, category: 'Database', icon: '🐘' },
  { name: 'MySQL', level: 70, category: 'Database', icon: '💾' },
  { name: 'Redis', level: 65, category: 'Database', icon: '🔴' },
  
  // Data Science
  { name: 'Pandas', level: 80, category: 'Data Science', icon: '🐼' },
  { name: 'NumPy', level: 85, category: 'Data Science', icon: '🔢' },
  { name: 'Matplotlib', level: 75, category: 'Data Science', icon: '📈' },
  { name: 'Seaborn', level: 70, category: 'Data Science', icon: '📊' },
  
  // AI/ML
  { name: 'TensorFlow', level: 70, category: 'AI/ML', icon: '🧠' },
  { name: 'PyTorch', level: 65, category: 'AI/ML', icon: '🔥' },
  { name: 'scikit-learn', level: 75, category: 'AI/ML', icon: '🔍' },
  
  // Tools & Others
  { name: 'Git', level: 85, category: 'Tools', icon: '🔀' },
  { name: 'Docker', level: 75, category: 'Tools', icon: '🐳' },
  { name: 'AWS', level: 65, category: 'Tools', icon: '☁️' },
  { name: 'Linux', level: 75, category: 'Tools', icon: '🐧' },
  { name: 'Bash Scripting', level: 70, category: 'Tools', icon: '💻' },
];

const categories = ['All', 'Web Development', 'Backend', 'Database', 'Data Science', 'AI/ML', 'Tools'];

const skillLevels = {
  'Beginner': { min: 0, max: 40, color: '#ef4444' },
  'Intermediate': { min: 41, max: 70, color: '#f59e0b' },
  'Advanced': { min: 71, max: 90, color: '#3b82f6' },
  'Expert': { min: 91, max: 100, color: '#10b981' },
};

const getSkillLevel = (level) => {
  for (const [key, { min, max }] of Object.entries(skillLevels)) {
    if (level >= min && level <= max) {
      return key;
    }
  }
  return 'Beginner';
};

const Skills = ({ setActiveSection }) => {
  const theme = useTheme();
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const [selectedCategory, setSelectedCategory] = useState('All');
  const [tabValue, setTabValue] = useState(0);
  const [hoveredSkill, setHoveredSkill] = useState(null);

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  const filteredSkills = selectedCategory === 'All' 
    ? skills 
    : skills.filter(skill => skill.category === selectedCategory);

  // Get theme for consistent usage
  const { palette } = theme;

  return (
    <Box
      id="skills"
      ref={ref}
      sx={{
        py: { xs: 8, md: 12 },
        bgcolor: palette.background.default,
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <Container maxWidth="xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
          onViewportEnter={() => setActiveSection('skills')}
        >
          <Box textAlign="center" sx={{ mb: 8 }}>
            <Typography
              variant="h4"
              component="h2"
              sx={{
                fontWeight: 800,
                mb: 2,
                background: `linear-gradient(90deg, ${palette.primary.main}, ${palette.secondary.main})`,
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                display: 'inline-block',
              }}
            >
              My Skills & Expertise
            </Typography>
            <Typography
              variant="h6"
              color="text.secondary"
              sx={{
                maxWidth: 700,
                mx: 'auto',
                fontWeight: 400,
              }}
            >
              Technologies and tools I've worked with, and my proficiency level in each
            </Typography>
          </Box>

          {/* Category Tabs */}
          <Box sx={{ mb: 6, borderBottom: 1, borderColor: 'divider' }}>
            <StyledTabs
              value={tabValue}
              onChange={handleTabChange}
              variant="scrollable"
              scrollButtons="auto"
              allowScrollButtonsMobile
              aria-label="skill categories"
            >
              {categories.map((category, index) => (
                <StyledTab 
                  key={category} 
                  label={category} 
                  icon={<CategoryIcon category={category} />}
                  iconPosition="start"
                />
              ))}
            </StyledTabs>
          </Box>

          {/* Skills Grid */}
          <AnimatePresence>
            <Grid container spacing={3}>
              {filteredSkills.map((skill, index) => {
                const level = getSkillLevel(skill.level);
                const levelColor = skillLevels[level]?.color || palette.primary.main;
                
                return (
                  <Grid item xs={12} sm={6} md={4} lg={3} key={`${skill.name}-${index}`}>
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                      transition={{ delay: index * 0.05, duration: 0.5 }}
                      onHoverStart={() => setHoveredSkill(skill.name)}
                      onHoverEnd={() => setHoveredSkill(null)}
                    >
                      <Tooltip 
                        title={`${level} - ${skill.level}%`} 
                        placement="top"
                        arrow
                        TransitionComponent={Zoom}
                      >
                        <SkillCard 
                          elevation={hoveredSkill === skill.name ? 8 : 2}
                          sx={{
                            borderColor: hoveredSkill === skill.name ? levelColor : 'divider',
                            '&:hover': {
                              borderColor: levelColor,
                            },
                          }}
                        >
                          <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                            <Box 
                              sx={{
                                width: 40,
                                height: 40,
                                borderRadius: '12px',
                                bgcolor: alpha(levelColor, 0.1),
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                mr: 2,
                                fontSize: '1.2rem',
                              }}
                            >
                              {skill.icon}
                            </Box>
                            <Box>
                              <Typography variant="subtitle1" fontWeight={600}>
                                {skill.name}
                              </Typography>
                              <Typography variant="body2" color="text.secondary">
                                {skill.category}
                              </Typography>
                            </Box>
                          </Box>
                          
                          <Box sx={{ mt: 2 }}>
                            <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                              <Typography variant="caption" color="text.secondary">
                                {level}
                              </Typography>
                              <Typography variant="caption" fontWeight={600}>
                                {skill.level}%
                              </Typography>
                            </Box>
                            <SkillLevel 
                              variant="determinate" 
                              value={skill.level} 
                              sx={{
                                '& .MuiLinearProgress-bar': {
                                  background: `linear-gradient(90deg, ${levelColor}, ${alpha(levelColor, 0.7)})`,
                                },
                              }}
                            />
                          </Box>
                        </SkillCard>
                      </Tooltip>
                    </motion.div>
                  </Grid>
                );
              })}
            </Grid>
          </AnimatePresence>

          {/* Currently Learning Section */}
          <Box sx={{ mt: 10, textAlign: 'center' }}>
            <Typography 
              variant="h5" 
              gutterBottom 
              sx={{ 
                fontWeight: 700, 
                mb: 4,
                display: 'inline-flex',
                alignItems: 'center',
                gap: 2,
                '&::before, &::after': {
                  content: '""',
                  flex: 1,
                  height: '1px',
                  backgroundColor: 'divider',
                }
              }}
            >
              Currently Learning
            </Typography>
            <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 2 }}>
              {[
                { name: 'Rust', icon: '🦀' },
                { name: 'Kubernetes', icon: '☸️' },
                { name: 'TensorFlow.js', icon: '🤖' },
                { name: 'Web3', icon: '🌐' },
                { name: 'Three.js', icon: '🎮' },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={inView ? { scale: 1, opacity: 1 } : { scale: 0.8, opacity: 0 }}
                  transition={{ 
                    delay: 0.3 + index * 0.1, 
                    type: 'spring', 
                    stiffness: 300,
                    damping: 20
                  }}
                  whileHover={{ y: -5 }}
                >
                  <SkillChip
                    icon={
                      <Box component="span" sx={{ mr: 0.5, fontSize: '1.1rem' }}>
                        {item.icon}
                      </Box>
                    }
                    label={item.name}
                    variant="outlined"
                    sx={{
                      px: 2,
                      py: 1.5,
                      borderStyle: 'dashed',
                      borderColor: 'divider',
                      '&:hover': {
                        borderColor: palette.primary.main,
                        color: palette.primary.main,
                        backgroundColor: alpha(palette.primary.main, 0.05),
                      },
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
