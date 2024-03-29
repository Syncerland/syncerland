import { Button, Input, Link } from "@nextui-org/react";
import PasswordInput from "@src/components/ui/inputs/password/passwordInput";
import { useRegister } from "@src/hooks/api/useRegister/useRegister";
import { useRouter } from "next/router";
import { FC } from "react";
import { toast } from "react-toastify";
import { useRegisterForm } from "./useRegisterForm";

interface RegisterFormProps {
    toggleStep: () => void;
}

const RegisterForm: FC<RegisterFormProps> = ({ toggleStep }) => {
    const router = useRouter();

    const registerMutation = useRegister({
        onSuccess(_, payload) {
            // Add email address to query params
            router.push({
                ...router,
                query: {
                    ...router.query,
                    email: payload.email,
                },
            });
            toast.success("Your registration was successful!");
            toggleStep();
        },
    });

    const {
        register,
        formState: { errors, touchedFields },
        handleSubmit,
    } = useRegisterForm();

    const submitHandler = handleSubmit(({ name, email, password }) => {
        registerMutation.mutate({
            password,
            name: name.trim(),
            email: email.trim().toLowerCase(),
        });
    });

    return (
        <form
            onSubmit={submitHandler}
            className="flex flex-col gap-6 w-full max-w-[448px]"
        >
            <div className="flex flex-col gap-3">
                <h1 className="lg:flex text-2xl xl:text-3xl font-bold">
                    Welcome to the Syncerland!
                </h1>

                <p className="text-sm">
                    Already have an account?{" "}
                    <Link
                        href="/auth/login"
                        className="text-sm"
                        underline="always"
                    >
                        Login here
                    </Link>
                </p>
            </div>

            <div className="flex flex-col gap-2">
                <Input
                    {...register("name")}
                    isRequired
                    size="md"
                    radius="lg"
                    label="Name"
                    isInvalid={touchedFields.name && !!errors.name}
                    errorMessage={errors.name?.message}
                />
                <Input
                    {...register("email")}
                    isRequired
                    size="md"
                    radius="lg"
                    label="Email"
                    isInvalid={touchedFields.email && !!errors.email}
                    errorMessage={errors.email?.message}
                />
                <PasswordInput
                    {...register("password")}
                    isRequired
                    size="md"
                    radius="lg"
                    label="Password"
                    isInvalid={touchedFields.password && !!errors.password}
                    errorMessage={errors.password?.message}
                />
                <PasswordInput
                    {...register("confirmPassword")}
                    isRequired
                    size="md"
                    radius="lg"
                    label="Confirm Password"
                    isInvalid={
                        touchedFields.confirmPassword &&
                        !!errors.confirmPassword
                    }
                    errorMessage={errors.confirmPassword?.message}
                />

                <p className="text-xs">
                    Your password must include at least 8 characters, Upper and
                    lower case letter, a number and a symbol.
                </p>
            </div>

            <Button
                color="primary"
                type="submit"
                fullWidth
                isLoading={registerMutation.isPending}
            >
                Register
            </Button>
        </form>
    );
};

export default RegisterForm;
