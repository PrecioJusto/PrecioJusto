import { instances } from 'src/boot/axios';

const { apiApplication } = instances;

class UserRepository {
  getUserInfo() {
    return apiApplication.get('/userInfo');
  }
}

export const userRepository = new UserRepository();
