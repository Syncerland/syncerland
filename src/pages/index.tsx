import PrimaryLayout from "@src/components/layouts/primary/primaryLayout";
import Navbar from "@src/components/pages/landing/navbar/navbar";
import { NextPageWithLayout } from "./page";

const HomePage: NextPageWithLayout = () => {
    return (
        <div className="py-4 relative">
            <Navbar />
            {/* <section>Hero Section</section>
            <section>Cta</section>
            <footer>Footer</footer> */}
        </div>
    );
};

HomePage.getLayout = (page) => {
    const title = "Syncerland - Home";

    return <PrimaryLayout pageTitle={title}>{page}</PrimaryLayout>;
};

export default HomePage;
