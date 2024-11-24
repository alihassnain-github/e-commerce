"use client";

import ProductCard from "@/components/product-card";
import { useWomenProducts } from "@/context/WomenProductsContext";

export default function Women() {

    const { products } = useWomenProducts()!;

    return (
        <div>
            <h1 className="text-lg font-semibold my-4">Women</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 my-4">
                {
                    products && products.map((product) => (
                        <ProductCard product={product} />
                    ))
                }
            </div>
        </div>
    )
}