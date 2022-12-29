import React from "react";
import SingleButtonGroup from "../Components/molecules/SingleButtonGroup";
import { Box } from "@mui/material";
import LeftContainer from "../Components/templates/LeftContainer";
import RightContainer from "../Components/templates/RightContainer";

const Home = () => {
  return (
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        py:3,
        display:"flex"
      }}
    >
      <LeftContainer />
      <RightContainer />  
    </Box>
  );
};

export default Home;
