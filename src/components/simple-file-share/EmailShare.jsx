import React from "react";
import { TextField, Box, Button } from "@mui/material";

const EmailShare = () => {
  return (
    <Box sx={{ background: "#F8F8F8", padding: "0.5rem", paddingRight: '1rem' }}>
      <TextField
        sx={{ margin: "0.5rem" }}
        id="outlined-basic"
        label="To Email"
        fullWidth
        variant="outlined"
      />
      <TextField
        sx={{ margin: "0.5rem" }}
        id="outlined-basic"
        label="Subject"
        fullWidth
        variant="outlined"
      />
      <TextField
        sx={{ margin: "0.5rem" }}
        id="outlined-basic"
        multiline
        rows={5}
        fullWidth
        label="Content"
        variant="outlined"
      />
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Button
          variant="contained"
        >
          Share
        </Button>
      </Box>
    </Box>
  );
};

export default EmailShare;
