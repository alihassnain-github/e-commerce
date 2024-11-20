"use client";

import { createContext, ReactNode, useContext, useEffect, useState } from "react";

type MoreContextType = {
    products: Product[];
};

const MoreContext = createContext<MoreContextType | null>(null);

export default function MoreContextProvider({ children }: { children: ReactNode }) {
    const [products, setProducts] = useState<Product[]>([]);

    const fetchProductsByCategory = async () => {
        try {
            const categoriesResponse = await fetch(`https://fakestoreapi.com/products/categories`);
            const categories: string[] = await categoriesResponse.json();

            const categoryProductsPromises = categories.map(async (category) => {
                const response = await fetch(`https://fakestoreapi.com/products/category/${category}?limit=3`);
                return response.json();
            });

            const allCategoryProducts = await Promise.all(categoryProductsPromises);
            console.log(allCategoryProducts);

            const combinedProducts = allCategoryProducts.flat();
            setProducts(combinedProducts);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        fetchProductsByCategory();
    }, []);

    return (
        <MoreContext.Provider value={{ products }}>
            {children}
        </MoreContext.Provider>
    );
}

export const useMoreProducts = () => useContext(MoreContext);