import React from "react";
import SingleButton from "../atoms/SingleButton/SingleButton";
import CoffeeIcon from '@mui/icons-material/Coffee';
import CakeIcon from '@mui/icons-material/Cake';
import LocalPizzaIcon from '@mui/icons-material/LocalPizza';
import IcecreamIcon from '@mui/icons-material/Icecream';
import LunchDiningIcon from '@mui/icons-material/LunchDining';
import RamenDiningIcon from '@mui/icons-material/RamenDining';

const SingleButtonGroup = () => {
  return (
    <div
      style={{
        display: "flex",
        alignItem: "center",
        justifyContent: "space-between",
      }}
    >
      <SingleButton icon={LunchDiningIcon} title="Burgers" key="a12"/>
      <SingleButton icon={CakeIcon} title="Cakes" key="b56"/>
      <SingleButton icon={LocalPizzaIcon} title="Pizzas" key="c96"/>
      <SingleButton icon={RamenDiningIcon} title="Pastas" key="dffh"/>
    </div>
  );
};

export default SingleButtonGroup;
