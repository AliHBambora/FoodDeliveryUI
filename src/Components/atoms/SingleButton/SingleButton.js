import React, { useContext } from "react";
import style from "./SingleButton.module.css";
import { MenuTypeContext } from "../../../Context/MenuTypeContext";

const SingleButton = (props) => {
  const { menuType, setMenuType } = useContext(MenuTypeContext);
  return (
    <>
      <button
        key={props.key}
        className={style.ButtonStyle}
        style={
          menuType===props.title
            ? {
                backgroundColor: "#FC5000",
                color: "#ffffff",
                transform: "scale(1.2)",
                transition: "all 0.2s",
                border: "1px solid #ffffff",
              }
            : {}
        }
        onClick={() => {
          setMenuType(props.title);
        }}
      >
        <props.icon />
        {props.title}
      </button>
    </>
  );
};

export default SingleButton;
