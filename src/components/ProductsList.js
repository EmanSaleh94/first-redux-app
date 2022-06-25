import { useCallback, useEffect, useMemo, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import useSWR from "swr";
import { useGetProducts } from "../hooks/useGetProducts";

import { selectProduct } from "../redux/productsSlice";

const ProductList = () => {
  const products = useSelector((state) => state.products.items);
  const dispatch = useDispatch();

  // const { data: products, error } = useSWR("products", () => {
  //   return fetch("http://localhost:3000/products").then((res) => res.json());
  // });
  const [count, setCount] = useState(0);

  // const products = useGetProducts();

  const handleSelectProduct = useCallback((product) => {
    dispatch(selectProduct(product));
  }, []);

  const add = (a, b) => {
    console.log("ADD");
    return a + b;
  };

  const add2 = useMemo(() => add(1, 1), []);

  console.log("RENDER");
  return (
    <>
      <h1> {add2}</h1>
      <h2 onClick={() => setCount(count + 1)}>{count}</h2>
      {products?.map((p) => (
        <div className="d-flex gap-3 my-2 fw-bold">
          <span> {p.name} </span> <span> {p.price} </span>
          <div
            onClick={() => handleSelectProduct(p)}
            className="btn btn-primary btn-sm"
          >
            Show Details
          </div>
        </div>
      ))}
    </>
  );
};

export default ProductList;

// const mapStateToProps = (state) => {
//   return {
//     products: state.products,
//   };
// };

// export default connect(mapStateToProps, { selectProduct })(ProductList);

// const getAddFunc = (x) => {
//   return (y) => {
//     return x + y;
//   };
// };

// getAddFunc(15)(7)
