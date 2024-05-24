/* eslint-disable no-case-declarations */
import { CartItem } from "@/Components/CartItem";
import cls from "./ProductTape.module.scss";
import { productsName } from "@/const/const";
import { calcMinPricePizzas } from "@/utils/calcMinPrice";

const ProductTape = (props) => {
  const { title, products = [], isLoading = false, error = undefined } = props;

  if (isLoading) {
    return <div>loading...</div>;
  }

  const items = products.map((el) => {
    const props = {
      // key: el.id,
      id: el.id,
      img: el.photo,
      title: el.name,
      product: el.product,
    };

    switch (el.product) {
      case productsName.PIZZAS:
        const minPricePizzas = calcMinPricePizzas(el.sizes, el.doughs);
        return (
          <CartItem
            key={el.id}
            {...props}
            ingredients={el.ingredients}
            price={minPricePizzas}
          />
        );
      case productsName.ROLLS:
        const prices = el.pieces.map((el) => el.price);
        const minPriceRolls = Math.min(...prices);

        return (
          <CartItem
            key={el.id}
            {...props}
            ingredients={el.ingredients}
            price={minPriceRolls}
          />
        );
      case productsName.OTHERS:
        return (
          <CartItem
            key={el.id}
            {...props}
            description={el.description}
            price={el.price}
          />
        );

      default:
        null;
    }
  });

  return (
    <section className={cls.products}>
      <h2 className={cls.title}>{title}</h2>

      {error && (
        <div className="error">
          Məhsullar tapılamadı. Xahiş edirik bir az sonra cəhd edin
        </div>
      )}

      <div className={cls.card}>{items}</div>
    </section>
  );
};

export { ProductTape };
