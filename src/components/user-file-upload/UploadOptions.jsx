import { Typography, Box, Button } from '@mui/material'
import React, { useCallback, useState } from 'react'
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import LinkIcon from '@mui/icons-material/Link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useDropzone } from 'react-dropzone'
import FileUploadBefore from './FileUploadBefore';
import FileUploadAfter from './FileUploadAfter';

const UploadOptions = (props) => {
    const [fileDetails, setFile] = useState({file: null, isFile: false});
    return (
        <>
            {
                !fileDetails.isFile ? <FileUploadBefore fileTrigger={setFile} /> : <FileUploadAfter fileDetails={{details: fileDetails, funcS: setFile}} />
            }
        </>
    )
}

export default UploadOptions