import axios from 'axios';

export const createAPI = () => {
  const api = axios.create({
    baseURL: `https://es31-server.appspot.com/wtw`,
    timeout: 5000,
    withCredentials: true,
  });

  const onSuccess = (response) => response;

  const onFail = (err) => {
    if (err.response.status === 403) {
      history.pushState(null, null, `/login`);
    }
    return err;
  };

  api.interceptors.response.use(onSuccess, onFail);

  return api;
};
