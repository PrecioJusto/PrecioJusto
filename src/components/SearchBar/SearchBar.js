export default {
  name: 'SearchBar',
  data() {
    return {
      value: '',
    };
  },
  methods: {
    submit() {
      if (this.value.length > 0) {
        this.$router.push(`/search/${this.value}`);
      } else {
        this.$router.push('/');
      }
    },
  },
};
