import { useTheme } from "@emotion/react";
import StarIcon from "@mui/icons-material/Star";
import { Box, Button, Divider, TextField, Typography } from "@mui/material";
import Rating from "@mui/material/Rating";
import React from "react";

const FeedbackForm = () => {
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

  function getLabelText(value) {
    return `${value} Star${value !== 1 ? "s" : ""}, ${labels[value]}`;
  }
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
        rows={4}
        placeholder="Optional, any feedback is appreciated"
      />
      <Button variant="contained">Submit</Button>
    </Box>
  );
};

export default FeedbackForm;
