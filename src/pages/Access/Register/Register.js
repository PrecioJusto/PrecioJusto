// import { userRepository } from 'src/core/Areas/User/UserRepository.js';
import {
  required,
  sameAs,
  email,
  minLength,
  maxLength,
} from 'vuelidate/lib/validators';

export default {
  name: 'PageRegister',
  components: {},
  data() {
    return {
      name: '',
      surname: '',
      email: '',
      password: '',
      confirmPassword: '',
    };
  },
  created() {
  },
  validations: {
    name: { required, minLength: minLength(3), maxLength: maxLength(20) },
    surname: { required, minLength: minLength(3), maxLength: maxLength(100) },
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
    confirmPassword: {
      required,
      sameAsPassword: sameAs('password'),
    },
  },
  methods: {
    async onSubmit() {
      if (
        !this.$v.name.$error
        && !this.$v.surname.$error
        && !this.$v.email.$error
        && !this.$v.password.$error
        && !this.$v.confirmPassword.$error
        && this.username !== ''
        && this.email !== ''
        && this.password !== ''
        && this.confirmPassword !== ''
      ) {
        const user = null;
        /* userRepository.register();
          const user = await registerUser(
          this.username,
          this.email,
          this.password,
        ); */
        if (user.notifyType === 'SUCCESS') {
          this.$router.push({ path: '/login' });
        }
      }
    },
    vuelidateMsg(type) {
      if (type === 'name') {
        if (!this.$v.name.required) return 'Campo requerido.';
        if (!this.$v.name.minLength) { return 'La longitud minima del nombre es 3 caracteres.'; }
        return 'La longitud máxima del nombre es de 20 caracteres.';
      }
      if (type === 'surname') {
        if (!this.$v.surname.required) return 'Campo requerido.';
        if (!this.$v.surname.minLength) { return 'La longitud minima del apellido es 3 caracteres.'; }
        return 'La longitud máxima del apellido es de 100 caracteres.';
      }
      if (type === 'password') {
        if (!this.$v.password.required) return 'Campo requerido.';
        if (!this.$v.password.sameAs) {
          return 'Password is not valid, must contain 1 Capital leter and 1 number.';
        }
        if (!this.$v.password.minLength) { return 'Password is not valid. minimum lenght is 6 chars'; }
        return 'Password is not valid. maximum lenght is 8 chars';
      }
      if (type === 'confirmPassword') {
        if (!this.$v.confirmPassword.required) return 'Campo requerido.';
        if (!this.$v.confirmPassword.sameAs) return "Passwords don't match.";
      }
      if (!this.$v.email.required) return 'Campo requerido.';
      return 'Email is not valid. Enter a valid Email';
    },
  },
};
