import React from "react";

import axios from "axios";

import {
  Box,
  Typography,
  Button,
  Grid,
  Paper,
  TextField,
  Link,
  Container,
  Tooltip,
} from "@mui/material";

import { useNavigate } from "react-router-dom";
import { useTheme } from "@emotion/react";

const styles = {
  root: {
    flexGrow: 1,
  },

  paper: {
    textAlign: "center",
    background: "#C1E1C1 ",
    marginTop: "60px",
    marginLeft: "50px",
    width: "400px",
    height: "450px",
    border: "1px solid #707070",
    opacity: "1",
  },
  texthead: {
    letterSpacing: "0px",
    justifyContent: "center",
    color: "#707070",
    opacity: "1",
    marginTop: "5px",
  },
  form: {
    width: "100%",
  },
  text: {
    marginTop: "5px",
    color: "#707070",
    textAlign: "Left",
  },
  textfield: {
    color: "#707070",
    textAlign: "Left",
  },

  link: {
    marginTop: "15px",
  },
  guest: {
    marginTop: "40%",
    fontWeight: "bold",
    fontSize: "30px",
    fontFamily: "Lucida Sans",
    color: "#707070",
  },
  guestlink: {
    color: "#707070",
    fontSize: "40px",
    cursor: 'pointer'
  },
  color: {
    color: "#707070",
  },
};

export const Login = () => {
  const theme = useTheme();
  const navigate = useNavigate();

  const forgotpassword = () => {
    navigate("/forgotpassword");
  };
  const home = () => {
    navigate("/");
  };
  const register = () => {
    navigate("/register");
  };
  return (
    <div sx={styles.root}>
      <Container fixed>
        <Grid
          container
          direction="row"
          justifyContent="space-around"
          alignItems="center"
          spacing={3}
        >
          <Tooltip title="Signup and Signin coming soon">
            <Grid item xs={12} sm={6}>
              <Paper
                sx={{
                  ...styles.paper,
                  cursor: "not-allowed",
                  pointerEvents: "none",
                }}
              >
                <Box
                  sx={{
                    justifyContent: "center",
                    display: "flex",
                    opacity: "0.3",
                  }}
                >
                  <Box>
                    <img src="HeaderForLogo.webp" width="38" height="50"></img>
                  </Box>
                  <Box sx={{ padding: 0, margin: 0 }}>
                    <Typography
                      sx={{
                        fontWeight: "bold",
                        marginLeft: "0rem",
                        fontSize: "20px",
                        fontFamily: "Playfair Display",
                      }}
                    >
                      STARVENS
                    </Typography>
                    <Typography
                      sx={{
                        fontWeight: "bold",
                        marginLeft: "0rem",
                        textAlign: "space-between",
                        width: "143px",
                        fontSize: "8px",
                        fontFamily: "Maiandra GD",
                      }}
                    >
                      one place to all
                    </Typography>
                  </Box>
                </Box>
                <h3 sx={styles.texthead}>Welcome</h3>

                <form sx={styles.form}>
                  <h3 sx={styles.text}>Email</h3>
                  <TextField
                    sx={styles.textfield}
                    fullWidth
                    id="email"
                    name="email"
                    label="Email"
                    variant="outlined"
                  />
                  <h3 sx={styles.text}>Password</h3>
                  <TextField
                    sx={styles.textfield}
                    fullWidth
                    id="password"
                    name="password"
                    label="Password"
                    type="password"
                    variant="outlined"
                  />

                  <Button
                    variant="contained"
                    style={{ marginTop: "15px" }}
                    type="submit"
                  >
                    Sign In
                  </Button>
                </form>

                {/* // <Box sx={{{styles.button}>
              //   <Button variant="contained">Sign In</Button>
              // </Box> */}
                <Box sx={styles.link}>
                  <Link
                    href="/forgotpassword"
                    onClick={forgotpassword}
                    color="inherit"
                  >
                    Forgot Your Password?
                  </Link>
                </Box>
                <Box sx={styles.color}>
                  <h3>
                    Don't have a Starvens account?
                    <Link href="/register" onClick={register} color="inherit">
                      SignUp Now
                    </Link>
                  </h3>
                </Box>
              </Paper>
            </Grid>
          </Tooltip>
          <Grid item xs={12} sm={6}>
            <Paper sx={styles.paper}>
              <h1 sx={styles.guest}>Continue as</h1>
              <Link
                onClick={() =>
                  navigate("/share", { state: { data: "simpleFileShare" } })
                }
                color="inherit"
                sx={styles.guestlink}
              >
                Guest
              </Link>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};
