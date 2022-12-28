import { Typography } from '@mui/material'
import React from 'react'

const Text = (props) => {
  return (
    <Typography variant={props.variant} sx={{color:props.color}}>
        {props.text}
    </Typography>
  )
}

export default Text