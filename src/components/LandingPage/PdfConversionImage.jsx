import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

const PdfConversionImage = () => {
  return (
    <Box sx={{ marginLeft: "16rem", marginTop: '3rem', display: "flex" }}>
      <img src="/fileShare.webp" height="200" width="400" alt=""></img>

      <Typography
        onClick={() => window.scrollTo(0, 780)}
        sx={{
          fontWeight: "bold",
          marginLeft: "16rem",
          backgroundColor: "#f8f8f8",
          padding: "0.3rem",
          cursor: "pointer",
          zIndex: "3",
          borderRadius: "1rem",
          fontSize: "28px",
          height: "3rem",
          color: "#355E3B",
          fontFamily: "Montserrat",
        }}
      >
        Get Started
      </Typography>
    </Box>
  );
};

export default PdfConversionImage;
