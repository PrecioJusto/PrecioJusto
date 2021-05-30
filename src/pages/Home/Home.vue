<template>
  <div>
      <q-page class="flex flex-center">
      <!-- MOBILE HEADER -->
      <q-header id="mainLayoutHeader" reveal v-if="$q.platform.is.mobile" class="bg-white text-secondary q-py-sm">
        <q-toolbar class="q-toolbar">
          <q-toolbar-title class="q-toolbar-title">
            <q-avatar class="q-avatar q-mr-sm">
                <img class="category-img" src="https://cdn.quasar.dev/logo/svg/quasar-logo.svg">
            </q-avatar>
          </q-toolbar-title>
        </q-toolbar>
      </q-header>
      <CategoryCard :category="category" :forHomePage="true" />
      <CategoryCard :category="category" :forHomePage="true" />
      <CategoryCard :category="category" :forHomePage="false" />
      <CategoryCard :category="category" :forHomePage="false" />
    </q-page>
  </div>
</template>

<script src='./Home.js'></script>
<style scoped lang="scss" src="./Home.scss"></style>
