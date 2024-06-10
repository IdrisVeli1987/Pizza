import { Button } from "@/ui/Button";
import cls from "./ModalItemLayout.module.scss";
import { useDispatch } from "react-redux";
import { basketActions } from "@/redux/basket/slice/basketSlice";
import { useContext } from "react";
import { LayoutContext } from "@/providers/LayoutContextProvier";

const ModalItemLayout = (props) => {
  const { params, price, options } = props;

  const { setIsOpen } = useContext(LayoutContext);

  const dispatch = useDispatch();

  const onClick = () => {
    dispatch(basketActions.addItem({ ...params, price: price }));
    setIsOpen(false);
  };

  return (
    <div className={cls.body}>
      <img className={cls.img} src={params.img} alt="" />

      <div className={cls.content}>
        <h3 className={cls.title}>{params.title}</h3>

        {options && options}

        <div className={cls.footer}>
          <span className={cls.price}>Cəmi: {price} AZN</span>

          <Button onClick={onClick} border className={cls.button}>
            Əlavə et
          </Button>
        </div>
      </div>
    </div>
  );
};

export { ModalItemLayout };
