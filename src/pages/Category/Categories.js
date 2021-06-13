// import { productRepository } from 'src/core/Areas/Products/ProductRepository.js';
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
    this.categories = [
      {
        name: 'Arroces y cous couss',
        img: 'https://www.casamuros.es/wp-content/uploads/2017/09/arroz-integral-1.png',
      },
      {
        name: 'Carne',
        img: 'https://pngimg.com/uploads/beef/beef_PNG79.png',
      },
      {
        name: 'Fruta',
        img: 'https://www.traza.net/wp-content/uploads/2017/01/frutas-verduras.jpg',
      },
      {
        name: 'Bebidas refrescantes',
        img: 'https://i.pinimg.com/originals/43/46/e5/4346e5ef13b27b402a1413b200ee0fa4.png',
      },
      {
        name: 'Cafés',
        img: 'http://assets.stickpng.com/images/580b57fbd9996e24bc43c0e9.png',
      },
    ];
    const colors = ['green', 'red', 'blue', 'yellow', 'orange', 'purple'];
    this.categories.forEach((category) => {
      const randomColor = colors[Math.floor(Math.random() * colors.length)];
      category.colorClass = randomColor;
    });
  },
};
