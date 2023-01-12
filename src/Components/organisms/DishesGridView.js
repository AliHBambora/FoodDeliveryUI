import { CircularProgress, Grid } from "@mui/material";
import React, { useContext } from "react";
import DishCard from "../molecules/DishCard/DishCard";
import { dishes } from "../../constants/menuDishes";
import { MenuTypeContext } from "../../Context/MenuTypeContext";
import { ProductsContext } from "../../Context/ProductsContext";

const DishesGridView = () => {
  const { menuType, setMenuType } = useContext(MenuTypeContext);
  const { products, setProducts } = useContext(ProductsContext);

  return products?.length == 0 ? (
    <div style={{ display: "grid", placeItems: "center" }}>
      <CircularProgress />
    </div>
  ) : (
    <Grid
      container
      rowSpacing={2}
      columnSpacing={{ xs: 2, sm: 2, md: 3 }}
      sx={{ marginTop: "3%" }}
    >
      {menuType === "Products"
        ? products?.map((item) => (
            <Grid item xs={4} key={item._id}>
              <DishCard
                id={item._id}
                imageSource={item.image.primaryImageID.format.origin.url}
                dishTitle={item.engData.title}
                dishDescription={item.engData.description}
                dishPrice={item?.dishPrice}
                dishQuantity={item?.dishQuantity}
              />
            </Grid>
          ))
        : dishes[menuType].map((item) => (
            <Grid item xs={4} key={item.id}>
              <DishCard
                id={item.id}
                imageSource={item.imageSource}
                dishTitle={item.dishTitle}
                dishDescription={item.dishDescription}
                dishPrice={item.dishPrice}
                dishQuantity={item.dishQuantity}
              />
            </Grid>
          ))}
    </Grid>
  );
};

export default DishesGridView;
