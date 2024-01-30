export interface IApiResponse<T> {
    data: T;
    errors: string[] | null;
    statusCode: number;
}

export interface ISuccessResponse {
    success: boolean;
}
