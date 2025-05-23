import { useState, useEffect } from 'react';
import { 
  AppBar, 
  Toolbar, 
  Typography, 
  Container, 
  Button, 
  Box, 
  useScrollTrigger, 
  Slide, 
  IconButton, 
  Drawer, 
  List, 
  ListItem, 
  ListItemButton, 
  ListItemText,
  ListItemIcon,
  useTheme,
  alpha,
  Divider,
  Tooltip,
  Avatar,
  Menu,
  MenuItem
} from '@mui/material';
import { Link } from 'react-scroll';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaBars, FaTimes, FaCode, FaUserTie } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import { styled } from '@mui/material/styles';

const navItems = [
  { id: 'about', label: 'About', icon: <FaUserTie /> },
  { id: 'skills', label: 'Skills', icon: <FaCode /> },
  { id: 'projects', label: 'Projects', icon: <FaCode /> },
  { id: 'contact', label: 'Contact', icon: <FaEnvelope /> },
];

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  justifyContent: 'space-between',
  padding: theme.spacing(1, 0),
}));

const NavButton = styled(Button)(({ theme, active }) => ({
  color: active ? theme.palette.primary.main : theme.palette.text.primary,
  fontWeight: active ? 600 : 400,
  position: 'relative',
  padding: theme.spacing(1, 2),
  borderRadius: theme.shape.borderRadius,
  transition: 'all 0.3s ease',
  '&:hover': {
    color: theme.palette.primary.main,
    backgroundColor: alpha(theme.palette.primary.main, 0.05),
  },
  '&::after': {
    content: '""',
    position: 'absolute',
    bottom: 6,
    left: '50%',
    transform: active ? 'translateX(-50%) scaleX(1)' : 'translateX(-50%) scaleX(0)',
    width: '60%',
    height: '2px',
    backgroundColor: theme.palette.primary.main,
    transition: 'transform 0.3s ease',
  },
  '&:hover::after': {
    transform: 'translateX(-50%) scaleX(1)',
  },
}));

const SocialIcon = styled(IconButton)(({ theme }) => ({
  color: theme.palette.text.secondary,
  transition: 'all 0.3s ease',
  '&:hover': {
    color: theme.palette.primary.main,
    backgroundColor: alpha(theme.palette.primary.main, 0.1),
    transform: 'translateY(-2px)',
  },
}));

const MobileMenuButton = styled(IconButton)(({ theme }) => ({
  display: 'none',
  [theme.breakpoints.down('md')]: {
    display: 'flex',
  },
}));

const DesktopMenu = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(1),
  [theme.breakpoints.down('md')]: {
    display: 'none',
  },
}));

const MobileDrawer = styled(Drawer)(({ theme }) => ({
  '& .MuiDrawer-paper': {
    width: '280px',
    padding: theme.spacing(2),
    backgroundColor: theme.palette.background.default,
    borderLeft: `1px solid ${theme.palette.divider}`,
  },
}));

const MobileNavItem = styled(ListItem)(({ theme }) => ({
  padding: 0,
  '& .MuiListItemButton-root': {
    padding: theme.spacing(1.5, 2),
    borderRadius: theme.shape.borderRadius,
    '&:hover': {
      backgroundColor: alpha(theme.palette.primary.main, 0.05),
    },
  },
  '& .Mui-selected': {
    color: theme.palette.primary.main,
    backgroundColor: alpha(theme.palette.primary.main, 0.1),
    '& .MuiListItemIcon-root': {
      color: theme.palette.primary.main,
    },
  },
}));

