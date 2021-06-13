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
    this.categoryName = this.category.name;
    this.categoryImg = this.category.img;
    this.cardMode = (this.forHomePage) ? 'home-page' : 'explore-page';
    this.color = this.category.colorClass;
    console.log(this.color);
  },
  mounted() {
    // const randomColor = colors[Math.floor(Math.random() * colors.length)];
    // console.log(randomColor);
    // document.querySelector('#cardItem').style.backgroundColor = randomColor;
  },
  methods: {
    categoryDetail() {
    },
  },
};
