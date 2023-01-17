import React from 'react'
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';


const CustomLoader = () => {
  return (
    <Box sx={{ display: 'flex'}}>
      <CircularProgress size={100} />
    </Box>
  )
}

export default CustomLoader