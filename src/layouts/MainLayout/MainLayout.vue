<template>
  <q-layout view="lHh lpR fff">
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
        <div class="col-6 searcher">
          <SearchBar />
        </div>
        <div class="col-3 menu">
          <MenuBar />
        </div>
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>

    <q-footer v-if="$q.platform.is.mobile">
      <MenuBar />
    </q-footer>
  </q-layout>
</template>

<script src="./MainLayout.js"></script>
<style scoped lang="scss" src="./MainLayout.scss"></style>
