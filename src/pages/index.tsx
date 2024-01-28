import { Button } from "@nextui-org/react";
import PrimaryLayout from "@src/components/layouts/primary/primaryLayout";
import { NextPageWithLayout } from "./page";

const HomePage: NextPageWithLayout = () => {
    return (
        <main>
            <Button>hi</Button>
        </main>
    );
};

HomePage.getLayout = (page) => {
    const title = "Syncerland - Home";

    return <PrimaryLayout pageTitle={title}>{page}</PrimaryLayout>;
};

export default HomePage;
