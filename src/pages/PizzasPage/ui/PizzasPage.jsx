import { CartItem } from "@/Components/CartItem";
import { ProductLayout } from "@/layouts/ProductLayout";
import {
  getPizzas,
  getPizzasErrors,
  getPizzasLoading,
} from "@/redux/pizzas/selectors/pizzasSelectors";
import { fetchPizzas } from "@/redux/pizzas/services/fetchPizzas";
import { calcMinPricePizzas } from "@/utils/calcMinPrice";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const PizzasPage = () => {
  const pizzas = useSelector(getPizzas);
  const error = useSelector(getPizzasErrors);
  const loading = useSelector(getPizzasLoading);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPizzas());
  }, [dispatch]);

  if (error) {
    return <div>{error}</div>;
  }

  const item = pizzas.map((el) => {
    const minPrice = calcMinPricePizzas(el.sizes, el.doughs);
    return (
      <CartItem
        id={el.id}
        key={el.id}
        product={el.product}
        img={el.photo}
        title={el.name}
        ingredients={el.ingredients}
        price={minPrice}
      />
    );
  });

  return <ProductLayout header={"Pizzalar"} item={item} />;
};

export default PizzasPage;
