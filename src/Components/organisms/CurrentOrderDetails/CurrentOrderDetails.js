import React from "react";
import style from "./CurrentOrderDetails.module.css";
import Text from "../../atoms/Text";
import LabelImportantIcon from "@mui/icons-material/LabelImportant";

const CurrentOrderDetails = () => {
  return (
    <div className={style.MainContainer}>
      <div className={style.PriceContainer}>
        <Text variant="h6" text="SubTotal" color="black" fontWeight={600} />
        <Text variant="body 1" text="53$" color="black" fontWeight={600} />
      </div>

      <div className={style.PriceContainer}>
        <Text
          variant="h6"
          text="Discount Sales"
          color="black"
          fontWeight={600}
        />
        <Text variant="body 1" text="-5$" color="black" fontWeight={600} />
      </div>

      <div className={style.PriceContainer}>
        <Text
          variant="h6"
          text="Total Sales Tax"
          color="black"
          fontWeight={600}
        />
        <Text variant="body 1" text="$2.25" color="black" fontWeight={600} />
      </div>

      <div style={{ borderTop: "1px dash black", marginTop: "15px" }}></div>

      <div className={style.PriceContainer}>
        <Text variant="h5" text="Total" color="black" />
        <Text variant="h5" text="$50.25" color="#FC5000" />
      </div>

      <div style={{ marginTop: "15px" }}>
        <button className={style.PaymentButton}>
          <div className={style.ButtonContainer}>
            <LabelImportantIcon />
            Continue to payment
          </div>
        </button>
      </div>
    </div>
  );
};

export default CurrentOrderDetails;
