export default {
  name: 'PageAboutUs',
  data() {
    return {
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
  created() {
  },
  methods: {
    signOut() {
      this.$q.localStorage.remove('auth_token');
      this.$q.localStorage.remove('user');
      this.$router.push({ path: '/' });
    },
  },
};
