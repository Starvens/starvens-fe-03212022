import { useTheme } from "@emotion/react";
import StarIcon from "@mui/icons-material/Star";
import { Box, Button, Divider, TextField, Typography } from "@mui/material";
import Rating from "@mui/material/Rating";
import React, { useState } from "react";
import { LoadingButton } from "@mui/lab";
import http from "../api/starvensBackend";
import Snackbar from "@mui/material/Snackbar";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";

const FeedbackForm = (props) => {
  const theme = useTheme();
  const labels = {
    0.5: "Useless",
    1: "Useless+",
    1.5: "Poor",
    2: "Poor+",
    2.5: "Ok",
    3: "Ok+",
    3.5: "Good",
    4: "Good+",
    4.5: "Excellent",
    5: "Excellent+",
  };
  const [value, setValue] = React.useState(2);
  const [hover, setHover] = React.useState(-1);
  const [fbData, setFbData] = React.useState({ rating: "", comments: "" });
  const [loading, setLoading] = React.useState(false);
  const [open, setOpen] = useState({ msg: "", isOpen: false });

  function getLabelText(value) {
    return `${value} Star${value !== 1 ? "s" : ""}, ${labels[value]}`;
  }

  const action = (
    <React.Fragment>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={() => setOpen({ ...open, isOpen: false })}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </React.Fragment>
  );

  const sendFeedback = async () => {
    try {
      setLoading(true);
      let resp = await http.post("/feedback", {
        rating: value,
        comments: fbData.comments,
        place: props.place
      });
      if (resp.data.status == "success") {
        setLoading(false);
        setOpen({
          isOpen: true,
          msg: "Thank you for your feedback! We strive to improve continuously for customer satisfaction.",
        });
      } else {
        setLoading(false);
        setOpen({
          isOpen: true,
          msg: "Sorry please try again later, we value your feedback",
        });
      }
    } catch (error) {
      setLoading(false);
      setOpen({
        isOpen: true,
        msg: "Sorry please try again later, we value your feedback",
      });
    }
  };
  return (
    <Box
      sx={{
        marginTop: "5rem",
        backgroundColor: "#F8F8F8",
        borderRadius: "2rem",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        marginLeft: "auto",
        marginRight: "auto",
        padding: "1rem",
        boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 12px",
      }}
    >
      <Typography
        sx={{
          font: "normal normal bold 25px/30px Montserrat",
          color: "#355E3B",
        }}
      >
        Feedback
      </Typography>
      <Divider flexItem />
      <Rating
        name="hover-feedback"
        value={value}
        precision={0.5}
        getLabelText={getLabelText}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        onChangeActive={(event, newHover) => {
          setHover(newHover);
        }}
        emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
      />
      {value !== null && (
        <Box sx={{ ml: 2, color: theme.palette.primary.main }}>
          {labels[hover !== -1 ? hover : value]}
        </Box>
      )}
      <TextField
        id="outlined-multiline-static"
        // label="Comments"
        multiline
        sx={{ padding: "1rem" }}
        fullWidth
        onChange={(e) => setFbData({ ...fbData, comments: e.target.value })}
        rows={4}
        placeholder="Optional, any feedback is appreciated"
      />
      <LoadingButton
        loading={loading}
        onClick={sendFeedback}
        variant="contained"
      >
        Submit
      </LoadingButton>
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

export default FeedbackForm;
