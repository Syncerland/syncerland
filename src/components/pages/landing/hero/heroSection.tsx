import backgroundImg from "@images/landing/landing-hero-bg.avif";
import { Button } from "@nextui-org/react";
import Image from "next/image";
import { FC } from "react";

interface HeroSectionProps {}

const HeroSection: FC<HeroSectionProps> = () => {
    return (
        <section className="flex my-10 flex-col gap-8 md:flex-row md:items-center">
            <div className="px-4 flex flex-col gap-4 lg:px-20">
                <h1 className="text-3xl font-extrabold lg:text-5xl lg:leading-[4rem]">
                    Managing Applied Jobs Made Simple
                </h1>

                <p className="lg:text-xl">
                    All-in-one Job management system that helps you track all
                    the jobs you have already applied for free!
                </p>

                <Button
                    color="primary"
                    size="md"
                    className="max-w-36 lg:text-base lg:font-bold lg:h-12"
                >
                    Get Started
                </Button>
            </div>

            <div className="flex relative my-8 justify-center overflow-hidden w-full xl:justify-end">
                <span className="flex h-[280px] w-[280px] sm:h-[450px] sm:w-[450px] md:h-[350px] md:w-[350px] lg:h-[450px] lg:w-[450px] xl:h-[500px] xl:w-[500px] xl:mr-16 rounded-full relative bg-primary-200 -z-10 " />
                <Image
                    src={backgroundImg}
                    alt="background"
                    className="w-96 object-contain absolute -right-20 top-1/2 -translate-y-1/2 shadow-md rounded-lg sm:w-[600px] md:w-[465px] lg:w-[600px]"
                />
            </div>
        </section>
    );
};

export default HeroSection;
