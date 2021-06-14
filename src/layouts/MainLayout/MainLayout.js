import SearchBar from 'src/components/SearchBar/SearchBar.vue';
import MenuBar from 'src/components/MenuBar/MenuBar.vue';

export default {
  name: 'MainLayout',
  components: { SearchBar, MenuBar },
  data() {
    return {
      leftDrawerOpen: false,
      left: false,
      right: true,
      searchText: '',
    };
  },
};
