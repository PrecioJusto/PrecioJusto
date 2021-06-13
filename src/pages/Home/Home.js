import _ from 'lodash';

import { productRepository } from 'src/core/Areas/Products/ProductRepository.js';
import SearchBar from 'src/components/SearchBar/SearchBar.vue';
import ProductCard from 'src/components/ProductCard/ProductCardComponent.vue';
import CategoryCard from 'src/components/CategoryCard/CategoryCardComponent.vue';

export default {
  name: 'PageIndex',
  components: { SearchBar, ProductCard, CategoryCard },
  data() {
    return {
      category: {},
      prodSlider: 0,
      catSlider: 0,
      featuredProds: 0,
      offerProducts: [],
      categories: [],
    };
  },
  async created() {
    const destacadosProdResp = await productRepository.getProductsOrderdedByViews(0);
    // const categoriesRespPromise = await productRepository.getCategories();
    const offerProdRespPromise = await productRepository.getProductsWithOfferOrderByPercentage();

    const cleanedDestacados = this.productExtractor(destacadosProdResp.data);
    const cleanedOffers = this.productExtractor(offerProdRespPromise.data);

    if (this.$q.platform.is.desktop) {
      this.offerProducts = _.chunk(Object.values(cleanedOffers), 5);
      this.featuredProds = _.chunk(Object.values(cleanedDestacados), 5);
      this.categories = _.chunk(Object.values(this.rawCategories), 3);
    } else {
      this.offerProducts = _.chunk(Object.values(cleanedOffers), 2);
      this.featuredProds = _.chunk(Object.values(cleanedDestacados), 2);
      this.categories = _.chunk(Object.values(this.rawCategories), 1);
    }
  },
  watch: {
    '$q.screen.width': function () {
      this.changeProductsBatch();
    },
  },
  methods: {
    changeProductsBatch() {
      if (this.$q.screen.width > 1350) {
        this.offerProducts = _.chunk(Object.values(this.rawProds), 5);
        this.categories = _.chunk(Object.values(this.rawCategories), 4);
      } else if (this.$q.screen.width > 1055 && this.$q.screen.width <= 1350) {
        this.offerProducts = _.chunk(Object.values(this.rawProds), 4);
        this.categories = _.chunk(Object.values(this.rawCategories), 3);
      } else if (this.$q.screen.width > 790 && this.$q.screen.width <= 1055) {
        this.offerProducts = _.chunk(Object.values(this.rawProds), 3);
        this.categories = _.chunk(Object.values(this.rawCategories), 2);
      } else if (this.$q.screen.width <= 790) {
        this.categories = _.chunk(Object.values(this.rawCategories), 1);
        this.offerProducts = _.chunk(Object.values(this.rawProds), 2);
      }
    },

    productExtractor(products) {
      console.log(products);
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
