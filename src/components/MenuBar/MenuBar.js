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
      if (this.$router.currentRoute.fullPath !== '/user' && !this.$q.platform.is.mobile) {
        this.$router.push({ path: '/user' });
      } else if (this.$router.currentRoute.fullPath !== '/user/mobile' && this.$q.platform.is.mobile) {
        this.$router.push({ path: '/user/mobile' });
      }
    },
  },
};
