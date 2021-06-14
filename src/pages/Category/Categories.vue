<template>
  <div>
    <h2 class="flex justify-center">Categorias</h2>
    <q-page>
      <q-header id="mainLayoutHeader" reveal v-if="$q.platform.is.mobile" class="bg-white text-secondary q-pa-sm">
        <SearchBar class="search-bar" />
      </q-header>
      <div id="categoriesContainer" class="flex row wrap justify-center">
        <CategoryCard class="categoriesCard" v-for="cat in currentCategories" :key="cat.catename" :category="cat" :color="cat.colorClass" :forHomePage="false"/>
      </div>
    </q-page>
    <div class="q-pa-lg flex flex-center">
      <q-pagination
        v-model="current"
        :max="max"
        :max-pages="6"
        direction-links
      />
    </div>
  </div>
</template>

<script src='./Categories.js'></script>
<style scoped lang="scss" src="./Categories.scss"></style>
