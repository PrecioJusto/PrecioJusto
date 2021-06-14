import { userRepository } from 'src/core/Areas/User/UserRepository.js';

export default {
  name: 'PageAboutUs',
  data() {
    return {
      carts: null,
    };
  },
  async created() {
    const carts = await userRepository.getShoppingCartsByUser();
    if (carts.data.length > 0) this.carts = carts.data;
  },
  methods: {
    redirect(id) {
      this.$router.push(`/carrito/${id}`);
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
        this.carts = this.carts.filter((c) => c.shopid !== id);
        if (this.carts.length === 0) this.carts = null;
      }
    },
  },
};
