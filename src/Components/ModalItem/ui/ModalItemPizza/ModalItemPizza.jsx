import { productsName } from "@/const/const";
import { ModalItemLayout } from "@/layouts/ModalItemLayout";
import {
  getProductItemPizzaSize,
  getProductItemPizzaType,
} from "@/redux/productItem/selectors/productItemSelectors";
import { productActions } from "@/redux/productItem/slice/productItemSlice";
import { Button } from "@/ui/Button";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import cls from "./../ModalItem/ModalItem.module.scss";
import { useModalItemParams } from "../../helper/useModalItemParams";

const ModalItemPizza = (props) => {
  const { isOpen, product, price } = props;

  const newParams = useModalItemParams();


  const dispatch = useDispatch();

  const sizePizza = useSelector(getProductItemPizzaSize);
  const typePizza = useSelector(getProductItemPizzaType);

  useEffect(() => {
    if (isOpen) {
      dispatch(productActions.clearProduct())
      if (productsName.PIZZAS === product.product) {
        dispatch(productActions.setSize(product.sizes[0]));
        dispatch(productActions.setType(product.doughs[0]));
      }
    }
  }, [dispatch, isOpen, product]);

  const handleClickSize = (size) => {
    dispatch(productActions.setSize(size));
  };

  useEffect(() => {
    if (
      productsName.PIZZAS === product.product &&
      isOpen &&
      sizePizza &&
      typePizza
    ) {
      dispatch(productActions.setPrice(sizePizza.price + typePizza.price));
    }
  }, [dispatch, isOpen, product, sizePizza, typePizza]);

  const handleClickType = (size) => {
    dispatch(productActions.setType(size));
  };

  const options = (
    <div className={cls.options}>
      <div className={cls.block}>
        <p>Xəmirin növü</p>

        <div className={cls.item}>
          {product.doughs.map((type, i) => {
            return (
              <Button
                border
                variant={"clear"}
                key={i}
                active={typePizza === type}
                onClick={() => handleClickType(type)}
              >
                {type.name}
              </Button>
            );
          })}
        </div>
      </div>

      <div className={cls.block}>
        <p>Ölçü</p>

        <div className={cls.item}>
          {product.sizes.map((size, i) => {
            return (
              <Button
                border
                variant={"clear"}
                key={i}
                active={sizePizza === size}
                onClick={() => handleClickSize(size)}
              >
                {size.name}
              </Button>
            );
          })}
        </div>
      </div>
    </div>
  );   

  return <ModalItemLayout price={price} params={newParams} options={options} />;
};

export { ModalItemPizza };
