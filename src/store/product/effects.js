export const addProductToCart = (product, state) => {
    const updatedCart = [...state.cart];
    const updatedItemIndex = updatedCart.findIndex(
        item => item.id === product.id
    );

    if (updatedItemIndex < 0) {
        updatedCart.push({ ...product, quantity: 1 });
    } else {
        const updatedItem = {
            ...updatedCart[updatedItemIndex]
        };
        updatedItem.quantity++;
        updatedCart[updatedItemIndex] = updatedItem;
    }
    return { ...state, cart: updatedCart };
};

export const removeProductFromCart = (productId, state) => {
    console.log('Removing product with id: ' + productId);
    const updatedCart = [...state.cart];
    const updatedItemIndex = updatedCart.findIndex(item => item.id === productId);

    const updatedItem = {
        ...updatedCart[updatedItemIndex]
    };
    updatedItem.quantity--;
    if (updatedItem.quantity <= 0) {
        updatedCart.splice(updatedItemIndex, 1);
    } else {
        updatedCart[updatedItemIndex] = updatedItem;
    }
    return { ...state, cart: updatedCart };
};
