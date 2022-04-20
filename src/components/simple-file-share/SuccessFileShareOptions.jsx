import { Box, Button } from "@mui/material";
import React, { useState } from "react";
import EmailShare from "./EmailShare";
import LinkShareWithHooks from "./LinkShareWithHooks";
import QRCode1 from "./QRCode1";

const SuccessFileShareOptions = (props) => {
  const [curOpt, seetCurOpt] = useState("email");

  const setShareOption = (val) => {
    seetCurOpt(val);
  };

  const getComponent = (curState) => {
    switch (curState) {
      case "email":
        return <EmailShare url={props.publicUrl} />;
      case "qrCode":
        return <QRCode1 url={props.publicUrl} />;
      case "linkShare":
        // return <LinkShare />;
        // return <LinkShareWithHooks />;
        // return <Example />;
        return <LinkShareWithHooks url={props.publicUrl} />;
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
