<template>
  <div>
      <q-page class="flex row">
        <div id="center">
          <div id="form-container">
            <q-btn no-caps rounded>
              <img src="https://developers.google.com/identity/images/g-logo.png">
              <div>Google account</div>
              </q-btn>
            <q-btn no-caps color="blue-8" rounded>
              <img src="https://cdn3.iconfinder.com/data/icons/capsocial-round/500/facebook-512.png">
              <div>Facebook account</div>
            </q-btn>
            <q-btn no-caps color="cyan-14" rounded>
              <img src="https://www.pngkey.com/png/full/2-27646_twitter-logo-png-transparent-background-logo-twitter-png.png">
              <div>Twitter account</div>
            </q-btn>
            <p class="q-my-lg">O entra con tu cuenta de Precio Justo:</p>
            <q-form id="formIn" @submit="onSubmit" class="q-gutter-md">
              <q-input
                dense
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
                label="Contraseña"
                hint="Debe contener 1 letra mayuscula y 1 número"
                @blur="$v.password.$touch"
                :error="$v.password.$error"
                :error-message="vuelidateMsg('password')"
                ></q-input>
                <q-btn label="Entra" type="submit" color="primary" no-caps rounded/>
            </q-form>
            <div id="redirection">
              ¿Aún no tienes una cuenta? <span  @click="$router.push('/register')">Regístrate</span>
            </div>
          </div>
        </div>
    </q-page>
  </div>
</template>

<script src='./Login.js'></script>
<style scoped lang="scss" src="./Login.scss"></style>
