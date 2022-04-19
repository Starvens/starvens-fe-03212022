import { Box, Button, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import http from "../api/starvensBackend";
import Snackbar from "@mui/material/Snackbar";
import { useNavigate } from "react-router-dom";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import { v4 as uuidv4 } from "uuid";
import { useTheme } from "@emotion/react";

const EmailShare = (props) => {
  const [open, setOpen] = useState({ msg: "", isOpen: false });
  const navigate = useNavigate();
  const theme = useTheme();
  const [emailData, setEmailData] = useState({
    toEmail: "",
    subject: "",
    content: "",
    isOTPSent: false,
    currentBox: "email",
    usersOtp: "",
    fileLocation: props.url,
  });
  const [disableSend, setDisableSend] = useState(false)
  const [curId, setCurId] = useState("");
  const styles = {
    boxHead: {
      font: "normal normal bold 22px/23px Montserrat",
      color: theme.palette.primary.main,
      padding: "1rem",
      textAlign: "center",
    },
    contentText: {
      font: "normal normal normal 17px/23px Montserrat",
      color: theme.palette.primary.main,
      padding: "0.5rem",
    },
    boxBgc: {
      background: "#F8F8F8",
      padding: "0.5rem",
      paddingRight: "1rem",
      borderRadius: "1rem",
    },
    buttonPadding: { margin: "0.5rem" },
  };

  const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

  const action = (
    <React.Fragment>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={() => setOpen(false)}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </React.Fragment>
  );

  const sendEmail = () => {
    return (
      <Box sx={styles.boxBgc}>
        <TextField
          sx={{ margin: "0.5rem" }}
          id="outlined-basic"
          label="To Email"
          fullWidth
          onChange={(x) =>
            setEmailData({ ...emailData, toEmail: x.target.value })
          }
          variant="outlined"
        />
        <TextField
          sx={{ margin: "0.5rem" }}
          id="outlined-basic"
          label="Subject"
          fullWidth
          onChange={(x) =>
            setEmailData({ ...emailData, subject: x.target.value })
          }
          variant="outlined"
        />
        <TextField
          sx={{ margin: "0.5rem" }}
          id="outlined-basic"
          multiline
          rows={5}
          fullWidth
          onChange={(x) =>
            setEmailData({ ...emailData, content: x.target.value })
          }
          label="Content"
          variant="outlined"
        />
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <Button disabled={disableSend} onClick={() => sendEmailOTP()} variant="contained">
            Send
          </Button>
        </Box>

        <Snackbar
          open={open.isOpen}
          autoHideDuration={6000}
          onClose={() => setOpen({ ...open, isOpen: false })}
          message={open.msg}
          action={action}
        />
      </Box>
    );
  };

  const verifyOtp = () => {
    return (
      <Box
        sx={{
          ...styles.boxBgc,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          maxWidth: "30rem",
        }}
      >
        <Typography sx={styles.boxHead}>Verify your email</Typography>
        <Typography sx={styles.contentText}>
          Verify your email Just one quick check to make sure it is really you.
          We have sent a verification code to provide email Remember to check
          your spam folder as well.
        </Typography>
        <TextField
          sx={{ margin: "0.5rem" }}
          id="outlined-basic"
          placeholder="Enter your OTP here"
          label="OTP"
          onChange={(x) =>
            setEmailData({ ...emailData, usersOtp: x.target.value })
          }
          variant="outlined"
        />
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            width: "30rem",
          }}
        >
          <Button
            onClick={() => verifyOTPBackend()}
            variant="contained"
            sx={styles.buttonPadding}
          >
            Verify OTP
          </Button>
          <Button variant="contained" sx={styles.buttonPadding}>
            Resend OTP
          </Button>
        </Box>
      </Box>
    );
  };

  const successEmail = () => {
    return (
      <Box
        sx={{
          ...styles.boxBgc,
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          maxWidth: "30rem",
        }}
      >
        <Typography sx={styles.boxHead}>You are all set!</Typography>
        <Typography sx={styles.contentText}>
          Your transfer file has been sent to provided email address. The
          download link will be valid for 24 hours. send another
        </Typography>
        <Button
          sx={{ ...styles.buttonPadding, alignSelf: "center" }}
          variant="contained"
          onClick={() =>
            // navigate("/user2", { state: { data: "simpleFileShare" } })
            window.location.reload()
          }
        >
          Send another
        </Button>
      </Box>
    );
    {
    }
  };

  const sendEmailOTP = async () => {
    try {
      setDisableSend(true)
      let isValidEmail = validateEmail(emailData.toEmail);
      if (!isValidEmail) {
        setOpen({
          ...open,
          isOpen: true,
          msg: "Please enter valid email address to proceed",
        });
        return;
      } else if (emailData.subject.length > 500) {
        setOpen({
          ...open,
          isOpen: true,
          msg: "Subject too large!",
        });
        return;
      }
      let curUUid = uuidv4().toString();
      setCurId(curUUid);
      let resp = await http.post("/generateotp", {
        ...emailData,
        curId: curUUid,
      });
      console.log("emailData", emailData);
      let otpSent = await resp.data;
      setEmailData({ ...emailData, isOTPSent: true });

      let respData = resp.data;
      if (respData.status == "success") {
        setEmailData({ ...emailData, currentBox: "verify" });
      } else {
      }
    } catch (error) {
      console.log("not able to send email");
    }
  };

  const verifyOTPBackend = async () => {
    try {
      let resp = await http.post("/validateotp", {
        ...emailData,
        curId: curId,
      });
      let otpVerified = await resp.data;
      if (otpVerified.status == "success") {
        setEmailData({ ...emailData, currentBox: "success" });
      }
    } catch (error) {
      setOpen({ ...open, msg: "Sorry not able to verify OTP" });
    }
  };

  const getEmailComponent = () => {
    switch (emailData.currentBox) {
      case "email":
        return sendEmail();
      case "verify":
        return verifyOtp();
      case "success":
        return successEmail();
      default:
        return null;
    }
  };

  return <Box>{getEmailComponent()}</Box>;
};

export default EmailShare;
