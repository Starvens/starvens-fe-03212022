import { Box, Typography } from '@mui/material'
import React from 'react'

const FourthPage = () => {
    return (
        <Box sx={{ height: '100vh', display: 'grid', gridTemplateRows: '3fr 1fr',marginTop: '2rem' }}>
            <Box sx={{ display: 'grid', gridTemplateColumns: '3fr 2fr' }}>
                <Box>
                    <Typography
                        sx={{
                            fontWeight: 'bold',
                            color: "#355E3B",
                            marginLeft: '2rem',
                            fontSize: "44px",
                            fontFamily: "Montserrat",
                        }}
                    >
                        Mobile version will be releasing soon convert and organize your files from anywhere
                    </Typography>
                </Box>
                <Box></Box>
            </Box>
            <Box sx={{background: '#355E3B 0% 0% no-repeat padding-box;'}}>

            </Box>
        </Box>
    )
}

export default FourthPage