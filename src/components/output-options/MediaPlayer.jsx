import { useTheme } from "@emotion/react";
import { Box, Dialog, DialogTitle } from "@mui/material";
import React from "react";
import ReactPlayer from "react-player";

const MediaPlayer = (props) => {
  const theme = useTheme();
  return (
    <Dialog
      onClose={() => props.changeStatus("play")}
      maxWidth="200rem"
      sx={{ maxHeight: "200rem" }}
      open={props.status.play}
    >
      <Box sx={{}}>
        <DialogTitle>Audio Player</DialogTitle>
        <Box sx={{ height: "5rem", margin: "1rem" }}>
          <ReactPlayer
            volume={true}
            height="4rem"
            url="/SampleAudio.mp3"
            controls
          />
        </Box>
      </Box>
      {/* <List sx={{ pt: 0 }}>
        {emails.map((email) => (
          <ListItem
            button
            onClick={() => handleListItemClick(email)}
            key={email}
          >
            <ListItemAvatar>
              <Avatar sx={{ bgcolor: blue[100], color: blue[600] }}>
                <PersonIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary={email} />
          </ListItem>
        ))}

        <ListItem
          autoFocus
          button
          onClick={() => handleListItemClick("addAccount")}
        >
          <ListItemAvatar>
            <Avatar>
              <AddIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary="Add account" />
        </ListItem>
      </List> */}
    </Dialog>
  );
};

export default MediaPlayer;
