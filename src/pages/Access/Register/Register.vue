<template>
  <div>
    <q-page>
       <q-form
        id="formIn"
        @submit="onSubmit"
        class="q-gutter-md"
      >
        <q-input
          :dense="dense"
          v-model="name"
          label="Nombre"
          @blur="$v.name.$touch"
          :error="$v.name.$error"
          :error-message="vuelidateMsg('name')"
          ></q-input>

        <q-input
          :dense="dense"
          v-model="surname"
          label="Apellido"
          @blur="$v.surname.$touch"
          :error="$v.surname.$error"
          :error-message="vuelidateMsg('surname')"
          ></q-input>

        <q-input
          :dense="dense"
          type="email"
          v-model="email"
          label="Email"
          @blur="$v.email.$touch"
          :error="$v.email.$error"
          :error-message="vuelidateMsg('email')"
          ></q-input>

        <q-input
          :dense="dense"
          type="password"
          v-model="password"
          label="Contraseña"
          hint="Debe contener 1 letra mayuscula y 1 un número"
          @blur="$v.password.$touch"
          :error="$v.password.$error"
          :error-message="vuelidateMsg('password')"
          ></q-input>

        <q-input
          :dense="dense"
          type="password"
          v-model="confirmPassword"
          label="Confirmar contraseña"
          hint="Las contraseñas deben coincidir"
          @blur="$v.confirmPassword.$touch"
          :error="$v.confirmPassword.$error"
          :error-message="vuelidateMsg('confirmPassword')"
        >
        </q-input>
          <q-btn label="Registrarse" type="submit" color="primary"/>
      </q-form>
      <div id="redirection">
        ¿Ya dispones de cuenta? <span  @click="$router.push('/login')">Log in</span>
      </div>
    </q-page>
  </div>
</template>

<script src='./Register.js'></script>
<style scoped lang="scss" src="./Register.scss"></style>
