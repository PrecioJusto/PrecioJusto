import ProductCard from 'src/components/ProductCard/ProductCardComponent.vue';

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
      cleanedProducts: [],
    };
  },
  created() {
    const filteringVoid = this.products.filter((prod) => prod.supermarketProducts.length > 0);

    this.cleanedProducts = filteringVoid.map((prod) => {
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
  methods: {
    formatPrice(cents) {
      const price = cents / 100;
      return price.toLocaleString('es-ES', { style: 'currency', currency: 'EUR' });
    },
  },
};
