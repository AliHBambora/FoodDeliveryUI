import React from "react";
import SingleButton from "../atoms/SingleButton/SingleButton";
import CoffeeIcon from '@mui/icons-material/Coffee';
import BakeryDiningIcon from '@mui/icons-material/BakeryDining';
import LocalPizzaIcon from '@mui/icons-material/LocalPizza';
import IcecreamIcon from '@mui/icons-material/Icecream';

const SingleButtonGroup = () => {
  return (
    <div
      style={{
        display: "flex",
        alignItem: "center",
        justifyContent: "space-evenly",
      }}
    >
      <SingleButton icon={CoffeeIcon} title="Signature"/>
      <SingleButton icon={BakeryDiningIcon} title="Croissant"/>
      <SingleButton icon={LocalPizzaIcon} title="Pizza"/>
      <SingleButton icon={IcecreamIcon} title="Ice Creams"/>
    </div>
  );
};

export default SingleButtonGroup;
