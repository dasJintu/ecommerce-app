import { useSelector } from "react-redux";
import { selectMensProducts } from "../features/shop/productSlice";
import ProductDisplay from "./ProductDisplay";

const MenProducts = () => {
  const mensProduct = useSelector(selectMensProducts);

  return (
    <div className="py-20">
      <h1 className="text-center font-roboto font-black text-2xl text-gray-800 pb-20">
        Men's Products
      </h1>

      <ProductDisplay products={mensProduct} />
    </div>
  );
};

export default MenProducts;
