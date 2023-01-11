import React, { useContext, useEffect } from "react";
import { Box } from "@mui/material";
import LeftContainer from "../Components/templates/LeftContainer";
import RightContainer from "../Components/templates/RightContainer";
import { APIRequest } from "../APIRequest/APIRequest";
import app_constants from "../constants/app_constants";
import { ProductsContext } from "../Context/ProductsContext";

const Home = () => {
  const {products, setProducts} = useContext(ProductsContext);
  useEffect(()=>{
    APIRequest.get("").then((res)=>{
      console.log(res);
      setProducts(res.data.items);
    })
  },[]);
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
