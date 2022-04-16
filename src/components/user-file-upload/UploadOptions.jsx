import { useTheme } from "@emotion/react";
import { Box, Button } from "@mui/material";
import React, { useState } from "react";
import FileUploadAfter from "./FileUploadAfter";
import FileUploadBefore from "./FileUploadBefore";

const UploadOptions = (props) => {
  const [fileDetails, setFile] = useState({ file: null, isFile: false });
  const theme = useTheme();
  const [backendCall, setBackendCall] = useState({});

  return (
    <>
      <Box>
        {!fileDetails.isFile ? (
          <FileUploadBefore fileTrigger={setFile} />
        ) : (
          <FileUploadAfter
            fileDetails={{ details: fileDetails, funcS: setFile }}
          />
        )}
      </Box>
      {props.fileShare && fileDetails.file ? (
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <Button
            variant="outlined"
            onClick={() => props.uploadFileToBackend(fileDetails.file)}
            sx={{
              "&:hover": { backgroundColor: "white" },
              backgroundColor: "white",
            }}
            size="large"
          >
            Upload
          </Button>
        </Box>
      ) : null}
    </>
  );
};

export default UploadOptions;
