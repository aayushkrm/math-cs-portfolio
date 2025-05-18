import { Box, Container, Typography, TextField, Button, Grid, Paper, useTheme, useMediaQuery } from '@mui/material';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaGithub, FaLinkedin, FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from 'react-icons/fa';

const Contact = ({ setActiveSection }) => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const theme = useTheme();
  useMediaQuery(theme.breakpoints.down('md')); // For responsive behavior

  const contactMethods = [
    {
      icon: <FaEnvelope size={24} />,
      title: 'Email',
      value: 'your.email@example.com',
      href: 'mailto:your.email@example.com',
    },
    {
      icon: <FaPhoneAlt size={24} />,
      title: 'Phone',
      value: '+1 (123) 456-7890',
      href: 'tel:+11234567890',
    },
    {
      icon: <FaMapMarkerAlt size={24} />,
      title: 'Location',
      value: 'City, Country',
      href: '#',
    },
  ];

  const socialLinks = [
    {
      icon: <FaGithub size={24} />,
      name: 'GitHub',
      url: 'https://github.com/yourusername',
    },
    {
      icon: <FaLinkedin size={24} />,
      name: 'LinkedIn',
      url: 'https://linkedin.com/in/yourusername',
    },
  ];

  return (
    <Box
      id="contact"
      ref={ref}
      sx={{
        py: 10,
        bgcolor: 'background.default',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <Container maxWidth="lg">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
          onViewportEnter={() => setActiveSection('contact')}
        >
          <Typography
            variant="h3"
            component="h2"
            align="center"
            gutterBottom
            sx={{ fontWeight: 700, mb: 2 }}
          >
            Get In Touch
          </Typography>
          <Typography
            variant="subtitle1"
            color="text.secondary"
            align="center"
            sx={{ maxWidth: 700, mx: 'auto', mb: 6 }}
          >
            I'm currently looking for internship opportunities and interesting projects to work on.
            Feel free to reach out if you'd like to collaborate or just want to say hi!
          </Typography>

          <Grid container spacing={4}>
            <Grid item xs={12} md={6}>
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
                transition={{ delay: 0.2, duration: 0.6 }}
              >
                <Paper
                  elevation={3}
                  sx={{
                    p: 4,
                    height: '100%',
                    borderRadius: 2,
                    background: 'linear-gradient(145deg, #ffffff 0%, #f8f9fa 100%)',
                  }}
                >
                  <Typography variant="h5" component="h3" gutterBottom sx={{ fontWeight: 600, mb: 3 }}>
                    Contact Information
                  </Typography>
                  <Typography variant="body1" color="text.secondary" paragraph sx={{ mb: 4 }}>
                    I'm always open to discussing new opportunities, interesting projects, or just chatting about technology and mathematics.
                  </Typography>
                  
                  <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3, mb: 4 }}>
                    {contactMethods.map((method, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                        transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}
                      >
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                          <Box
                            sx={{
                              width: 50,
                              height: 50,
                              borderRadius: '50%',
                              bgcolor: 'primary.main',
                              color: 'white',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              flexShrink: 0,
                            }}
                          >
                            {method.icon}
                          </Box>
                          <Box>
                            <Typography variant="subtitle2" color="text.secondary">
                              {method.title}
                            </Typography>
                            <Typography 
                              component="a" 
                              href={method.href}
                              sx={{
                                color: 'text.primary',
                                textDecoration: 'none',
                                fontWeight: 500,
                                '&:hover': {
                                  color: 'primary.main',
                                  textDecoration: 'underline',
                                },
                              }}
                            >
                              {method.value}
                            </Typography>
                          </Box>
                        </Box>
                      </motion.div>
                    ))}
                  </Box>

                  <Box>
                    <Typography variant="subtitle1" gutterBottom sx={{ fontWeight: 600, mb: 2 }}>
                      Connect with me
                    </Typography>
                    <Box sx={{ display: 'flex', gap: 2 }}>
                      {socialLinks.map((social, index) => (
                        <motion.div
                          key={index}
                          whileHover={{ y: -3 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <Button
                            href={social.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            variant="outlined"
                            sx={{
                              minWidth: 'auto',
                              p: 1.5,
                              borderRadius: '50%',
                              borderColor: 'divider',
                              color: 'text.primary',
                              '&:hover': {
                                borderColor: 'primary.main',
                                color: 'primary.main',
                                bgcolor: 'rgba(25, 118, 210, 0.04)',
                              },
                            }}
                          >
                            {social.icon}
                          </Button>
                        </motion.div>
                      ))}
                    </Box>
                  </Box>
                </Paper>
              </motion.div>
            </Grid>

            <Grid item xs={12} md={6}>
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
                transition={{ delay: 0.4, duration: 0.6 }}
              >
                <Paper
                  elevation={3}
                  component="form"
                  sx={{
                    p: 4,
                    height: '100%',
                    borderRadius: 2,
                    background: 'linear-gradient(145deg, #ffffff 0%, #f8f9fa 100%)',
                  }}
                >
                  <Typography variant="h5" component="h3" gutterBottom sx={{ fontWeight: 600, mb: 3 }}>
                    Send Me a Message
                  </Typography>
                  <Grid container spacing={3}>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        fullWidth
                        label="Your Name"
                        variant="outlined"
                        size="small"
                        required
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        fullWidth
                        label="Your Email"
                        type="email"
                        variant="outlined"
                        size="small"
                        required
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        fullWidth
                        label="Subject"
                        variant="outlined"
                        size="small"
                        required
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        fullWidth
                        label="Your Message"
                        multiline
                        rows={6}
                        variant="outlined"
                        required
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                        <Button
                          type="submit"
                          variant="contained"
                          color="primary"
                          size="large"
                          fullWidth
                          sx={{
                            py: 1.5,
                            borderRadius: 2,
                            textTransform: 'none',
                            fontWeight: 600,
                            fontSize: '1rem',
                          }}
                        >
                          Send Message
                        </Button>
                      </motion.div>
                    </Grid>
                  </Grid>
                </Paper>
              </motion.div>
            </Grid>
          </Grid>
        </motion.div>
      </Container>
    </Box>
  );
};

export default Contact;
