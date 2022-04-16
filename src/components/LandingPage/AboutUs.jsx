import { useTheme } from "@emotion/react";
import { Box, Typography } from "@mui/material";
import React from "react";
import NavBar from "./NavBar";

const AboutUs = () => {
  const theme = useTheme();
  const styles = {
    heading: {
      color: "#355E3B66",
      font: "normal normal bold 56px/68px Montserrat",
    },
    text: {
      color: "#355E3B",
      font: "normal normal bold 20px/33px Montserrat",
    },
    nameText: {
      font: "normal normal bold 36px/44px Montserrat",
      color: theme.palette.primary.main,
    },
  };

  const people = ["Sai", "Adithya", "Rajesh", "Akash", "Meghana"];

  return (
    <>
      <NavBar />
      <Box sx={{ marginTop: "6rem", padding: "2rem" }}>
        <Typography sx={styles.heading}>Where customer's comfort</Typography>
        <Typography sx={styles.heading}>lies</Typography>
        <Typography sx={styles.text}>
          Starvens was founded with the intention of revolutionizing the
          customer's online experience by bringing all platforms together and
          prioritizing simplicity with convenience. To build this goal, our
          company strives to push technological boundaries and explore services
          for future use.
        </Typography>
        <Box sx={{ marginTop: "8rem", display: "flex" }}>
          <Box sx={{ marginRight: "5rem", height: "333", width: "609" }}>
            <img src="/communities.webp"></img>
          </Box>
          <Box>
            <Typography sx={styles.heading}>
              A mission to connect all
            </Typography>
            <Typography sx={styles.heading}>communities</Typography>
            <Typography sx={styles.text}>
              Service by service, we empower all communities globally.
            </Typography>
            <Typography sx={styles.text}>
              We make customers feel more convenient by bringing all platforms
              together. We strive to improve continuously for customer
              satisfaction.
            </Typography>
          </Box>
        </Box>
        <Box sx={{marginTop: '5rem', marginBottom: '5rem'}}>
          <Typography sx={styles.heading}>Meet the Team</Typography>
          <Box sx={{display: 'flex', justifyContent: 'space-around', marginTop: '3rem'}}>
            {people.map((us1) => (
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <img src="/userPic.webp"></img>
                <Typography sx={styles.nameText}>{us1}</Typography>
              </Box>
            ))}
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default AboutUs;
