import axios, { CreateAxiosDefaults } from 'axios';

export const createBaseAxiosInstance = (
    configOverrides: CreateAxiosDefaults = {}
) => {
    const baseURL = import.meta.env.VITE_TMDB_API_URL;
    return axios.create({
        baseURL,
        ...configOverrides,
        params: {
            'api_key': import.meta.env.VITE_TMDB_API_KEY,
        }
    });
};