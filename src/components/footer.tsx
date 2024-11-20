"use client";

import Link from "next/link"
import { Button } from "./ui/button";
import { Input } from "./ui/input";

export default function Footer() {

    return (
        <div className="border-t py-8">
            <div className="grid lg:grid-rows-1 lg:grid-cols-4 md:grid-rows-2 md:grid-cols-2 grid-rows-4 grid-cols-1 max-w-7xl mx-auto">
                <div>
                    <h1 className="text-lg font-semibold mb-4">E-Commerce</h1>
                    <p className="text-sm pr-8">Discover the best in quality and style with E-Commerce. Shop with confidence and enjoy seamless shopping, secure payments, and exceptional customer service. Your satisfaction is our priority!</p>
                </div>
                <div>
                    <h6 className="mb-4 font-semibold text-lg">Quick Links</h6>
                    <Link className="block mb-2 text-md" href="/shop">Home</Link>
                    <Link className="block mb-2 text-md" href="/shop/men">Men</Link>
                    <Link className="block mb-2 text-md" href="/shop/women">Women</Link>
                    <Link className="block mb-2 text-md" href="/shop/jewelery">Jewelery</Link>
                    <Link className="block mb-2 text-md" href="/shop/electronics">Electronics</Link>
                </div>
                <div>
                    <h6 className="mb-4 font-semibold text-lg">Legal</h6>
                    <Link className="block mb-2 text-md" href="/privacy">Privacy Policy</Link>
                    <Link className="block mb-2 text-md" href="/terms">Terms & Conditions</Link>
                </div>
                <div>
                    <h4 className="mb-4 font-semibold text-lg">Subscribe to our newsletter</h4>
                    <p className="text-sm">Stay updated on new releases and features, guides, and case studies.</p>
                    <div className="flex w-full items-center space-x-2 my-8">
                        <Input type="email" placeholder="Email" />
                        <Button type="submit" size="sm">Subscribe</Button>
                    </div>
                </div>
            </div>
            <p className="text-center mt-4 text-sm">Built by Ali. The source code is available on GitHub.</p>
        </div>
    )
}