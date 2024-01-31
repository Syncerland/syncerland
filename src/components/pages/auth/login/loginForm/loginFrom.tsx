import { Button, Input, Link } from "@nextui-org/react";
import PasswordInput from "@src/components/ui/inputs/password/passwordInput";
import { useLogin } from "@src/hooks/api/useLogin/useLogin";
import { setUser } from "@src/lib/utils/user";
import { useRouter } from "next/router";
import { FC } from "react";
import { toast } from "react-toastify";
import { useLoginForm } from "./useLoginForm";

interface LoginFormProps {}

const LoginForm: FC<LoginFormProps> = () => {
    const router = useRouter();

    const loginMutation = useLogin({
        onSuccess(data) {
            setUser(data.data.user);
            router.push("/app");
            toast.success("You are logged in successfully!");
        },
    });

    const {
        register,
        formState: { errors, touchedFields },
        handleSubmit,
    } = useLoginForm();

    const submitHandler = handleSubmit(({ email, password }) => {
        loginMutation.mutate({
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
                <h1 className="lg:flex text-2xl xl:text-3xl font-bold">
                    Welcome Back!
                </h1>

                <p className="text-sm">
                    New to syncerland?{" "}
                    <Link
                        href="/auth/register"
                        className="text-sm"
                        underline="always"
                    >
                        Register here
                    </Link>
                </p>
            </div>

            <div className="flex flex-col gap-2">
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
            </div>

            <Button
                color="primary"
                type="submit"
                fullWidth
                isLoading={loginMutation.isPending}
            >
                Login
            </Button>
        </form>
    );
};

export default LoginForm;
