import { productRepository } from 'src/core/Areas/Products/ProductRepository.js';
import ProductListComponent from 'src/components/ProductListComponent/ProductListComponent.vue';

export default {
  name: 'ProductList',
  components: { ProductListComponent },
  data() {
    return {
      products: [],
      categoryName: '',
    };
  },
  async created() {
    if (this.$route.params.categoria) {
      this.formatCategoryName(this.$route.params.categoria);
      const rawData = await productRepository.getAllProductsFromCatename({ catename: this.$route.params.categoria });
      if (rawData.data.length > 0) {
        this.products = rawData.data;
      } else {
        this.$router.push('/');
      }
    } else {
      this.$router.push('/');
    }
  },
  methods: {
    formatCategoryName(str) {
      this.categoryName = str.charAt(0).toUpperCase() + str.slice(1).replaceAll('_', ' ');
    },
  },
};
