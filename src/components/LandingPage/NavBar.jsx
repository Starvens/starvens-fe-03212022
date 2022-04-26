import { AppBar, Box, OutlinedInput, Toolbar, Typography } from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import HoverMenu from "./HoverMenu";

const NavBar = () => {
  const x = ["first", "second"];
  const menuOptions = {
    products: ["Simple FileShare"],
    company: ["About", "Contact"],
    signin: [],
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
                  src="HeaderForLogo.webp"
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
                  cursor: "pointer",
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
                  About
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
            <Box sx={{ display: "flex", marginLeft: "15rem" }}>
              <Typography
                onMouseEnter={() => setNavMenu({ ...navMenu, signin: true })}
                onMouseLeave={() => setNavMenu({ ...navMenu, signin: false })}
                onClick = {() => navigate('/login')}
                sx={{
                  fontWeight: "bold",
                  cursor: 'pointer',
                  marginTop: "1.5rem",
                  fontSize: "20px",
                  fontFamily: "Lucida Sans",
                }}
              >
                Sign in
              </Typography>
              <Typography
                onMouseEnter={() => setNavMenu({ ...navMenu, signin: true })}
                onMouseLeave={() => setNavMenu({ ...navMenu, signin: false })}
                onClick={() => navigate('/login')}
                sx={{
                  fontWeight: "bold",
                  marginLeft: "4rem",
                  marginTop: "1.5rem",
                  cursor: 'pointer',
                  fontSize: "20px",
                  fontFamily: "Lucida Sans",
                }}
              >
                Sign up
              </Typography>
            </Box>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default NavBar;
