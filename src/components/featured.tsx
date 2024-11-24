"use client";

import { Button } from "@/components/ui/button"
import { useFeatured } from "@/context/FeaturedContext";
import ProductCard from "./product-card";

export default function Featured() {

    const { products, fetchProducts } = useFeatured()!;

    return (
        <>
            <h1 className="text-lg font-semibold">Featured Products</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 my-4">
                {
                    products && products.map((product) => (
                        <ProductCard product={product} />
                    ))
                }
            </div>
            <Button variant="default" onClick={() => fetchProducts(16)}>Load More</Button>
        </>
    );
}
