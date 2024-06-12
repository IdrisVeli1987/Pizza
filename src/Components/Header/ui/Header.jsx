import CartIcon from "@/assets/img/cart.svg?react";
import PizzaIcon from "@/assets/img/logoPizza.svg?react";
import ToggleIcon from "@/assets/img/toggleTheme.svg?react";
import { useTheme } from "@/hooks/useTheme";
import { Button } from "@/ui/Button";
import { Icon } from "@/ui/Icon";
import { Modal } from "@/ui/Modal";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import cls from "./Header.module.scss";
import { BasketItem } from "@/Components/BasketItem";
import { useSelector } from "react-redux";
import { getBasketTotalPrice } from "@/redux/basket/selectors/basketSelectors";
import { LayoutContext } from "@/providers/LayoutContextProvier";

const Header = () => {
  const navigate = useNavigate();

  const { popup } = useContext(LayoutContext);

  const totalPrice = useSelector(getBasketTotalPrice);

  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => setIsOpen((prev) => !prev);

  // const { isOpen, setIsOpen, handleClick } = useContext(LayoutContext);

  const onClick = () => {
    navigate("/");
  };

  const { toggleTheme } = useTheme();

  const toggleThemeHandler = () => {
    toggleTheme();
  };
  return (
    <>
      <header className={cls.header}>
        <div className={cls.container}>
          <div className={cls.content}>
            <div className={cls.logo}>
              <Icon Svg={PizzaIcon} clickable onClick={onClick} />

              <p>JET-PIZZA</p>
            </div>
            <div className={cls.buttons}>
              <Icon Svg={ToggleIcon} clickable onClick={toggleThemeHandler} />

              <Button onClick={handleClick} border className={cls.button}>
                <Icon Svg={CartIcon} />

                <span>{totalPrice} AZN</span>
              </Button>
            </div>
          </div>
          {popup && <p className={cls.popup}>Məhsul səbətə əlavə edildi</p>}
        </div>
      </header>

      <Modal
        variant={"rightModal"}
        width={420}
        scroll={"auto"}
        height={"100%"}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
      >
        <div className={cls.body}>
          <BasketItem />

          <div className={cls.footer}>
            <div className={cls.totalPrice}>
              <span>Cəm: {totalPrice} AZN</span>
            </div>

            <Button>Sifariş et</Button>
          </div>
        </div>
      </Modal>
    </>
  );
};

export { Header };
