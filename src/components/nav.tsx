"use client";

import Link from "next/link"
import { UserNav } from "./user-nav"
import { Button } from "./ui/button";
import { useAuth } from "@/context/AuthContext";
import { ShoppingCart } from "lucide-react";
import { Badge } from "./ui/badge";
import { usePathname } from "next/navigation";

export default function Navbar() {

    const pathName = usePathname();

    const { user } = useAuth()!;

    return (
        <div className="border-b">
            <div className="flex h-16 items-center px-4 max-w-7xl mx-auto">
                <h1 className="text-lg font-semibold">E-Commerce</h1>
                <nav
                    className="flex items-center space-x-4 lg:space-x-6 mx-10">
                    <Link
                        href="/shop"
                        className={pathName === "/shop" ? "text-sm font-medium transition-colors hover:text-primary" : "text-sm font-medium transition-colors hover:text-primary text-muted-foreground"}
                    >
                        Home
                    </Link>
                    <Link
                        href="/shop/men"
                        className={pathName === "/shop/men" ? "text-sm font-medium transition-colors hover:text-primary" : "text-sm font-medium transition-colors hover:text-primary text-muted-foreground"}
                    >
                        Men
                    </Link>
                    <Link
                        href="/shop/women"
                        className={pathName === "/shop/women" ? "text-sm font-medium transition-colors hover:text-primary" : "text-sm font-medium transition-colors hover:text-primary text-muted-foreground"}
                    >
                        Women
                    </Link>
                    <Link
                        href="/shop/jewelery"
                        className={pathName === "/shop/jewelery" ? "text-sm font-medium transition-colors hover:text-primary" : "text-sm font-medium transition-colors hover:text-primary text-muted-foreground"}
                    >
                        Jewelery
                    </Link>
                    <Link
                        href="/shop/electronics"
                        className={pathName === "/shop/electronics" ? "text-sm font-medium transition-colors hover:text-primary" : "text-sm font-medium transition-colors hover:text-primary text-muted-foreground"}
                    >
                        Electronics
                    </Link>
                </nav>
                <div className="ml-auto flex items-center space-x-4">
                    <Button variant="ghost" size="icon" className="relative">
                        <Badge className="absolute w-4 h-4 p-2 flex items-center justify-center top-0 -right-1">0</Badge>
                        <ShoppingCart />
                    </Button>
                    {
                        user ? (
                            <UserNav />
                        ) : (
                            <Button variant="ghost" asChild>
                                <Link href="/login">Log In</Link>
                            </Button>
                        )
                    }
                </div>
            </div>
        </div>
    )
}