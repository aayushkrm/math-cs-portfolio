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
      main: '#2563eb', // Vibrant blue
      light: '#60a5fa',
      dark: '#1d4ed8',
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#7c3aed', // Vibrant purple
      light: '#a78bfa',
      dark: '#6d28d9',
      contrastText: '#ffffff',
    },
    info: {
      main: '#0ea5e9', // Sky blue
      light: '#38bdf8',
      dark: '#0284c7',
    },
    success: {
      main: '#10b981', // Emerald
      light: '#34d399',
      dark: '#059669',
    },
    warning: {
      main: '#f59e0b', // Amber
      light: '#fbbf24',
      dark: '#d97706',
    },
    error: {
      main: '#ef4444', // Red
      light: '#f87171',
      dark: '#dc2626',
    },
    background: {
      default: '#f8fafc', // Light gray-blue
      paper: '#ffffff',
    },
    text: {
      primary: '#0f172a', // Almost black
      secondary: '#475569', // Dark gray
      disabled: '#94a3b8', // Light gray
    },
    divider: '#e2e8f0', // Very light gray
  },
  typography: {
    fontFamily: '"Poppins", "Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontWeight: 800,
      color: '#2C3E50',
      letterSpacing: '-0.5px',
      lineHeight: 1.2,
    },
    h2: {
      fontWeight: 700,
      color: '#2C3E50',
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
        background: 'linear-gradient(90deg, #E74C3C 0%, #3498DB 100%)',
        borderRadius: '4px',
      }
    },
    h3: {
      fontWeight: 700,
      color: '#2C3E50',
      marginBottom: '1.5rem',
      fontSize: '1.8rem',
    },
    h4: {
      fontWeight: 600,
      color: '#2C3E50',
      marginBottom: '1rem',
      fontSize: '1.4rem',
    },
    h5: {
      fontWeight: 600,
      color: '#2C3E50',
      marginBottom: '0.75rem',
    },
    body1: {
      fontSize: '1.05rem',
      lineHeight: 1.8,
      color: '#566573',
      fontWeight: 400,
    },
    body2: {
      fontSize: '0.95rem',
      lineHeight: 1.7,
      color: '#5D6D7E',
    },
    button: {
      textTransform: 'none',
      fontWeight: 500,
      letterSpacing: '0.5px',
    },
    subtitle1: {
      fontSize: '1.1rem',
      fontWeight: 500,
      lineHeight: 1.6,
      color: '#5D6D7E',
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '8px',
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
            background: 'linear-gradient(45deg, #2C3E50 0%, #3498DB 100%)',
            '&:hover': {
              background: 'linear-gradient(45deg, #1E2B38 0%, #2980B9 100%)',
              boxShadow: '0 7px 14px rgba(50, 50, 93, 0.2), 0 3px 6px rgba(0, 0, 0, 0.15)',
            },
          },
          '&.MuiButton-outlined': {
            borderWidth: '2px',
            '&:hover': {
              borderWidth: '2px',
              backgroundColor: 'rgba(46, 64, 83, 0.04)',
            },
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: '16px',
          overflow: 'hidden',
          transition: 'all 0.3s cubic-bezier(.25,.8,.25,1)',
          boxShadow: '0 4px 6px rgba(0, 0, 0, 0.04), 0 1px 3px rgba(0, 0, 0, 0.08)',
          '&:hover': {
            transform: 'translateY(-5px)',
            boxShadow: '0 14px 28px rgba(0, 0, 0, 0.08), 0 10px 10px rgba(0, 0, 0, 0.06)',
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
