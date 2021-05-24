<template>
  <q-layout view="lHh lpR fff">
    <q-header id="mainLayoutHeader" reveal v-if="$q.platform.is.desktop" elevated class="bg-white text-secondary">
      <q-toolbar class="q-toolbar row">
        <q-toolbar-title class="q-toolbar-title customBold col-3">
          <q-avatar class="q-avatar q-mr-sm">
              <img src="https://cdn.quasar.dev/logo/svg/quasar-logo.svg">
          </q-avatar>
          Precio Justo
        </q-toolbar-title>
        <div class="col-6 searcher">
          <q-input rounded standout="bg-primary text-white searcher-input" v-model="searchText" label="¿Qué producto estás buscando?" class="q-ml-md">
          <template v-slot:append>
            <q-icon v-if="searchText === ''" name="search" />
            <q-icon v-else name="clear" class="cursor-pointer" @click="searchText = ''" />
          </template>
        </q-input>
        </div>
        <div class="align-right col-3">
          <ul class="ul-align-right">
            <li class="q-mx-xs">
                <q-btn flat icon="ion-cart" label="Carrito" stack />
            </li>
            <li class="q-mx-xs">
              <q-btn flat icon="ion-heart" label="Favoritos" stack />
            </li>
            <li class="q-mx-xs">
              <q-btn flat icon="ion-contact" label="Cuenta" stack />
            </li>
            <li></li>
          </ul>
        </div>
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>

    <q-footer v-if="!$q.platform.is.cordova" id="mainLayoutFooter" class="bg-grey-8 text-white">
      <q-toolbar>
        <q-toolbar-title>
          <q-avatar>
            <img src="https://cdn.quasar.dev/logo/svg/quasar-logo.svg">
          </q-avatar>
          Title
        </q-toolbar-title>
      </q-toolbar>
    </q-footer>

  </q-layout>
</template>

<script src="./MainLayout.js"></script>
<style scoped lang="scss" src="./MainLayout.scss"></style>
