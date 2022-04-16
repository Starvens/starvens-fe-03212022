import { useTheme } from "@emotion/react";
import { Box, Button, Checkbox, Input, Typography } from "@mui/material";
import FormControl from "@mui/material/FormControl";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormLabel from "@mui/material/FormLabel";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import React, { useState } from "react";

const LinkShare = () => {
  const label = { inputProps: { "aria-label": "Checkbox demo" } };
  const [linkData, setLinkData] = useState({
    type: "private",
    isTCSubmitted: false,
  });
  const theme = useTheme();

  const handleChange = (event) => {
    setLinkData({ ...linkData, type: event.target.value });
  };

  return (
    <Box
      sx={{
        backgroundColor: "#F8F8F8",
        display: "grid",
        gridGap: "1rem",
        padding: "1rem",
        color: theme.palette.primary.main,
      }}
    >
      <Input
        multiline
        placeholder="Optional message"
        fullWidth
        rows={3}
        sx={{ display: "grid", gridGap: "2px" }}
      ></Input>
      <Box>
        <FormControl>
          <FormLabel
            sx={{ color: theme.palette.primary.main }}
            id="demo-row-radio-buttons-group-label"
          >
            How do you want to share?
          </FormLabel>
          <RadioGroup
            row
            aria-labelledby="demo-row-radio-buttons-group-label"
            name="row-radio-buttons-group"
            defaultValue="private"
            onChange={handleChange}
          >
            <FormControlLabel
              value="private"
              control={<Radio />}
              label="Private"
            />
            <FormControlLabel
              value="public"
              control={<Radio />}
              label="Public"
            />
          </RadioGroup>
        </FormControl>
      </Box>
      {linkData.type == "private" ? (
        <Input required placeholder="Set a password for file" fullWidth></Input>
      ) : null}
      <Box sx={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
        <Checkbox
          checked={linkData.isTCSubmitted}
          onChange={() =>
            setLinkData({ ...linkData, isTCSubmitted: !linkData.isTCSubmitted })
          }
          {...label}
        />
        <Typography>
          I agree to the Starvens terms and privacy policy.
        </Typography>
      </Box>
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Button disabled={!linkData.isTCSubmitted} variant="contained">
          Share
        </Button>
      </Box>
    </Box>
  );
};

export default LinkShare;
