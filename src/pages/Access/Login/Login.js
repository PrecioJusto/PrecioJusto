// import { userRepository } from 'src/core/Areas/User/UserRepository.js';
import {
  required,
  sameAs,
  email,
  minLength,
  maxLength,
} from 'vuelidate/lib/validators';

export default {
  name: 'PageLogin',
  components: {},
  data() {
    return {
      email: '',
      password: '',
    };
  },
  created() {
  },
  validations: {
    password: {
      required,
      minLength: minLength(6),
      maxLength: maxLength(8),
      sameAs: sameAs(function checkPass() {
        const matcher = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z])/g;
        if (matcher.test(this.password)) return this.password;
        return false;
      }),
    },
    email: { required, email },
  },
  methods: {
    async onSubmit() {
      /* if (
        !this.$v.password.$error
        && !this.$v.email.$error
        && this.password != ''
        && this.email != ''
      ) {
        userRepository.login()
        const token = await loginUser(this.email, this.password);
        this.saveUser(token);
      } */
    },
    async saveUser() {
      /* if (token) {
        localStorage.setItem('logintoken', JSON.stringify(token));
        localStorage.setItem('userdata', JSON.stringify(await getUserData()));
        this.$router.push('/admin/partitures');
      } */
    },
    vuelidateMsg(type) {
      if (type === 'password') {
        if (!this.$v.password.required) return 'Campo requerido.';
        if (!this.$v.password.sameAs) {
          return 'Password is not valid, must contain 1 Capital leter and 1 number.';
        }
        if (!this.$v.password.minLength) { return 'Password is not valid. minimum lenght is 6 chars'; }
        return 'Password is not valid. maximum lenght is 8 chars';
      }
      if (!this.$v.email.required) return 'Campo requerido.';
      return 'Email is not valid. Enter a valid Email';
    },
  },
};
