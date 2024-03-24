import { zodResolver } from "@hookform/resolvers/zod";
import { PASSWORD_REGEX } from "@src/lib/utils/regex";
import { UseFormProps, UseFormReturn, useForm } from "react-hook-form";
import { z as zod } from "zod";

interface LoginFormData {
    email: string;
    password: string;
}

const schema = zod.object({
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
});

export const useLoginForm = (
    props?: UseFormProps<LoginFormData>
): UseFormReturn<LoginFormData, any, undefined> => {
    return useForm<LoginFormData>({
        resolver: zodResolver(schema),
        mode: "onTouched",
        ...props,
    });
};
