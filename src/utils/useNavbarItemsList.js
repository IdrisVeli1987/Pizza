import PizzaProduct from "@/assets/img/PizzaProduct.svg?react";
import RollProduct from "@/assets/img/RollsProduct.svg?react";
import OtherProduct from "@/assets/img/OtherProduct.svg?react";

const useNavbarItemsList = () => {
  const navbarItemsList = [
    {
      path: "/pizzas",
      Icon: PizzaProduct,
      text: "Pizzalar",
    },
    {
      path: "/rolls",
      Icon: RollProduct,
      text: "Suşilər",
    },
    {
      path: "/others",
      Icon: OtherProduct,
      text: "İçkilər",
    },
  ];
  return navbarItemsList;
};

export { useNavbarItemsList };
