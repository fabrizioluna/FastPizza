import { authCookieStorage } from '@/utils/localStorage/localStorageHandler';
import axios from 'axios';
import { AxiosInstance } from "axios";
import { AxiosRequestConfig } from "axios";

const config: AxiosRequestConfig = {
    baseURL: process.env.NEXT_PUBLIC_URL,
};

export const client: AxiosInstance = axios.create(config);

client.interceptors.request.use(async(config: any) => {
    const cookie = await authCookieStorage()?.get();

    if(cookie?.status){ 
        config.headers = { 
            'Authorization': `Bearer ${cookie.data.jwt}`,
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          }
        return config;
    }
    return config;
    },
        ((error) =>  {
        return Promise.reject(error);
    }
));