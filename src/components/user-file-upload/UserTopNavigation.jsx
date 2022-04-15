import React, { useState } from 'react'
import { Box, AppBar, Toolbar, IconButton, Typography } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import OutlinedInput from '@mui/material/OutlinedInput';
import SettingsIcon from '@mui/icons-material/Settings';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SearchIcon from '@mui/icons-material/Search';

const UserTopNavigation = () => {
    const [navState, setNavState] = useState({showLeftNav: false});
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton onClick={() => setNavState({showLeftNav: !navState.showLeftNav})} edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
                        <MenuIcon />
                    </IconButton>
                    <img src='/Starvens_Logo.webp' height='70' width='38'></img>
                    <Typography
                        sx={{
                            font: 'normal normal bold 28px/34px Montserrat',
                            marginLeft: "2rem",
                            color: "#F8F8F8",
                            textAlign: "center"
                        }}
                    >
                        StarvensDrive
                    </Typography>
                    <OutlinedInput startAdornment={
                        <SearchIcon />
                    } sx={{
                        font: 'normal normal bold 20px/24px Montserrat', color: '#355E3B66', background: '#F8F8F8', height: '3rem',
                        borderRadius: '1rem',
                        marginLeft: 'auto'
                    }} placeholder="  Search...." >
                        <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
                            <SettingsIcon />
                        </IconButton>
                    </OutlinedInput>
                    <Box sx={{ marginLeft: 'auto' }}>
                        <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
                            <SettingsIcon />
                        </IconButton>
                        <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
                            <AccountCircleIcon />
                        </IconButton>
                    </Box>
                </Toolbar>
            </AppBar>
        </Box>
    )
}

export default UserTopNavigation