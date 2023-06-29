//https://www.youtube.com/watch?v=7mUGqExgPdQ

import { writable, get } from "svelte/store";

export const cartItems = writable<CartItem[]>([]);

export const addToCart = (id:string) => {
    const items = get(cartItems);
    const itemPosition = items.findIndex((item) => item.id === id);
    if (itemPosition !== -1) {
        // item is in the cart, add 1 to quantity
        const updatedItems = items.map((item) => {
            let itemToReturn;
            if (item.id === id) {
                itemToReturn = [...items, {id: id, quantity: item.quantity + 1}];
                itemToReturn.splice(0, 1);
                return itemToReturn;
            }
            return itemToReturn;
        });
        return updatedItems;
    } else {
        // item is not in the cart, add item to cart with quantity 1
        cartItems.update(() => {
            const itemToReturn = [...items, {id: id, quantity: 1}];;
            return itemToReturn;
        });
    }
}

export const removeFromCart = (id:string) => {
    const items = get(cartItems);
    const itemPosition = items.findIndex((item) => item.id === id);
    if (items[itemPosition]?.quantity - 1 === 0) {
        //remove from cart if we have quantity 0
        items.splice(itemPosition, 1);
    }

    const updatedItems = items.map((item) => {
        let itemToReturn;
        if (item.id === id) {
            itemToReturn = [...items, {id: id, quantity: item.quantity - 1}];
            itemToReturn.splice(0, 1);
            return itemToReturn;
        }
        return itemToReturn;
     });
     return updatedItems;
}