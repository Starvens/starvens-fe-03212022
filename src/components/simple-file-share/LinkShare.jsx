import { Input, Typography } from "@mui/material";
import React from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import { Box, Checkbox } from "@mui/material";

const LinkShare = () => {
  const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
  return (
    <Box>
      <Input multiline></Input>
      <Box>
        <Typography>How do you want to share?</Typography>
        <FormControl>
          <FormLabel id="demo-row-radio-buttons-group-label">Gender</FormLabel>
          <RadioGroup
            row
            aria-labelledby="demo-row-radio-buttons-group-label"
            name="row-radio-buttons-group"
          >
            <FormControlLabel
              value="female"
              control={<Radio />}
              label="Female"
            />
            <FormControlLabel value="male" control={<Radio />} label="Male" />
            <FormControlLabel value="other" control={<Radio />} label="Other" />
            <FormControlLabel
              value="disabled"
              disabled
              control={<Radio />}
              label="other"
            />
          </RadioGroup>
        </FormControl>
      </Box>
      <Box>
        <Input placeholder="Set Your password"></Input>
      </Box>
      <Box>
        <Checkbox {...label} />
        <Typography>
          I agree to the Starvens terms and privacy policy.
        </Typography>
      </Box>
    </Box>
  );
};

export default LinkShare;
