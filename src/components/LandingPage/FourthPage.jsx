import { Box, Typography } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

const FourthPage = () => {
  const nagivate = useNavigate();
  const styles = {
    hed: {
      fontSize: "22px",
      color: "#F8F8F8",
      fontWeight: "bold",
      fontFamily: "Montserrat",
      textAlign: "center",
    },
    subH: {
      fontSize: "17px",
      color: "#F8F8F8",
      fontWeight: "bold",
      cursor: 'pointer',
      fontFamily: "Montserrat",
      textAlign: "center",
    },
  };
  return (
    <Box
      sx={{
        display: "grid",
        height: "100vh",
        gridTemplateRows: "3fr 2fr",
        marginTop: "5rem",
      }}
    >
      <Box sx={{ display: "grid", gridTemplateColumns: "4fr 2fr" }}>
        <Box>
          <Typography
            sx={{
              fontWeight: "bold",
              color: "#355E3B",
              marginLeft: "2rem",
              fontSize: "44px",
              fontFamily: "Montserrat",
            }}
          >
            Mobile version will be releasing soon
          </Typography>
          <Typography
            sx={{
              fontWeight: "bold",
              color: "#355E3B",
              marginLeft: "2rem",
              fontSize: "20px",
              fontFamily: "Montserrat",
            }}
          >
            convert and organize your files from anywhere
          </Typography>
        </Box>
        <Box>
          <img style={{ marginLeft: "10rem" }} src="/MobileImage.webp"></img>
        </Box>
      </Box>
      <Box
        sx={{
          marginTop: "5rem",
          padding: "1rem 0 2rem 0rem",
          background: "#355E3B 0% 0% no-repeat padding-box;",
        }}
      >
        <Box sx={{ display: "flex" }}>
          <Box sx={{ display: "flex", marginRight: "3rem", padding: "1rem" }}>
            <img src="FooterLogoAndName.webp" height="70" width="181"></img>
          </Box>
          <Box sx={{ display: "flex", marginTop: "1rem", marginLeft: "7rem" }}>
            <Box sx={{ marginRight: "5rem", marginLeft: "3rem" }}>
              <Typography sx={styles.hed}>Products</Typography>
              <Typography onClick={() => nagivate('/share', {state: {data: 'simpleFileShare'}})} sx={styles.subH}>Simple FileShare</Typography>
            </Box>
            <Box sx={{ marginRight: "5rem" }}>
              <Typography sx={styles.hed}>Company</Typography>
              <Typography
                onClick={() => window.scrollTo(0, 0)}
                sx={styles.subH}
              >
                Home
              </Typography>
              <Typography onClick={() => nagivate("/aboutus")} sx={styles.subH}>
                About
              </Typography>
              <Typography onClick={() => nagivate("/service")} sx={styles.subH}>
                Terms of Service
              </Typography>
              <Typography onClick={() => nagivate("/privacy")} sx={styles.subH}>
                Privacy Policy
              </Typography>
            </Box>
            <Box>
              <Typography sx={styles.hed}>Support</Typography>
              <Typography onClick={() => nagivate("/support")} sx={styles.subH}>
                contact@starvens.com
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default FourthPage;
