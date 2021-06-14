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
      prodSlider: 0,
      catSlider: 0,
      featuredSlider: 0,
      featuredProds: [],
      offerProducts: [],
      categories: [],
      rawFeatured: [],
      rawOffers: [],
      rawCategories: [],
    };
  },
  async created() {
    if (this.$q.localStorage.getItem('user_cart') == null) this.$q.localStorage.set('user_cart', { products: [] });

    const destacadosProdResp = await productRepository.getTopProducts();
    const categoriesRespPromise = await productRepository.getCategoryPaged(0);
    const offerProdRespPromise = await productRepository.getProductsWithOfferOrderByPercentage();

    this.rawFeatured = this.productExtractor(destacadosProdResp.data);
    this.rawOffers = this.productExtractor(offerProdRespPromise.data);
    const categoriesData = categoriesRespPromise.data;
    this.rawCategories = categoriesData.map((cat) => ({
      name: this.formatCategoryName(cat.catename),
      img: cat.cateimg,
    }));

    // tengo que terminar el ver todas!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

    if (this.$q.platform.is.desktop) {
      this.offerProducts = _.chunk(Object.values(this.rawOffers), 5);
      this.featuredProds = _.chunk(Object.values(this.rawFeatured), 5);
      this.categories = _.chunk(Object.values(this.rawCategories), 3);
    } else {
      this.offerProducts = _.chunk(Object.values(this.rawOffers), 2);
      this.featuredProds = _.chunk(Object.values(this.rawFeatured), 2);
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
        this.offerProducts = _.chunk(Object.values(this.rawOffers), 5);
        this.featuredProds = _.chunk(Object.values(this.rawFeatured), 5);
        this.categories = _.chunk(Object.values(this.rawCategories), 4);
      } else if (this.$q.screen.width > 1055 && this.$q.screen.width <= 1350) {
        this.offerProducts = _.chunk(Object.values(this.rawOffers), 4);
        this.featuredProds = _.chunk(Object.values(this.rawFeatured), 4);
        this.categories = _.chunk(Object.values(this.rawCategories), 3);
      } else if (this.$q.screen.width > 790 && this.$q.screen.width <= 1055) {
        this.offerProducts = _.chunk(Object.values(this.rawOffers), 3);
        this.featuredProds = _.chunk(Object.values(this.rawFeatured), 3);
        this.categories = _.chunk(Object.values(this.rawCategories), 2);
      } else if (this.$q.screen.width <= 790) {
        this.categories = _.chunk(Object.values(this.rawCategories), 1);
        this.featuredProds = _.chunk(Object.values(this.rawFeatured), 2);
        this.offerProducts = _.chunk(Object.values(this.rawOffers), 2);
      }
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

    formatCategoryName(str) {
      return str.charAt(0).toUpperCase() + str.slice(1).replaceAll('_', ' ');
    },
  },
};
