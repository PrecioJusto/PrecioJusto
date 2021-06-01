<template>
  <div>
      <q-page class="flex column">
        <div id="left"></div>
        <div id="right">
          <q-form id="formIn" @submit="onSubmit" class="q-gutter-md">
            <q-input
              stack-label
              :dense="dense"
              v-model="email"
              label="Email"
              @blur="$v.email.$touch"
              :error="$v.email.$error"
              :error-message="vuelidateMsg('email')"
              ><template v-slot:append>
                <q-icon :name="matLocalPostOffice" /> </template
            ></q-input>

            <q-input
              stack-label
              :dense="dense"
              type="password"
              v-model="password"
              label="Contraseña"
              hint="Debe contener 1 letra mayuscula y 1 número"
              @blur="$v.password.$touch"
              :error="$v.password.$error"
              :error-message="vuelidateMsg('password')"
              ><template v-slot:append> <q-icon :name="matPassword" /> </template
            ></q-input>
              <q-btn label="Submit" type="submit" color="primary"/>
          </q-form>
          <div id="redirection">
            ¿No dispones de una cuenta? <span  @click="$router.push('/register')">Registrate</span>
          </div>
        </div>
    </q-page>
  </div>
</template>

<script src='./Login.js'></script>
<style scoped lang="scss" src="./Login.scss"></style>
