import { productRepository } from 'src/core/Areas/Products/ProductRepository.js';
import ProductListComponent from 'src/components/ProductListComponent/ProductListComponent.vue';

export default {
  name: 'SearchList',
  components: { ProductListComponent },
  data() {
    return {
      products: [],
      categoryName: '',
    };
  },

  async created() {
    if (this.$route.params.search) {
      this.formatCategoryName(this.$route.params.search);
      this.initProducts();
    } else {
      this.$router.push('/');
    }
  },
  watch: {
    '$route.params.search': {
      handler() {
        this.initProducts();
        this.formatCategoryName(this.$route.params.search);
      },
      deep: true,
      immediate: true,
    },
  },
  methods: {
    async initProducts() {
      const resp = await productRepository.getAllProductsFromName({ value: this.$route.params.search });

      const rawData = resp.data;
      if (rawData.length > 0) {
        this.products = rawData;
      } else {
        this.$router.push('/');
      }
    },

    formatCategoryName(str) {
      this.categoryName = str.charAt(0).toUpperCase() + str.slice(1).replaceAll(/_|-/g, ' ');
    },
  },
};
