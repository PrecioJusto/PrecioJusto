import { instances } from 'src/boot/axios';

const { apiApplication } = instances;

class UserRepository {
  getProfile() {
    return apiApplication.get('/profile');
  }

  register(data) {
    return apiApplication.post('/register', data);
  }

  login(data) {
    return apiApplication.post('/login', data);
  }

  loginGoogle(token) {
    return apiApplication.post(`/usergoogle/${token}`);
  }

  updateProfile(data) {
    return apiApplication.put('/profile', data);
  }

  getFavouriteProducts() {
    return apiApplication.get('/favourite');
  }

  addFavourite(data) {
    return apiApplication.post('/favourite', data);
  }

  deleteFavourite(paramsIds) {
    return apiApplication.delete(`/favourite/${paramsIds.userid}/${paramsIds.prodid}`);
  }

  getShoppingCartsByUser() {
    return apiApplication.get('/shoppingcarts');
  }

  getShoppingCartById(paramsIds) {
    return apiApplication.get(`/shoppingcart/${paramsIds.shopid}`);
  }

  addShoppingCart(data) {
    return apiApplication.post('/shoppingcart', data);
  }

  updateShoppingCart(data) {
    return apiApplication.put('/shoppingcart', data);
  }

  deleteShoppingCart(paramsIds) {
    return apiApplication.delete(`/shoppingcart/${paramsIds.shopid}`);
  }

  addProductInShoppingCart(data) {
    return apiApplication.post('/shoppingcartproduct', data);
  }

  updateProductShoppingCart(data) {
    return apiApplication.put('/shoppingcartproduct', data);
  }

  deleteProductShoppingCart(paramsIds) {
    return apiApplication.delete(`/shoppingcartproduct/${paramsIds.prodid}/${paramsIds.shopid}`);
  }
}

export const userRepository = new UserRepository();
