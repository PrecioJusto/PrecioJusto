<template>
  <q-page class="flex flex-center">
    <!-- MOBILE HEADER -->
    <q-header id="mainLayoutHeader" reveal v-if="$q.platform.is.mobile" class="bg-white text-secondary q-py-sm">
      <q-toolbar class="q-toolbar">
        <q-toolbar-title class="q-toolbar-title">
          <q-avatar class="q-avatar q-mr-sm">
              <img src="https://cdn.quasar.dev/logo/svg/quasar-logo.svg">
          </q-avatar>
        </q-toolbar-title>
      </q-toolbar>
    </q-header>
    Holo
  </q-page>
</template>

<script src='./Index.js'></script>
<style scoped lang="scss" src="./Index.scss"></style>
