import { Button } from "@mui/material";
import React, { useState } from "react";
import QRCode1 from "./QRCode1";
import EmailShare from "./EmailShare";
import LinkShare from "./LinkShare";
import { Checkbox, Box } from "@mui/material";
import LinkShareWithHooks from "./LinkShareWithHooks";

const SuccessFileShareOptions = (props) => {
  const [curOpt, seetCurOpt] = useState("linkShare");

  const setShareOption = (val) => {
    seetCurOpt(val);
  };

  const getComponent = (curState) => {
    switch (curState) {
      case "email":
        return <EmailShare />;
      case "qrCode":
        return <QRCode1 url={props.publicUrl} />;
      case "linkShare":
        // return <LinkShare />;
        // return <LinkShareWithHooks />;
        // return <Example />;
        return <LinkShareWithHooks />
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
