import { CartItem } from "@/Components/CartItem";
import { ProductLayout } from "@/layouts/ProductLayout";
import { ProductLayoutSkeleton } from "@/layouts/ProductLayout/ui/ProductLayout";
import { LayoutContext } from "@/providers/LayoutContextProvier";
import {
  getPizzas,
  getPizzasErrors,
  getPizzasLoading,
} from "@/redux/pizzas/selectors/pizzasSelectors";
import { fetchNextPizzasPage } from "@/redux/pizzas/services/fetchNextPizzasPage";
import { calcMinPricePizzas } from "@/utils/calcMinPrice";
import { useContext, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { useDispatch, useSelector } from "react-redux";

const PizzasPage = () => {
  const pizzas = useSelector(getPizzas);
  const error = useSelector(getPizzasErrors);
  const loading = useSelector(getPizzasLoading);

  const { handleClick } = useContext(LayoutContext);

  const { ref, inView } = useInView({
    /* Optional options */
    threshold: 1,
  });

  const dispatch = useDispatch();

  useEffect(() => {
    if (!error) {
      dispatch(fetchNextPizzasPage());
    }
  }, [dispatch, error, inView]);

  if (error) {
    return <div className="error">{error}</div>;
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
        handleClick={handleClick}
      />
    );
  });

  return (
    <>
      <ProductLayout header={"Pizzalar"} item={item} />
      {loading && <ProductLayoutSkeleton />}
      {!loading && <div ref={ref} />}
    </>
  );
};

export default PizzasPage;
