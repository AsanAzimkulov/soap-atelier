import axios, { AxiosError, AxiosResponse } from "axios";

export const BACKEND_URL = 'https://6314a4c3fc9dc45cb4f0fb52.mockapi.io/soapAtelier/';
const REQUEST_TIMEOUT = 5000;

export enum HttpCode {
  NOT_FOUND = 404,
  UNAVAILABLE = 503,
}

export const createAPI = () => {
  const api = axios.create({
    baseURL: BACKEND_URL,
    timeout: REQUEST_TIMEOUT
  });

  api.interceptors.response.use(
    (response: AxiosResponse) => response,

    (error: AxiosError) => {
      const response = error;

      return Promise.reject(error);
    }
  );

  return api;
}