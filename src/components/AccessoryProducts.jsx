import { useSelector } from "react-redux";
import { selectAccessoryProducts } from "../features/shop/productSlice";
import ProductDisplay from "./ProductDisplay";

const AccessoryProducts = () => {
  const accessoryProduct = useSelector(selectAccessoryProducts);

  return (
    <div className="py-20">
      <h1 className="text-center font-roboto font-black text-2xl text-gray-800 pb-20">
        Accessories
      </h1>

      <ProductDisplay products={accessoryProduct} />
    </div>
  );
};

export default AccessoryProducts;
