import axios from 'axios';

const API_CONFIG = {
  baseURL: `https://es31-server.appspot.com/wtw`,
  timeout: 5000,
  withCredentials: true,
};

export const createAPI = () => {
  const api = axios.create(API_CONFIG);

  const onSuccess = (response) => response;
  const onFail = (error) => error;

  api.interceptors.response.use(onSuccess, onFail);

  return api;
};
