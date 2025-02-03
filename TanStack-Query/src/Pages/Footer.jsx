import React from "react";
import { Box, Typography } from "@mui/material";

const Footer = () => {
  return (
    <Box component="footer" sx={{ textAlign: "center", p: 2, mt: 2, bgcolor: "grey.200" }}>
      <Typography variant="body2">© {new Date().getFullYear()} My Application</Typography>
    </Box>
  );
};

export default Footer;
