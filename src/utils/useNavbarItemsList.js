import PizzaProduct from "@/assets/img/PizzaProduct.svg";
import RollProduct from "@/assets/img/RollsProduct.svg";
import OtherProduct from "@/assets/img/OtherProduct.svg";

const useNavbarItemsList = () => {
  const navbarItesmList = [
    {
      path: "/pizzas",
      icon: PizzaProduct,
      text: "Pizzalar",
    },
    {
      path: "/rolls",
      icon: RollProduct,
      text: "Suşilər",
    },
    {
      path: "/others",
      icon: OtherProduct,
      text: "İçkilər",
    },
  ];
  return navbarItesmList;
};

export { useNavbarItemsList };
