import { zodResolver } from "@hookform/resolvers/zod";
import { PASSWORD_REGEX } from "@src/lib/utils/regex";
import { UseFormProps, UseFormReturn, useForm } from "react-hook-form";
import { z as zod } from "zod";

interface RegisterFormData {
    name: string;
    email: string;
    password: string;
    confirmPassword: string;
}

const schema = zod
    .object({
        name: zod
            .string({
                required_error: "Name is required",
                invalid_type_error: "Name must be string",
            })
            .trim()
            .min(1, { message: "Name must be at least 1 character" }),
        email: zod
            .string({
                required_error: "Email is required",
                invalid_type_error: "Email must be string",
            })
            .trim()
            .email("Enter your email in correct format"),
        password: zod
            .string({
                required_error: "Password is required",
                invalid_type_error: "Password must be string",
            })
            .min(8, "Your password must be at least 8 characters")
            .max(128, "Your password must be at most 128 characters")
            .regex(
                PASSWORD_REGEX,
                "Your password must include at least a symbol, upper and lower case letters and a number"
            ),
        confirmPassword: zod
            .string({
                required_error: "Confirm password is required",
                invalid_type_error: "Confirm password must be string",
            })
            .min(8, "Your Confirm password must be at least 8 characters")
            .max(128, "Your Confirm password must be at most 128 characters")
            .regex(
                PASSWORD_REGEX,
                "Your Confirm password must include at least a symbol, upper and lower case letters and a number"
            ),
    })
    .refine((data) => data.password === data.confirmPassword, {
        message: "Password and Confirm Password don't match",
        path: ["confirmPassword"],
    });

export const useRegisterForm = (
    props?: UseFormProps<RegisterFormData>
): UseFormReturn<RegisterFormData, any, undefined> => {
    return useForm<RegisterFormData>({
        resolver: zodResolver(schema),
        mode: "onTouched",
        ...props,
    });
};
