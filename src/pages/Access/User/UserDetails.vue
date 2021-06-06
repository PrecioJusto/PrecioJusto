<template>
  <div>
    <q-page class="flex row">
        <div id="center">
          <h1>Your profile</h1>
              <q-form
              id="formIn"
              @submit="onSubmit"
              class="q-gutter-md">
              <q-input
                dense
                v-model="name"
                label="Nombre"
                @blur="$v.name.$touch"
                :error="$v.name.$error"
                :error-message="vuelidateMsg('name')"
                ></q-input>

              <q-input
                dense
                v-model="surname"
                label="Apellido"
                @blur="$v.surname.$touch"
                :error="$v.surname.$error"
                :error-message="vuelidateMsg('surname')"
                ></q-input>

              <q-input
                dense
                type="email"
                v-model="email"
                label="Email"
                @blur="$v.email.$touch"
                :error="$v.email.$error"
                :error-message="vuelidateMsg('email')"
                ></q-input>

              <q-input
                dense
                type="password"
                v-model="password"
                label="Nueva Contraseña"
                hint="Debe contener 1 letra mayuscula y 1 un número"
                @blur="$v.password.$touch"
                :error="$v.password.$error"
                :error-message="vuelidateMsg('password')"
                ></q-input>

              <q-input
                dense
                type="password"
                v-model="actualPassword"
                label="Contraseña actual"
                hint="Las contraseñas deben coincidir"
                @blur="$v.confirmPassword.$touch"
                :error="$v.confirmPassword.$error"
                :error-message="vuelidateMsg('confirmPassword')"
              >
              </q-input>
                <q-btn label="Actualizar perfil" type="submit" color="primary" rounded/>
            </q-form>
        </div>
    </q-page>
  </div>
</template>

<script src='./UserDetails.js'></script>
<style scoped lang="scss" src="./UserDetails.scss"></style>
