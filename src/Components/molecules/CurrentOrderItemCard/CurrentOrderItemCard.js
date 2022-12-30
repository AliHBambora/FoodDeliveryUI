import React from "react";
import Image from "../../atoms/Image";
import AddBoxIcon from "@mui/icons-material/AddBox";
import IndeterminateCheckBoxIcon from "@mui/icons-material/IndeterminateCheckBox";
import style from "./CurrentOrderItemCard.module.css";
import Text from "../../atoms/Text";
import { IconButton } from "@mui/material";

const CurrentOrderItemCard = ({
  ImageSource,
  ItemName,
  ItemQuantity,
  ItemPrice,
}) => {
  return (
    <div className={style.MainContainer}>
      <div className={style.ImageContainer}>
        <Image
          height="100%"
          width="100%"
          source={ImageSource}
          ObjectFit="cover"
          borderRadius={15}
        />
      </div>
      <div className={style.DescriptionContainer}>
        <Text variant="h6" text={ItemName} color="black" />
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          <div>
            <Text variant="h6" text={ItemPrice} color="#FC5000" />
          </div>
          <div style={{ display: "flex", alignItems: "center" }}>
            <IconButton sx={{ color: "#FC5000" }}>
              <AddBoxIcon />
            </IconButton>
            <Text variant="h6" text={ItemQuantity} color="black" />
            <IconButton sx={{ color: "#FC5000" }}>
              <IndeterminateCheckBoxIcon />
            </IconButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurrentOrderItemCard;
