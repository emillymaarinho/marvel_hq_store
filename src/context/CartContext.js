import { createContext, useState } from "react";

export const CartContext = createContext({});

export const CartProvaider = ({ children }) => {
    const cartCached = JSON.parse(localStorage.getItem("cart"));
    const [cart, setCart] = useState(cartCached || []);

    const addComicToCart = (comic) => {
        let index = cart.findIndex(val => val.id === comic.id);
        if (index < 0) {
            setCart([...cart, comic]);
            localStorage.setItem("cart", JSON.stringify([...cart, comic]));
        } else {
            cart[index].qnt += 1;
            updateCartItem(index, cart[index]);
        }
    }

    const updateCartItem = (index, value) => {
        let copyCart = [...cart];
        copyCart[index] = value;
        setCart(copyCart);
        localStorage.setItem("cart", JSON.stringify(copyCart));
    }

    const removeComicFromCart = (index) => {
        const filteredCart = cart.filter((cartItem) => cart.indexOf(cartItem) !== index);
        setCart(filteredCart);
        localStorage.setItem("cart", JSON.stringify(filteredCart));
    }

    const clearCart = () => {
        setCart([]);
        localStorage.removeItem("cart");
    }

    return <CartContext.Provider value={{ cart, addComicToCart, updateCartItem, removeComicFromCart, clearCart }}>
        {children}</CartContext.Provider>;
};

