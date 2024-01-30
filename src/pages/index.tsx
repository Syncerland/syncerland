import GuestLayout from "@src/components/layouts/guest/guestLayout";
import PrimaryLayout from "@src/components/layouts/primary/primaryLayout";
import HeroSection from "@src/components/pages/landing/hero/heroSection";
import { NextPageWithLayout } from "../types/page";

const HomePage: NextPageWithLayout = () => {
    return (
        <div>
            <HeroSection />
        </div>
    );
};

HomePage.getLayout = (page) => {
    const title = "Syncerland - Home";

    return (
        <PrimaryLayout pageTitle={title}>
            <GuestLayout>{page}</GuestLayout>
        </PrimaryLayout>
    );
};

export default HomePage;
