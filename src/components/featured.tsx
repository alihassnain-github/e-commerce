"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { ShoppingCart } from "lucide-react";
import { useFeatured } from "@/context/FeaturedContext";

export default function Featured() {

    const { products, fetchProducts } = useFeatured()!;

    return (
        <>
            <h1 className="text-lg font-semibold">Featured Products</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 my-4">
                {
                    products && products.map(({ id, image, title, description, price }) => (
                        <Card key={id} className="w-64 cursor-pointer">
                            <div className="relative w-full h-48">
                                <Image
                                    className="rounded-md object-cover"
                                    src={image}
                                    alt={title}
                                    fill
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                />
                            </div>
                            <CardHeader className="px-2 pb-3">
                                <CardTitle className="text-nowrap overflow-hidden text-ellipsis text-md font-medium">{title}</CardTitle>
                                <CardDescription className="text-nowrap overflow-hidden text-ellipsis text-sm">{description}</CardDescription>
                            </CardHeader>
                            <CardContent className="px-2 flex justify-between items-center">
                                <p className="text-muted-foreground font-medium">$ {price}</p>
                                <Button variant="outline" size="icon">
                                    <ShoppingCart />
                                </Button>
                            </CardContent>
                        </Card>
                    ))
                }
            </div>
            <Button variant="default" onClick={() => fetchProducts(16)}>Load More</Button>
        </>
    );
}
