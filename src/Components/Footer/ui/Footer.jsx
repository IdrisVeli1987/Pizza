import { Icon } from "@/ui/Icon";
import cls from "./Footer.module.scss";
import PizzaIcon from "@/assets/img/logoPizza.svg?react";

const Footer = () => {
  return (
    <footer className={cls.footer}>
      <div className={cls.container}>
        <div className={cls.content}>
          <div className={cls.logo}>
            <Icon Svg={PizzaIcon} />
            <p>JET-PIZZA pizza</p>
          </div>
          <p>&copy; Copyright 2024 - JET-PIZZA </p>
        </div>
      </div>
    </footer>
  );
};

export { Footer };
