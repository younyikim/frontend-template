import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios';

export const BASE_URL =
  process.env.NODE_ENV === 'development'
    ? process.env.NEXT_PUBLIC_SAMPLE_API_URL_DEV
    : process.env.NEXT_PUBLIC_SAMPLE_API_URL_PROD;

/**
 * Axios Instance
 */
export const client = (() => {
  return axios.create({
    baseURL: BASE_URL,
    headers: {
      Accept: 'application/json, text/plain, */*',
    },
  });
})();

/**
 * 공통 메서드 `onSuccess`, `onError` 반환
 */
const _returnSettledMethods = () => {
  const onSuccess = (response: AxiosResponse) => {
    return response?.data;
  };
  const onError = (error: AxiosError) => {
    return Promise.reject(error);
  };

  return { onSuccess, onError };
};

export const request = async (options: AxiosRequestConfig) => {
  const { onSuccess, onError } = _returnSettledMethods();
  return client(options).then(onSuccess).catch(onError);
};
