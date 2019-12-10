import React, {useState, useReducer} from 'react';

import ShopContext from './store';
import {totalReducer} from './total/reducers';
import {shopReducer} from './product/reducers';
import {ADD_PRODUCT, REMOVE_PRODUCT} from './product/actions';
import {DECREMENT_TOTAL, INCREMENT_TOTAL} from "./total/actions";


const GlobalState = props => {
    const products = [
        {id: 'p1', title: 'Gaming Mouse', price: 29.99},
        {id: 'p2', title: 'Harry Potter 3', price: 9.99},
        {id: 'p3', title: 'Used plastic bottle', price: 0.99},
        {id: 'p4', title: 'Half-dried plant', price: 2.99}
    ];
    // const [cart, setCart] = useState([]);
    const [cartState, dispatch] = useReducer(shopReducer, {cart: []});

    const [total, dispatchTotal] = useReducer(totalReducer, 0);

    const addProductToCart = product => {
        // setCart(updatedCart);
        dispatch({type: ADD_PRODUCT, product: product});
        dispatchTotal({type: INCREMENT_TOTAL, product});

    };

    const removeProductFromCart = product => {

        // setCart(updatedCart);
        dispatch({type: REMOVE_PRODUCT, productId: product.id});
        dispatchTotal({type: DECREMENT_TOTAL, product});
    };

    return (
        <ShopContext.Provider
            value={{
                products: products,
                cart: cartState.cart,
                total: total,
                addProductToCart: addProductToCart,
                removeProductFromCart: removeProductFromCart
            }}
        >
            {props.children}
        </ShopContext.Provider>
    );
};

export default GlobalState;
