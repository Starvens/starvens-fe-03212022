import { Button, Input, Typography } from "@mui/material";
// import { QRCode } from "react-qrcode-logo";
import React, { useState, lazy, Suspense } from "react";
import { Dialog, DialogTitle, Box } from "@mui/material";
import { useTheme } from "@emotion/react";
// lazy loading qr code component
const QRCode = lazy(() => import('react-qrcode-logo')) 

const GenerateQRCodeTemp = (props) => {
  return (
    <>
    <Suspense fallback={<div></div>}>
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
            <QRCode value={props.url} logoImage={"Starvens_Logo.webp"} />
          </Box>
          <Typography>
            Download the file to your phone by using QR-Code
          </Typography>
        </Box>
      </Dialog>
      </Suspense>
    </>
  );
};

export default GenerateQRCodeTemp;
