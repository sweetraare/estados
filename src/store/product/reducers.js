import {ADD_PRODUCT, REMOVE_PRODUCT} from "./actions";
import {addProductToCart, removeProductFromCart} from "./effects";

export const shopReducer = (state, action) => {
    switch (action.type) {
        case ADD_PRODUCT:
            return addProductToCart(action.product, state);
        case REMOVE_PRODUCT:
            return removeProductFromCart(action.productId, state);
        default:
            return state;
    }

};
