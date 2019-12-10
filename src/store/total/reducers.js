import {DECREMENT_TOTAL, INCREMENT_TOTAL} from "./actions";
import {decrementTotal, incrementTotal} from "./effects";

export const totalReducer = (state, action) => {
    switch (action.type) {
        case INCREMENT_TOTAL:
            return incrementTotal(action.product.price, state);
        case DECREMENT_TOTAL:
            return decrementTotal(action.product.price, state);
        default:
            return state;
    }
};
