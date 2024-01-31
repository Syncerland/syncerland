import { api } from "@src/lib/api/api";
import { apiErrorHandler } from "@src/lib/api/apiErrorHandler";
import { IApiResponse } from "@src/types/api.types";
import { User } from "@src/types/user.types";
import {
    UseMutationOptions,
    UseMutationResult,
    useMutation,
} from "@tanstack/react-query";
import { AxiosError } from "axios";

export interface UseLoginProps {
    email: string;
    password: string;
}

export interface UseLoginResponse {
    user: User;
}

export const useLogin = (
    options?: UseMutationOptions<
        IApiResponse<UseLoginResponse>,
        AxiosError<IApiResponse<null>>,
        UseLoginProps,
        unknown
    >
): UseMutationResult<
    IApiResponse<UseLoginResponse>,
    AxiosError<IApiResponse<null>>,
    UseLoginProps
> => {
    return useMutation<
        IApiResponse<UseLoginResponse>,
        AxiosError<IApiResponse<null>>,
        UseLoginProps
    >({
        mutationFn: async (props): Promise<IApiResponse<UseLoginResponse>> => {
            const response = await api.post<IApiResponse<UseLoginResponse>>(
                "/user/login",
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
