"use client";

import { createContext, ReactNode, useContext, useEffect, useState } from "react";

type UserContextType = {
    user: UserType | null,
    changeUser: (value: null) => void
}

type UserType = {
    userName: string,
    email: string,
    password: string
}

const AuthContext = createContext<UserContextType | null>(null);

export default function AuthContextProvider({ children }: { children: ReactNode }) {

    const [user, setUser] = useState<UserType | null>(null);
    function changeUser(value: null) {
        setUser(value)
    }
    useEffect(() => {
        const user = localStorage.getItem("user");
        if (user) setUser(JSON.parse(user));
    }, []);

    return (
        <AuthContext.Provider value={{ user, changeUser }}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => useContext(AuthContext);