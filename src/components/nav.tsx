"use client"

import Link from "next/link"
import { Menu, ShoppingCart, User } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
    Sheet,
    SheetContent,
    SheetTrigger,
} from "@/components/ui/sheet"
import { useState } from "react"
import { usePathname } from "next/navigation"
import { UserNav } from "./user-nav"
import { useAuth } from "@/context/AuthContext"

export default function Navbar() {

    const pathName = usePathname();
    const { user, changeUser } = useAuth()!;
    const [isOpen, setIsOpen] = useState(false)

    return (
        <header className="sticky top-0 z-50 w-full border-b bg-background">
            <div className="max-w-7xl mx-auto container flex h-16 items-center px-4">
                <Sheet open={isOpen} onOpenChange={setIsOpen}>
                    <SheetTrigger asChild className="lg:hidden">
                        <Button variant="ghost" size="icon" className="mr-2">
                            <Menu className="h-5 w-5" />
                            <span className="sr-only">Toggle navigation menu</span>
                        </Button>
                    </SheetTrigger>
                    <SheetContent side="left">
                        <nav className="flex flex-col gap-4">
                            <h2 className="text-xl font-semibold">Menu</h2>
                            <Link
                                href="/shop"
                                className="text-lg font-medium text-muted-foreground"
                                onClick={() => setIsOpen(false)}
                            >
                                Shop
                            </Link>
                            <Link
                                href="/shop/men"
                                className="text-lg font-medium text-muted-foreground"
                                onClick={() => setIsOpen(false)}
                            >
                                Men
                            </Link>
                            <Link
                                href="/shop/women"
                                className="text-lg font-medium text-muted-foreground"
                                onClick={() => setIsOpen(false)}
                            >
                                Women
                            </Link>
                            <Link
                                href="/shop/jewelery"
                                className="text-lg font-medium text-muted-foreground"
                                onClick={() => setIsOpen(false)}
                            >
                                Jewelery
                            </Link>
                            <Link
                                href="/shop/electronics"
                                className="text-lg font-medium text-muted-foreground"
                                onClick={() => setIsOpen(false)}
                            >
                                Electronics
                            </Link>
                        </nav>
                    </SheetContent>
                </Sheet>
                <Link href="/shop" className="mr-6 flex items-center space-x-2">
                    <span className="text-xl font-bold">E-Commerce</span>
                </Link>
                <nav className="hidden lg:flex lg:flex-1 lg:gap-6">
                    <Link
                        href="/shop"
                        className={pathName === "/shop" ? "text-sm font-medium transition-colors hover:text-primary" : "text-sm font-medium transition-colors text-muted-foreground hover:text-primary"}
                    >
                        Shop
                    </Link>
                    <Link
                        href="/shop/men"
                        className={pathName === "/shop/men" ? "text-sm font-medium transition-colors hover:text-primary" : "text-sm font-medium transition-colors text-muted-foreground hover:text-primary"}
                    >
                        Men
                    </Link>
                    <Link
                        href="/shop/women"
                        className={pathName === "/shop/women" ? "text-sm font-medium transition-colors hover:text-primary" : "text-sm font-medium transition-colors text-muted-foreground hover:text-primary"}
                    >
                        Women
                    </Link>
                    <Link
                        href="/shop/jewelery"
                        className={pathName === "/shop/jewelery" ? "text-sm font-medium transition-colors hover:text-primary" : "text-sm font-medium transition-colors text-muted-foreground hover:text-primary"}
                    >
                        Jewelery
                    </Link>
                    <Link
                        href="/shop/electronics"
                        className={pathName === "/shop/electronics" ? "text-sm font-medium transition-colors hover:text-primary" : "text-sm font-medium transition-colors text-muted-foreground hover:text-primary"}
                    >
                        Electronics
                    </Link>
                </nav>
                <div className="flex flex-1 items-center justify-end space-x-4">
                    <Link href="/cart" className="relative">
                        <Button variant="ghost" size="icon">
                            <ShoppingCart className="h-5 w-5" />
                            <span className="sr-only">Shopping Cart</span>
                            <span className="absolute -right-1 -top-1 h-4 w-4 rounded-full bg-primary text-xs font-bold text-primary-foreground">
                                0
                            </span>
                        </Button>
                    </Link>
                    {
                        user ? (
                            <UserNav />
                        ) : (
                            <Button variant="ghost" asChild>
                                <Link href="/login">Login</Link>
                            </Button>
                        )
                    }
                </div>
            </div>
        </header>
    )
}

