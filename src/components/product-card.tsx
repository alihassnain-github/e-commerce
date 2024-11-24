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

export default function ProductCard({ product }: { product: Product }) {
    const { id, image, title, description, price } = product;
    return (
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
    )
}