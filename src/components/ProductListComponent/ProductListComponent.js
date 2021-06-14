import ProductCard from 'src/components/ProductCard/ProductCardComponent.vue';
import { scroll } from 'quasar';

const { getScrollTarget, setScrollPosition } = scroll;

export default {
  name: 'ProductListComponent',
  components: { ProductCard },
  props: {
    products: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      allProducts: [],
      currentProds: [],
      current: 1,
      max: 0,
    };
  },
  created() {
    this.cleanProducts();
  },
  watch: {
    current() {
      this.changePage();
    },
  },
  methods: {
    formatPrice(cents) {
      const price = cents / 100;
      return price.toLocaleString('es-ES', { style: 'currency', currency: 'EUR' });
    },

    cleanProducts() {
      const filteringVoid = this.products.filter((prod) => prod.supermarketProducts.length > 0);

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

      this.max = Math.ceil(this.allProducts.length / 24);
      this.changePage();
    },

    changePage() {
      this.currentProds = this.allProducts.slice(((this.current - 1) * 24), (((this.current - 1) * 24) + 24));
      setScrollPosition(getScrollTarget(this.$refs.scroll), 0, 300);
    },
  },
};
