import { Box, Typography } from "@mui/material";
import React from "react";

export const ThirdPage = () => {
  return (
    <Box
      sx={{
        height: "100vh",
        display: "grid",
        gridTemplateRows: "3fr 1fr",
        marginTop: "5rem",
      }}
    >
      <Box sx={{ display: "grid", gridTemplateColumns: "3fr 2fr" }}>
        <Box>
          <Typography
            sx={{
              fontWeight: "bold",
              color: "#355E3B",
              marginLeft: "2rem",
              marginTop: "2rem",
              fontSize: "44px",
              fontFamily: "Montserrat",
            }}
          >
           you can manage your files at one location very soon
          </Typography>
          <Typography
            sx={{
              fontWeight: "bold",
              marginLeft: "2rem",
              color: "#355E3B",
              fontSize: "20px",
              fontFamily: "Montserrat",
            }}
          >
            manage all your files by storing and sharing across devices right
            from here.
          </Typography>
        </Box>
        <Box>
          <img src="/StoreAndShare.webp" height="400" width="550"></img>
        </Box>
      </Box>
      <Box sx={{ background: "#355E3B 0% 0% no-repeat padding-box", padding: '4rem' }}>
        <Typography
          sx={{
            fontWeight: "bold",
            marginLeft: "2rem",
            color: "#FFFFFF",
            fontSize: "39px",
            fontFamily: "Montserrat",
            opacity: 1,
          }}
        >
          Our Mission
        </Typography>
        <Typography
          sx={{
            fontStyle: "italic",
            color: "#FFFFFF",
            marginLeft: "2rem",
            fontSize: "29px",
            fontFamily: "Montserrat",
          }}
        >
          At Starvens, we make customers more convenient by bringing all
          platforms together. We strive to improve continuously for customer
          satisfaction.
        </Typography>
      </Box>
    </Box>
  );
};
