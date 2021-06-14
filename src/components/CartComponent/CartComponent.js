import { userRepository } from 'src/core/Areas/User/UserRepository';
import { productRepository } from 'src/core/Areas/Products/ProductRepository.js';

export default {
  name: 'CartComponent',
  props: {},
  data() {
    return {
      products: [],
    };
  },
  async created() {
    let rawProducts = [];
    if (this.$route.params.idcart) {
      const shopid = this.$route.params.idcart;
      console.log(shopid);
      const resp = await userRepository.getShoppingCartById({ shopid });
      console.log(resp);
      rawProducts = resp.data;
    } else {
      const cart = this.$q.localStorage.getItem('user_cart');
      const temp = await productRepository.getProductsFromList(cart.products.map((p) => p.prodid));
      console.log(temp.data);
      rawProducts = temp.data;
    }
    console.log(this.products);
    this.products = this.productExtractor(rawProducts);
  },
  methods: {
    deleteProduct() {
      console.log('samuel');
    },

    redirect(id) {
      this.$router.push(`/producto/${id}`);
    },

    productExtractor(products) {
      const filteringVoid = products.filter((prod) => prod.supermarketProducts.length > 0);

      return filteringVoid.map((prod) => {
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

    formatPrice(cents) {
      const price = cents / 100;
      return price.toLocaleString('es-ES', { style: 'currency', currency: 'EUR' });
    },
  },
};
