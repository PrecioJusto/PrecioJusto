import { userRepository } from 'src/core/Areas/User/UserRepository';

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
      rawProducts = this.$q.localStorage.getItem('cart');
    }

    this.products = [
      {
        prodid: 1,
        prodname: 'MAESTROS DE HOJIBLANCA El Nuestro aceite de oliva virgen extra bidón 5 l',
        prodcreatedtime: null,
        prodviews: 1,
        brand: {
          branid: 1,
          branname: 'MAESTROS DE HOJIBLANCA',
        },
        category: {
          cateid: 1,
          catename: 'aceite_y_vinagre',
        },
      },
      {
        prodid: 2,
        prodname: 'Aceite de oliva virgen extra PRODUCTO ALCAMPO garrafa de 5 l.',
        prodcreatedtime: null,
        prodviews: 0,
        brand: {
          branid: 2,
          branname: 'ALCAMPO',
        },
        category: {
          cateid: 1,
          catename: 'aceite_y_vinagre',
        },
      },
      {
        prodid: 3,
        prodname: 'Aceite de oliva suave PRODUCTO ALCAMPO 1 l.',
        prodcreatedtime: null,
        prodviews: 0,
        brand: {
          branid: 2,
          branname: 'ALCAMPO',
        },
        category: {
          cateid: 1,
          catename: 'aceite_y_vinagre',
        },
      },
      {
        prodid: 4,
        prodname: 'CARBONELL aceite de oliva suave 0,4º botella 1 l',
        prodcreatedtime: null,
        prodviews: 0,
        brand: {
          branid: 3,
          branname: 'CARBONELL',
        },
        category: {
          cateid: 1,
          catename: 'aceite_y_vinagre',
        },
      },
      {
        prodid: 5,
        prodname: 'Aceite de oliva Virgen Extra PRODUCTO ALCAMPO 1 l.',
        prodcreatedtime: null,
        prodviews: 0,
        brand: {
          branid: 2,
          branname: 'ALCAMPO',
        },
        category: {
          cateid: 1,
          catename: 'aceite_y_vinagre',
        },
      },
      {
        prodid: 6,
        prodname: 'LA ESPAÑOLA aceite de oliva suave 0,4º botella 1 l',
        prodcreatedtime: null,
        prodviews: 0,
        brand: {
          branid: 4,
          branname: 'LA ESPAÑOLA',
        },
        category: {
          cateid: 1,
          catename: 'aceite_y_vinagre',
        },
      },
      {
        prodid: 7,
        prodname: 'Aceite de oliva intenso PRODUCTO ALCAMPO botella de 1 l.',
        prodcreatedtime: null,
        prodviews: 0,
        brand: {
          branid: 2,
          branname: 'ALCAMPO',
        },
        category: {
          cateid: 1,
          catename: 'aceite_y_vinagre',
        },
      },
      {
        prodid: 8,
        prodname: 'Aceite de girasol PRODUCTO ALCAMPO garrafa de 5 l',
        prodcreatedtime: null,
        prodviews: 0,
        brand: {
          branid: 2,
          branname: 'ALCAMPO',
        },
        category: {
          cateid: 1,
          catename: 'aceite_y_vinagre',
        },
      },
    ];

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
  },
};
