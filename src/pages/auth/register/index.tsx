import bgImg from "@images/auth/register/register-bg.png";
import GuestLayout from "@src/components/layouts/guest/guestLayout";
import PrimaryLayout from "@src/components/layouts/primary/primaryLayout";
import RegisterForm from "@src/components/pages/auth/register/registerForm/registerForm";
import { RegisterPageSteps } from "@src/components/pages/auth/register/registerPage.constants";
import VerifyForm from "@src/components/pages/auth/shared/verifyForm/verifyForm";
import { NextPageWithLayout } from "@src/types/page";
import Image from "next/image";
import { useState } from "react";

const RegisterPage: NextPageWithLayout = () => {
    const [step, setStep] = useState<RegisterPageSteps>(
        RegisterPageSteps.RegisterForm
    );

    const toggleSteps = (): void => {
        setStep((prevStep) =>
            prevStep === RegisterPageSteps.RegisterForm
                ? RegisterPageSteps.VerifyForm
                : RegisterPageSteps.RegisterForm
        );
    };

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
                {step === RegisterPageSteps.RegisterForm && (
                    <RegisterForm toggleStep={toggleSteps} />
                )}
                {step === RegisterPageSteps.VerifyForm && <VerifyForm />}
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
