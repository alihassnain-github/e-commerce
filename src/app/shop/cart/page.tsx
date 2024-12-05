"use client";

import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableFooter, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { useCart } from "@/context/CartContext"
import Image from "next/image";

export default function Cart() {
    const { cart, addProduct } = useCart()!;

    return (
        <>
            <h1 className="text-lg my-8 font-semibold">Cart</h1>
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead>Product</TableHead>
                        <TableHead>Price</TableHead>
                        <TableHead>Quantity</TableHead>
                        <TableHead className="text-right">Total</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {
                        cart.map((item) => (
                            <TableRow key={item.productId}>
                                <TableCell className="flex items-center gap-x-4 max-w-96">
                                    <Image
                                        className="object-cover"
                                        src={item.image}
                                        width={50}
                                        height={50}
                                        alt={item.title}
                                    />
                                    <div>
                                        <h6 className="font-semibold">{item.title}</h6>
                                        <div className="w-96 whitespace-nowrap overflow-hidden text-ellipsis">
                                            <span className="text-small text-gray-500">{item.description}</span>
                                        </div>
                                    </div>
                                </TableCell>
                                <TableCell>{item.price}</TableCell>
                                <TableCell>
                                    <div className="flex items-center space-x-2">
                                        <Button variant="outline" size="icon">
                                            -
                                        </Button>
                                        <span className="w-12 text-center">{item.quantity}</span>
                                        <Button variant="outline" size="icon" onClick={() => { addProduct(item) }}>
                                            +
                                        </Button>
                                    </div>
                                </TableCell>
                                <TableCell className="text-right">123</TableCell>
                            </TableRow>
                        ))
                    }
                </TableBody>
                <TableFooter>
                    <TableRow>
                        <TableCell colSpan={3}>Total</TableCell>
                        <TableCell className="text-right">$2,500.00</TableCell>
                    </TableRow>
                </TableFooter>
            </Table>
        </>
    )
}