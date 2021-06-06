import { instances } from 'src/boot/axios';

const { apiApplication } = instances;

class UserRepository {
  getUserInfo() {
    return apiApplication.get('/userInfo');
  }

  login() {
    return apiApplication.get('/login');
  }

  register() {
    return apiApplication.get('/register');
  }
}

export const userRepository = new UserRepository();
