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
        return <EmailShare url={props.publicUrl} compUrls={allUrls} />;
      case "qrCode":
        return <QRCode1 url={props.publicUrl} compUrls={allUrls} />;
      case "linkShare":
        return <LinkShareWithHooks url={props.publicUrl} compUrls={allUrls} />;
      default:
        return null;
    }
  };
  return (
    <Box>
      <Box sx={{ display: "flex", justifyContent: "space-around" }}>
        <Button onClick={() => setShareOption("email")}>Email</Button>
        <Button onClick={() => setShareOption("qrCode")}>QR code</Button>
        <Button onClick={() => setShareOption("linkShare")}>Link</Button>
      </Box>
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        {getComponent(curOpt)}
      </Box>
    </Box>
  );
};

export default SuccessFileShareOptions;
