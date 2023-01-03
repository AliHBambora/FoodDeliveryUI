import React from "react";
import Image from "../../atoms/Image";
import Text from "../../atoms/Text";
import style from "./DishCard.module.css";

const DishCard = ({
  id,
  imageSource,
  dishTitle,
  dishDescription,
  dishPrice,
  dishQuantity
}) => {
  return (
    <div className={style.Container}>
      <div className={style.ImageContainer}>
        <Image
          source={imageSource}
          height="100%"
          width="100%"
          ObjectFit="contain"
          borderRadius={10}
          key={id}
          LoaderWidth={200}
          LoaderHeight={200}
        />
      </div>
      <div className={style.Title}>
        <Text variant="h6" text={dishTitle} color="black" />
      </div>
      <div className={style.Subtitle}>
        <Text variant="subtitle2" text={dishDescription} color="#454545" />
      </div>
      <div className={style.PriceContainer}>
        <Text variant="h6" text={dishPrice} color="#FC5000" />
        <Text variant="body 1" text={dishQuantity} color="#454545" />
      </div>
    </div>
  );
};

export default DishCard;
