import PrimaryLayout from "@src/components/layouts/primary/primaryLayout";
import { NextPageWithLayout } from "./page";

const HomePage: NextPageWithLayout = () => {
    return (
        <div>
            <nav>Navbar</nav>
            <section>Hero Section</section>
            <section>Cta</section>
            <footer>Footer</footer>
        </div>
    );
};

HomePage.getLayout = (page) => {
    const title = "Syncerland - Home";

    return <PrimaryLayout pageTitle={title}>{page}</PrimaryLayout>;
};

export default HomePage;
