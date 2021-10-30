import { Link } from "react-router-dom";

const ProductDisplay = ({ products }) => {
  return (
    <div className="grid grid-cols-3 gap-8 container font-roboto">
      {products.map((item) => (
        <div
          key={item.id}
          className="p-5 rounded-md flex flex-col items-center"
        >
          <Link to={`/product/${item.id}`}>
            <img src={item.image} className="h-40" alt="item picture" />
          </Link>

          <Link
            className="text-center font-bold pt-10 pb-1 text-gray-700 hover:underline transition"
            to={`/product/${item.id}`}
          >
            {item.title}
          </Link>

          <p className="text-gray-500">$ {item.price}</p>
        </div>
      ))}
    </div>
  );
};

export default ProductDisplay;
