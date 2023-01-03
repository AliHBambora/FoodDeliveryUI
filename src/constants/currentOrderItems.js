import MeatCrustPizza from "../Assets/Images/MeatCrustPizza.jpg";
import RedSaucePasta from "../Assets/Images/RedSaucePasta.jpg";
import ChocolateCake from "../Assets/Images/ChocolateCake.jpg";
import { uuidv4 } from "../uuidGenerator/uuidv4";

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
