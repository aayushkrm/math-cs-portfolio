import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/ProjectsComponent'; // Using the new component
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#1A237E', // Material Blue 900
      light: '#534bae',
      dark: '#000051',
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#B8860B', // Refined Gold
      light: '#edb74d',
      dark: '#825a00',
      contrastText: '#000000', // Black for contrast with gold
    },
    info: {
      main: '#0ea5e9', // Sky blue (keeping existing for now)
      light: '#38bdf8',
      dark: '#0284c7',
    },
    success: {
      main: '#10b981', // Emerald (keeping existing for now)
      light: '#34d399',
      dark: '#059669',
    },
    warning: {
      main: '#f59e0b', // Amber (keeping existing for now)
      light: '#fbbf24',
      dark: '#d97706',
    },
    error: {
      main: '#ef4444', // Red (keeping existing for now)
      light: '#f87171',
      dark: '#dc2626',
    },
    background: {
      default: '#f7f9fc', // Off-white
      paper: '#ffffff',
    },
    text: {
      primary: '#212121', // Dark, readable gray
      secondary: '#5f6368', // Lighter gray
      disabled: '#94a3b8', // Light gray (keeping existing)
    },
    divider: '#e2e8f0', // Very light gray (keeping existing)
  },
  typography: {
    fontFamily: '"Lato", "Open Sans", "Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontFamily: '"Lato", sans-serif',
      fontWeight: 700,
      color: '#212121', // Updated to new text.primary
      letterSpacing: '-0.5px',
      lineHeight: 1.2,
    },
    h2: {
      fontFamily: '"Lato", sans-serif',
      fontWeight: 600, // Adjusted fontWeight
      color: '#212121', // Updated to new text.primary
      marginBottom: '3rem',
      position: 'relative',
      display: 'inline-block',
      fontSize: '2.5rem',
      '&:after': {
        content: '""',
        position: 'absolute',
        bottom: -15,
        left: '50%',
        transform: 'translateX(-50%)',
        width: '100px',
        height: '5px',
        background: 'linear-gradient(90deg, #1A237E 0%, #B8860B 100%)', // Updated gradient
        borderRadius: '4px',
      }
    },
    h3: {
      fontFamily: '"Lato", sans-serif',
      fontWeight: 700,
      color: '#212121', // Updated to new text.primary
      marginBottom: '1.5rem',
      fontSize: '1.8rem',
    },
    h4: {
      fontFamily: '"Lato", sans-serif',
      fontWeight: 600,
      color: '#212121', // Updated to new text.primary
      marginBottom: '1rem',
      fontSize: '1.4rem',
    },
    h5: {
      fontFamily: '"Lato", sans-serif',
      fontWeight: 600,
      color: '#212121', // Updated to new text.primary
      marginBottom: '0.75rem',
    },
    body1: {
      fontFamily: '"Open Sans", "Roboto", "Helvetica", "Arial", sans-serif',
      fontSize: '1.05rem',
      lineHeight: 1.7, // Adjusted lineHeight
      color: '#212121', // Can be text.primary for main body
      fontWeight: 400,
    },
    body2: {
      fontFamily: '"Open Sans", "Roboto", "Helvetica", "Arial", sans-serif',
      fontSize: '0.95rem',
      lineHeight: 1.7,
      color: '#5f6368', // text.secondary
    },
    button: {
      textTransform: 'none',
      fontWeight: 500, // Kept as is, can be adjusted if needed
      letterSpacing: '0.5px',
    },
    subtitle1: {
      fontFamily: '"Open Sans", "Roboto", "Helvetica", "Arial", sans-serif',
      fontSize: '1.1rem',
      fontWeight: 500,
      lineHeight: 1.6,
      color: '#5f6368', // text.secondary
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '8px', // Kept as is
          padding: '10px 28px',
          fontWeight: 600,
          textTransform: 'none',
          transition: 'all 0.3s ease',
          boxShadow: '0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08)',
          '&:hover': {
            transform: 'translateY(-2px)',
            boxShadow: '0 7px 14px rgba(50, 50, 93, 0.1), 0 3px 6px rgba(0, 0, 0, 0.08)',
          },
          '&.MuiButton-contained': {
            // Example: using primary main color for background
            background: 'linear-gradient(45deg, #1A237E 0%, #534bae 100%)', // Primary color gradient
            color: '#ffffff', // Ensure contrastText is white for primary
            '&:hover': {
              background: 'linear-gradient(45deg, #000051 0%, #1A237E 100%)', // Darker primary gradient
              boxShadow: '0 7px 14px rgba(50, 50, 93, 0.2), 0 3px 6px rgba(0, 0, 0, 0.15)',
            },
          },
          '&.MuiButton-containedSecondary': { // For secondary color buttons
            background: 'linear-gradient(45deg, #B8860B 0%, #edb74d 100%)', // Secondary color gradient
            color: '#000000', // Ensure contrastText is black for secondary
            '&:hover': {
                background: 'linear-gradient(45deg, #825a00 0%, #B8860B 100%)', // Darker secondary gradient
                boxShadow: '0 7px 14px rgba(50, 50, 93, 0.2), 0 3px 6px rgba(0, 0, 0, 0.15)',
            },
          },
          '&.MuiButton-outlined': {
            borderWidth: '2px',
            '&:hover': {
              borderWidth: '2px',
              backgroundColor: 'rgba(26, 35, 126, 0.04)', // primary.main with low opacity
            },
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: '12px', // Adjusted borderRadius
          overflow: 'hidden',
          transition: 'all 0.3s cubic-bezier(.25,.8,.25,1)',
          boxShadow: '0 4px 6px rgba(0, 0, 0, 0.04), 0 1px 3px rgba(0, 0, 0, 0.08)', // Kept subtle shadow
          '&:hover': {
            transform: 'translateY(-5px)',
            boxShadow: '0 14px 28px rgba(0, 0, 0, 0.08), 0 10px 10px rgba(0, 0, 0, 0.06)', // Kept subtle hover shadow
          },
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          background: 'rgba(255, 255, 255, 0.95)',
          backdropFilter: 'blur(8px)',
          boxShadow: '0 2px 10px rgba(0, 0, 0, 0.05)',
        },
      },
    },
    MuiDivider: {
      styleOverrides: {
        root: {
          backgroundColor: 'rgba(0, 0, 0, 0.08)',
        },
      },
    },
  },
  shape: {
    borderRadius: 12,
  },
  shadows: [
    'none',
    '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
    '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
    '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
    '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
    '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
    ...Array(20).fill('none')
  ],
  transitions: {
    duration: {
      shortest: 150,
      shorter: 200,
      short: 250,
      standard: 300,
      complex: 375,
      enteringScreen: 225,
      leavingScreen: 195,
    },
  },
});

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className="App">
        <Navbar activeSection={activeSection} setActiveSection={setActiveSection} scrolled={scrolled} />
        <main>
          <Hero setActiveSection={setActiveSection} />
          <About setActiveSection={setActiveSection} />
          <Skills setActiveSection={setActiveSection} />
          <Projects setActiveSection={setActiveSection} />
          <Contact setActiveSection={setActiveSection} />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
