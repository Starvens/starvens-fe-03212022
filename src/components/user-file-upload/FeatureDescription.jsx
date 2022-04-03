import { Typography, Box, useTheme} from '@mui/material'
import React from 'react'

const FeatureDescription = (props) => {
    const theme = useTheme()
    return (
        <Box sx={{width: '45rem'}}>
            <Typography sx={{color:theme.palette.primary.main, font: 'normal normal bold 22px/43px Montserrat', textAlign:'center'}}>{props.question}</Typography>
            <Typography sx={{color:theme.palette.primary.main, font: 'normal normal bold 18px/30px Montserrat', textAlign: 'center'}}>{props.ans1}</Typography>
            <Typography sx={{color:theme.palette.primary.main, font: 'normal normal bold 18px/30px Montserrat', textAlign: 'center'}}>{props.ans2}</Typography>
        </Box>
    )
}

export default FeatureDescription