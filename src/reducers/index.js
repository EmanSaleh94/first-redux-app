import { combineReducers } from "redux";

import { productsReducer } from "./productsReducer";
import { productDetailsReducer } from "./productDetailsReducer";

export const rootReducer = combineReducers({
    products: productsReducer,
    selectedProduct: productDetailsReducer,
});