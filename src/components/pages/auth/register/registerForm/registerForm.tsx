import { Button, Input, Link } from "@nextui-org/react";
import PasswordInput from "@src/components/ui/inputs/password/passwordInput";
import { useRegister } from "@src/hooks/api/useRegister/useRegister";
import { FC } from "react";
import { toast } from "react-toastify";
import { useRegisterForm } from "./useRegisterForm";

interface RegisterFormProps {}

const RegisterForm: FC<RegisterFormProps> = () => {
    const {
        register,
        formState: { errors, touchedFields },
        handleSubmit,
    } = useRegisterForm();

    const registerMutation = useRegister({
        onSuccess() {
            toast.success("Your registration was successful!");
            // TODO: redirect user to email verification page
        },
    });

    const submitHandler = handleSubmit(({ name, email, password }) => {
        registerMutation.mutate({
            name,
            email,
            password,
        });
    });

    return (
        <form
            onSubmit={submitHandler}
            className="flex flex-col gap-6 w-full max-w-[448px]"
        >
            <div className="flex flex-col gap-3">
                <h2 className="text-2xl font-bold">Register In Syncerland</h2>

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
