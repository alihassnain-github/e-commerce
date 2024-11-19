"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useCategories } from "@/context/CategoryContext";

type CategoryImages = {
    "electronics": string;
    "jewelery": string;
    "men's clothing": string;
    "women's clothing": string;
};

const categoryImages: CategoryImages = {
    "electronics": "/images/03.jpg",
    "jewelery": "/images/02.jpg",
    "men's clothing": "/images/04.jpg",
    "women's clothing": "/images/01.jpg",
};

export default function Categories() {
    const { categories } = useCategories()!;
    const router = useRouter();

    return (
        <>
            <h1 className="text-lg font-semibold">Shop by Category</h1>
            <div className="grid grid-rows-2 grid-cols-2 gap-3 md:grid-rows-1 md:grid-cols-4 md:my-8 my-4">
                {categories.map((category) => (
                    <div
                        key={category}
                        className="cursor-pointer flex flex-col justify-center items-center gap-4 font-medium transition-colors hover:text-primary text-muted-foreground"
                        onClick={() => router.push(category === "electronics" ?
                            "shop/electronics" : category === "jewelery" ?
                                "shop/jewelery" : category === "men's clothing" ?
                                    "shop/men" : "shop/women")}
                    >
                        <Image
                            className="rounded-full w-32 h-32 object-cover"
                            src={categoryImages[category as keyof CategoryImages]}
                            alt={category}
                            width={200}
                            height={200}
                        />
                        <h4>{category}</h4>
                    </div>
                ))}
            </div >
        </>
    );
}
