import CheesePizza from "../Assets/Images/CheesePizza.jpg";
import MeatBallPizza from "../Assets/Images/MeatBallPizza.jpg";
import MeatCrustPizza from "../Assets/Images/MeatCrustPizza.jpg";
import MushroomAndCheesePizza from "../Assets/Images/MushroomAndCheesePizza.jpg";
import TurkeyPizza from "../Assets/Images/TurkeyPizza.jpg";
import CheeseBurstPizza from "../Assets/Images/CheeseBurstPizza.jpg";
import ChocolateChipsCake from "../Assets/Images/ChocolateChipsCake.jpg";
import FruitCake from "../Assets/Images/FruitCake.jpg";
import StrawberryCake from "../Assets/Images/StrawberryCake.jpg";
import ChocolateCake from "../Assets/Images/ChocolateCake.jpg";
import Brownie from "../Assets/Images/Brownie.jpg";
import DarkChocolateCake from "../Assets/Images/DarkChocolateCake.jpg";
import BaconHamBurger from "../Assets/Images/BaconHamBurger.jpg";
import ChickenBurger from "../Assets/Images/ChickenBurger.jpg";
import DoubleMeatBurger from "../Assets/Images/DoubleMeatBurger.jpg";
import MeatWithCheeseBurger from "../Assets/Images/MeatWithCheeseBurger.jpg";
import SpicyItalianBurger from "../Assets/Images/SpicyItalianBurger.jpg";
import BurgerWithFries from "../Assets/Images/BurgerWithFries.jpg";
import BrocolliPasta from "../Assets/Images/BrocolliPasta.jpg";
import CreamyPasta from "../Assets/Images/CreamyPasta.jpg";
import RedSaucePasta from "../Assets/Images/RedSaucePasta.jpg";
import SpicyItalianPasta from "../Assets/Images/SpicyItalianPasta.jpg";
import WhiteCheesePasta from "../Assets/Images/WhiteCheesePasta.jpg";
import WhiteSaucePasta from "../Assets/Images/WhiteCheesePasta.jpg";

