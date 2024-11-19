"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { ShoppingCart, Star } from "lucide-react";

export default function Featured() {


    return (
        <>
            <h1 className="text-lg font-semibold">Featured</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 my-4">
                <Card className="w-64 cursor-pointer">
                    <div className="relative w-full h-48">
                        <Image
                            className="rounded-md object-cover"
                            src="/images/001.jpg"
                            alt="Picture of the author"
                            fill
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        />
                    </div>
                    <CardHeader className="px-2 pb-3">
                        <CardTitle className="text-nowrap overflow-hidden text-ellipsis text-md font-medium">Rain Jacket Women Windbreaker Striped Climbing Raincoats</CardTitle>
                        <CardDescription className="text-nowrap overflow-hidden text-ellipsis text-sm">Lightweight perfet for trip or casual wear---Long sleeve with hooded, adjustable drawstring waist design. Button and zipper front closure raincoat, fully stripes Lined and The Raincoat has 2 side pockets are a good size to hold all kinds of things, it covers the hips, and the hood is generous but doesn't overdo it.Attached Cotton Lined Hood with Adjustable Drawstrings give it a real styled look.</CardDescription>
                    </CardHeader>
                    <CardContent className="px-2 flex justify-between items-center">
                        <p className="text-muted-foreground font-medium">$ 39.99</p>
                        <Button variant="outline" size="icon">
                            <ShoppingCart />
                        </Button>
                    </CardContent>
                </Card>
            </div>
        </>
    );
}
