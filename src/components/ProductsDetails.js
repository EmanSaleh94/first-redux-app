import { useSelector } from "react-redux";

const ProductDetails = () => {
  const product = useSelector((store) => store.products.selected);

  return (
    <>
      {product ? (
        <div className="text-center">
          <h2>The details of the product you selected</h2>
          <h2 className="text-primary">{product.name}</h2>
          <h3>{product.price} $</h3>
        </div>
      ) : (
        <h3>Select product to show it's details</h3>
      )}
    </>
  );
};

export default ProductDetails;
