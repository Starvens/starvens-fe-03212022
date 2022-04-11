import { LineAxisOutlined } from "@mui/icons-material";
import { Box, Button } from "@mui/material";
import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import InProgressProgressBar from "../file-conversion-inprogress/InProgressProgressBar";
import FileUploadBox from "../user-file-upload/FileUploadBox";
import UploadOptions from "../user-file-upload/UploadOptions";
import SimpleFileShareFinished from "./SimpleFileShareFinished";
import http from "../api/starvensBackend";
import axios from "axios";
import SuccessFileShareOptions from "./SuccessFileShareOptions";

const FileShareHome = () => {
  const location = useLocation();
  const [uploadToBE, setUploadToBE] = useState({ status: "off" });

  const uploadFileToBackend = async (file) => {
    setUploadToBE({ ...uploadToBE, status: "inprocess" });

    //initially get the presigned url
    //TODO later change to single axios client
    const data = { fileName: file[0].name, ipAddress: "127.0.0.1" };
    try {
      const resp = await http.post("/createsignedurl", data);
      const preSignedUrl = resp.data.presignedUrl;
      const uploadFileResp = await axios.put(
        preSignedUrl,
        { data: file[0] },
        {
          headers: { "Content-Type": "video/mp4" },
        }
      );

      const fileUploadStatus = uploadFileResp.status;
      if (fileUploadStatus == "200") {
        setUploadToBE({ ...uploadToBE, status: "completeGood" });
      } else {
        setUploadToBE({ ...uploadToBE, status: "completeBad" });
      }
      // const finalAns = resp.data.finalUrl;
      const finalAns = "http://someuniqueurl.starvens.com";
    } catch (error) {
      console.log(error);
      setUploadToBE({ ...uploadToBE, status: "completeBad" });
    }

    console.log(file);
  };

  const getComponent = (status) => {
    switch (status) {
      case "off":
        return (
          <UploadOptions
            fileShare={true}
            uploadFileToBackend={uploadFileToBackend}
          />
        );
      case "inprocess":
        return (
          <InProgressProgressBar
            first={"Uploading the for simple file share...."}
          />
        );
      case "completeGood":
        return (
          <SimpleFileShareFinished
            msg={"Process status Success... you are ready to share file"}
          />
        );
      case "completeBad":
        return (
          <SimpleFileShareFinished
            msg={"Sorry something went wrong please try again...."}
          />
        );
      default:
        return null;
    }
  };

  return (
    <Box>
      {getComponent(uploadToBE.status)}
      {uploadToBE.status == "completeGood" ? <SuccessFileShareOptions /> : null}
    </Box>
  );
};

export default FileShareHome;
