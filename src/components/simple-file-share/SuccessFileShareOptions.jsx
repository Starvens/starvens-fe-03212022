import { Box, Button } from "@mui/material";
import React, { useState, useEffect } from "react";
import EmailShare from "./EmailShare";
import LinkShareWithHooks from "./LinkShareWithHooks";
import QRCode1 from "./QRCode1";
import http from "../api/starvensBackend";

const SuccessFileShareOptions = (props) => {
  const [curOpt, seetCurOpt] = useState("email");
  const [allUrls, setUrls] = useState({ pubUrl: "", priUrl: "" });

  const setShareOption = (val) => {
    seetCurOpt(val);
  };

  useEffect(() => {
    const getAllUrls = async () => {
      if (!props.publicUrl) return;
      let resp = await http.get("/getallurls", {
        params: { consid: props.publicUrl },
      });
      setUrls(resp.data);
    };
    getAllUrls();
  }, [props.publicUrl]);

  const getComponent = (curState) => {
    switch (curState) {
      case "email":
        return (
          <Box sx={{ display: "flex", justifyContent: "flex-start" }}>
            <EmailShare url={props.publicUrl} compUrls={allUrls} />
          </Box>
        );
      case "qrCode":
        return (
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <QRCode1 url={props.publicUrl} compUrls={allUrls} />
          </Box>
        );
      case "linkShare":
        return (
          <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
            <LinkShareWithHooks url={props.publicUrl} compUrls={allUrls} />
          </Box>
        );
      default:
        return null;
    }
  };
  return (
    <Box>
      <Box sx={{ display: "flex", justifyContent: "space-around" }}>
        <Button variant="contained" onClick={() => setShareOption("email")}>
          Email
        </Button>
        <Button variant="contained" onClick={() => setShareOption("qrCode")}>
          QR code
        </Button>
        <Button variant="contained" onClick={() => setShareOption("linkShare")}>
          Link
        </Button>
      </Box>
      {getComponent(curOpt)}
    </Box>
  );
};

export default SuccessFileShareOptions;
