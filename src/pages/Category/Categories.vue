<template>
  <div>
    <q-page>
      <q-header id="mainLayoutHeader" reveal v-if="$q.platform.is.mobile" class="bg-white text-secondary q-pa-sm">
        <SearchBar class="search-bar" />
      </q-header>
      <div id="categoriesContainer" class="flex row wrap justify-center">
        <CategoryCard class="categoriesCard" v-for="cat in categories" :key="cat.name" :category="cat" :color="cat.colorClass" :forHomePage="false"/>
      </div>
    </q-page>
  </div>
</template>

<script src='./Categories.js'></script>
<style scoped lang="scss" src="./Categories.scss"></style>
