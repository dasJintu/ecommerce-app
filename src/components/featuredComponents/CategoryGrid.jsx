import React from "react";

const CategoryGrid = () => {
  return (
    <div className="container font-roboto">
      <h1 className="text-center text-3xl font-black uppercase text-gray-800 pt-7 pb-20">
        Shop By Category
      </h1>
      <section className="grid grid-cols-3 gap-6">
        <div className="pt-10 pb-20 px-8 bg-gray-200 rounded-lg space-y-3">
          <p className="text-xl font-bold">Mens Trend</p>
          <button>Shop Now</button>
        </div>
        <div className="pt-10 pb-20 px-8 bg-gray-200 rounded-lg space-y-3">
          <p className="text-xl font-bold">Womens Trend</p>
          <button>Shop Now</button>
        </div>
        <div className="pt-10 pb-20 px-8 bg-gray-200 row-span-2 rounded-lg space-y-3">
          <p className="text-xl font-bold">Accessories</p>
          <button>Shop Now</button>
        </div>
        <div className="pt-10 pb-20 px-8 bg-gray-200 col-span-2 rounded-lg space-y-3">
          <p className="text-xl font-bold">Electricals</p>
          <button>Shop Now</button>
        </div>
      </section>
    </div>
  );
};

export default CategoryGrid;
