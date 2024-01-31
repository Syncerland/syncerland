import bgImg from "@images/404/404-bg.svg";
import { Button } from "@nextui-org/react";
import GuestLayout from "@src/components/layouts/guest/guestLayout";
import PrimaryLayout from "@src/components/layouts/primary/primaryLayout";
import { NextPageWithLayout } from "@src/types/page";
import Image from "next/image";
import { useRouter } from "next/router";

const NotFoundPage: NextPageWithLayout = () => {
    const router = useRouter();

    return (
        <section className="flex flex-col items-center justify-center h-[90vh]">
            <Image
                src={bgImg}
                alt="404"
                className="w-[280px] sm:w-[400px] md:w-[500px]"
                priority
            />

            <div className="flex flex-col gap-5 w-72 sm:w-80">
                <h1 className="font-bold text-center text-xl sm:text-2xl">
                    Page Not Found!
                </h1>
                <div className="flex gap-3 w-full">
                    <Button
                        fullWidth
                        variant="solid"
                        size="md"
                        color="primary"
                        onClick={() => {
                            router.push("/");
                        }}
                    >
                        Home
                    </Button>

                    <Button
                        fullWidth
                        variant="bordered"
                        size="md"
                        color="primary"
                        onClick={() => {
                            router.push("/app");
                        }}
                    >
                        App
                    </Button>
                </div>
            </div>
        </section>
    );
};

NotFoundPage.getLayout = (page) => {
    const title = "Syncerland - Not Found";

    return (
        <PrimaryLayout pageTitle={title}>
            <GuestLayout>{page}</GuestLayout>
        </PrimaryLayout>
    );
};

export default NotFoundPage;
