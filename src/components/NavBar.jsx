import React from "react";
import { AppBar, Box, OutlinedInput, Toolbar, Typography } from "@mui/material";

const NavBar = () => {
  return (
    <Box sx={{}}>
      <AppBar
        position="static"
        sx={{
          height: "3rem",
          justifyContent: "center",
          background: "transparent",
          marginTop: 3,
          color: "#355E3B",
          elevation: "6",
          fontFamily: "Lucida Sans",
          boxShadow: "0px 0px 0px 0px",
          border: "none",
          outline: "none",
        }}
      >
        <Toolbar sx={{ border: "none", outline: "none" }}>
          <Box sx={{ display: "flex" }}>
            <Box sx={{ marginRight: "4rem", display: "flex" }}>
              <Box>
                <img src="/Starvens_Logo.png" width="38" height="70"></img>
              </Box>
              <Box sx={{ padding: 0, margin: 0 }}>
                <Typography
                  sx={{
                    fontWeight: "bold",
                    marginLeft: "2rem",
                    fontSize: "28px",
                    fontFamily: "Playfair Display",
                  }}
                >
                  STARVENS
                </Typography>
                <Typography
                  sx={{
                    fontWeight: "bold",
                    marginLeft: "2rem",
                    textAlign: "justify",
                    width: "143px",
                    fontSize: "8px",
                    fontFamily: "Maiandra GD",
                  }}
                >
                  one place to all
                </Typography>
              </Box>
            </Box>
            <Box sx={{ display: "flex", marginLeft: "3rem" }}>
              <Typography
                sx={{
                  fontWeight: "bold",
                  marginLeft: "2rem",
                  fontSize: "20px",
                  fontFamily: "Lucida Sans",
                }}
              >
                Home
              </Typography>
              <Typography
                sx={{
                  fontWeight: "bold",
                  marginLeft: "2rem",
                  fontSize: "20px",
                  fontFamily: "Lucida Sans",
                }}
              >
                Services
              </Typography>
              <Typography
                sx={{
                  fontWeight: "bold",
                  marginLeft: "2rem",
                  fontSize: "20px",
                  fontFamily: "Lucida Sans",
                }}
              >
                Why Starvens
              </Typography>
              <Typography
                sx={{
                  fontWeight: "bold",
                  marginLeft: "2rem",
                  fontSize: "20px",
                  fontFamily: "Lucida Sans",
                }}
              >
                Company
              </Typography>
            </Box>
            <Box sx={{ marginLeft: "5rem" }}>
              <OutlinedInput
                notched="true"
                placeholder="Search..."
                sx={{
                  "& input": { padding: "4.5px 14px" },
                  borderRadius: "3rem",
                  borderColor: "#707070",
                  background: "#f8f8f8",
                }}
              />
            </Box>
            <Box sx={{ marginLeft: "2rem" }}>
              <Typography
                sx={{
                  fontWeight: "bold",
                  marginLeft: "2rem",
                  fontSize: "20px",
                  fontFamily: "Lucida Sans",
                }}
              >
                Sign in
              </Typography>
            </Box>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default NavBar;
