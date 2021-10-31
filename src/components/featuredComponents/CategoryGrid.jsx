import { Link } from "react-router-dom";

const CategoryGrid = () => {
  return (
    <div className="container font-roboto">
      <h1 className="text-center text-3xl font-black uppercase text-gray-800 pt-7 pb-20">
        Shop By Category
      </h1>
      <section className="grid grid-cols-3 gap-6">
        <Link
          to="/men"
          className="pt-10 pb-20 px-8 bg-men bg-cover rounded-lg space-y-3  hover:shadow-md"
        >
          <p className="text-xl font-bold">Mens Trend</p>
          <button>Shop Now</button>
        </Link>

        <Link
          to="/women"
          className="pt-10 pb-20 px-8 bg-women bg-cover rounded-lg space-y-3  hover:shadow-lg"
        >
          <p className="text-xl font-bold">Womens Trend</p>
          <button>Shop Now</button>
        </Link>

        <Link
          to="/accessories"
          className=" row-span-2 pt-10 pb-20 px-8 bg-accessory bg-cover rounded-lg space-y-3  hover:shadow-lg"
        >
          <p className="text-xl font-bold">Accessories</p>
          <button>Shop Now</button>
        </Link>

        <Link
          to="/electronics"
          className="col-span-2 pt-10 pb-20 px-8 bg-electronics bg-right bg-cover  rounded-lg space-y-3  hover:shadow-lg"
        >
          <p className="text-xl font-bold">Electricals</p>
          <button>Shop Now</button>
        </Link>
      </section>
    </div>
  );
};

export default CategoryGrid;
