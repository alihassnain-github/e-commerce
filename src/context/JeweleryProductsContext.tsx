"use client";

import { createContext, ReactNode, useContext, useEffect, useState } from "react";

type JeweleryContextType = {
    products: Product[]
}

const JeweleryProductContext = createContext<JeweleryContextType | null>(null);

export default function JeweleryContextProvider({ children }: { children: ReactNode }) {

    const [products, setProducts] = useState<Product[]>([]);

    // Fetch Products from API
    const fetchProducts = async () => {
        try {
            const response = await fetch("https://fakestoreapi.com/products/category/jewelery");
            const data = await response.json();
            setProducts(data);
        } catch (error) {
            console.error("Failed to fetch Products:", error);
        }
    };

    useEffect(() => {
        fetchProducts();
    }, []);

    return (
        <JeweleryProductContext.Provider value={{ products }}>
            {children}
        </JeweleryProductContext.Provider>
    )
}

export const useJeweleryProducts = () => useContext(JeweleryProductContext);