import bgImg from "@images/auth/register/register-bg.png";
import GuestLayout from "@src/components/layouts/guest/guestLayout";
import PrimaryLayout from "@src/components/layouts/primary/primaryLayout";
import RegisterForm from "@src/components/pages/auth/register/registerForm/registerForm";
import { NextPageWithLayout } from "@src/types/page";
import Image from "next/image";

const RegisterPage: NextPageWithLayout = () => {
    return (
        <div className="flex">
            <section className="hidden md:flex flex-[1] xl:flex-[3] flex-col px-5 justify-center items-center bg-gray-100">
                <Image
                    src={bgImg}
                    alt="Register you account"
                    priority
                    className="object-contain lg:w-[800px]"
                />
            </section>
            <section className="flex flex-1 min-h-screen items-center justify-center px-4 w-full md:px-10 xl:px-16">
                <RegisterForm />
            </section>
        </div>
    );
};

RegisterPage.getLayout = (page) => {
    const title = "Syncerland - Register";

    return (
        <PrimaryLayout pageTitle={title}>
            <GuestLayout>{page}</GuestLayout>
        </PrimaryLayout>
    );
};

export default RegisterPage;
