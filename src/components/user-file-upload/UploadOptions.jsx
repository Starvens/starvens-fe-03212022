import { Typography, Box, Button } from '@mui/material'
import React from 'react'
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import LinkIcon from '@mui/icons-material/Link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const UploadOptions = (props) => {
    return (
            <Box sx={{ textAlign: 'center', padding: '1rem'}}>
                <Typography sx={{ color: '#F8F8F8', font: 'normal normal bold 20px/20px Montserrat', marginTop: '13px' }}>Drag & Drop Files here</Typography>
                <Typography sx={{ color: '#F8F8F8' }}>or</Typography>
                <Button variant="outlined" fontSize='large' sx={{ font: 'normal normal bold 20px/20px Montserrat', "&:hover": { backgroundColor: "white" }, backgroundColor: 'white' }} startIcon={<CloudUploadIcon />}>Upload</Button>
                <Typography sx={{ color: '#F8F8F8' }}>or</Typography>
                <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                    <Box sx={{ display: 'flex', margin: '0rem 1rem 0rem 1rem', color: '#F8F8F8', padding: '2px' }}>
                        <LinkIcon></LinkIcon>
                        <Typography>Enter Url</Typography>
                    </Box>
                    <Box sx={{ display: 'flex', margin: '0rem 1rem 0rem 1rem', color: '#F8F8F8', padding: '2px' }}>
                        {/* <LinkIcon></LinkIcon> */}
                        {/* <i class="fa-brands fa-dropbox"></i> */}
                        <FontAwesomeIcon color='white' icon="fa-brands fa-dropbox" />
                        <Typography>Dropbox</Typography>
                    </Box>
                    <Box sx={{ display: 'flex', margin: '0rem 1rem 0rem 1rem', color: '#F8F8F8', padding: '2px' }}>
                        <LinkIcon></LinkIcon>
                        <Typography>Google Drive</Typography>
                    </Box>
                </Box>
                <Typography sx={{font: 'italic normal 100 15px/15px Montserrat', color: '#FFFF', marginTop: '1rem'}} >Try an example file</Typography>
            </Box>
    )
}

export default UploadOptions