import { userRepository } from 'src/core/Areas/User/UserRepository';
import { productRepository } from 'src/core/Areas/Products/ProductRepository.js';

export default {
  name: 'CartComponent',
  props: {},
  data() {
    return {
      products: [],
      cartId: null,
      isEmpty: false,
    };
  },
  async created() {
    let rawProducts = [];
    if (this.$route.params.idcart) {
      this.cartId = this.$route.params.idcart;
      const resp = await userRepository.getShoppingCartById({ shopid: this.cartId });
      rawProducts = resp.data.products;
      if (rawProducts.length > 0) this.products = this.productExtractor(rawProducts, 0);
    } else {
      const cart = this.$q.localStorage.getItem('user_cart');
      if (cart.products.length > 0) {
        const temp = await productRepository.getProductsFromList(cart.products.map((p) => p.prodid));
        rawProducts = temp.data;
        this.products = this.productExtractor(rawProducts, 1);
      } else this.isEmpty = true;
    }
  },
  methods: {
    async deleteProduct(productId) {
      if (this.cartId != null) {
        const response = await userRepository.deleteProductShoppingCart({ prodid: productId, shopid: this.cartId });
        if (response.status === 200) {
          this.$q.notify(
            {
              type: 'positive',
              message: 'Se ha eliminado el producto del carrito correctamente',
            },
          );
          this.refreshCart(productId);
        }
      }
    },

    refreshCart(id) {
      this.products = this.products.filter((p) => p.id !== id);
    },

    redirect(id) {
      this.$router.push(`/producto/${id}`);
    },

    productExtractor(products, type) {
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
          if (type) {
            if (supermarketProduct.supeid.supename === 'elcorteingles' || supermarketProduct.supeid.supename === 'hipercor') {
              img = supermarketProduct.suprimg;
              break;
            }
          } else if (supermarketProduct.supename === 'elcorteingles' || supermarketProduct.supename === 'hipercor') {
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
