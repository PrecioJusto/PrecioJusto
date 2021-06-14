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
        <q-toolbar-title @click="$router.replace('/')" class="q-toolbar-title cursor-pointer customBold col-3">
          <q-avatar class="q-avatar q-mr-sm">
            <img src="../../../public/icons/favicon-128x128.png" />
          </q-avatar>
          Precio Justo
        </q-toolbar-title>
        <div class="col-4 searcher">
          <SearchBar />
        </div>
        <div class="col-5 menu">
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
