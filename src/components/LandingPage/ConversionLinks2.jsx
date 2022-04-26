import { Box, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const ConversionLinks2 = () => {
  const boxShadow = "rgb(38, 57, 77) 0px 20px 30px -10px";
  return (
    <Box sx={{ height: "100vh" }}>
      <Typography
        sx={{
          fontWeight: "bold",
          marginLeft: "2rem",
          color: "#355E3B",
          fontSize: "54px",
          fontFamily: "Montserrat",
          textAlign: "center",
        }}
      >
        Simplify your workflow
      </Typography>
      <Box
        sx={{
          // display: "grid",
          // gridTemplateColumns: "1fr",
          // gridGap: "1rem",
          display: "flex",
          justifyContent: "center",
          marginTop: "2rem",
        }}
      >
        <Box
          sx={{ boxShadow: boxShadow, borderRadius: "1rem", margin: "0.5rem" }}
        >
          <Box>
            <Typography
              sx={{
                fontWeight: "bold",
                marginLeft: "2rem",
                color: "#355E3B",
                fontFamily: "Montserrat",
                textAlign: "center",
              }}
            >
              Simple File Share
            </Typography>
            <Typography
              sx={{
                marginLeft: "2rem",
                color: "#355E3B",
                fontFamily: "Montserrat",
                textAlign: "center",
              }}
            >
              Share any file, any size, any time to any one completely FREE!!
              period
            </Typography>
          </Box>
          <Box sx={{ display: "flex", marginTop: "2rem", padding: "1rem" }}>
            <Box>
              <img src="fileShare.webp"></img>
            </Box>
            <Link
              to="/login"
              style={{ textDecoration: "none" }}
              state={{ data: "simpleFileShare" }}
            >
              <Box sx={{ padding: "2rem"}}>
                <Typography
                  sx={{
                    fontWeight: "bold",
                    backgroundColor: "#f8f8f8",
                    padding: "0.3rem",
                    cursor: "pointer",
                    zIndex: "3",
                    borderRadius: "1rem",
                    color: "#355E3B",
                    fontFamily: "Montserrat",
                  }}
                >
                  Start sharing
                </Typography>
              </Box>
            </Link>
          </Box>
        </Box>
        {/* <Box
          sx={{ boxShadow: boxShadow, borderRadius: "1rem", margin: "0.5rem" }}
        >
          <Box>
            <Typography
              sx={{
                fontWeight: "bold",
                marginLeft: "2rem",
                color: "#355E3B",
                fontFamily: "Montserrat",
                textAlign: "center",
              }}
            >
              Text to Audio
            </Typography>
            <Typography
              sx={{
                marginLeft: "2rem",
                color: "#355E3B",
                fontFamily: "Montserrat",
                textAlign: "center",
              }}
            >
              convert .txt, .pdf, .webp, .jpg formats to mp3 with various
              features.
            </Typography>
          </Box>
          <Box sx={{ display: "flex", marginTop: "2rem", padding: "1rem" }}>
            <Box>
              <img src="TextToAudioLeft.webp"></img>
            </Box>
            <Link
              to="/share"
              style={{ textDecoration: "none" }}
              state={{ data: "textToAudio" }}
            >
              <Box sx={{ padding: "2rem" }}>
                <Typography
                  sx={{
                    fontWeight: "bold",
                    backgroundColor: "#f8f8f8",
                    padding: "0.3rem",
                    cursor: "pointer",
                    zIndex: "3",
                    borderRadius: "1rem",
                    fontSize: "28px",
                    color: "#355E3B",
                    fontFamily: "Montserrat",
                  }}
                >
                  Start Converting
                </Typography>
              </Box>
            </Link>
            <Box sx={{}}>
              <img src="TextToAudioRight.webp"></img>
            </Box>
          </Box>
        </Box>
        <Box
          sx={{ boxShadow: boxShadow, borderRadius: "1rem", margin: "0.5rem" }}
        >
          <Box>
            <Typography
              sx={{
                fontWeight: "bold",
                marginLeft: "2rem",
                color: "#355E3B",
                fontSize: "44px",
                fontFamily: "Montserrat",
                textAlign: "center",
              }}
            >
              Audio to Text
            </Typography>
            <Typography
              sx={{
                marginLeft: "2rem",
                color: "#355E3B",
                fontFamily: "Montserrat",
                textAlign: "center",
              }}
            >
              convert mp3, mp4 formats to .txt, .pdf, .webp, .jpg with various
              features.
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              marginTop: "2rem",
              padding: "1rem",
            }}
          >
            <Box>
              <img src="AudioToTextLeft.webp"></img>
            </Box>
            <Link
              to="/share"
              style={{ textDecoration: "none" }}
              state={{ data: "audioToText" }}
            >
              <Box sx={{}}>
                <Typography
                  sx={{
                    fontWeight: "bold",
                    backgroundColor: "#f8f8f8",
                    padding: "0.3rem",
                    cursor: "pointer",
                    zIndex: "3",
                    borderRadius: "1rem",
                    color: "#355E3B",
                    fontFamily: "Montserrat",
                  }}
                >
                  Start Converting
                </Typography>
              </Box>
            </Link>
            <Box>
              <img src="AudioToTextRight.webp"></img>
            </Box>
          </Box>
        </Box> */}
      </Box>
    </Box>
  );
};

export default ConversionLinks2;
