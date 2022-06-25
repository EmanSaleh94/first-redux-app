import { createSlice } from "@reduxjs/toolkit";

const initial_state = [
    { id: 1, name: "Burger", price: 50 },
    { id: 2, name: "Fries", price: 30 },
    { id: 3, name: "Cola", price: 10 },
];

const productsSlice = createSlice({
    name: "products",
    initialState: {
        items: initial_state,
        selected: null,
    },
    reducers: {
        selectProduct: (state, action) => {
            state.selected = action.payload;

            return state;
        },
    },
});

export const { selectProduct } = productsSlice.actions;
export default productsSlice.reducer;