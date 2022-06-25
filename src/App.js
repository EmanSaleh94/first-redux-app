import ProductDetails from "./components/ProductsDetails";
import ProductList from "./components/ProductsList";

const App = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col">
            <ProductList />
          </div>
          <div className="col">
            <ProductDetails />
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
