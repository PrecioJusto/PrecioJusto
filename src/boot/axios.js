import Vue from 'vue';
import axios from 'axios';
import GAuth from 'vue-google-oauth2';
import { Notify, LocalStorage } from 'quasar';
import getMessageFromCode from 'src/utils/responseMapper';

// import router from 'src/router';

const url = require('url');

const options = {
  clientId: '199037206764-oudsdaqhau4s38u03cs9eiuui332fm8f.apps.googleusercontent.com',
};

Vue.use(GAuth, options);

const apiApplication = axios.create({
  baseURL: 'https://preciojusto.app/api',
});

const apiProducts = axios.create({
  baseURL: 'https://preciojustoapp.z126.esliceu.tk:12643/api',
});

function createNotification(notifyType, msg) {
  Notify.create({
    type: notifyType,
    message: msg,
  });
}

export const instances = { apiApplication, apiProducts };

[apiApplication, apiProducts].forEach((instance) => {
  instance.interceptors.request.use(
    (config) => {
      config.withCredentials = true;
      config.headers.common.Authorization = `Bearer ${LocalStorage.getItem('auth_token')}`;
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
      if (error && error.response && error.response.data.messageError) {
        createNotification('negative', getMessageFromCode(error.response.data.messageError));
      } else if (error.response.status !== 401) {
        createNotification('negative', 'Error desconocido');
      }
      return Promise.reject(error);
    },
  );
});
