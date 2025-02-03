import React, { useState } from "react";
import { Container, TextField, Button, Typography, Box } from "@mui/material";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Message Sent! \nName: ${form.name}\nEmail: ${form.email}`);
  };

  return (
    <Container maxWidth="sm">
      <Box sx={{ mt: 4, textAlign: "center" }}>
        <Typography variant="h3" gutterBottom>
          Contact Us
        </Typography>
      </Box>

      <form onSubmit={handleSubmit}>
        <TextField
          label="Name"
          name="name"
          fullWidth
          margin="normal"
          required
          onChange={handleChange}
        />
        <TextField
          label="Email"
          name="email"
          type="email"
          fullWidth
          margin="normal"
          required
          onChange={handleChange}
        />
        <TextField
          label="Message"
          name="message"
          multiline
          rows={4}
          fullWidth
          margin="normal"
          required
          onChange={handleChange}
        />
        <Button variant="contained" color="primary" type="submit" sx={{ mt: 2 }}>
          Send Message
        </Button>
      </form>
    </Container>
  );
};

export default Contact;
