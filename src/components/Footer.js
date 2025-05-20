import { Box, Container, Typography, Link, IconButton } from '@mui/material';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    {
      icon: <FaGithub size={20} />,
      url: 'https://github.com/aayushkrm', // Updated
      label: 'GitHub',
    },
    {
      icon: <FaLinkedin size={20} />,
      url: 'https://linkedin.com/in/yourusername', // Kept as is
      label: 'LinkedIn',
    },
    {
      icon: <FaEnvelope size={20} />,
      url: 'mailto:aayush.kumarm.3myself@gmail.com', // Updated
      label: 'Email',
    },
  ];

  return (
    <Box
      component="footer"
      sx={{
        py: 4,
        bgcolor: 'background.paper',
        borderTop: '1px solid',
        borderColor: 'divider',
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', sm: 'row' },
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: 2,
          }}
        >
          <Typography variant="body2" color="text.secondary">
            &copy; {currentYear} Ayush Kumar. All rights reserved.
          </Typography>
          
          <Box sx={{ display: 'flex', gap: 1 }}>
            {socialLinks.map((social, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <IconButton
                  component="a"
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  sx={{
                    color: 'text.secondary',
                    '&:hover': {
                      color: 'primary.main',
                      bgcolor: 'rgba(25, 118, 210, 0.04)',
                    },
                  }}
                >
                  {social.icon}
                </IconButton>
              </motion.div>
            ))}
          </Box>
          
          <Typography variant="body2" color="text.secondary">
            Built with React & Material-UI
          </Typography>
        </Box>
        
        <Box sx={{ mt: 2, textAlign: 'center' }}>
          <Typography variant="caption" color="text.disabled">
            Icons by <Link href="https://react-icons.github.io/react-icons/" target="_blank" rel="noopener">React Icons</Link>
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
