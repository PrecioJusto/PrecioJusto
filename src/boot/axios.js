import axios from 'axios';
import { Notify } from 'quasar';
import router from 'src/router';

const instance1 = axios.create({
  url: 'http://server247.cfgs.esliceu.net',
});

const instance2 = axios.create({
  url: 'http://server247.cfgs.esliceu.net',
});

export const instances = { instance1, instance2 };

[instance1, instance2].forEach((instance) => {
  instance.interceptors.request.use(
    (config) => {
      config.withCredentials = true;
      config.headers.common.Authorization = localStorage.getItem('auth_token');
      return config;
    },
    (error) => Promise.reject(error),
  );

  instance.interceptors.response.use(
    (response) => {
      if (JSON.stringify(response.data.notifyType)) {
        Notify.create({
          type: 'positive',
          message: JSON.stringify(response.data.notifyMessage),
        });
      }
      return response;
    },
    (error) => {
      if (error && error.response && error.response.status === 401) {
        if (JSON.stringify(error.response.data.notifyType)) {
          Notify.create({
            type: 'negative',
            message: JSON.stringify(error.response.data.notifyMessage),
          });
        }

        router.push('/login');
      } else {
        Notify.create({
          type: 'negative',
          message: 'Error desconegut',
        });
      }
      return Promise.reject(error);
    },
  );
});
