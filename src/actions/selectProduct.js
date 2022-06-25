import { actionTypes } from "./actionTypes";

export const selectProduct = (product) => {
    return {
        type: actionTypes.selectProduct,
        payload: product,
    };
};