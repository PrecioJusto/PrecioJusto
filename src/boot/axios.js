import Vue from 'vue';
import axios from 'axios';
import GAuth from 'vue-google-oauth2';
import { Notify, LocalStorage } from 'quasar';
import { getMessageFromCode } from 'src/utils/responseMapper';

// import router from 'src/router';

const url = require('url');

const options = {
  clientId: '59668076614-icj2iqpani04tvkvk5met0aaif4tptg1.apps.googleusercontent.com',
};

Vue.use(GAuth, options);

let notificationType = 'positive';

const apiApplication = axios.create({
  baseURL: 'https://preciojusto.app/api',
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
      config.headers.common.Authorization = `Bearer ${LocalStorage.getItem('auth_token')}`;
      return config;
    },
    (error) => Promise.reject(error),
  );

  instance.interceptors.response.use(
    (response) => {
      const conf = url.parse(response.config.url);
      if (conf.pathname === '/register') createNotification(notificationType, `Te has registrado correctamente con el correo ${response.data.useremail}`);
      return response;
    },
    (error) => {
      notificationType = 'negative';
      if (error && error.response) {
        createNotification(notificationType, getMessageFromCode(error.response.data.messageError));
      } else {
        createNotification(notificationType, 'Error desconocido');
      }
      return Promise.reject(error);
    },
  );
});
