import { productRepository } from 'src/core/Areas/Products/ProductRepository.js';

export default {
  name: 'PageIndex',
  data: {
  },
  created() {
    productRepository.getProducts();
  },
};
