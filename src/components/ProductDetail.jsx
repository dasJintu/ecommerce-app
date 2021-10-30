import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
toast.configure();

import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../features/shop/cartSlice";

function ProductDetail() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);

  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setItems(result);
        },

        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, [id]);

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <section className="py-16 grid grid-cols-2 gap-10 container font-roboto">
        <div className="grid place-content-center">
          <img src={items.image} alt="" className="rounded-md h-72" />
        </div>
        <div className="space-y-8">
          <h1 className="text-3xl font-black text-gray-900">{items.title}</h1>
          <p className="text-gray-500 max-w-md">{items.description}</p>
          <p className="text-3xl text-red-600 font-light">$ {items.price}</p>
          <button
            onClick={() => dispatch(addToCart(items))}
            className=" text-white bg-gray-800 px-8 py-2 uppercase text-sm font-bold tracking-widest"
          >
            Add to cart
          </button>
        </div>
      </section>
    );
  }
}
export default ProductDetail;
