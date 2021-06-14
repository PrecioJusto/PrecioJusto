import { productRepository } from 'src/core/Areas/Products/ProductRepository.js';
import CategoryCard from 'src/components/CategoryCard/CategoryCardComponent.vue';
import SearchBar from 'src/components/SearchBar/SearchBar.vue';

export default {
  name: 'PageCategories',
  components: { CategoryCard, SearchBar },
  data() {
    return {
      allCategories: [],
      currentCategories: [],
      current: 1,
      max: 0,
    };
  },
  async created() {
    const resp = await productRepository.getCategories();
    const rawData = resp.data;
    this.allCategories = rawData;
    this.max = Math.ceil(this.allCategories.length / 16);

    const colors = ['green', 'red', 'blue', 'yellow', 'orange', 'purple'];
    this.allCategories.forEach((category) => {
      const randomColor = colors[Math.floor(Math.random() * colors.length)];
      category.colorClass = randomColor;
    });
    this.changePage();
  },
  watch: {
    current() {
      this.changePage();
    },
  },
  methods: {
    changePage() {
      this.currentCategories = this.allCategories.slice(((this.current - 1) * 16), (((this.current - 1) * 16) + 16));
    },
  },
};
