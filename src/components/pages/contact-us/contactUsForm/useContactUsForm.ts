import { zodResolver } from "@hookform/resolvers/zod";
import { UseFormProps, UseFormReturn, useForm } from "react-hook-form";
import { z as zod } from "zod";

interface ContactUsFormData {
    name: string;
    email: string;
    message: string;
}

const schema = zod.object({
    name: zod
        .string({
            required_error: "Name is required",
            invalid_type_error: "Name must be string",
        })
        .trim()
        .min(1, "Name is required"),
    email: zod
        .string({
            required_error: "Email is required",
            invalid_type_error: "Email must be string",
        })
        .trim()
        .email("Enter your email in correct format"),
    message: zod
        .string({
            required_error: "Message is required",
            invalid_type_error: "Message must be string",
        })
        .trim()
        .min(1, "Message is required"),
});

export const useContactUsForm = (
    props?: UseFormProps<ContactUsFormData>
): UseFormReturn<ContactUsFormData, any, undefined> => {
    return useForm<ContactUsFormData>({
        resolver: zodResolver(schema),
        mode: "onSubmit",
        ...props,
    });
};
