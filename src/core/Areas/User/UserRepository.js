import { instances } from 'src/boot/axios';

const { apiApplication } = instances;

class UserRepository {
  getUserInfo() {
    return apiApplication.get('/userInfo');
  }

  login(data) {
    return apiApplication.post('/login', data);
  }

  register(data) {
    return apiApplication.post('/register', data);
  }
}

export const userRepository = new UserRepository();
