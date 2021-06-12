import { userRepository } from 'src/core/Areas/User/UserRepository.js';

export default {
  name: 'OptionsAsideComponent',
  props: {
  },
  data() {
    return {
      left: false,
      menuList: [
        {
          label: 'Mis datos', icon: 'las la-id-card', separator: true, route: '/user',
        },
        {
          label: 'Notificaciones', icon: 'las la-bell', separator: true, route: '/user/settings/notifications',
        },
        {
          label: 'Carritos',
          icon: 'las la-shopping-cart',
          separator: true,
          route: '/user/carts',
        },
        {
          label: 'Productos favoritos',
          icon: 'lar la-heart',
          separator: true,
          route: '/user/products',
        },
        {
          label: 'Sobre Nosotros',
          icon: 'las la-info-circle',
          separator: true,
          route: '/about',
        },
        {
          label: 'Contactanos',
          icon: 'las la-hashtag',
          separator: true,
          route: '/contact',
        },
        {
          label: 'Cerrar sesión',
          icon: 'las la-sign-out-alt',
          separator: true,
          route: '',
        },
      ],
    };
  },
  async created() {
    const token = this.$q.localStorage.getItem('auth_token');
    const user = this.$q.localStorage.getItem('user');
    if (token === null) {
      this.$router.push({ path: '/' });
    } else if (user === null) {
      const userProfile = await userRepository.getProfile();
      this.$q.localStorage.set('user', userProfile.data);
    }
  },
  methods: {
    signOut() {
      this.$q.localStorage.remove('auth_token');
      this.$q.localStorage.remove('user');
      this.$router.push({ path: '/' });
    },
  },
};
