import { Box } from '@mui/system'
import React from 'react'
import { useTheme } from '@mui/material/styles';
import Divider from '@mui/material/Divider';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import ImageIcon from '@mui/icons-material/Image';
import WorkIcon from '@mui/icons-material/Work';
import BeachAccessIcon from '@mui/icons-material/BeachAccess';

const FileUploadBox = (props) => {
    const theme = useTheme();
    return (
        // <Box>
        //     <Box sx={{ height: '13rem', backgroundColor: theme.palette.primary.main, borderRadius: '2rem', margin: '1rem' }}></Box>
        //     <Box sx={{ height: '18rem', width: '18rem', backgroundColor: '#F8F8F8' }}>
        //         <Box>firsts</Box>
        //         <Divider></Divider>
        //         <Box>second</Box>
        //         <Divider></Divider>
        //         <Box>third</Box>
        //         <Divider></Divider>
        //         <Box>fourth</Box>
        //         <Divider></Divider>
        //         <Box>fifth</Box>
        //     </Box>
        // </Box>
        <Box>
            <Box sx={{ height: '13rem', backgroundColor: theme.palette.primary.main, borderRadius: '2rem', margin: '1rem' }}></Box>
            <List
                sx={{
                    width: '100%',
                    maxWidth: 360,
                    bgcolor: 'background.paper',
                }}
            >
                <ListItem>
                    <ListItemText primary="Photos" secondary="Jan 9, 2014" />
                </ListItem>
                <Divider />
                <ListItem>
                    <ListItemText primary="Photos" secondary="Jan 9, 2014" />
                </ListItem>
                <Divider />
                <ListItem>
                    <ListItemText primary="Photos" secondary="Jan 9, 2014" />
                </ListItem>
                <Divider />
                <ListItem>
                    <ListItemText primary="Photos" secondary="Jan 9, 2014" />
                </ListItem>
            </List>
        </Box>

    )
}

export default FileUploadBox