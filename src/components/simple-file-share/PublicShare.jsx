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

const PublicShare = () => {
  const theme = useTheme();
  const location = useLocation();
  const [publicUri, setPublicUri] = useState();
  const navigate = useNavigate();

  let fileDetails = () => {
    return (
      <Box
        sx={{
          display: "flex",
          width: "20rem",
          justifyContent: "space-between",
        }}
      >
        <Box>{publicUri.fileName}</Box>
        <Box>
          {publicUri.fileSize} {publicUri.fileUnits}
        </Box>
        <Button variant="contained" onClick={downloadFile}>
          Download
        </Button>
      </Box>
    );
  };

  let downloadFile = async () => {
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
