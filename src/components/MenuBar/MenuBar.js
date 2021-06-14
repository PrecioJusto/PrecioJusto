export default {
  name: 'MenuBar',
  data() {
    return {
      tab: '',
      token: this.$q.localStorage.getItem('auth_token'),
    };
  },
  methods: {
    user() {
      if (this.$router.currentRoute.fullPath !== '/usuario' && !this.$q.platform.is.mobile) {
        this.$router.push({ path: '/usuario' });
      } else if (this.$router.currentRoute.fullPath !== '/usuario/movil' && this.$q.platform.is.mobile) {
        this.$router.push({ path: '/usuario/movil' });
      }
    },
  },
};
