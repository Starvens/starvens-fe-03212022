import { Box, Typography } from "@mui/material";
import React from "react";

const AboutUs = () => {
  const styles = {
    heading: {
      color: "#355E3B66",
      font: "normal normal bold 56px/68px Montserrat",
    },
    text: {
      color: "#355E3B",
      font: "normal normal bold 27px/33px Montserrat",
    },
  };
  return (
    <Box>
      <Typography sx={styles.heading}>Where customer's comfort</Typography>
      <Typography sx={styles.heading}>lies</Typography>
      <Typography sx={styles.text}>
        Starvens was founded with the intention of revolutionizing the
        customer's online experience by bringing all platforms together and
        prioritizing simplicity with convenience. To build this goal, our
        company strives to push technological boundaries and explore services
        for future use.
      </Typography>
      <Box>
        <img></img>
        <Box>
          <Typography>A mission to connect all</Typography>
          <Typography>communities</Typography>
          <Typography>
            Service by service, we empower all communities globally.
          </Typography>
          <Typography>
            We make customers feel more convenient by bringing all platforms
            together. We strive to improve continuously for customer
            satisfaction.
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default AboutUs;
