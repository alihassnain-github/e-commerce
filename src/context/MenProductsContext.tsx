"use client";

import { createContext, ReactNode, useContext, useEffect, useState } from "react";

type MenContextType = {
    products: Product[]
}

const MenProductContext = createContext<MenContextType | null>(null);

export default function MenContextProvider({ children }: { children: ReactNode }) {

    const [products, setProducts] = useState<Product[]>([]);

    // Fetch Products from API
    const fetchProducts = async () => {
        try {
            const response = await fetch("https://fakestoreapi.com/products/category/men's clothing");
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
        <MenProductContext.Provider value={{ products }}>
            {children}
        </MenProductContext.Provider>
    )
}

export const useMenProducts = () => useContext(MenProductContext);