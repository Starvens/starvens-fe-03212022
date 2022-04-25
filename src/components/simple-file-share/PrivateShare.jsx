import { useTheme } from "@emotion/react";
import {
  Box,
  TextField,
  Button,
  IconButton,
  Card,
  Typography,
  InputAdornment,
  CardContent,
} from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import http from "../api/starvensBackend";
import axios from "axios";
import Snackbar from "@mui/material/Snackbar";
import { LoadingButton } from "@mui/lab";
import CloseIcon from "@mui/icons-material/Close";

const PrivateShare = () => {
  const theme = useTheme();
  const [showPwd, setShowPwd] = useState(false);
  const [uPwd, setUpwd] = useState("");
  const [fileDetails, setFileDetails] = useState();
  const location = useLocation();
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState({ msg: "", isOpen: false });
  const navigate = useNavigate();

  const validatPwd = async () => {
    try {
      setLoading(true);
      let resp = await http.post("/validatepwd", {
        uri: location.pathname.split("/")[3],
        pwd: uPwd,
      });
      if (resp.status != 200)
        setOpen({ isOpen: true, msg: "Unable to validate password" });
      setFileDetails(resp.data);
      setLoading(false);
    } catch (error) {
      setOpen({ isOpen: true, msg: "Unable to validate password" });

      setLoading(false);
    }
  };

  const action = (
    <React.Fragment>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={() => setOpen({ ...open, isOpen: false })}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </React.Fragment>
  );

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
        <LoadingButton
          variant="contained"
          onClick={validatPwd}
          loading={loading}
          loadingPosition={"end"}
        >
          Submit
        </LoadingButton>
      </Box>
    );
  };

  const fileDetailsJsx = () => {
    return (
      <Card>
        <Box>
          <Typography
            variant="h4"
            component="div"
            sx={{ color: theme.palette.primary.main, textAlign: "center" }}
          >
            Your file
          </Typography>
          <Typography
            variant="h6"
            color="text.secondary"
            component="div"
            sx={{ textAlign: "center" }}
          >
            {fileDetails.optMsg}
          </Typography>
        </Box>
        <CardContent sx={styles.cardCont}>
          <Typography variant="h5" component="div" sx={styles.fileName}>
            {fileDetails.fileName}
          </Typography>
          <Typography variant="h5" component="div" sx={styles.fileName}>
            {fileDetails.fileSize} {fileDetails.fileUnits}
          </Typography>
          <LoadingButton
            loading={loading}
            onClick={downloadFile}
            variant="contained"
          >
            Download
          </LoadingButton>
        </CardContent>
      </Card>
    );
  };

  let downloadFile = async () => {
    setLoading(true);
    try {
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
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
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
    fileName: {
      fontFamily: "Montserrat",
    },
    cardCont: {
      display: "flex",
      justifyContent: "space-between",
      width: "100vh",
      display: "flex",
      justifyContent: "space-around",
      fontFamily: "Montserrat",
      columnGap: "2rem",
    },
  };

  return (
    <Box>
      <Box style={styles.banner}>
        <Box sx={{ cursor: "pointer" }}>
          <img onClick={() => navigate("/")} src="/FooterLogo.webp" />
        </Box>
        <Snackbar
          open={open.isOpen}
          autoHideDuration={6000}
          onClose={() => setOpen({ ...open, isOpen: false })}
          message={open.msg}
          action={action}
        />
      </Box>
      <Box sx={styles.pwdBox}>{fileDetails ? fileDetailsJsx() : pwdBox()}</Box>
    </Box>
  );
};

export default PrivateShare;
