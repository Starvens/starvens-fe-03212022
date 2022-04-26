import { useTheme } from "@emotion/react";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import { Box, Checkbox, Link, Typography, IconButton } from "@mui/material";
import React, { useState } from "react";
import { QRCode } from "react-qrcode-logo";
import { copyText } from "../businessLogic/GetFileDetails";

const QRCode1 = (props) => {
  const label = { inputProps: { "aria-label": "Checkbox demo" } };
  const theme = useTheme();
  const [isTC, setIsTc] = useState(false);
  const ShowQRCode = (props) => {
    return (
      <Box
        sx={{ background: "#F8F8F8", padding: "0.3rem", borderRadius: "1rem" }}
      >
        <Typography
          sx={{
            textAlign: "center",
            font: "normal normal bold 16px/19px Montserrat",
            color: theme.palette.primary.main,
            padding: "1rem",
          }}
        >
          Download the file to your phone by using QR-Code.
        </Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            padding: "1rem",
          }}
        >
          <Box>
            <Typography
              sx={{
                textAlign: "center",
                font: "normal normal bold 16px/19px Montserrat",
                color: theme.palette.primary.main,
                padding: "1rem",
              }}
            >
              Public link
            </Typography>
            <Box sx={{ display: "flex", justifyContent: "space-around" }}>
              <Link
                href={props.compUrls.pubUrl}
                underline="none"
                target="_blank"
                sx={{ wordWrap: "break-word", width: "18rem" }}
              >
                {props.compUrls.pubUrl}
              </Link>
              <IconButton onClick={() => copyText(props.compUrls.pubUrl)}>
                <ContentCopyIcon sx={{ alignSelf: "center" }} />
              </IconButton>
            </Box>
            <Box sx={{ display: "flex", justifyContent: "center" }}>
              <QRCode
                value={props.compUrls.pubUrl}
                logoImage={"Starvens_Logo.webp"}
              />
            </Box>
          </Box>
        </Box>
      </Box>
    );
  };

  return (
    <Box sx={{ marginTop: "5px" }}>
      {!isTC ? (
        <Box
          sx={{ background: "#F8F8F8", padding: "1rem", borderRadius: "1rem" }}
        >
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
              I agree to the{" "}
              <a href="/service" target="_blank" rel="noreferrer noopener">
                Starvens terms
              </a>{" "}
              and{" "}
              <a href="/privacy" target="_blank" rel="noreferrer noopener">
                privacy policy.
              </a>
            </Typography>
          </Box>
        </Box>
      ) : (
        <ShowQRCode url={props.url} compUrls={props.compUrls} />
      )}
    </Box>
  );
};

export default QRCode1;
