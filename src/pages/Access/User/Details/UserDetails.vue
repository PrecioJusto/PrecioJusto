<template>
  <div>
    <q-page>
        <div id="center">
          <h1>Mis datos personales</h1>
              <q-form
              id="formIn"
              @submit="onSubmit"
              class="q-gutter-md">
              <profile-image :value="userImage" :width="width" :height="height" v-on:input="onImageSet"></profile-image>
              <q-input
                dense
                v-model="name"
                label="Nombre"
                @blur="$v.name.$touch"
                :error="$v.name.$error"
                :error-message="vuelidateMsg('name')"
                ><template v-slot:prepend><q-icon name="las la-user" /></template>
                </q-input>

              <q-input
                dense
                v-model="surname"
                label="Apellido"
                @blur="$v.surname.$touch"
                :error="$v.surname.$error"
                :error-message="vuelidateMsg('surname')"
                ><template v-slot:prepend><q-icon name="las la-user" /></template>
                </q-input>

              <q-input
                dense
                type="email"
                v-model="email"
                label="Email"
                @blur="$v.email.$touch"
                :error="$v.email.$error"
                :error-message="vuelidateMsg('email')"
                ><template v-slot:prepend><q-icon name="las la-at" /></template>
                </q-input>

                <q-input
                dense
                type="tel"
                v-model="phone"
                label="Teléfono"
                @blur="$v.phone.$touch"
                :error="$v.phone.$error"
                :error-message="vuelidateMsg('phone')"
                ><template v-slot:prepend><q-icon name="las la-mobile" /></template>
                </q-input>

              <p>Género:</p>
              <div class="q-gutter-sm">
                <q-radio v-model="gender" val="hombre" label="Hombre" />
                <q-radio v-model="gender" val="mujer" label="Mujer" />
                <q-radio v-model="gender" val="nodefinido" label="Prefiero no decirlo" />
              </div>
              <q-input
                dense
                type="password"
                v-model="password"
                label="Nueva Contraseña"
                hint="Debe contener 1 letra mayuscula y 1 un número"
                @blur="$v.password.$touch"
                :error="$v.password.$error"
                :error-message="vuelidateMsg('password')"
                ><template v-slot:prepend><q-icon name="las la-lock" /></template>
                </q-input>

              <q-input
                dense
                type="password"
                v-model="confirmPassword"
                label="Confirmar contraseña"
                hint="Las contraseñas deben coincidir"
                @blur="$v.confirmPassword.$touch"
                :error="$v.confirmPassword.$error"
                :error-message="vuelidateMsg('confirmPassword')"
              ><template v-slot:prepend><q-icon name="las la-lock" /></template>
              </q-input>
                <q-btn label="Actualizar perfil" type="submit" color="primary" rounded/>
            </q-form>
        </div>
    </q-page>
  </div>
</template>

<script src='./UserDetails.js'></script>
<style scoped lang="scss" src="./UserDetails.scss"></style>
