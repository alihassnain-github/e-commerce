import Categories from "@/components/categories";
import Featured from "@/components/featured";
import { Slider } from "@/components/slider";

export default function Home() {

    return (
        <main className="px-4 mt-4">
            <Slider />
            {/* <Categories /> */}
            <Featured />
        </main>
    );
}
