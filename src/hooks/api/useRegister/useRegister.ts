import { api } from "@src/lib/api/api";
import { apiErrorHandler } from "@src/lib/api/apiErrorHandler";
import { IApiResponse, ISuccessResponse } from "@src/types/api.types";
import {
    UseMutationOptions,
    UseMutationResult,
    useMutation,
} from "@tanstack/react-query";
import { AxiosError } from "axios";

export interface UseRegisterProps {
    name: string;
    email: string;
    password: string;
}

export const useRegister = (
    options?: UseMutationOptions<
        IApiResponse<ISuccessResponse>,
        AxiosError<IApiResponse<null>>,
        UseRegisterProps,
        unknown
    >
): UseMutationResult<
    IApiResponse<ISuccessResponse>,
    AxiosError<IApiResponse<null>>,
    UseRegisterProps
> => {
    return useMutation<
        IApiResponse<ISuccessResponse>,
        AxiosError<IApiResponse<null>>,
        UseRegisterProps
    >({
        mutationFn: async (props): Promise<IApiResponse<ISuccessResponse>> => {
            const response = await api.post<IApiResponse<ISuccessResponse>>(
                "/user/register",
                props
            );

            return response.data;
        },
        onError(errors) {
            apiErrorHandler(errors);
        },
        ...options,
    });
};
