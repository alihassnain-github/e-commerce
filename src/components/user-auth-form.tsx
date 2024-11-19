"use client"

import { Label } from "./ui/label"
import { Input } from "./ui/input"
import { Button } from "./ui/button"
import { FormEvent, useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";
import { Loader2 } from "lucide-react";

export function UserAuthForm({ mode }: { mode: "login" | "signup" }) {

    const route = useRouter();
    const pathName = usePathname();

    const [isLoading, setIsloading] = useState(false);

    const [userName, setUserName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    useEffect(() => {
        const user = localStorage.getItem("user");
        if (user) route.push("/shop");
    }, [login, signup])

    function getDisplayName(email: string): string {
        const namePart = email.split("@")[0];
        return namePart
    }


    // login function
    function login() {
        const userName = getDisplayName(email);
        const user = { userName, email, password };
        localStorage.setItem("user", JSON.stringify(user));
    };

    // signup function
    function signup() {
        const user = { userName, email, password };
        localStorage.setItem("user", JSON.stringify(user));
    }

    function onSubmit(event: FormEvent) {
        event.preventDefault();
        setIsloading(true);
        setTimeout(() => {
            if (mode === "login") {
                login();
            }
            else {
                signup();
            }
            setIsloading(false);
        }, 2000);
    }

    return (
        <form onSubmit={onSubmit} className="md:w-2/5 lg:w-1/4 w-full">
            <div className="grid gap-2">
                {
                    pathName !== "/login" && (
                        <div className="grid gap-1">
                            <Label htmlFor="userName">
                                User Name
                            </Label>
                            <Input
                                required
                                onChange={(e) => setUserName(e.target.value)}
                                value={userName}
                                id="userName"
                                type="text"
                            />
                        </div>
                    )
                }
                <div className="grid gap-1">
                    <Label htmlFor="email">
                        Email
                    </Label>
                    <Input
                        required
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                        id="email"
                        type="email"
                    />
                </div>
                <div className="grid gap-1">
                    <Label htmlFor="password">
                        Password
                    </Label>
                    <Input
                        required
                        onChange={(e) => setPassword(e.target.value)}
                        value={password}
                        id="password"
                        type="password"
                    />
                </div>
                <Button type="submit" className="mt-4" disabled={isLoading}>
                    {
                        isLoading ? (
                            <>
                                <Loader2 className="animate-spin" />
                                Please wait
                            </>
                        ) : (
                            <>
                                {pathName === "/login" ? "Log In" : "Sign Up"}
                            </>
                        )
                    }
                </Button>
            </div>
        </form>
    )
}