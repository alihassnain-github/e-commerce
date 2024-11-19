import Navbar from "@/components/nav"
import AuthContextProvider from "@/context/AuthContext"
import CategoryContextProvider from "@/context/CategoryContext"
import FeaturedContextProvider from "@/context/FeaturedContext"

export default function HomeLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <AuthContextProvider>
            <FeaturedContextProvider>
                <CategoryContextProvider>
                    <Navbar />
                    <section className="max-w-7xl mx-auto">
                        {children}
                    </section>
                </CategoryContextProvider>
            </FeaturedContextProvider>
        </AuthContextProvider>
    )
}