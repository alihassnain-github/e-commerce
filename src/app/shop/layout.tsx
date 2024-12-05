import Footer from "@/components/footer"
import Navbar from "@/components/nav"
import AuthContextProvider from "@/context/AuthContext"
import CartContextProvider from "@/context/CartContext"
import CategoryContextProvider from "@/context/CategoryContext"
import ElectronicsContextProvider from "@/context/ElectronicsProducts"
import FeaturedContextProvider from "@/context/FeaturedContext"
import JeweleryContextProvider from "@/context/JeweleryProductsContext"
import MenContextProvider from "@/context/MenProductsContext"
import WomenContextProvider from "@/context/WomenProductsContext"

export default function HomeLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <AuthContextProvider>
            <CartContextProvider>
                <MenContextProvider>
                    <WomenContextProvider>
                        <JeweleryContextProvider>
                            <ElectronicsContextProvider>
                                <FeaturedContextProvider>
                                    <CategoryContextProvider>
                                        <Navbar />
                                        <section className="max-w-7xl mx-auto px-4 mb-8">
                                            {children}
                                        </section>
                                        <Footer />
                                    </CategoryContextProvider>
                                </FeaturedContextProvider>
                            </ElectronicsContextProvider>
                        </JeweleryContextProvider>
                    </WomenContextProvider>
                </MenContextProvider>
            </CartContextProvider>
        </AuthContextProvider>
    )
}