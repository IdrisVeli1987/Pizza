import cls from "./Header.module.scss";
import PizzaIcon from "@/assets/img/logoPizza.svg?react";
import ToggleIcon from "@/assets/img/toggleTheme.svg?react";
import CartIcon from "@/assets/img/cart.svg?react";
import { Button } from "@/ui/Button";

const Header = () => {
  return (
    <header className={cls.header}>
      <div className={cls.container}>
        <div className={cls.content}>
          <div className={cls.logo}>
            <PizzaIcon />

            <p>JET-PIZZA</p>
          </div>
          <div className={cls.buttons}>
            <ToggleIcon />
            <CartIcon />

            <Button>Hello</Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export { Header };