const uuidv4 = () => {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (c) {
    var r = (Math.random() * 16) | 0,
      v = c === "x" ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
};

export const dishes = {
  Pizzas: [
    {
      id: uuidv4(),
      dishTitle: "Cheese Pizza",
      dishDescription: "Thin crusted pizza with cheese toppings",
      imageSource: CheesePizza,
      dishPrice: "20 $",
      dishQuantity: "/ 3 Pcs",
    },
    {
      id: uuidv4(),
      dishTitle: "MeatBall Pizza",
      dishDescription: "Pizza with meatballs with cheese and mushroom toppings",
      imageSource: MeatBallPizza,
      dishPrice: "15 $",
      dishQuantity: "/ 2 Pcs",
    },
    {
      id: uuidv4(),
      dishTitle: "Chicken Crust Pizza",
      dishDescription: "Grilled chicken pieces with barbeque sauce",
      imageSource: MeatCrustPizza,
      dishPrice: "25 $",
      dishQuantity: "/ 5 Pcs",
    },
    {
      id: uuidv4(),
      dishTitle: "Mushroom Pizza",
      dishDescription: "Cheese burst pizza with mushroom toppings",
      imageSource: MushroomAndCheesePizza,
      dishPrice: "14 $",
      dishQuantity: "/ 2 Pcs",
    },
    {
      id: uuidv4(),
      dishTitle: "Turkey Pizza",
      dishDescription: "Pizza with fried turkey pieces and chilly flakes",
      imageSource: TurkeyPizza,
      dishPrice: "17 $",
      dishQuantity: "/ 4 Pcs",
    },
    {
      id: uuidv4(),
      dishTitle: "Cheese Burst Pizza",
      dishDescription: "Thick crust with delicious cheese stuffing",
      imageSource: CheeseBurstPizza,
      dishPrice: "10 $",
      dishQuantity: "/ 4 Pcs",
    },
  ],
  Cakes: [
    {
      id: uuidv4(),
      dishTitle: "Chocolate Chips Cake",
      dishDescription: "Cake filled with chocolate chips and cream",
      imageSource: ChocolateChipsCake,
      dishPrice: "20 $",
      dishQuantity: "/ 3 Pcs",
    },
    {
      id: uuidv4(),
      dishTitle: "Fruit Cake",
      dishDescription: "Pieces of fruits mixed with vanilla flavour",
      imageSource: FruitCake,
      dishPrice: "15 $",
      dishQuantity: "/ 2 Pcs",
    },
    {
      id: uuidv4(),
      dishTitle: "Strawberry Cake",
      dishDescription: "Cheese flavoured base mixed with strawberry pieces",
      imageSource: StrawberryCake,
      dishPrice: "12 $",
      dishQuantity: "/ 1 Pcs",
    },
    {
      id: uuidv4(),
      dishTitle: "Chocolate Cake",
      dishDescription: "Original flavoured chocolate with vanilla toppings",
      imageSource: ChocolateCake,
      dishPrice: "14 $",
      dishQuantity: "/ 3 Pcs",
    },
    {
      id: uuidv4(),
      dishTitle: "Brownie",
      dishDescription: "Hot chocolate brownie filled with almonds",
      imageSource: Brownie,
      dishPrice: "14 $",
      dishQuantity: "/ 3 Pcs",
    },
    {
      id: uuidv4(),
      dishTitle: "Dark Chocolate Cake",
      dishDescription: "Cake with original dark chocolate flavour",
      imageSource: DarkChocolateCake,
      dishPrice: "14 $",
      dishQuantity: "/ 3 Pcs",
    },
  ],
  Burgers: [
    {
      id: uuidv4(),
      dishTitle: "Bacon Hamburger",
      dishDescription: "Hamburger filled with delicious cheese and bacon",
      imageSource: BaconHamBurger,
      dishPrice: "22 $",
      dishQuantity: "/ 2 Pcs",
    },
    {
      id: uuidv4(),
      dishTitle: "Burger with fries",
      dishDescription: "Meat burger served with crunchy french fries",
      imageSource: BurgerWithFries,
      dishPrice: "18 $",
      dishQuantity: "/ 3 Pcs",
    },
    {
      id: uuidv4(),
      dishTitle: "Chicken Burger",
      dishDescription: "Burger filled with chicken and cheese",
      imageSource: ChickenBurger,
      dishPrice: "16 $",
      dishQuantity: "/ 2 Pcs",
    },
    {
      id: uuidv4(),
      dishTitle: "Double meat Burger",
      dishDescription: "Burger filled with chicken and cheese",
      imageSource: DoubleMeatBurger,
      dishPrice: "20 $",
      dishQuantity: "/ 2 Pcs",
    },
    {
      id: uuidv4(),
      dishTitle: "Meat with cheese",
      dishDescription: "Burger filled with meat and cheese",
      imageSource: MeatWithCheeseBurger,
      dishPrice: "18 $",
      dishQuantity: "/ 4 Pcs",
    },
    {
      id: uuidv4(),
      dishTitle: "Spicy Italian Burger",
      dishDescription: "Italian styled burger with hot sauce",
      imageSource: SpicyItalianBurger,
      dishPrice: "22 $",
      dishQuantity: "/ 3 Pcs",
    },
  ],
  Pastas: [
    {
      id: uuidv4(),
      dishTitle: "Brocolli Pasta",
      dishDescription: "Pasta served with boiled brocolli and cream",
      imageSource: BrocolliPasta,
      dishPrice: "15 $",
      dishQuantity: "/ 3 Pcs",
    },
    {
      id: uuidv4(),
      dishTitle: "Cream Pasta",
      dishDescription: "Pasta with cream sauce and chilli flakes",
      imageSource: CreamyPasta,
      dishPrice: "19 $",
      dishQuantity: "/ 3 Pcs",
    },
    {
      id: uuidv4(),
      dishTitle: "Red Sauce Pasta",
      dishDescription: "Pasta with hot and spicy red sauce",
      imageSource: RedSaucePasta,
      dishPrice: "21 $",
      dishQuantity: "/ 4 Pcs",
    },
    {
      id: uuidv4(),
      dishTitle: "Spicy Italian Pasta",
      dishDescription: "Pasta with italian sauce and oregano",
      imageSource: SpicyItalianPasta,
      dishPrice: "21 $",
      dishQuantity: "/ 4 Pcs",
    },
    {
      id: uuidv4(),
      dishTitle: "Cheese Pasta",
      dishDescription: "Pasta with white cheese and chilly flakes",
      imageSource: WhiteCheesePasta,
      dishPrice: "14 $",
      dishQuantity: "/ 1 Pcs",
    },
    {
      id: uuidv4(),
      dishTitle: "White sauce Pasta",
      dishDescription: "Pasta with white sauce and chilly flakes",
      imageSource: WhiteSaucePasta,
      dishPrice: "15 $",
      dishQuantity: "/ 1 Pcs",
    },
  ],
};
