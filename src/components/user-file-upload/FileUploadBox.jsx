import SettingsIcon from "@mui/icons-material/Settings";
import { Box } from "@mui/material";
import Divider from "@mui/material/Divider";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import { useTheme } from "@mui/material/styles";
import React from "react";
import {
  textToAudioAns1,
  textToAudioAns2,
  textToAudioQuestion,
} from "./Constants";
import FeatureDescription from "./FeatureDescription";
import UploadOptions from "./UploadOptions";

const FileUploadBox = (props) => {
  const theme = useTheme();
  const [age, setAge] = React.useState("");
  const bitRate = ["None", "1", "2"];
  const frequency = ["None", "1", "2"];
  const channels = ["None", "1", "2"];

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  return (
    <Box>
      {/* <Box sx={{ height: '13rem', backgroundColor: theme.palette.primary.main, borderRadius: '2rem', margin: '1rem'}}> */}
      <UploadOptions type="Text to Audio"></UploadOptions>
      {/* </Box> */}
      <Box sx={{ display: "flex" }}>
        <List
          sx={{
            width: "100%",
            maxWidth: 360,
            bgcolor: "background.paper",
          }}
        >
          <ListItem>
            <SettingsIcon></SettingsIcon>
            <ListItemText
              sx={{
                color: theme.palette.primary.main,
                marginLeft: "1rem",
                font: "normal normal bold 25px/30px Montserrat",
              }}
              primary="Settings"
            />
          </ListItem>
          <Divider />
          <ListItem>
            <ListItemText primary="Change bit rate" />
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              displayEmpty
              value={age}
              sx={{ width: "8rem" }}
              onChange={handleChange}
            >
              {bitRate.map((nam, index) => (
                <MenuItem value={nam}>{nam}</MenuItem>
              ))}
            </Select>
          </ListItem>
          <Divider />
          <ListItem>
            <ListItemText primary="Change audio frequency" />
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              displayEmpty
              value={age}
              sx={{ width: "8rem" }}
              onChange={handleChange}
            >
              {bitRate.map((nam, index) => (
                <MenuItem value={nam}>{nam}</MenuItem>
              ))}
            </Select>
          </ListItem>
          <Divider />
          <ListItem>
            <ListItemText primary="Change audio channel" />
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              displayEmpty
              value={age}
              sx={{ width: "8rem" }}
              onChange={handleChange}
            >
              {bitRate.map((nam, index) => (
                <MenuItem value={nam}>{nam}</MenuItem>
              ))}
            </Select>
          </ListItem>
        </List>
        <Box sx={{ marginLeft: "auto" }}>
          <FeatureDescription
            question={textToAudioQuestion}
            ans1={textToAudioAns1}
            ans2={textToAudioAns2}
          ></FeatureDescription>
        </Box>
      </Box>
    </Box>
  );
};

export default FileUploadBox;
