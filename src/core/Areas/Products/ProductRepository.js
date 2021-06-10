import { instances } from 'src/boot/axios';

const { apiProducts } = instances;

class ProductRepository {
  getProducts() {
    return apiProducts.get('/products');
  }
}

export const productRepository = new ProductRepository();
