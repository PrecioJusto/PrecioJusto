export default {
  name: 'SearchBar',
  data() {
    return {
      value: '',
    };
  },
  methods: {
    submit() {
      this.$router.push(`/search/${this.value}`);
    },
  },
};
