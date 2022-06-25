import { actionTypes } from "../actions/actionTypes";

export const productDetailsReducer = (selectedProduct = null, action) => {
    switch (action.type) {
        case actionTypes.selectProduct:
            return action.payload;

        default:
            return selectedProduct;
    }
};