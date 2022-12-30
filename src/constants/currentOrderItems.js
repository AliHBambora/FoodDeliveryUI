import MeatCrustPizza from "../Assets/Images/MeatCrustPizza.jpg";
import RedSaucePasta from "../Assets/Images/RedSaucePasta.jpg";
import ChocolateCake from "../Assets/Images/ChocolateCake.jpg";

const uuidv4 = () => {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (c) {
    var r = (Math.random() * 16) | 0,
      v = c === "x" ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
};

export const currentOrderItems = [
  {
    id: uuidv4(),
    ImageSource: MeatCrustPizza,
    ItemName: "Chicken Crust Pizza",
    ItemQuantity: "2",
    ItemPrice: "20$",
  },
  {
    id: uuidv4(),
    ImageSource: RedSaucePasta,
    ItemName: "Red Sauce Pasta",
    ItemQuantity: "1",
    ItemPrice: "18$",
  },
  {
    id: uuidv4(),
    ImageSource: ChocolateCake,
    ItemName: "Chocolate Cake",
    ItemQuantity: "3",
    ItemPrice: "15$",
  },
];
