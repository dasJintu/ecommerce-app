import { useSelector } from "react-redux";

const Cart = () => {
  const cartList = useSelector((state) => state.cart.cartList);
  console.log(cartList);
  return (
    <div className="py-20">
      <h1 className="text-center font-roboto font-black text-2xl text-gray-800 pb-20">
        Shopping Bag
      </h1>
      {!cartList.length && <h1>cart is empty, add items</h1>}
      {cartList.map((item) => (
        <p key={item.id}>{item.title}</p>
      ))}
      <div>
        <h1>Order Detail</h1>
        <div className="w-full flex justify-between items-center">
          <h2>Order Value</h2>
        </div>
      </div>
    </div>
  );
};

export default Cart;
