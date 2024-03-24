import { Avatar, Button } from "@nextui-org/react";
import { GithubIcon } from "@src/components/icons/github";
import GuestLayout from "@src/components/layouts/guest/guestLayout";
import PrimaryLayout from "@src/components/layouts/primary/primaryLayout";
import { NextPageWithLayout } from "@src/types/page";

const AboutUsPage: NextPageWithLayout = () => {
    return (
        <div className="flex h-[calc(100vh-4.5rem)]">
            <div className="flex flex-col px-5 py-5 justify-center xl:w-1/2 lg:px-20">
                <h2 className="font-bold text-primary-700 md:text-2xl">
                    ~ WHO WE ARE
                </h2>

                <div className="flex flex-col gap-2 sm:mt-5">
                    <h3 className="md:text-xl">We Help you save time!</h3>

                    <p className="text-sm sm:max-w-[50rem] text-justify md:text-base">
                        The platform is built for the job seekers to manage and
                        analyze their job hunting process. and we made it free
                        to use for everyone and keep their private info safe and
                        secure. we will not share any of your personal data with
                        any government or organization. feel free to use it and
                        contribute to the project!
                    </p>
                </div>

                <div className="flex gap-4 items-center mt-5">
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://github.com/Syncerland"
                    >
                        <Button
                            isIconOnly
                            className="rounded-full bg-transparent"
                        >
                            <GithubIcon className="h-20 w-20" />
                        </Button>
                    </a>
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://github.com/nima-ca"
                    >
                        <Button
                            isIconOnly
                            className="rounded-full bg-transparent"
                        >
                            <Avatar
                                name="nima"
                                src="https://avatars.githubusercontent.com/u/96515904?s=96&v=4"
                            />
                        </Button>
                    </a>
                </div>
            </div>

            <div className="bg-primary-500 flex-1 relative hidden xl:flex justify-center items-center overflow-hidden">
                <h1 className="text-5xl text-white font-extrabold">About US</h1>

                <div className="w-96 h-96 rounded-full bg-slate-200 absolute opacity-50 -bottom-28 -right-28"></div>
                <div className="w-52 h-52 rounded-full bg-slate-200 opacity-50 absolute bottom-28 right-28"></div>
            </div>
        </div>
    );
};

AboutUsPage.getLayout = (page) => {
    const title = "Syncerland - About Us";

    return (
        <PrimaryLayout pageTitle={title}>
            <GuestLayout>{page}</GuestLayout>
        </PrimaryLayout>
    );
};

export default AboutUsPage;
