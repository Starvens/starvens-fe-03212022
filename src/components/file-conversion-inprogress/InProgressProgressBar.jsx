import React from "react";
import {Box, Typography} from '@mui/material'
import LinearProgress from "@mui/material/LinearProgress";
import { useTheme } from "@emotion/react";

const InProgressProgressBar = () => {
  const theme = useTheme()
  return (
    <Box
      sx={{
        padding: "1rem",
        height: "13rem",
        backgroundColor: theme.palette.primary.main,
        borderRadius: "2rem",
        margin: "1rem",
      }}
    >
      <Typography
        sx={{
          font: "normal normal bold 25px/30px Montserrat",
          color: "#F8F8F8",
        }}
      >
        Conversion is in progress, please wait while your file is processed.
      </Typography>
      <LinearProgress sx={{ marginTop: "2rem" }} />
      <Typography
        sx={{
          textAlign: "center",
          font: "normal normal bold 25px/30px Montserrat",
          color: "#F8F8F8",
        }}
      >
        In progress
      </Typography>
      <Typography
        sx={{
          textAlign: "center",
          font: "normal normal bold 25px/30px Montserrat",
          color: "#F8F8F8",
          marginTop: "3rem",
        }}
      >
        please wait until the conversion status updates.
      </Typography>
    </Box>
  );
};

export default InProgressProgressBar;
