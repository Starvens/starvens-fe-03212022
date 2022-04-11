import { Button } from "@mui/material";
import React, { useState } from "react";
import QRCode from "./QRCode";
import EmailShare from "./EmailShare";
import LinkShare from "./LinkShare";
import { Checkbox, Box } from "@mui/material";

const SuccessFileShareOptions = () => {
  const [curOpt, seetCurOpt] = useState("linkShare");

  const setShareOption = (val) => {
    seetCurOpt(val);
  };

  const getComponent = (curState) => {
    switch (curState) {
      case "email":
        return <EmailShare />;
      case "qrCode":
        return <QRCode />;
      case "linkShare":
        return <LinkShare />;
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
      {getComponent(curOpt)}
    </Box>
  );
};

export default SuccessFileShareOptions;
