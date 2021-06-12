import {
  required,
  sameAs,
  email,
  minLength,
  maxLength,
  numeric,
} from 'vuelidate/lib/validators';

import ProfileImage from 'src/components/ProfileImage/ProfileImage';
import { userRepository } from 'src/core/Areas/User/UserRepository';

export default {
  name: 'PageUserDetails',
  components: {
    ProfileImage,
  },
  data() {
    return {
      name: '',
      surname: '',
      email: '',
      password: '',
      confirmPassword: '',
      userImage: '',
      gender: 'nodefinido',
      phone: '',
      width: 230,
      height: 230,
    };
  },
  async created() {
    if (this.$q.platform.is.mobile) {
      this.width = 170;
      this.height = 170;
    }
    const user = await userRepository.getProfile();
    this.name = user.data.username;
    this.surname = user.data.usersurname;
    this.email = user.data.useremail;
    this.userImage = user.data.userImage;
    if (user.data.usergender) {
      this.gender = user.data.usergender;
    }
    this.phone = user.data.userphone;
  },
  validations: {
    name: { required, minLength: minLength(3), maxLength: maxLength(20) },
    surname: { required, minLength: minLength(3), maxLength: maxLength(100) },
    phone: { minLength: minLength(9), maxLength: maxLength(9), numeric },
    password: {
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
      ) {
        console.log(this.userImage);
      }
    },
    onImageSet(image) {
      this.userImage = image;
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
          return 'La contraseña no es valida, debe contener una mayuscula 1 y 1 número.';
        }
        if (!this.$v.password.minLength) { return 'La contraseña no es valida.La longitud minima es de 6 caracteres.'; }
        return 'La contraseña no es valida.La longitud máxima es de 8 caracteres.';
      }
      if (type === 'confirmPassword') {
        if (!this.$v.confirmPassword.required) return 'Campo requerido.';
        if (!this.$v.confirmPassword.sameAs) return 'Las contraseñas no coinciden.';
      }
      if (type === 'phone') {
        if (!this.$v.phone.numeric) return 'Solo puede contener numeros.';
        return 'El numero de telefono no es valido, debe de ser de 9 digitos.';
      }
      if (!this.$v.email.required) return 'Campo requerido.';
      return 'El email no es valido. introduce un nuevo Email.';
    },
  },
};
