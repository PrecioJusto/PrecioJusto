import { userRepository } from 'src/core/Areas/User/UserRepository';
// import { productRepository } from 'src/core/Areas/Products/ProductRepository.js';

export default {
  name: 'FavouriteProductComponent',
  props: {},
  data() {
    return {
      products: [],
      isEmpty: false,
      user: this.$q.localStorage.getItem('user'),
    };
  },
  async created() {
    const request = await userRepository.getFavouriteProducts();
    const rawProds = request.data;
    if (rawProds.length > 0) this.products = this.productExtractor(rawProds, 0);
  },
  methods: {
    async deleteProduct(productId) {
      const response = await userRepository.deleteFavourite({ userid: this.user.userid, prodid: productId });
      if (response.status === 200) {
        this.$q.notify(
          {
            type: 'positive',
            message: 'Se ha eliminado el producto de favoritos correctamente',
          },
        );
        this.refreshList(productId);
      }
    },

    refreshList(id) {
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
