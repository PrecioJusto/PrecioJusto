export default {
  name: 'ProductCard',
  props: {
    product: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      productName: '',
      productPrice: '',
      productImg: '',
      productBrand: '',
      cartCounter: 0,
    };
  },
  created() {
    console.log(this.product);
    this.skeleton = false;
    this.productName = this.product.name;
    this.productPrice = this.product.price;
    this.productImg = this.product.img;
    this.productBrand = this.product.brand;
  },
  methods: {
    productDetail() {

    },
  },
};
