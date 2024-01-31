import { api } from "@src/lib/api/api";
import { apiErrorHandler } from "@src/lib/api/apiErrorHandler";
import { IApiResponse, ISuccessResponse } from "@src/types/api.types";
import {
    UseMutationOptions,
    UseMutationResult,
    useMutation,
} from "@tanstack/react-query";
import { AxiosError } from "axios";

export interface UseVerifyUserProps {
    email: string;
    OTP: string;
}

export const useVerifyUser = (
    options?: UseMutationOptions<
        IApiResponse<ISuccessResponse>,
        AxiosError<IApiResponse<null>>,
        UseVerifyUserProps,
        unknown
    >
): UseMutationResult<
    IApiResponse<ISuccessResponse>,
    AxiosError<IApiResponse<null>>,
    UseVerifyUserProps
> => {
    return useMutation<
        IApiResponse<ISuccessResponse>,
        AxiosError<IApiResponse<null>>,
        UseVerifyUserProps
    >({
        mutationFn: async (props): Promise<IApiResponse<ISuccessResponse>> => {
            const response = await api.post<IApiResponse<ISuccessResponse>>(
                "/user/verify",
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
