import { Api, createAxiosInstance } from "./services/services";

const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL as string;
const instance = createAxiosInstance(BASE_URL);

export const api = new Api(instance);
