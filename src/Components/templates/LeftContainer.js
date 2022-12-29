import { Box } from '@mui/material'
import React from 'react'
import SingleButtonGroup from '../molecules/SingleButtonGroup'
import DishesGridView from '../organisms/DishesGridView'

const LeftContainer = () => {
  return (
    <Box sx={{flex:0.6,padding:"2%",backgroundColor:"#F2EEEC"}}>
       <SingleButtonGroup />
       <DishesGridView /> 
    </Box>
  )
}

export default LeftContainer