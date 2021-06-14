// import { productRepository } from 'src/core/Areas/Products/ProductRepository.js';
import { userRepository } from 'src/core/Areas/User/UserRepository.js';

export default {
  name: 'PageAboutUs',
  data() {
    return {
      carts: null,
      last: '',
    };
  },
  async created() {
    const carts = await userRepository.getShoppingCartsByUser();
    this.carts = carts.data;
    this.last = carts.data[carts.data.length - 1].shopid;
  },
  methods: {
    redirect(id) {
      this.$router.push(`/cart/${id}`);
    },
    async deleteCart(id, name) {
      const response = await userRepository.deleteShoppingCart({ shopid: id });
      if (response.status === 200) {
        this.$q.notify(
          {
            type: 'positive',
            message: `El carrito con el nombre "${name}" se ha borrado correctamente`,
          },
        );
        const carts = await userRepository.getShoppingCartsByUser();
        this.carts = carts.data;
      }
    },
  },
};