const LogoText = styled(Typography)(({ theme }) => ({
  fontWeight: 800,
  background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.secondary.main} 100%)`,
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  display: 'inline-flex',
  alignItems: 'center',
  gap: theme.spacing(1),
}));



function HideOnScroll({ children }) {
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 50,
  });
  
  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

const Navbar = ({ activeSection, setActiveSection, scrolled }) => {
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [elevated, setElevated] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  useEffect(() => {
    const handleScroll = () => {
      setElevated(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const drawer = (
    <Box sx={{ width: 250, padding: 2 }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2, p: 1 }}>
        <LogoText variant="h6" component="div">
          AK
        </LogoText>
        <IconButton onClick={handleDrawerToggle}>
          <FaTimes />
        </IconButton>
      </Box>
      <Divider sx={{ mb: 2 }} />
      <List>
        {navItems.map((item) => (
          <MobileNavItem key={item.id} disablePadding>
            <ListItemButton
              component={Link}
              to={item.id}
              spy={true}
              smooth={true}
              duration={500}
              offset={-70}
              onSetActive={() => setActiveSection(item.id)}
              selected={activeSection === item.id}
              onClick={handleDrawerToggle}
            >
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, width: '100%' }}>
                <Box sx={{ minWidth: 24, display: 'flex', justifyContent: 'center' }}>
                  {item.icon}
                </Box>
                <ListItemText 
                  primary={item.label} 
                  primaryTypographyProps={{
                    fontWeight: activeSection === item.id ? 600 : 400,
                  }}
                />
              </Box>
            </ListItemButton>
          </MobileNavItem>
        ))}
      </List>
      <Divider sx={{ my: 2 }} />
      <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, mt: 3, mb: 2 }}>
        <Tooltip title="GitHub">
          <SocialIcon href="https://github.com/aayushkrm" target="_blank" rel="noopener">
            <FaGithub />
          </SocialIcon>
        </Tooltip>
        <Tooltip title="LinkedIn">
          <SocialIcon href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener">
            <FaLinkedin />
          </SocialIcon>
        </Tooltip>
        <Tooltip title="Twitter">
          <SocialIcon href="https://twitter.com/yourusername" target="_blank" rel="noopener">
            <FaTwitter />
          </SocialIcon>
        </Tooltip>
      </Box>
    </Box>
  );

  return (
    <>
      <HideOnScroll>
        <AppBar 
          position="fixed" 
          elevation={elevated ? 2 : 0}
          sx={{
            bgcolor: elevated ? alpha(theme.palette.background.paper, 0.8) : 'transparent',
            backdropFilter: elevated ? 'blur(12px)' : 'none',
            transition: 'all 0.3s ease',
            borderBottom: elevated ? `1px solid ${theme.palette.divider}` : 'none',
            py: 0.5,
          }}
        >
          <Container maxWidth="xl">
            <StyledToolbar disableGutters>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                <LogoText 
                  variant="h6" 
                  component={Link}
                  to="home"
                  spy={true}
                  smooth={true}
                  duration={500}
                  sx={{
                    textDecoration: 'none',
                    cursor: 'pointer',
                    '&:hover': {
                      opacity: 0.9,
                    },
                  }}
                >
                  AK
                </LogoText>
              </Box>

              <DesktopMenu>
                {navItems.map((item) => (
                  <NavButton
                    key={item.id}
                    component={Link}
                    to={item.id}
                    spy={true}
                    smooth={true}
                    duration={500}
                    offset={-80}
                    onSetActive={() => setActiveSection(item.id)}
                    active={activeSection === item.id ? 1 : 0}
                  >
                    {item.label}
                  </NavButton>
                ))}
              </DesktopMenu>

              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <Box sx={{ display: { xs: 'none', sm: 'flex' }, gap: 0.5 }}>
                  <Tooltip title="GitHub">
                    <SocialIcon href="https://github.com/aayushkrm" target="_blank" rel="noopener">
                      <FaGithub />
                    </SocialIcon>
                  </Tooltip>
                  <Tooltip title="LinkedIn">
                    <SocialIcon href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener">
                      <FaLinkedin />
                    </SocialIcon>
                  </Tooltip>
                </Box>
                <MobileMenuButton
                  color="inherit"
                  aria-label="open drawer"
                  edge="end"
                  onClick={handleDrawerToggle}
                >
                  <FaBars />
                </MobileMenuButton>
              </Box>
            </StyledToolbar>
          </Container>
        </AppBar>
      </HideOnScroll>
      <nav>
        <MobileDrawer
          variant="temporary"
          anchor="right"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', md: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 280 },
          }}
        >
          {drawer}
        </MobileDrawer>
      </nav>
      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleMenuClose}
        onClick={handleMenuClose}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: 'visible',
            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.1))',
            mt: 1.5,
            '& .MuiAvatar-root': {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            '&:before': {
              content: '""',
              display: 'block',
              position: 'absolute',
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: 'background.paper',
              transform: 'translateY(-50%) rotate(45deg)',
              zIndex: 0,
            },
          },
        }}
      >
        <MenuItem onClick={handleMenuClose}>
          <Avatar /> Profile
        </MenuItem>
        <MenuItem onClick={handleMenuClose}>
          <Avatar /> My account
        </MenuItem>
        <Divider />
        <MenuItem onClick={handleMenuClose}>
          <ListItemIcon>
            <FaUserTie fontSize="small" />
          </ListItemIcon>
          Profile
        </MenuItem>
        <MenuItem onClick={handleMenuClose}>
          <ListItemIcon>
            <FaCode fontSize="small" />
          </ListItemIcon>
          My Projects
        </MenuItem>
      </Menu>
    </>
  );
};

export default Navbar;
