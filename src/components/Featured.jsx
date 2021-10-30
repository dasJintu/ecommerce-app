import { Link } from "react-router-dom";
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
      {/* <ul>
        {productList.map((item) => (
          <li key={item.id}>
            <Link to={`/product/${item.id}`}>
              <img src={item.image} className="w-20 rounded-lg" />
              <p>{item.title}</p>
              <p>{item.category}</p>
            </Link>
          </li>
        ))}
      </ul> */}
      <Newsletter />
    </div>
  );
}
export default Featured;
