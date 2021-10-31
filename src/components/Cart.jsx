import { useSelector, useDispatch } from "react-redux";
// import select from '../features/shop/cartSlice'
import { removeFromCart, selectTotalAmount } from "../features/shop/cartSlice";

const Cart = () => {
  const cartList = useSelector((state) => state.cart.cartList);
  const totalAmount = useSelector(selectTotalAmount);

  const dispatch = useDispatch();

  return (
    <div className="py-20 font-roboto container">
      <h1 className="text-center font-roboto font-black text-2xl text-gray-800 pb-20">
        Shopping Bag
      </h1>
      {!cartList.length && (
        <h1 className="py-28 text-center text-4xl text-gray-300 uppercase font-black">
          cart is empty, add items
        </h1>
      )}
      {cartList.map((item) => (
        <div
          key={item.id}
          className="flex justify-between items-center max-w-2xl py-10 mx-auto"
        >
          <div className="flex gap-10">
            <img src={item.image} className="h-20 w-20" />
            <div className="flex flex-col justify-center">
              <h1 className="font-bold text-gray-800 text-sm">{item.title}</h1>
              <p className="text-red-400 text-sm font-semibold">
                $ {item.price}
              </p>
            </div>
          </div>
          <button
            onClick={() => dispatch(removeFromCart(item.id))}
            className="text-gray-500 "
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
              />
            </svg>
          </button>
        </div>
      ))}
      {cartList.length && (
        <div className="max-w-2xl mx-auto">
          <div className="flex justify-between">
            <h1 className="text-xl font-extrabold text-gray-800 mt-10 mb-8">
              Total Amount
            </h1>
            <h1 className="text-xl font-extrabold mt-10 mb-9">
              $ {totalAmount}
            </h1>
          </div>

          <button className="py-5 text-center w-full text-gray-100 uppercase text-sm rounded-md bg-gray-900">
            Continue to checkout
          </button>
        </div>
      )}
    </div>
  );
};

export default Cart;
