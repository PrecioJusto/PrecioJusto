export default {
  name: 'OptionsAsideComponent',
  props: {
  },
  data() {
    return {
      left: false,
      menuList: [
        {
          label: 'Mis datos', icon: 'las la-id-card', separator: true, route: '/usuario',
        },
        {
          label: 'Notificaciones', icon: 'las la-bell', separator: true, route: '/usuario/ajustes/notificaciones',
        },
        {
          label: 'Carritos',
          icon: 'las la-shopping-cart',
          separator: true,
          route: '/usuario/carritos',
        },
        {
          label: 'Productos favoritos',
          icon: 'lar la-heart',
          separator: true,
          route: '/usuario/favoritos',
        },
        {
          label: 'Sobre Nosotros',
          icon: 'las la-info-circle',
          separator: true,
          route: '/sobrenosotros',
        },
        {
          label: 'Contactanos',
          icon: 'las la-hashtag',
          separator: true,
          route: '/contacto',
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
      this.$q.localStorage.remove('auth_token');
      this.$q.localStorage.remove('user_cart');
      this.$q.localStorage.remove('user');
      this.$router.push({ path: '/' });
    },
  },
};
