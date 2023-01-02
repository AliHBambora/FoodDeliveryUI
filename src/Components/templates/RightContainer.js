import { Box } from '@mui/material'
import React from 'react'
import CurrentOrderItems from '../organisms/CurrentOrderItems/CurrentOrderItems'
import CurrentOrderDetails from '../organisms/CurrentOrderDetails/CurrentOrderDetails'

const RightContainer = () => {
  return (
    <Box style={{flex:0.4,padding:"2%",background:"#ffffff",display:"flex",flexDirection:"column",overflowY:"scroll",overflowX:"hidden",height:"80vh"}}>
      {/* <div style={{flex:"0.9",overflowX:"hidden"}}> */}
      <CurrentOrderItems />
      <CurrentOrderDetails />
      {/* </div>   */}
    </Box>
  )
}

export default RightContainer