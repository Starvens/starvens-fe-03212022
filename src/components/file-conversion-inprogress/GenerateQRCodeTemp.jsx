import { Button, Input, Typography } from "@mui/material";
import { QRCode } from "react-qrcode-logo";
import React, { useState } from "react";
import { Dialog, DialogTitle, Box } from "@mui/material";
import { useTheme } from "@emotion/react";

const GenerateQRCodeTemp = (props) => {
  return (
    <>
      <Dialog
        onClose={() => props.changeStatus("qr")}
        maxWidth="200rem"
        sx={{ maxHeight: "200rem" }}
        open={props.status.qr}
      >
        <Box sx={{ padding: "2rem" }}>
          <DialogTitle>QR code</DialogTitle>
          <Box
            sx={{ display: "flex", justifyContent: "center", margin: "2rem" }}
          >
            <QRCode value={props.url} logoImage={"Starvens_Logo.png"} />
          </Box>
          <Typography>
            Download the file to your phone by using QR-Code
          </Typography>
        </Box>
      </Dialog>
    </>
  );
};

export default GenerateQRCodeTemp;
