import axios from 'axios';
import { AxiosInstance } from "axios";
import { AxiosRequestConfig } from "axios";

const config: AxiosRequestConfig = {
    baseURL: 'http://localhost:4000',
};

export const client: AxiosInstance = axios.create(config);