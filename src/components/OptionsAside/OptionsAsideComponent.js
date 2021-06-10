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
          label: 'Cerrar sesión',
          icon: 'las la-sign-out-alt',
          separator: true,
          route: '',
        },
      ],
    };
  },
  methods: {
    signOut() {

    },
  },
};
