import { Box } from '@mui/material'
import React from 'react'
import CurrentOrderItems from '../organisms/CurrentOrderItems/CurrentOrderItems'

const RightContainer = () => {
  return (
    <Box style={{flex:0.4,padding:"2%",background:"#ffffff",display:"flex",flexDirection:"column",overflowY:"scroll",height:"80vh"}}>
      <div style={{flex:"0.9",overflowX:"hidden"}}>
      <CurrentOrderItems />
      </div>  
    </Box>
  )
}

export default RightContainer