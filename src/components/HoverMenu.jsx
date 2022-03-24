import React from 'react'
import {Box} from '@mui/material'

const HoverMenu = (props) => {
    const items = props.options.map(x => <div>{{x}}</div>)
  return (
      <Box>
         {{items}} 
      </Box>
  )
}

export default HoverMenu