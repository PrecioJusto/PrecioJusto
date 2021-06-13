// import { productRepository } from 'src/core/Areas/Products/ProductRepository';

export default {
  name: 'CartComponent',
  props: {
    isTemporal: {
      type: Boolean,
      required: true,
    },
  },
  data() {
    return {
      products: [],
    };
  },
  async created() {
    // if (this.isTemporal) {
    //   // getting products from localStorage - temporal cart.
    //   this.products = this.$q.localStorage.getItem('cart');
    // } else {
    //   // getting products from ddbb by cart id - saved cart.
    //   this.products = await productRepository.getCart('id');
    // }

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
  },
  methods: {
    deleteProduct() {
      console.log('samuel');
    },
  },
};
