"use client";

import Image from "next/image";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"
import { useMoreProducts } from "@/context/MoreContext";

export default function MoreProducts() {

    const { products } = useMoreProducts()!;

    return (
        <>
            <h1 className="text-lg font-semibold mt-8 mb-4">More from Us</h1>
            <ScrollArea className="w-7xl whitespace-nowrap rounded-md border mb-14">
                <div className="flex w-max space-x-14 p-4">
                    {
                        products && products.map(({ id, image, title, price }) => (
                            <figure key={id} className="shrink-0 cursor-pointer">
                                <div className="overflow-hidden rounded-md relative w-48 h-64">
                                    <Image
                                        src={image}
                                        alt={title}
                                        className="object-cover"
                                        fill
                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                    />
                                </div>
                                <figcaption className="flex justify-between pt-2 text-xs text-muted-foreground">
                                    <span>
                                        {title.slice(0, 20) + "..."}
                                    </span>
                                    <span className="font-semibold text-foreground">
                                        $ {price}
                                    </span>
                                </figcaption>
                            </figure>
                        ))
                    }
                </div>
                <ScrollBar orientation="horizontal" />
            </ScrollArea>
        </>
    );
}
