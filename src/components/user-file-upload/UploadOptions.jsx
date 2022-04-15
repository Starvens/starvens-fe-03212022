import { Typography, Box, Button } from "@mui/material";
import React, { useCallback, useState } from "react";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import LinkIcon from "@mui/icons-material/Link";
import { useDropzone } from "react-dropzone";
import FileUploadBefore from "./FileUploadBefore";
import FileUploadAfter from "./FileUploadAfter";
import { useTheme } from "@emotion/react";

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
