import { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addProducts } from "./features/shop/productSlice";

import Header from "./components/Header";
import ProductDetail from "./components/ProductDetail";
import NotFound from "./components/NotFound";
import Cart from "./components/Cart";
import MenProducts from "./components/MenProducts";
import Footer from "./components/Footer";
import Featured from "./components/Featured";
import WomenProducts from "./components/WomenProducts";
import AccessoryProducts from "./components/AccessoryProducts";
import ElectronicsProducts from "./components/ElectronicsProducts";

function App() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then(
        (result) => {
          dispatch(addProducts(result));
          setIsLoaded(true);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, []);

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={Featured}></Route>
          <Route path="/cart" component={Cart}></Route>
          <Route path="/men" component={MenProducts}></Route>
          <Route path="/women" component={WomenProducts}></Route>
          <Route path="/accessories" component={AccessoryProducts}></Route>
          <Route path="/electronics" component={ElectronicsProducts}></Route>
          <Route exact path="/product/:id" component={ProductDetail}></Route>
          <Route path="*" component={NotFound}></Route>
        </Switch>
        <Footer />
      </Router>
    );
  }
}

export default App;
