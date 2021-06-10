import { userRepository } from 'src/core/Areas/User/UserRepository.js';

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
      minLength: minLength(8),
      maxLength: maxLength(20),
      sameAs: sameAs(function checkPass() {
        const matcher = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/g;
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
        && this.name !== ''
        && this.surname !== ''
        && this.email !== ''
        && this.password !== ''
        && this.confirmPassword !== ''
      ) {
        const user = userRepository.register({
          username: this.name, usersurname: this.surname, useremail: this.email, userpass: this.password, userpassrepeat: this.confirmPassword,
        });
        if (!user.messageError) {
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
          return 'La contraseña no es valida, debe contener 1 mayuscula, 1 carácter especial y 1 número.';
        }
        if (!this.$v.password.minLength) { return 'La contraseña no es valida.La longitud minima es de 8 caracteres.'; }
        return 'La contraseña no es valida.La longitud máxima es de 20 caracteres.';
      }
      if (type === 'confirmPassword') {
        if (!this.$v.confirmPassword.required) return 'Campo requerido.';
        if (!this.$v.confirmPassword.sameAs) return 'Las contraseñas no coinciden.';
      }
      if (!this.$v.email.required) return 'Campo requerido.';
      return 'El email no es valido. introduce un nuevo Email';
    },
  },
};
