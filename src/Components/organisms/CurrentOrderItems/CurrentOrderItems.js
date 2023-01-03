import React from "react";
import CurrentOrderTop from "../../molecules/CurrentOrderTop";
import style from "./CurrentOrderItems.module.css";
import CurrentOrderItemCard from "../../molecules/CurrentOrderItemCard/CurrentOrderItemCard";
import ChocolateChipsCake from "../../../Assets/Images/ChocolateChipsCake.jpg";
import { currentOrderItems } from "../../../constants/currentOrderItems";

const CurrentOrderItems = () => {
  return (
    <div className={style.MainContainer}>
      <CurrentOrderTop />

      {currentOrderItems.map((item) => (
        <CurrentOrderItemCard
          ImageSource={item.ImageSource}
          ItemName={item.ItemName}
          ItemQuantity={item.ItemQuantity}
          ItemPrice={item.ItemPrice}
          key={item.id}
        />
      ))}
    </div>
  );
};

export default CurrentOrderItems;
