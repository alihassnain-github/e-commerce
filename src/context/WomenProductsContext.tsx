"use client";

import { createContext, ReactNode, useContext, useEffect, useState } from "react";

type WomenContextType = {
    products: Product[]
}

const WomenProductContext = createContext<WomenContextType | null>(null);

export default function WomenContextProvider({ children }: { children: ReactNode }) {

    const [products, setProducts] = useState<Product[]>([]);

    // Fetch Products from API
    const fetchProducts = async () => {
        try {
            const response = await fetch("https://fakestoreapi.com/products/category/women's clothing");
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
        <WomenProductContext.Provider value={{ products }}>
            {children}
        </WomenProductContext.Provider>
    )
}

export const useWomenProducts = () => useContext(WomenProductContext);