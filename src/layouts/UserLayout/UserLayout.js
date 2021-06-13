import MenuBar from 'src/components/MenuBar/MenuBar.vue';
import OptionsAsideComponent from 'src/components/OptionsAside/OptionsAsideComponent.vue';
import { userRepository } from 'src/core/Areas/User/UserRepository.js';

export default {
  name: 'UserLayout',
  components: { MenuBar, OptionsAsideComponent },
  data() {
    return {
      leftDrawerOpen: false,
    };
  },
  async created() {
    const token = this.$q.localStorage.getItem('auth_token');
    const user = this.$q.localStorage.getItem('user');
    if (token === null) {
      this.$router.push({ path: '/' });
    } else if (user === null) {
      const userProfile = await userRepository.getProfile();
      this.$q.localStorage.set('user', userProfile.data);
    }
  },
};
