import { useEffect, useState } from "react";

export const useGetProducts = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch("http://localhost:3000/products")
            .then((res) => res.json())
            .then((data) => setProducts(data));
    }, []);

    return products.filter((p) => p.price > 20);
};