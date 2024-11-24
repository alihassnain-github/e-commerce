"use client";

import { createContext, ReactNode, useContext, useEffect, useState } from "react";

type ElectronicsContextType = {
    products: Product[]
}

const ElectronicsProductContext = createContext<ElectronicsContextType | null>(null);

export default function ElectronicsContextProvider({ children }: { children: ReactNode }) {

    const [products, setProducts] = useState<Product[]>([]);

    // Fetch Products from API
    const fetchProducts = async () => {
        try {
            const response = await fetch("https://fakestoreapi.com/products/category/electronics");
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
        <ElectronicsProductContext.Provider value={{ products }}>
            {children}
        </ElectronicsProductContext.Provider>
    )
}

export const useElectronicsProducts = () => useContext(ElectronicsProductContext);