/* eslint-disable no-restricted-syntax */
/* eslint-disable no-undef */
import { productRepository } from 'src/core/Areas/Products/ProductRepository.js';
import { userRepository } from 'src/core/Areas/User/UserRepository';

export default {
  name: 'ProductDetail',
  components: { },
  data() {
    return {
      product: {},
      productImg: '',
      productLowerPrice: Infinity,
      productInSupermarkets: [],
      cartCounter: 0,
      separator: 'vertical',
      tableColumns: [],
      tableData: [],
      tableLoading: true,
      supermarketImages: [],
      isFavourite: false,
      user: this.$q.localStorage.getItem('user'),
      auth_token: this.$q.localStorage.getItem('auth_token'),
    };
  },
  async created() {
    if (this.$q.localStorage.getItem('user_cart') == null) this.$q.localStorage.set('user_cart', { products: [] });
    if (this.auth_token) {
      const fauvoriteProds = await userRepository.getFavouriteProducts();
      this.isFavourite = fauvoriteProds.data.filter((p) => p.prodid === parseInt(this.$route.params.idproduct, 10)).length !== 0;
    }
    if (this.$route.params.idproduct) {
      const resp = await productRepository.getProduct({ prodid: this.$route.params.idproduct });
      if (resp.messageError) this.$router.push('/');
      this.product = resp.data;
      this.product.brand.branname = this.formatBrand(this.product.brand.branname);

      this.supermarketProductsExtractor();
      this.initComparingTable();
    }
  },
  methods: {
    capitalize(value) {
      if (!value) return '';
      value = value.toString();
      return value.charAt(0).toUpperCase() + value.slice(1);
    },

    supermarketProductsExtractor() {
      let supermarketProduct = {};
      for (supermarketProduct of this.product.supermarketProducts) {
        if (supermarketProduct.supeid.supename === 'elcorteingles' || supermarketProduct.supeid.supename === 'hipercor' || supermarketProduct.supeid.supename === 'carrefour') {
          this.productImg = supermarketProduct.suprimg;
        }

        if (supermarketProduct.suprprice < this.productLowerPrice) {
          this.productLowerPrice = supermarketProduct.suprprice;
        }

        this.tableData.push({
          supename: supermarketProduct.supeid.supename,
          suprprice: supermarketProduct.suprprice,
          unityPrice: (this.product.pack) ? Math.ceil(supermarketProduct.suprprice / this.product.pack.packquantity) : supermarketProduct.suprprice,
        });
      }
      if (!this.productImg) {
        this.productImg = this.product.supermarketProducts[0].suprimg;
      }
    },

    initComparingTable() {
      this.supermarketImages = [
        { name: 'alcampo', src: 'https://play-lh.googleusercontent.com/qcPys_bzjjizpKUuxw55ThFuWzaSzSvwrbdvVKerfHAw0eC8x_WXbmnGKTGnurSVBSjC' },
        { name: 'hipercor', src: 'https://www.elcorteingles.es/recursos/informacioncorporativa/doc/portal/2017/07/06/hipercor.png' },
        { name: 'elcorteingles', src: 'https://www.elcorteingles.es/recursos/informacioncorporativa/doc/portal/2017/07/06/eci-triangulo-logo.png' },
        { name: 'carrefour', src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/Carrefour_logo.svg/1000px-Carrefour_logo.svg.png' },
      ];

      this.tableColumns = [
        {
          name: 'supermarket',
          required: true,
          label: 'Supermercado',
          align: 'left',
          field: (row) => row.supename,
          format: (val) => `${this.capitalize(val)}`,
          sortable: true,
        },
        {
          name: 'productPrice',
          align: 'center',
          label: 'Precio del producto',
          field: 'suprprice',
          format: (val) => `${this.formatPrice(val)}`,
          sortable: true,
        },
        {
          name: 'unitaryPrice',
          label: 'Precio unitario',
          field: 'unityPrice',
          sortable: true,
          format: (val) => `${this.formatPrice(val)}`,
        },
      ];

      this.tableData = this.tableData.sort((a, b) => a.suprprice - b.suprprice);
      this.tableLoading = false;
    },

    favourite() {
      if (this.auth_token !== null) {
        this.isFavourite = !this.isFavourite;
        if (this.isFavourite) {
          userRepository.addFavourite({ prodid: this.product.prodid, useridfavourite: this.user.userid });
        } else {
          userRepository.deleteFavourite({ prodid: this.product.prodid, useridfavourite: this.user.userid });
        }
      } else {
        this.$q.notify(
          {
            type: 'info',
            message: 'Para poder guardar como favorito un producto debe estar logueado',
          },
        );
      }
    },

    formatBrand(str) {
      if (str === '_unknown') return '';
      return str;
    },

    formatPrice(cents) {
      const price = cents / 100;
      return price.toLocaleString('es-ES', { style: 'currency', currency: 'EUR' });
    },
  },
};
