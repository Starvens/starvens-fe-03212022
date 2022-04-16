import { Box } from "@mui/material";
import axios from "axios";
import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import http from "../api/starvensBackend";
import InProgressProgressBar from "../file-conversion-inprogress/InProgressProgressBar";
import UploadOptions from "../user-file-upload/UploadOptions";
import SimpleFileShareFinished from "./SimpleFileShareFinished";
import SuccessFileShareOptions from "./SuccessFileShareOptions";

const FileShareHome = () => {
  const location = useLocation();
  const [uploadToBE, setUploadToBE] = useState({ status: "off" });
  const [publicUrl, setPublicUrl] = useState({ publicUrl: "" });

  const uploadFileToBackend = async (file) => {
    setUploadToBE({ ...uploadToBE, status: "inprocess" });

    //initially get the presigned url
    //TODO later change to single axios client
    const data = { fileName: file[0].name, ipAddress: "127.0.0.1" };
    try {
      const resp = await http.post("/createsignedurl", data);
      const preSignedResp = resp.data;
      const preSignedUrl = preSignedResp.presignedUrl;
      const uploadFileResp = await axios.put(
        preSignedUrl,
        { data: file[0] },
        {
          headers: { "Content-Type": "binary/octet-stream" },
        }
      );

      const fileUploadStatus = uploadFileResp.status;
      if (fileUploadStatus == "200") {
        setUploadToBE({ ...uploadToBE, status: "completeGood" });
      } else {
        setUploadToBE({ ...uploadToBE, status: "completeBad" });
      }
      // const finalAns = resp.data.finalUrl;
      setPublicUrl({ publicUrl, publicUrl: preSignedResp.publicUrl });
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
            publicUrl={publicUrl.publicUrl}
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
      {/* <Box sx={{display: 'flex', justifyContent: 'center'}}> */}
      {uploadToBE.status == "completeGood" ? (
        <SuccessFileShareOptions publicUrl={publicUrl.publicUrl} />
      ) : null}
      {/* </Box> */}
      {/* <h1>Public URL Copy below :: {publicUrl.publicUrl}</h1> */}
    </Box>
  );
};

export default FileShareHome;
