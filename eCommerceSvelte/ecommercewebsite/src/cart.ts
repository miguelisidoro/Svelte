//https://www.youtube.com/watch?v=7mUGqExgPdQ

import { writable, get } from "svelte/store";

export const cartItems = writable<CartItem[]>([]);

export const addtoCart = (id:string) => {
    const items = get(cartItems);
    const itemPosition = items.findIndex((item) => item.id === id);
    if (itemPosition !== -1) {
        // item is in the cart, add 1 to quantity
        const updatedItems = items.map((item) => {
           if (item.id === id) {
            return [...items, {id: id, quantity: item.quantity + 1}];
           }
           return item;
        });
        return updatedItems;
    } else {
        // item is not in the cart, add item to cart with quantity 1
        cartItems.update(() => {
            return [...items, {id: id, quantity: 1}];
        });
    }
}