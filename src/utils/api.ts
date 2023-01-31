import type { AxiosHeaders } from 'axios';
import axios from 'axios';
import { get } from 'lodash';

// eslint-disable-next-line import/no-cycle
import Helper from './helpers';

const api = axios.create({
  baseURL: `${process.env.API_SERVER_BASE_URL}`,
});

api.interceptors.request.use((config) => {
  const webCookie = Helper.getWebCookie();
  if (config.headers) {
    if (webCookie?.token) {
      (config.headers as AxiosHeaders).set(
        'Authorization',
        `Bearer ${webCookie?.token}`,
      );
    }
    (config.headers as AxiosHeaders).set(
      'Accept-Timezone',
      Intl.DateTimeFormat().resolvedOptions().timeZone,
    );
  }

  return config;
});

api.interceptors.response.use(
  (response) => response.data,
  ({ message, response }) => {
    // eslint-disable-next-line prefer-promise-reject-errors
    return Promise.reject({
      data: get(response, 'data.data'),
      error: get(response, 'data.error', message),
      code: get(response, 'data.code', response?.status || -1),
    });
  },
);

export default api;
