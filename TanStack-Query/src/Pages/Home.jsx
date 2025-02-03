import React from "react";
import { Container, Typography, Box, Button } from "@mui/material";

const Home = () => {
  return (
    <Container maxWidth="lg">
      {/* Banner Section */}
      <Box 
        sx={{
          textAlign: "center",
          padding: "50px",
          backgroundColor: "#f5f5f5",
          borderRadius: "10px",
          marginTop: "20px"
        }}
      >
        <Typography variant="h3" gutterBottom>
          Welcome to Our Website!
        </Typography>
        <Typography variant="h6" color="textSecondary">
          Your one-stop destination for amazing content and services.
        </Typography>
        <Button variant="contained" color="primary" sx={{ mt: 3 }}>
          Get Started
        </Button>
      </Box>

      {/* Features Section */}
      <Box sx={{ mt: 5 }}>
        <Typography variant="h4" gutterBottom>
          Our Features
        </Typography>
        <Typography>
          ✅ High-quality services <br />
          ✅ 24/7 Customer Support <br />
          ✅ Trusted by thousands of users
        </Typography>
      </Box>
    </Container>
  );
};

export default Home;
