import { IApiResponse } from "@src/types/api.types";
import { AxiosError } from "axios";
import { toast } from "react-toastify";

export const apiErrorHandler = (
    errors: AxiosError<IApiResponse<null>>
): void => {
    const allErrors = errors.response?.data.errors;
    if (!allErrors) {
        toast.error("Something went wrong");
        return;
    }

    allErrors.forEach((err) => {
        toast.error(err);
    });
};
