import React from "react";
import { Box, Typography, TextField, Divider, Button } from "@mui/material";
import { useTheme } from "@emotion/react";
import LinearProgress from "@mui/material/LinearProgress";
import Rating from "@mui/material/Rating";
import StarIcon from "@mui/icons-material/Star";

const InprogressConversion = () => {
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
    <Box>
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

      <Box
        sx={{
          width: "35rem",
          height: "18rem",
          marginTop: "7rem",
          backgroundColor: "#F8F8F8",
          borderRadius: "2rem",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          marginLeft: "auto",
          marginRight: "auto",
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
    </Box>
  );
};

export default InprogressConversion;
