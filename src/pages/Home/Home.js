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
      rawProds: [],
      rawCategories: [],
      categories: [],
    };
  },
  created() {
    productRepository.getProductsOrderdedByViews(0);
    this.category = {
      name: 'Frash Fruits & Vegetables',
      color: 'red',
      img: 'https://cdn.needish.com/prod-boxfish/83f758ae-4ab7-47a7-b894-4659ac849342-grpn/scale/900x600.jpg',
    };

    this.rawProds = [
      {
        name: 'FONT VELLA agua mineral natural botella 33 cl con tapón Sport (Personajes surtidos según existencias)',
        img: 'https://sgfm.elcorteingles.es/SGFM/dctm/MEDIA03/202102/19/00118630600080____24__1200x1200.jpg',
        brand: 'FONT VELLA',
        price: '12.99€',
      },
      {
        name: 'FONT VELLA KIDS agua mineral natural sin gas botella 33 cl (Personajes surtidos según existencias)',
        img: 'https://sgfm.elcorteingles.es/SGFM/dctm/MEDIA03/202010/02/00118630601377____18__600x600.jpg',
        brand: 'FONT VELLA',
        price: '12.99€',
      },
      {
        name: 'CHUFI Original horchata de chufa botella 1 l',
        img: 'https://sgfm.elcorteingles.es/SGFM/dctm/MEDIA03/201906/17/00118644000053____1__600x600.jpg',
        brand: 'CHUFI',
        price: '12.99€',
      },
      {
        name: 'DON SIMON horchata de chufa botella 1 l',
        img: 'https://sgfm.elcorteingles.es/SGFM/dctm/MEDIA03/201909/24/00118644000103____1__600x600.jpg',
        brand: 'DON SIMON',
        price: '12.99€',
      },
      {
        name: 'COCA-COLA ZERO Azúcar refresco de cola pack 24 lata 33 cl',
        img: 'https://sgfm.elcorteingles.es/SGFM/dctm/MEDIA03/202105/28/00118622500488____23__1200x1200.jpg',
        brand: 'COCA-COLA ZERO',
        price: '12.99€',
      },
      {
        name: 'PEPSI MAX Zero Azúcar refresco de cola pack 2 botella 2 l',
        img: 'https://sgfm.elcorteingles.es/SGFM/dctm/MEDIA03/202004/30/00118622400275____10__1200x1200.jpg',
        brand: 'PEPSI MAX',
        price: '12.99€',
      },
      {
        name: 'VOLL DAMM cerveza rubia extra doble malta con lúpulo aromático pack 12 botellas 25 cl',
        img: 'https://sgfm.elcorteingles.es/SGFM/dctm/MEDIA03/201906/11/00118602800809____1__600x600.jpg',
        brand: 'VOLL DAMM',
        price: '12.99€',
      },
      {
        name: 'FONT VELLA agua mineral natural botella 33 cl con tapón Sport (Personajes surtidos según existencias)',
        img: 'https://sgfm.elcorteingles.es/SGFM/dctm/MEDIA03/202102/19/00118630600080____24__1200x1200.jpg',
        brand: 'FONT VELLA',
        price: '12.99€',
      },
      {
        name: 'FONT VELLA KIDS agua mineral natural sin gas botella 33 cl (Personajes surtidos según existencias)',
        img: 'https://sgfm.elcorteingles.es/SGFM/dctm/MEDIA03/202010/02/00118630601377____18__600x600.jpg',
        brand: 'FONT VELLA',
        price: '12.99€',
      },
      {
        name: 'CHUFI Original horchata de chufa botella 1 l',
        img: 'https://sgfm.elcorteingles.es/SGFM/dctm/MEDIA03/201906/17/00118644000053____1__600x600.jpg',
        brand: 'CHUFI',
        price: '12.99€',
      },
      {
        name: 'FONT VELLA agua mineral natural botella 33 cl con tapón Sport (Personajes surtidos según existencias)',
        img: 'https://sgfm.elcorteingles.es/SGFM/dctm/MEDIA03/202102/19/00118630600080____24__1200x1200.jpg',
        brand: 'FONT VELLA',
        price: '12.99€',
      },
      {
        name: 'FONT VELLA KIDS agua mineral natural sin gas botella 33 cl (Personajes surtidos según existencias)',
        img: 'https://sgfm.elcorteingles.es/SGFM/dctm/MEDIA03/202010/02/00118630601377____18__600x600.jpg',
        brand: 'FONT VELLA',
        price: '12.99€',
      },
      {
        name: 'CHUFI Original horchata de chufa botella 1 l',
        img: 'https://sgfm.elcorteingles.es/SGFM/dctm/MEDIA03/201906/17/00118644000053____1__600x600.jpg',
        brand: 'CHUFI',
        price: '12.99€',
      },
      {
        name: 'DON SIMON horchata de chufa botella 1 l',
        img: 'https://sgfm.elcorteingles.es/SGFM/dctm/MEDIA03/201909/24/00118644000103____1__600x600.jpg',
        brand: 'DON SIMON',
        price: '12.99€',
      },
      {
        name: 'COCA-COLA ZERO Azúcar refresco de cola pack 24 lata 33 cl',
        img: 'https://sgfm.elcorteingles.es/SGFM/dctm/MEDIA03/202105/28/00118622500488____23__1200x1200.jpg',
        brand: 'COCA-COLA ZERO',
        price: '12.99€',
      },
      {
        name: 'PEPSI MAX Zero Azúcar refresco de cola pack 2 botella 2 l',
        img: 'https://sgfm.elcorteingles.es/SGFM/dctm/MEDIA03/202004/30/00118622400275____10__1200x1200.jpg',
        brand: 'PEPSI MAX',
        price: '12.99€',
      },
      {
        name: 'VOLL DAMM cerveza rubia extra doble malta con lúpulo aromático pack 12 botellas 25 cl',
        img: 'https://sgfm.elcorteingles.es/SGFM/dctm/MEDIA03/201906/11/00118602800809____1__600x600.jpg',
        brand: 'VOLL DAMM',
        price: '12.99€',
      },
      {
        name: 'FONT VELLA agua mineral natural botella 33 cl con tapón Sport (Personajes surtidos según existencias)',
        img: 'https://sgfm.elcorteingles.es/SGFM/dctm/MEDIA03/202102/19/00118630600080____24__1200x1200.jpg',
        brand: 'FONT VELLA',
        price: '12.99€',
      },
      {
        name: 'FONT VELLA KIDS agua mineral natural sin gas botella 33 cl (Personajes surtidos según existencias)',
        img: 'https://sgfm.elcorteingles.es/SGFM/dctm/MEDIA03/202010/02/00118630601377____18__600x600.jpg',
        brand: 'FONT VELLA',
        price: '12.99€',
      },
      {
        name: 'CHUFI Original horchata de chufa botella 1 l',
        img: 'https://sgfm.elcorteingles.es/SGFM/dctm/MEDIA03/201906/17/00118644000053____1__600x600.jpg',
        brand: 'CHUFI',
        price: '12.99€',
      },
      {
        name: 'FONT VELLA agua mineral natural botella 33 cl con tapón Sport (Personajes surtidos según existencias)',
        img: 'https://sgfm.elcorteingles.es/SGFM/dctm/MEDIA03/202102/19/00118630600080____24__1200x1200.jpg',
        brand: 'FONT VELLA',
        price: '12.99€',
      },
      {
        name: 'FONT VELLA KIDS agua mineral natural sin gas botella 33 cl (Personajes surtidos según existencias)',
        img: 'https://sgfm.elcorteingles.es/SGFM/dctm/MEDIA03/202010/02/00118630601377____18__600x600.jpg',
        brand: 'FONT VELLA',
        price: '12.99€',
      },
      {
        name: 'CHUFI Original horchata de chufa botella 1 l',
        img: 'https://sgfm.elcorteingles.es/SGFM/dctm/MEDIA03/201906/17/00118644000053____1__600x600.jpg',
        brand: 'CHUFI',
        price: '12.99€',
      },
      {
        name: 'DON SIMON horchata de chufa botella 1 l',
        img: 'https://sgfm.elcorteingles.es/SGFM/dctm/MEDIA03/201909/24/00118644000103____1__600x600.jpg',
        brand: 'DON SIMON',
        price: '12.99€',
      },
      {
        name: 'COCA-COLA ZERO Azúcar refresco de cola pack 24 lata 33 cl',
        img: 'https://sgfm.elcorteingles.es/SGFM/dctm/MEDIA03/202105/28/00118622500488____23__1200x1200.jpg',
        brand: 'COCA-COLA ZERO',
        price: '12.99€',
      },
      {
        name: 'PEPSI MAX Zero Azúcar refresco de cola pack 2 botella 2 l',
        img: 'https://sgfm.elcorteingles.es/SGFM/dctm/MEDIA03/202004/30/00118622400275____10__1200x1200.jpg',
        brand: 'PEPSI MAX',
        price: '12.99€',
      },
      {
        name: 'VOLL DAMM cerveza rubia extra doble malta con lúpulo aromático pack 12 botellas 25 cl',
        img: 'https://sgfm.elcorteingles.es/SGFM/dctm/MEDIA03/201906/11/00118602800809____1__600x600.jpg',
        brand: 'VOLL DAMM',
        price: '12.99€',
      },
      {
        name: 'FONT VELLA agua mineral natural botella 33 cl con tapón Sport (Personajes surtidos según existencias)',
        img: 'https://sgfm.elcorteingles.es/SGFM/dctm/MEDIA03/202102/19/00118630600080____24__1200x1200.jpg',
        brand: 'FONT VELLA',
        price: '12.99€',
      },
      {
        name: 'FONT VELLA KIDS agua mineral natural sin gas botella 33 cl (Personajes surtidos según existencias)',
        img: 'https://sgfm.elcorteingles.es/SGFM/dctm/MEDIA03/202010/02/00118630601377____18__600x600.jpg',
        brand: 'FONT VELLA',
        price: '12.99€',
      },
      {
        name: 'CHUFI Original horchata de chufa botella 1 l',
        img: 'https://sgfm.elcorteingles.es/SGFM/dctm/MEDIA03/201906/17/00118644000053____1__600x600.jpg',
        brand: 'CHUFI',
        price: '12.99€',
      },
      {
        name: 'FONT VELLA agua mineral natural botella 33 cl con tapón Sport (Personajes surtidos según existencias)',
        img: 'https://sgfm.elcorteingles.es/SGFM/dctm/MEDIA03/202102/19/00118630600080____24__1200x1200.jpg',
        brand: 'FONT VELLA',
        price: '12.99€',
      },
      {
        name: 'FONT VELLA KIDS agua mineral natural sin gas botella 33 cl (Personajes surtidos según existencias)',
        img: 'https://sgfm.elcorteingles.es/SGFM/dctm/MEDIA03/202010/02/00118630601377____18__600x600.jpg',
        brand: 'FONT VELLA',
        price: '12.99€',
      },
      {
        name: 'CHUFI Original horchata de chufa botella 1 l',
        img: 'https://sgfm.elcorteingles.es/SGFM/dctm/MEDIA03/201906/17/00118644000053____1__600x600.jpg',
        brand: 'CHUFI',
        price: '12.99€',
      },
      {
        name: 'DON SIMON horchata de chufa botella 1 l',
        img: 'https://sgfm.elcorteingles.es/SGFM/dctm/MEDIA03/201909/24/00118644000103____1__600x600.jpg',
        brand: 'DON SIMON',
        price: '12.99€',
      },
      {
        name: 'COCA-COLA ZERO Azúcar refresco de cola pack 24 lata 33 cl',
        img: 'https://sgfm.elcorteingles.es/SGFM/dctm/MEDIA03/202105/28/00118622500488____23__1200x1200.jpg',
        brand: 'COCA-COLA ZERO',
        price: '12.99€',
      },
      {
        name: 'PEPSI MAX Zero Azúcar refresco de cola pack 2 botella 2 l',
        img: 'https://sgfm.elcorteingles.es/SGFM/dctm/MEDIA03/202004/30/00118622400275____10__1200x1200.jpg',
        brand: 'PEPSI MAX',
        price: '12.99€',
      },
      {
        name: 'VOLL DAMM cerveza rubia extra doble malta con lúpulo aromático pack 12 botellas 25 cl',
        img: 'https://sgfm.elcorteingles.es/SGFM/dctm/MEDIA03/201906/11/00118602800809____1__600x600.jpg',
        brand: 'VOLL DAMM',
        price: '12.99€',
      },
      {
        name: 'FONT VELLA agua mineral natural botella 33 cl con tapón Sport (Personajes surtidos según existencias)',
        img: 'https://sgfm.elcorteingles.es/SGFM/dctm/MEDIA03/202102/19/00118630600080____24__1200x1200.jpg',
        brand: 'FONT VELLA',
        price: '12.99€',
      },
      {
        name: 'FONT VELLA KIDS agua mineral natural sin gas botella 33 cl (Personajes surtidos según existencias)',
        img: 'https://sgfm.elcorteingles.es/SGFM/dctm/MEDIA03/202010/02/00118630601377____18__600x600.jpg',
        brand: 'FONT VELLA',
        price: '12.99€',
      },
      {
        name: 'CHUFI Original horchata de chufa botella 1 l',
        img: 'https://sgfm.elcorteingles.es/SGFM/dctm/MEDIA03/201906/17/00118644000053____1__600x600.jpg',
        brand: 'CHUFI',
        price: '12.99€',
      },
      {
        name: 'FONT VELLA agua mineral natural botella 33 cl con tapón Sport (Personajes surtidos según existencias)',
        img: 'https://sgfm.elcorteingles.es/SGFM/dctm/MEDIA03/202102/19/00118630600080____24__1200x1200.jpg',
        brand: 'FONT VELLA',
        price: '12.99€',
      },
      {
        name: 'FONT VELLA KIDS agua mineral natural sin gas botella 33 cl (Personajes surtidos según existencias)',
        img: 'https://sgfm.elcorteingles.es/SGFM/dctm/MEDIA03/202010/02/00118630601377____18__600x600.jpg',
        brand: 'FONT VELLA',
        price: '12.99€',
      },
      {
        name: 'CHUFI Original horchata de chufa botella 1 l',
        img: 'https://sgfm.elcorteingles.es/SGFM/dctm/MEDIA03/201906/17/00118644000053____1__600x600.jpg',
        brand: 'CHUFI',
        price: '12.99€',
      },
      {
        name: 'DON SIMON horchata de chufa botella 1 l',
        img: 'https://sgfm.elcorteingles.es/SGFM/dctm/MEDIA03/201909/24/00118644000103____1__600x600.jpg',
        brand: 'DON SIMON',
        price: '12.99€',
      },
      {
        name: 'COCA-COLA ZERO Azúcar refresco de cola pack 24 lata 33 cl',
        img: 'https://sgfm.elcorteingles.es/SGFM/dctm/MEDIA03/202105/28/00118622500488____23__1200x1200.jpg',
        brand: 'COCA-COLA ZERO',
        price: '12.99€',
      },
      {
        name: 'PEPSI MAX Zero Azúcar refresco de cola pack 2 botella 2 l',
        img: 'https://sgfm.elcorteingles.es/SGFM/dctm/MEDIA03/202004/30/00118622400275____10__1200x1200.jpg',
        brand: 'PEPSI MAX',
        price: '12.99€',
      },
      {
        name: 'VOLL DAMM cerveza rubia extra doble malta con lúpulo aromático pack 12 botellas 25 cl',
        img: 'https://sgfm.elcorteingles.es/SGFM/dctm/MEDIA03/201906/11/00118602800809____1__600x600.jpg',
        brand: 'VOLL DAMM',
        price: '12.99€',
      },
      {
        name: 'FONT VELLA agua mineral natural botella 33 cl con tapón Sport (Personajes surtidos según existencias)',
        img: 'https://sgfm.elcorteingles.es/SGFM/dctm/MEDIA03/202102/19/00118630600080____24__1200x1200.jpg',
        brand: 'FONT VELLA',
        price: '12.99€',
      },
      {
        name: 'FONT VELLA KIDS agua mineral natural sin gas botella 33 cl (Personajes surtidos según existencias)',
        img: 'https://sgfm.elcorteingles.es/SGFM/dctm/MEDIA03/202010/02/00118630601377____18__600x600.jpg',
        brand: 'FONT VELLA',
        price: '12.99€',
      },
      {
        name: 'CHUFI Original horchata de chufa botella 1 l',
        img: 'https://sgfm.elcorteingles.es/SGFM/dctm/MEDIA03/201906/17/00118644000053____1__600x600.jpg',
        brand: 'CHUFI',
        price: '12.99€',
      },
      {
        name: 'FONT VELLA agua mineral natural botella 33 cl con tapón Sport (Personajes surtidos según existencias)',
        img: 'https://sgfm.elcorteingles.es/SGFM/dctm/MEDIA03/202102/19/00118630600080____24__1200x1200.jpg',
        brand: 'FONT VELLA',
        price: '12.99€',
      },
      {
        name: 'FONT VELLA KIDS agua mineral natural sin gas botella 33 cl (Personajes surtidos según existencias)',
        img: 'https://sgfm.elcorteingles.es/SGFM/dctm/MEDIA03/202010/02/00118630601377____18__600x600.jpg',
        brand: 'FONT VELLA',
        price: '12.99€',
      },
      {
        name: 'CHUFI Original horchata de chufa botella 1 l',
        img: 'https://sgfm.elcorteingles.es/SGFM/dctm/MEDIA03/201906/17/00118644000053____1__600x600.jpg',
        brand: 'CHUFI',
        price: '12.99€',
      },
      {
        name: 'DON SIMON horchata de chufa botella 1 l',
        img: 'https://sgfm.elcorteingles.es/SGFM/dctm/MEDIA03/201909/24/00118644000103____1__600x600.jpg',
        brand: 'DON SIMON',
        price: '12.99€',
      },
      {
        name: 'COCA-COLA ZERO Azúcar refresco de cola pack 24 lata 33 cl',
        img: 'https://sgfm.elcorteingles.es/SGFM/dctm/MEDIA03/202105/28/00118622500488____23__1200x1200.jpg',
        brand: 'COCA-COLA ZERO',
        price: '12.99€',
      },
      {
        name: 'PEPSI MAX Zero Azúcar refresco de cola pack 2 botella 2 l',
        img: 'https://sgfm.elcorteingles.es/SGFM/dctm/MEDIA03/202004/30/00118622400275____10__1200x1200.jpg',
        brand: 'PEPSI MAX',
        price: '12.99€',
      },
      {
        name: 'VOLL DAMM cerveza rubia extra doble malta con lúpulo aromático pack 12 botellas 25 cl',
        img: 'https://sgfm.elcorteingles.es/SGFM/dctm/MEDIA03/201906/11/00118602800809____1__600x600.jpg',
        brand: 'VOLL DAMM',
        price: '12.99€',
      },
      {
        name: 'FONT VELLA agua mineral natural botella 33 cl con tapón Sport (Personajes surtidos según existencias)',
        img: 'https://sgfm.elcorteingles.es/SGFM/dctm/MEDIA03/202102/19/00118630600080____24__1200x1200.jpg',
        brand: 'FONT VELLA',
        price: '12.99€',
      },
      {
        name: 'FONT VELLA KIDS agua mineral natural sin gas botella 33 cl (Personajes surtidos según existencias)',
        img: 'https://sgfm.elcorteingles.es/SGFM/dctm/MEDIA03/202010/02/00118630601377____18__600x600.jpg',
        brand: 'FONT VELLA',
        price: '12.99€',
      },
      {
        name: 'CHUFI Original horchata de chufa botella 1 l',
        img: 'https://sgfm.elcorteingles.es/SGFM/dctm/MEDIA03/201906/17/00118644000053____1__600x600.jpg',
        brand: 'CHUFI',
        price: '12.99€',
      },
    ];

    this.rawCategories = [
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

    if (this.$q.platform.is.desktop) {
      this.offerProducts = _.chunk(Object.values(this.rawProds), 5);
      this.categories = _.chunk(Object.values(this.rawCategories), 3);
    } else {
      this.offerProducts = _.chunk(Object.values(this.rawProds), 2);
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
  },
};
