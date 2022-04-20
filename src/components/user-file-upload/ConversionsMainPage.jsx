import { useTheme } from "@emotion/react";
import { Box, Typography } from "@mui/material";
import React from "react";
import { useLocation } from "react-router-dom";
import InprogressConversion from "../file-conversion-inprogress/InprogressConversion";
import FileUploadBox from "./FileUploadBox";

const ConversionsMainPage = (props) => {
  const theme = useTheme();
  const location = useLocation();
  let featureType = "";
  if (location && location.state) {
    featureType = location.state.data;
  }
  const [featureSelected, setFeatureSelected] = React.useState({
    feature: featureType,
  });
  const [conversionState, setConvState] = React.useState("notStart");

  const makeBackEndCall = async () => {
    setConvState("inProcess");
    const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
    await sleep(2000);
    setConvState("opConv");
  };

  return (
    <Box>
      {conversionState == "notStart" ? (
        <Box>
          <Box sx={{ display: "flex", justifyContent: "space-around" }}>
            <Typography
              sx={{
                fontWeight: "bold",
                // marginLeft: "16rem",
                width: "16rem",
                backgroundColor: "#f8f8f8",
                padding: "0.3rem",
                cursor: "pointer",
                // boxShadow: featureType == 'textToAudio' ? '0px 0px 0px 2.5px purple inset, 0px 0px 0px 5px $cyan' : 'none',
                border:
                  featureSelected.feature == "textToAudio"
                    ? `5px solid ${theme.palette.primary.main}`
                    : "none",
                // zIndex: '3',
                borderRadius: "1rem",
                textAlign: "center",
                fontSize: "16px",
                // height: '3rem',
                color: "#355E3B",
                fontFamily: "Montserrat",
              }}
              onClick={() => setFeatureSelected({ feature: "textToAudio" })}
            >
              Text To Audio
            </Typography>
            <Typography
              sx={{
                fontWeight: "bold",
                // marginLeft: "16rem",
                width: "16rem",
                backgroundColor: "#f8f8f8",
                textAlign: "center",
                // boxShadow: featureType == 'audioToText' ? '0px 0px 0px 2.5px white inset, 0px 0px 0px 5px $cyan' : 'none',
                border:
                  featureSelected.feature == "audioToText"
                    ? `5px solid ${theme.palette.primary.main}`
                    : "none",
                padding: "0.3rem",
                cursor: "pointer",
                // zIndex: '3',
                borderRadius: "1rem",
                fontSize: "16px",
                // height: '3rem',
                color: "#355E3B",
                fontFamily: "Montserrat",
              }}
              onClick={() => setFeatureSelected({ feature: "audioToText" })}
            >
              Audio To Text
            </Typography>
          </Box>
          <Box>
            <FileUploadBox
              featureType={location.state ? location.state.data : ""}
            ></FileUploadBox>
          </Box>
          <Box></Box>
          <Box></Box>
          <Typography
            sx={{
              font: "normal normal bold 24px/29px Montserrat",
              backgroundColor: "#f8f8f8",
              padding: "0.3rem",
              cursor: "pointer",
              width: "8rem",
              textAlign: "center",
              margin: "2rem",
              marginLeft: "26rem",
              borderRadius: "1rem",
              height: "3rem",
              color: "#355E3B",
            }}
            onClick={makeBackEndCall}
          >
            Start
          </Typography>
        </Box>
      ) : (
        <InprogressConversion curStatus={conversionState} />
      )}
    </Box>
  );
};

export default ConversionsMainPage;
