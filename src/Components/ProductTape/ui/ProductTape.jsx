import { CartItem } from "@/Components/CartItem";
import cls from "./ProductTape.module.scss";
import { productsName } from "@/const/const";

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
        return <CartItem key={el.id} {...props} ingredients={el.ingredients} />;
      case productsName.ROLLS:
        return <CartItem key={el.id} {...props} ingredients={el.ingredients} />;
      case productsName.OTHERS:
        return <CartItem key={el.id} {...props} description={el.description} />;

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
