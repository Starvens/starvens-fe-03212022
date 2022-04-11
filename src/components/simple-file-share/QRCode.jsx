import { Box, Typography, Checkbox } from "@mui/material";
import React from "react";

const QRCode = () => {
  const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
  return (
    <Box>
      <Typography>Get QR code </Typography>
      <Typography>
        Please agree to the Starvens terms and privacy policy to get the QR-Code
      </Typography>
      <Box>
        <Checkbox {...label} />
        <Typography>
          I agree to the Starvens terms and privacy policy.
        </Typography>
      </Box>
    </Box>
  );
};

export default QRCode;
