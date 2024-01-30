import PrimaryLayout from "@src/components/layouts/primary/primaryLayout";
import HeroSection from "@src/components/pages/landing/hero/heroSection";
import Navbar from "@src/components/pages/landing/navbar/navbar";
import { NextPageWithLayout } from "../types/page";

const HomePage: NextPageWithLayout = () => {
    return (
        <div className="py-4 relative">
            <Navbar />
            <HeroSection />
        </div>
    );
};

HomePage.getLayout = (page) => {
    const title = "Syncerland - Home";

    return <PrimaryLayout pageTitle={title}>{page}</PrimaryLayout>;
};

export default HomePage;
