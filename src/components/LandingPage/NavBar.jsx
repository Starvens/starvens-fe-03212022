import { AppBar, Box, OutlinedInput, Toolbar, Typography } from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import HoverMenu from "./HoverMenu";

const NavBar = () => {
  const x = ["first", "second"];
  const menuOptions = {
    products: ["Text to Audio", "Audio To Text"],
    company: ["About", "Contact"],
    signin: ["Signin", "Create Account"],
  };
  const navigate = useNavigate();
  const [navMenu, setNavMenu] = useState({
    products: false,
    company: false,
    signin: false,
  });

  return (
    <Box sx={{}}>
      <AppBar
        position="fixed"
        sx={{
          height: "5rem",
          justifyContent: "center",
          background: "#C1E1C1",
          padding: 2,
          color: "#355E3B",
          fontFamily: "Lucida Sans",
          boxShadow: "0px 0px 0px 0px",
          border: "none",
          outline: "none",
        }}
      >
        <Toolbar sx={{ border: "none", outline: "none" }}>
          <Box sx={{ display: "flex" }}>
            <Box sx={{ marginRight: "4rem", display: "flex" }}>
              <Box sx={{ cursor: "pointer" }}>
                <img
                  onClick={() => navigate("/")}
                  src="HeaderLogoAndName.webp"
                  width="193"
                  height="70"
                ></img>
              </Box>
            </Box>
            <Box sx={{ display: "flex", marginLeft: "3rem" }}>
              <Typography
                onMouseEnter={() => setNavMenu({ ...navMenu, products: true })}
                onMouseLeave={() => setNavMenu({ ...navMenu, products: false })}
                sx={{
                  fontWeight: "bold",
                  marginLeft: "2rem",
                  marginTop: "1.5rem",
                  fontSize: "20px",
                  fontFamily: "Lucida Sans",
                  cursor: 'pointer'
                }}
              >
                Products
                {navMenu.products ? (
                  <HoverMenu options={menuOptions.products}></HoverMenu>
                ) : null}
              </Typography>

              <Box
                onClick={() => navigate("/aboutus")}
                sx={{ cursor: "pointer" }}
              >
                <Typography
                  sx={{
                    fontWeight: "bold",
                    marginLeft: "2rem",
                    marginTop: "1.5rem",
                    fontSize: "20px",
                    fontFamily: "Lucida Sans",
                  }}
                >
                  About us
                </Typography>
              </Box>
            </Box>
            <Box sx={{ marginLeft: "5rem" }}>
              <OutlinedInput
                notched="true"
                placeholder="Search..."
                sx={{
                  "& input": { padding: "4.5px 14px" },
                  borderRadius: "3rem",
                  marginTop: "1.5rem",
                  borderColor: "#707070",
                  background: "#f8f8f8",
                }}
              />
            </Box>
            <Box sx={{ marginLeft: "2rem" }}>
              <Typography
                onMouseEnter={() => setNavMenu({ ...navMenu, signin: true })}
                onMouseLeave={() => setNavMenu({ ...navMenu, signin: false })}
                sx={{
                  fontWeight: "bold",
                  marginLeft: "16rem",
                  marginTop: "1.5rem",
                  fontSize: "20px",
                  fontFamily: "Lucida Sans",
                }}
              >
                Sign in
                {navMenu.signin ? (
                  <HoverMenu options={menuOptions.products}></HoverMenu>
                ) : null}
              </Typography>
            </Box>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default NavBar;
