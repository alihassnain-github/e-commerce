import Footer from "@/components/footer"
import Navbar from "@/components/nav"
import AuthContextProvider from "@/context/AuthContext"
import CategoryContextProvider from "@/context/CategoryContext"
import ElectronicsContextProvider from "@/context/ElectronicsProducts"
import FeaturedContextProvider from "@/context/FeaturedContext"
import JeweleryContextProvider from "@/context/JeweleryProductsContext"
import MenContextProvider from "@/context/MenProductsContext"
import MoreContextProvider from "@/context/MoreContext"
import WomenContextProvider from "@/context/WomenProductsContext"

export default function HomeLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <AuthContextProvider>
            <MenContextProvider>
                <WomenContextProvider>
                    <JeweleryContextProvider>
                        <ElectronicsContextProvider>
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
                        </ElectronicsContextProvider>
                    </JeweleryContextProvider>
                </WomenContextProvider>
            </MenContextProvider>
        </AuthContextProvider>
    )
}