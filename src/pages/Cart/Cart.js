import CartComponent from 'src/components/CartComponent/CartComponent.vue';

export default {
  name: 'Cart',
  components: { CartComponent },
  data() {
    return {
      temporalCart: false,
      cartProducts: null,
    };
  },
  async created() {
    if (this.$route.params.idcarrito) {
      this.temporalCart = false;
    } else {
      this.temporalCart = true;
    }
  },
  methods: {
  },
};
