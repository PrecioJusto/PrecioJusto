import { productRepository } from 'src/core/Areas/Products/ProductRepository.js';
import CategoryCard from 'src/components/CategoryCard/CategoryCardComponent.vue';
import SearchBar from 'src/components/SearchBar/SearchBar.vue';

export default {
  name: 'PageCategories',
  components: { CategoryCard, SearchBar },
  data() {
    return {
      categories: [],
    };
  },
  async created() {
    this.categories = await productRepository.getCategories();
    this.categories = this.categories.data;
    const colors = ['green', 'red', 'blue', 'yellow', 'orange', 'purple'];
    this.categories.forEach((category) => {
      const randomColor = colors[Math.floor(Math.random() * colors.length)];
      category.colorClass = randomColor;
    });
  },
};
