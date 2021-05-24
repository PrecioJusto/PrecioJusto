import { instances } from 'src/boot/axios';

const { api_application } = instances;

class ProductRepository {
  getProducts() {
    return api_products.get('/all');
  }
}

export const productRepository = new ProductRepository();
