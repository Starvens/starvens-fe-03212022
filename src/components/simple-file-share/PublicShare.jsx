import { useTheme } from "@emotion/react";
import {
  Box,
  TextField,
  Button,
  IconButton,
  InputAdornment,
  Card,
  CardContent,
  CardActions,
  Typography,
} from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import http from "../api/starvensBackend";
import axios from "axios";
import { LoadingButton } from "@mui/lab";

const PublicShare = () => {
  const theme = useTheme();
  const location = useLocation();
  const [publicUri, setPublicUri] = useState();
  const [downloading, setDown] = useState(false);
  const navigate = useNavigate();

  let fileDetails = () => {
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
            sx={{textAlign: 'center'}}
          >
            {publicUri.optMsg}
          </Typography>
        </Box>
        <CardContent sx={styles.cardCont}>
          <Typography variant="h6" component="div" sx={styles.fileName}>
            {publicUri.fileName}
          </Typography>
          <Typography variant="h5" component="div" sx={styles.fileName}>
            {publicUri.fileSize} {publicUri.fileUnits}
          </Typography>
          <LoadingButton
            sx={{ alignSelf: "center" }}
            loading={downloading}
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
    setDown(true);
    axios({
      url: publicUri.presignedUrl,
      method: "GET",
      responseType: "blob", // important
    }).then((response) => {
      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", publicUri.fileName);
      document.body.appendChild(link);
      link.click();
      setDown(false);
    });
  };

  useEffect(() => {
    const getType = async () => {
      try {
        const tempId = location.pathname.split("/")[3];
        let resp = await http.get("/file", { params: { public: tempId } });
        if (resp.status !== 200) navigate("/");
        setPublicUri(resp.data);
      } catch (error) {
        navigate("/");
      }
    };
    getType();
  }, []);

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
      </Box>
      <Box sx={styles.pwdBox}>{publicUri ? fileDetails() : null}</Box>
    </Box>
  );
};

export default PublicShare;
