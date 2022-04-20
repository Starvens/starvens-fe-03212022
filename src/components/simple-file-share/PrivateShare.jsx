import { useTheme } from "@emotion/react";
import {
  Box,
  TextField,
  Button,
  IconButton,
  InputAdornment,
} from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const PrivateShare = () => {
  const theme = useTheme();
  const [showPwd, setShowPwd] = useState(false);
  const navigate = useNavigate();

  const styles = {
    banner: {
      height: "5rem",
      backgroundColor: theme.palette.primary.main,
      flexDirection: "column",
      justifyContent: "center",
      display: "flex",
      alignItems: "center",
    },
    pwdBox: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      marginTop: "5rem",
    },
  };
  return (
    <Box>
      <Box style={styles.banner}>
        <Box sx={{ cursor: "pointer" }}>
          <img onClick={() => navigate("/")} src="/FooterLogo.webp" />
        </Box>
      </Box>
      <Box sx={styles.pwdBox}>
        <TextField
          sx={{ marginRight: "2rem" }}
          id="outlined-basic"
          type={showPwd ? "text" : "password"}
          label="password"
          placeholder="Please Enter your password"
          onChange={() => console.log("something")}
          variant="outlined"
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={() => setShowPwd(!showPwd)}
                  onMouseDown={() => setShowPwd(!showPwd)}
                >
                  {showPwd ? <VisibilityIcon /> : <VisibilityOffIcon />}
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
        <Button variant="contained">Submit</Button>
      </Box>
    </Box>
  );
};

export default PrivateShare;
