import { Box, Button, TextField } from "@mui/material";
import React, { useState } from "react";
import http from "../api/starvensBackend";

const EmailShare = () => {
  const [emailData, setEmailData] = useState({
    toEmail: "",
    subject: "",
    content: "",
  });

  const sendEmail = async () => {
    try {
      let resp = await http.post("/sendemail", emailData);
      let respData = resp.data;
      if (respData.status == "success") {
        //email send successful
      } else {
      }
    } catch (error) {
      console.log("not able to send email");
    }
  };

  return (
    <Box
      sx={{ background: "#F8F8F8", padding: "0.5rem", paddingRight: "1rem" }}
    >
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
        <Button variant="contained">Send</Button>
      </Box>
    </Box>
  );
};

export default EmailShare;
