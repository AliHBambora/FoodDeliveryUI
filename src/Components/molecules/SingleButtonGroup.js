import React from "react";
import SingleButton from "../atoms/SingleButton/SingleButton";
import CakeIcon from '@mui/icons-material/Cake';
import LocalPizzaIcon from '@mui/icons-material/LocalPizza';
import LunchDiningIcon from '@mui/icons-material/LunchDining';
import RamenDiningIcon from '@mui/icons-material/RamenDining';
import AppsIcon from '@mui/icons-material/Apps';
import { uuidv4 } from "../../uuidGenerator/uuidv4";

const SingleButtonGroup = () => {
  const menuOptions = [
    {
      icon:AppsIcon,
      title:"Products",
      id:uuidv4()
    },
    {
      icon:LunchDiningIcon,
      title:"Burgers",
      id:uuidv4()
    },
    {
      icon:CakeIcon,
      title:"Cakes",
      id:uuidv4()
    },
    {
      icon:LocalPizzaIcon,
      title:"Pizzas",
      id:uuidv4()
    },
    {
      icon:RamenDiningIcon,
      title:"Pastas",
      id:uuidv4()
    },
  ]

  return (
    <div
      style={{
        display: "flex",
        alignItem: "center",
        justifyContent: "space-between",
        marginTop:"15px"
      }}
    >
      {menuOptions.map((item)=>(
        <SingleButton icon={item.icon} title={item.title} key={item.id}/>
      ))}
    </div>
  );
};

export default SingleButtonGroup;
