"use client";

import { createContext, ReactNode, useContext, useEffect, useState } from "react";

type CategoryContextType = {
    categories: string[]
}

const CategoryContext = createContext<CategoryContextType | null>(null);

export default function CategoryContextProvider({ children }: { children: ReactNode }) {

    const [categories, setCategories] = useState<string[]>([]);

    // Fetch categories from API
    const fetchCategories = async () => {
        try {
            const response = await fetch("https://fakestoreapi.com/products/categories");
            const data = await response.json();
            console.log(data);
            setCategories(data);
        } catch (error) {
            console.error("Failed to fetch categories:", error);
        }
    };

    useEffect(() => {
        fetchCategories();
    }, []);

    return (
        <CategoryContext.Provider value={{ categories }}>
            {children}
        </CategoryContext.Provider>
    )
}

export const useCategories = () => useContext(CategoryContext);