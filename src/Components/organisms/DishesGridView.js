import { Grid } from "@mui/material";
import React, { useContext } from "react";
import DishCard from "../molecules/DishCard";
import { dishes } from "../../constants/menuDishes";
import { MenuTypeContext } from "../../Context/MenuTypeContext";

const DishesGridView = () => {
  const {menuType, setMenuType} = useContext(MenuTypeContext);
  return (
    <Grid
      container
      rowSpacing={2}
      columnSpacing={{ xs: 2, sm: 2, md: 3 }}
      sx={{ marginTop: "3%" }}
    >
      {dishes[menuType].map((item) => (
        <Grid item xs={4} key={item.id}>
          <DishCard
            imageSource={item.imageSource}
            dishTitle={item.dishTitle}
            dishDescription={item.dishDescription}
            dishPrice={item.dishPrice}
            dishQuantity={item.dishQuantity}
          />
        </Grid>
      ))}

      {/* <Grid item xs={4}>
        <DishCard
          imageSource={MeatBallPizza}
          dishTitle="MeatBallPizza"
          dishDescription={"MeatBallPizza with thin crust"}
        />
      </Grid>
      <Grid item xs={4}>
        <DishCard
          imageSource={MeatCrustPizza}
          dishTitle="MeatCrustPizza"
          dishDescription={"MeatCrustPizza with thin crust"}
        />
      </Grid>
      <Grid item xs={4}>
        <DishCard
          imageSource={MushroomAndCheesePizza}
          dishTitle="MushroomAndCheesePizza"
          dishDescription={"MushroomAndCheesePizza with thin crust"}
        />
      </Grid> */}
    </Grid>
  );
};

export default DishesGridView;
