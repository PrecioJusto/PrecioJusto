<template>
<q-layout view="hHh LpR fff">
    <!-- DESKTOP HEADER -->
    <q-header
      id="mainLayoutHeader"
      reveal
      v-if="!$q.platform.is.mobile"
      elevated
      class="bg-white text-secondary"
    >
      <q-toolbar class="q-toolbar row">
        <q-toolbar-title class="q-toolbar-title customBold col-3">
          <q-avatar class="q-avatar q-mr-sm">
            <img src="https://cdn.quasar.dev/logo/svg/quasar-logo.svg" />
          </q-avatar>
          Precio Justo
        </q-toolbar-title>
        <div class="col-12 menu">
          <MenuBar />
        </div>
      </q-toolbar>
    </q-header>
    <OptionsAsideComponent />

    <q-page-container>
      <router-view />
    </q-page-container>

    <q-footer v-if="$q.platform.is.mobile">
      <MenuBar />
    </q-footer>
  </q-layout>
</template>
<script src="./UserLayout.js"></script>
<style scoped lang="scss" src="./UserLayout.scss"></style>
