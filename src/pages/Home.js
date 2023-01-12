import React, { useContext, useEffect } from "react";
import { Box } from "@mui/material";
import LeftContainer from "../Components/templates/LeftContainer";
import RightContainer from "../Components/templates/RightContainer";
import { APIRequest } from "../APIRequest/APIRequest";
import app_constants from "../constants/app_constants";
import { ProductsContext } from "../Context/ProductsContext";
import ProductDescription from "../Components/organisms/ProductDescriptionDialog/ProductDescription";
import BackdropWithCircularProgress from "../Components/molecules/BackDropWithCircularProgress";

const Home = () => {
  const { setProducts, product, showLoading } = useContext(ProductsContext);

  useEffect(() => {
    APIRequest.get("getProducts").then((res) => {
      if (res.data?.response === app_constants.SUCCESS) {
        setProducts(res.data.items);
      }
    });
  }, []);

  return (
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        py: 3,
        display: "flex",
      }}
    >
      <LeftContainer />
      <RightContainer />

      <ProductDescription
        Title={product?.engData?.title}
        Description={product?.engData?.description}
        ImageSource={product?.image?.primaryImageID?.format?.small?.url}
      />

      <BackdropWithCircularProgress open={showLoading} />
    </Box>
  );
};

export default Home;
