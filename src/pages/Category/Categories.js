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
        name: 'Arroces y cous cous',
        color: 'green',
        img: 'https://www.casamuros.es/wp-content/uploads/2017/09/arroz-integral-1.png',
      },
      {
        name: 'Carne',
        color: 'red',
        img: 'https://pngimg.com/uploads/beef/beef_PNG79.png',
      },
      {
        name: 'Fruta',
        color: 'yellow',
        img: 'https://www.traza.net/wp-content/uploads/2017/01/frutas-verduras.jpg',
      },
      {
        name: 'Bebidas refrescantes',
        color: 'blue',
        img: 'https://i.pinimg.com/originals/43/46/e5/4346e5ef13b27b402a1413b200ee0fa4.png',
      },
      {
        name: 'Cafés',
        color: 'brown',
        img: 'http://assets.stickpng.com/images/580b57fbd9996e24bc43c0e9.png',
      },
      {
        name: 'Arroces y cous cous',
        color: 'green',
        img: 'https://www.casamuros.es/wp-content/uploads/2017/09/arroz-integral-1.png',
      },
      {
        name: 'Carne',
        color: 'red',
        img: 'https://pngimg.com/uploads/beef/beef_PNG79.png',
      },
      {
        name: 'Fruta',
        color: 'yellow',
        img: 'https://www.traza.net/wp-content/uploads/2017/01/frutas-verduras.jpg',
      },
      {
        name: 'Bebidas refrescantes',
        color: 'blue',
        img: 'https://i.pinimg.com/originals/43/46/e5/4346e5ef13b27b402a1413b200ee0fa4.png',
      },
      {
        name: 'Cafés',
        color: 'brown',
        img: 'http://assets.stickpng.com/images/580b57fbd9996e24bc43c0e9.png',
      },
      {
        name: 'Arroces y cous cous',
        color: 'green',
        img: 'https://www.casamuros.es/wp-content/uploads/2017/09/arroz-integral-1.png',
      },
      {
        name: 'Carne',
        color: 'red',
        img: 'https://pngimg.com/uploads/beef/beef_PNG79.png',
      },
      {
        name: 'Fruta',
        color: 'yellow',
        img: 'https://www.traza.net/wp-content/uploads/2017/01/frutas-verduras.jpg',
      },
      {
        name: 'Bebidas refrescantes',
        color: 'blue',
        img: 'https://i.pinimg.com/originals/43/46/e5/4346e5ef13b27b402a1413b200ee0fa4.png',
      },
      {
        name: 'Cafés',
        color: 'brown',
        img: 'http://assets.stickpng.com/images/580b57fbd9996e24bc43c0e9.png',
      },
      {
        name: 'Arroces y cous cous',
        color: 'green',
        img: 'https://www.casamuros.es/wp-content/uploads/2017/09/arroz-integral-1.png',
      },
      {
        name: 'Carne',
        color: 'red',
        img: 'https://pngimg.com/uploads/beef/beef_PNG79.png',
      },
      {
        name: 'Fruta',
        color: 'yellow',
        img: 'https://www.traza.net/wp-content/uploads/2017/01/frutas-verduras.jpg',
      },
      {
        name: 'Bebidas refrescantes',
        color: 'blue',
        img: 'https://i.pinimg.com/originals/43/46/e5/4346e5ef13b27b402a1413b200ee0fa4.png',
      },
      {
        name: 'Cafés',
        color: 'brown',
        img: 'http://assets.stickpng.com/images/580b57fbd9996e24bc43c0e9.png',
      },
      {
        name: 'Arroces y cous cous',
        color: 'green',
        img: 'https://www.casamuros.es/wp-content/uploads/2017/09/arroz-integral-1.png',
      },
      {
        name: 'Carne',
        color: 'red',
        img: 'https://pngimg.com/uploads/beef/beef_PNG79.png',
      },
      {
        name: 'Fruta',
        color: 'yellow',
        img: 'https://www.traza.net/wp-content/uploads/2017/01/frutas-verduras.jpg',
      },
      {
        name: 'Bebidas refrescantes',
        color: 'blue',
        img: 'https://i.pinimg.com/originals/43/46/e5/4346e5ef13b27b402a1413b200ee0fa4.png',
      },
      {
        name: 'Cafés',
        color: 'brown',
        img: 'http://assets.stickpng.com/images/580b57fbd9996e24bc43c0e9.png',
      },
      {
        name: 'Arroces y cous cous',
        color: 'green',
        img: 'https://www.casamuros.es/wp-content/uploads/2017/09/arroz-integral-1.png',
      },
      {
        name: 'Carne',
        color: 'red',
        img: 'https://pngimg.com/uploads/beef/beef_PNG79.png',
      },
      {
        name: 'Fruta',
        color: 'yellow',
        img: 'https://www.traza.net/wp-content/uploads/2017/01/frutas-verduras.jpg',
      },
      {
        name: 'Bebidas refrescantes',
        color: 'blue',
        img: 'https://i.pinimg.com/originals/43/46/e5/4346e5ef13b27b402a1413b200ee0fa4.png',
      },
      {
        name: 'Cafés',
        color: 'brown',
        img: 'http://assets.stickpng.com/images/580b57fbd9996e24bc43c0e9.png',
      },
      {
        name: 'Arroces y cous cous',
        color: 'green',
        img: 'https://www.casamuros.es/wp-content/uploads/2017/09/arroz-integral-1.png',
      },
      {
        name: 'Carne',
        color: 'red',
        img: 'https://pngimg.com/uploads/beef/beef_PNG79.png',
      },
      {
        name: 'Fruta',
        color: 'yellow',
        img: 'https://www.traza.net/wp-content/uploads/2017/01/frutas-verduras.jpg',
      },
      {
        name: 'Bebidas refrescantes',
        color: 'blue',
        img: 'https://i.pinimg.com/originals/43/46/e5/4346e5ef13b27b402a1413b200ee0fa4.png',
      },
      {
        name: 'Cafés',
        color: 'brown',
        img: 'http://assets.stickpng.com/images/580b57fbd9996e24bc43c0e9.png',
      },
      {
        name: 'Arroces y cous cous',
        color: 'green',
        img: 'https://www.casamuros.es/wp-content/uploads/2017/09/arroz-integral-1.png',
      },
      {
        name: 'Carne',
        color: 'red',
        img: 'https://pngimg.com/uploads/beef/beef_PNG79.png',
      },
      {
        name: 'Fruta',
        color: 'yellow',
        img: 'https://www.traza.net/wp-content/uploads/2017/01/frutas-verduras.jpg',
      },
      {
        name: 'Bebidas refrescantes',
        color: 'blue',
        img: 'https://i.pinimg.com/originals/43/46/e5/4346e5ef13b27b402a1413b200ee0fa4.png',
      },
      {
        name: 'Cafés',
        color: 'brown',
        img: 'http://assets.stickpng.com/images/580b57fbd9996e24bc43c0e9.png',
      },
    ];
  },
};
