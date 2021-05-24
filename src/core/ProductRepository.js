import { instances } from 'src/boot/axios';

const { instance1 } = instances;

class ProductRepository {
  getProducts() {
    return instance1.get('/all');
  }
}

export const productRepository = new ProductRepository();
