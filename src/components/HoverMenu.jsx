import React from "react";
import { Box } from "@mui/material";

const HoverMenu = (props) => {
  const items = props.options.map((x) => <div key={x}>{x}</div>);
  return (
    <Box
      sx={{
        display: "flex",
        position: "absolute",
        flexDirection: "column",
        backgroundColor: "red",
      }}
    >
      {items}
    </Box>
  );
};

export default HoverMenu;
