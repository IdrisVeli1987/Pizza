import { getProductItem } from "@/redux/productItem/selectors/productItemSelectors";
import { useSelector } from "react-redux";

export const useModalItemParams = () => {
  const product = useSelector(getProductItem);

  return {
    id: product.product,
    img: product.photo,
    title: product.name,
  };
};
