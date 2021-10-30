import { useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  const cartList = useSelector((state) => state.cart.cartList);
  return (
    <nav className="shadow-md">
      <div className="container flex justify-between items-center font-roboto py-8">
        <NavLink
          exact
          to="/"
          className="font-black text-xl text-gray-800 uppercase"
        >
          Baki Dukan
        </NavLink>

        <div className="space-x-5 text-gray-800">
          <NavLink to="/men" activeClassName="font-bold">
            Men
          </NavLink>
          <NavLink to="/women" activeClassName="font-bold">
            Ladies
          </NavLink>
          <NavLink to="/accessories" activeClassName="font-bold">
            Accessories
          </NavLink>
          <NavLink to="/electronics" activeClassName="font-bold">
            Electronics
          </NavLink>
        </div>

        <Link to="/cart">
          <div className="relative">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z"
                clipRule="evenodd"
              />
            </svg>
            <p className="absolute top-0 right-0 bg-red-400 rounded-full h-4 w-4 flex justify-center items-center">
              <span className="text-sm font-bold">{cartList.length}</span>
            </p>
          </div>
        </Link>
      </div>
    </nav>
  );
};

export default Header;
