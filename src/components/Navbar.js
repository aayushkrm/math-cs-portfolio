import { AppBar, Toolbar, Typography, Container, Button, Box, useScrollTrigger, Slide } from '@mui/material';
import { Link } from 'react-scroll';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const navItems = [
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
];

function HideOnScroll({ children }) {
  const trigger = useScrollTrigger();
  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

const Navbar = ({ activeSection, setActiveSection, scrolled }) => {
  return (
    <HideOnScroll>
      <AppBar 
        position="fixed" 
        sx={{ 
          bgcolor: scrolled ? 'rgba(255, 255, 255, 0.98)' : 'transparent',
          boxShadow: scrolled ? 1 : 0,
          transition: 'all 0.3s ease',
          backdropFilter: scrolled ? 'blur(10px)' : 'none',
        }}
      >
        <Container maxWidth="lg">
          <Toolbar disableGutters sx={{ justifyContent: 'space-between', py: 1 }}>
            <Typography
              variant="h6"
              component="div"
              sx={{
                mr: 2,
                fontWeight: 700,
                color: 'primary.main',
                display: 'flex',
                alignItems: 'center',
              }}
            >
              <Box component="span" sx={{ color: 'secondary.main' }}>M</Box>athCS
            </Typography>

            <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 2, alignItems: 'center' }}>
              {navItems.map((item) => (
                <Button
                  key={item.id}
                  component={Link}
                  to={item.id}
                  spy={true}
                  smooth={true}
                  duration={500}
                  offset={-70}
                  onSetActive={() => setActiveSection(item.id)}
                  sx={{
                    color: activeSection === item.id ? 'primary.main' : 'text.primary',
                    fontWeight: activeSection === item.id ? 600 : 400,
                    '&:hover': {
                      color: 'primary.main',
                      bgcolor: 'transparent',
                    },
                  }}
                >
                  {item.label}
                </Button>
              ))}
              <Box sx={{ display: 'flex', gap: 1, ml: 2 }}>
                <IconButton color="inherit" href="https://github.com/aayushkrm" target="_blank" rel="noopener noreferrer">
                  <FaGithub />
                </IconButton>
                <Button
                  href="https://linkedin.com/in/yourusername"
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{ minWidth: 'auto', p: 1 }}
                >
                  <FaLinkedin size={20} style={{ color: '#0077B5' }} />
                </Button>
              </Box>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </HideOnScroll>
  );
};

export default Navbar;
