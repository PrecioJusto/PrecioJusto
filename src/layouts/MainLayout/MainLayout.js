import EssentialLink from 'components/EssentialLink.vue';

export default {
  name: 'MainLayout',
  components: { EssentialLink },
  data() {
    return {
      leftDrawerOpen: false,
      left: false,
      searchText: '',
    };
  },
};
