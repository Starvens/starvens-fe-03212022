import { useTheme } from "@emotion/react";
import { Box, Typography, Checkbox, Button, Link } from "@mui/material";
import React, { useState } from "react";
import { QRCode } from "react-qrcode-logo";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";

const QRCode1 = (props) => {
  const label = { inputProps: { "aria-label": "Checkbox demo" } };
  const theme = useTheme();
  const [isTC, setIsTc] = useState(false);

  const ShowQRCode = (props) => {
    return (
      <Box sx={{ background: "#F8F8F8", padding: "1rem" }}>
        <Typography
          sx={{
            textAlign: "center",
            font: "normal normal bold 16px/19px Montserrat",
            color: theme.palette.primary.main,
            padding: "3rem",
          }}
        >
          Download the file to your phone by using QR-Code.
        </Typography>
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <QRCode value={props.url} logoImage={"Starvens_Logo.webp"} />
        </Box>
        <Box sx={{ display: "flex", justifyContent: 'space-around' }}>
          <Link sx={{wordWrap: 'break-word', width: '24rem'}}>{props.url}</Link>
          <ContentCopyIcon sx={{alignSelf: 'center'}} />
        </Box>
      </Box>
    );
  };

  return (
    <Box>
      {!isTC ? (
        <Box sx={{ background: "#F8F8F8", padding: "1rem" }}>
          <Typography
            sx={{
              textAlign: "center",
              font: "normal normal bold 25px/30px Montserrat",
              color: theme.palette.primary.main,
              padding: "3rem",
            }}
          >
            Get QR code{" "}
          </Typography>
          <Typography sx={{ marginBottom: "auto" }}>
            Please agree to the Starvens terms and privacy policy to get the
            QR-Code
          </Typography>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              marginTop: "auto",
            }}
          >
            <Checkbox
              checked={isTC}
              onChange={() => setIsTc(!isTC)}
              {...label}
            />
            <Typography>
              I agree to the Starvens terms and privacy policy.
            </Typography>
          </Box>
        </Box>
      ) : (
        <ShowQRCode url={props.url} />
      )}
    </Box>
  );
};

export default QRCode1;
