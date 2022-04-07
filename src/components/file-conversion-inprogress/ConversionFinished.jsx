import React from "react";
import {
  Box,
  Button,
  Divider,
  Typography,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { useTheme } from "@emotion/react";
import PlayCircleFilledWhiteIcon from "@mui/icons-material/PlayCircleFilledWhite";
import QrCodeIcon from "@mui/icons-material/QrCode";
import DownloadIcon from "@mui/icons-material/Download";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import DeleteIcon from "@mui/icons-material/Delete";
import ReplayIcon from "@mui/icons-material/Replay";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArchiveIcon from "@mui/icons-material/Archive";

const ConversionFinished = () => {
  const theme = useTheme();
  return (
    <>
      <Box
        sx={{
          padding: "1rem",
          height: "13rem",
          backgroundColor: theme.palette.primary.main,
          borderRadius: "2rem",
          margin: "1rem",
          padding: "1rem",
        }}
      >
        <Typography
          sx={{
            font: "normal normal bold 25px/30px Montserrat",
            color: "#F8F8F8",
          }}
        >
          your file conversion successful!
        </Typography>
        <Box
          sx={{
            display: "flex",
            backgroundColor: "#F8F8F8",
            flexDirection: "column",
            marginTop: "2rem",
            borderRadius: "2rem",
            margin: "1rem",
          }}
        >
          <Box>
            <Typography
              sx={{
                textAlign: "center",
                margin: "3px",
                font: "normal normal bold 25px/30px Montserrat",
                color: "#355E3B",
              }}
            >
              your converted file
            </Typography>
          </Box>
          <Divider flexItem></Divider>
          <Box sx={{ display: "flex", justifyContent: "space-around" }}>
            <Typography
              sx={{
                font: "normal normal bold 21px/25px Montserrat",
                color: theme.palette.primary.main,
              }}
            >
              filename.mp3
            </Typography>
            <Divider flexItem orientation="vertical"></Divider>
            <Typography
              sx={{
                font: "normal normal bold 21px/25px Montserrat",
                color: theme.palette.primary.main,
              }}
            >
              10 MB
            </Typography>
          </Box>
          <Divider flexItem></Divider>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-around",
              padding: "0.5rem",
              color: theme.palette.primary.main,
              font: "normal normal bold 24px/29px Montserrat",
            }}
          >
            {/* <ListItemButton>
              <ListItemIcon>
              <PlayCircleFilledWhiteIcon />
              </ListItemIcon>
              <ListItemText sx={{font: 'normal normal bold 24px/29px Montserrat'}}>Play</ListItemText>
            </ListItemButton>
            <ListItemButton>
              <ListItemIcon>
              <PlayCircleFilledWhiteIcon />
              </ListItemIcon>
              <ListItemText primary="Drafts" />
            </ListItemButton>
            <ListItemButton>
              <ListItemIcon>
              <PlayCircleFilledWhiteIcon />
              </ListItemIcon>
              <ListItemText primary="Drafts" />
            </ListItemButton>
            <ListItemButton>
              <ListItemIcon>
              <PlayCircleFilledWhiteIcon />
              </ListItemIcon>
              <ListItemText primary="Drafts" />
            </ListItemButton>
            <ListItemButton>
              <ListItemIcon>
              <PlayCircleFilledWhiteIcon />
              </ListItemIcon>
              <ListItemText primary="Drafts" />
            </ListItemButton>
            <ListItemButton>
              <ListItemIcon>
              <PlayCircleFilledWhiteIcon />
              </ListItemIcon>
              <ListItemText primary="Drafts" />
            </ListItemButton>
            <ListItemButton>
              <ListItemIcon>
              <PlayCircleFilledWhiteIcon />
              </ListItemIcon>
              <ListItemText primary="Drafts" />
            </ListItemButton>
            <ListItemButton>
              <ListItemIcon>
              <PlayCircleFilledWhiteIcon />
              </ListItemIcon>
              <ListItemText primary="Drafts" />
            </ListItemButton> */}
            {/* <Button>play</Button>
            <Button>qr code</Button>
            <Button>download</Button>
            <Button>cloud upload</Button>
            <Button>delete</Button>
            <Button>redo</Button>
            <Button>convert another file</Button>
            <Button>download zip</Button> */}
            <Button
              sx={{ borderRadius: "1rem" }}
              variant="outlined"
              startIcon={<PlayCircleFilledWhiteIcon />}
            >
              Play
            </Button>
            <Button
              sx={{ borderRadius: "1rem" }}
              variant="outlined"
              startIcon={<QrCodeIcon />}
            >
              QR-code
            </Button>
            <Button
              sx={{ borderRadius: "1rem" }}
              variant="outlined"
              startIcon={<DownloadIcon />}
            >
              Download
            </Button>
            <Button
              sx={{ borderRadius: "1rem" }}
              variant="outlined"
              startIcon={<CloudUploadIcon />}
            >
              Cloud Upload
            </Button>
            <Button
              sx={{ borderRadius: "1rem" }}
              variant="outlined"
              startIcon={<DeleteIcon />}
            >
              Delete
            </Button>
            <Button
              sx={{ borderRadius: "1rem" }}
              variant="outlined"
              startIcon={<ReplayIcon />}
            >
              Redo
            </Button>
            <Button
              sx={{ borderRadius: "1rem" }}
              variant="outlined"
              startIcon={<ArrowForwardIosIcon />}
            >
              Convert Another File
            </Button>
            <Button
              sx={{ borderRadius: "1rem" }}
              variant="outlined"
              startIcon={<ArchiveIcon />}
            >
              Download Zip
            </Button>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default ConversionFinished;
