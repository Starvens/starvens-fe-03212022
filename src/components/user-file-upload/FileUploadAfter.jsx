import React from 'react'
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useTheme } from '@emotion/react';
import CardMedia from '@mui/material/CardMedia';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';

const FileUploadAfter = ({ fileDetails }) => {

    const theme = useTheme();
    const bull = (
        <Box
            component="span"
            sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
        >
            •
        </Box>
    );

    const getSize = (siz) => {
        if (siz >> 20 > 0) {
            let temp = Math.round(siz / Math.pow(2, 20) * 100) / 100
            return `${temp} Mb`
        } else if (siz >> 10 > 0) {
            let temp = Math.round(siz / Math.pow(2, 10) * 100) / 100
            return `${temp} Kb`
        } else {
            return `${siz} Bytes`
        }
    }

    return (
        <Box sx={{ position: 'relative', height: '13rem', backgroundColor: theme.palette.primary.main, borderRadius: '2rem', margin: '1rem' }}>
            <Card sx={{ position: 'absolute', width: '33rem', display: 'flex', top: '3rem', left: '28rem', justifyContent: 'space-around' }}>
                {/* <CardMedia
                    component="img"
                    height="100"
                    width='200'
                    image="FileImage.jpg"
                    alt="green iguana"
                /> */}
                <CardContent sx={{ display: 'flex', justifyContent: 'space-around' }}>
                    <Typography variant="h7" component="div" sx={{paddingRight: '2rem'}}>
                        {fileDetails.details.file[0].name}
                    </Typography>
                    <Typography component="div" sx={{paddingLeft: '2rem'}}>
                        {getSize(fileDetails.details.file[0].size)}
                    </Typography>
                </CardContent>
                <CardActions>
                    {/* <Button size="small">Learn More</Button> */}
                    <IconButton aria-label="delete" onClick={() => fileDetails.funcS({ file: null, isFile: false })}>
                        <DeleteIcon />
                        <Typography>Delete</Typography>
                    </IconButton>
                </CardActions>
            </Card>
        </Box>
    )
}

export default FileUploadAfter