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
      categoryImg: '',
      cardMode: '',
      color: '',
    };
  },
  created() {
    this.categoryName = this.formatCategoryName(this.category.catename);
    this.categoryImg = this.category.cateimg;
    this.cardMode = (this.forHomePage) ? 'home-page' : 'explore-page';
    this.color = this.category.colorClass;
  },
  methods: {
    categoryDetail() {
    },
    formatCategoryName(str) {
      return str.charAt(0).toUpperCase() + str.slice(1).replaceAll('_', ' ');
    },
  },
};
