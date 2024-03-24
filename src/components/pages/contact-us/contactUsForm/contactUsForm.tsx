import { Button, Input, Textarea } from "@nextui-org/react";
import { FC, useEffect } from "react";
import { toast } from "react-toastify";
import { useContactUsForm } from "./useContactUsForm";

const ContactUsForm: FC = () => {
    const {
        register,
        formState: { errors, isSubmitSuccessful },
        handleSubmit,
        reset,
    } = useContactUsForm();

    const submitHandler = handleSubmit(() => {
        toast.success("Your message is sent successfully");
    });

    useEffect(() => {
        reset();
    }, [isSubmitSuccessful]);

    return (
        <form onSubmit={submitHandler} className="flex flex-col gap-3 mt-5">
            <p>You can contact us using this form below: </p>
            <Input
                isRequired
                label="name"
                {...register("name")}
                errorMessage={errors.name?.message}
                isInvalid={!!errors.name}
            />
            <Input
                isRequired
                label="email"
                {...register("email")}
                errorMessage={errors.email?.message}
                isInvalid={!!errors.email}
            />
            <Textarea
                isRequired
                maxRows={3}
                label="message"
                {...register("message")}
                errorMessage={errors.message?.message}
                isInvalid={!!errors.message}
            />

            <Button type="submit" color="primary" className="self-start">
                Submit
            </Button>
        </form>
    );
};

export default ContactUsForm;
