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
import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import http from "../api/starvensBackend";
import axios from "axios";

const PrivateShare = () => {
  const theme = useTheme();
  const [showPwd, setShowPwd] = useState(false);
  const [uPwd, setUpwd] = useState("");
  const [fileDetails, setFileDetails] = useState();
  const location = useLocation();
  const navigate = useNavigate();

  const validatPwd = async () => {
    try {
      let resp = await http.post("/validatepwd", {
        uri: location.pathname.split("/")[3],
        pwd: uPwd,
      });
      if (resp.status != 200) alert("password incorrect");
      setFileDetails(resp.data);
    } catch (error) {
      alert("some unexpected error occurred");
    }
  };

  const pwdBox = () => {
    return (
      <Box sx={styles.pwdBox}>
        <TextField
          sx={{ marginRight: "2rem" }}
          id="outlined-basic"
          type={showPwd ? "text" : "password"}
          label="password"
          placeholder="Please Enter your password"
          onChange={(e) => setUpwd(e.target.value)}
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
        <Button variant="contained" onClick={validatPwd}>
          Submit
        </Button>
      </Box>
    );
  };

  const fileDetailsJsx = () => {
    return (
      <Box
        sx={{
          display: "flex",
          width: "20rem",
          justifyContent: "space-between",
        }}
      >
        <Box>{fileDetails.fileName}</Box>
        <Box>
          {fileDetails.fileSize} {fileDetails.fileUnits}
        </Box>
        <Button variant="contained" onClick={downloadFile}>
          Download
        </Button>
      </Box>
    );
  };

  let downloadFile = async () => {
    axios({
      url: fileDetails.presignedUrl,
      method: "GET",
      responseType: "blob", // important
    }).then((response) => {
      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", fileDetails.fileName);
      document.body.appendChild(link);
      link.click();
    });
  };

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
      <Box sx={styles.pwdBox}>{fileDetails ? fileDetailsJsx() : pwdBox()}</Box>
    </Box>
  );
};

export default PrivateShare;
