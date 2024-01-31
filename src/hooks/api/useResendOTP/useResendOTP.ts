import { api } from "@src/lib/api/api";
import { apiErrorHandler } from "@src/lib/api/apiErrorHandler";
import { IApiResponse, ISuccessResponse } from "@src/types/api.types";
import {
    UseMutationOptions,
    UseMutationResult,
    useMutation,
} from "@tanstack/react-query";
import { AxiosError } from "axios";

export interface UseResendOTPProps {
    email: string;
}

export const useResendOTP = (
    options?: UseMutationOptions<
        IApiResponse<ISuccessResponse>,
        AxiosError<IApiResponse<null>>,
        UseResendOTPProps,
        unknown
    >
): UseMutationResult<
    IApiResponse<ISuccessResponse>,
    AxiosError<IApiResponse<null>>,
    UseResendOTPProps
> => {
    return useMutation<
        IApiResponse<ISuccessResponse>,
        AxiosError<IApiResponse<null>>,
        UseResendOTPProps
    >({
        mutationFn: async (props): Promise<IApiResponse<ISuccessResponse>> => {
            const response = await api.post<IApiResponse<ISuccessResponse>>(
                "/user/resendOTP",
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
