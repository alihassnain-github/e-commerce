import Footer from "@/components/footer"
import Navbar from "@/components/nav"
import AuthContextProvider from "@/context/AuthContext"
import CategoryContextProvider from "@/context/CategoryContext"
import FeaturedContextProvider from "@/context/FeaturedContext"
import MoreContextProvider from "@/context/MoreContext"

export default function HomeLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <AuthContextProvider>
            <MoreContextProvider>
                <FeaturedContextProvider>
                    <CategoryContextProvider>
                        <Navbar />
                        <section className="max-w-7xl mx-auto">
                            {children}
                        </section>
                        <Footer />
                    </CategoryContextProvider>
                </FeaturedContextProvider>
            </MoreContextProvider>
        </AuthContextProvider>
    )
}