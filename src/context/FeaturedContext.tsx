"use client";

import { createContext, ReactNode, useContext, useEffect, useState } from "react";

type FeaturedContextType = {
    products: Product[],
    fetchProducts: (limit: number) => void
}

const FeaturedContext = createContext<FeaturedContextType | null>(null);

export default function FeaturedContextProvider({ children }: { children: ReactNode }) {

    const [products, setProducts] = useState<Product[]>([]);

    // Fetch categories from API
    const fetchProducts = async (limit: number) => {
        try {
            const response = await fetch(`https://fakestoreapi.com/products?limit=${limit}`);
            const data = await response.json();
            console.log(data);
            setProducts(data);
        } catch (error) {
            console.error("Failed to fetch categories:", error);
        }
    };

    useEffect(() => {
        fetchProducts(8);
    }, []);

    return (
        <FeaturedContext.Provider value={{ products, fetchProducts }}>
            {children}
        </FeaturedContext.Provider>
    )
}

export const useFeatured = () => useContext(FeaturedContext);