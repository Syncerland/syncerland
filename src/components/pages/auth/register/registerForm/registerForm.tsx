import { Button, Input, Link } from "@nextui-org/react";
import PasswordInput from "@src/components/ui/inputs/password/passwordInput";
import { FC, FormEvent } from "react";

interface RegisterFormProps {}

const RegisterForm: FC<RegisterFormProps> = () => {
    const submitHandler = (e: FormEvent<HTMLFormElement>): void => {
        e.preventDefault();
    };

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
                <Input isRequired size="md" radius="lg" label="Name" />
                <Input isRequired size="md" radius="lg" label="Email" />
                <PasswordInput
                    isRequired
                    size="md"
                    radius="lg"
                    label="Password"
                />
                <PasswordInput
                    isRequired
                    size="md"
                    radius="lg"
                    label="Confirm Password"
                />

                <p className="text-xs">
                    Your password must include at least 8 characters, a number
                    and a symbol.
                </p>
            </div>

            <Button color="primary" type="submit" fullWidth>
                Register
            </Button>
        </form>
    );
};

export default RegisterForm;
