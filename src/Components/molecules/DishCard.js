import React from "react";
import Image from "../atoms/Image";
import Text from "../atoms/Text";

const DishCard = ({
  imageSource,
  dishTitle,
  dishDescription,
  dishPrice,
  dishQuantity,
}) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        padding: "10px",
        boxShadow: "0 3px 10px rgb(0 0 0 / 0.2)",
        borderRadius: "10px",
        backgroundColor: "#ffffff",
      }}
    >
      <div style={{ borderRadius: "10px" }}>
        <Image
          source={imageSource}
          height={200}
          width={200}
          ObjectFit="contain"
          borderRadius={10}
        />
      </div>
      <div style={{ marginTop: "10px" }}>
        <Text variant="h6" text={dishTitle} color="black" />
      </div>
      <div style={{ marginTop: "5px" }}>
        <Text variant="subtitle2" text={dishDescription} color="lightgrey" />
      </div>
      <div style={{ display: "flex", marginTop: "5px", alignItems: "center" }}>
        <Text variant="h6" text={dishPrice} color="#FC5000" />
        <Text variant="body 1" text={dishQuantity} color="lightgrey" />
      </div>
    </div>
  );
};

export default DishCard;
