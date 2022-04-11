import { useTheme } from "@emotion/react";
import React from "react";
import { Box, Typography } from "@mui/material";

const SimpleFileShareFinished = (props) => {
  const theme = useTheme();
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
        {props.msg}
      </Typography>
    </Box>
  );
};

export default SimpleFileShareFinished;
