import { Box, CircularProgress } from "@mui/material";
import React, { useContext } from "react";
import SingleButtonGroup from "../molecules/SingleButtonGroup";
import DishesGridView from "../organisms/DishesGridView";
import { ProductsContext } from "../../Context/ProductsContext";

const LeftContainer = () => {
  const { products, setProducts } = useContext(ProductsContext);
  return (
    <Box
      sx={{
        flex: "0.6",
        padding: "2%",
        backgroundColor: "#F2EEEC",
        overflowY: "scroll",
        height: "80vh",
      }}
    >
      <SingleButtonGroup />
      {products?.length == 0 ? (
        <div style={{height:"90vh",width:"50vw", display: "grid", placeItems: "center" }}>
          <CircularProgress />
        </div>
      ) : (
        <DishesGridView />
      )}
    </Box>
  );
};

export default LeftContainer;
