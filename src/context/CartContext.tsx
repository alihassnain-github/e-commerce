"use client"

import { createContext, ReactNode, useContext, useEffect, useState } from "react";

interface Cart {
    productId: number,
    quantity?: number,
    title: string,
    price: number,
    description: string,
    image: string,
}

interface CartContext {
    cart: Cart[],
    addProduct: (product: Cart) => void
}

const CartContext = createContext<CartContext | null>(null);

export default function CartContextProvider({ children }: { children: ReactNode }) {

    const [cart, setCart] = useState<Cart[]>([]);

    useEffect(() => {
        console.log(cart);
    }, [cart])

    const addProduct = (product: Cart) => {
        const checkInCart = cart?.findIndex((item) => item.productId === product.productId);
        if (checkInCart !== -1) {
            setCart((prevCart) => prevCart.map((item, index) => (index === product.productId ? { ...item, quantity: item.quantity as number + 1 } : item)))
        }
        else {
            setCart((prevCart) => [...prevCart, { ...product, quantity: 1 }])
            console.log("Else working");

        }
    }

    return (
        <CartContext.Provider value={{ cart, addProduct }}>
            {children}
        </CartContext.Provider>
    )
}


export const useCart = () => useContext(CartContext)