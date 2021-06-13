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
    //   productName: '',
    //   productPrice: '',
    //   productImg: '',
    //   productBrand: '',
    this.cleanedProducts = this.products.map((prod) => {
      console.log(prod);
      const name = prod.prodname;
      const rawPrice = prod.supermarketProducts.sort((a, b) => a.suprprice - b.suprprice)[0].suprprice;
      const price = this.formatPrice(rawPrice);
      return {
        name,
        price,
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
