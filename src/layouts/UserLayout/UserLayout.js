import MenuBar from 'src/components/MenuBar/MenuBar.vue';
import OptionsAsideComponent from 'src/components/OptionsAside/OptionsAsideComponent.vue';

export default {
  name: 'UserLayout',
  components: { MenuBar, OptionsAsideComponent },
  data() {
    return {
      leftDrawerOpen: false,
    };
  },
};
