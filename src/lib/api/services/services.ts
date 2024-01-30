import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";
import { IApi } from "./services.types";

export const createAxiosInstance = (baseUrl: string): AxiosInstance => {
    return axios.create({
        baseURL: baseUrl,
        withCredentials: true,
    });
};

export class Api implements IApi {
    // eslint-disable-next-line no-unused-vars
    constructor(private readonly axios: AxiosInstance) {}
    get<T>(
        url: string,
        config: AxiosRequestConfig = {}
    ): Promise<AxiosResponse<T, any>> {
        return this.axios.get<T>(url, config);
    }
    post<T>(
        url: string,
        body: unknown,
        config: AxiosRequestConfig = {}
    ): Promise<AxiosResponse<T, any>> {
        return this.axios.post<T>(url, body, config);
    }
    delete<T>(
        url: string,
        body: unknown,
        config: AxiosRequestConfig = {}
    ): Promise<AxiosResponse<T, any>> {
        return this.axios.delete<T>(url, { data: body, ...config });
    }
    put<T>(
        url: string,
        body: unknown,
        config: AxiosRequestConfig = {}
    ): Promise<AxiosResponse<T, any>> {
        return this.axios.put<T>(url, body, config);
    }
    patch<T>(
        url: string,
        body: unknown,
        config: AxiosRequestConfig = {}
    ): Promise<AxiosResponse<T, any>> {
        return this.axios.patch<T>(url, body, config);
    }

    defaults = this.axios.defaults;
}
