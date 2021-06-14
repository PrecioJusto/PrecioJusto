import { productRepository } from 'src/core/Areas/Products/ProductRepository.js';
import ProductCard from 'src/components/ProductCard/ProductCardComponent.vue';

export default {
  name: 'ProductList',
  components: { ProductCard },
  data() {
    return {
      allProducts: [],
      currentProds: [],
      categoryName: '',
      current: 1,
      max: 0,
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
  watch: {
    current() {
      this.changePage();
    },
  },
  methods: {
    async initProducts() {
      let resp;
      if (this.$route.params.categoria === 'ofertas-exclusivas') {
        resp = await productRepository.getProductsWithOfferOrderByPercentage();
      } else if (this.$route.params.categoria === 'productos-destacados') {
        resp = await productRepository.getTopProducts();
        console.log(resp);
      } else {
        resp = await productRepository.getAllProductsFromCatename({ catename: this.$route.params.categoria });
      }

      const rawData = resp.data;
      if (rawData.length > 0) {
        this.cleanProducts(rawData);
        this.max = Math.ceil(this.allProducts.length / 24);
        this.changePage(0);
      } else {
        this.$router.push('/');
      }
    },

    cleanProducts(products) {
      const filteringVoid = products.filter((prod) => prod.supermarketProducts.length > 0);

      this.allProducts = filteringVoid.map((prod) => {
        const id = prod.prodid;
        const name = prod.prodname;
        const rawPrice = prod.supermarketProducts.sort((a, b) => a.suprprice - b.suprprice)[0].suprprice;
        const price = rawPrice ? this.formatPrice(rawPrice) : null;
        const brand = prod.brand.branname;
        let img = '';
        let supermarketProduct;
        // eslint-disable-next-line no-restricted-syntax
        for (supermarketProduct of prod.supermarketProducts) {
          if (supermarketProduct.supeid.supename === 'elcorteingles' || supermarketProduct.supeid.supename === 'hipercor') {
            img = supermarketProduct.suprimg;
            break;
          }
        }

        if (img.length < 1) {
          img = prod.supermarketProducts[0].suprimg;
        }

        return {
          id,
          name,
          price,
          img,
          brand,
        };
      });
    },

    changePage() {
      this.currentProds = this.allProducts.slice(((this.current - 1) * 24), (((this.current - 1) * 24) + 24));
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
