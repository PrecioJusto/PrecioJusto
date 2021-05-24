import { productRepository } from 'src/core/ProductRepository.js';

export default {
  name: 'PageIndex',
  data: {
  },
  created() {
    productRepository.getProducts();
  },
};
