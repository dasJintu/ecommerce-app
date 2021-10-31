import { useSelector } from "react-redux";

import FreeShipping from "./featuredComponents/FreeShipping";
import Hero from "./featuredComponents/Hero";
import CategoryGrid from "./featuredComponents/CategoryGrid";
import Newsletter from "./featuredComponents/Newsletter";

function Featured() {
  const productList = useSelector((state) => state.shop.productList);

  return (
    <div className="font-robo">
      <Hero />
      <FreeShipping />
      <CategoryGrid />
      <Newsletter />
    </div>
  );
}
export default Featured;
