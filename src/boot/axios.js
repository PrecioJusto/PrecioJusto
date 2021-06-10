// import Vue from 'vue';
import axios from 'axios';
import { Notify } from 'quasar';
// import router from 'src/router';
// import router from 'src/router';

const url = require('url');

const apiApplication = axios.create({
  baseURL: 'http://ec2-18-220-122-6.us-east-2.compute.amazonaws.com:5000',
});

const apiProducts = axios.create({
  baseURL: 'http://preciojustoapp.z126.esliceu.tk:12650',
});

function createNotification(type, msg) {
  Notify.create({
    type,
    message: msg,
  });
}

export const instances = { apiApplication, apiProducts };

[apiApplication, apiProducts].forEach((instance) => {
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
      const conf = url.parse(response.config.url);
      if (conf.pathname === '/register') createNotification('positive', `Te has registrado correctamente con el correo ${response.data.useremail}`);

      return response;
    },
    (error) => {
      if (error && error.response) {
        if (error.response.status === 401) {
          // router.push('/login');
        }
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
