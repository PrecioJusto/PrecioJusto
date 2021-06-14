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
      prodcutId: 0,
      productName: '',
      productPrice: '',
      productImg: '',
      productBrand: '',
      cartCounter: 0,
    };
  },
  created() {
    this.skeleton = false;
    this.prodcutId = this.product.id;
    this.productName = this.product.name;
    this.productPrice = this.product.price;
    this.productImg = this.product.img;
    this.productBrand = this.product.brand;
  },
  methods: {
    productDetail() {
      this.$router.push(`/producto/${this.product.id}`);
    },
    cartAdd() {
      this.cartCounter += 1;
      const cart = this.$q.localStorage.getItem('user_cart');
      const productAllreadyAdded = cart.products.filter((p) => { if (p.prodid === this.product.id) return p; return null; });
      if (productAllreadyAdded.length !== 0) {
        cart.products.forEach((p) => {
          if (p.prodid === this.product.id) p.prodquant = this.cartCounter;
        });
      } else {
        cart.products.push({ prodid: this.product.id, prodquant: this.cartCounter });
      }
      this.$q.localStorage.set('user_cart', cart);
    },
    cartRemove() {
      this.cartCounter -= 1;
      const cart = this.$q.localStorage.getItem('user_cart');
      cart.products.forEach((p) => {
        if (p.prodid === this.product.id) {
          if (p.prodquant === 1) cart.products = cart.products.filter((p2) => p2 !== p);
          else p.prodquant = this.cartCounter;
        }
      });
      this.$q.localStorage.set('user_cart', cart);
    },
  },
};
