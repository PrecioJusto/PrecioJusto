import { userRepository } from 'src/core/Areas/User/UserRepository.js';
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
      minLength: minLength(8),
      maxLength: maxLength(20),
      sameAs: sameAs(function checkPass() {
        const matcher = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/g;
        if (matcher.test(this.password)) return this.password;
        return false;
      }),
    },
    email: { required, email },
  },
  methods: {
    async onSubmit() {
      if (
        !this.$v.password.$error
        && !this.$v.email.$error
        && this.password !== ''
        && this.email !== ''
      ) {
        const register = await userRepository.login({ useremail: this.email, userpass: this.password });
        console.log(register);
        if (!register.data.messageError) {
          this.$q.localStorage.set('auth_token', register.data.token);
          this.$q.localStorage.set('user', register.data.user);
          // this.$router.push({ path: '/' });
        }
      }
    },
    redirectGoogle() {

    },
    redirectTwitter() {

    },
    redirectFacebook() {

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
