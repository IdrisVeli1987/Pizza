import { ProductTape } from "@/Components/ProductTape";
import { useGetOthers, useGetPizzas, useGetRolls } from "@/api/rtkApi";
import { Modal } from "@/ui/Modal";

const MainPage = () => {
  const {
    data: productsPizzas,
    isLoading: pizzasLoading,
    error: pizzasError,
  } = useGetPizzas();

  const {
    data: productsRolls,
    isLoading: rollsLoading,
    error: rollsError,
  } = useGetRolls();

  const {
    data: productsOthers,
    isLoading: OthersLoading,
    error: OthersError,
  } = useGetOthers();

  return (
    <>
      <Modal isOpen={true} width={500} height={200}>Hello</Modal>
      <ProductTape
        title="Pizzalar"
        products={productsPizzas}
        isLoading={pizzasLoading}
        error={pizzasError}
      />
      <ProductTape
        title="Suşilər"
        products={productsRolls}
        isLoading={rollsLoading}
        error={rollsError}
      />
      <ProductTape
        title="İçkilər"
        products={productsOthers}
        isLoading={OthersLoading}
        error={OthersError}
      />
    </>
  );
};

export default MainPage;
