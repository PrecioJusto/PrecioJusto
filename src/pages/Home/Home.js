import { productRepository } from 'src/core/Areas/Products/ProductRepository.js';
import ProductCard from 'src/components/ProductCard/ProductCardComponent.vue';
import CategoryCard from 'src/components/CategoryCard/CategoryCardComponent.vue';

export default {
  name: 'PageIndex',
  components: { ProductCard, CategoryCard },
  data() {
    return {
      category: {},
    };
  },
  created() {
    productRepository.getProducts();
    this.category = {
      name: 'Frash Fruits & Vegetables',
      color: 'red',
      img: 'https://cdn.needish.com/prod-boxfish/83f758ae-4ab7-47a7-b894-4659ac849342-grpn/scale/900x600.jpg',
    };
  },
};
