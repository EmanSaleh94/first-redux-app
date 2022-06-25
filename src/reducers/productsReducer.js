const initial_state = [
    { id: 1, name: "Burger", price: 50 },
    { id: 2, name: "Fries", price: 30 },
    { id: 3, name: "Cola", price: 10 },
];

export const productsReducer = (listOfProducts = initial_state, action) => {
    return listOfProducts;
};