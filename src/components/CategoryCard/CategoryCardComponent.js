export default {
  name: 'CategoryCard',
  props: {
    category: {
      type: Object,
      required: true,
    },
    forHomePage: {
      type: Boolean,
      required: true,
    },
  },
  data() {
    return {
      categoryName: '',
      categoryColor: '',
      categoryImg: '',
      cardMode: '',
    };
  },
  created() {
    this.categoryName = this.category.name;
    this.categoryColor = this.category.color;
    this.categoryImg = this.category.img;
    this.cardMode = (this.forHomePage) ? 'home-page' : 'explore-page';
  },
  methods: {
    categoryDetail() {
    },
  },
};
