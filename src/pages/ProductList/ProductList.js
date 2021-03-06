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
      this.initProducts();
    } else {
      this.$router.push('/');
    }
  },

  methods: {
    async initProducts() {
      let resp;
      if (this.$route.params.categoria === 'ofertas-exclusivas') {
        resp = await productRepository.getProductsWithOfferOrderByPercentage();
      } else if (this.$route.params.categoria === 'productos-destacados') {
        resp = await productRepository.getTopProducts();
      } else {
        resp = await productRepository.getAllProductsFromCatename({ catename: this.$route.params.categoria });
      }

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

    formatPrice(cents) {
      const price = cents / 100;
      return price.toLocaleString('es-ES', { style: 'currency', currency: 'EUR' });
    },
  },
};
