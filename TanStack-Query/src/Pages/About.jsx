import React from "react";
import { Container, Typography, Box } from "@mui/material";

const About = () => {
  return (
    <Container maxWidth="md">
      <Box sx={{ mt: 4 }}>
        <Typography variant="h3" gutterBottom>
          About Us
        </Typography>
        <Typography variant="body1">
          We are a team of passionate developers, designers, and thinkers who aim to provide 
          high-quality content and services. Our mission is to create meaningful experiences 
          for our users by leveraging the latest technology and best practices.
        </Typography>
      </Box>

      <Box sx={{ mt: 4 }}>
        <Typography variant="h4">Our Vision</Typography>
        <Typography>
          We envision a world where technology empowers businesses and individuals 
          to achieve their goals more efficiently and effectively.
        </Typography>
      </Box>

      <Box sx={{ mt: 4 }}>
        <Typography variant="h4">Our Team</Typography>
        <Typography>
          Our dedicated team works tirelessly to deliver the best solutions to our customers.
        </Typography>
      </Box>
    </Container>
  );
};

export default About;
