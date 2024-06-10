import { productsName } from "@/const/const";
import { getBasketItems } from "@/redux/basket/selectors/basketSelectors";
import { useDispatch, useSelector } from "react-redux";
import cls from "./BasketItem.module.scss";
import { Button } from "@/ui/Button";
import { basketActions } from "@/redux/basket/slice/basketSlice";
// import { Home01Icon } from "@hugeicons/react-pro";
import basketImg from "@/assets/img/basket.svg";

const BasketItem = () => {
  const basket = useSelector(getBasketItems);

  const dispatch = useDispatch();

  const uniqueKey = (product) => {
    switch (product.product) {
      case productsName.PIZZAS:
        return `${product.product} - ${product.id}-${product.size}-${product.type}-${product.price}`;
      case productsName.ROLLS:
        return `${product.product} - ${product.id}-${product.quantity}-${product.type}-${product.price}`;
      case productsName.OTHERS:
        return `${product.product} - ${product.id}-${product.type}-${product.price}`;

      default:
        return null;
    }
  };

  const description = (product) => {
    switch (product.product) {
      case productsName.PIZZAS:
        return (
          <span>
            {product.type} xəmir, {product.size}
          </span>
        );
      case productsName.ROLLS:
        return <span>Cəmi - {product.quantity}</span>;
      case productsName.OTHERS:
        return null;
      default:
        return null;
    }
  };

  const item = basket.map((el) => (
    <div key={uniqueKey(el)} className={cls.body}>
      <img className={cls.image} src={el.img} alt="" />

      <div className={cls.content}>
        <div className={cls.main}>
          <p>{el.title}</p>
          {description(el)}
        </div>

        <div className={cls.footer}>
          <div className={cls.count}>
            <Button
              onClick={() => dispatch(basketActions.addItem(el))}
              variant={"clear"}
              className={cls.button}
            >
              +
            </Button>
            <span>{el.count}</span>
            <Button
              onClick={() => dispatch(basketActions.minuseItem(el))}
              variant={"clear"}
              className={cls.button}
            >
              -
            </Button>
          </div>

          <span>{el.price * el.count} AZN</span>
        </div>
      </div>
    </div>
  ));

  return (
    <>
      <div className={cls.basketContent}>
        <h2>Sizin sifariş</h2>

        {item}
      </div>
      
      {!basket.length && (
        <div className={cls.empty}>
          <h3>Sizin səbətiniz boşdur</h3>
          <img className={cls.basketIcon} src={basketImg} alt="" />
        </div>
      )}
    </>
  );
};

export { BasketItem };
