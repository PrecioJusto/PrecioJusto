import { productRepository } from 'src/core/Areas/Products/ProductRepository.js';
import ProductListComponent from 'src/components/ProductListComponent/ProductListComponent.vue';

export default {
  name: 'ProductList',
  components: { ProductListComponent },
  data() {
    return {
      products: [],
    };
  },
  async created() {
    if (this.$route.params.categoria) {
      const rawData = await productRepository.getAllProductsFromCatename({ catename: this.$route.params.categoria });
      if (rawData.data.length > 0) {
        this.products = rawData.data;
      }
    }
  },
  methods: {
  },
};
