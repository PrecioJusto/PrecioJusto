/* eslint-disable no-restricted-syntax */
/* eslint-disable no-undef */
// import { productRepository } from 'src/core/Areas/Products/ProductRepository.js';

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
    };
  },
  async mounted() {
    if (this.$route.params.idproduct) {
      // this.product = await productRepository.product({ prodid: this.$route.params.idproduct });
      this.product = {
        prodid: 333,
        prodname: 'Barritas de galleta cubiertas de chocolate KIT KAT pack de 5 uds. 41,5 g.',
        prodcreatedtime: '2021-06-09T21:55:56',
        prodviews: 2,
        brand: {
          branid: 144,
          branname: 'KIT KAT',
        },
        category: {
          cateid: 4,
          catename: 'cacao',
          cateimg: null,
        },
        supermarketProducts: [
          {
            id: {
              supeid: 1,
              prodid: 333,
            },
            supeid: {
              supeid: 1,
              supename: 'alcampo',
              supeimg: null,
            },
            offer: null,
            suprprice: 224,
            suprlastupdated: '2021-06-09T21:55:56',
            suprimg: 'https://www.alcampo.es/media/h1b/h1e/10752154402846.jpg',
            suprstock: true,
          },
        ],
        pack: {
          packid: 1,
          packquantity: 5,
        },
        container: null,
      };

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
        if (supermarketProduct.supeid.supename === 'elcorteingles' || supermarketProduct.supeid.supename === 'hipercor') {
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

    formatPrice(cents) {
      const price = cents / 100;
      return price.toLocaleString('es-ES', { style: 'currency', currency: 'EUR' });
    },
  },
};
