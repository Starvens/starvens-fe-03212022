import { Button, Input } from "@mui/material";
import { QRCode } from "react-qrcode-logo";
import React, { useState } from "react";

const GenerateQRCodeTemp = () => {
  const [show, setShow] = useState(false);
  const [url, setUrl] = useState("");

  const generateQRCode = () => {
    let tempurl = "https://picsum.photos/id/237/200/300";
    setUrl(tempurl);
    setShow(true)
  };

  const clearQRCode = () => {
      setShow(false)
      setUrl('')
  };
  return (
    <>
    {
      2 == 2 ? 3 == 3 ? <h1>3 is equals to 3</h1> : <h>Not equal</h> : <h1>two is not equals to 2</h1>
    }
      <Input>Enter some integer</Input>
      <Button onClick={() => generateQRCode()}>Generate QR code</Button>
      <Button onClick={() => clearQRCode()}>clear</Button>
      {show ? (
        <QRCode value={`${url}`} logoImage={"Starvens_Logo.png"} />
      ) : null}
    </>
  );
};

export default GenerateQRCodeTemp;
