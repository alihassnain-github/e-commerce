import Image from "next/image";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import { Button } from "./ui/button";

export function Slider() {

    return (
        <Carousel className="w-full my-4">
            <CarouselContent>
                <CarouselItem className="relative h-96">
                    <Image
                        src="/images/slider-01.jpg"
                        alt=""
                        quality={100}
                        fill
                        sizes="100vw"
                        style={{
                            objectFit: 'cover',
                        }}
                    />
                    <div className="absolute top-[30%] left-[5%] z-50">
                        <h1 className="lg:text-4xl text-xl font-bold">Men's Clothing</h1>
                        <h2 className="font-medium lg:text-lg text-md mt-4">Elevate Your Style with Our Men's Collection!</h2>
                        <Button variant="outline" className="mt-8">Shop Now</Button>
                    </div>
                </CarouselItem>
                <CarouselItem className="relative h-96">
                    <Image
                        src="/images/slider-02.jpg"
                        alt=""
                        quality={100}
                        fill
                        sizes="100vw"
                        style={{
                            objectFit: 'cover',
                        }}
                    />
                    <div className="absolute top-[30%] left-[5%] z-50">
                        <h1 className="lg:text-4xl text-xl font-bold">Women's Clothing</h1>
                        <h2 className="font-medium lg:text-lg text-md mt-4">Unleash Elegance with Women's Fashion!</h2>
                        <Button variant="outline" className="mt-8">Shop Now</Button>
                    </div>
                </CarouselItem>
                <CarouselItem className="relative h-96">
                    <Image
                        src="/images/slider-03.jpg"
                        alt=""
                        quality={100}
                        fill
                        sizes="100vw"
                        style={{
                            objectFit: 'cover',
                        }}
                    />
                    <div className="absolute top-[30%] left-[5%] z-50">
                        <h1 className="lg:text-4xl text-xl font-bold">Electronics</h1>
                        <h2 className="font-medium lg:text-lg text-md mt-4">Upgrade Your Tech Game Today!</h2>
                        <Button variant="outline" className="mt-8">Shop Now</Button>
                    </div>
                </CarouselItem>
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
        </Carousel>
    )
}
