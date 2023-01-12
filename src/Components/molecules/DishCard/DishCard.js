import React, { useContext } from "react";
import Image from "../../atoms/Image";
import Text from "../../atoms/Text";
import style from "./DishCard.module.css";
import { MenuTypeContext } from "../../../Context/MenuTypeContext";
import { APIRequest } from "../../../APIRequest/APIRequest";
import axios from "axios";
import { ProductsContext } from "../../../Context/ProductsContext";
import app_constants from "../../../constants/app_constants";

const DishCard = ({
  id,
  imageSource,
  dishTitle,
  dishDescription,
  dishPrice,
  dishQuantity,
}) => {
  const { menuType } = useContext(MenuTypeContext);
  const {setProduct,setOpenProductDescDialog,showLoading,setShowLoading} = useContext(ProductsContext);

  const getProductDescription = async ()=>{
    setShowLoading(true);
    APIRequest.get("getProduct/"+id).then((res)=>{
      console.log(res.data);
      setShowLoading(false);
      if(res.data?.response===app_constants.SUCCESS){
        setProduct(res.data.data);
        setOpenProductDescDialog(true);
      }
    }).catch((res)=>console.log(res));
  }

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
        <Text variant="subtitle2" text={dishDescription} color="#454545" short />
      </div>
      <div className={style.PriceContainer}>
        <Text variant="h6" text={dishPrice} color="#FC5000" />
        <Text variant="body 1" text={dishQuantity} color="#454545" />
      </div>
      {menuType === "Products" ? <div className={style.ButtonContainer}><button onClick={()=>getProductDescription()} className={style.DescriptionButton}>View More</button></div> : ""}
    </div>
  );
};

export default DishCard;
