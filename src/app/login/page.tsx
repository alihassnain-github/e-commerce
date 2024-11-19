import { UserAuthForm } from "@/components/user-auth-form";
import Link from "next/link";

export default function Login() {
    return (
        <div className="w-full h-full min-h-screen bg-slate-50 flex flex-col items-center justify-center p-4">
            <h1 className="text-2xl font-semibold tracking-tight my-8">
                Login
            </h1>
            <UserAuthForm mode={"login"} />
            <p className="my-8 w-full xl:w-1/4 lg:w-1/3 md:w-2/5 px-8 text-center text-sm text-muted-foreground">
                Don't have an account{" "}
                <Link
                    href="/signup"
                    className="underline underline-offset-4 hover:text-primary"
                >
                    signup here {" "}.
                </Link>
            </p>
        </div>
    )
}