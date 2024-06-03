import { CartItem } from "@/Components/CartItem";
import { ProductLayout } from "@/layouts/ProductLayout";
import { ProductLayoutSkeleton } from "@/layouts/ProductLayout/ui/ProductLayout";
import {
  getOthers,
  getOthersErrors,
  getOthersLoading,
} from "@/redux/others/selectors/othersSelector";
import { fetchNextOthersPage } from "@/redux/others/services/fetchNextOthersPage";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { useDispatch, useSelector } from "react-redux";

const OthersPage = () => {
  const others = useSelector(getOthers);
  const error = useSelector(getOthersErrors);
  const loading = useSelector(getOthersLoading);

  const { ref, inView } = useInView({
    threshold: 1,
  });

  const dispatch = useDispatch();

  useEffect(() => {
    if (!error) {
      dispatch(fetchNextOthersPage());
    }
  }, [dispatch, error, inView]);

  if (error) {
    return <div className="error">{error}</div>;
  }

  const item = others.map((el) => {
    return (
      <CartItem
        id={el.id}
        key={el.id}
        product={el.product}
        img={el.photo}
        title={el.name}
        description={el.description}
        price={el.price}
      />
    );
  });

  return (
    <>
      <ProductLayout header={"İçkilər"} item={item} />
      {loading && <ProductLayoutSkeleton />}

      {!loading && <div ref={ref} />}
    </>
  );
};

export default OthersPage;
