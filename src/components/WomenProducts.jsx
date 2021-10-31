import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectWomensProducts } from "../features/shop/productSlice";
import ProductDisplay from "./ProductDisplay";

const WomenProducts = () => {
  const womensProduct = useSelector(selectWomensProducts);
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div>
      <div className="py-20">
        <h1 className="text-center font-roboto font-black text-2xl text-gray-800 pb-20">
          Women's Products
        </h1>

        <ProductDisplay products={womensProduct} />
      </div>
    </div>
  );
};

export default WomenProducts;
