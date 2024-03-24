import { Button, Input } from "@nextui-org/react";
import GuestLayout from "@src/components/layouts/guest/guestLayout";
import PrimaryLayout from "@src/components/layouts/primary/primaryLayout";
import { NextPageWithLayout } from "@src/types/page";
import { IconMail } from "@tabler/icons-react";

const ContactUsPage: NextPageWithLayout = () => {
    return (
        <div className="flex h-[calc(100vh-4.5rem)]">
            <div className="flex flex-col w-full xl:w-1/2 px-5 lg:px-20 justify-center">
                <h2 className="font-bold text-primary-700 md:text-2xl">
                    ~ WAYS TO CONTACT US
                </h2>

                <form className="flex flex-col gap-3 mt-5">
                    <p>You can contact us using this form below: </p>
                    <Input label="name" />
                    <Input label="email" />
                    <Input label="message" />

                    <Button
                        type="submit"
                        color="primary"
                        className="self-start"
                    >
                        Submit
                    </Button>
                </form>

                <div className="flex flex-col gap-5 mt-10">
                    <div className="flex gap-2">
                        <IconMail />
                        <a href="mailto:syncerland@gmail.com">
                            syncerland@gmail.com
                        </a>
                    </div>
                </div>
            </div>

            <div className="bg-primary-500 flex-1 relative hidden xl:flex justify-center items-center overflow-hidden">
                <h1 className="text-5xl text-white font-extrabold">
                    CONTACT US
                </h1>

                <div className="w-96 h-96 rounded-full bg-slate-200 absolute opacity-50 -bottom-28 -right-28"></div>
                <div className="w-52 h-52 rounded-full bg-slate-200 opacity-50 absolute bottom-28 right-28"></div>
            </div>
        </div>
    );
};

ContactUsPage.getLayout = (page) => {
    const title = "Syncerland - Contact Us";

    return (
        <PrimaryLayout pageTitle={title}>
            <GuestLayout>{page}</GuestLayout>
        </PrimaryLayout>
    );
};

export default ContactUsPage;
